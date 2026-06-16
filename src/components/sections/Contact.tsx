"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ContainerNarrow } from "../ContainerNarrow";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "../Container";

type FormValues = {
  fullname: string;
  email: string;
  message: string;
};

const CONTACT_FORM_ENDPOINT = "/api/contact";
const RECAPTCHA_ACTION = "contact_submit";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const RECAPTCHA_SCRIPT_ID = "google-recaptcha-v3";
const MAX_RECAPTCHA_SUBMISSION_ATTEMPTS = 3;
let recaptchaScriptPromise: Promise<void> | undefined;

type RecaptchaWindow = Window & {
  grecaptcha?: {
    ready: (callback: () => void) => void;
    execute: (
      siteKey: string,
      options: { action: string }
    ) => Promise<string>;
  };
};

const capitalizeEachWord = (value: string) => {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const loadRecaptchaScript = async () => {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") {
    return;
  }

  if ((window as RecaptchaWindow).grecaptcha) {
    return;
  }

  recaptchaScriptPromise ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });
    document.head.appendChild(script);
  });

  await recaptchaScriptPromise;
};

const getRecaptchaToken = async () => {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") {
    return undefined;
  }

  await loadRecaptchaScript();

  const { grecaptcha } = window as RecaptchaWindow;

  if (!grecaptcha) {
    return undefined;
  }

  return new Promise<string>((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION })
        .then(resolve)
        .catch(reject);
    });
  });
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    void loadRecaptchaScript();
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      let res: Response | undefined;
      const maxAttempts = RECAPTCHA_SITE_KEY
        ? MAX_RECAPTCHA_SUBMISSION_ATTEMPTS
        : 1;

      for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
        const recaptchaToken = await getRecaptchaToken();
        res = await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ ...data, recaptchaToken }),
        });

        if (res.status !== 403) {
          break;
        }
      }

      if (res?.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-[10%] md:py-[5%]"
      style={{ backgroundColor: "var(--shade-100)" }}
    >
      <Container>
        <div className="space-y-8">
          <div className="mx-auto space-y-4 scroll-into-view">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Contacts
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              If you have a website or an application you are interested in
              developing, a brand that you need designed, or a project that
              needs coding, I’d love to help with it. Leave a message below and
              I will promptly get in touch.
            </motion.p>
          </div>
        </div>
      </Container>
      <ContainerNarrow>
        <div className="form-container pt-[10%] md:pt-[5%]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 text-center"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="text"
                placeholder="Your name?"
                className="flex-1 border-2 border-[var(--grey-color)] bg-transparent p-3 md:p-4 rounded-md focus:outline-none focus:border-[var(--shade-500)] placeholder:text-[18px]"
                {...register("fullname", {
                  required: "Name is required.",
                  maxLength: 30,
                  onChange: (e) => {
                    const formatted = capitalizeEachWord(e.target.value);
                    setValue("fullname", formatted);
                  },
                })}
              />
              <Input
                type="email"
                placeholder="Your email address?"
                className="flex-1 border-2 border-[var(--grey-color)] bg-transparent p-3 md:p-4 rounded-md focus:outline-none focus:border-[var(--shade-500)] placeholder:text-[18px]"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
            </div>

            <Textarea
              placeholder="Type your message"
              className="flex-1 border-2 border-[var(--grey-color)] bg-transparent p-3 md:p-4 rounded-md focus:outline-none focus:border-[var(--shade-500)] placeholder:text-[18px]"
              {...register("message", {
                required: "Message is required.",
                maxLength: 500,
              })}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-rounded self-start"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        <div className="mt-4 text-sm text-center">
          {errors.fullname && <div>{errors.fullname.message}</div>}
          {errors.email && <div>{errors.email.message}</div>}
          {errors.message && <div>{errors.message.message}</div>}

          {status === "success" && (
            <div className="mt-4">Thank you. Your message has been sent.</div>
          )}
          {status === "error" && (
            <div className="mt-4">
              Something went wrong. Please try again later.
            </div>
          )}
        </div>
      </ContainerNarrow>
    </section>
  );
}
