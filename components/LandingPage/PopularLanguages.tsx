import React from 'react'
import SearchIcon from '@/public/assets/icons/SearchIcon';
import Image from 'next/image';
import pythonImg from '@/public/assets/images/python.png'
import jsImg from '@/public/assets/images/javaScript.png'
import tsImg from '@/public/assets/images/typeScript.png'
import jvImg from '@/public/assets/images/java.png'
import cPlusImg from '@/public/assets/images/c-plus.png'
import phpImg from '@/public/assets/images/php.png'
import rubyImg from '@/public/assets/images/ruby.png'
import rustImg from '@/public/assets/images/rust.png'
import swiftImg from '@/public/assets/images/swift.png'
import cSharp from '@/public/assets/images/c-sharp.png'
import htmlImg from '@/public/assets/images/html.png'
import cssImg from '@/public/assets/images/css.png'
import sqlImg from '@/public/assets/images/c-plus.png' // Fix this import if wrong

const languages = [
  { id: 1, name: 'Python', icon: pythonImg },
  { id: 2, name: 'JavaScript', icon: jsImg },
  { id: 3, name: 'TypeScript', icon: tsImg },
  { id: 4, name: 'Java', icon: jvImg },
  { id: 5, name: 'C++', icon: cPlusImg },
  { id: 6, name: 'PHP', icon: phpImg },
  { id: 7, name: 'Ruby', icon: rubyImg },
  { id: 8, name: 'Rust', icon: rustImg },
  { id: 9, name: 'Swift', icon: swiftImg },
  { id: 10, name: 'C#', icon: cSharp },
  { id: 11, name: 'HTML', icon: htmlImg },
  { id: 12, name: 'CSS', icon: cssImg },
  { id: 13, name: 'SQL', icon: sqlImg },
  
]

export default function PopularLanguages() {
  return (
    <div className='container px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center'>
      {/* Search Bar - Responsive */}
      <div className="relative w-full max-w-full sm:max-w-[500px] md:max-w-[576px] mx-auto py-4 sm:py-6 md:py-8">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <SearchIcon   />
        </div>
        
        <input
          type="text"
          placeholder="Search programming language..."
          className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 md:py-5 border border-[#E5E7EB] 
                     focus:outline-none focus:ring-2 focus:ring-[#7C3BED] focus:border-transparent
                     bg-white text-gray-800 placeholder:text-[#6B7280] 
                     placeholder:text-sm sm:placeholder:text-base
                     text-sm sm:text-base rounded-lg sm:rounded-xl
                     transition-all duration-200"
        />
      </div>

      {/* Title Section - Responsive */}
      <div className='mt-6 sm:mt-8 mb-6 sm:mb-8 md:mb-10 px-4 text-center'>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#17171C] font-bold'>
          Popular Languages
        </h2>
        <p className='text-sm sm:text-base md:text-lg text-[#6B7280] mt-2 sm:mt-3  '>
          Empowering developers worldwide with instant, accessible coding tools.
        </p>
      </div>
      
      {/* Languages Grid - Responsive */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 w-full px-4'>
        {languages.map((language) => (
          <div 
            key={language.id} 
            className='py-3 sm:py-4 md:py-5 lg:py-6 
                      px-2 sm:px-4 md:px-6 lg:px-[73px] 
                      border border-[#E5E7EB] rounded-lg sm:rounded-[10px] md:rounded-[12px]
                      flex flex-col items-center justify-center 
                      hover:border-[#7C3BED] hover:shadow-sm md:hover:shadow-md 
                      transition-all duration-200
                      min-h-[100px] sm:min-h-[120px] md:min-h-[140px]'
          >
            <div className='mb-1 sm:mb-2 flex-shrink-0'>
              <Image 
                src={language.icon} 
                alt={`${language.name} logo`}
                width={32}
                height={32}
                className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'
              />
            </div>
            <p className='text-xs sm:text-sm md:text-base text-[#17171C] font-medium mt-1 sm:mt-2 text-center'>
              {language.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}