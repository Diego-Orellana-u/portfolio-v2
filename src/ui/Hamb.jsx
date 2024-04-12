import gsap from 'gsap';
import { useLayoutEffect } from 'react';
export default function Hamb({
  active,
  setActive,
  isAnimating,
  setIsAnimating,
}) {
  useLayoutEffect(() => {
    if (!active && isAnimating) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          setActive(true);
        },
      });

      gsap.set('body', { delay: 0.6, overflow: 'hidden' });

      gsap.set('.menu-container', {
        top: '0vh',
        duration: 0,
        ease: 'power3.inOut',
      });

      tl.to('.menu-block', {
        y: '-100vh',
        duration: 0.4,
        stagger: -0.1,
        ease: 'power3.inOut',
      });

      tl.to(
        '.menu-container',
        {
          opacity: 100,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        '-=.42'
      );
    }

    if (active && isAnimating) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          setActive(false);
        },
      });

      gsap.set('body', { overflow: '' });

      tl.to('.menu-block', {
        y: '0',
        duration: 0.4,
        stagger: -0.1,
        ease: 'power3.inOut',
      });

      tl.to(
        '.menu-container',
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power3.inOut',
        },
        '-=1.4'
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
      className="hamb fixed top-16 right-6 min-[1024px]:right-10 rounded-full bg-secondary-800 h-16 w-16 min-[1024px]:h-24 min-[1024px]:w-24 z-[9999] flex justify-center items-center cursor-pointer"
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
