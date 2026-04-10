import { m } from "motion/react";
import {
  defaultViewport,
  fadeUp,
  motionEase,
  staggerContainer,
} from "./motionTokens";
import { useMotionBudget } from "./useMotionBudget";

export function Reveal({
  as = "div",
  className,
  children,
  distance = 24,
  delay = 0,
  duration = 0.6,
  viewport = defaultViewport,
  ...props
}) {
  const shouldReduceMotion = useMotionBudget();
  const canUseInViewObserver =
    typeof window === "undefined" || "IntersectionObserver" in window;
  const MotionTag = m[as] || m.div;

  if (shouldReduceMotion || !canUseInViewObserver) {
    return (
      <MotionTag className={className} {...props}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp(distance)}
      transition={{
        duration,
        delay,
        ease: motionEase,
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  as = "div",
  className,
  children,
  stagger = 0.12,
  delayChildren = 0,
  viewport = defaultViewport,
  ...props
}) {
  const shouldReduceMotion = useMotionBudget();
  const canUseInViewObserver =
    typeof window === "undefined" || "IntersectionObserver" in window;
  const MotionTag = m[as] || m.div;

  if (shouldReduceMotion || !canUseInViewObserver) {
    return (
      <MotionTag className={className} {...props}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(stagger, delayChildren)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  as = "div",
  className,
  children,
  distance = 24,
  duration = 0.55,
  ...props
}) {
  const shouldReduceMotion = useMotionBudget();
  const canUseInViewObserver =
    typeof window === "undefined" || "IntersectionObserver" in window;
  const MotionTag = m[as] || m.div;

  if (shouldReduceMotion || !canUseInViewObserver) {
    return (
      <MotionTag className={className} {...props}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={fadeUp(distance)}
      transition={{
        duration,
        ease: motionEase,
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
