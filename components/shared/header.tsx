import React from 'react';

import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { NavItems } from './navItems';
import { MobileNav } from './MobileNav';
import { HeroSection } from './HeroSection';


export const Header = () => {
  return (
    <header className='w-full border-b flex justify-between p-3'>
      <Link href='/'>
        
          <h1 className=' font-black p-3'>
            GameGatherer
          </h1>
        
      </Link>
        <nav className='md:flex hidden w-full max-w-xs gap-3 justify-center mr-10'>
          <SignedIn>
            <NavItems/>
          </SignedIn>
        </nav>
      <div className="flex gap-4 p-3">
        <SignedIn>
          <UserButton afterSignOutUrl='/'></UserButton>
          <Link href={'/write'}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-E00ahDJta1bwkrS1LgNfXZnUltxnxN4qhQ&usqp=CAU" className='w-8' />
          </Link>
        </SignedIn>
        <MobileNav/>
        <SignedOut>
          <Button asChild className='rounded-full'>
            <Link href="/sign-in">
              SignIn
            </Link>
          </Button>
        </SignedOut>
      </div>

     
    </header>
    
  );
};
