import Image from "next/image";
import NavBar from "./components/NavBar";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/Hero";
import Practice from "./components/Practice";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
// import Menu from "./components/Menu";

// gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      {/* <Menu /> */}
    </div>
  );
}
