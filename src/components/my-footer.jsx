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

export default function Footerdemo() {
  return (
    <footer className="relative transition-colors duration-300 border-t bg-background text-foreground">
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl p-4 mx-auto">
          <img
            src="/images/logo_bg_black.png"
            width={80}
            height={40}
            alt="Logo"
          />
          <h1 className="relative z-10 font-sans text-lg font-bold text-center text-transparent md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            Join the waitlist
          </h1>
          <p></p>
          <p className="relative z-10 max-w-lg mx-auto my-2 text-sm text-center text-neutral-500">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="relative z-10 w-full mt-4 border rounded-lg border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
        <StarsBackground />
      </div>
      {/*  */}
      <div className="h-[40rem] bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <h2 className="relative z-10 flex flex-col items-center max-w-5xl gap-2 mx-auto text-3xl font-medium tracking-tight text-center text-transparent md:flex-row md:text-5xl md:leading-tight bg-clip-text bg-gradient-to-b from-neutral-800 via-white to-white md:gap-8">
          <span>Shooting Star</span>
          <span className="text-lg font-thin text-white">x</span>
          <span>Star Background</span>
        </h2>
      </div>
      {/*  */}
      <div className="container px-4 py-12 mx-auto md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <MyLogo />
            <div className="absolute top-0 w-24 h-24 rounded-full -right-4 bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Home
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                About Us
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Services
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Products
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex mb-6 space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="w-4 h-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter className="w-4 h-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-12 text-center border-t md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
