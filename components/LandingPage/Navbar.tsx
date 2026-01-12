import React from 'react'
import Image from 'next/image'
import logo from '@/public/assets/images/logo.svg'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className=' bg-[#f7f8ff] py-5'>
    <div className=' s_container flex items-center justify-between'>
      {/* logo */}
      <Link href='/' className=' flex items-center gap-2'>
        <div className=' logo_bg p-2 rounded-xl'>
        <Image src ={logo} alt='logo'/>

        </div>
        <h2 className=' text-xl text-[#17171C] font-bold '>Soft<span className='text-[#7C3BED]'>vence</span></h2>
      </Link>

      <ul className=' flex items-center gap-8'>
        <li>
          <Link href ='/' className=' text-sm  text-[#6B7280] font-medium hover:text-[#7C3BED] transition-colors cursor-pointer '>Home</Link>
        </li>
        <li>
          <Link href ='/' className=' text-sm  text-[#6B7280] font-medium hover:text-[#7C3BED] transition-colors cursor-pointer '>Tutorials</Link>
        </li>
        <li>
          <Link href ='/' className=' text-sm  text-[#6B7280] font-medium hover:text-[#7C3BED] transition-colors cursor-pointer '>About</Link>
        </li>
        <li>
          <Link href ='/' className=' text-sm  text-white font-medium  logo_bg cursor-pointer py-3 px-4 rounded-[10px]'>Contact</Link>
        </li>
      </ul>


    </div>

    </nav>
  )
}
