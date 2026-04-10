import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const LOW_END_CORE_COUNT = 4;
const SMALL_VIEWPORT_QUERY = "(max-width: 899px)";
const TOUCH_POINTER_QUERY = "(pointer: coarse)";

function supportsConnectionApi() {
  return typeof navigator !== "undefined" && "connection" in navigator;
}

function addMediaQueryListener(query, listener) {
  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", listener);
    return;
  }

  query.addListener?.(listener);
}

function removeMediaQueryListener(query, listener) {
  if (typeof query.removeEventListener === "function") {
    query.removeEventListener("change", listener);
    return;
  }

  query.removeListener?.(listener);
}

function detectInitialConstraints({
  includeViewport = true,
  includePointer = true,
} = {}) {
  if (typeof window === "undefined") return false;

  const isSmallViewport = window.matchMedia(SMALL_VIEWPORT_QUERY).matches;
  const isTouchFirst = window.matchMedia(TOUCH_POINTER_QUERY).matches;
  const connection = supportsConnectionApi() ? navigator.connection : null;
  const savesData = Boolean(connection?.saveData);
  const isSlowNetwork =
    typeof connection?.effectiveType === "string" &&
    /(^2g$|^slow-2g$)/.test(connection.effectiveType);
  const isLowCpu =
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= LOW_END_CORE_COUNT;

  return (
    (includeViewport && isSmallViewport) ||
    (includePointer && isTouchFirst) ||
    savesData ||
    isSlowNetwork ||
    isLowCpu
  );
}

export function useMotionBudget(options = {}) {
  const { includeViewport = true, includePointer = true } = options;
  const prefersReducedMotion = useReducedMotion();
  const [isConstrainedDevice, setIsConstrainedDevice] = useState(
    () => detectInitialConstraints({ includeViewport, includePointer }),
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQueries = [
      window.matchMedia(SMALL_VIEWPORT_QUERY),
      window.matchMedia(TOUCH_POINTER_QUERY),
    ];

    const connection = supportsConnectionApi() ? navigator.connection : null;

    const syncConstraints = () => {
      const isSmallViewport = mediaQueries[0].matches;
      const isTouchFirst = mediaQueries[1].matches;
      const savesData = Boolean(connection?.saveData);
      const isSlowNetwork =
        typeof connection?.effectiveType === "string" &&
        /(^2g$|^slow-2g$)/.test(connection.effectiveType);
      const isLowCpu =
        typeof navigator.hardwareConcurrency === "number" &&
        navigator.hardwareConcurrency <= LOW_END_CORE_COUNT;

      setIsConstrainedDevice(
        (includeViewport && isSmallViewport) ||
          (includePointer && isTouchFirst) ||
          savesData ||
          isSlowNetwork ||
          isLowCpu,
      );
    };

    syncConstraints();

    mediaQueries.forEach((query) => {
      addMediaQueryListener(query, syncConstraints);
    });

    connection?.addEventListener?.("change", syncConstraints);

    return () => {
      mediaQueries.forEach((query) => {
        removeMediaQueryListener(query, syncConstraints);
      });

      connection?.removeEventListener?.("change", syncConstraints);
    };
  }, [includePointer, includeViewport]);

  return prefersReducedMotion || isConstrainedDevice;
}
