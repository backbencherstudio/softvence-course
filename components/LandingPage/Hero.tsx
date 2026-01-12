import React from "react";
import Image from "next/image";
import starImg from "@/public/assets/images/star.svg";

export default function Hero() {
  return (
    <div className="bg-[#f7f8ff] pt-20 pb-24">
      <div className=" s_container flex flex-col justify-center items-center">
        <div className=" bg-[#e9e7fd] py-2 px-4 rounded-full   items-center justify-center gap-2 inline-flex">
          <Image src={starImg} alt="star" />
          <p className=" text-[#7C3BED] text-sm">
            No setup required — Start coding instantly
          </p>
        </div>
        <h1 className=" text-6xl  text-[#17171C] font-bold max-w-[790px] mx-auto text-center mt-8 leading-16">
          Choose Your{" "}
          <span className=" text-[#7C3BED]">
            {" "}
            Programming <br />
            Language
          </span>{" "}
        </h1>
        <p className=" text-xl text-[#6B7280] text-center max-w-[750px] mx-auto leading-7 mt-7">
          Write, run, and test code online instantly — no installation, no
          configuration. Just pick a language and start building.
        </p>
      </div>
    </div>
  );
}
