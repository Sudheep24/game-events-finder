import React from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  onClose: (option: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const router = useRouter();

  const handleEventClick = (option: string) => {
    router.push('/create');
  };
  const handlePlaymatesClick = (option: string) => {
    router.push('/playcreate');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute w-1/2 md:w-1/3 bg-white p-10 shadow-lg  z-50 rounded-3xl">
        <h2 className="text-xl font-bold mb-4 text-black">Choose Option</h2>
        <button className="block w-full py-2 mb-2 text-center bg-black rounded-full text-white  hover:bg-orange-600 " onClick={() => handlePlaymatesClick('playmates')}>Select Playmates</button>
        <button className="block w-full py-2 mb-2 text-center bg-black rounded-full text-white  hover:bg-orange-600" onClick={() => handleEventClick('events')}>Select Events</button>
        <button className="block w-full py-2 mb-2 text-center bg-black rounded-full text-white  hover:bg-orange-600" onClick={() => onClose('cancel')}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
