/**
 * Adsterra units for this site only.
 * Values mirror the official GET CODE exactly — do not reuse keys from other sites.
 */
export const adsterra = {
  desktopBanner: {
    key: "cb33416d9bafe78e96e882445fe0e657",
    format: "iframe" as const,
    height: 90,
    width: 728,
    params: {} as Record<string, never>,
    invokeSrc: "https://www.highrevenueformat.com/cb33416d9bafe78e96e882445fe0e657/invoke.js",
  },
  mobileBanner: {
    key: "c83ef0d288cb4f304f68a75e7663f537",
    format: "iframe" as const,
    height: 50,
    width: 320,
    params: {} as Record<string, never>,
    invokeSrc: "https://www.highrevenueformat.com/c83ef0d288cb4f304f68a75e7663f537/invoke.js",
  },
  nativeBanner: {
    scriptUrl: "https://pl31446261.profitableratecpmnetwork.com/b677cdd2b944e883c4bab033c263face/invoke.js",
    containerId: "container-b677cdd2b944e883c4bab033c263face",
  },
  socialBar: {
    scriptUrl: "https://pl31446262.profitableratecpmnetwork.com/29/19/2e/29192e132a6b99f7fb5a7bbcfd32a470.js",
  },
} as const;
