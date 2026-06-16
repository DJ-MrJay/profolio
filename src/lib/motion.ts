import type { MotionProps } from "framer-motion";

export const REVEAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function revealMotion(
  shouldReduceMotion: boolean,
  delay = 0,
  y = 18,
  amount = 0.35
): MotionProps {
  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.36, ease: REVEAL_EASE, delay },
    viewport: { once: true, amount },
  };
}

export function entranceMotion(
  shouldReduceMotion: boolean,
  delay = 0,
  y = 18
): MotionProps {
  return {
    initial: shouldReduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.42, ease: REVEAL_EASE, delay },
  };
}
