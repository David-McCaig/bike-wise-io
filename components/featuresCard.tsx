
import React from "react";
import { featuresCardProps } from "@/lib/definitions";

function featuresCard({ title, description }: featuresCardProps) {
  return (
    
    <article className="relative overflow-hidden rounded-lg border bg-background p-2 h-52">
      <div className="relative group bg-white transition">
        <div className="relative p-8 space-y-8">
          {/* <Image
            src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
            width={1000}
            height={760}
            alt="burger illustration"
          /> */}

          <div className="space-y-2">
            <div className="h-12 mb-4">
            <h5 className="text-xl text-gray-800 font-medium transition ">
              {title}
            </h5>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default featuresCard;
