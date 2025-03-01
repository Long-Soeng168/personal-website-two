"use client";
import { ArrowUpIcon, ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const MyGoToTopButton = () => {
  // State to track if the button should be visible
  const [visible, setVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // Show button when scrolled down 200px
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add event listener to handle scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className="px-2 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition-all duration-300 cursor-pointer hover:scale-105"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: visible ? "block" : "none", // Show or hide the button
      }}
    >
      <ChevronUp />
    </button>
  );
};

export default MyGoToTopButton;
