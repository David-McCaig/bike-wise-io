import React, { ChangeEvent, FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatSubmitProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function ChatSubmit({value, onChange, onSubmit}:ChatSubmitProps) {
  return (
    <form
    className="w-full h-24 bg-[#FAFAF9] flex justify-end items-start sticky bottom-0"
    onSubmit={onSubmit}
  >
    <div className="flex w-full items-center">
      <Input
        className="h-12"
        value={value}
        placeholder="Say something..."
        onChange={onChange}
      />
      <Button className="ml-4 w-36 h-[2.8rem]">Send Message</Button>
    </div>
  </form>
  )
}

export default ChatSubmit