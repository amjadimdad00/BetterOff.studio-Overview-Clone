"use client";

import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

const OverlayMenu = forwardRef((_, ref) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const borderRefs = useRef<Array<HTMLLIElement | null>>([]);
  const coverRefs = useRef<Array<HTMLDivElement | null>>([]);
  const textRefs = useRef<Array<HTMLDivElement | null>>([]);
  const pathname = usePathname();

  const isOpen = useRef(false);

  // Function to prevent scrolling
  const preventScroll = (prevent: boolean) => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = prevent ? "hidden" : "";
    }
  };

  useImperativeHandle(ref, () => ({
    open() {
      if (isOpen.current) return;
      isOpen.current = true;
      preventScroll(true);

      const topBorders = borderRefs.current.map((el) =>
        el?.querySelector(".top-border")
      );
      const bottomBorders = borderRefs.current.map((el) =>
        el?.querySelector(".bottom-border")
      );
      const covers = coverRefs.current.filter(Boolean);
      const texts = textRefs.current.filter(Boolean);

      // Reset everything
      gsap.set(wrapperRef.current, { display: "block", height: 0 });
      gsap.set([...topBorders, ...bottomBorders], { width: 0 });
      gsap.set(covers, { yPercent: 0 });
      gsap.set(texts, { opacity: 0, y: 10 });

      const tl = gsap.timeline();

      // Step 1: Expand overlay
      tl.to(wrapperRef.current, {
        height: "100vh",
        duration: 0.3,
        ease: "power2.in",
      });

      // Step 2: Lines + covers + text
      tl.to(
        topBorders,
        {
          width: "100%",
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.05,
        },
        "+=0"
      )
        .to(
          bottomBorders,
          {
            width: "100%",
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.05,
          },
          "<"
        )
        .to(
          covers,
          {
            yPercent: 100,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.05,
          },
          "<"
        )
        .to(
          texts,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.05,
          },
          "<"
        );
    },

    close() {
      if (!isOpen.current) return;
      isOpen.current = false;

      gsap
        .timeline()
        .to(innerRef.current, {
          duration: 0.3,
          ease: "power2.in",
        })
        .to(wrapperRef.current, {
          height: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(wrapperRef.current, { display: "none" });
            preventScroll(false);

            const allBorders = borderRefs.current.flatMap((el) =>
              Array.from(el?.querySelectorAll("hr") || [])
            );
            gsap.set(allBorders, { width: 0 });
            gsap.set(coverRefs.current, { yPercent: 0 });
            gsap.set(textRefs.current, { opacity: 1, y: 0 });
          },
        });
    },
  }));

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      preventScroll(false);
    };
  }, []);

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Feed", href: "/feed" },
  ];

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 w-full overflow-hidden bg-[#1e1e1e] z-[9999] hidden"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-start p-4">
        <Image src={Logo} alt="Better Off" className="h-[16px] w-auto" />
        <button
          onClick={() => ref?.current?.close?.()}
          className="text-white text-[16px]"
        >
          Menu
        </button>
      </div>

      {/* Inner Content */}
      <div
        ref={innerRef}
        className="flex flex-col mt-6 w-full items-center justify-between h-full text-white"
      >
        <ul className="flex flex-col w-full max-w-[600px]">
          {navLinks.map((link, i) => (
            <li
              key={i}
              ref={(el) => (borderRefs.current[i] = el)}
              className="relative"
            >
              <Link
                href={link.href}
                className={`relative block p-6 text-[48px] font-medium group ${
                  link.href === pathname ? "text-white/50" : ""
                }`}
              >
                {/* Top Border */}
                <hr className="top-border absolute top-0 left-0 w-0 border-t border-white/20 origin-left" />

                {/* Label Text with Cover */}
                <div className="overflow-hidden relative">
                  <div
                    ref={(el) => (coverRefs.current[i] = el)}
                    className="absolute inset-0 bg-[#1e1e1e] translate-y-0 will-change-transform"
                  />
                  <div
                    ref={(el) => (textRefs.current[i] = el)}
                    className="relative z-10"
                  >
                    {link.label}
                  </div>
                </div>

                {/* Bottom Border */}
                <hr className="bottom-border absolute bottom-0 left-0 w-0 border-t border-white/20 origin-left" />
              </Link>
            </li>
          ))}

          {/* Subscribe CTA */}
          <li className="relative py-5 px-8 mt-[10rem]">
            <Link
              href="/pricing"
              className="group relative w-full px-8 py-6 rounded-md bg-white text-black flex gap-32 justify-center items-center font-medium overflow-hidden"
            >
              {/* Yellow Hover Overlay */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-md">
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full bg-[#e0f07d]
                    w-[100%] scale-x-[0.9] origin-center rounded-md
                    translate-y-full group-hover:translate-y-0 group-hover:scale-x-100
                    transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
                />
              </div>

              {/* CTA Text */}
              <span className="z-10 relative transition-colors text-xl duration-300">
                Subscribe today
              </span>

              {/* CTA Icon */}
              <svg
                viewBox="0 0 12 11"
                xmlns="http://www.w3.org/2000/svg"
                className="h-2.5 w-2.5 z-10 relative transition-colors duration-300"
              >
                <path
                  d="m11.18 7.84-1.56-.02V2.88L1.94 10.6.8 9.44l7.72-7.7H3.56V.2h7.62v7.64Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

OverlayMenu.displayName = "OverlayMenu";
export default OverlayMenu;
