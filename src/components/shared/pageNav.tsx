"use client"

import React, { useState } from 'react';

export const PageNav = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div className='bg-white text-black hidden md:flex justify-center items-center p-3 mx-auto rounded-full opacity-90 fixed top-96 left-0 right-0 mt-80 w-1/3' style={{ zIndex: 999 }}>
      <ul className='flex list-none gap-5 text-black'>
        <li>
          <a
            href="#"
            className={`cursor-pointer relative${activeTab === 1 ? ' p-2 rounded-full after:absolute after:content after:h-0.5 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500 after:bottom-0 after:left-0 after:transform after:-translate-y-1 after:transition-all after:duration-300' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            <span>GameGatherer</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`cursor-pointer relative${activeTab === 2 ? ' p-2 rounded-full after:absolute after:content after:h-0.5 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500 after:bottom-0 after:left-0 after:transform after:-translate-y-1 after:transition-all after:duration-300' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            <span>Find</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`cursor-pointer relative${activeTab === 3 ? ' p-2 rounded-full after:absolute after:content after:h-0.5 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500 after:bottom-0 after:left-0 after:transform after:-translate-y-1 after:transition-all after:duration-300' : ''}`}
            onClick={() => setActiveTab(3)}
          >
            <span>Events</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`cursor-pointer relative${activeTab === 4 ? ' p-2 rounded-full after:absolute after:content after:h-0.5 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500 after:bottom-0 after:left-0 after:transform after:-translate-y-1 after:transition-all after:duration-300' : ''}`}
            onClick={() => setActiveTab(4)}
          >
            <span>About</span>
          </a>
        </li>
      </ul>
    </div>
  )
};
