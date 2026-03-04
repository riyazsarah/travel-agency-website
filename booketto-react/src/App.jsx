import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Destinations from './components/Destinations/Destinations';
import Packages from './components/Packages/Packages';
import WhyUs from './components/WhyUs/WhyUs';
import Testimonials from './components/Testimonials/Testimonials';
import Booking from './components/Booking/Booking';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import LoginModal from './components/LoginModal/LoginModal';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header>
        <Nav onLoginClick={() => setIsModalOpen(true)} />
      </header>
      <main id="main-content">
        <Hero />
        <Search />
        <Destinations />
        <Packages />
        <WhyUs />
        <Testimonials />
        <Booking />
        <Newsletter />
      </main>
      <Footer />
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default App;
