"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const imageList = [
  "/CultureLoop/betteroffstudio_culture-loop_1.jpg",
  "/CultureLoop/betteroffstudio_culture-loop_2.jpg",
  "/CultureLoop/betteroffstudio_culture-loop_3.jpg",
  "/CultureLoop/betteroffstudio_culture-loop_4.jpg",
];

const benefitsData = [
  {
    number: "(01)",
    title: "Your deadlines are our lifeblood",
    description:
      "Go ahead, flood us with project requests. Our convenient subscriptions offer retainer-level coverage at fixed, affordable monthly rates.",
  },
  {
    number: "(02)",
    title: "Tap previously unattainable talent",
    description:
      "We’ve already vetted and assembled the most elite roster of specialists out there. Simply plug into our power outlet to crank up your brand.",
  },
  {
    number: "(03)",
    title: "Cancel culture",
    description:
      "Scale on your terms and assume complete control over your creative needs by cancelling or upgrading your plan anytime.",
  },
  {
    number: "(04)",
    title: "Endless revisions are the ultimate flex",
    description:
      "Free yourself from restrictive change order fees! We are committed to polishing your project until you think it’s shiny and perfect.",
  },
  {
    number: "(05)",
    title: "Fast turnarounds, not idle runarounds",
    description:
      "By trimming fat from the bloated agency process, we’re able to meet deadlines at turn rates that average days not weeks.",
  },
  {
    number: "(06)",
    title: "Our thinking sets us apart",
    description:
      "Every partnership comes with the strategic brainpower you’d expect from three decades of combined branding experience.",
  },
];

const Benifits = () => {
  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [randomImage, setRandomImage] = useState<string | null>(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * imageList.length);
    setRandomImage(imageList[index]);
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power2.out", duration: 0.7 },
      });

      if (topTextRef.current) {
        tl.from(topTextRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.05,
        });
      }

      if (bottomTextRef.current) {
        const q = gsap.utils.selector(bottomTextRef);
        tl.from(
          q(".benefit-card"),
          {
            y: 20,
            opacity: 0,
            stagger: 0.3,
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#e5e7df] pb-21 md:pb-32 lg:pb-44 xl:pb-60 2xl:pb-[400px] selection:!bg-[#1e1e1e] selection:!text-white"
    >
      <div
        ref={topTextRef}
        className="mx-3.5 pt-5 md:mx-3 md:pt-2 lg:mx-4 lg:pt-3.5 xl:mx-6 xl:pt-6 2xl:mx-10 2xl:pt-10 flex flex-col md:flex-row justify-between items-start"
      >
        <div className="flex text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-[33px] gap-0.5 text-center items-center uppercase font-medium text-[#1e1e1e] col-span-6 s:col-span-3 tracking-tight">
          <span className="text-3xl md:text-lg lg:text-2xl xl:text-[33px] 2xl:text-6xl mb-1 md:mb-0 lg:mb-0.5 xl:mb-1.5 2xl:mb-2">
            ●
          </span>
          FULL benefits
        </div>
        <div className="-mt-2.5 pl-0.5 md:mt-2 md:pl-0 md:pr-32 lg:pr-44 xl:pr-60 2xl:pr-[420px] tracking-tight">
          <h1 className="font-[500] text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-[33px]">
            (BO® — 05)
          </h1>
        </div>
        <h1 className="relative hidden md:inline-block pt-2 text-[10px] lg:text-[13px] xl:text-lg 2xl:text-[33px]">
          CREATIVE AS A SUBSCRIPTION
        </h1>
      </div>

      <div className="mx-4 lg:mx-7 xl:mx-10 flex justify-center items-center gap-16 md:gap-10 lg:gap-6 xl:gap-0 flex-col font-bold text-[#1e1e1e] Anton leading-none tracking-[0.2em] md:tracking-[0.3em] xl:tracking-[0.7em] mt-10 xl:mt-32">
        <h1 className="uppercase leading-none m-0 p-0 text-[90px] md:text-[220px] lg:text-[290px] xl:text-[420px] 2xl:text-[650px] w-full text-center">
          CREATIVE
        </h1>

        <div className="w-full flex justify-start">
          <h1 className="uppercase leading-none mt-[-70px] text-[90px] md:text-[220px] lg:text-[290px] xl:text-[420px] 2xl:text-[650px] flex gap-2 items-center">
            WITH
            {randomImage && (
              <Image
                src={randomImage}
                alt="Random Visual"
                width={90}
                height={90}
                className="object-contain mb-2.5 md:w-52 lg:w-72 xl:w-[420px] 2xl:w-[660px] md:mb-5 lg:mb-7 xl:mb-10 2xl:mb-16"
                priority
              />
            )}
          </h1>
        </div>

        <h1 className="uppercase leading-none mt-[-70px] text-[90px] md:text-[220px] lg:text-[290px] xl:text-[420px] 2xl:text-[650px] w-full text-center">
          NO FLUFF
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-5 px-4 mt-4 md:px-3 xl:px-6 md:mt-20 lg:px-4 lg:mt-28 xl:mt-40 2xl:mt-68 2xl:px-10">
        <h1 className="text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-[33px] md:w-[16%] xl:w-[14%] 2xl:w-[16%] 2xl:leading-10">
          We've trimmed the fat to focus on essential services at skinny rates.
        </h1>

        <div
          ref={bottomTextRef}
          className="sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-10 lg:gap-y-16 xl:gap-y-22 2xl:gap-y-38"
        >
          {benefitsData.map((benefit, idx) => (
            <div
              key={idx}
              className="benefit-card flex flex-col space-y-[16px] md:space-y-[12px] xl:space-y-[20px] 2xl:space-y-[32px]"
            >
              <div className="text-base md:text-[11px] lg:text-[15px] xl:text-xl 2xl:text-[33px] font-medium">
                {benefit.number}
              </div>
              <div className="h-[1px] w-full bg-black/20" />
              <h4 className="text-base md:text-[11px] lg:text-[15px] xl:text-xl 2xl:text-[33px] font-medium text-[#1e1e1e] leading-tight">
                {benefit.title}
              </h4>
              <p className="text-base md:text-[11px] lg:text-[15px] xl:text-xl 2xl:text-[33px] font-medium text-[#949690] leading-[1.4] xl:w-[94%]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benifits;
