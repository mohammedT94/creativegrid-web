import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const easeOutExpo = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 22, mass: 0.6 },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } },
};

export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const staggerParentSlow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

/**
 * Line-by-line mask reveal — clip-path inset slides from one edge.
 * Pass `dir` ("ltr" | "rtl") so the mask uncovers from the leading edge.
 */
export const lineMask = (dir = "ltr") => ({
  hidden: {
    clipPath:
      dir === "rtl" ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)",
    y: "0.4em",
  },
  show: {
    clipPath: "inset(0 0 0 0)",
    y: "0em",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
});

export const viewportOnce = { once: true, margin: "-80px" };

/**
 * Magnetic-hover hook for CTAs / icon buttons.
 * Pointer position drives a small translate, spring-eased.
 */
export function useMagneticHover(strength = 0.18, max = 8) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      x.set(Math.max(-max, Math.min(max, dx)));
      y.set(Math.max(-max, Math.min(max, dy)));
    };
    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [strength, max, x, y]);

  return { ref, x, y };
}

/** Smooth count-up using framer-motion. Returns a formatted string. */
export function useCountUp(target, run, opts = {}) {
  const { duration = 1.4, format } = opts;
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (v) =>
    format ? format(v) : Math.round(v).toLocaleString()
  );
  useEffect(() => {
    if (run) mv.set(target);
    else mv.set(0);
  }, [run, target, mv]);
  return display;
}
