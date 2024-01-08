import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatMessageProps } from "@/app/lib/definitions";

function ChatMessage({ chatData }: ChatMessageProps) {
  
  return (
    <section className="w-full h-screen bg-[#FAFAF9] lg:mx-12 lg:w-[30rem] xl:w-[40rem] pb-12 ">
      <div className="flex flex-col justify-start items-start w-full overflow-hidden h-full">
        {chatData.map((m) => (
          <div
            key={m.id}
            className="flex flex-col justify-start items-start w-full"
          >
            <div className="flex mt-12 ">
              <Avatar className="mr-4">
                <AvatarImage> </AvatarImage>
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <div className="whitespace-pre-wrap">
                <h3 className="font-semibold text-lg text-slate-900">
                  {m.role === "user" ? "You: " : "BikeWise: "}
                </h3>
                <p className="text-slate-700 mt-1">{m.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChatMessage;
