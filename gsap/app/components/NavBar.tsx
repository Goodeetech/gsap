"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  const navLinks = [
    {
      name: "CockTails",
      href: "#cocktails",
    },
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "The Art",
      href: "#art",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <nav className="fixed nav z-20 top-0 left-0 w-full h-12">
      <div className="py-4 px-16 flex justify-between items-center flex-col gap-4 md:flex-row ">
        <div>
          <h2 className="text-lg font-semibold"> Velvet Pour</h2>
        </div>
        <div className="flex gap-6 ">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="md:text-[12px] text-[10px] font-semibold"
            >
              {link?.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
