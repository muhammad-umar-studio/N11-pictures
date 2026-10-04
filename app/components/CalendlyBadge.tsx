"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      destroyBadgeWidget: () => void;
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

const scriptUrl = "https://assets.calendly.com/assets/external/widget.js";
const stylesheetUrl = "https://assets.calendly.com/assets/external/widget.css";

export default function CalendlyBadge() {
  useEffect(() => {
    let active = true;
    let ownedStylesheet: HTMLLinkElement | undefined;
    const stylesheet = document.querySelector<HTMLLinkElement>(
      `link[href="${stylesheetUrl}"]`,
    );

    if (!stylesheet) {
      ownedStylesheet = document.createElement("link");
      ownedStylesheet.rel = "stylesheet";
      ownedStylesheet.href = stylesheetUrl;
      document.head.append(ownedStylesheet);
    }

    const initializeBadge = () => {
      if (!active) return;
      if (!window.Calendly) {
        console.error("Calendly widget loaded without its API being available.");
        return;
      }

      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/n11pictures-picturesof?background_color=171717&text_color=faf5f5",
        text: "Schedule time with me",
        color: "#007BFF",
        textColor: "#f0f1f8",
        branding: true,
      });
    };

    const handleScriptError = () => {
      if (active) console.error("Failed to load the Calendly widget script.");
    };

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptUrl}"]`,
    );

    if (window.Calendly) {
      initializeBadge();
    } else {
      if (!script) {
        script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        document.body.append(script);
      }

      script.addEventListener("load", initializeBadge);
      script.addEventListener("error", handleScriptError);
    }

    return () => {
      active = false;
      script?.removeEventListener("load", initializeBadge);
      script?.removeEventListener("error", handleScriptError);
      window.Calendly?.destroyBadgeWidget();
      ownedStylesheet?.remove();
    };
  }, []);

  return null;
}
