import gsap from 'gsap';
import { useLayoutEffect } from 'react';

export default function Menu({ active }) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    if (active) {
      gsap.set('.menu-container', {
        y: '-100vh',
        duration: 0,
        ease: 'power3.inOut',
      });

      gsap.set('body', { delay: 0.6, overflow: 'hidden' });

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
        '-=0.4'
      );
    }
  }, [active]);

  return (
    <div>
      <div className="menu-blocks">
        <div className="menu-block block-m-1"></div>
        <div className="menu-block block-m-2"></div>
        <div className="menu-block block-m-3"></div>
        <div className="menu-block block-m-4"></div>
        <div className="menu-block block-m-5"></div>
        <div className="menu-block block-m-6"></div>
      </div>
      <div
        className="menu-container"
        style={{ top: active ? '100vh' : '-100vh' }}
      >
        <div className="menu-links text-white-body-font">
          <a href="#" className="rolling-text link">
            <div className="blockm">
              <span className="letter">H</span>
              <span className="letter">O</span>
              <span className="letter">M</span>
              <span className="letter">E</span>
            </div>
            <div className="blockm">
              <span className="letter">H</span>
              <span className="letter">O</span>
              <span className="letter">M</span>
              <span className="letter">E</span>
            </div>
          </a>
          <a href="#" className="rolling-text link">
            <div className="blockm">
              <span className="letter">P</span>
              <span className="letter">R</span>
              <span className="letter">O</span>
              <span className="letter">J</span>
              <span className="letter">E</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
              <span className="letter">S</span>
            </div>
            <div className="blockm">
              <span className="letter">P</span>
              <span className="letter">R</span>
              <span className="letter">O</span>
              <span className="letter">J</span>
              <span className="letter">E</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
              <span className="letter">S</span>
            </div>
          </a>
          <a href="#" className="rolling-text link">
            <div className="blockm">
              <span className="letter">A</span>
              <span className="letter">B</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter">T</span>
            </div>
            <div className="blockm">
              <span className="letter">A</span>
              <span className="letter">B</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter">T</span>
            </div>
          </a>
          <a href="#" className="rolling-text link">
            <div className="blockm">
              <span className="letter">C</span>
              <span className="letter">O</span>
              <span className="letter">N</span>
              <span className="letter">T</span>
              <span className="letter">A</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
            </div>
            <div className="blockm">
              <span className="letter">C</span>
              <span className="letter">O</span>
              <span className="letter">N</span>
              <span className="letter">T</span>
              <span className="letter">A</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
