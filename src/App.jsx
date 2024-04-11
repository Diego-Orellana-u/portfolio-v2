import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';
// import Menu from './components/Menu';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Header from './ui/Header';
import gsap from 'gsap';
import Hamb from './ui/Hamb';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

export default function App() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.to('.hamb', {
      scrollTrigger: {
        trigger: '.hamb',
        start: '400',
        onEnter: () => {
          gsap.to('.hamb', { scale: 1 });
        },
        onLeaveBack: () => {
          gsap.to('.hamb', { scale: 0 });
        },
      },
    });
  }, []);

  return (
    <div className="bg-white-bg">
      {/* <Menu /> */}
      <Hamb />
      <Header />
      <Hero />
      <Projects />
      <AboutMe />
      <Workflow />
      <Contact />
    </div>
  );
}
