import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { db } from '../../firebase'; // Adjust the import based on your Firebase setup
import { collection, getDocs } from 'firebase/firestore';

export const EventsCards = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, 'events'); // Reference to the events collection
        const eventSnapshot = await getDocs(eventsCollection); // Fetching documents
        const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Formatting data
        setEventData(eventList); // Setting state with fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents(); // Calling the fetch function
  }, []); // Empty dependency array to run once on mount

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error}</p>;

  return (
    <div className='flex gap-3 justify-center'>
      {eventData.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <div className="product-card w-[300px] rounded-md shadow-xl overflow-hidden relative cursor-pointer py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
            <div className="img w-[180px] aspect-square bg-gray-100 z-40 rounded-md">
              <img src={event.imageUrl} alt={event.eventname} className='w-full h-full object-cover' />
            </div>
            <div className="para text-center z-40">
              <p className="font-bold text-xl tracking-wider text-gray-500">{event.eventname}</p>
              <p className="text-gray-500">{event.date}</p>
            </div>
            <div className="btn">
              {/* Update this section */}
              <Link href={`/events/${event.id}`}>
                <p className="uppercase font-semibold text-xs px-2 whitespace-nowrap py-1 rounded-full bg-white text-gray-800 cursor-pointer">
                  ORDER NOW
                </p>
              </Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
