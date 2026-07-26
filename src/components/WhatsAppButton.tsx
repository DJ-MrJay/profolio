"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const WHATSAPP_LINK = "https://wa.me/254735990330?text=Hi%20Jonah.%20I'm%20inquiring%20about%20your%20rates%20and%20services.%20Kindly%20get%20back%20to%20me.";
const SCROLL_THRESHOLD = 200;
const FOOTER_CLEARANCE = 100;

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const previousScrollY = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (pathname === "/") {
      setIsVisible(false);
      setIsFooterVisible(false);
      return;
    }

    previousScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > previousScrollY.current;

      setIsVisible(currentScrollY > SCROLL_THRESHOLD && isScrollingDown);
      previousScrollY.current = Math.max(currentScrollY, 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      return;
    }

    setIsFooterVisible(false);

    const footer = document.querySelector("footer");
    if (!footer) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/") {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Jonah Wambua on WhatsApp"
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 96, scale: 0.9 }
          }
          animate={
            prefersReducedMotion
              ? { opacity: 1, y: isFooterVisible ? -FOOTER_CLEARANCE : 0 }
              : {
                  opacity: 1,
                  y: isFooterVisible ? -FOOTER_CLEARANCE : 0,
                  scale: 1,
                }
          }
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 96, scale: 0.9 }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 0.28,
            ease: "easeOut",
          }}
          className="fixed bottom-5 right-5 z-[60] isolate flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background-color)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/50 animate-ping"
          />
          <Image
            src="/assets/whatsapp-icon.svg"
            alt=""
            width={44}
            height={44}
            className="h-12 w-12 sm:h-14 sm:w-14"
            priority={false}
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
