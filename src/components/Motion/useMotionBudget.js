import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const LOW_END_CORE_COUNT = 4;

function supportsConnectionApi() {
  return typeof navigator !== "undefined" && "connection" in navigator;
}

export function useMotionBudget() {
  const prefersReducedMotion = useReducedMotion();
  const [isConstrainedDevice, setIsConstrainedDevice] = useState(false);

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
