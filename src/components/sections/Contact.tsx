"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let hasError = false;

    const newErrors = { name: "", email: "", message: "" };

    if (!name) {
      newErrors.name = "Name is required.";
      hasError = true;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }
    if (!message) {
      newErrors.message = "Message is required.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      e.preventDefault();
    }
  };

  const capitalizeEachWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const words = e.target.value
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    e.target.value = words.join(" ");
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
            >
              If you have a website or an application you are interested in
              developing, a brand that you need designed, or a project that
              needs coding, I’d love to help with it. Leave a message below and
              I will promptly get in touch.
            </motion.p>
          </div>

          <div className="form-container px-0 md:px-12 lg:px-24">
            <form
              action="https://formspree.io/f/xrgjwepv"
              method="POST"
              name="form"
              onSubmit={validateForm}
              className="flex flex-col gap-8 text-center"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  id="fname"
                  name="fullname"
                  maxLength={30}
                  placeholder="Your name?"
                  onInput={capitalizeEachWord}
                  className="flex-1 border-2 border-[var(--grey-color)] bg-transparent p-3 md:p-4 rounded-md focus:outline-none focus:border-[var(--shade-500)]"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address?"
                  className="flex-1 border-2 border-[var(--grey-color)] bg-transparent p-3 md:p-4 rounded-md focus:outline-none focus:border-[var(--shade-500)]"
                />
              </div>

              <textarea
                id="msg"
                name="message"
                maxLength={500}
                placeholder="Write your message here"
                className="flex-1 border-2 border-[var(--grey-color)] bg-transparent p-3 md:p-4 rounded-md focus:outline-none focus:border-[var(--shade-500)]"
              ></textarea>

              <input type="submit" value="Send Message" className="btn" />
            </form>

            <div className="error text-red-600 mt-4 text-sm text-center">
              {errors.name && <div id="nameError">{errors.name}</div>}
              {errors.email && <div id="emailError">{errors.email}</div>}
              {errors.message && <div id="messageError">{errors.message}</div>}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
