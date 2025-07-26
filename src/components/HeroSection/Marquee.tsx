"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import horizontalLoop from "@/lib/horizontalLoop";

const Marquee = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".marquee-item");

      const loop = horizontalLoop(items, {
        repeat: -1,
        speed: 0.6,
        paddingRight: 50,
      });

      return () => {
        loop.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pt-8 md:pt-0 md:-mt-5 lg:-mt-3 xl:mt-1.5 lg:pb-4 my-0 select-none"
    >
      <div className="flex whitespace-nowrap items-center gap-6 lg:gap-16 px-4 py-0">
        {[...Array(8)].map((_, i) => (
          <h4
            key={i}
            className="marquee-item text-[150px] md:text-[200px] lg:text-[280px] xl:text-[390px] 2xl:text-[650px] font-black text-[#1e1e1e] uppercase font-marquee Anton leading-none pointer-events-none"
          >
            Subscribe
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
