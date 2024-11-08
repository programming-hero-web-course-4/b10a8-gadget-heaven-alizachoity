import React from 'react';
import Group from '../assets/Group.png';
const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
      <img src={Group} alt="" className="mx-12 my-4" />
        <h2 className="text-lg font-bold">{message}</h2>        
        <button onClick={onClose} className="mt-4 bg-white w-full  rounded-xl text-black border border-x-2 px-8 py-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;