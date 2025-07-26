import Link from "next/link";
import PageTwoPcView from "./PageTwoPcView";

function PageTwo() {
  return (
    <div className="p-2">
      {/* Desktop View: Separate Divs */}
      <div className="sm:block hidden">
        <PageTwoPcView />
      </div>

      {/* Mobile View: Separate Part */}
      <div className="sm:hidden block">
        <YewalaPart1 />
      </div>
    </div>
  );
}

const YewalaPart1 = () => (
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
        <span className="relative inline-block text-base project-cta">
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
);

export default PageTwo;
