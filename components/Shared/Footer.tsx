import Link from 'next/link'
import React from 'react'
import LogoIcon from '../Icons/LogoIcon'

export default function Footer() {
    return (
        <div className='bg-white py-[40px]'>
            <div className='container  '>
                <div className='flex md:flex-row flex-col gap-6 justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <div className='p-1.5 rounded-[12px] bg-[linear-gradient(135deg,#7C3BED_0%,#A936E2_100%)]'>
                            {/* <img src="/logo.png" alt="" /> */}
                            <LogoIcon/>
                            {/* <span ><LogoIcon/></span> */}
                        </div>
                        <div className='text-[#6B7280] text-sm leading-[143%]'>
                            <p>© 2025 Online Code Compiler — Developed by <span className='text-[#17171C]'>Softvence</span></p>
                        </div>
                    </div>
                    <div className='flex gap-[18px] text-[#6B7280] text-sm leading-[143%]'>
                        <Link href="#" >
                            Privacy Policy </Link>
                        <Link href="#" >
                            Terms of Service </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
