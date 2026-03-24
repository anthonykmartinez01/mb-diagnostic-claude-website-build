import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export default function StaggerChildren({
  children,
  staggerDelay = 0.12,
  className,
  once = true,
  amount = 0.1,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  const yDistance = isMobile ? 24 : 30;
  const duration = prefersReducedMotion ? 0 : isMobile ? 0.5 : 0.6;

  const childVariants = {
    hidden: { opacity: 0, y: yDistance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: EASE },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants} className="flex">{child}</motion.div>
      ))}
    </motion.div>
  );
}
