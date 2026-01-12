import React from "react";
import Image from "next/image";
import starImg from "@/public/assets/images/star.svg";

export default function Hero() {
  return (
    <div className="bg-[#f7f8ff] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24">
      <div className="container flex flex-col justify-center items-center px-4 sm:px-6">
        {/* Badge */}
        <div className="bg-[#e9e7fd] py-2 px-4 rounded-full items-center justify-center gap-2 inline-flex mb-4 sm:mb-6 md:mb-8">
          <Image 
            src={starImg} 
            alt="star" 
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <p className="text-[#7C3BED] text-xs sm:text-sm md:text-base font-medium">
            No setup required — Start coding instantly
          </p>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#17171C] font-bold max-w-[90%] sm:max-w-[640px] md:max-w-[720px] lg:max-w-[790px] mx-auto text-center mt-4 sm:mt-6 md:mt-8 leading-tight sm:leading-snug md:leading-normal lg:leading-[1.2]">
          Choose Your{" "}
          <span className="text-[#7C3BED]">
            Programming <br className="hidden sm:block" />
            Language
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#6B7280] text-center max-w-[90%] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[750px] mx-auto leading-relaxed sm:leading-loose md:leading-[1.7] mt-4 sm:mt-5 md:mt-6 lg:mt-7">
          Write, run, and test code online instantly — no installation, no
          configuration. Just pick a language and start building.
        </p>
      </div>
    </div>
  );
}