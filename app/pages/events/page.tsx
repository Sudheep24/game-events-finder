import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Adjust the import based on your Firebase setup
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchEvent = async () => {
        try {
          const eventDoc = doc(db, 'events', id);
          const eventSnapshot = await getDoc(eventDoc);
          if (eventSnapshot.exists()) {
            setEventData({ id: eventSnapshot.id, ...eventSnapshot.data() });
          } else {
            setError('Event not found');
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchEvent();
    }
  }, [id]);

  if (loading) return <p className="text-gray-300">Loading event...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-24 max-w-4xl bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold pb-5">
        {eventData.eventname} <span className="text-cyan-400">Tournament</span>
      </h1>
      <div className="flex justify-between w-full text-gray-400">
        <p>{eventData.address}</p>
        <Link href={'/events'}>
          <button className="rounded-full border border-gray-400 bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white transition px-4 py-2">
            Back
          </button>
        </Link>
      </div>
      <hr className="border-b border-gray-600 mt-5 w-full" />

      <div className="flex flex-col items-center w-full mt-10">
        <img
          src={eventData.imageUrl}
          alt={eventData.eventname}
          className="w-2/3 rounded-lg shadow-md border-2 border-gray-600"
        />
      </div>

      <div className="flex gap-6 mt-10">
        <aside className="bg-black text-white p-6 rounded-lg w-1/4 max-w-xs font-mono shadow-lg border border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <p className="text-sm">bash</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-2xl">
              {new Date(eventData.date).toLocaleString()} - 12:00 AM
            </h2>
            <p className="mt-2 text-sm text-gray-500">Available slots: {eventData.availableSlots}</p>
            <div className="mt-6">
              <p>
                <span className="text-4xl font-light tracking-tight text-white">
                  Rs.{eventData.entryFee}
                </span>
                <span className="text-base font-medium text-gray-500"> /head </span>
              </p>
            </div>
          </div>
          <div className="flex px-6 pb-8 sm:px-8">
            <Link href="/book">
              <p className="flex items-center justify-center w-full px-6 py-2 text-center text-white bg-cyan-500 rounded-full hover:bg-cyan-400 transition">
                Book Now
              </p>
            </Link>
          </div>
        </aside>

        <div className="w-3/5 h-auto mt-36 text-gray-300 p-6 bg-gray-700 rounded-lg shadow-md">
          <p className="font-bold">{eventData.description}</p>
        </div>
      </div>

      <div className="flex flex-col items-start mt-10 text-gray-400">
        <p><strong>Category:</strong> {eventData.category}</p>
        <p><strong>Created At:</strong> {new Date(eventData.createdAt).toLocaleString()}</p>
        <p><strong>Created By:</strong> {eventData.createdBy}</p>
      </div>
    </div>
  );
};

export default EventDetails;
