"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { Badge, BadgeCheck, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  const sample = [
    { title: "Crafted to Elevate" },
    { title: "Built for Better" },
    { title: "Designed to Improve" },
    { title: "Improvement by Design" },
  ];
  useGSAP(() => {
    const titleSplit = SplitText.create(".about", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      },
    });
    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.04,
    });
    gsap.from(".top-grid div, .bottom-grid div", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 65%", // when the top of #about hits center of viewport
        end: "bottom center", // when the bottom of #about hits center
        toggleActions: "play reverse play reverse", // play only once when triggered
      },
      opacity: 0,
      y: 50,
      ease: "power1.inOut",
      stagger: 0.1,
    });
  });
  return (
    <div className="py-10 mt-10 px-8" id="about">
      <div className="flex justify-between gap-4 md:flex-row flex-col">
        <div>
          <h2 className="p-1 rounded-full bg-white text-black text-xs w-fit">
            Best Cocktail
          </h2>
          <p className="text-2xl mt-4 about  font-semibold max-w-md">
            Where every details matters- from muddle to garnish
          </p>
        </div>
        <div>
          <p className="text-xs max-w-xl ">
            The Margette is a classic that blends timeless elegance with modern
            sophistication, making it a standout in any collection. Its design
            captures the essence of refined simplicity—graceful lines, subtle
            detailing, and a structure that feels both familiar and fresh.
            Whether showcased in a wardrobe, on a bookshelf, or in a curated
            interior, the Margette brings a quiet confidence that never tries
            too hard yet always leaves a lasting impression.
          </p>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="flex gap-2 mt-2">
                <Star fill="#ffffff" size={14} />
                <Star fill="#ffffff" size={14} />
                <Star fill="#ffffff" size={14} />
                <Star fill="#ffffff" size={14} />
                <Star fill="#ffffff" size={14} />
              </p>
              <p className="font-bold text-xl">4.5/5</p>
              <p className="text-xs">More than +12000 customers</p>
            </div>
            <div>
              <div className="flex relative bg-gray-800 shadow-md py-4 px-6  rounded-full">
                <Image
                  src={"/face1.jpg"}
                  alt="face1"
                  height={40}
                  width={40}
                  priority
                  className="rounded-full  top-0 left-0 -mx-2 z-1"
                />
                <Image
                  src={"/face2.jpg"}
                  alt="face2"
                  height={40}
                  priority
                  width={40}
                  className="rounded-full  top-0 left-0  -mx-2 z-2"
                />

                <Image
                  src={"/face4.jpg"}
                  alt="face4"
                  height={40}
                  width={40}
                  priority
                  className="rounded-full   -mx-2 z-3"
                />
                <Image
                  src={"/face3.png"}
                  alt="face2"
                  height={40}
                  width={40}
                  priority
                  className="rounded-full -mx-2 z-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  top-grid md:grid-cols-8 grid-cols-2  mt-10 gap-4">
        <div className="col-span-2 h-[210px] ">
          <Image
            src={"/letsgo.webp"}
            alt="helli"
            height={400}
            width={400}
            loading="lazy"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-2 h-[210px] rounded-lg bg-gradient-to-br from-gray-700 md:flex flex-col gap-4 p-4 hidden">
          <h2>Crafted to improve</h2>
          <hr />
          <div className="flex flex-col gap-2">
            {sample.map((it: any) => (
              <div key={it.title} className="text-xs flex items-center gap-2 ">
                <BadgeCheck size={16} />
                <h2>{it?.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4  h-[210px] rounded-lg">
          <Image
            src={"/people.webp"}
            alt="people"
            height={400}
            width={400}
            loading="lazy"
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className=" grid bottom-grid  md:grid-cols-6 grid-cols-2   gap-4 mt-4 ">
        <div className="col-span-4 h-[210px]">
          <Image
            src={"/cocktails.webp"}
            alt="people"
            height={400}
            width={400}
            loading="lazy"
            className=" object-fill h-full w-full  rounded-lg"
          />
        </div>
        <div className="col-span-2 h-[210px] ">
          <Image
            src={"/cock.webp"}
            alt="people"
            height={400}
            width={400}
            loading="lazy"
            className="object-cover h-full w-full  rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
