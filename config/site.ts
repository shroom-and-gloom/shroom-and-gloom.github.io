import type { SiteConfig, ThemePresetName } from "./types";
import rawSiteConfig from "../content/generated/site.json";

const generated = rawSiteConfig as SiteConfig;

const environmentTheme = process.env.NEXT_PUBLIC_THEME_PRESET as ThemePresetName | undefined;
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const envCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN?.trim();

export const siteConfig: SiteConfig = {
  ...generated,
  theme: { ...generated.theme, preset: environmentTheme || generated.theme.preset },
  hosting: {
    siteUrl: envSiteUrl || generated.hosting.siteUrl,
    // User GitHub Pages site must keep an empty basePath unless an env override is explicitly set.
    basePath: envBasePath === undefined ? generated.hosting.basePath : envBasePath.trim(),
    customDomain: envCustomDomain ? envCustomDomain : generated.hosting.customDomain,
  },
};
