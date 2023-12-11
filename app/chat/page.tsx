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

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  console.log(messages.length);
  const dummyData = [
    { id: "1", role: "user", content: "Is a fox a mammal" },
    { id: "2", role: "AI", content: "True a fox is a mammal" },
    { id: "3", role: "user", content: "Is a fox a mammal" },
    { id: "4", role: "AI", content: "True a fox is a mammal" },
    { id: "5", role: "user", content: "Is a fox a mammal" },
    { id: "6", role: "AI", content: "True a fox is a mammal" },
    { id: "7", role: "user", content: "Is a fox a mammal" },
    { id: "8", role: "AI", content: "True a fox is a mammal" },
    { id: "9", role: "user", content: "Is a fox a mammal" },
    { id: "10", role: "AI", content: "True a fox is a mammal" },
    { id:"11", role: "user", content: "Is a fox a mammal" },
    { id: "12", role: "AI", content: "True a fox is a mammal12345" },
    { id: "13", role: "user", content: "Is a fox a mammal" },
    { id: "14", role: "AI", content: "True a fox is a mammal" },
  ];
  
  return (
    <main className="w-full  flex flex-col justify-end items-center bg-[#FAFAF9]">
      <div className="w-24 h-full"></div>
      <ChatMessage chatData={dummyData} />
      <ChatSubmit value={input} onChange={handleInputChange} onSubmit={handleSubmit} />
    </main>
  );
}
