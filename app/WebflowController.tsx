"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WebflowController() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    
   // 1. Swap to the correct Webflow Page ID based on the URL
    if (pathname === '/') {
      html.setAttribute('data-wf-page', '67448431fea0f748c29a1db5'); // Home ID
    } else if (pathname === '/about') {
      html.setAttribute('data-wf-page', '67448431fea0f748c29a1dad'); // About ID
    } else if (pathname === '/contact') {
      html.setAttribute('data-wf-page', '67448431fea0f748c29a1db2'); // Contact ID
    } else if (pathname === '/work') {
      html.setAttribute('data-wf-page', '67448431fea0f748c29a1de7'); // Work ID
    } else if (pathname === '/contact-2') {
      html.setAttribute('data-wf-page', '67448431fea0f748c29a1db3'); // Contact 3 ID
    }

    // Keep checking every 100ms until the Webflow script is actually fully loaded
    const timer = setInterval(() => {
      const Webflow = (window as any).Webflow;
      if (Webflow && Webflow.destroy) {
        clearInterval(timer); // Stop checking once we find it!
        Webflow.destroy();
        Webflow.ready();
        Webflow.require('ix2').init();
        
        window.dispatchEvent(new Event('resize'));
        window.dispatchEvent(new Event('scroll'));
      }
    }, 100);

    return () => clearInterval(timer); // Cleanup if the user changes pages quickly
  }, [pathname]);

  return null;
}