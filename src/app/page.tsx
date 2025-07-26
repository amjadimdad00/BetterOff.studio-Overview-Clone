// "use client";

// import { useEffect, useLayoutEffect, useRef, useState, RefObject } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// import Navbar from "@/components/Navbar/Navbar";
// import Hero from "@/components/HeroSection/Hero";
// import Creative from "@/components/Creative/Creative";
// import Projects from "@/components/Projects/Projects";
// import ConciergeCreative from "@/components/Creative/ConciergeCreative";
// import Testimonials from "@/components/Testimonials/Testimonials";
// import Benifits from "@/components/Benifits/Benifits";
// import Plans from "@/components/Plans/Plans";
// import Faq from "@/components/Faq/Faq";
// import GetToKnowUs from "@/components/GTKW/GetToKnowUs";
// import Footer from "@/components/Footer/Footer";
// import ImagesSection from "@/components/ImagesSection/ImagesSection";

// gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

// // === Animation Helpers ===

// const fadeInUp = (targets: Element[] | Element | null, delay = 0) => {
//   if (!targets) return;
//   const validTargets = Array.isArray(targets)
//     ? targets.filter(Boolean)
//     : [targets];
//   if (validTargets.length === 0) return;

//   gsap.from(validTargets, {
//     opacity: 0,
//     y: 40,
//     duration: 1.2,
//     ease: "power4.out",
//     stagger: 0.15,
//     delay,
//   });
// };

// const fadeInOnScroll = (target: Element | null, delay = 0) => {
//   if (!target) return;

//   gsap.from(target, {
//     opacity: 0,
//     y: 30,
//     duration: 0.6,
//     ease: "power4.out",
//     scrollTrigger: {
//       trigger: target,
//       start: "top 90%",
//       once: true,
//     },
//     delay,
//   });
// };

// const staggerOnScroll = (
//   targets: (Element | null)[] | null,
//   trigger?: Element | null
// ) => {
//   if (!targets) return;
//   const validTargets = targets.filter((el): el is Element => el !== null);
//   if (validTargets.length === 0) return;

//   gsap.from(validTargets, {
//     opacity: 0,
//     y: 30,
//     duration: 0.6,
//     ease: "power4.out",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: trigger || validTargets[0],
//       start: "top 90%",
//       once: true,
//     },
//   });
// };

// const revealCovers = (covers: HTMLElement[]) => {
//   const validCovers = covers.filter(Boolean);
//   if (validCovers.length === 0) return;
//   gsap.to(validCovers, {
//     y: "100%",
//     duration: 1.2,
//     ease: "power4.out",
//     stagger: 0.1,
//   });
// };

// // // === Home ===

// export default function Home() {
//   const [ready, setReady] = useState(false);
//   useEffect(() => setReady(true), []);

//   // Hero
//   const coverRefs = useRef<HTMLDivElement[]>([]);
//   const paragraphRef = useRef<HTMLParagraphElement>(null);
//   const heroLinkRef = useRef<HTMLAnchorElement>(null);
//   const marqueeRef = useRef<HTMLDivElement>(null);
//   const finalBlockRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     revealCovers(coverRefs.current.slice(0, 3));

//     const getValidElements = (...refs: (HTMLElement | null)[]) =>
//       refs.filter((el): el is HTMLElement => el !== null);

//     fadeInUp(getValidElements(paragraphRef.current, heroLinkRef.current), 0.4);
//   }, []);

//   // useLayoutEffect(() => {
//   //   if (!marqueeRef.current || !finalBlockRef.current) return;

//   //   const marquee = marqueeRef.current;

//   //   ScrollTrigger.create({
//   //     trigger: marquee,
//   //     start: "top center",
//   //     endTrigger: finalBlockRef.current,
//   //     end: "top center",
//   //     scrub: true,
//   //     onUpdate: (self) => {
//   //       const scale = 1 + self.progress * 0.5;
//   //       gsap.set(marquee, { scale });
//   //     },
//   //   });
//   // }, []);

//   useLayoutEffect(() => {
//     if (!finalBlockRef.current) return;

//     const finalCovers = coverRefs.current.slice(3);
//     const finalTexts = finalCovers.map(
//       (el) => el?.previousElementSibling as HTMLElement
//     );

//     revealCovers(finalCovers);
//     staggerOnScroll(finalTexts, finalBlockRef.current);
//   }, []);

//   // Creative
//   const creativeHeadingRef = useRef<HTMLDivElement>(null);
//   const creativeRightRef = useRef<HTMLDivElement>(null);
//   const creativeItemRefs = useRef<HTMLDivElement[]>([]);

//   useLayoutEffect(() => {
//     fadeInOnScroll(creativeHeadingRef.current);
//     fadeInOnScroll(creativeRightRef.current);
//     staggerOnScroll(creativeItemRefs.current);
//   }, []);

//   return (
//     <>
//       <Navbar fadeInUp={fadeInUp} />
//       <Hero
//         coverRefs={coverRefs}
//         paragraphRef={paragraphRef}
//         linkRef={heroLinkRef}
//         marqueeRef={marqueeRef}
//         finalBlockRef={finalBlockRef}
//       />
//       <Creative
//         headingRef={creativeHeadingRef}
//         rightRef={creativeRightRef}
//         itemRefs={creativeItemRefs}
//       />
//       <Projects />
//       <ConciergeCreative />
//       <Testimonials />
//       <ImagesSection />
//       <Benifits />
//       <Plans />
//       <Faq />
//       {/* <GetToKnowUs /> */}
//       {/* <Footer /> */}
//     </>
//   );
// }

