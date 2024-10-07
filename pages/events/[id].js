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

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="page-background">
      <style jsx>{`
        .page-background {
          background-color: black; /* Set the entire page background to black */
          color: white; /* Default text color to white */
          min-height: 100vh; /* Full height of the viewport */
          display: flex;
          flex-direction: column;
          align-items: center; /* Center items horizontally */
          padding: 2rem; /* Add some padding */
        }
        .event-details {
          margin-top: 2rem; /* Margin from the top */
          font-family: 'Arial', sans-serif; /* Change font */
          width: 100%; /* Full width */
          max-width: 800px; /* Maximum width for better readability */
        }
        .title {
          font-weight: bold;
          font-size: 3rem; /* text-5xl */
          padding-bottom: 1.25rem; /* pb-5 */
        }
        .tournament {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .header {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .button {
          border-radius: 9999px; /* rounded-full */
          border: 1px solid white; /* Change border to white */
          background: transparent; /* bg-transparent */
          color: white; /* Change button text color to white */
          transition: background 0.3s, color 0.3s;
        }
        .button:hover {
          background: white; /* Change hover background to white */
          color: black; /* Change hover text color to black */
        }
        .separator {
          border-bottom: 1px solid white; /* border-b */
          font-weight: bold; /* font-bold */
          margin: 2.5rem 0; /* mt-10 */
        }
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 2.5rem auto; /* mt-10 */
        }
        .event-image {
          width: 66.67%; /* w-2/3 */
          margin-top: 2.5rem; /* mt-10 */
          border-radius: 1rem; /* rounded-2xl */
          animation: animate-u; /* animate-u */
        }
        .details-container {
          display: flex;
          gap: 0.75rem; /* gap-3 */
        }
        .event-info {
          background: rgba(255, 255, 255, 0.1); /* Semi-transparent white background */
          border-radius: 1.5rem; /* rounded-3xl */
          width: 100%; /* Full width */
          margin-top: 1rem; /* mt-28 */
        }
        .event-info-header {
          padding: 2rem; /* px-6 py-8 */
        }
        .event-info-content {
          display: grid;
          align-items: center;
          justify-items: center;
          width: 50%; /* w-1/2 */
          grid-template-columns: repeat(1, 1fr); /* grid-cols-1 */
          text-align: left; /* text-left */
        }
        .event-info-title {
          font-size: 1.5rem; /* Increased font size */
          font-weight: 700; /* Font bold */
          letter-spacing: -0.05rem; /* tracking-tighter */
          color: #d1d5db; /* text-gray-300 */
        }
        .event-info-date {
          margin-top: 0.5rem; /* mt-2 */
          font-size: 1rem; /* Increased font size */
          color: #e5e7eb; /* text-gray-200 */
        }
        .event-price {
          margin-top: 1.5rem; /* mt-6 */
        }
        .price {
          font-size: 3rem; /* text-5xl */
          font-weight: 300; /* font-light */
          color: #06b6d4; /* Changed price color */
        }
        .price-per-head {
          font-size: 1rem; /* text-base */
          font-weight: 500; /* font-medium */
          color: #e5e7eb; /* text-gray-200 */
        }
        .book-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%; /* w-full */
          padding: 0.625rem 1.5rem; /* px-6 py-2.5 */
          text-align: center;
          color: black; /* Change button text color to black */
          background: #06b6d4; /* Change background color */
          border: 2px solid #06b6d4; /* Change border color */
          border-radius: 9999px; /* rounded-full */
          transition: background 0.3s, color 0.3s;
        }
        .book-button:hover {
          background: transparent; /* bg-transparent */
          border-color: white; /* Change border color to white */
          color: white; /* Change text color to white */
        }
        .description {
          width: 100%; /* Full width */
          height: auto; /* Auto height */
          margin-top: 2rem; /* mt-36 */
          font-weight: bold; /* font-bold */
          color: #d1d5db; /* text-gray-300 */
        }
        .category-info {
          display: flex;
          flex-direction: column;
          margin-top: 2.5rem; /* mt-10 */
          color: #e5e7eb; /* text-gray-200 */
        }
      `}</style>

      <div className="event-details">
        <p className="title">
          {eventData.eventname} <span className="tournament">Tournament</span>
        </p>
        <div className="header">
          <p>{eventData.address}</p>
          <Link href={'/events'}>
            <button className="button">Back</button>
          </Link>
        </div>
        <hr className="separator" />

        <div className="image-container">
          <img src={eventData.imageUrl} alt={eventData.eventname} className="event-image" />
        </div>

        <div className="details-container">
          <div className="event-info">
            <div className="event-info-header">
              <div className="event-info-content">
                <div>
                  <h2 className="event-info-title">
                    {new Date(eventData.date).toLocaleString()} - 12.00 AM
                  </h2>
                  <p className="event-info-date">Available slots: {eventData.availableSlots}</p>
                </div>
                <div className="event-price">
                  <p>
                    <span className="price">Rs.{eventData.entryFee}</span>
                    <span className="price-per-head"> /head </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
              <Link href="/book">
                <p className="book-button">Book Now</p>
              </Link>
            </div>
          </div>

          <div className="description">
            {eventData.description}
          </div>
        </div>

        <div className="category-info">
          <p><strong>Category:</strong> {eventData.category}</p>
          <p><strong>Created At:</strong> {new Date(eventData.createdAt).toLocaleString()}</p>
          <p><strong>Created By:</strong> {eventData.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
