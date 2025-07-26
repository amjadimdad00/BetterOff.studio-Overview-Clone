import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const PageTwoPcView = () => {
  const ImgAnimate = useRef(null);
  const fullDiv = useRef(null);
  const wo = useRef(null);
  const rk = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: fullDiv.current,
        start: "80% 100%",
        end: "80% -20%",
        scrub: true,
      },
    });
    tl.to(
      ImgAnimate.current,
      {
        y: "76vh",
        x: "-2vw",
        scale: "2.9",
      },
      "a"
    );
    tl.to(
      wo.current,
      {
        x: "15vw",
      },
      "a"
    );
    tl.to(
      rk.current,
      {
        x: "-15vw",
      },
      "a"
    );
  });

  return (
    <>
      <div className="w-full sm:h-[220vh]">
        <div className="w-full sm:h-[10vh] grid grid-cols-12 items-center px-[1vw] text-[1.5vw]">
          <div className="col-span-2  uppercase">● Projects</div>
          <div className="col-span-2 col-start-5">(BO® — 04)</div>
          <div className="col-span-8 col-start-8 flex justify-end">
            <div className="border-b-2 border-zinc-900">
              <span>See all of our work</span>
            </div>
          </div>
        </div>
        <div className="uppercase w-full  h-[100vh] font-[ff] leading-none">
          <div className="w-full h-[50vh]   flex justify-center items-center">
            <h1 className="text-[32vw]  leading-none">Premium</h1>
          </div>
          <div
            ref={fullDiv}
            className="w-full h-[50vh] leading-none flex items-center justify-center text-[32vw] px-[3vw] -mt[1vw]"
          >
            <div className="WO  flex items-end">
              <h1 ref={wo} className="z-20 ">
                WO
              </h1>
            </div>
            <div
              ref={ImgAnimate}
              className="z-50 flex items-center mt-2 overflow-x-hidden"
            >
              <video
                autoPlay
                muted
                loop
                className=""
                src="https://player.vimeo.com/progressive_redirect/playback/964456701/rendition/1080p/file.mp4?loc=external&signature=ed2837df3216140eefd132460dd1a1e5b5c4a64d42d09edf23898493d96b6e73"
              ></video>
            </div>
            <div className="text-[32vw]  leading-none flex items-end">
              <h1 ref={rk} className="z-[20] ">
                RK
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[22px] xl:mx-0 flex justify-between items-start pt-6 xl:pt-4 select-none pb-8">
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
            <span className="pt-3 xl:pt-0 relative inline-block text-base project-cta xl:text-lg 2xl:text-3xl">
              View Select Projects (7)
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageTwoPcView;
