import React from 'react'
import OurMissionIcon from '../Icons/OurmissionIcon';
import OurVissionIcon from '../Icons/OurVisionIcon';
import OurValueIcon from '../Icons/OurValueIcon';
import ExecutionIcon from '../Icons/ExecutionIcon';
import InstallmentIcon from '../Icons/InstallmentIcon';
import LanguageIcon from '../Icons/LanguageIcon';
import FriendlyIcon from '../Icons/FriendlyIcon';
import WorksEverywhereIcon from '../Icons/WorksEverywhereIcon';
import SecureIcon from '../Icons/SecureIcon';

export default function CodeCompieler() {
    return (
        <div className='bg-[rgba(243,244,246,0.50)] lg:py-[96px] md:py-[60px] py-10 '>
            <div className="container">
                <div className='max-w-[1024px] mx-auto '>
                <div className='mx-auto flex flex-col items-center gap-4 p-[10px]'>
                    <h2 className='text-[#17171C] text-2xl md:text-[32px] lg:text-[36px] font-bold leading-[111%] tracking-[-0.9px]'>Why Use Our Online Code Compiler?</h2>
                    <p className='text-[#6B7280] md:text-lg text-base leading-[155%]'>Everything you need to write, test, and run code — right in your browser.</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 lg:mt-[48px] md:mt-[42px] mt-[32px]">
                    {items.map(({ title, desc, Icon }) => (
                        <div
                            key={title}
                            className="rounded-[12px] border border-[#E5E7EB] bg-[#fff] shadow-[0_1px_3px_0_rgba(23,25,28,0.04),0_4px_12px_0_rgba(23,25,28,0.03)] md:py-6 py-5 md:px-6 px-5  text-left "
                        >
                            <div className=" mb-6 w-fit p-3 flex items-center justify-center rounded-2xl bg-[#F2ECFF]">
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
        </div>
    )
}

const items = [
    {
        title: "Instant Execution",
        desc: "Run your code in milliseconds with our optimized cloud infrastructure.",
        Icon: ExecutionIcon,
    },
    {
        title: "No Installation",
        desc: "Access from any browser, anywhere. No downloads or setup required.",
        Icon: InstallmentIcon,
    },
    {
        title: "Multiple Languages",
        desc: "Support for 20+ programming languages with syntax highlighting.",
        Icon: LanguageIcon,
    },
    {
        title: "Beginner Friendly",
        desc: "Perfect for learning. Clear error messages and helpful documentation.",
        Icon: FriendlyIcon,
    },
    {
        title: "Works Everywhere",
        desc: "Desktop, tablet, or mobile — code on any device seamlessly.",
        Icon: WorksEverywhereIcon,
    },
    {
        title: "Secure & Private",
        desc: "Your code runs in isolated containers. Safe and secure execution.",
        Icon: SecureIcon,
    },
];
