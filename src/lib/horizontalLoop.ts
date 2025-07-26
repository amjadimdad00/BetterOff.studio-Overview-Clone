"use client";
import gsap from "gsap";

type HorizontalLoopConfig = {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  snap?: number | number[] | false;
  reversed?: boolean;
  paddingRight?: number;
};

export default function horizontalLoop(
  items: gsap.DOMTarget[],
  config: HorizontalLoopConfig = {}
) {
  const elements = gsap.utils.toArray<HTMLElement>(items);
  const {
    repeat = -1,
    paused = false,
    speed = 1,
    snap = false,
    reversed = false,
    paddingRight = 0,
  } = config;

  const tl = gsap.timeline({
    repeat,
    paused,
    defaults: { ease: "none" },
  });

  const widths: number[] = [];
  const xPercents: number[] = [];
  const pixelsPerSecond = speed * 100;

  const snapFn =
    typeof snap === "number" || Array.isArray(snap)
      ? gsap.utils.snap(snap)
      : (value: number) => value;

  // Step 1: Measure widths and xPercents
  gsap.set(elements, {
    xPercent: (i, el) => {
      const width = Math.max(
        parseFloat(gsap.getProperty(el, "width", "px") as string),
        1
      );
      widths[i] = width;

      const x = parseFloat(gsap.getProperty(el, "x", "px") as string);
      const xPercent = snapFn(
        (x / width) * 100 + (gsap.getProperty(el, "xPercent") as number)
      );
      xPercents[i] = xPercent;

      return xPercent;
    },
  });

  gsap.set(elements, { x: 0 });

  const totalWidth =
    elements.reduce((acc, el) => {
      const scaleX = (gsap.getProperty(el, "scaleX") as number) || 1;
      return acc + el.offsetWidth * scaleX + paddingRight;
    }, 0) || 1;

  // Step 2: Build the timeline
  elements.forEach((el, i) => {
    const width = widths[i];
    const curX = (xPercents[i] / 100) * width;
    const scaleX = (gsap.getProperty(el, "scaleX") as number) || 1;
    const distanceToLoop = el.offsetLeft + curX + width * scaleX;
    const duration = distanceToLoop / pixelsPerSecond;

    tl.to(
      el,
      {
        xPercent: snapFn(((curX - distanceToLoop) / width) * 100),
        duration,
      },
      0
    ).fromTo(
      el,
      {
        xPercent: snapFn(((curX - distanceToLoop + totalWidth) / width) * 100),
      },
      {
        xPercent: xPercents[i],
        duration: (totalWidth - distanceToLoop) / pixelsPerSecond,
        immediateRender: false,
      },
      duration
    );
  });

  // Progress forward to set up, then rewind
  requestAnimationFrame(() => {
    tl.progress(1, true).progress(0, true);
    if (reversed) tl.reverse();
  });

  return tl;
}
