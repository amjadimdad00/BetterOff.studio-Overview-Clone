"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import Marquee from "./Marquee";
import { useUnderlineAnim } from "@/hooks/useUnderlineAnim";

interface HeroProps {
  coverRefs: React.MutableRefObject<HTMLDivElement[]>;
  paragraphRef: React.RefObject<HTMLParagraphElement | null>;
  linkRef: React.RefObject<HTMLAnchorElement | null>;
  marqueeRef: React.RefObject<HTMLDivElement | null>;
  finalBlockRef: React.RefObject<HTMLDivElement | null>;
}

const Hero: React.FC<HeroProps> = ({
  coverRefs,
  paragraphRef,
  linkRef,
  marqueeRef,
  finalBlockRef,
}) => {
  const ctaRef = useRef<HTMLAnchorElement>(null!);

  useUnderlineAnim([], ctaRef);

  const heroLines = [
    "Premium quality creative at lean rates",
    "for growing businesses. Packaged as",
    "subscriptions or bundled projects.",
  ];

  const finalLines = [
    "Strategy, Design, and Development.",
    "Lightning-fast, lean, and sensibly priced.",
    "Get max value and velocity in a turnkey",
    "platform that promises your brand will be",
    "Better Off®.",
  ];

  function mergeRefs<T = any>(
    ...refs: (React.Ref<T> | undefined)[]
  ): React.RefCallback<T> {
    return (element: T) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(element);
        } else if (ref && typeof ref === "object") {
          (ref as React.MutableRefObject<T | null>).current = element;
        }
      });
    };
  }

  return (
    <>
      {/* Layout container */}
      <section className="flex flex-col pt-9 md:pt-[265px] lg:pt-[168px] xl:pt-[248px] 2xl:pt-[482px] text-[#1e1e1e] selection:bg-[#1e1e1e] selection:text-white">
        {/* Marquee - Always visible, top on mobile, below hero on md */}
        <div
          ref={marqueeRef}
          className="order-1 md:order-3 w-full mb-6 md:mt-12 2xl:mt-[60px] md:mb-16 overflow-hidden"
        >
          <Marquee />
        </div>

        {/* Hero Content - Flex row on md screens */}
        <div className="order-2 flex flex-col md:flex-row md:items-start md:gap-36 xl:gap-[294px] 2xl:gap-[550px] px-4 md:px-3 lg:px-4 xl:px-6 2xl:px-10">
          {/* Hero Left - Paragraph and CTA (moves to right on md screens) */}
          <div className="order-2 md:order-1 w-full md:w-[160px] lg:w-[200px] xl:w-72 2xl:w-[500px] flex flex-col gap-6 md:gap-5 lg:gap-7 xl:gap-9 2xl:gap-16 mt-6 md:mt-0">
            <p
              ref={paragraphRef}
              className="text-[15px] md:text-[9px] lg:text-[12px] xl:text-[17px] 2xl:text-3xl 2xl:leading-11 font-[600] text-[#3b3b3b]"
            >
              Pick a plan, submit a job request, and your project will kickoff
              within 24 hours.
            </p>

            <Link
              href="/pricing"
              ref={mergeRefs(linkRef, ctaRef)}
              className="relative w-[10.5rem] md:w-[6.6rem] lg:w-[8.7rem] xl:w-[12.1rem] 2xl:w-[20rem] flex justify-between items-center text-[16px] md:text-[10px] lg:text-[13px] xl:text-lg 2xl:text-3xl font-medium tracking-tight group underline-cta"
            >
              <span>Explore Plans</span>
              <span className="inline-flex items-center">
                <GoArrowRight />
              </span>
              <span
                className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-black"
                style={{
                  width: "var(--after-width)",
                  left: "var(--after-left)",
                  zIndex: 1,
                }}
              />
              <span
                className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-black"
                style={{
                  width: "var(--before-width)",
                  left: "var(--before-left)",
                  zIndex: 2,
                }}
              />
            </Link>
          </div>

          {/* Hero Right - Heading (main content) */}
          <div className="order-1 md:order-2 flex-1 text-left text-[29px] md:text-[25px] lg:text-[32px] xl:text-5xl 2xl:text-[80px] leading-[29px] md:leading-[1.4] lg:leading-[44px] xl:leading-[1.2] md:tracking-normal -mt-6 md:-mt-1 md:ml-3 lg:ml-20 xl:ml-0 font-[500] tracking-tight">
            {heroLines.map((line, index) => (
              <div key={index} className="relative overflow-hidden md:-mb-2">
                <div className="relative z-10">{line}</div>
                <div
                  className="absolute inset-0 bg-[#e5e7df] z-20"
                  ref={(el) => {
                    if (el) coverRefs.current[index] = el;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Block */}
      <div
        ref={finalBlockRef}
        className="order-3 w-full px-4 md:px-3 lg:px-4 xl:px-6 2xl:px-10 mt-[60px] md:mt-[56px] lg:mt-20 xl:mt-[110px] 2xl:mt-[284px] mb-[24px] md:mb-[53px] lg:mb-[70px] xl:mb-24 2xl:mb-40 text-left text-[28px] md:text-[26px] lg:text-[35px] xl:text-5xl 2xl:text-[82px] font-[500] tracking-tight text-[#3b3b3b] selection:!bg-[#1e1e1e] selection:!text-white"
      >
        <div className="relative overflow-hidden mb-10 md:mb-6 xl:mb-12 text-[#1e1e1e] md:w-[30rem] lg:w-[40rem] xl:w-[55rem] leading-[1.2] md:leading-[1.1] lg:leading-[1.3] xl:leading-[1.3] 2xl:leading-[1.2] w-full">
          <div className="relative z-10">
            Strategy, Design, and Development. Lightning-fast, lean, and
            sensibly priced.
          </div>
          <div
            className="absolute inset-0 bg-[#e5e7df] z-20"
            ref={(el) => {
              if (el) coverRefs.current[heroLines.length] = el;
            }}
          />
        </div>

        {finalLines.slice(2).map((line, index) => (
          <div
            key={index}
            className="relative overflow-hidden md:mb-1 lg:-mb-1 2xl:-mb-2 text-[#1e1e1e] leading-8 md:leading-[1] lg:leading-[1.3] xl:leading-[1.3] 2xl:leading-[1.2] w-full"
          >
            <div className="relative z-10">{line}</div>
            <div
              className="absolute inset-0 bg-[#e5e7df] z-20"
              ref={(el) => {
                if (el) coverRefs.current[heroLines.length + 1 + index] = el;
              }}
            />
          </div>
        ))}
      </div>

      <div className="order-4 w-full px-4 xl:px-6 mx-auto">
        <hr className="border-t border-[#c7c9c1] mb-5" />
      </div>
    </>
  );
};

export default Hero;
