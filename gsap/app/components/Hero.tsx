"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const heroSplit = new SplitText(".title", { type: "chars, words" });
      const paragraphSplit = new SplitText(".hero-paragraph", {
        type: "lines",
      });

      gsap.set(".title", { opacity: 1 });
      gsap.set(".hero-paragraph", { opacity: 1 });

      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.05,
      });
      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(".right-leaf", { y: 200 }, 0)

        .to(".left-leaf", { y: -200 }, 0);
    },

    { scope: container }
  );
  return (
    <section ref={container} id="hero" className="md:mt-8 -z-10 mt-16">
      <div className=" h-[calc(100vh-3rem)]">
        <h1 className="md:text-9xl text-5xl title  tracking-wide pt-16 md:pt-20 text-center font-semibold opacity-0 z-14">
          BOTANIQ
        </h1>
        <p className="text-sm mx-auto pt-18 md:hidden text-white/90 hero-paragraph leading-relaxed px-4  max-w-lg opacity-0">
          Indulge in a symphony of flavor where every cocktail is more than a
          drink—it's a crafted experience. At Velvet Pour, we blend the finest
          ingredients, timeless recipes, and a touch of creative rebellion to
          serve up moments worth savoring. Whether you're sipping at sunset or
          dancing into the night, your perfect pour begins here.
        </p>

        <Image
          src={"/leaf2.png"}
          alt="leaf"
          width={200}
          height={200}
          className="bottom-8 absolute  left-leaf -left-12 md:top-12 md:w-[400px]"
        />

        <Image
          src={"/leaf5.png"}
          alt="leaf3"
          width={200}
          height={200}
          className="absolute bottom-32 right-leaf -right-12 md:w-[300px]  md:-right-20"
        />

        <div className=" ">
          <div className="absolute hidden lg:block w-fit lg:bottom-26 lg:left-4 pl-6 hero-paragraph opacity-0">
            <p>Cool. Crisp. Classic</p>
            <p className="font-semibold text-4xl text-yellow-100 max-w-md">
              Sip the Spirit of Summer
            </p>
          </div>
        </div>

        <div className="absolute font-light hidden lg:block w-fit lg:right-0  z-13 lg:bottom-16 p-6 ">
          <p className="text-white max-w-md hero-paragraph opacity-0">
            Every cocktail on our menu is a blend of premium ingredient,
            creative flair, and timless recipe. <br />
            -designed to delight your senses
          </p>

          <p className="text-sm mt-4">View cocktail</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
