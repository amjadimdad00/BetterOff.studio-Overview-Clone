"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUnderlineAnim } from "@/hooks/useUnderlineAnim";
import Marquee from "./Marquee";
import { GoArrowUp } from "react-icons/go";

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

const footerData: {
  title: string;
  links: FooterLink[];
}[] = [
  {
    title: "Sitemap",
    links: [
      { name: "Overview", href: "/" },
      { name: "Work", href: "/work" },
      { name: "Feed", href: "/feed" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms", href: "/terms" },
      { name: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Instagram", href: "https://instagram.com", external: true },
      { name: "LinkedIn", href: "https://linkedin.com", external: true },
    ],
  },
];

const Footer = () => {
  const pathname = usePathname();
  const ctaRef = useRef<HTMLAnchorElement>(null!);
  useUnderlineAnim([], ctaRef);

  // Proper match check
  const isPathActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <footer className="bg-[#1e1e1e] text-white pt-10 md:pt-14 lg:pt-20 xl:pt-28 2xl:pt-48 pb-11 lg:pb-8 xl:pb-12 2xl:pb-20 selection:bg-white selection:text-black">
      <div className="px-4 md:px-3 lg:px-4 xl:px-6 2xl:px-10">
        {/* Top CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end sm:justify-between gap-6">
          <h3 className="text-[28px] font-medium md:text-[26px] md:w-[20rem] lg:text-[34px] lg:w-[25rem] xl:text-5xl xl:w-[30rem] 2xl:text-[80px] 2xl:w-[60rem] tracking-tight leading-8 md:leading-7 lg:leading-9 xl:leading-13 2xl:leading-22">
            Still unsure whether our plans are right for you?
          </h3>
          <Link
            href="/"
            ref={ctaRef}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[28px] lg:text-[34px] xl:text-5xl 2xl:text-[82px] mt-2 font-medium mb-0 2xl:mb-6 tracking-tight underline-cta"
          >
            Let’s chat
          </Link>
        </div>

        {/* Divider */}
        <hr className="border-white/20 my-10 md:mt-6 lg:mt-9 xl:mt-12 2xl:mt-18" />

        {/* Footer links */}
        <div className="flex flex-wrap gap-x-20 gap-y-8 lg:gap-x-26 xl:gap-x-36 2xl:gap-x-68 pt-4 md:pt-16 lg:pt-28 xl:pt-44 2xl:pt-80">
          {footerData.map((section) => (
            <div key={section.title}>
              <h5
                className={`text-[16px] md:text-[12px] lg:text-[15px] xl:text-[20px] 2xl:text-[35px] font-medium`}
              >
                {section.title}
              </h5>
              <ul className="mt-4 xl:mt-8 flex flex-col">
                {section.links.map((link) => {
                  const isActive = !link.external && isPathActive(link.href);

                  const linkClass = `text-[16px] md:text-[12px] lg:text-[16px] xl:text-[21px] 2xl:text-[36px] duration-500 ${
                    isActive
                      ? "text-white cursor-default"
                      : "text-white/50 hover:text-white cursor-pointer transition selection:bg-white/50 selection:text-black"
                  }`;

                  return (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {link.name}
                        </a>
                      ) : isActive ? (
                        <p className={linkClass}>{link.name}</p>
                      ) : (
                        <Link href={link.href} className={linkClass}>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Marquee />

      <div className="flex justify-between flex-col-reverse max-md:items-center md:flex-row px-6 -mt-2 text-[16px] md:px-3 md:text-[12px] md:-mt-1.5 lg:text-[16px] lg:px-4 lg:-mt-3 xl:text-[20px] 2xl:text-[32px] 2xl:px-10 xl:px-6 xl:-mt-8 font-medium max-md:mt-3">
        <h1>Copyright © Better Off 2025</h1>
        <button className="flex items-center">
          Back to top <GoArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
