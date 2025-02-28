"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function MyHero() {
  const [key, setKey] = useState(0); // Change key to reset effect

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Re-render component to restart animation
    }, 5000); // Adjust timing based on Typewriter speed

    return () => clearInterval(interval);
  }, []);

  const words = [
    {
      text: "Software_Engineer.",
      className: "text-transparent dark:text-transparent text-[60px]",
    },
  ];

  return (
    <BackgroundBeamsWithCollision
      className={`h-[40rem] md:h-[40rem] w-full dark:bg-transparent bg-transparent  dark:bg-dot-white/[0.4] bg-dot-black/[0.4] relative`}
    >
      <div className="flex flex-col justify-between w-full gap-8 px-8 lg:flex-row">
        <div className="flex items-center justify-center flex-1">
          {/* Replace with your image */}
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto relative w-[26rem] h-[26rem]">
            <Icon className="absolute w-6 h-6 text-black -top-3 -left-3 dark:text-white" />
            <Icon className="absolute w-6 h-6 text-black -bottom-3 -left-3 dark:text-white" />
            <Icon className="absolute w-6 h-6 text-black -top-3 -right-3 dark:text-white" />
            <Icon className="absolute w-6 h-6 text-black -bottom-3 -right-3 dark:text-white" />

            <EvervaultCard>
              <img
                src="https://personal-website-bay-sigma.vercel.app/assets/personal-profile-7c67da16.webp"
                className="object-contain w-full h-full"
              />
            </EvervaultCard>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 lg:items-start">
          <div className="text-5xl font-bold">I'm</div>
          <h2 className="relative z-20 font-sans text-2xl font-bold tracking-tight text-center text-black lg:text-start md:text-4xl lg:text-7xl dark:text-white">
            Long Soeng
            <div className="relative mx-auto block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <TypewriterEffect key={key} words={words} />
              </div>
              <div className="relative py-4 text-transparent bg-no-repeat bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                <TypewriterEffect key={key} words={words} />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
