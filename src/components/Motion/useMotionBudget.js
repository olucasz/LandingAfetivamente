import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const LOW_END_CORE_COUNT = 4;

function supportsConnectionApi() {
  return typeof navigator !== "undefined" && "connection" in navigator;
}

function detectInitialConstraints() {
  if (typeof window === "undefined") return false;

  const isSmallViewport = window.matchMedia("(max-width: 899px)").matches;
  const isTouchFirst = window.matchMedia("(pointer: coarse)").matches;
  const connection = supportsConnectionApi() ? navigator.connection : null;
  const savesData = Boolean(connection?.saveData);
  const isSlowNetwork =
    typeof connection?.effectiveType === "string" &&
    /(^2g$|^slow-2g$)/.test(connection.effectiveType);
  const isLowCpu =
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency <= LOW_END_CORE_COUNT;

  return (
    isSmallViewport || isTouchFirst || savesData || isSlowNetwork || isLowCpu
  );
}

export function useMotionBudget() {
  const prefersReducedMotion = useReducedMotion();
  const [isConstrainedDevice, setIsConstrainedDevice] = useState(
    detectInitialConstraints,
  );

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQueries = [
      window.matchMedia("(max-width: 899px)"),
      window.matchMedia("(pointer: coarse)"),
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
        isSmallViewport || isTouchFirst || savesData || isSlowNetwork || isLowCpu,
      );
    };

    syncConstraints();

    mediaQueries.forEach((query) => {
      query.addEventListener("change", syncConstraints);
    });

    connection?.addEventListener?.("change", syncConstraints);

    return () => {
      mediaQueries.forEach((query) => {
        query.removeEventListener("change", syncConstraints);
      });

      connection?.removeEventListener?.("change", syncConstraints);
    };
  }, []);

  return prefersReducedMotion || isConstrainedDevice;
}
