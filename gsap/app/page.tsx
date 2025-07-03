import Image from "next/image";
import NavBar from "./components/NavBar";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/Hero";
import Practice from "./components/Practice";

gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />

      <div className="h-dvh "></div>
    </div>
  );
}
