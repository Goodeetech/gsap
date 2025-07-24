"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/Hero";
import Practice from "./components/Practice";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import { useContext } from "react";
import { AnimationContext } from "@/lib/animationContext";
import SplashAnimation from "./components/SplashAnimation";

// gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Home() {
  const { loadingAnimation, setLoadingAnimation } =
    useContext(AnimationContext);

  return (
    <div className="">
      {loadingAnimation && <SplashAnimation />}

      <div>
        <NavBar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}
