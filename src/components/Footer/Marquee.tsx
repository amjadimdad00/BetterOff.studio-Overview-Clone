"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import horizontalLoop from "@/lib/horizontalLoop";

// Import your 15 images
import WorkLoop1 from "@/assets/WorkLoop/workloop_1.jpg";
import WorkLoop2 from "@/assets/WorkLoop/workloop_2.jpg";
import WorkLoop3 from "@/assets/WorkLoop/workloop_3.jpg";
import WorkLoop4 from "@/assets/WorkLoop/workloop_4.jpg";
import WorkLoop5 from "@/assets/WorkLoop/workloop_5.jpg";
import WorkLoop6 from "@/assets/WorkLoop/workloop_6.jpg";
import WorkLoop7 from "@/assets/WorkLoop/workloop_7.jpg";
import WorkLoop8 from "@/assets/WorkLoop/workloop_8.jpg";
import WorkLoop9 from "@/assets/WorkLoop/workloop_9.jpg";
import WorkLoop10 from "@/assets/WorkLoop/workloop_10.jpg";
import WorkLoop11 from "@/assets/WorkLoop/workloop_11.jpg";
import WorkLoop12 from "@/assets/WorkLoop/workloop_12.jpg";
import WorkLoop13 from "@/assets/WorkLoop/workloop_13.jpg";
import WorkLoop14 from "@/assets/WorkLoop/workloop_14.jpg";
import WorkLoop15 from "@/assets/WorkLoop/workloop_15.jpg";

const imageUrls = [
  WorkLoop1,
  WorkLoop2,
  WorkLoop3,
  WorkLoop4,
  WorkLoop5,
  WorkLoop6,
  WorkLoop7,
  WorkLoop8,
  WorkLoop9,
  WorkLoop10,
  WorkLoop11,
  WorkLoop12,
  WorkLoop13,
  WorkLoop14,
  WorkLoop15,
];

// Select only the first 7 once
const cyclingImages = imageUrls.slice(0, 7);

const Marquee = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".marquee-item");

      const loop = horizontalLoop(items as HTMLElement[], {
        repeat: -1,
        speed: 0.6,
        paddingRight: 50,
      });

      items.forEach((item) => {
        const images =
          item.querySelectorAll<HTMLImageElement>(".cycling-image");
        if (images.length === 0) return;

        gsap.set(images, { display: "none" });
        gsap.set(images[0], { display: "block" });

        let index = 0;

        const cycleImages = () => {
          gsap.set(images, { display: "none" });
          index = (index + 1) % images.length;
          gsap.set(images[index], { display: "block" });
        };

        gsap
          .timeline({ repeat: -1 })
          .call(cycleImages, [], 0)
          .call(cycleImages, [], "+=0.5")
          .call(cycleImages, [], "+=0.5")
          .call(cycleImages, [], "+=0.5")
          .call(cycleImages, [], "+=0.5")
          .call(cycleImages, [], "+=0.5")
          .call(cycleImages, [], "+=0.5");
      });

      return () => loop.kill();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden pt-10 md:pt-6 select-none max-w-screen"
    >
      <div className="flex whitespace-nowrap items-center gap-8 md:gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="marquee-item flex items-center gap-6 text-[160px] md:text-[200px] lg:text-[280px] font-black uppercase leading-none text-white Anton pointer-events-none"
          >
            {/* Cycling Images */}
            <div className="relative w-[160px] h-[160px] md:h-[200px] md:w-[200px] lg:w-[284px] lg:h-[284px] shrink-0">
              {cyclingImages.map((img, j) => (
                <img
                  key={j}
                  src={img.src}
                  alt={`icon-${j}`}
                  className="cycling-image absolute top-[-8px] lg:top-[-14px] left-0 w-full h-full object-contain"
                />
              ))}
            </div>
            Subscribe
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
