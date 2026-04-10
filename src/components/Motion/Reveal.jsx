import { m } from "motion/react";
import {
  defaultViewport,
  fadeUp,
  motionEase,
  staggerContainer,
} from "./motionTokens";
import { useMotionBudget } from "./useMotionBudget";

const mobileViewport = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -12% 0px",
};

const MOBILE_REVEAL_MAX_DISTANCE = 16;
const MOBILE_REVEAL_MAX_DURATION = 0.52;
const MOBILE_REVEAL_MAX_DELAY = 0.1;
const MOBILE_REVEAL_MAX_STAGGER = 0.1;
const MOBILE_REVEAL_MAX_DELAY_CHILDREN = 0.06;

function hasCompactViewport() {
  return typeof window !== "undefined" && window.innerWidth <= 767;
}

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
  const shouldReduceMotion = useMotionBudget({
    includeViewport: false,
    includePointer: false,
  });
  const isCompactReveal = hasCompactViewport();
  const canUseInViewObserver =
    typeof window === "undefined" || "IntersectionObserver" in window;
  const MotionTag = m[as] || m.div;
  const revealDistance = isCompactReveal
    ? Math.min(distance, MOBILE_REVEAL_MAX_DISTANCE)
    : distance;
  const revealDuration = isCompactReveal
    ? Math.min(duration, MOBILE_REVEAL_MAX_DURATION)
    : duration;
  const revealDelay = isCompactReveal
    ? Math.min(delay, MOBILE_REVEAL_MAX_DELAY)
    : delay;
  const revealViewport = isCompactReveal ? mobileViewport : viewport;

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
      viewport={revealViewport}
      variants={fadeUp(revealDistance)}
      transition={{
        duration: revealDuration,
        delay: revealDelay,
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
  const shouldReduceMotion = useMotionBudget({
    includeViewport: false,
    includePointer: false,
  });
  const isCompactReveal = hasCompactViewport();
  const canUseInViewObserver =
    typeof window === "undefined" || "IntersectionObserver" in window;
  const MotionTag = m[as] || m.div;
  const revealViewport = isCompactReveal ? mobileViewport : viewport;
  const revealStagger = isCompactReveal
    ? Math.min(stagger, MOBILE_REVEAL_MAX_STAGGER)
    : stagger;
  const revealDelayChildren = isCompactReveal
    ? Math.min(delayChildren, MOBILE_REVEAL_MAX_DELAY_CHILDREN)
    : delayChildren;

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
      viewport={revealViewport}
      variants={staggerContainer(revealStagger, revealDelayChildren)}
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
  const shouldReduceMotion = useMotionBudget({
    includeViewport: false,
    includePointer: false,
  });
  const isCompactReveal = hasCompactViewport();
  const canUseInViewObserver =
    typeof window === "undefined" || "IntersectionObserver" in window;
  const MotionTag = m[as] || m.div;
  const revealDistance = isCompactReveal
    ? Math.min(distance, MOBILE_REVEAL_MAX_DISTANCE)
    : distance;
  const revealDuration = isCompactReveal
    ? Math.min(duration, MOBILE_REVEAL_MAX_DURATION)
    : duration;

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
      variants={fadeUp(revealDistance)}
      transition={{
        duration: revealDuration,
        ease: motionEase,
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
