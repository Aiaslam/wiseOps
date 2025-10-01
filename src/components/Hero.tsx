// import React from "react";
// import { Link } from "react-scroll";
// import Button from "./Button";

// const Hero: React.FC = () => {
//   return (
//     <section className="bg-navy text-white min-h-screen flex flex-col justify-center items-center px-4 text-center">
//       <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
//         Empowering Your Business with Seamless Digital Solutions
//       </h1>
//       <p className="text-lg md:text-2xl mb-8 font-sans">
//         Streamline operations, enhance customer engagement, and drive growth with our tailored services.
//       </p>
//       <Link to="services" smooth={true} duration={500}>
//         <Button>Get Started</Button>
//       </Link>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="bg-navy text-white min-h-screen flex flex-col justify-center items-center px-4 text-center py-20">
        <div className="max-w-6xl mx-auto px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-heading font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Empowering Your Business with Seamless Digital Solutions
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-8 font-sans"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Streamline operations, enhance customer engagement, and drive growth with our tailored services.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link to="services" smooth={true} duration={500}>
          <Button>Get Started</Button>
        </Link>
      </motion.div>
      </div>

    </section>
  );
};

export default Hero;

