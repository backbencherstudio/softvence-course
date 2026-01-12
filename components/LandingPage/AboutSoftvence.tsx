import React from 'react'
import OurMissionIcon from '../Icons/OurmissionIcon';
import OurVissionIcon from '../Icons/OurVisionIcon';
import OurValueIcon from '../Icons/OurValueIcon';

export default function AboutSoftvence() {
    return (
        <div className='lg:py-[96px] md:py-[60px] py-10 md:max-w-[896px] mx-auto'>
            <div className='mx-auto flex flex-col items-center gap-4 p-[10px]'>
                <h2 className='text-[#17171C] text-2xl md:text-[32px] lg:text-[36px] font-bold leading-[111%] tracking-[-0.9px]'>About <span>Softvence</span></h2>
                <p className='text-[#6B7280] md:text-lg text-base leading-[155%]'>Empowering developers worldwide with instant, accessible coding tools.</p>
            </div>
            <div className='md:py-8 py-6 md:px-5 px-4 border border-[#E5E7EB] shadow-[0_1px_3px_0_rgba(23,25,28,0.04),0_4px_12px_0_rgba(23,25,28,0.03)] md:mt-8 mt-6 rounded-[12px] text-[#6B7280] md:text-base text-sm leading-[162.5%] flex flex-col gap-4'>
                <p className=''>Softvence is a leading software development company dedicated to creating innovative tools that simplify the
coding experience. Our Online Code Compiler was born from a simple idea: everyone should be able to write and
run code instantly, without the hassle of complex setups or installations.</p>
                <p>Since our founding, we've helped millions of developers, students, and educators around the world learn, practice,<br />
and build with code. Whether you're a complete beginner taking your first steps or an experienced developer
testing a quick idea, our platform is designed to get you coding in seconds.</p>
            </div>
            <div>
 <div className="grid gap-6 md:grid-cols-3 lg:mt-[74px] md:mt-[56px] mt-[40px]">
          {items.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="rounded-[12px] border border-[#E5E7EB] bg-[rgba(243,244,246,0.50)] md:py-6 py-5 px-3  text-center "
            >
              <div className="mx-auto mb-6 w-fit p-3 flex items-center justify-center rounded-2xl bg-[#F2ECFF]">
                <Icon className=" text-[#6D28D9]" />
              </div>

              <h3 className="text-base font-bold tracking-[-0.4px] text-[#17171C] leading-[150%] ">
                {title}
              </h3>

              <p className="mx-auto mt-3 md:text-sm text-xs leading-[143%] text-[#6B7280]">
                {desc}
              </p>
            </div>
          ))}
        </div>
            </div>
        </div>
    )
    
}



const items = [
  {
    title: "Our Mission",
    desc: "Make coding accessible to everyone, everywhere, with zero barriers.",
    Icon: OurMissionIcon,
  },
  {
    title: "Our Vision",
    desc: "Be the go-to platform for instant code execution and learning worldwide.",
    Icon: OurVissionIcon,
  },
  {
    title: "Our Values",
    desc: "Simplicity, speed, and a passion for empowering developers.",
    Icon: OurValueIcon,
  },
];