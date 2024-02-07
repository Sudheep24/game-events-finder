import React from 'react'
import Link from 'next/link'
export const NavItems = () => {
  return (
    <div className='flex gap-4'>
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>Games</Link>
      <Link href={'/'}>Playmates</Link>
    </div>
  )
}
