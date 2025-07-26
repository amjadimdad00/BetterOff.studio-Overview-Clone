"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUnderlineAnim } from "@/hooks/useUnderlineAnim";
import OverlayMenu from "./OverlayMenu";
import { OverlayMenuHandle } from "./OverlayMenu";

const Navbar = ({ fadeInUp }) => {
  const navRef = useRef<HTMLElement | null>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const menuRef = useRef<OverlayMenuHandle | null>(null);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Overview" },
    { href: "/work", label: "Work" },
    { href: "/feed", label: "Feed" },
  ];

  useUnderlineAnim(navLinksRef.current, ctaRef);

  useEffect(() => {
    fadeInUp(navRef.current, 0.4);
  }, []);

  return (
    <>
      <OverlayMenu ref={menuRef} />

      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-[15px] lg:px-[16px] lg:py-[20px] xl:px-[24px] xl:py-[28px] 2xl:px-[40px] 2xl:py-[48px] selection:bg-[#1e1e1e] text-[#c7c9c1] mix-blend-difference overflow-hidden max-w-screen"
      >
        {/* Logo */}
        <Image
          src={Logo}
          alt="Better Off"
          className="h-[14px] sm:h-[10px] lg:h-[14px] xl:h-[19px] 2xl:h-[32px] w-auto mix-blend-difference"
        />

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex sm:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 sm:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[32px] sm:pr-8 lg:pr-10 xl:pr-16 2xl:pr-32 tracking-tighter xl:tracking-normal">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  ref={(el) => (navLinksRef.current[index] = el)}
                  data-active={isActive ? "true" : "false"}
                  className="underline-anim"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/pricing"
          ref={ctaRef}
          className="hidden sm:inline-block sm:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[32px] underline-cta"
        >
          Pricing
        </Link>

        {/* Mobile Menu & Pricing */}
        <div className="sm:hidden flex items-center gap-8 font-medium">
          <button className="text-[c7c9c1] text-[16px] tracking-tight">
            Pricing
          </button>

          <button
            onClick={() => menuRef.current?.open()}
            className="text-[c7c9c1] text-[16px] tracking-tight"
          >
            Menu
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
