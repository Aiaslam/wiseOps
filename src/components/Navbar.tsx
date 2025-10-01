import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20">
  <div className="max-w-6xl mx-auto px-4">
    <nav className="bg-navy fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-white font-heading text-2xl font-bold">WiseOps</div>
        <div className="hidden md:flex space-x-6">
          {["services", "whyus", "testimonials", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-white hover:text-coral cursor-pointer font-semibold"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-navy flex flex-col items-center py-4 space-y-4">
          {["services", "whyus", "testimonials", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-white hover:text-coral cursor-pointer font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
     </div>
</section>
  );
};

export default Navbar;
