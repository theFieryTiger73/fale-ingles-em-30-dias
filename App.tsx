
import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WhatYouGet from './components/WhatYouGet';
import Testimonials from './components/Testimonials';
import AboutInstructor from './components/AboutInstructor';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-brand-dark font-sans">
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhatYouGet />
        <AboutInstructor />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
