"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { SplitText, ScrollTrigger } from "gsap/all";

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".mask-img", {
        scale: 1.2,
        maskPosition: "center",
        maskSize: "450%",
        duration: 1,

        ease: "power1.inOut",
      })
      .to(".masked", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  });
  const featureList = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
  ];

  const goodList = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddles flavors",
  ];
  return (
    <div id="art" className="mx-6 relative py-28 mt-20 h-full">
      <div className="">
        <div className="relative flex items-center flex-col justify-center h-64">
          <h2 className="text-center lg:text-[200px] md:text-5xl text-5xl font-bold text-gray-400 z-10 tracking-wider will-fade">
            The Art
          </h2>
          {/* Radial glow */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_0%,_transparent_90%)] blur-2xl pointer-events-none z-0"></span>
          <div className=" w-full h-[400px] absolute rounded-lg  z-10">
            <Image
              src="/letsgo.webp"
              alt="image"
              height={400}
              width={400}
              className="absolute mask-img rounded-lg md:top-1/2 top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 mask-image"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between ">
          <div className="flex-col flex gap-2 pt-6 mx-6 will-fade">
            {goodList.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle size={14} />
                <h2>{item}</h2>
              </div>
            ))}
          </div>
          <div className="flex-col flex gap-2 pt-6 mx-6 will-fade">
            {featureList.map((item, index) => (
              <div key={index} className="flex items-center gap-4 ">
                <CheckCircle size={14} />
                <h2>{item}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <h3 className="text-3xl font-semibold will-fade">
            Sip-worthy Perfection
          </h3>

          {/* Fade-in block, positioned absolutely over the same spot */}
          <div className="absolute top-0 opacity-0 -mt-12 masked text-center">
            <h3 className="text-3xl font-semibold">
              Made with Craft, Poured with Passion
            </h3>
            <p>
              This isn't just a drink. It's a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
