import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../firebase'; // Adjust the import based on your Firebase setup
import { doc, getDoc } from 'firebase/firestore';

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

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{eventData.eventname}</h1>
      <p>{eventData.date}</p>
      <img src={eventData.imageUrl} alt={eventData.eventname} />
      <p>{eventData.description}</p>
    </div>
  );
};

export default EventDetails;
