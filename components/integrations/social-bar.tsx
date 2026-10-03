"use client";

import { useEffect } from "react";
import { adsterra } from "@/config/adsterra";

const SCRIPT_ATTR = "data-adsterra-social-bar";

let socialBarBootstrapped = false;

export function SocialBar() {
  useEffect(() => {
    if (socialBarBootstrapped) return;
    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) {
      socialBarBootstrapped = true;
      return;
    }

    socialBarBootstrapped = true;

    const script = document.createElement("script");
    script.src = adsterra.socialBar.scriptUrl;
    script.setAttribute(SCRIPT_ATTR, "true");
    document.body.appendChild(script);
  }, []);

  return null;
}
