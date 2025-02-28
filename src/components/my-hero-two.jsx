"use client";

import {
  ChevronDown,
  InfoIcon,
  SwordIcon,
  SwordsIcon,
  WindIcon,
} from "lucide-react";
import { FlipWords } from "./ui/flip-words";

export default () => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="relative">
      <div className="relative">
        <section>
          <div className="max-w-screen-xl gap-12 px-4 mx-auto overflow-hidden text-gray-600 py-28 md:px-8 md:flex">
            <div className="flex-none max-w-xl space-y-5">
              <div className="inline-flex items-center p-1 pr-6 text-sm font-medium duration-150 border rounded-full gap-x-6 hover:bg-white">
                <span className="inline-block px-1 py-1 text-white bg-indigo-600 rounded-full">
                  <SwordsIcon />
                </span>
                <p className="flex items-center gap-4">More Info About Me</p>
              </div>
              <h1 className="text-4xl font-extrabold text-gray-500 sm:text-5xl">
                Build your Software exactly how you want
                <div className="text-gray-800">
                  <FlipWords words={words} />
                </div>
              </h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center px-4 py-2 font-medium text-white duration-150 bg-gray-800 rounded-full gap-x-1 hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
                >
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center px-4 py-2 font-medium text-gray-700 duration-150 gap-x-1 hover:text-gray-900 md:inline-flex"
                >
                  Contact sales
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Replace with your image */}
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                className="max-w-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
