"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function MyTextWriting() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="mb-10 text-base text-neutral-600 dark:text-neutral-200">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col mt-10 space-x-0 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <button className="w-40 h-10 text-sm text-white bg-black border border-transparent rounded-xl dark:border-white">
          Join now
        </button>
        <button className="w-40 h-10 text-sm text-black bg-white border border-black rounded-xl">
          Signup
        </button>
      </div>
    </div>
  );
}
