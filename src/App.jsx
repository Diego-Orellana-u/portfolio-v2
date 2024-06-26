import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Header from './ui/Header';
import gsap from 'gsap';
import Hamb from './ui/Hamb';
import Menu from './ui/Menu';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

export default function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [isAnimating, setIsAnimating] = useState(false);

  useGSAP(() => {
    gsap.to('.hamb', {
      scrollTrigger: {
        trigger: '.hamb',
        start: '400',
        onEnter: () => {
          gsap.to('.hamb', { scale: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to('.hamb', { scale: 0, duration: 0.3 });
        },
      },
    });
  }, []);

  return (
    <div className="bg-white-bg">
      <Menu setIsAnimating={setIsAnimating} />
      <Hamb isAnimating={isAnimating} setIsAnimating={setIsAnimating} />
      <Header />
      <Hero />
      <Projects />
      <AboutMe />
      <Workflow />
      <Contact />
    </div>
  );
}
