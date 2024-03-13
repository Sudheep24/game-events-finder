import React from 'react';
import EventForm from '../../../components/shared/EventForm';
import { auth } from '@clerk/nextjs';

export default function CreateEvent() {
  const{sessionClaims}=auth();

  const userId =sessionClaims?.userId as string;
  return (
    <>
    <section>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-center pt-16">Enter Event Details</h1>
    </section>
    <div>
      <EventForm userId={userId} type='Create'/>
    </div>
    </>
  );
}
