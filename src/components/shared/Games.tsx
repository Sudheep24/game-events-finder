import React from 'react';
import { Button } from '../ui/button';

const cardsData = [
  {
    title: 'Card title 1',
    description: 'Description for card 1',
  },
  {
    title: 'Card title 2',
    description: 'Description for card 2',
  },
  {
    title: 'Card title 3',
    description: 'Description for card 3',
  },
];

export const Games = () => {
  return (
    <>
    <div>
      <p className='text-center flex justify-center items-center text-5xl font-bold animate-gradient' > Games to <span style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',paddingLeft:'10px' }}> Gamemates</span></p>
    </div>
    <div className='flex gap-11 justify-center p-7'>

     
      {cardsData.map((card, index) => (
        <div key={index} className="w-90 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <div className="w-52 h-40 bg-sky-300 rounded-2xl"></div>
          <div className="">
              <p className="font-extrabold">{card.title}</p>
              <p className="">{card.description}</p>
          </div>
          <button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
        </div>
      ))}
    </div>

    <div className='flex justify-center'>

     <Button variant={'outline'} className='text-xl p-10 border border-white  rounded-full flex justify-center '>view more &gt;</Button>
    </div>
    </>
  );
};


