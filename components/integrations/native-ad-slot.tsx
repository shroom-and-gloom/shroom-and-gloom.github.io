import { adsterra } from "@/config/adsterra";
import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  return (
    <aside className="ad-slot ad-slot-native" aria-label="Advertisement">
      <p className="ad-label">Advertisement</p>
      <NativeAdClient
        scriptUrl={adsterra.nativeBanner.scriptUrl}
        containerId={adsterra.nativeBanner.containerId}
      />
    </aside>
  );
}
