"use client";
import { RefObject, useEffect } from "react";
import gsap from "gsap";

export function useUnderlineAnim(
  linkElements: (HTMLAnchorElement | null)[],
  primaryCTARef: RefObject<HTMLAnchorElement | null>
) {
  useEffect(() => {
    // ✅ Extract element safely
    const primaryCTA = primaryCTARef.current;

    // ✅ Hover underline for nav links (if any)
    if (Array.isArray(linkElements) && linkElements.length > 0) {
      linkElements.forEach((el) => {
        if (!el || el.dataset.active === "true") return;

        const hoverTimeline = gsap.timeline({ paused: true });

        hoverTimeline.fromTo(
          el,
          {
            "--underline-width": "0%",
            "--underline-left": "0%",
          },
          {
            "--underline-width": "100%",
            duration: 0.35,
          }
        );

        hoverTimeline.add("hoverMid");

        hoverTimeline.fromTo(
          el,
          {
            "--underline-width": "100%",
            "--underline-left": "0%",
          },
          {
            "--underline-width": "0%",
            "--underline-left": "100%",
            duration: 0.35,
            immediateRender: false,
          }
        );

        el.addEventListener("mouseenter", () =>
          hoverTimeline.tweenFromTo(0, "hoverMid")
        );
        el.addEventListener("mouseleave", () => hoverTimeline.play());
      });
    }

    // ✅ CTA underline animation
    if (!primaryCTA) return;

    gsap.set(primaryCTA, {
      "--after-width": "100%",
      "--after-left": "0%",
      "--before-width": "0%",
      "--before-left": "0%",
    });

    const hideBaseLine = gsap.to(primaryCTA, {
      "--after-width": "0%",
      "--after-left": "100%",
      duration: 0.35,
      ease: "power2.out",
      paused: true,
    });

    const growHoverLine = gsap.to(primaryCTA, {
      "--before-width": "100%",
      "--before-left": "0%",
      duration: 0.35,
      ease: "power2.out",
      paused: true,
    });

    const shrinkHoverLine = gsap.to(primaryCTA, {
      "--before-width": "0%",
      "--before-left": "100%",
      duration: 0.35,
      ease: "power2.out",
      paused: true,
    });

    primaryCTA.addEventListener("mouseenter", () => {
      hideBaseLine.restart();
      hideBaseLine.eventCallback("onComplete", () => {
        growHoverLine.restart();
      });
    });

    primaryCTA.addEventListener("mouseleave", () => {
      shrinkHoverLine.restart();
      shrinkHoverLine.eventCallback("onComplete", () => {
        gsap.fromTo(
          primaryCTA,
          {
            "--before-width": "0%",
            "--before-left": "0%",
          },
          {
            "--before-width": "100%",
            "--before-left": "0%",
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              gsap.set(primaryCTA, {
                "--after-width": "100%",
                "--after-left": "0%",
                "--before-width": "0%",
                "--before-left": "0%",
              });
            },
          }
        );
      });
    });
  }, [linkElements, primaryCTARef]);
}
