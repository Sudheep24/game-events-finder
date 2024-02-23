"use client"

import React, { useState, ChangeEvent } from 'react';

export default function Write() {
  const [displayedForm, setDisplayedForm] = useState('events');

  const handleEventsClick = () => {
    setDisplayedForm('events');
  };

  const handlePlaymatesClick = () => {
    setDisplayedForm('playmates');
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the image upload here
      console.log('Image uploaded:', file);
    }
  };

  const handleUploadClick = () => {
    const input = document.getElementById('imageInput') as HTMLInputElement;
    input.click();
  };

  return (
    <div className='ml-12 mt-12 gap-4 mr-12'>
      <h1 className="bg-gradient-to-r from-red-400 to-orange-300 text-transparent bg-clip-text text-5xl font-extrabold">Post Events or Playmates</h1>
      <div className='flex gap-5 p-5 '>
        <p onClick={handleEventsClick} className={`bg-white text-black rounded-full p-3 cursor-pointer ${displayedForm === 'events' ? 'font-bold' : ''}`}>Post Events</p>
        <p onClick={handlePlaymatesClick} className={`bg-white text-black rounded-full p-3 cursor-pointer ${displayedForm === 'playmates' ? 'font-bold' : ''}`}>Post Playmates</p>
      </div>
      <div className="mt-4 flex flex-col bg-gray-900 rounded-2xl p-4 shadow-sm">
        <h2 className="text-white font-bold text-lg">{displayedForm === 'events' ? 'Add Events' : 'Add Playmates'}</h2>
        <div className="mt-4">
          <label className="text-white" htmlFor="name">Add {displayedForm === 'events' ? 'Event' : 'Playmate'} Name</label>
          <input placeholder="Name" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" type="text" />
        </div>
        <div className="mt-4">
          <label className="text-white" htmlFor="description">Description</label>
          <textarea placeholder="Add description" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="description"></textarea>
        </div>
        <div className="mt-4">
          <label className="text-white" htmlFor="address">Address</label>
          <textarea placeholder="Location" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="address"></textarea>
        </div>
        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="text-white" htmlFor="city">City</label>
            <input placeholder="City" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="city" type="text" />
          </div>
          <div className="flex-1">
            <label className="text-white" htmlFor="state">State</label>
            <input placeholder="State" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="state" type="text" />
          </div>
        </div>
        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <label className="text-white" htmlFor="zip">ZIP</label>
            <input placeholder="ZIP code" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="zip" type="text" />
          </div>
          <div className="flex-1">
            <label className="text-white" htmlFor="country">Country</label>
            <select className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="country">
              <option value="">Select a country</option>
              <optgroup label="Africa">
                <option value="AF">Afghanistan</option>
                <option value="DZ">Algeria</option>
                <option value="AO">Angola</option>
                {/* Add more options */}
              </optgroup>
              {/* Add more optgroups */}
            </select>
          </div>
        </div>
        <div className='flex justify-between mt-5'>
          <div>
            <label className="text-white" htmlFor="entryFee">Entry Fee</label>
            <input placeholder="Entry Fee" className="w-1/8 bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="entryFee" type="text" />
          </div>
          <div>
            <label className="text-white" htmlFor="totalSlots">Total Slots</label>
            <input placeholder="Slots" className="w-1/8 bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="totalSlots" type="text" />
          </div>
          <div>
            <label className="text-white" htmlFor="availableSlots">Available</label>
            <input placeholder="Slots" className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" id="availableSlots" type="text" />
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className='flex gap-3 cursor-pointer' onClick={handleUploadClick}>
            <img src="https://colourise.com/static/images/icon/upload.png" className='w-10' alt="Upload Icon" />
            <p className='mt-3 '>Upload Image</p>
          </div>
          <button className="bg-white text-black px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200 rounded-full" type="submit">Submit</button>
        </div>
      </div>
      <input type="file" id="imageInput" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
    </div>
  );
}
