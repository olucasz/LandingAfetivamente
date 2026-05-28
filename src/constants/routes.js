export const HOME_PATH = "/";
export const PRIVACY_POLICY_PATH = "/politica-de-privacidade/";

export function resolveNavigationHref(basePath, href) {
  if (!href?.startsWith("#")) {
    return href;
  }

  return `${basePath}${href}`;
}
