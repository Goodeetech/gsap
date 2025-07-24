"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);

const SplashAnimation = () => {
  useGSAP(() => {
    const logoSplit = new SplitText(".purple", { type: "chars, word" });
    gsap.set(".purple", { opacity: 1 });
    gsap.from(logoSplit.chars, {
      opacity: 0,

      duration: 4,
      ease: "expo.out",
      stagger: 0.05,
      scale: 2,
    });
    gsap.to(".splash-text", {
      letterSpacing: "2em",
      duration: 1.5,
      ease: "power2.out",
    });
  });
  return (
    <div className="bg-black text-white flex flex-col fixed inset-0 z-100 items-center  justify-center h-screen">
      <h3 className="text-5xl text-white purple opacity-0">Velvet Pour</h3>
    </div>
  );
};

export default SplashAnimation;
