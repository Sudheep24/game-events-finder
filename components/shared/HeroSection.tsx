import React from 'react'
import './hero.css'
import { Search } from './Search'
import { PageNav } from './pageNav'


export const HeroSection = () => {
  return (
    <>
    <div className='justify-center grid p-10 mt-32 gap-3 animate-slide-up' id='intro'>
         
        <p className='text-3xl md:text-5xl text-center font-extrabold pt-10 animate-slide-up'>
          Welcome To
        </p>
         <p className='text-4xl md:text-9xl font-black bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text animate-gradient text-center md:text-left'>
              Game Gatherer
          </p>

        <Search/>


    </div>
    <div>
      
        <PageNav/>
    </div>
    </>
  )
}
