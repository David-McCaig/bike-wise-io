
export type featuresCardProps = {
    title: string
    description: string
  }

  export type Message = {
    id: string;
    content: string;
    role: string;
  }
  
  export type ChatMessageProps = {
      chatData: Message[];
  }