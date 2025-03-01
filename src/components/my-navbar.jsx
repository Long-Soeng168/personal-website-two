import { Kantumruy_Pro } from "next/font/google";
import React from "react";

const kantumruy = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const MyNavBar = () => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
    { title: "Guides", path: "javascript:void(0)" },
    { title: "Partners", path: "javascript:void(0)" },
  ];

  return (
    <nav className="w-full bg-white border-b md:border-0 md:static">
      <div className="items-center max-w-screen-xl px-4 mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <span className={`${kantumruy.className} text-3xl`}>ឡុង សឹង</span>
          </a>
        </div>
        <div className="flex-1 pb-3 mt-8 justify-self-center md:block md:pb-0 md:mt-0">
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden w-[200px] h-[50px] md:inline-block">
          <a
            href="javascript:void(0)"
            className={`${kantumruy.className} rainbow-button object-contain text-lg`}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavBar;
