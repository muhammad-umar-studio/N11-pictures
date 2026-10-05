"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({ pathname, isOpen: false });
  const isMenuOpen = menuState.pathname === pathname && menuState.isOpen;

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuState({ pathname, isOpen: false });
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen, pathname]);

  return (
    <div data-w-id="51f55c35-564f-f3e5-96da-749c327aa364" data-animation="default" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <Link href="/" className="brand-mobile w-inline-block">
        {/* Note: I added a "/" before images so they load correctly on subpages! */}
        <img src="/images/N11-PICTURES-1.png" loading="eager" width="Auto" alt="" className="logo mobile" />
      </Link>
      <nav
        id="primary-navigation"
        role="navigation"
        className={`nav-menu w-nav-menu${isMenuOpen ? " is-open" : ""}`}
      >
        <div className="w-layout-grid grid-navbar">
          <div className="nav">
            {/* The active page automatically gets the w--current class */}
            <Link href="/work" onClick={() => setMenuState({ pathname, isOpen: false })} className={`nav-link w-inline-block ${pathname === '/work' ? 'w--current' : ''}`}>
              <div className="nav-text">WORK</div>
              <div className="block-underline"><div className="underline"></div></div>
            </Link>
            <Link href="/about" onClick={() => setMenuState({ pathname, isOpen: false })} className={`nav-link w-inline-block ${pathname === '/about' ? 'w--current' : ''}`}>
              <div className="nav-text">ABOUT</div>
              <div className="block-underline"><div className="underline"></div></div>
            </Link>
          </div>
          <Link href="/" className="brand w-nav-brand">
            <img src="/images/N11-PICTURES-1.png" loading="eager" width="Auto" height="100" alt="" className="logo" />
          </Link>
          <div className="nav">
            <Link href="/shop" onClick={() => setMenuState({ pathname, isOpen: false })} className="nav-link right w-inline-block">
              <div className="nav-text">SHOP</div>
              <div className="block-underline"><div className="underline"></div></div>
            </Link>
            <Link href="/contact" onClick={() => setMenuState({ pathname, isOpen: false })} className={`nav-link right w-inline-block ${pathname === '/contact' ? 'w--current' : ''}`}>
              <div className="nav-text">Contact</div>
              <div className="block-underline"><div className="underline"></div></div>
            </Link>
          </div>
        </div>
      </nav>
      <button
        type="button"
        className={`menu-button w-nav-button${isMenuOpen ? " w--open" : ""}`}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuState({ pathname, isOpen: !isMenuOpen })}
      >
        <div className="menu-icon w-icon-nav-menu"></div>
      </button>
    </div>
  );
}