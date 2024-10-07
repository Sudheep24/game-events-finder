// /pages/singlepost/[id].js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../firebase'; // Adjust the import based on your Firebase setup
import { doc, getDoc } from 'firebase/firestore';

const EventDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extracting ID from the query parameters
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (id) {
        const eventDoc = doc(db, 'events', id); // Reference to the specific event
        const eventSnapshot = await getDoc(eventDoc); // Fetching the event document

        if (eventSnapshot.exists()) {
          setEvent({ id: eventSnapshot.id, ...eventSnapshot.data() }); // Formatting the data
        } else {
          console.error('No such document!');
        }
      }
    };

    fetchEventDetails(); // Calling the fetch function
  }, [id]); // Fetch when id changes

  if (!event) return <p>Loading...</p>; // Loading state

  return (
    <div className="event-detail">
      <h1 className="text-3xl font-bold">{event.eventname}</h1>
      <img src={event.imageUrl} alt={event.eventname} className="w-full h-auto" />
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Entry Fee:</strong> {event.entryFee}</p>
      <p><strong>Created By:</strong> {event.createdBy}</p>
      <p><strong>Created At:</strong> {new Date(event.createdAt.seconds * 1000).toLocaleString()}</p>
      <p><strong>Address:</strong> {event.address}</p>
    </div>
  );
};

export default EventDetail;
