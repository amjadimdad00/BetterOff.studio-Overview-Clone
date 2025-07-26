"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CreativeProps {
  headingRef: React.RefObject<HTMLDivElement | null>;
  rightRef: React.RefObject<HTMLDivElement | null>;
  itemRefs: React.MutableRefObject<HTMLDivElement[]>;
}

const features = [
  {
    title: "Fully Loaded",
    description:
      "From complex strategies to intricate identities to bleeding-edge digital development, every project is now possible with a click.",
  },
  {
    title: "Flat Fee Flex",
    description:
      "We don't haggle over hours. Our plans are nimble and allow plenty of wiggle room to account for shifting priorities and rethinking.",
  },
  {
    title: "Creative Control",
    description:
      "We don't want our clients to ever feel trapped or locked into anything. If you want to pump the brakes or step on the gas, feel free to pause, cancel, or upgrade anytime.",
  },
];

const Creative: React.FC<CreativeProps> = ({
  headingRef,
  rightRef,
  itemRefs,
}) => {
  return (
    <div className="mx-4 md:mx-3 lg:mx-4 xl:mx-6 2xl:mx-9 2xl:pt-5 md:mr-2 lg:mr-3 2xl:mr-6 mb-20 md:mb-8 xl:mb-96 flex flex-col md:flex-row justify-between items-start selection:!bg-[#1e1e1e] selection:!text-white">
      {/* Mobile: Heading and BO-04 in one row */}
      <div className="flex flex-col w-full font-[500] md:hidden mb-12">
        <div
          ref={headingRef}
          className="flex text-base gap-1 text-center items-center uppercase font-medium text-[#1e1e1e] tracking-tight"
        >
          <span className="text-3xl mb-1">●</span> Creative as it should be
        </div>

        <h1 className="tracking-tight text-base -mt-2">(BO® — 01)</h1>
      </div>

      {/* Desktop: Heading (left) */}
      <div
        ref={headingRef}
        className="hidden md:flex text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl w-full md:max-w-72 lg:max-w-[390px] xl:max-w-[530px] 2xl:max-w-[980px] text-center gap-0.5 items-center uppercase font-medium text-[#1e1e1e] col-span-6 s:col-span-3 -mt-2.5 md:-mt-1 xl:mt-1.5 tracking-tight"
      >
        <span className="text-lg md:text-2xl xl:text-3xl 2xl:text-[52px] md:mb-0.5 xl:mb-1.5">
          ●
        </span>{" "}
        Creative as it should be
      </div>

      {/* Features - middle column */}
      <div className="flex flex-col items-start xl:mt-3 2xl:mt-6 w-full md:max-w-[230px] lg:max-w-[310px] xl:max-w-[420px] 2xl:max-w-[800px] md:text-[11px] lg:text-[15px] xl:text-[20px] 2xl:text-4xl gap-8 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-20">
        {features.map((item, index) => {
          return (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  itemRefs.current[index] = el;
                }
              }}
              className="flex flex-col gap-4 md:gap-2 xl:gap-5 2xl:gap-9"
            >
              <h1>{item.title}</h1>
              <h1 className="md:max-w-[25rem] xl:max-w-[35rem] 2xl:max-w-[60rem] 2xl:leading-12 text-[#949690]">
                {item.description}
              </h1>
            </div>
          );
        })}
      </div>

      {/* Desktop: BO-04 (right) */}
      <div
        ref={rightRef}
        className="hidden w-full max-w-14 lg:max-w-20 xl:max-w-24 2xl:max-w-44 md:block -mt-1 lg:mt-0.5 xl:mt-2 2xl:mt-6 tracking-tight"
      >
        <h1 className="font-[500] text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl">
          (BO® — 01)
        </h1>
      </div>
    </div>
  );
};

export default Creative;
