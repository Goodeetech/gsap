"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sliderList } from "@/lib/cocktails";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const Menu: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = sliderList.length;

  /** Jump to an absolute index, wrapping around the array */
  const goToSlide = (index: number) => setCurrentIndex((index + total) % total);

  /** Get cocktail relative to current (offset: -1 prev, 0 current, 1 next) */
  const getCocktailAt = (offset: number) =>
    sliderList[(currentIndex + offset + total) % total];

  const current = getCocktailAt(0);
  const prev = getCocktailAt(-1);
  const next = getCocktailAt(1);

  useGSAP(() => {
    gsap.fromTo(
      ".cocktail",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".detail",
      { opacity: 0, yPercent: 100 },
      {
        opacity: 1,
        duration: 1,
        yPercent: 0,
      }
    );
  }, [currentIndex]);

  return (
    <div className="mx-12 md:py-16">
      {/* ---------- TOP NAV (titles) ---------- */}
      <nav className="flex justify-center">
        <div className="grid grid-cols-2  md:grid-cols-5 gap-8">
          {sliderList.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => goToSlide(idx)}
              className={`border-b text-center ${
                idx === currentIndex
                  ? "border-b-white active-item text-white"
                  : "border-b-white/50 text-white/60"
              }`}
            >
              <h2 className="text-sm ">{item.title}</h2>
            </button>
          ))}
        </div>
      </nav>

      {/* ---------- SLIDER (arrows + centered image) ---------- */}
      <section className="relative py-18 mt-16">
        {/* left arrow */}
        <button
          aria-label="Previous cocktail"
          className="absolute left-0 top-3 hover:text-yellow-200  gap-2 cursor-pointer "
          onClick={() => goToSlide(currentIndex - 1)}
        >
          <h1 className="hidden md:inline">{prev.title}</h1>
          <span className="flex justify-start">
            {" "}
            <ArrowLeft />
          </span>
        </button>

        {/* right arrow */}
        <button
          aria-label="Next cocktail"
          className="absolute hover:text-yellow-200   right-0 top-3  gap-2 cursor-pointer"
          onClick={() => goToSlide(currentIndex + 1)}
        >
          <span className="hidden md:inline">{next.title}</span>
          <span className="flex justify-end">
            <ArrowRight />
          </span>
        </button>

        {/* centered image */}
        <div className="relative h-[200px] cocktail w-full">
          <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={current.image}
              alt={current.name}
              width={300}
              height={200}
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:bottom-6 md:left-0 md:absolute">
          <div>
            <span className="md:text-xs text-md">Recipe for: </span>
            <h2 className="text-xl font-semibold text-yellow-200 title">
              {current.name}
            </h2>
          </div>
        </div>
        <div className="md:bottom-8 md:right-0 md:absolute">
          <div>
            <h2 className="md:text-xl detail text-md  max-w-sm font-semibold ">
              {current.description}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
