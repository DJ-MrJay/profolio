"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Sun, Moon, Equal, X } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container } from "./Container";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
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
    <a
      href={href}
      className={`relative text-sm uppercase tracking-wide transition-colors hover:text-[var(--shade-500)] group ${
        isActive ? "text-[var(--shade-500)] font-medium" : ""
      }`}
    >
      {children}
      {/* Growing underline */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--shade-500)] transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [activeHash, setActiveHash] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const previousScrollY = useRef(0);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  // Update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll direction detection (disabled on home page)
  const handleScroll = useCallback(() => {
    if (isHomePage) return;
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < previousScrollY.current || currentScrollY < 10);
    previousScrollY.current = currentScrollY;
  }, [isHomePage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Keep the active nav state aligned with the current section hash.
  useEffect(() => {
    if (isHomePage) return;
    const updateActiveHash = () => {
      if (pathname === "/main") {
        setActiveHash(window.location.hash || "#intro");
        return;
      }

      setActiveHash("");
    };

    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, [isHomePage, pathname]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHomePage ? 0 : isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        isHomePage ? "bg-transparent border-none" : ""
      } ${isHomePage ? "md:pr-4 md:pb-0.5" : ""}`}
      style={{
        backgroundColor: isHomePage ? "transparent" : "var(--background-color)",
        height: "var(--navbar-height)",
        color: "var(--text-color)",
        borderBottom: isHomePage ? "none" : `2px solid var(--shade-100)`,
      }}
    >
      <Container className="h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - hidden on home page */}
          <Link
            href="/"
            className={isHomePage ? "opacity-0 pointer-events-none" : ""}
            aria-hidden={isHomePage}
          >
            <div className="flex justify-start">
              <Image
                src="/assets/images/jonahwambua.svg"
                alt="Logo"
                width={500}
                height={300}
                className="h-4 sm:h-4 md:h-5 logo object-left"
                style={{
                  objectPosition: "left",
                  width: "auto",
                }}
              />
            </div>
          </Link>

          <div className="flex gap-8 items-center">
            {/* Desktop Navigation - hidden on home page */}
            <nav
              className={`hidden md:flex gap-8 ${
                isHomePage ? "opacity-0 pointer-events-none" : ""
              }`}
              aria-hidden={isHomePage}
            >
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
              {/* Mobile Menu Toggle - Hidden on home page */}
              <button
                onClick={() => setIsOpen((current) => !current)}
                className={`md:hidden hover:text-[var(--shade-500)] cursor-pointer ${
                  isHomePage ? "opacity-0 pointer-events-none" : ""
                }`}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-hidden={isHomePage}
              >
                {isOpen ? (
                  <X size={isMobile ? 30 : 24} strokeWidth={1.5} />
                ) : (
                  <Equal size={isMobile ? 30 : 24} strokeWidth={1.5} />
                )}
              </button>

              {/* Theme Toggle - Always visible and clickable */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="hover:text-[var(--shade-500)] cursor-pointer"
              >
                {theme === "dark" ? (
                  <Sun size={isMobile ? 28 : 24} strokeWidth={1.5} />
                ) : (
                  <Moon size={isMobile ? 28 : 24} strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && !isHomePage && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={MENU_VARIANTS}
            className="md:hidden pt-16 pb-16 m-5 rounded-xl flex flex-col gap-4 items-center"
            style={{
              backgroundColor: "var(--background-color-transparent)",
              color: "var(--text-color)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                variants={MENU_ITEM_VARIANTS}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl tracking-wide uppercase hover:text-[var(--shade-500)] ${
                  activeHash === getLinkHash(link.href)
                    ? "text-[var(--shade-500)] font-medium"
                    : ""
                }`}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div variants={MENU_ITEM_VARIANTS} className="mt-10">
              <SocialLinks />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
