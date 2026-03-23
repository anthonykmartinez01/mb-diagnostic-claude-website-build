import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  fadeLeft: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
};

const mobileVariants = {
  fadeUp: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  fadeLeft: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  fadeRight: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1 } },
};

interface AnimateInProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function AnimateIn({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.15,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const selectedVariants = isMobile ? mobileVariants : variants;
  const actualDuration = prefersReducedMotion ? 0 : isMobile ? duration * 0.8 : duration;
  const actualDelay = prefersReducedMotion ? 0 : delay;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariants[variant]}
      transition={{ duration: actualDuration, delay: actualDelay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
