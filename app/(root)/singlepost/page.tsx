
import Link from 'next/link'
import React from 'react'

export default function SinglePost() {
  return (
    <div className='ml-56 mt-24  '>
        <p className='font-bold text-5xl pb-5'>ABC Cricket <span className='bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text'>Tournament</span></p>
        <div className='flex justify-between'>
        <p >No.28,ABC Street Chennai</p>
        <Link href={'/events'}>
        <button className='mr-56 rounded-full'>Back</button>
        </Link>
        </div>
        <hr className='border-b font-bold mt-10 text-white'/>

        <div className='flex flex-col justify-center ml-auto mr-auto items-center'>
            <img src="https://img.jagranjosh.com/images/2023/May/3052023/ipl-2023-winner-chennai-super-kings-csk.jpg" alt="post"  className='w-2/3 mt-10 rounded-2xl animate-u' />
        </div>

        <div className='flex gap-3'>
            <div className="flex flex-col bg-white rounded-3xl w-1/5 mt-28">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="grid items-center justify-center w-1/2 grid-cols-1 text-left">
                    <div>
                        <h2
                        className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
                        >
                        29 Feb - 12.00 AM
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">Available slots: 9</p>
                    </div>
                    <div className="mt-6">
                        <p>
                        <span className="text-5xl font-light tracking-tight text-black">
                            Rs.110
                        </span>
                        <span className="text-base font-medium text-gray-500"> /head </span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="flex px-6 pb-8 sm:px-8">
                    <a
                    aria-describedby="tier-company"
                    className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    href="/book"
                    >
                    Book Now
                    </a>
                </div>
                </div>

                <div className='w-3/5 h-52 mt-36 font-bold ml-24'>
                    Fiction-writing specifically has modes such as action, exposition, description, dialogue, summary, and transition.[3] Author Peter Selgin refers to methods, including action, dialogue, thoughts, summary, scenes, and description.[4] Currently, there is no consensus within the writing community regarding the number and composition of fiction-writing modes and their uses. Description is the fiction-writing mode for transmitting a mental image of the particulars of a story. Together with dialogue, narration, exposition, and summarization, description is one of the most widely recognized of the fiction-writing modes. As stated in Writing from A to Z, edited by Kirk Polking, description is more than the amassing of details; it is bringing something to life by carefully choosing and arranging words and phrases to produce the desired effect.[5] The most appropriate and effective techniques for presenting description are a matter of ongoing discussion among writers and writing coaches.
                </div>

            </div>
    </div>
  ) 
}
