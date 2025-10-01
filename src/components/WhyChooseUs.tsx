// import React from "react";

// const points = [
//   { icon: "✅", text: "Proven track record with measurable results." },
//   { icon: "🎯", text: "Customized solutions tailored to your business needs." },
//   { icon: "🤝", text: "Dedicated support and transparent communication." },
// ];

// const WhyChooseUs: React.FC = () => {
//   return (
//     <section className="py-20 text-center px-4">
//       <h2 className="text-3xl font-heading font-bold mb-12">Why Partner with Us?</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {points.map((point, index) => (
//           <div key={index} className="p-6 bg-lightgray rounded-lg shadow hover:scale-105 transform transition">
//             <div className="text-5xl mb-4">{point.icon}</div>
//             <p className="font-sans text-lg">{point.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Handshake } from "lucide-react";

const points =  [
  { icon: <CheckCircle size={48} className="text-navy" />, text: "Proven track record with measurable results." },
  { icon: <Target size={48} className="text-navy" />, text: "Customized solutions tailored to your business needs." },
  { icon: <Handshake size={48} className="text-navy" />, text: "Dedicated support and transparent communication." },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 text-center px-4">
      <h2 className="text-3xl font-heading font-bold mb-12">Why Partner with Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {points.map((point, index) => (
          <motion.div
            key={index}
            // className="p-6 bg-lightgray rounded-lg shadow hover:scale-105 transform transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-navy to-coral text-white rounded-lg shadow-lg p-6 cursor-pointer hover:scale-105 transition transform"

          >
            <div className="text-5xl mb-4">{point.icon}</div>
            <p className="font-sans text-lg">{point.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
