import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { TerminalIcon } from "lucide-react";

export function MySkillFeatures() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="px-4 md:px-8 lg:px-10">
      <div className="pt-40 mx-auto max-w-7xl ">
        <div className="flex items-center">
          <TerminalIcon className="font-bold text-primary" />
          <p className="flex items-center gap-4">Skills</p>
        </div>
        <h2 className="max-w-4xl mb-4 text-lg font-semibold text-gray-600 md:text-5xl dark:text-white">
          Main Skill specialist
        </h2>
        <p className="max-w-[38ch] text-xl text-neutral-700 dark:text-neutral-300 md:text-2xl">
          There is varias of services that I do both as an employee and
          freelancer
        </p>
        <p className="max-w-md text-xl text-neutral-700 dark:text-neutral-300 md:text-2xl">
          Here's some of it.
        </p>
      </div>
      <div className="relative z-10 grid grid-cols-1 py-10 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="absolute inset-0 w-full h-full transition duration-200 opacity-0 pointer-events-none group-hover/feature:opacity-100 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent" />
      )}
      {index >= 4 && (
        <div className="absolute inset-0 w-full h-full transition duration-200 opacity-0 pointer-events-none group-hover/feature:opacity-100 bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent" />
      )}
      <div className="relative z-10 px-10 mb-4 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 px-10 mb-2 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 w-1 h-6 transition-all duration-200 origin-center rounded-tr-full rounded-br-full group-hover/feature:h-8 group-hover/feature:w-2 bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary" />
        <span className="inline-block transition duration-200 group-hover/feature:translate-x-2 text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
