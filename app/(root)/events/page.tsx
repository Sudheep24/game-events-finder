"use client"

import React, { useEffect, useState, useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { EventsCards } from '../../../components/shared/EventsCars';
import { Search } from '../../../components/shared/Search';

export default function Events() {


  return (
    <div>
      

      <div className="flex flex-col justify-center items-center mx-auto mt-10 p-5 gap-2 animate-slide-up">
        <p>Discover</p>
        <p className="text-3xl">
          Explore the latest{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
            Gaming Events
          </span>
        </p>
        <p>Find new outdoor events and connect with people</p>
      </div>

      <div className="flex justify-center mt-4 animate-slide-up">
        <Search />
        <div className="">
          <select className="block mt-10 text-black appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Select Location </option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
            <option>Houston</option>
            {/* Add more options as needed */}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM3 7a7 7 0 0 1 14 0h-1.4a5.6 5.6 0 1 0-11.2 0H3z" />
            </svg>
          </div>
        </div>
      </div>

      <EventsCards />
    </div>
  );
}
