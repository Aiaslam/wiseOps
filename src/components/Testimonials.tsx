import React from "react";

const testimonials = [
  { name: "John Doe", company: "ABC Corp", text: "Amazing service and support!", photo: "https://via.placeholder.com/80" },
  { name: "Jane Smith", company: "XYZ Ltd", text: "Transformed our business process.", photo: "https://via.placeholder.com/80" },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-lightgray text-center px-4">
      <h2 className="text-3xl font-heading font-bold mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4"/>
            <p className="mb-4">"{t.text}"</p>
            <h4 className="font-semibold">{t.name}</h4>
            <span className="text-sm text-gray-500">{t.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;



// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";

// const testimonials = [
//   { name: "John Doe", company: "ABC Corp", text: "Amazing service!", photo: "https://via.placeholder.com/80" },
//   { name: "Jane Smith", company: "XYZ Ltd", text: "Transformed our business process.", photo: "https://via.placeholder.com/80" },
//   { name: "Alice Johnson", company: "TechCo", text: "Highly recommend their solutions.", photo: "https://via.placeholder.com/80" },
// ];

// const Testimonials: React.FC = () => {
//   return (
//     <section className="py-20 bg-lightgray text-center px-4">
//       <h2 className="text-3xl font-heading font-bold mb-12">What Our Clients Say</h2>
//       <Swiper
//         modules={[Pagination, Navigation]}
//         spaceBetween={50}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         loop={true}
//       >
//         {testimonials.map((t, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
//               <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4"/>
//               <p className="mb-4">"{t.text}"</p>
//               <h4 className="font-semibold">{t.name}</h4>
//               <span className="text-sm text-gray-500">{t.company}</span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonials;
