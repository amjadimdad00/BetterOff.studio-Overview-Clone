"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CustomImg from "@/assets/1742567030-1.jpg";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const GetToKnowUs = () => {
  const headingRefs = useRef<HTMLDivElement[]>([]);
  const textLinesRefs = useRef<HTMLDivElement[]>([]);
  const coverRefs = useRef<HTMLDivElement[]>([]);
  const imageWrapperRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const getRef = useRef<HTMLHeadingElement>(null);
  const toRef = useRef<HTMLHeadingElement>(null);
  const knowUsRef = useRef<HTMLHeadingElement>(null);
  const imageTextRef = useRef<HTMLImageElement>(null);

  const [randomImage, setRandomImage] = useState<string | null>(null);

  const imageList = [
    "/CultureLoop/betteroffstudio_culture-loop_1.jpg",
    "/CultureLoop/betteroffstudio_culture-loop_2.jpg",
    "/CultureLoop/betteroffstudio_culture-loop_3.jpg",
    "/CultureLoop/betteroffstudio_culture-loop_4.jpg",
  ];

  useEffect(() => {
    const index = Math.floor(Math.random() * imageList.length);
    setRandomImage(imageList[index]);
  }, [imageList]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Master timeline that triggers when section comes into view
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Header section animation
      headingRefs.current.forEach((ref, i) => {
        if (ref) {
          masterTL.from(
            ref,
            {
              y: 30,
              opacity: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            i === 0 ? undefined : "-=0.5"
          );
        }
      });

      // GET text animation
      if (getRef.current) {
        masterTL.from(
          getRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }

      // Image animation
      if (imageTextRef.current) {
        masterTL.from(
          imageTextRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      // TO text animation
      if (toRef.current) {
        masterTL.from(
          toRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      // KNOW US text animation
      if (knowUsRef.current) {
        masterTL.from(
          knowUsRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      // Reveal text lines with cover animation
      const validLines = textLinesRefs.current.filter(Boolean);
      const covers = coverRefs.current.filter(Boolean);

      masterTL.to(
        covers,
        {
          y: "100%",
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.5"
      );

      masterTL.from(
        validLines,
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.8"
      );

      // Hover zoom effect on image
      const wrapper = imageWrapperRef.current;
      const img = imageRef.current;
      if (!wrapper || !img) return;

      const zoomIn = () => {
        gsap.to(img, {
          scale: 1.1,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      const zoomOut = () => {
        gsap.to(img, {
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        });
      };

      wrapper.addEventListener("mouseenter", zoomIn);
      wrapper.addEventListener("mouseleave", zoomOut);
      wrapper.addEventListener("touchstart", zoomIn);
      wrapper.addEventListener("touchend", zoomOut);

      return () => {
        wrapper.removeEventListener("mouseenter", zoomIn);
        wrapper.removeEventListener("mouseleave", zoomOut);
        wrapper.removeEventListener("touchstart", zoomIn);
        wrapper.removeEventListener("touchend", zoomOut);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const lines = [
    "More than a blog, The Feed is our point of view. It reflects who we are and what we're into. It's where industry, culture, lifestyle, and our own work intersect in a meaningful way.",
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#e5e7df] pb-18 lg:pb-24 2xl:pb-60 selection:!bg-[#1e1e1e] selection:!text-white"
    >
      {/* Header Section */}
      <div className="mx-3.5 pt-4 md:pt-2 lg:pt-3 xl:pt-6 xl:mx-6 2xl:mx-10 2xl:pt-7 flex flex-col md:flex-row justify-between items-center">
        <div
          className="text-base md:text-[10px] lg:text-sm xl:text-xl 2xl:text-[32px] gap-1 items-center uppercase font-medium text-[#1e1e1e] flex tracking-tight"
          ref={(el) => {
            headingRefs.current[0] = el!;
          }}
        >
          <span className="text-3xl md:text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl mb-1 2xl:mb-2">
            ●
          </span>
          what w&apos;ere about
        </div>
        <div
          className="tracking-tight"
          ref={(el) => {
            headingRefs.current[1] = el!;
          }}
        >
          <h1 className="font-[500] text-base -mt-2.5 md:mt-0 md:text-[10px] lg:text-sm xl:text-xl 2xl:text-[32px] md:mr-32 lg:mr-40 xl:mr-56 2xl:mr-[440px]">
            (BO® — 08)
          </h1>
        </div>
        <h1
          className="hidden md:inline-block text-[10px] lg:text-sm xl:text-xl 2xl:text-[32px]"
          ref={(el) => {
            headingRefs.current[2] = el!;
          }}
        >
          CREATIVE AS BUNDLED PROJECTS
        </h1>
      </div>

      {/* Hero Section */}
      <div className="mx-4 lg:mx-7 xl:mx-10 flex justify-center items-center flex-col font-bold text-[#1e1e1e] Anton leading-none tracking-[0.2em] md:tracking-[0.3em] xl:tracking-[0.7em] mt-10 xl:mt-16 2xl:mt-28">
        <div className="hidden md:flex items-end gap-4 lg:gap-6">
          <h1
            ref={getRef}
            className="uppercase text-[90px] md:text-[220px] lg:text-[290px] xl:text-[420px] 2xl:text-[650px]"
          >
            GET
          </h1>
          {randomImage && (
            <Image
              ref={imageTextRef}
              src={randomImage}
              alt="Random Visual"
              width={400}
              height={400}
              className="object-contain mb-8 md:mb-10 lg:mb-14 xl:mb-24 md:w-56 lg:w-72 xl:w-[400px] 2xl:w-[660px]"
              priority
            />
          )}
          <h1
            ref={toRef}
            className="uppercase text-[90px] md:text-[220px] lg:text-[290px] xl:text-[420px] 2xl:text-[650px]"
          >
            TO
          </h1>
        </div>
        <h1
          ref={knowUsRef}
          className="hidden md:block uppercase text-[90px] md:text-[220px] lg:text-[290px] xl:text-[420px] 2xl:text-[650px] mt-[-70px] md:mt-[-40px] lg:mt-[-50px] xl:mt-[-70px] 2xl:mt-[-100px]"
        >
          KNOW US
        </h1>

        {/* Mobile Version */}
        <div className="md:hidden flex flex-col items-center">
          <div className="flex gap-4">
            <h1 className="uppercase text-7xl">GET</h1>
            <h1 className="uppercase text-7xl">TO</h1>
          </div>
          <h1 className="uppercase text-7xl -mt-3">KNOW US</h1>
          {randomImage && (
            <Image
              src={randomImage}
              alt="Random Visual"
              width={300}
              height={300}
              className="object-contain mt-11"
              priority
            />
          )}
        </div>
      </div>

      {/* Article and Text Reveal */}
      <div className="flex justify-between flex-col-reverse md:flex-row mx-4 pt-8 md:mx-3 lg:mx-4 xl:mx-6 lg:pt-9 xl:pt-14 2xl:mx-10 2xl:pt-24">
        {/* Zoomable Image Card */}
        <Link
          href="/"
          ref={imageWrapperRef}
          className="flex flex-col gap-2 cursor-pointer overflow-hidden pt-10 md:pt-0 md:w-fit"
        >
          <Image
            ref={imageRef}
            src={CustomImg}
            alt="CustomImage"
            width={320}
            height={320}
            className="object-cover w-[275px] h-[150px] md:w-[180px] md:h-[100px] lg:w-[240px] lg:h-[135px] xl:w-[335px] xl:h-[190px] 2xl:w-[600px] 2xl:h-[330px]"
            priority
          />
          <div className="text-left text-base md:text-[10px] lg:text-sm xl:text-[19px] 2xl:text-[33px] font-[500] tracking-tight flex flex-col gap-1 pt-2 md:pt-0 2xl:pt-4">
            <h1>Channel Islands Retains Its Roots.</h1>
            <h1 className="text-black/50">Article - 7 minute read</h1>
          </div>
        </Link>

        {/* Animated Text Block */}
        <div className="text-left text-[28px] md:text-[26px] lg:text-[36px] xl:text-[50px] 2xl:text-[80px] font-[500] leading-7 lg:leading-9 xl:leading-13 2xl:leading-22 tracking-tight w-[17.5rem] md:w-[26rem] lg:w-[36rem] xl:w-[50rem] 2xl:w-[88rem] 2xl:mr-4">
          {lines.map((line, i) => (
            <div
              key={i}
              className="relative overflow-hidden mb-1"
              ref={(el) => {
                textLinesRefs.current[i] = el!;
              }}
            >
              <div
                className="absolute inset-0 bg-[#e5e7df] z-10"
                ref={(el) => {
                  coverRefs.current[i] = el!;
                }}
              />
              <div className="relative z-20">{line}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetToKnowUs;
