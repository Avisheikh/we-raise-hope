"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

export function GivebutterForm() {
  const widgetId = site.givebutterWidgetId;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(520);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (typeof data !== "string" || !data.startsWith("givebutter-height:")) return;
      const next = Number.parseInt(data.split(":")[1] ?? "", 10);
      if (Number.isFinite(next) && next > 100) {
        setHeight(next);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!widgetId) {
    return (
      <div className="rounded-sm border border-dashed border-line bg-white p-8 text-center">
        <p className="font-display text-xl font-semibold text-ink">Donation form</p>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
          Connect your Givebutter widget ID to embed donations here.
        </p>
        <div className="mt-6">
          <ButtonLink href={site.givebutterFallbackUrl} external>
            Open donate page
          </ButtonLink>
        </div>
      </div>
    );
  }

  const src = `/givebutter-embed.html?widgetId=${encodeURIComponent(widgetId)}`;

  return (
    <div className="overflow-hidden rounded-sm border border-line bg-white p-2 sm:p-4">
      <iframe
        ref={iframeRef}
        title="We Raise Hope donation form"
        src={src}
        className="w-full border-0"
        style={{ height }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="payment *"
      />
      <p className="mt-3 text-center text-xs text-ink-soft">
        If the form does not load,{" "}
        <a href={site.givebutterFallbackUrl} className="font-semibold text-brand">
          open the donation form
        </a>
        .
      </p>
    </div>
  );
}
