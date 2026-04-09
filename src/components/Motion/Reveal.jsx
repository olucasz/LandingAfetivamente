import { m, useReducedMotion } from "motion/react";
import {
  defaultViewport,
  fadeUp,
  motionEase,
  staggerContainer,
} from "./motionTokens";

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
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = m[as] || m.div;

  if (shouldReduceMotion) {
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
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = m[as] || m.div;

  if (shouldReduceMotion) {
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
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = m[as] || m.div;

  if (shouldReduceMotion) {
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
