"use client";

import {
  ChevronDown,
  ChevronDownIcon,
  DownloadIcon,
  InfoIcon,
  SwordIcon,
  SwordsIcon,
  WindIcon,
} from "lucide-react";
import { FlipWords } from "./ui/flip-words";

export default () => {
  const words = ["Front-End", "Back-End", "UX/UI Design", "Mobile App"];

  return (
    <section className="items-center max-w-screen-xl gap-12 px-4 mx-auto overflow-hidden text-gray-600 py-28 md:px-8 md:flex">
      <div className="flex-none max-w-xl space-y-5">
        <div className="inline-flex items-center p-1 pr-6 text-sm font-medium duration-150 border rounded-full gap-x-6 hover:bg-white">
          <span className="inline-block px-1 py-1 text-white bg-indigo-600 rounded-full">
            <SwordsIcon />
          </span>
          <p className="flex items-center gap-4">
            More About Me <ChevronDown />
          </p>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-500 sm:text-5xl">
          A software engineer skilled in
          <span className="text-gray-800">
            <FlipWords words={words} />
          </span>
        </h1>
        <ul className="text-2xl font-semibold">
          <li>🎨 Front-End</li>
          <li>🗄️ Back-End</li>
          <li>📐 UX/UI Design</li>
          <li>📱 Mobile App</li>
        </ul>
        <div className="flex items-center gap-4 text-lg">
          <a
            href="javascript:void(0)"
            className="flex items-center justify-center px-4 text-lg py-2 text-primary-foreground  bg-primary rounded-md gap-x-1 font-bold active:bg-gray-900 md:inline-flex hover:shadow-none shadow-[5px_5px_0px_0px_rgba(1,1,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
          >
            <DownloadIcon size={18} />
            Resume
          </a>
          <a
            href="javascript:void(0)"
            className="px-4 py-2 flex items-center gap-2 rounded-md border border-black bg-white text-black text-lg hover:shadow-none hover:translate-x-1 hover:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
          >
            Contact info
            <ChevronDownIcon size={18} />
          </a>
        </div>
      </div>
      <div className="flex-1 hidden md:block">
        {/* Replace with your image */}
        <img src="/images/hero_one.svg" className="max-w-xl" />
      </div>
    </section>
  );
};
