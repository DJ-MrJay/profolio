"use client";

import { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container } from "./Container";
import { AnimatePresence, easeInOut, motion, useReducedMotion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/navigation";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}

const MENU_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const MENU_ITEM_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
};

const getLinkHash = (href: string) => {
  const hashIndex = href.indexOf("#");
  return hashIndex >= 0 ? href.slice(hashIndex) : "";
};

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`relative inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.08em] transition-colors hover:text-[var(--accent-color)] ${
        isActive ? "text-[var(--accent-color)]" : "text-[var(--text-muted)]"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-1 left-0 h-0.5 bg-[var(--accent-color)] transition-all duration-200 ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [activeHash, setActiveHash] = useState("");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateActiveHash = () => {
      if (pathname === "/" || pathname === "/main") {
        setActiveHash(window.location.hash || "#home");
        return;
      }

      setActiveHash("");
    };

    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/main") {
      return;
    }

    const sections = NAV_LINKS.map((link) => {
      const hash = getLinkHash(link.href);
      return hash ? document.querySelector(hash) : null;
    }).filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHash(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border-color)] backdrop-blur-xl"
      style={{ height: "var(--navbar-height)" }}
    >
      <Container className="h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/" aria-label="Jonah Wambua home">
            <div className="flex justify-start">
              <Image
                src="/assets/images/jonahwambua.svg"
                alt="Jonah Wambua"
                width={500}
                height={300}
                className="h-4 w-auto logo object-left md:h-5"
                style={{
                  objectPosition: "left",
                  width: "auto",
                }}
              />
            </div>
          </Link>

          <div className="flex gap-8 items-center">
            <nav className="hidden md:flex gap-7" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isActive={activeHash === getLinkHash(link.href)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex size-11 items-center justify-center rounded-[8px] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--text-color)] md:hidden"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <X size={22} strokeWidth={1.8} />
                ) : (
                  <Menu size={22} strokeWidth={1.8} />
                )}
              </button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="inline-flex size-11 items-center justify-center rounded-[8px] text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--text-color)]"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <Sun size={20} strokeWidth={1.8} />
                ) : (
                  <Moon size={20} strokeWidth={1.8} />
                )}
              </button>

              <Link
                href="/#contact"
                className="btn-primary hidden items-center gap-2 md:inline-flex"
              >
                Start a project
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={shouldReduceMotion ? false : "initial"}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : "animate"}
            exit={shouldReduceMotion ? { opacity: 0 } : "exit"}
            variants={shouldReduceMotion ? undefined : MENU_VARIANTS}
            transition={shouldReduceMotion ? { duration: 0 } : undefined}
            className="mx-[5vw] mt-3 flex flex-col gap-2 rounded-[8px] border border-[var(--border-color)] p-4 shadow-2xl md:hidden"
            style={{
              backgroundColor: "var(--surface-color)",
              color: "var(--text-color)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <motion.div
                key={link.href}
                variants={shouldReduceMotion ? undefined : MENU_ITEM_VARIANTS}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex min-h-12 items-center rounded-[8px] px-3 text-lg font-bold uppercase tracking-[0.08em] hover:bg-[var(--surface-muted)] hover:text-[var(--accent-color)] ${
                    activeHash === getLinkHash(link.href)
                      ? "text-[var(--accent-color)]"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              variants={shouldReduceMotion ? undefined : MENU_ITEM_VARIANTS}
            >
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-4 inline-flex items-center gap-2"
              >
                Start a project
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </motion.div>

            <motion.div
              variants={shouldReduceMotion ? undefined : MENU_ITEM_VARIANTS}
              className="mt-4"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
