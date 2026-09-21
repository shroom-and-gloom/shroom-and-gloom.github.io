"use client";

import { useEffect, useRef, useState } from "react";
import { adsterra } from "@/config/adsterra";

const MOBILE_QUERY = "(max-width: 767px)";

type AtOptions = {
  key: string;
  format: string;
  height: number;
  width: number;
  params: Record<string, never>;
};

declare global {
  interface Window {
    atOptions?: AtOptions;
  }
}

export function ResponsiveBanner() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isMobile === null) return;
    const host = hostRef.current;
    if (!host) return;

    const unit = isMobile ? adsterra.mobileBanner : adsterra.desktopBanner;

    host.replaceChildren();

    window.atOptions = {
      key: unit.key,
      format: unit.format,
      height: unit.height,
      width: unit.width,
      params: { ...unit.params },
    };

    const script = document.createElement("script");
    script.src = unit.invokeSrc;
    script.dataset.adsterraBanner = unit.key;
    host.appendChild(script);

    return () => {
      host.replaceChildren();
      if (window.atOptions?.key === unit.key) {
        delete window.atOptions;
      }
    };
  }, [isMobile]);

  const reservedHeight = isMobile === true ? 50 : 90;

  return (
    <aside className="ad-slot ad-slot-banner" aria-label="Advertisement">
      <p className="ad-label">Advertisement</p>
      <div
        ref={hostRef}
        className="ad-slot-banner-frame"
        style={{ minHeight: reservedHeight }}
        data-ad-device={isMobile === null ? "pending" : isMobile ? "mobile" : "desktop"}
      />
    </aside>
  );
}
