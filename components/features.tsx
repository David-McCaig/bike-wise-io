'use client';
import { motion } from "framer-motion";
import FeaturesCard from "./featuresCard";

function features() {
  const featuresData = [
    {
      id: 1,
      title: "Ask Anything, Anytime",
      description:
        "Have a question about a specific bicycle part? Simply ask BikeWise.",
    },
    {
      id: 2,
      title: "Comprehensive Part Database",
      description:
        "Our extensive database covers a wide range of bicycle parts and accessories.",
    },
    {
      id: 3,
      title: "Personalized Recommendations",
      description:
        "Receive tailored suggestions based on your bike model, riding style, and preferences. ",
    },
  ];

  return (
    <motion.header
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
  >
    <section
      id="features"
      className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Your Personal Bicycle Mechanic in Your Pocket
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {featuresData.map((data) => (
          <div key={data.id}>
            <FeaturesCard title={data.title} description={data.description} />
          </div>
        ))}
      </div>

    </section>
    </motion.header>
  );
}

export default features;
