import React, { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Ensure this path is correct
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Get the dynamic route parameter

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        const eventDoc = doc(db, 'events', id); // Reference to the specific event document
        const eventSnapshot = await getDoc(eventDoc); // Fetch the document
        if (eventSnapshot.exists()) {
          setEvent({ id: eventSnapshot.id, ...eventSnapshot.data() }); // Set state with fetched event data
        } else {
          console.error("No such document!");
        }
      }
    };

    fetchEvent(); // Call the fetch function
  }, [id]); // Run when the id changes

  // Loading state
  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">{event.eventname}</h1>
      <p className="text-gray-500">{event.date}</p>
      <img src={event.imageUrl} alt={event.eventname} className="w-[300px] aspect-square object-cover my-4" />
      <p className="text-gray-700">{event.description}</p>
      <p className="font-bold">Entry Fee: {event.entryFee}</p>
      <p className="text-gray-500">Created By: {event.createdBy}</p>
      <p className="text-gray-500">Address: {event.address}</p>
    </div>
  );
};

export default EventDetail;
