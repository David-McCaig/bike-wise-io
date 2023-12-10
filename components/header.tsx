"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="col-span-8 place-self-center text-center sm:text-left justify-self-start py-32"
    >
      <div className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          {/* <Link
        href={"/"}
        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
        target="_blank"
      >
        Follow along on Twitter
      </Link> */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to{"  "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              BikeWise.
            </span>
            Your AI bicycle mechanic
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Are you tired of fumbling through confusing manuals or watching
            countless YouTube tutorials just to fix a simple issue on your bike?
            Look no further, BikeWise is here to make your cycling experience
            smoother than ever.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.header>
  );
}

export default header;
