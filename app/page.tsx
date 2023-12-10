import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Features from "@/components/features";
import NewsLetter from "@/components/newsLetter";

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <NewsLetter />
    </main>
  );
}
