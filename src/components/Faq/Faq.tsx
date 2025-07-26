"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { accordionItems } from "./Questions";

gsap.registerPlugin(ScrollTrigger);

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const iconRefs = useRef<[SVGPathElement | null, SVGPathElement | null][]>([]);

  const lineRefs = useRef<HTMLDivElement[]>([]);
  const coverRefs = useRef<HTMLDivElement[]>([]);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const boTextRef = useRef<HTMLHeadingElement>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentInnerRefs = useRef<HTMLDivElement[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      closeAccordion(index);
      setOpenIndex(null);
    } else {
      if (openIndex !== null) closeAccordion(openIndex);
      openAccordion(index);
      setOpenIndex(index);
    }
  };

  const openAccordion = (index: number) => {
    const content = contentRefs.current[index];
    const inner = contentInnerRefs.current[index];
    if (!content || !inner) return;

    gsap.killTweensOf(content);
    gsap.set(content, { height: "auto" });
    const height = inner.offsetHeight;
    gsap.fromTo(
      content,
      { height: 0 },
      { height, duration: 0.5, ease: "power2.inOut" }
    );
  };

  const closeAccordion = (index: number) => {
    const content = contentRefs.current[index];
    if (!content) return;

    gsap.killTweensOf(content);
    const height = content.offsetHeight;
    gsap.fromTo(
      content,
      { height },
      { height: 0, duration: 0.5, ease: "power2.inOut" }
    );
  };

  useEffect(() => {
    iconRefs.current.forEach((paths, i) => {
      const [vert, hori] = paths || [];
      if (!vert || !hori) return;

      gsap.set(hori, {
        transformBox: "fill-box",
        transformOrigin: "0% 50%",
      });

      const tl = gsap.timeline({
        defaults: { duration: 0.4, ease: "power2.inOut" },
      });

      if (openIndex === i) {
        tl.to(hori, { scaleX: 0 }, 0);
      } else {
        tl.to(hori, { scaleX: 1 }, 0);
      }
    });
  }, [openIndex]);

  useEffect(() => {
    const fadeInUp = (el: Element | null) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    };

    fadeInUp(leftTextRef.current);
    fadeInUp(boTextRef.current);

    lineRefs.current.forEach((line, i) => {
      const cover = coverRefs.current[i];
      if (!cover) return;

      gsap.fromTo(
        cover,
        { y: "0%" },
        {
          y: "-100%",
          duration: 1,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const Lines = [
    "We love talking shop and answering questions. See the most common inquiries below or book a chat.",
  ];

  return (
    <section className="bg-white text-[#1e1e1e] selection:bg-[#1e1e1e] selection:text-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-start gap-10 px-4 md:px-3.5 lg:px-4 xl:px-6 2xl:px-10">
        <div className="leading-none md:w-[28.5%] lg:w-[29.5%] xl:w-[31%] 2xl:w-[32%]">
          <h1
            className="text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl font-medium uppercase tracking-tight flex items-center gap-1 md:gap-0.5 -mb-2.5 md:-mb-2.5 lg:-mb-1.5 xl:-mb-2 2xl:-mb-3.5"
            ref={leftTextRef}
          >
            <span className="text-3xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-[56px] mb-2 md:mb-0.5 lg:mb-1 xl:mb-1.5 2xl:mb-2.5">
              ●
            </span>{" "}
            Faq
          </h1>
          <h1
            className="font-medium text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl"
            ref={boTextRef}
          >
            (BO® — 07)
          </h1>
        </div>

        <div className="md:w-[23rem] lg:w-[30rem] xl:w-[42rem] 2xl:w-[74rem] text-left text-[28px] md:text-[26px] lg:text-[35px] xl:text-5xl 2xl:text-[80px] leading-7 md:leading-7 lg:leading-9 xl:leading-12 2xl:leading-20 font-[500] tracking-tight md:mt-2">
          {Lines.map((line, index) => (
            <div
              key={index}
              className="relative overflow-hidden mb-1"
              ref={(el) => {
                lineRefs.current[index] = el!;
              }}
            >
              <div
                ref={(el) => {
                  coverRefs.current[index] = el!;
                }}
                className="absolute inset-0 bg-white z-20"
              />
              <div className="relative z-10">{line}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 md:pt-10 lg:pt-18 xl:pt-28 2xl:pt-46 pb-20 md:pb-32 lg:pb-44 xl:pb-64 2xl:pb-[400px]">
        <div className="divide-y divide-black/10 border-black/10 border-t hidden md:flex md:mx-3.5"></div>
        <div className="flex flex-col md:flex-row items-start justify-between px-4 md:px-3.5 lg:px-4 xl:px-6 2xl:px-10 gap-2 md:gap-20 lg:gap-32 xl:gap-40 2xl:gap-[350px]">
          <h2 className="font-medium text-base md:text-[11px] lg:text-[15px] xl:text-xl 2xl:text-4xl mt-8 md:mt-5 lg:mt-6 xl:mt-8 2xl:mt-14">
            Frequently asked questions
          </h2>

          <div className="mt-3 md:mt-1 lg:mt-1 xl:mt-2 2xl:mt-3 md:w-[66%] lg:w-[66.5%] xl:w-[66%] 2xl:w-[66.5%]">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              const isFirst = index === 0;
              const isLast = index === accordionItems.length - 1;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out ${
                    !isFirst
                      ? "border-t border-black/10"
                      : "max-md:border-t border-black/10"
                  } ${isLast ? "border-b border-black/10" : ""}`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6.5 md:py-4 lg:py-[21px] xl:py-8 2xl:py-14 flex items-center text-left cursor-pointer"
                  >
                    <span className="pr-6 md:pr-4 lg:pr-5 xl:pr-6 2xl:pr-10 font-medium w-[15rem] md:w-full text-[16px] md:text-[11px] lg:text-[15px] xl:text-xl 2xl:text-4xl">
                      {item.title}
                    </span>

                    <svg
                      viewBox="0 0 18 18"
                      className={`icon w-4 h-4 md:w-2.5 md:h-2.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-8 2xl:h-8 ml-auto transition-transform duration-300 ${
                        isOpen ? "-rotate-90" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        ref={(el) => {
                          if (!iconRefs.current[index])
                            iconRefs.current[index] = [null, null];
                          iconRefs.current[index][0] = el!;
                        }}
                        d="M9 2 L9 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        ref={(el) => {
                          if (!iconRefs.current[index])
                            iconRefs.current[index] = [null, null];
                          iconRefs.current[index][1] = el!;
                        }}
                        d="M2 9 L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    style={{ height: 0, overflow: "hidden" }}
                  >
                    <div
                      className="text-[#949690] pb-6 lg:pb-8.5 xl:pb-8 2xl:pb-14 text-base md:text-[11px] lg:text-[15px] xl:text-xl 2xl:text-4xl leading-[1.4] md:w-[85%] 2xl:w-[82%]"
                      ref={(el) => {
                        contentInnerRefs.current[index] = el!;
                      }}
                    >
                      {item.content}
                      {item.downgrade && (
                        <div className="mt-6 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-10">
                          {item.downgrade}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <hr className="h-[2px] md:h-[1px] lg:h-[1.5px] xl:h-[2px] 2xl:h-3 bg-black/10 border-none" />
    </section>
  );
};

export default Faq;
