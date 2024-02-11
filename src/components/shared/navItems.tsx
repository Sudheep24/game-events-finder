import React from 'react'
import Link from 'next/link'
export const NavItems = () => {
  return (
    <div className='flex gap-4 justify-center mr-24 '>
      <Link href={'/'}>
          <button className="overflow-hidden  w-32  h-12 bg-black text-white border-none rounded-full text-base font-bold cursor-pointer relative z-10 group">
              Home
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
              ></span>
              <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-6 z-10"
                >Home &gt;</span>
          </button>
        </Link>

        
        <Link href={'/'}>
          <button
              className="overflow-hidden  w-32  h-12 bg-black text-white border-none rounded-full text-base font-bold cursor-pointer relative z-10 group"
            >
              Events
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
              ></span>
              <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-6 z-10"
                >Events &gt;</span>
          </button>
        </Link>

        <Link href={'/'}>
          <button
              className="overflow-hidden  w-32  h-12 bg-black text-white border-none rounded-full text-base font-bold cursor-pointer relative z-10 group"
            >
              Playmates
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
              ></span>
              <span
                className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
              ></span>
              <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-6 z-10"
                >Playmates &gt;</span>
          </button>
        </Link>


    </div>
  )
}
