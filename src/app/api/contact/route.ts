import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

function escapeHtml(unsafe: string) {
  return unsafe
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullname, email, message, token } = body || {};

    if (!fullname || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Verify reCAPTCHA if secret is present
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      if (!token) {
        return NextResponse.json({ error: 'reCAPTCHA token missing' }, { status: 400 });
      }

      const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(token)}`,
      });

      const verifyJson = await verifyRes.json();
      const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE ?? '0.5');

      if (!verifyJson.success || (typeof verifyJson.score === 'number' && verifyJson.score < minScore)) {
        return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: (process.env.SMTP_SECURE === 'true') || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const from = process.env.CONTACT_EMAIL_FROM || process.env.SMTP_USER || `no-reply@${process.env.SMTP_HOST ?? 'localhost'}`;
    const to = process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER;
    const subject = `New contact from ${fullname}`;
    const text = `${message}\n\nFrom: ${fullname} <${email}>`;
    const html = `<p>${escapeHtml(String(message)).replace(/\n/g, '<br/>')}</p><hr/><p>From: ${escapeHtml(String(fullname))} &lt;${escapeHtml(String(email))}&gt;</p>`;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Log on server only
    // eslint-disable-next-line no-console
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
