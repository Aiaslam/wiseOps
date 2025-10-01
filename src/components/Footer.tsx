import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101F4B] text-lightgray py-8 px-4 text-center">
      <p className="mb-4">© 2025 Your Company. All rights reserved.</p>
      <div className="flex justify-center gap-4 mb-4">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <p>Follow us on social media</p>
    </footer>
  );
};

export default Footer;
