import AboutSoftvence from '@/components/LandingPage/AboutSoftvence'
import Hero from '@/components/LandingPage/Hero'
import PopularLanguages from '@/components/LandingPage/PopularLanguages'
import React from 'react'

export default function LandingPage() {
  return (
    <div className=''>
        <div >
            <Hero/>
            <PopularLanguages/>
            <AboutSoftvence/>
        </div>
    </div>
  )
}
