"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Practice = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 100,
      rotation: "360",
      duration: 2,
      ease: "ease.inOut",
      borderRadius: "50%",
    });
  });
  return (
    <div className="relative">
      <div className="w-[100px] h-[100px] bg-lime-400 absolute box top-0 left-8 "></div>
    </div>
  );
};

export default Practice;
