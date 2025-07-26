"use client";

import {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  MutableRefObject,
} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PricingCard from "./PricingCard";
import CustomPlan from "./CustomPlan";
import { SubscriptionPlan, ProjectPlan } from "./PlanData";

gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  const [isProject, setIsProject] = useState(false);
  const [plans, setPlans] = useState(SubscriptionPlan);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [triggerEnterAnim, setTriggerEnterAnim] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const hasAnimatedOnce = useRef(false);

  // Reset refs every render
  headlineRefs.current = [];
  textRefs.current = [];
  cardRefs.current = [];

  const addToRefs = (
    el: HTMLDivElement | null,
    refArray: MutableRefObject<HTMLDivElement[]>
  ) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useLayoutEffect(() => {
    if (hasAnimatedOnce.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      headlineRefs.current.forEach((cover, i) => {
        tl.fromTo(
          cover,
          { y: "0%" },
          { y: "-100%", duration: 1.2, ease: "power4.out" },
          0.2 + i * 0.1
        );
      });

      textRefs.current.forEach((text, i) => {
        tl.fromTo(
          text,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
          0.3 + i * 0.1
        );
      });

      cardRefs.current.forEach((card, i) => {
        tl.fromTo(
          card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
          0.5 + i * 0.1
        );
      });
    }, containerRef);

    hasAnimatedOnce.current = true;
    return () => ctx.revert();
  }, []);

  // Toggle Handler
  const handleToggle = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const exitTl = gsap.timeline({
      onComplete: () => {
        // Switch state after exit animation
        const nextPlan = !isProject ? ProjectPlan : SubscriptionPlan;
        setPlans(nextPlan);
        setIsProject(!isProject);

        // Wait for DOM update, then run entrance
        setTimeout(() => setTriggerEnterAnim(true), 30);
      },
    });

    // Animate OUT
    headlineRefs.current.forEach((cover, i) => {
      exitTl.to(
        cover,
        { y: "0%", duration: 0.8, ease: "power2.inOut" },
        i * 0.05
      );
    });

    textRefs.current.forEach((text, i) => {
      exitTl.to(
        text,
        { opacity: 0, y: -20, duration: 0.6, ease: "power2.inOut" },
        0.05 + i * 0.05
      );
    });

    cardRefs.current.forEach((card, i) => {
      exitTl.to(
        card,
        { opacity: 0, y: -20, duration: 0.6, ease: "power2.inOut" },
        0.1 + i * 0.05
      );
    });
  };

  useEffect(() => {
    if (!triggerEnterAnim) return;

    const enterTl = gsap.timeline({
      onComplete: () => {
        setTriggerEnterAnim(false);
        setIsTransitioning(false);
      },
    });

    headlineRefs.current.forEach((cover, i) => {
      enterTl.fromTo(
        cover,
        { y: "0%" },
        { y: "-100%", duration: 1.2, ease: "power4.out" },
        0.2 + i * 0.1
      );
    });

    textRefs.current.forEach((text, i) => {
      enterTl.fromTo(
        text,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
        0.3 + i * 0.1
      );
    });

    cardRefs.current.forEach((card, i) => {
      enterTl.fromTo(
        card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
        0.5 + i * 0.1
      );
    });
  }, [triggerEnterAnim]);

  return (
    <div
      ref={containerRef}
      className="bg-white pb-[105px] md:pb-[114px] lg:pb-[148px] xl:pb-[215px] 2xl:pb-[360px] flex flex-col selection:bg-[#1e1e1e] selection:text-white"
    >
      {/* Header */}
      <div className="mx-3.5 pt-5 md:mx-3 md:pt-2 lg:mx-4 lg:pt-3.5 xl:mx-6 xl:pt-6 2xl:mx-10 2xl:pt-10 flex flex-col md:flex-row justify-between items-start">
        <div className="flex text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-[33px] gap-0.5 text-center items-center uppercase font-medium text-[#1e1e1e] col-span-6 s:col-span-3 tracking-tight">
          <span className="text-3xl md:text-lg lg:text-2xl xl:text-[33px] 2xl:text-6xl mb-1 md:mb-0.5 xl:mb-1.5 2xl:mb-2">
            ●
          </span>
          Plans
        </div>
        <div className="-mt-2.5 pl-0.5 md:mt-2 md:pl-0 md:pr-28 lg:pr-40 xl:pr-56 2xl:pr-[420px] tracking-tight">
          <h1 className="font-[500] text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-[33px]">
            (BO® — 06)
          </h1>
        </div>
        <h1 className="relative hidden md:inline-block pt-2 text-[10px] lg:text-[13px] xl:text-lg 2xl:text-[33px] uppercase">
          Add-To-Cart Creative
        </h1>
      </div>

      {/* Toggle */}
      <div className="flex gap-2 xl:gap-4 px-3.5 pt-12 md:pt-10 lg:pt-14 xl:pt-20 xl:px-6 2xl:px-10 2xl:pt-38 items-center">
        <h1 className="text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl font-medium">
          Subscriptions
        </h1>
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="hidden peer"
            checked={isProject}
            onChange={handleToggle}
          />
          <label
            htmlFor="toggle"
            className="toggle-label block w-[32px] h-[16px] cursor-pointer relative md:w-[50px] md:h-[28px] lg:w-[40px] lg:h-[23px] xl:w-[50px] xl:h-[30px] 2xl:w-[90px] 2xl:h-[30px]"
          />
        </div>
        <h1 className="text-base md:text-[10px] lg:text-sm xl:text-lg 2xl:text-3xl font-medium">
          Projects
        </h1>
      </div>

      {/* Content */}
      <div className="px-3.5 pt-6 md:pt-4 lg:pt-8 lg:px-4 xl:pt-12 xl:px-6 2xl:px-10 2xl:pt-24">
        <h1 className="tracking-tight text-[28px] max-w-[18rem] md:max-w-[32rem] lg:max-w-[44rem] xl:max-w-[60rem] 2xl:max-w-[100rem] md:text-[26px] lg:text-[36px] xl:text-[48px] 2xl:text-[80px] leading-7 lg:leading-9 xl:leading-12 2xl:leading-20">
          {(isProject
            ? [
                "Bundled projects are for clients who know exactly what they need. Off the shelf and on-target, everything included.",
              ]
            : [
                "Subscriptions are like having an in-house creative department without the headaches of managing salaried employees.",
              ]
          ).map((line, index) => (
            <div key={index} className="relative overflow-hidden">
              <div
                ref={(el) => addToRefs(el, headlineRefs)}
                className="absolute inset-0 bg-white z-10"
              />
              <div
                ref={(el) => addToRefs(el, textRefs)}
                className="relative z-0"
              >
                {line}
              </div>
            </div>
          ))}
        </h1>

        {/* Cards */}
        <div className="mt-[72px] md:mt-[40px] lg:mt-[60px] xl:mt-[84px] 2xl:mt-[138px] flex flex-wrap gap-x-3 gap-y-8">
          {plans.map((item, i) => (
            <div
              key={`plan-${i}`}
              ref={(el) => addToRefs(el, cardRefs)}
              className="w-full sm:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)] xl:w-[28rem] 2xl:w-[51rem]"
            >
              {item.type === "badgeCard" && <PricingCard item={item} />}
              {item.type === "custom" && <CustomPlan item={item} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
