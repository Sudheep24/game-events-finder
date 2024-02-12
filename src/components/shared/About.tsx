"use client"

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import ScrollUp from 'react-scroll-up';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.8; // Adjust this threshold as needed

      setIsVisible(scrollTop > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`flex flex-col justify-center items-center pt-24 mt-36 `}>
        <p className='text-center p-14 w-1/2 font-medium text-5xl'>Welcome to <span className="font-bold "  style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Game Gatherer</span>, where outdoor excitement meets communal connections!</p>
        <p className='text-center p-14 w-2/3 font-medium text-4xl'>Powered by <span className="font-bold "  style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>cutting-edge technology</span>, Game Gatherer facilitates seamless interactions and connections. Join us in discovering the joy of outdoor play, where every game is an opportunity for new friendships and unforgettable memories.</p> 
        <Button variant={'outline'} className='text-xl p-10 border border-white  rounded-full'>Explore More &gt;</Button>
      </div>

      <div className={`video-container ${isVisible ? 'animate-up' : ''}`}>
        <video className="w-1/2 justify-center align-middle flex ml-auto mr-auto mt-10 rounded-xl" controls loop>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-soccer-players-playing-on-a-field-4576-large.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>

      
      <ScrollUp showUnder={160}>
        <button>Scroll to top</button>
      </ScrollUp>
    </>
  );
};
