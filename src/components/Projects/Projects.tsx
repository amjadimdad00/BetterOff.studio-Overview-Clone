// "use client";

// import Link from "next/link";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useUnderlineAnim } from "@/hooks/useUnderlineAnim";

// const Projects = () => {
//   const ctaRef1 = useRef<HTMLAnchorElement>(null);
//   const ctaRef2 = useRef<HTMLAnchorElement>(null);
//   useUnderlineAnim([], ctaRef1);
//   useUnderlineAnim([], ctaRef2);

//   const topTextRef = useRef<HTMLDivElement>(null);
//   const bottomTextRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       defaults: { ease: "power2.out", duration: 0.8 },
//     });

//     if (topTextRef.current) {
//       tl.from(topTextRef.current.children, {
//         y: 30,
//         opacity: 0,
//         stagger: 0.1,
//       });
//     }

//     if (bottomTextRef.current) {
//       tl.from(
//         bottomTextRef.current.children,
//         {
//           y: 30,
//           opacity: 0,
//           stagger: 0.1,
//         },
//         "-=0.4"
//       );
//     }
//   }, []);

//   return (
//     <div className="bg-white pb-[118px] selection:bg-[#1e1e1e] selection:text-white">
//       <div
//         ref={topTextRef}
//         className="mx-[22px] flex justify-between items-start pt-6"
//       >
//         <div className="flex text-lg gap-1 text-center items-center uppercase font-medium text-[#1e1e1e] col-span-6 s:col-span-3 mb-10 tracking-tight">
//           <span className="text-3xl mb-1">●</span> PROJECTS
//         </div>

//         <div className="mt-1.5 tracking-tight w-[30%]">
//           <h1 className="font-[500] text-lg">(BO® — 02)</h1>
//         </div>

//         <div>
//           <Link href="/work">
//             <span
//               ref={ctaRef1}
//               className="pt-3 relative inline-block text-[18.2px] project-cta"
//             >
//               See all of our work
//             </span>
//           </Link>
//         </div>
//       </div>

//       <div className="flex justify-center items-center flex-col font-bold text-[#1e1e1e] text-[420px] Anton leading-none tracking-[0.01em] overflow-hidden">
//         <h1 className="uppercase leading-none m-0 p-0">PREMIUM</h1>
//         <h1 className="uppercase leading-none mt-[-70px] flex gap-100">
//           <span>WO</span>
//           <span>RK</span>
//         </h1>
//       </div>

//       <div
//         ref={bottomTextRef}
//         className="mx-[22px] flex justify-between items-start pt-6 select-none"
//       >
//         <h1 className="flex text-lg gap-1 text-center items-center font-medium text-[#1e1e1e] col-span-6 s:col-span-3 mb-10 tracking-tight">
//           Client work
//         </h1>

//         <div className="tracking-tight w-[49%]">
//           <h1 className="font-[500] text-lg">(2012—2025)</h1>
//         </div>

//         <div>
//           <Link href="/work">
//             <span
//               ref={ctaRef2}
//               className="pt-3 relative inline-block text-[18.2px] project-cta"
//             >
//               View Select Projects (7)
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useUnderlineAnim } from "@/hooks/useUnderlineAnim";

