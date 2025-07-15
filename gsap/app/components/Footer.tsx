"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

import {
  FacebookIcon,
  InstagramIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const start = isMobile ? "top bottom" : "top 60%";
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start,
        toggleActions: "play reverse play reverse",
      },
    });
    tl.from(".hello1", {
      opacity: 0,
      yPercent: 100,
      ease: "power1.inOut",
      stagger: 0.1,
    });

    tl.fromTo(
      ".imageF",
      { opacity: 0, xPercent: 100 },
      { opacity: 1, duration: 1, xPercent: 0 }
    );
  });
  return (
    <div
      id="footer"
      className="  mt-16 text-center py-8 flex items-center justify-center relative"
    >
      <div className="flex items-center  gap-4 flex-col">
        <div className="hello1">
          <h3 className="lg:text-7xl md:text-5xl text-xl  font-semibold py-2">
            Where to Find Us
          </h3>
          <div>
            <span className="text-sm mt-3 ">Visit our store</span>
            <p className="">465, Raq Blvd. #404, Los Angeles, CA 90210</p>
          </div>
        </div>
        <div className="hello1">
          <h2 className="text-xs">Contact us</h2>
          <div className="mt-3">
            <h2>(555) 980-89589</h2>
            <h3>hello@goodee.com</h3>
          </div>
        </div>
        <div className="hello1">
          <h2 className="text-xs ">open every day</h2>
          <div className="mt-4">
            <h2>Mon-thu: 11:00am - 12am</h2>
            <h2>Fri: 11:00am - 2am</h2>
            <h2>Sat: 9:00am - 2am</h2>
            <h2>Sun: 9:00 - 1am</h2>
          </div>
        </div>
        <div className="hello1">
          <h2 className="text-xs">socials</h2>
          <div className="flex items-center gap-2 mt-3">
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="absolute imageF  md:block bottom-0 right-3  hidden ">
        <Image src={"/cocktails.webp"} alt="image" height={400} width={400} />
      </div>
    </div>
  );
};

export default Footer;
