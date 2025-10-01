// import React from "react";
// import Button from "./Button";

// const servicesData = [
//   { title: "Digital Marketing", description: "Grow your brand with targeted campaigns.", icon: "📈" },
//   { title: "Workflow Automation", description: "Automate processes to save time and costs.", icon: "🤖" },
//   { title: "Analytics & Insights", description: "Make data-driven business decisions.", icon: "📊" },
//   { title: "App & Web Development", description: "Custom solutions for web and mobile.", icon: "💻" },
// ];

// const Services: React.FC = () => {
//   return (
//     <section id="services" className="py-20 bg-lightgray text-center">
//       <h2 className="text-3xl font-heading font-bold mb-4">Our Expertise</h2>
//       <p className="text-lg mb-12 max-w-2xl mx-auto">We provide tailored solutions to help your business thrive in the digital era.</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
//         {servicesData.map((service) => (
//           <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition">
//             <div className="text-5xl mb-4">{service.icon}</div>
//             <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
//             <p className="mb-4">{service.description}</p>
//             <Button className="text-sm px-4 py-2">Learn More</Button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { TrendingUp,  BarChart2, Laptop } from "lucide-react";

const servicesData = [
  {
    title: "Digital Marketing",
    description: "Grow your brand with targeted campaigns.",
    icon: <TrendingUp size={48} className="text-purple-600" />,
    details: "We help businesses grow online with SEO, social media campaigns, and paid ads that deliver measurable results."
  },
//   {
//     title: "Workflow Automation",
//     description: "Automate processes to save time and costs.",
//     icon: <Robot size={48} className="text-purple-600" />,
//     details: "Streamline your business processes using automation tools that reduce errors and boost efficiency."
//   },
  {
    title: "Analytics & Insights",
    description: "Make data-driven business decisions.",
    icon: <BarChart2 size={48} className="text-purple-600" />,
    details: "Gain deep insights from your business data to optimize decisions and strategies."
  },
  {
    title: "App & Web Development",
    description: "Custom solutions for web and mobile.",
    icon: <Laptop size={48} className="text-purple-600" />,
    details: "We build scalable web and mobile applications tailored to your business requirements."
  },
];


const Services: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-20 bg-lightgray text-center">
      <h2 className="text-3xl font-heading font-bold mb-4">Our Expertise</h2>
      <p className="text-lg mb-12 max-w-2xl mx-auto">We provide tailored solutions to help your business thrive in the digital era.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-[1200px] mx-auto">
        {servicesData.map((service) => (
   <motion.div   
            key={service.title}
            className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition cursor-pointer"
            onClick={() => {
              setSelectedService(service);
              setModalOpen(true);
            }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
            <p className="mb-4">{service.description}</p>
            <Button className="text-sm px-4 py-2">Learn More</Button>
</motion.div>
          
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={selectedService?.title}>
        <p>{selectedService?.details}</p>
      </Modal>
    </section>
  );
};

export default Services;
