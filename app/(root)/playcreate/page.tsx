"use client"

import React, { useEffect, useState } from 'react';
import EventForm from '../../../components/shared/EventForm';
import { auth } from '../../../firebase'; // Ensure this path is correct
import { onAuthStateChanged } from 'firebase/auth';

export default function PlayCreateEvent() {
  const [userId, setUserId] = useState<string | null>(null);

  // Check for user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Set user ID from Firebase user
      } else {
        setUserId(null); // User is signed out
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, []);

  return (
    <>
      <section>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-center pt-16">
          Enter Event Details
        </h1>
      </section>
      <div>
        {userId ? (
          <EventForm 
            userId={userId} 
            type="Create" 
            event={{}} // Provide a default empty object for event
            eventId={null} // Provide null or a default value for eventId
          />
        ) : (
          <p className="text-center text-red-500">You must be signed in to create an event.</p>
        )}
      </div>
    </>
  );
}
