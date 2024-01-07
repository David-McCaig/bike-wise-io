"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import BikeWise from "../../public/bikewiselogo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatSubmit from "./chat-submit";
import ChatMessage from "./chat-message";
import GoogleAdd from "@/components/googleAdd";


export default function Chat({}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="w-full h-max p-6 bg-[#FAFAF9] lg:flex lg:justify-center max-w-[100rem] mx-auto">
    
      <div className="w-full h-max lg:flex lg:w-full lg:justify-center  ">
        <GoogleAdd className={'hidden lg:flex'} />
        <div className="">
          <ChatMessage chatData={messages} />
          <ChatSubmit
            value={input}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
        <GoogleAdd />
      </div>
    </main>
  );
}
