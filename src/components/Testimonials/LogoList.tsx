"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import type { StaticImageData } from "next/image";

import Logo1 from "@/assets/Testimonal/hoco_logo.png";
import Logo2 from "@/assets/Testimonal/royal-caribbean_logo.png";
import Logo3 from "@/assets/Testimonal/built_logo.png";
import Logo4 from "@/assets/Testimonal/spacecraft_logo.png";

type LogoListProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const logos: StaticImageData[] = [Logo1, Logo2, Logo3, Logo4];

const LogoList = ({ activeIndex, setActiveIndex }: LogoListProps) => {
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const prevIndex = useRef<number>(activeIndex);

  useEffect(() => {
    const prev = itemRefs.current[prevIndex.current];
    const current = itemRefs.current[activeIndex];

    const prevUnderline = prev?.querySelector(".underline") as HTMLDivElement;
    const currentUnderline = current?.querySelector(
      ".underline"
    ) as HTMLDivElement;

    if (prevUnderline && prevIndex.current !== activeIndex) {
      gsap.to(prevUnderline, {
        width: 0,
        left: "101%",
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(prevUnderline, { left: "0%" });
        },
      });
    }

    if (currentUnderline) {
      gsap.fromTo(
        currentUnderline,
        { width: 0, left: "0%" },
        {
          width: "100%",
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }

    prevIndex.current = activeIndex;
  }, [activeIndex]);

  return (
    <div className="mx-4 md:mx-3 xl:mx-6 2xl:mx-10 border border-white/20 overflow-auto md:overflow-hidden select-none">
      <div className="relative flex">
        {logos.map((logo, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            ref={(el) => {
              if (el) itemRefs.current[index] = el;
            }}
            className={`cursor-pointer flex items-center justify-center
          w-full md:w-auto max-sm:min-w-[39.5%] max-sm:min-h-[5.5rem] md:min-w-[20%] md:min-h-[5.8rem] 
          lg:min-h-[7.8rem] xl:min-h-[10.8rem] 2xl:min-h-[19rem] transition-all duration-300 relative
          ${index !== logos.length - 1 ? "border-r border-white/20" : ""}
        `}
          >
            <div className="underline absolute top-0 left-0 h-[1px] xl:h-[2px] 2xl:h-[4px] bg-white w-0" />
            <figure className="w-[2.8rem] md:w-[2.4rem] lg:w-[5rem] xl:w-[12rem] xl:h-[4.5rem] 2xl:w-[16rem] 2xl:h-[7.5rem] h-[3rem] relative">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                fill
                className="object-contain"
                draggable={false}
                priority={index < 4}
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoList;
