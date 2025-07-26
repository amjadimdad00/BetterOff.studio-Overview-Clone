"use client";

import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Oleksandra from "@/assets/Testimonal/oleksandra_testimonial.jpg";
import RoyalCaribbean from "@/assets/Testimonal/royalcaribbean_testimonial.jpg";
import BuiltThings from "@/assets/Testimonal/builtthings_testimonial.jpg";
import FranMayo from "@/assets/Testimonal/fran-mayo_testimonial.jpg";
import LogoList from "./LogoList";

type Testimonial = {
  index: number;
  quote: string[];
  name: string;
  role: string;
  image: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    index: 1,
    quote: [
      "“Referred by a friend, we appreciated this team's clear pricing and flexible staffing for our major site launches, including Shopify development. They're now our go-to team in a pinch.”",
    ],
    name: "Oleksandra Zubrytska",
    role: "The Hollis Co. / Technical Project Manager",
    image: Oleksandra,
  },
  {
    index: 2,
    quote: [
      "“This team excelled under pressure, delivering a standout UX/UI update to our booking section that redefined our collaboration and became a highlight for Royal Caribbean.”",
    ],
    name: "Tina Rossell",
    role: "Royal Caribbean / Marketing Manager",
    image: RoyalCaribbean,
  },
  {
    index: 3,
    quote: [
      "“We've partnered with Better Off for years, and are always impressed by their innovative brand development and precise execution. Their work during our recent rebrand matched our vision perfectly.”",
    ],
    name: "Andrew Watson",
    role: "Built Things / Owner",
    image: BuiltThings,
  },
  {
    index: 4,
    quote: [
      "“We have a long history with this company and several major projects together. Their expertise consistently makes us look good.”",
    ],
    name: "Fran Mayo",
    role: "Space Craft / Marketing Manager",
    image: FranMayo,
  },
];

const revealCoversExit = (covers: HTMLElement[]): Promise<void> => {
  const validCovers = covers.filter(Boolean);
  if (validCovers.length === 0) return Promise.resolve();

  return new Promise((resolve) => {
    gsap.to(validCovers, {
      y: "0%",
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.05,
      onComplete: resolve,
    });
  });
};

