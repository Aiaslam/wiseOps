import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        {title && <h3 className="text-xl font-heading font-bold mb-4">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Modal;
