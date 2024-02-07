import React from 'react'
import './hero.css'
import { Search } from './Search'

export const HeroSection = () => {
  return (
    <div className='justify-center grid p-10 mt-32 gap-3 animate-gradient'>
         
        <p className=' text-center font-extrabold text-5xl pt-10'>Welcome To </p>
        <p className='text-9xl font-black bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text animate-slide-up'>Game Gatherer</p>

        <Search/>

    </div>
  )
}
