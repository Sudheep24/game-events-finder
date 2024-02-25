import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet"
import { Navigation } from './navigation-menu'
import Link from 'next/link'


export const MobileNav = () => {
  return (
    <div className='md:hidden '>
            <Sheet>
            <SheetTrigger>
                <img src="https://icon-library.com/images/hamburger-menu-icon-free/hamburger-menu-icon-free-15.jpg" alt="menu" className='w-9' />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <div className='flex flex-col p-5 gap-9 border-slate-50'>
                  <Link href={'/'}>
                    <p>Home</p>
                  </Link>
                  <Link href={'/events'}>
                    <p>Events</p>
                  </Link>
                    
                </div>
                </SheetHeader>
            </SheetContent>
            </Sheet>

    </div>
  )
}
