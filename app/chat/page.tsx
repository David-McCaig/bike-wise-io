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


export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(messages.length);
  const dummyData = [
    { id: "1", role: "user", content: "Is a fox a mammal" },
    { id: "2", role: "AI", content: "True a fox is a mammal" },
    { id: "3", role: "user", content: "Is a fox a mammal" },
    { id: "4", role: "AI", content: "True a fox is a mammaleeeee" },
    { id: "5", role: "user", content: "the endffffeeeeee" },
    { id: "6", role: "AI", content: "True a fox is a mammalffff" },
    { id: "7", role: "user", content: "Is a fox a mammalffff" },
    { id: "8", role: "AI", content: "True a fox is a mammalfffff" },
    { id: "9", role: "user", content: "Is a fox a mammalfff" },
    { id: "10", role: "AI", content: "True a fox is a mammalffff" },
    { id: "11", role: "user", content: "Is a fox a mammalffff" },
    { id: "12", role: "AI", content: "True a fox is a mammal12345" },
    { id: "13", role: "user", content: "Is a fox a mammal" },
    { id: "14", role: "AI", content: "True a fox is a mammalfffff" },
    { id: "7", role: "user", content: "Is a fox a mammaleeeee" },
    { id: "8", role: "AI", content: "True a fox is a mammaleeeee" },
    { id: "9", role: "user", content: "Is a fox a mammaleeeee" },
    { id: "10", role: "AI", content: "True a fox is a mammaleeeeee" },
    { id: "11", role: "user", content: "Is a fox a mammaleeeee" },
    { id: "12", role: "AI", content: "True a fox is a mammal12345" },
    { id: "13", role: "user", content: "Is a fox a mammaleeeee" },
    { id: "14", role: "AI", content: "True a fox is a mammaleeeeeee" },
    { id: "7", role: "user", content: "Is a fox a mammaleeeeee" },
    { id: "8", role: "AI", content: "True a fox is a mammal" },
    { id: "9", role: "user", content: "Is a fox a mammaleeeeee" },
    { id: "10", role: "AI", content: "True a fox is a mammaleeeeeee" },
    { id: "11", role: "user", content: "Is a fox a mammaleeeeeee" },
    { id: "12", role: "AI", content: "True a fox is a mammal12345" },
    { id: "13", role: "user", content: "Is a fox a mammaleeeeeee" },
    { id: "14", role: "AI", content: "True a fox is a mammaleeeeee" },
  ];

  return (
    <main className="w-full p-6 bg-[#FAFAF9] lg:flex lg:justify-center max-w-[100rem] mx-auto">
    
      <div className="lg:flex lg:w-full lg:justify-center  ">
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
