import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export const runtime = "nodejs";

const EMAIL_PATTERN = /\S+@\S+\.\S+/;
const MAX_NAME_LENGTH = 30;
const MAX_MESSAGE_LENGTH = 500;
const RECAPTCHA_ACTION = "contact_submit";
const DEFAULT_RECAPTCHA_MIN_SCORE = 0.5;
const DEFAULT_CONTACT_EMAIL = "contact@mrjay.co.ke";
const DEFAULT_SMTP_HOST = "mail.mrjay.co.ke";
const DEFAULT_SMTP_PORT = 587;

type ContactPayload = {
  fullname?: unknown;
  email?: unknown;
  message?: unknown;
  recaptchaToken?: unknown;
};

type ContactMessage = {
  fullname: string;
  email: string;
  message: string;
  recaptchaToken?: string;
};

type RecaptchaVerification = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

let transporter: ReturnType<typeof nodemailer.createTransport> | undefined;

const parseContactPayload = (payload: unknown): ContactMessage | null => {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const contactPayload = payload as ContactPayload;
  const fullname =
    typeof contactPayload.fullname === "string" ? contactPayload.fullname : "";
  const email =
    typeof contactPayload.email === "string" ? contactPayload.email : "";
  const message =
    typeof contactPayload.message === "string" ? contactPayload.message : "";
  const recaptchaToken =
    typeof contactPayload.recaptchaToken === "string"
      ? contactPayload.recaptchaToken
      : undefined;

  if (!fullname || fullname.length > MAX_NAME_LENGTH) {
    return null;
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return null;
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return null;
  }

  return { fullname, email, message, recaptchaToken };
};

const getRecaptchaMinScore = () => {
  const parsedScore = Number.parseFloat(
    process.env.RECAPTCHA_MIN_SCORE ?? String(DEFAULT_RECAPTCHA_MIN_SCORE)
  );

  return Number.isFinite(parsedScore)
    ? parsedScore
    : DEFAULT_RECAPTCHA_MIN_SCORE;
};

const verifyRecaptcha = async (token?: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return true;
  }

  if (!token) {
    console.warn("reCAPTCHA verification failed: missing token.");
    return false;
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  if (!response.ok) {
    console.warn("reCAPTCHA verification failed: siteverify request failed.", {
      status: response.status,
    });
    return false;
  }

  const verification = (await response.json()) as RecaptchaVerification;
  const verified =
    verification.success &&
    verification.action === RECAPTCHA_ACTION &&
    typeof verification.score === "number" &&
    verification.score >= getRecaptchaMinScore();

  if (!verified) {
    console.warn("reCAPTCHA verification failed.", {
      success: verification.success,
      score: verification.score,
      action: verification.action,
      expectedAction: RECAPTCHA_ACTION,
      minScore: getRecaptchaMinScore(),
      errorCodes: verification["error-codes"],
    });
  }

  return verified;
};

const getTransportOptions = (): SMTPTransport.Options | string => {
  if (process.env.SMTP_URL) {
    return process.env.SMTP_URL;
  }

  const port = Number.parseInt(
    process.env.SMTP_PORT ?? String(DEFAULT_SMTP_PORT),
    10
  );
  const smtpUser = process.env.SMTP_USER ?? DEFAULT_CONTACT_EMAIL;

  if (!process.env.SMTP_PASS) {
    throw new Error("Missing SMTP_PASS.");
  }

  return {
    host: process.env.SMTP_HOST ?? DEFAULT_SMTP_HOST,
    port: Number.isFinite(port) ? port : DEFAULT_SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user: smtpUser,
      pass: process.env.SMTP_PASS,
    },
  };
};

const getTransporter = () => {
  transporter ??= nodemailer.createTransport(getTransportOptions());
  return transporter;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getContactRecipient = () => {
  return (
    process.env.CONTACT_EMAIL_TO ??
    process.env.SMTP_USER ??
    DEFAULT_CONTACT_EMAIL
  );
};

const getContactSender = () => {
  return (
    process.env.CONTACT_EMAIL_FROM ??
    process.env.SMTP_USER ??
    DEFAULT_CONTACT_EMAIL
  );
};

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const contactMessage = parseContactPayload(payload);

    if (!contactMessage) {
      return NextResponse.json(
        { error: "Invalid contact form submission." },
        { status: 400 }
      );
    }

    const recaptchaOk = await verifyRecaptcha(contactMessage.recaptchaToken);

    if (!recaptchaOk) {
      return NextResponse.json(
        { error: "Unable to verify this contact form submission." },
        { status: 403 }
      );
    }

    const { fullname, email, message } = contactMessage;
    const safeName = fullname.replace(/[\r\n]/g, " ");
    const text = [
      `Name: ${fullname}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await getTransporter().sendMail({
      from: getContactSender(),
      to: getContactRecipient(),
      replyTo: {
        name: safeName,
        address: email,
      },
      subject: `Portfolio contact form message from ${safeName}`,
      text,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(fullname)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);

    return NextResponse.json(
      { error: "Unable to send contact form submission." },
      { status: 500 }
    );
  }
}
