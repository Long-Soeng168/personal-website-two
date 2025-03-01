"use client";
import { AlignRight, DownloadIcon, Moon, Sun, XIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import MyLogo from "./my-logo";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

const poppins = Poppins({
  className: "font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default () => {
  const [state, setState] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Run this only on the client side after mounting
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white dark:bg-black border-b-[0.5px] transition-all duration-500 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="items-center max-w-screen-xl px-4 mx-auto gap-x-14 md:flex md:px-8">
        <div className="flex items-center justify-between py-4 md:block">
          <a href="/">
            <MyLogo />
          </a>
          <div className="md:hidden">
            <Button
              size="icon"
              className="menu-btn"
              onClick={() => {
                setState(!state);
                console.log(state);
              }}
            >
              {state ? (
                <XIcon className="text-foreground" />
              ) : (
                <AlignRight className="text-foreground" />
              )}
            </Button>
          </div>
        </div>
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-lg text-foreground hover:text-primary"
                >
                  <a href={item.path} className="block animated-underline">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="items-center justify-end flex-1 py-4 mt-6 space-y-6 gap-x-6 md:flex md:space-y-0 md:mt-0">
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="w-4 h-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
            <a
              href="javascript:void(0)"
              className={`${poppins.className} z-40 rainbow-button flex items-center justify-center gap-4`}
            >
              <DownloadIcon size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
