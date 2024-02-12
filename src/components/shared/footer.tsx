import React from 'react'

export const Footer = () => {
  return (
    <div className='flex justify-between p-32'>

      <div>
        <p className='text-2xl font-extrabold'>Game Gatherer</p>
        <p>&copy; Game Gatherer</p>
      </div>

      <div>
        <p className='text-2xl pb-3'>Quick Links</p>

        <ul>
          <li>Home</li>
          <li>Games</li>
          <li>Playmates</li>
        </ul>
      </div>

      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
