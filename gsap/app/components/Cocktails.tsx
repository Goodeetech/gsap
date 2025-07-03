"use client";
import React from "react";
import { CocktailList } from "../layers/cocktails";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  useGSAP(() => {
    const parallax = gsap.timeline({
      scrollTrigger: {
        trigger: ".hello",
        start: "30% bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    parallax.to(".right-leaf1", { y: 100, rotation: 45, scale: 1.2 }, 0);
  });
  return (
    <div className="py-20 mt-30 hello relative z-10 px-4 ">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="">
          <h2 className="md:text-3xl text-xl">Most Popular Cocktails</h2>
          <div className="mx-4 mt-4 flex flex-col gap-4 text-">
            {CocktailList.map(({ name, detail, country, price }, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h3>{name}</h3>
                  <p className="text-yellow-200 text-sm">
                    {country} | {detail}
                  </p>
                </div>
                <div>
                  <h2>{price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h3 className="md:text-3xl text-xl">Most loved Mocktails</h3>

          <div className="mx-4 mt-4 flex flex-col gap-4 ">
            {CocktailList.map(({ name, detail, country, price }, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h3>{name}</h3>
                  <p className="text-yellow-200 text-sm">
                    {country} | {detail}
                  </p>
                </div>
                <div>
                  <h2>{price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" ">
        {/* <Image
          src={"/leaf2.png"}
          alt="leaf"
          width={200}
          height={200}
          className="bottom-0 absolute -z-5 left-leaf -left-12 md:top-12 md:w-[400px]"
        /> */}

        <Image
          src={"/leaf5.png"}
          alt="leaf3"
          width={200}
          height={200}
          className="absolute bottom-0 -z-30 right-leaf1 -right-12 md:w-[300px]  md:-right-20"
        />
      </div>
    </div>
  );
};

export default Cocktails;
