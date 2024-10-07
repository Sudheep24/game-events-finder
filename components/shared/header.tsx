"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth } from '../../firebase'; // Adjust the path accordingly
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { NavItems } from './navItems';
import { MobileNav } from './MobileNav';
import { Button } from '../ui/button';
import Modal from './Model';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [user, setUser] = useState<firebase.User | null>(null);

  // Initialize Google Auth Provider
  const provider = new GoogleAuthProvider();

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user; // The signed-in user
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <header className='w-full border-b flex justify-between p-3'>
      <Link href='/'>
        <h1 className='font-black p-3'>GameGatherer</h1>
      </Link>
      <nav className='md:flex hidden w-full max-w-xs gap-3 justify-center mr-10'>
        {user && <NavItems />}
      </nav>
      <div className="flex gap-4 p-3">
        {user ? (
          <>
            <img
              src={user.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-E00ahDJta1bwkrS1LgNfXZnUltxnxN4qhQ&usqp=CAU"}
              className='w-8 cursor-pointer'
              onClick={() => setShowModal(true)}
              alt="Profile"
            />
            {showModal && <Modal onClose={() => setShowModal(false)} />}
            <Button onClick={handleSignOut}>Sign Out</Button>
          </>
        ) : (
          <Button onClick={handleSignInWithGoogle} className='rounded-full'>
            Sign In with Google
          </Button>
        )}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
