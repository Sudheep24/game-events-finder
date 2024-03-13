"use client"

import React, { useState } from 'react';

export const PageNav = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='  bg-gray-900 animate-slide-up text-white hidden md:flex justify-center items-center p-3 mx-auto rounded-full opacity-90 fixed top-96 left-0 right-0 mt-80 w-1/3' style={{ zIndex: 999 }}>
      <ul className='flex list-none gap-5'>
        <li>
          <span className={`cursor-pointer relative${activeTab === 1 ? ' text-blue-300 p-2 rounded-full after:absolute after:content after:h-0.5 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500 after:bottom-0 after:left-0 after:transform after:-translate-y-1 after:transition-all after:duration-300' : ''}`} onClick={() => { setActiveTab(1); smoothScrollTo('intro'); }}>
            <span>GameGatherer</span>
          </span>
        </li>
        <li>
          <span className={`cursor-pointer relative${activeTab === 4 ? ' text-blue-300 p-2 rounded-full after:absolute after:content after:h-0.5 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500 after:bottom-0 after:left-0 after:transform after:-translate-y-1 after:transition-all after:duration-300' : ''}`} onClick={() => { setActiveTab(4); smoothScrollTo('about'); }}>
            <span>About</span>
          </span>
        </li>
        <li>
          <span className={`cursor-pointer relative${activeTab === 3 ? ' p-2 rounded-full after:absolute after:content after:h-0.5 after:w-full after:bg-gradient-to-r after:from-red-500 after:to-blue-500 text-blue-300 after:bottom-0 after:left-0 after:transform after:-translate-y-1 after:transition-all after:duration-300' : ''}`} onClick={() => { setActiveTab(3); smoothScrollTo('games'); }}>
            <span>Events</span>
          </span>
        </li>
      </ul>
    </div>
  )
};
