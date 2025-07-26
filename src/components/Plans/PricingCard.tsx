import { useUnderlineAnim } from "@/hooks/useUnderlineAnim";
import React, { useRef } from "react";

type PricingCardProps = {
  item: {
    type?: string;
    badge?: string;
    badgeColor?: string;
    title: string;
    subtitle?: string;
    price?: string;
    priceLabel?: string;
    description?: string;
    ctaText: string;
    infoText?: string;
    features: string[];
  };
};

const PricingCard: React.FC<PricingCardProps> = ({ item }) => {
  const ctaRef = useRef<HTMLAnchorElement>(null!);

  useUnderlineAnim([], ctaRef);
  return (
    <article className="relative flex flex-col border-[1px] border-[#dce4e5] rounded-lg md:rounded-sm lg:rounded-xl 2xl:rounded-2xl w-full max-w-[430px] 2xl:max-w-[810px]">
      {/* Badge */}
      {item.badge && (
        <div
          className={`absolute -top-4 left-8 px-4 py-1.5 text-sm md:text-[9px] lg:text-[12px] xl:text-[16px] lg:px-3 lg:left-6 lg:-top-3 lg:py-1 xl:px-5 xl:py-2 xl:-top-4.5 xl:left-9 xl:rounded-lg 2xl:rounded-xl 2xl:text-[28px] 2xl:py-2.5 2xl:px-7 2xl:-top-7 2xl:left-14 md:rounded-sm md:py-1 md:px-2 md:-top-2.5 md:left-4 rounded-md font-medium flex items-center z-20 ${item.badgeColor}`}
        >
          {item.badge}
        </div>
      )}

      {/* Top Section */}
      <div className="flex flex-col justify-between p-7.5 pt-12 md:p-4 md:pt-8 lg:p-6 lg:pt-10 xl:p-8 xl:pt-14 2xl:p-14 2xl:pt-24 min-h-[415px] md:min-h-[300px] lg:min-h-[340px] xl:min-h-[460px] 2xl:min-h-[760px]">
        <div className="flex flex-col">
          <h2 className="text-base md:text-[11px] lg:text-[15px] xl:text-[22px] 2xl:text-[32px] font-medium mb-4 md:mb-2 xl:mb-4 2xl:mb-10">
            {item.title}
          </h2>
          <h2 className="text-base md:text-[11px] lg:text-[15px] xl:text-[20px] lg:w-[15rem] xl:w-[22rem] 2xl:w-[42rem] 2xl:text-[36px] text-[#949690]">
            {item.subtitle}
          </h2>
        </div>

        <div>
          <div className="flex items-end font-bold leading-none">
            <span className="text-sm md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[32px] font-medium -translate-y-4 md:-translate-y-3 lg:-translate-y-4 xl:-translate-y-6">
              $
            </span>
            <span className="text-3xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl">
              {item.price}
            </span>
            <span className="text-lg md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[32px] 2xl:ml-3 ml-1 font-normal -translate-y-1.5 md:-translate-y-1">
              {item.priceLabel}
            </span>
          </div>
          <p className="text-[#949690] text-sm md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[28px]">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full rounded-md bg-[#1e1e1e] text-white flex items-center justify-between px-8 py-6 text-sm md:text-[10px] lg:text-[12px] xl:text-[18px] lg:px-7 lg:py-5 xl:py-7 xl:px-8 2xl:text-[28px] 2xl:px-16 2xl:py-10 md:py-4 font-bold overflow-hidden"
          >
            {/* Yellow Slide-Grow Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-md">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full bg-[#e0f07d] w-[100%] scale-x-[0.9] origin-center rounded-md translate-y-full group-hover:translate-y-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
            </div>

            {/* Foreground Text */}
            <span className="z-10 relative selection:!text-[#1e1e1e] selection:bg-white group-hover:text-[#1e1e1e] transition-colors duration-300">
              {item.ctaText}
            </span>

            {/* Icon */}
            <svg
              viewBox="0 0 12 11"
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-2 z-10 xl:w-5 xl:h-5 relative transition-colors duration-300 text-white group-hover:text-[#1e1e1e]"
            >
              <path
                d="m11.18 7.84-1.56-.02V2.88L1.94 10.6.8 9.44l7.72-7.7H3.56V.2h7.62v7.64Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <div className="mt-2 md:mt-0 lg:mt-0.5 xl:mt-2 project-cta cursor-pointer">
            <a
              href="/"
              ref={ctaRef}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] md:text-[10px] lg:text-[11px] xl:text-[15px] 2xl:text-[28px]"
            >
              {item.infoText}
            </a>
          </div>
        </div>
      </div>

      {/* Feature List */}
      <div className="bg-[#fafafa] px-8 pt-5 pb-10 md:px-4 md:pt-3 md:pb-5 lg:px-6 lg:pt-4 lg:pb-6 xl:px-8 xl:pt-10 xl:pb-9.5 2xl:px-14 2xl:pt-16 2xl:pb-16 rounded-b-[1.2rem] border-t border-[#dce4e5]">
        <h5 className="text-base md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[32px] font-medium mb-5 md:mb-3 xl:mb-5 2xl:mb-8">
          What’s included
        </h5>
        <ul className="flex flex-col gap-y-2 md:gap-y-1 lg:gap-y-2 xl:gap-y-3 2xl:gap-y-5 text-[15px] lg:text-[12px] xl:text-[17px] md:text-[10px] 2xl:text-[28px] text-gray-900">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <svg
                className="h-2.5 w-2.5 md:h-1 md:w-2 mr-3 md:mr-1.5 lg:w-2 lg:h-2 xl:w-3 2xl:w-4 2xl:h-4 lg:mr-3 2xl:mr-6 flex-shrink-0"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 4.5L5 8.5L12.5 1" stroke="black" strokeWidth="2" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PricingCard;