const Projects = () => {
  const ctaRef1 = useRef<HTMLAnchorElement>(null);
  const ctaRef2 = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useUnderlineAnim([], ctaRef1);
  useUnderlineAnim([], ctaRef2);

  useEffect(() => {
    // Force play on iOS
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((e) => console.log("Autoplay prevented:", e));
    }
  }, []);

  const topTextRef = useRef<HTMLDivElement>(null);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
    });

    if (topTextRef.current) {
      tl.from(topTextRef.current.children, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
      });
    }

    if (bottomTextRef.current) {
      tl.from(
        bottomTextRef.current.children,
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
        },
        "-=0.4"
      );
    }
  }, []);

  return (
    <div className="bg-white pb-20 md:pb-16 lg:pb-24 selection:bg-[#1e1e1e] selection:text-white">
      {/* Mobile Layout */}
      <div className="md:hidden mx-[16px] pt-3">
        {/* Project Heading and BO-02 */}
        <div className="flex flex-col items-center">
          <div className="flex text-base gap-1 items-center uppercase font-medium text-[#1e1e1e] tracking-tight">
            <span className="text-[26px] mb-1">●</span> PROJECTS
          </div>
          <h1 className="font-[500] text-base -mt-2.5">(BO® — 02)</h1>
        </div>

        {/* Premium Work (smaller on mobile) */}
        <div className="flex justify-center items-center flex-col font-bold text-[#1e1e1e] text-[90px] Anton leading-none tracking-[0.01em] overflow-hidden mt-8">
          <h1 className="uppercase leading-none m-0 p-0">PREMIUM</h1>
          <h1 className="uppercase leading-none -mt-3">WORK</h1>
        </div>

        {/* See all our work (mobile) */}
        <div className="flex justify-center pt-4">
          <Link href="/work">
            <span
              ref={ctaRef1}
              className="relative inline-block text-base project-cta"
            >
              See all of our work
            </span>
          </Link>
        </div>

        <div className="mt-9 w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[215px] object-cover"
            ref={videoRef}
          >
            <source src="/projects.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Client Work and Year */}
        <div className="flex justify-between items-start mt-2">
          <h1 className="flex text-base gap-1 items-center font-medium text-[#1e1e1e]">
            Client work
          </h1>
          <h1 className="font-[500] text-base">(2012—2025)</h1>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block md:mx-3 lg:mx-4 xl:mx-6">
        {/* Top Row */}
        <div
          ref={topTextRef}
          className="mx-[22px] flex justify-between items-start pt-6 pb-4 lg:pb-9 xl:pb-24"
        >
          <div className="flex text-base xl:text-lg 2xl:text-3xl gap-1 text-center items-center uppercase font-medium text-[#1e1e1e] col-span-6 s:col-span-3 tracking-tight">
            <span className="text-2xl 2xl:text-5xl mb-1">●</span> PROJECTS
          </div>

          <div className="mt-1.5 tracking-tight">
            <h1 className="font-[500] text-base xl:text-lg 2xl:text-3xl">
              (BO® — 02)
            </h1>
          </div>

          <div>
            <Link href="/work">
              <span
                ref={ctaRef1}
                className="pt-3 relative inline-block text-base xl:text-lg 2xl:text-3xl project-cta"
              >
                See all of our work
              </span>
            </Link>
          </div>
        </div>

        {/* Premium Work (large on desktop) */}
        <div className="flex justify-center items-center flex-col font-bold text-[#1e1e1e] text-[200px] lg:text-[300px] xl:text-[400px] 2xl:text-[750px] Anton leading-none tracking-[0.01em] overflow-hidden">
          <h1 className="uppercase leading-none m-0 p-0">PREMIUM</h1>
          <h1 className="uppercase leading-none mt-[-24px] lg:mt-[-50px] 2xl:mt-[-120px]">
            <span>WO</span>
            <span>RK</span>
          </h1>
        </div>

        <div className="w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full md:h-[580px] lg:h-[750px] xl:h-[1050px] 2xl:h-[1840] object-cover"
            ref={videoRef}
          >
            <source src="/projects.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Bottom Row */}
        <div
          ref={bottomTextRef}
          className="mx-[22px] xl:mx-0 flex justify-between items-start pt-6 xl:pt-4 select-none"
        >
          <h1 className="flex text-base xl:text-lg 2xl:text-3xl gap-1 text-center items-center font-medium text-[#1e1e1e] col-span-6 s:col-span-3 tracking-tight">
            Client work
          </h1>

          <div className="tracking-tight w-[49%]">
            <h1 className="font-[500] text-base xl:text-lg 2xl:text-3xl">
              (2012—2025)
            </h1>
          </div>

          <div>
            <Link href="/work">
              <span
                ref={ctaRef2}
                className="pt-3 xl:pt-0 relative inline-block text-base project-cta xl:text-lg 2xl:text-3xl"
              >
                View Select Projects (7)
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
