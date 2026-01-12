'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '@/public/assets/images/logo.svg'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tutorials', label: 'Tutorials' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact', isButton: true }
  ]

  return (
    <>
      <nav className='bg-[#f7f8ff] py-5 px-3 md:px-0'>
        <div className='s_container flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <div className='logo_bg p-2 rounded-xl'>
              <Image src={logo} alt='logo' width={24} height={24} />
            </div>
            <h2 className='text-xl text-[#17171C] font-bold'>
              Soft<span className='text-[#7C3BED]'>vence</span>
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`
                    text-sm font-medium transition-colors cursor-pointer
                    ${link.isButton
                      ? 'text-white logo_bg py-3 px-4 rounded-[10px]'
                      : 'text-[#6B7280] hover:text-[#7C3BED]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <FiX className='w-6 h-6 text-[#17171C]' />
            ) : (
              <FiMenu className='w-6 h-6 text-[#17171C]' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`
          fixed inset-0 z-50 md:hidden
          ${isMenuOpen ? 'visible' : 'invisible'}
        `}
      >
        {/* Overlay */}
        <div
          className={`
            absolute inset-0 bg-black transition-opacity duration-300
            ${isMenuOpen ? 'opacity-50' : 'opacity-0'}
          `}
          onClick={toggleMenu}
        />

        {/* Sidebar */}
        <div
          className={`
            absolute top-0 right-0 h-full w-64 bg-white shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Sidebar Header */}
          <div className='flex items-center justify-between p-6 border-b'>
            <Link href='/' className='flex items-center gap-2' onClick={toggleMenu}>
              <div className='logo_bg p-2 rounded-xl'>
                <Image src={logo} alt='logo' width={24} height={24} />
              </div>
              <h2 className='text-xl text-[#17171C] font-bold'>
                Soft<span className='text-[#7C3BED]'>vence</span>
              </h2>
            </Link>
            <button
              onClick={toggleMenu}
              className='p-2 rounded-lg hover:bg-gray-100'
              aria-label='Close menu'
            >
              <FiX className='w-6 h-6 text-[#17171C]' />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className='p-6'>
            <ul className='space-y-6'>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`
                      block text-base font-medium transition-colors
                      ${link.isButton
                        ? 'text-white logo_bg py-3 px-4 rounded-[10px] text-center'
                        : 'text-[#6B7280] hover:text-[#7C3BED]'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}