import AboutSoftvence from '@/components/LandingPage/AboutSoftvence'
import CodeCompieler from '@/components/LandingPage/CodeCompieler'
import React from 'react'

export default function LandingPage() {
  return (
    <div className=''>
        <div className='container'>
            <AboutSoftvence/>
        </div>
        <div>
            <CodeCompieler/>
        </div>
    </div>
  )
}
