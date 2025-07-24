"use client";
import { AnimationContext } from "@/lib/animationContext";
import { ScrollTrigger } from "gsap/all";

import React, { ReactNode, useEffect, useState } from "react";

const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [loadingAnimation, setLoadingAnimation] = useState<any>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingAnimation(false);
      ScrollTrigger.refresh();
    }, 4000); // 4 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <AnimationContext.Provider
      value={{ loadingAnimation, setLoadingAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
