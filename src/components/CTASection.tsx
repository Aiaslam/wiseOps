// import React from "react";
// import Button from "./Button";

// const CTASection: React.FC = () => {
//   return (
//     <section className="py-20 bg-navy text-white text-center px-4">
//       <h2 className="text-3xl font-heading font-bold mb-6">Ready to Transform Your Business?</h2>
//       <p className="mb-8">Contact us today and take the first step towards growth.</p>
//       <Button>Contact Us</Button>
//     </section>
//   );
// };

// export default CTASection;


// import React, { useState } from "react";
// import Button from "./Button";
// import ContactForm from "./ContactForm";

// const CTASection: React.FC = () => {
//   const [contactOpen, setContactOpen] = useState(false);

//   return (
//     <section id="contact" className="py-20 bg-navy text-white text-center px-4">
//       <h2 className="text-3xl font-heading font-bold mb-6">Ready to Transform Your Business?</h2>
//       <p className="mb-8">Contact us today and take the first step towards growth.</p>
//       <Button onClick={() => setContactOpen(true)}>Contact Us</Button>
//       <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
//     </section>
//   );
// };

// export default CTASection;




import React, { useState } from "react";
 import { motion } from "framer-motion";
import Button from "./Button";
import ContactForm from "./ContactForm";

const CTASection: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="contact" className="py-20 bg-navy text-white text-center px-4">
      <motion.h2
      
        className="text-3xl font-heading font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Ready to Transform Your Business?
      </motion.h2>
      <motion.p
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Contact us today and take the first step towards growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button onClick={() => setContactOpen(true)}>Contact Us</Button>
      </motion.div>
      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
};

export default CTASection;
