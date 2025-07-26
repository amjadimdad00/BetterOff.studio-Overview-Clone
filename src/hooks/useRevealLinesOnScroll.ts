import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useRevealLinesOnScroll = (
  refs: React.RefObject<HTMLElement[]> | HTMLElement[],
  trigger: HTMLElement | null,
  start = "top 85%"
) => {
  useLayoutEffect(() => {
    if (!trigger || !refs) return;
    const elements = Array.isArray(refs) ? refs : refs.current;

    const ctx = gsap.context(() => {
      gsap.to(elements, {
        y: "100%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger,
          start,
        },
      });
    }, trigger);

    return () => ctx.revert();
  }, [refs, trigger, start]);
};
