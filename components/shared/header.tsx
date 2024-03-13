"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { NavItems } from './navItems';
import { MobileNav } from './MobileNav';
import { Button } from '../ui/button';
import Modal from './Model';



interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleModalClose = (option: string) => {
    setSelectedOption(option);
    setShowModal(false);
  };

  return (
    <header className='w-full border-b flex justify-between p-3'>
      <Link href='/'>
        <h1 className=' font-black p-3'>
          GameGatherer
        </h1>
      </Link>
      <nav className='md:flex hidden w-full max-w-xs gap-3 justify-center mr-10'>
        <SignedIn>
          <NavItems />
        </SignedIn>
      </nav>
      <div className="flex gap-4 p-3">
        <SignedIn>
          <UserButton afterSignOutUrl='/'></UserButton>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-E00ahDJta1bwkrS1LgNfXZnUltxnxN4qhQ&usqp=CAU"
            className='w-8 cursor-pointer'
            onClick={() => setShowModal(true)}
            alt="Write"
          />
          {showModal && <Modal onClose={handleModalClose} />}
     
        </SignedIn>
        <MobileNav />
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

export default Header;
