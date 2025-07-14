"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* react‑responsive flips automatically when DevTools width changes */
  const isMobile = useMediaQuery({ maxWidth: 767 });

  /* MAIN GSAP SETUP  */
  useGSAP(
    () => {
      if (!container.current) return;

      /* -----------------------------------
         1. Text intro (SplitText) - once
      -------------------------------------*/
      const titleSplit = new SplitText(".title", { type: "chars, words" });
      const paragraphSplit = new SplitText(".hero-paragraph", {
        type: "lines",
      });

      gsap.set(".title, .hero-paragraph", { opacity: 1 });

      gsap.from(titleSplit.chars, {
        yPercent: 100,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.05,
      });

      gsap.from(paragraphSplit.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });

      /* -----------------------------------
         2. Leaves parallax (same for all)
      -------------------------------------*/
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(".right-leaf", { y: 200, rotation: 45, scale: 1.2 }, 0)
        .to(".left-leaf", { y: -200, rotation: -45, scale: 1.2 }, 0);

      /* -----------------------------------
         3. Responsive video pin
            ‑ use matchMedia so GSAP
              tears down & rebuilds
              when breakpoint flips.
      -------------------------------------*/
      ScrollTrigger.matchMedia({
        // ≥ 768 px  (desktop)
        "(min-width: 768px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".viideo",
              start: "top top",
              end: "bottom top",
              pin: true,
              anticipatePin: 1,
              onEnter: () => videoRef.current?.play(),
              onEnterBack: () => videoRef.current?.play(),
              onLeave: () => videoRef.current?.pause(),
            },
          });

          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            tl.to(videoRef.current, {
              currentTime: videoRef.current.duration,
            });
          }
          return () => tl.kill(); // cleanup desktop timeline
        },

        // < 768 px  (mobile)
        "(max-width: 767px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".viideo",
              start: "top 50%",
              end: "120% top",

              pin: true,
              anticipatePin: 1,
              onEnter: () => videoRef.current?.play(),
              onEnterBack: () => videoRef.current?.play(),
              onLeave: () => videoRef.current?.pause(),
              onLeaveBack: () => videoRef.current?.pause(),
            },
          });

          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            tl.to(videoRef.current, {
              currentTime: videoRef.current.duration,
            });
          }
          return () => tl.kill(); // cleanup mobile timeline
        },
      });

      /* -----------------------------------
         OPTIONAL: refresh on every resize
      -------------------------------------*/
      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      /* CLEANUP (ctx.revert() tears down
         every GSAP instance created in
         this hook, plus our resize listener)
      -------------------------------------*/
      return () => {
        window.removeEventListener("resize", onResize);
        titleSplit.revert();
        paragraphSplit.revert();
        ScrollTrigger.killAll(); // safety
      };
    },
    { scope: container }
    // ⚠ No dependency array needed; matchMedia handles breakpoints
  );

  /* -------------------------------------------------- */
  /* JSX  (unchanged formatting, classes simplified)    */
  /* -------------------------------------------------- */
  return (
    <section ref={container} id="hero" className="relative mt-20 md:mt-8 -z-10">
      <div className="h-[calc(100vh-3rem)]">
        <h1 className="title opacity-0 pt-16 md:pt-20 text-center font-semibold z-10 tracking-wide text-5xl md:text-9xl">
          BOTANIQ
        </h1>

        <p className="hero-paragraph opacity-0 mx-auto px-4 max-w-lg leading-relaxed z-10 text-sm text-white/90 md:hidden">
          Indulge in a symphony&nbsp;of flavor where every cocktail is more than
          a drink—it's a crafted experience.&nbsp;…
        </p>

        {/* leaves */}
        <Image
          src="/leaf2.png"
          alt="leaf"
          width={400}
          height={400}
          className="left-leaf absolute z-10 -left-12 bottom-8 md:top-12"
        />
        <Image
          src="/leaf5.png"
          alt="leaf3"
          width={300}
          height={300}
          className="right-leaf absolute z-10 -right-12 bottom-32 md:-right-20"
        />

        {/* desktop paragraphs */}
        <div className="hero-paragraph opacity-0 absolute hidden lg:block left-4 bottom-26 p-6">
          <p>Cool. Crisp. Classic</p>
          <p className="text-yellow-100 font-semibold text-4xl">
            Sip the Spirit of Summer
          </p>
        </div>
        <div className="hero-paragraph opacity-0 absolute hidden lg:block right-0 bottom-16 p-6">
          <p className="text-white max-w-md">
            Every cocktail on our menu is a blend of premium ingredients,
            creative flair, and timeless recipes—designed to delight your
            senses.
          </p>
          <p className="mt-4 text-sm">View cocktails</p>
        </div>
      </div>

      {/* video (pinned) */}
      <div className="viideo absolute -z-10 inset-0 py-10">
        <video
          ref={videoRef}
          src="/video-ap-superfast.mp4"
          muted
          playsInline
          preload="auto"
          loop
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
