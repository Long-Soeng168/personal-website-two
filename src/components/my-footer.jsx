"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Sun,
  Twitter,
} from "lucide-react";
import MyLogo from "./my-logo";
import { StarsBackground } from "./ui/stars-background";
import { BackgroundBeams } from "./ui/background-beams";
import { MySocialMedia } from "./my-social-media";

export default function Footerdemo() {
  return (
    <footer className="relative transition-colors duration-300 bg-background text-foreground">
      <div className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative ">
        <div className="flex flex-col items-center justify-center py-20">
          {/* Logo */}
          <MyLogo />
          {/* Social Media */}
          <div>
            <MySocialMedia />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-full gap-4 px-4 py-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 <strong>Long Soeng</strong>. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="/" className="transition-colors hover:text-primary">
              By : Long Soeng
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
