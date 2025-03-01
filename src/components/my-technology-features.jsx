import { TerminalIcon } from "lucide-react";
import { HoverEffect } from "./ui/card-hover-effect";

export function MyTechnologyFeatures() {
  return (
    <div className="px-4 md:px-8 lg:px-10">
      <div className="pt-40 mx-auto max-w-7xl ">
        <div className="flex items-center">
          <TerminalIcon className="font-bold text-primary" />
          <p className="flex items-center gap-4">Technology</p>
        </div>
        <h2 className="max-w-4xl mb-4 text-lg font-semibold text-gray-600 md:text-5xl dark:text-white">
          Main Technologies used
        </h2>
        <p className="max-w-[38ch] text-xl text-neutral-700 dark:text-neutral-300 md:text-2xl">
          There is varias of ... that I do both as an employee and freelancer
        </p>
        <p className="max-w-md text-xl text-neutral-700 dark:text-neutral-300 md:text-2xl">
          Here's some of it.
        </p>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
