"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConciergeCreative: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const iconWrapperRefs = useRef<SVGSVGElement[]>([]);
  const iconRefs = useRef<[SVGPathElement | null, SVGPathElement | null][]>([]);

  const iconWrapperRefsDesktop = useRef<SVGSVGElement[]>([]);
  const iconRefsDesktop = useRef<
    [SVGPathElement | null, SVGPathElement | null][]
  >([]);

  const leftTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<HTMLDivElement[]>([]);
  const lineRefsDesktop = useRef<HTMLDivElement[]>([]);
  const accordionHeadingRef = useRef<HTMLHeadingElement>(null);
  const accordionHeadingRefDesktop = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const accordionRefDesktop = useRef<HTMLDivElement>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentInnerRefs = useRef<HTMLDivElement[]>([]);

  const contentRefsMobile = useRef<(HTMLDivElement | null)[]>([]);
  const contentInnerRefsMobile = useRef<HTMLDivElement[]>([]);

  const toggleAccordion = (index: number, isMobile = false) => {
    if (openIndex === index) {
      closeAccordion(index, isMobile);
      setOpenIndex(null);
    } else {
      if (openIndex !== null) closeAccordion(openIndex, isMobile);
      openAccordion(index, isMobile);
      setOpenIndex(index);
    }
  };

  const openAccordion = (index: number, isMobile = false) => {
    const content = isMobile
      ? contentRefsMobile.current[index]
      : contentRefs.current[index];
    const inner = isMobile
      ? contentInnerRefsMobile.current[index]
      : contentInnerRefs.current[index];
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

  const closeAccordion = (index: number, isMobile = false) => {
    const content = isMobile
      ? contentRefsMobile.current[index]
      : contentRefs.current[index];
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
    iconRefsDesktop.current.forEach((paths, i) => {
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
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          once: true,
        },
      });

      if (leftTextRef.current) {
        tl.fromTo(
          leftTextRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          0
        );
      }

      lineRefs.current.forEach((el, i) => {
        if (el) {
          tl.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            0.1 + i * 0.15
          );
        }
      });

      lineRefsDesktop.current.forEach((el, i) => {
        if (el) {
          tl.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            },
            0.1 + i * 0.15
          );
        }
      });

      if (accordionHeadingRef.current) {
        tl.fromTo(
          accordionHeadingRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          0.4
        );
      }

      if (accordionHeadingRefDesktop.current) {
        tl.fromTo(
          accordionHeadingRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          0.4
        );
      }

      if (accordionRef.current) {
        tl.fromTo(
          accordionRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          0.45
        );
      }

      if (accordionRefDesktop.current) {
        tl.fromTo(
          accordionRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          0.45
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const Lines = [
    "Superior brands require sophisticated",
    "capabilities that many businesses couldn't",
    "access until now.",
  ];

  const strategyItems = [
    "Brand Architecture & Roadmaps",
    "Brand Strategy",
    "Digital Strategy",
    "Product Launch Strategy",
    "SEO & Content Strategy",
    "Information Architecture (IA)",
    "Design Systems",
    "Brand Messaging",
    "User Research & Testing",
    "New Revenue Streams",
  ];

  const designItems = [
    "Brand Identity",
    "Brand Guidelines",
    "UX and UI Design",
    "Website & App Design",
    "Art Direction",
    "Product Concepting",
    "Rapid Prototyping",
    "Motion Design",
    "Product Interfaces",
  ];

  const techItems = [
    "No-code Framer Solutions",
    "Webflow Solutions",
    "Shopify Plus (Partners)",
    "Advanced E-commerce",
    "WordPress Specialists",
    "Full Stack Development",
    "Journey Mapping & Testing",
    "Accessibility (WCAG) 2.1",
  ];

  const accordionItems = [
    {
      title: "Strategy",
      number: "1",
      content: (
        <>
          <p className="mb-4">
            Behind every surprising campaign, compelling site launch, or
            must-watch piece of content, there’s a well-considered strategy that
            engineered the outcome. During this crucial phase, we address the
            foundational and psychological factors that drive the desired
            interaction between brand and customer. We match logic-based
            journeys with pinpoint executions that create memorable and lasting
            engagements.
          </p>
          <ul className="no-underline flex flex-wrap gap-2 md:gap-1 xl:gap-2 text-[13px] md:text-[8px] xl:text-[15px] pt-5 md:pt-2 xl:pt-6">
            {strategyItems.map((item, idx) => (
              <li
                key={idx}
                className="bg-[#353535] text-white px-4 py-2 md:py-1 md:px-2 xl:px-4 xl:py-2 rounded-md md:rounded-sm font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Design",
      number: "2",
      content: (
        <>
          <p className="mb-4">
            Our design services focus on pitch-perfect brand identities,
            flawless UX and UI design, and unforgettable product builds that
            ensure your vision is brought to life with intention and precision.
            Our rapid prototyping and ironclad design systems streamline the
            development process, while our expertise in information architecture
            and motion design enhances usability and engagement. We create
            intuitive product interfaces and captivating social media designs
            that pop off the screen and elicit action.
          </p>
          <ul className="no-underline flex flex-wrap gap-2 md:gap-1 xl:gap-2 text-[13px] md:text-[8px] xl:text-[15px] pt-5 md:pt-2 xl:pt-6">
            {designItems.map((item, idx) => (
              <li
                key={idx}
                className="bg-[#353535] text-white px-4 py-2 md:py-1 md:px-2 xl:px-4 xl:py-2 rounded-md md:rounded-sm font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Technology",
      number: "3",
      content: (
        <>
          <p className="mb-4">
            We build full-stack digital brand extensions that serve as the
            online anchors of our clients’ multichannel narratives. Our no-code
            Framer and Webflow solutions enable rapid and efficient development
            timelines for both sites and products. As Shopify Plus e-commerce
            partners and WordPress master developers, we offer the most advanced
            functionality options paired with the simplest and most robust
            content management systems. When it comes to development, our
            velocity and versatility is unrivaled.
          </p>
          <ul className="no-underline flex flex-wrap gap-2 md:gap-1 xl:gap-2 text-[13px] md:text-[8px] xl:text-[15px] pt-5 md:pt-2 xl:pt-6">
            {techItems.map((item, idx) => (
              <li
                key={idx}
                className="bg-[#353535] text-white px-4 py-2 md:py-1 md:px-2 xl:px-4 xl:py-2 rounded-md md:rounded-sm font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];

  return (
    <section
      className="bg-[#1e1e1e] text-white selection:bg-white selection:text-[#1e1e1e] overflow-hidden"
      ref={sectionRef}
    >
      {/* Mobile Layout */}
      <div className="md:hidden px-4 pt-5">
        <div className="flex flex-col justify-center mb-7">
          <h1 className="text-base font-bold tracking-tight flex items-center gap-1">
            <span className="text-3xl mb-1">●</span> CONCIERGE CREATIVE
          </h1>
          <h1 className="font-bold text-base mt-[-8px]">(BO® — 03)</h1>
        </div>

        <h1 className="uppercase font-bold text-center Anton text-[80px] leading-none tracking-wider mb-5">
          Services
        </h1>

        <div className="text-left text-[28px] leading-[1] font-[500] tracking-tight mb-8">
          {Lines.map((line, index) => (
            <div
              key={index}
              className="relative overflow-hidden mb-1"
              ref={(el) => {
                lineRefs.current[index] = el!;
              }}
            >
              <div className="relative z-10">{line}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center justify-center pb-32 pt-4 md:pt-16">
        <h2
          ref={accordionHeadingRef}
          className="w-full font-bold text-base mb-2 px-4"
        >
          Our process and capabilities include:
        </h2>

        <div ref={accordionRef} className="w-full px-4 mt-3">
          <div className="divide-y divide-white/20">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-white/20 border-b overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index, true)}
                    className="w-full py-6 flex items-center text-left cursor-pointer"
                  >
                    <span className="pr-6 font-medium text-base">
                      {item.title}
                    </span>

                    <svg
                      ref={(el) => {
                        if (el) iconWrapperRefs.current[index] = el;
                      }}
                      viewBox="0 0 18 18"
                      className={`icon w-4 h-4 ml-auto transition-transform duration-300 ${
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
                      contentRefsMobile.current[index] = el;
                    }}
                    style={{ height: 0, overflow: "hidden" }}
                  >
                    <div
                      className="text-[#949690] pb-6 text-base leading-[1.38] w-full"
                      ref={(el) => {
                        contentInnerRefsMobile.current[index] = el!;
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col">
        <div className="flex flex-row items-start justify-between px-3 pt-2 lg:px-4 lg:pt-4 xl:px-6 xl:pt-6 2xl:px-10 2xl:pt-10">
          <div className="leading-none" ref={leftTextRef}>
            <h1 className="text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl font-bold tracking-tight flex items-center xl:gap-1 -mb-2 xl:-mb-3.5">
              <span className="text-lg lg:text-2xl xl:text-3xl 2xl:text-[56px] mb-1 lg:mb-0.5 xl:mb-1 2xl:mb-2.5">
                ●
              </span>{" "}
              CONCIERGE CREATIVE
            </h1>
            <h1 className="font-bold text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl">
              (BO® — 03)
            </h1>
          </div>

          <div className="text-left pt-2 pr-3 xl:pr-8 2xl:pr-40 2xl:pt-5 text-[26px] lg:text-[35px] xl:text-5xl 2xl:text-[80px] leading-7 lg:leading-9 xl:leading-13 2xl:leading-22 font-[500]">
            {Lines.map((line, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                ref={(el) => {
                  lineRefsDesktop.current[index] = el!;
                }}
              >
                <div className="relative z-10">{line}</div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="uppercase font-bold text-center Anton text-[216px] lg:text-[280px] xl:text-[400px] 2xl:text-[650px] leading-none tracking-[0.03em] lg:tracking-[0.05em] mt-10 lg:mt-13 xl:mt-16 2xl:mt-28">
          Services
        </h1>
      </div>

      <div className="hidden md:flex flex-col items-center justify-center pb-32 lg:pb-[168px] 2xl:pb-[400px] pt-1.5 lg:pt-5 xl:pt-7 2xl:pt-12">
        <h2
          ref={accordionHeadingRefDesktop}
          className="w-[31.5%] font-bold text-[11px] lg:text-base xl:text-[20px] 2xl:text-[32px] mb-2 px-6 md:px-0 tracking-tight"
        >
          Our process and capabilities include:
        </h2>

        <div
          ref={accordionRefDesktop}
          className="w-full md:w-[62%] lg:w-[60%] xl:w-[59%] 2xl:w-[58%] ml-[185px] lg:ml-[245px] xl:ml-[350px] 2xl:ml-[630px] px-6 mt-1 lg:mt-1.5 xl:mt-4 2xl:mt-7"
        >
          <div className="divide-y divide-white/20">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-white/20 border-b overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
                    index === 0 ? "border-t" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-4 lg:py-5 xl:py-7 2xl:py-13 flex items-center text-left cursor-pointer"
                  >
                    <span className="w-[60px] lg:w-[75px] xl:w-[105px] 2xl:w-[170px] text-[11px] lg:text-[15px] xl:text-xl 2xl:text-4xl">
                      {item.number}
                    </span>
                    <span className="font-medium text-[11px] lg:text-[15px] xl:text-xl 2xl:text-4xl">
                      {item.title}
                    </span>

                    <svg
                      ref={(el) => {
                        if (el) iconWrapperRefsDesktop.current[index] = el;
                      }}
                      viewBox="0 0 18 18"
                      className={`icon w-3 h-3 xl:h-5 xl:w-5 2xl:w-8 2xl:h-8 ml-auto transition-transform duration-300 ${
                        isOpen ? "-rotate-90" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        ref={(el) => {
                          if (!iconRefsDesktop.current[index])
                            iconRefsDesktop.current[index] = [null, null];
                          iconRefsDesktop.current[index][0] = el!;
                        }}
                        d="M9 2 L9 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        ref={(el) => {
                          if (!iconRefsDesktop.current[index])
                            iconRefsDesktop.current[index] = [null, null];
                          iconRefsDesktop.current[index][1] = el!;
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
                      className="text-[#949690] pb-6 xl:pb-12 pl-[60px] xl:pl-[105px] text-[11px] xl:text-xl leading-[1.3] xl:leading-[1.4] w-full md:w-[98%]"
                      ref={(el) => {
                        contentInnerRefs.current[index] = el!;
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <hr className="h-[2px] 2xl:h-1 bg-white/20 border-none" />
    </section>
  );
};

export default ConciergeCreative;