const staggerOnScrollExit = (
  targets: (Element | null)[] | null
): Promise<void> => {
  if (!targets) return Promise.resolve();

  const validTargets = targets.filter((el): el is Element => el !== null);
  if (validTargets.length === 0) return Promise.resolve();

  return new Promise((resolve) => {
    gsap.to(validTargets, {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power4.in",
      stagger: 0.01,
      onComplete: resolve,
    });
  });
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const active = testimonials[activeIndex];

  const headingBlockRef = useRef<HTMLDivElement | null>(null);
  const testimonialCoverRefs = useRef<HTMLElement[]>([]);
  const testimonialTextRefs = useRef<HTMLElement[]>([]);
  const testimonialBlockRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const hasAnimatedRef = useRef(false);

  testimonialCoverRefs.current = [];
  testimonialTextRefs.current = [];

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const heading = headingBlockRef.current;
      if (!heading) return;

      gsap.fromTo(
        heading,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const covers = testimonialCoverRefs.current;
      const texts = testimonialTextRefs.current;

      const hasEnough =
        covers.length >= active.quote.length + 2 &&
        texts.length >= active.quote.length + 2;

      if (!hasEnough) return;

      if (!hasAnimatedRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: testimonialBlockRef.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
              hasAnimatedRef.current = true;

              covers.forEach((cover, i) => {
                if (cover) {
                  tl.fromTo(
                    cover,
                    { y: "0%" },
                    { y: "-100%", duration: 1.2, ease: "power4.out" },
                    0.2 + i * 0.1
                  );
                }
              });

              texts.forEach((text, i) => {
                if (text) {
                  tl.fromTo(
                    text,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
                    0.3 + i * 0.1
                  );
                }
              });
            },
          },
        });
      } else {
        const tl = gsap.timeline();

        covers.forEach((cover, i) => {
          if (cover) {
            tl.fromTo(
              cover,
              { y: "0%" },
              { y: "-100%", duration: 1.2, ease: "power4.out" },
              0.2 + i * 0.1
            );
          }
        });

        texts.forEach((text, i) => {
          if (text) {
            tl.fromTo(
              text,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
              0.3 + i * 0.1
            );
          }
        });
      }
    }, [activeIndex]);

    return () => ctx.revert();
  }, [activeIndex]);

  useEffect(() => {
    if (!imageRef.current) return;

    imageRef.current.animate(
      [
        {
          transform: "scale(1)",
          clipPath: "circle(0% at 50% 50%)",
          opacity: 1,
        },
        {
          transform: "scale(1)",
          clipPath: "circle(100% at 50% 50%)",
          opacity: 1,
        },
      ],
      {
        duration: 700,
        easing: "ease-in",
        fill: "forwards",
      }
    );
  }, [activeIndex]);

  const handleChangeTestimonial = async (newIndex: number) => {
    if (newIndex === activeIndex || animating) return;
    setAnimating(true);

    const texts = testimonialTextRefs.current;
    const covers = testimonialCoverRefs.current;

    await Promise.all([
      revealCoversExit(covers),
      staggerOnScrollExit(texts),
      imageRef.current
        ? imageRef.current.animate(
            [
              {
                transform: "scale(1)",
                clipPath: "circle(100% at 50% 50%)",
                opacity: 1,
              },
              {
                transform: "scale(1)",
                clipPath: "circle(0% at 50% 50%)",
                opacity: 1,
              },
            ],
            {
              duration: 500,
              easing: "ease-out",
              fill: "forwards",
            }
          ).finished
        : Promise.resolve(),
    ]);

    setActiveIndex(newIndex);
    setAnimating(false);
  };

  return (
    <div className="bg-[#1e1e1e] text-white selection:bg-white selection:text-[#1e1e1e] pb-7 lg:pb-5 xl:pb-7 2xl:pb-14 pt-4.5 md:pt-3 lg:pt-4 xl:pt-6.5 2xl:pt-9.5">
      {/* Heading */}
      <div
        ref={headingBlockRef}
        className="px-3.5 md:px-3 lg:px-4 xl:px-6 2xl:px-10 flex flex-col md:flex-row justify-between items-start md:gap-4 pb-12"
      >
        <h1 className="flex text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-4xl gap-0.5 items-center uppercase font-medium tracking-tight -mb-2.5">
          <span className="text-3xl md:text-base lg:text-2xl xl:text-3xl 2xl:text-[56px] mb-1 md:mb-0.5 xl:mb-1.5 2xl:mb-2">
            ●
          </span>{" "}
          Client Approval
        </h1>
        <div className="w-full md:w-[40%] lg:w-[39%] 2xl:w-[40%] md:pt-1 lg:pt-1.5 xl:pt-2 2xl:pt-4 font-bold">
          <h1 className="text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl">
            CREATIVE AS BUNDLED PROJECTS
          </h1>
        </div>
        <div className="tracking-tight">
          <h1 className="font-[500] text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl md:mt-1 lg:mt-1.5 xl:mt-2 2xl:mt-4">
            (BO® — 04)
          </h1>
        </div>
      </div>

      {/* Testimonal & Count */}

      <div
        ref={testimonialBlockRef}
        className="flex flex-col md:flex-row justify-between gap-6 md:gap-48 px-4 md:px-3 lg:px-4 xl:px-6 2xl:px-10 pt-8 md:pt-7 lg:pt-13 xl:pt-23.5 2xl:pt-48 pb-21 md:pb-19 lg:pb-7 xl:pb-36 2xl:pb-58 lg:min-h-[260px]"
      >
        <h1 className="w-[35%] lg:w-[60%] xl:w-[80%] 2xl:w-[101%] font-bold text-[15px] md:text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl">
          {active.index} — {testimonials.length}
        </h1>

        <div className="flex flex-col transition-all duration-500 ease-in-out lg:min-h-[330px]">
          {active.quote.map((line, i) => (
            <div
              key={i}
              className="relative overflow-hidden text-[25px] md:text-[24px] lg:text-[32px] xl:text-[45px] 2xl:text-[80px] md:tracking-tight md:leading-7 lg:leading-9 xl:leading-13 2xl:leading-22 font-bold text-white leading-[1.2]"
            >
              <p
                className="relative z-10"
                ref={(el) => {
                  if (el) testimonialTextRefs.current[i] = el;
                }}
              >
                {line}
              </p>
              <div
                className="absolute inset-0 bg-[#1e1e1e] z-20"
                ref={(el) => {
                  if (el) testimonialCoverRefs.current[i] = el;
                }}
              />
            </div>
          ))}

          {/* Name + Role + Image */}
          <div className="mt-9 md:mt-6 lg:mt-10 xl:mt-12 2xl:mt-16 flex items-center gap-4 md:gap-2 lg:gap-4 xl:gap-5 2xl:gap-8 2xl:ml-2">
            <div className="w-full h-full max-w-[46px] max-h-[46px] md:max-w-[30px] md:max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] xl:max-w-[54px] xl:max-h-[54px] 2xl:max-w-[92px] 2xl:max-h-[92px] rounded-full overflow-hidden">
              <Image
                ref={imageRef}
                src={active.image}
                alt={active.name}
                className="w-full h-full object-cover rounded-full"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  willChange: "transform, clip-path, opacity",
                }}
              />
            </div>
            <div className="space-y-0 text-[15px] md:text-[10px] lg:text-sm xl:text-[17px] 2xl:text-[30px]">
              <div className="relative overflow-hidden">
                <p
                  className="relative z-10 font-semibold text-white"
                  ref={(el) => {
                    if (el)
                      testimonialTextRefs.current[active.quote.length] = el;
                  }}
                >
                  {active.name}
                </p>
                <div
                  className="absolute inset-0 bg-[#1e1e1e] z-20"
                  ref={(el) => {
                    if (el)
                      testimonialCoverRefs.current[active.quote.length] = el;
                  }}
                />
              </div>
              <div className="relative overflow-hidden">
                <p
                  className="relative z-10 font-semibold text-white"
                  ref={(el) => {
                    if (el)
                      testimonialTextRefs.current[active.quote.length + 1] = el;
                  }}
                >
                  {active.role}
                </p>
                <div
                  className="absolute inset-0 bg-[#1e1e1e] z-20"
                  ref={(el) => {
                    if (el)
                      testimonialCoverRefs.current[active.quote.length + 1] =
                        el;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Navigation */}
      <LogoList
        activeIndex={activeIndex}
        setActiveIndex={handleChangeTestimonial}
      />
    </div>
  );
};

export default Testimonials;
