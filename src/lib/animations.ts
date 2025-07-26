import gsap from "gsap";

export const animateFadeIn = (target: gsap.TweenTarget, options = {}) => {
  gsap.from(target, {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power4.out",
    ...options,
  });
};
