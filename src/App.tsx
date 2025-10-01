// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import React from "react";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Testimonials from "./components/Testimonials";
// import CTASection from "./components/CTASection";
// import Footer from "./components/Footer";

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <Hero />
//       <Services />
//       <WhyChooseUs />
//       <Testimonials />
//       <CTASection />
//       <Footer />
//     </div>
//   );
// };

// export default App;





import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
// import { Helmet, HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  return (
    <div className="App w-full">
      {/* <HelmetProvider> */}
        {/* <Helmet> */}
          <title>Your Company | Digital Solutions</title>
          <meta name="description" content="Empowering businesses with seamless digital solutions, workflow automation, and growth strategies." />
          <meta name="keywords" content="Digital Solutions, Business Growth, Workflow Automation, Marketing, Analytics" />
        {/* </Helmet> */}
        {/* <div className="min-h-screen max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12"> */}

        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        {/* <Testimonials /> */}
        <CTASection />
        <Footer />
        {/* </div> */}
      {/* </HelmetProvider> */}
    </div>
  );
};

export default App;

