

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props} // ✅ spreads type, onClick, disabled, etc.
      className={`bg-coral text-white px-6 py-3 rounded-md font-semibold hover:bg-red-500 transition ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
