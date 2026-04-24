export function scrollToHashTarget(event, href, options = {}) {
  if (!href?.startsWith("#")) {
    return false;
  }

  if (typeof document === "undefined" || typeof window === "undefined") {
    return false;
  }

  const target = document.getElementById(href.slice(1));

  if (!target) {
    return false;
  }

  event?.preventDefault();
  options.onBeforeScroll?.();

  const header = document.querySelector(".header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: Math.max(targetTop - headerHeight - 16, 0),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });

  window.history.pushState(null, "", href);

  return true;
}
