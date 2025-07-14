"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sliderList } from "@/lib/cocktails";

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
                  ? "border-b-white text-white"
                  : "border-b-white/50 text-white/60"
              }`}
            >
              <h2 className="text-sm">{item.title}</h2>
            </button>
          ))}
        </div>
      </nav>

      {/* ---------- SLIDER (arrows + centered image) ---------- */}
      <section className="relative py-18 mt-16">
        {/* left arrow */}
        <button
          aria-label="Previous cocktail"
          className="absolute left-0 top-3 flex items-center gap-2 cursor-pointer "
          onClick={() => goToSlide(currentIndex - 1)}
        >
          <ArrowLeft />
          <h1 className="hidden md:inline">{prev.title}</h1>
        </button>

        {/* right arrow */}
        <button
          aria-label="Next cocktail"
          className="absolute right-0 top-3 flex items-center gap-2 cursor-pointer"
          onClick={() => goToSlide(currentIndex + 1)}
        >
          <span className="hidden md:inline">{next.title}</span>
          <ArrowRight />
        </button>

        {/* centered image */}
        <div className="relative h-[200px] w-full">
          <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={current.image}
              alt={current.name}
              width={300}
              height={200}
              priority
              className=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