"use client";

import { useEffect, useLayoutEffect, useRef, useState, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/HeroSection/Hero";
import Creative from "@/components/Creative/Creative";
import Projects from "@/components/Projects/Projects";
import ConciergeCreative from "@/components/Creative/ConciergeCreative";
import Testimonials from "@/components/Testimonials/Testimonials";
import Benifits from "@/components/Benifits/Benifits";
import Plans from "@/components/Plans/Plans";
import Faq from "@/components/Faq/Faq";
import GetToKnowUs from "@/components/GTKW/GetToKnowUs";
import Footer from "@/components/Footer/Footer";
import ImagesSection from "@/components/ImagesSection/ImagesSection";

// Only register plugins on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
}

// === Animation Helpers ===

const fadeInUp = (targets: Element[] | Element | null, delay = 0) => {
  if (!targets) return;
  const validTargets = Array.isArray(targets)
    ? targets.filter(Boolean)
    : [targets];
  if (validTargets.length === 0) return;

  gsap.from(validTargets, {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.15,
    delay,
  });
};

const fadeInOnScroll = (target: Element | null, delay = 0) => {
  if (!target) return;

  gsap.from(target, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power4.out",
    scrollTrigger: {
      trigger: target,
      start: "top 90%",
      once: true,
    },
    delay,
  });
};

const staggerOnScroll = (
  targets: (Element | null)[] | null,
  trigger?: Element | null
) => {
  if (!targets) return;
  const validTargets = targets.filter((el): el is Element => el !== null);
  if (validTargets.length === 0) return;

  gsap.from(validTargets, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power4.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: trigger || validTargets[0],
      start: "top 90%",
      once: true,
    },
  });
};

const revealCovers = (covers: HTMLElement[]) => {
  const validCovers = covers.filter(Boolean);
  if (validCovers.length === 0) return;
  gsap.to(validCovers, {
    y: "100%",
    duration: 1.2,
    ease: "power4.out",
    stagger: 0.1,
  });
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // Hero
  const coverRefs = useRef<HTMLDivElement[]>([]);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const heroLinkRef = useRef<HTMLAnchorElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const finalBlockRef = useRef<HTMLDivElement>(null);

  // Creative
  const creativeHeadingRef = useRef<HTMLDivElement>(null);
  const creativeRightRef = useRef<HTMLDivElement>(null);
  const creativeItemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Cleanup all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useLayoutEffect(() => {
    if (!isMounted) return;

    // Hero animations
    const heroElements = [
      paragraphRef.current,
      heroLinkRef.current,
      ...coverRefs.current,
    ].filter(Boolean) as HTMLElement[];

    if (heroElements.length > 0) {
      revealCovers(coverRefs.current.slice(0, 3));
      fadeInUp(
        [paragraphRef.current, heroLinkRef.current].filter(
          Boolean
        ) as HTMLElement[],
        0.4
      );
    }

    // Final block animations
    if (finalBlockRef.current) {
      const finalCovers = coverRefs.current.slice(3);
      const finalTexts = finalCovers
        .map((el) => el?.previousElementSibling as HTMLElement)
        .filter(Boolean);

      if (finalCovers.length > 0) revealCovers(finalCovers);
      if (finalTexts.length > 0)
        staggerOnScroll(finalTexts, finalBlockRef.current);
    }
    
    // Creative animations
    if (creativeHeadingRef.current) fadeInOnScroll(creativeHeadingRef.current);
    if (creativeRightRef.current) fadeInOnScroll(creativeRightRef.current);
    if (creativeItemRefs.current.length > 0)
      staggerOnScroll(creativeItemRefs.current);

    // Marquee zoom effect
    if (marqueeRef.current && finalBlockRef.current) {
      const marquee = marqueeRef.current;
      const finalBlock = finalBlockRef.current;

      gsap.set(marquee, { scale: 1 });

      ScrollTrigger.create({
        trigger: marquee,
        start: "top center",
        endTrigger: finalBlock,
        end: "top top",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > 0 && self.progress < 1) {
            const scale = 1 + self.progress * 1;
            gsap.set(marquee, { scale });
          } else {
            gsap.set(marquee, { scale: 1 });
          }
        },
        onEnter: () => {
          gsap.fromTo(marquee, { scale: 1 }, { scale: 2, duration: 0.5 });
        },
        onEnterBack: () => {
          gsap.fromTo(marquee, { scale: 1 }, { scale: 2, duration: 0.5 });
        },
        onLeave: () => {
          gsap.to(marquee, { scale: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(marquee, { scale: 1, duration: 0.3 });
        },
      });
    }

    ScrollTrigger.refresh();
  }, [isMounted]);

  return (
    <>
      <Navbar fadeInUp={fadeInUp} />
      <Hero
        coverRefs={coverRefs}
        paragraphRef={paragraphRef}
        linkRef={heroLinkRef}
        marqueeRef={marqueeRef}
        finalBlockRef={finalBlockRef}
      />
      <Creative
        headingRef={creativeHeadingRef}
        rightRef={creativeRightRef}
        itemRefs={creativeItemRefs}
      />
      <Projects />
      <ConciergeCreative />
      <Testimonials />
      <ImagesSection />
      <Benifits />
      <Plans />
      <Faq />
      <GetToKnowUs />
      <Footer />
    </>
  );
}
