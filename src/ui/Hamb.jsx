import gsap from 'gsap';
import { Tween } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
export default function Hamb({ isAnimating, setIsAnimating }) {
  const [activeMenu, setActiveMenu] = useState(false);

  useGSAP(() => {
    if (!activeMenu && isAnimating) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          setActiveMenu(true);
        },
      });

      gsap.set('body', { delay: 0.6, overflow: 'hidden' });

      gsap.set('.menu-container', {
        top: '0vh',
        duration: 0,
        ease: 'power3.inOut',
      });

      Tween.to('.menu-container', {
        opacity: 1,
        delay: 1,
        duration: 0.4,
        ease: 'power3.inOut',
      });

      tl.to('.menu-block', {
        y: '-100vh',
        duration: 0.5,
        stagger: -0.1,
        ease: 'power3.inOut',
      });
    }

    if (activeMenu && isAnimating) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          setActiveMenu(false);
        },
      });

      gsap.set('body', { overflow: '' });

      tl.to('.menu-container', {
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      });

      tl.to(
        '.menu-block',
        {
          y: '0',
          duration: 0.5,
          stagger: -0.1,
          ease: 'power3.inOut',
        },
        '-=.7'
      );

      tl.to('.menu-container', {
        top: '-100vh',
        duration: 0,
        ease: 'power3.inOut',
      });
    }
  }, [isAnimating]);

  return (
    <div
      onClick={() => {
        setIsAnimating(true);
      }}
      className="hamb fixed top-8 right-8 min-[1024px]:right-10 rounded-full bg-secondary-800 h-16 w-16 min-[1024px]:h-24 min-[1024px]:w-24 z-[9999] flex justify-center items-center cursor-pointer"
    >
      <svg
        className="w-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F2F2F2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 8l16 0" />
        <path d="M4 16l16 0" />
      </svg>
    </div>
  );
}
