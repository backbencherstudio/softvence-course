import React from "react";
import AboutSoftvence from "@/components/LandingPage/AboutSoftvence";
import Hero from "@/components/LandingPage/Hero";
import PopularLanguages from "@/components/LandingPage/PopularLanguages";
import CodeCompieler from "@/components/LandingPage/CodeCompieler";

export default function LandingPage() {
  return (
    <div>
      <div>
        <Hero />
        <PopularLanguages />
        <div className="container">
          <AboutSoftvence />
        </div>
        <div>
          <CodeCompieler />
        </div>
      </div>
    </div>
  );
}
