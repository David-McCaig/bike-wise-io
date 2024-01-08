import Image from "next/image";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import Header from "@/components/header";
import Features from "@/components/features";
import NewsLetter from "@/components/newsLetter";
import { motion, useInView } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <NewsLetter />
    </main>
  );
}
