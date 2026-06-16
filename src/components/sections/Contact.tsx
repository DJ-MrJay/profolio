"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Container } from "../Container";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useState } from "react";

type FormValues = {
  fullname: string;
  email: string;
  message: string;
};

const CONTACT_FORM_ENDPOINT = "https://formcarry.com/s/MTj757WTopu";

const capitalizeEachWord = (value: string) => {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
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

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
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
      className="border-t border-[var(--border-color)] bg-[var(--surface-muted)] py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4">Have a build, redesign, or product idea?</h2>
            <p className="section-copy mt-5">
              Send the context and I will get back with a practical next step.
              I am best suited for responsive websites, product interfaces,
              CMS-backed launches, and design-to-code implementation.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-[var(--text-muted)]">
              <a
                href="mailto:hello@mrjay.co.ke"
                className="inline-flex w-fit items-center gap-3 rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3 transition-colors hover:border-[var(--accent-color)] hover:text-[var(--text-color)]"
              >
                <Mail aria-hidden="true" size={18} className="text-[var(--accent-color)]" />
                hello@mrjay.co.ke
              </a>
              <div className="inline-flex w-fit items-center gap-3 rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] px-4 py-3">
                <MapPin aria-hidden="true" size={18} className="text-[var(--accent-color)]" />
                Nairobi, Kenya / Remote-friendly
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[8px] border border-[var(--border-color)] bg-[var(--surface-color)] p-5 shadow-[0_16px_42px_var(--shadow-color)] md:p-7"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="fullname" className="text-sm font-bold">
                  Name
                </label>
                <Input
                  id="fullname"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.fullname)}
                  aria-describedby={errors.fullname ? "fullname-error" : undefined}
                  className="mt-2 min-h-12 border-[var(--border-color)] bg-[var(--background-color)] px-4 text-base focus-visible:border-[var(--focus-ring)] focus-visible:ring-[var(--focus-ring)]"
                  {...register("fullname", {
                    required: "Name is required.",
                    maxLength: {
                      value: 30,
                      message: "Please keep your name under 30 characters.",
                    },
                    onChange: (e) => {
                      const formatted = capitalizeEachWord(e.target.value);
                      setValue("fullname", formatted);
                    },
                  })}
                />
                {errors.fullname && (
                  <p id="fullname-error" className="mt-2 text-sm text-[#b42318]">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-bold">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="mt-2 min-h-12 border-[var(--border-color)] bg-[var(--background-color)] px-4 text-base focus-visible:border-[var(--focus-ring)] focus-visible:ring-[var(--focus-ring)]"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-[#b42318]">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-bold">
                Project context
              </label>
              <Textarea
                id="message"
                rows={7}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="mt-2 min-h-40 resize-y border-[var(--border-color)] bg-[var(--background-color)] px-4 py-3 text-base focus-visible:border-[var(--focus-ring)] focus-visible:ring-[var(--focus-ring)]"
                {...register("message", {
                  required: "Message is required.",
                  maxLength: {
                    value: 500,
                    message: "Please keep the message under 500 characters.",
                  },
                })}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm text-[#b42318]">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <ArrowRight aria-hidden="true" size={16} />
              </button>

              <p className="text-sm text-[var(--text-muted)]">
                Typical response: within one business day.
              </p>
            </div>

            <div className="mt-5 min-h-6 text-sm" role="status" aria-live="polite">
              {status === "success" && (
                <p className="text-[#027a48]">
                  Thank you. Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-[#b42318]">
                  Something went wrong. Please try again later.
                </p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
