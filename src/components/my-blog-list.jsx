import { TerminalIcon } from "lucide-react";
import React from "react";
import { MyBlogCard } from "./my-blog-card";

const MyBlogList = () => {
  return (
    <div className="px-4 md:px-8 lg:px-10">
      <div className="pt-40 mx-auto max-w-7xl ">
        <div className="flex items-center">
          <TerminalIcon className="font-bold text-primary" />
          <p className="flex items-center gap-4">blogs</p>
        </div>
        <h2 className="max-w-4xl mb-4 text-lg font-semibold text-gray-600 md:text-5xl dark:text-white">
          My Blog Posts
        </h2>
        <p className="max-w-[38ch] text-xl text-neutral-700 dark:text-neutral-300 md:text-2xl">
          There are some blogs that I wrote from my code experience and some
          news content ...
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <MyBlogCard />
        <MyBlogCard />
        <MyBlogCard />
      </div>
    </div>
  );
};

export default MyBlogList;
