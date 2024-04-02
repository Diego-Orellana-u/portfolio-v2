import { useId } from 'react';
import SkillRow from './SkillRow';
import aboutTest from '/img/about-test-img.webp';
import htmlLogo from '../assets/logos/html-logo.png';
import cssLogo from '../assets/logos/css-logo.png';
import jsLogo from '../assets/logos/javascript-logo.png';
import reactLogo from '../assets/logos/react-logo.png';
import jestLogo from '../assets/logos/jest-logo.png';
import liquidLogo from '../assets/logos/liquid-logo.png';
import mongodbLogo from '../assets/logos/mongodb-logo.png';
import nodeLogo from '../assets/logos/node-logo.png';
import routerLogo from '../assets/logos/react-router-logo.png';
import reduxLogo from '../assets/logos/redux-logo.png';
import tailwindLogo from '../assets/logos/tailwind-logo.png';
import gitLogo from '../assets/logos/git-logo.png';

let skills = [
  [htmlLogo, 'HTML', cssLogo, 'CSS'],
  [jsLogo, 'JAVASCRIPT', reactLogo, 'REACT'],
  [reduxLogo, 'REDUX', tailwindLogo, 'TAILWINDCSS'],
  [routerLogo, 'REACT-ROUTER', nodeLogo, 'NODE.JS'],
  [mongodbLogo, 'MONGODB', liquidLogo, 'LIQUID'],
  [jestLogo, 'JEST/TESTING', gitLogo, 'GIT/GITHUB'],
];

export default function AboutMe() {
  const skillId = useId();
  return (
    <section id="about" className="px-[1.4rem] min-[1024px]:px-[6rem]">
      <h2 className="text-black-body-font heading-1">ABOUT ME</h2>
      <div className="flex flex-col gap-7 min-[1024px]:gap-16 min-[728px]:flex-row-reverse min-[768px]:pb-8">
        <div className="min-[728px]:flex-1">
          <img
            src={aboutTest}
            className="w-full max-w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="pt-6 flex flex-col gap-6 min-[1024px]:gap-8 min-[1536px]:gap-12 text-body-1 mb-12 min-[728px]:flex-1 min-[1536px]:text-3xl">
          <h3 className="text-heading-3 font-semibold w-64 min-[728px]:w-auto min-[1024px]:text-[4rem] min-[1536px]:text-[5rem] leading-[4.5rem]">
            A brief intro, who am I?
          </h3>
          <p>
            I am an independent frontend developer, UI/UX designer and creator
            based in Melbourne, Australia.
          </p>
          <p>
            I specialize in crafting elevated, intuitive, and minimalistic
            designs for startups and small businesses to help them stand out in
            the digital landscape with a powerful impact.{' '}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 min-[1024px]:gap-16 pb-10 pt-14 min-[1284px]:pt-20 min-[728px]:flex-row">
        <div className="min-[728px]:flex-1">
          <img
            src={aboutTest}
            className="w-screen max-w-full h-auto object-cover rounded-md"
          />
        </div>
        <div id="skills" className="min-[728px]:flex-1 text-body-1 pt-6 ">
          <h3 className="text-heading-3 font-semibold mb-7 min-[1024px]:text-[4rem] min-[1536px]:text-[5rem] leading-[4.5rem] min-[1024px]:mb-16">
            My Skills
          </h3>
          <div className="flex flex-col gap-[4.5rem] pb-10">
            {skills.map((row, index) => (
              <SkillRow
                key={`${skillId} - ${index}`}
                logo1={row[0]}
                logo2={row[2]}
                name1={row[1]}
                name2={row[3]}
              />
            ))}
          </div>
          <button className="bg-buttons-bg text-white-body-font py-3 px-5 rounded-3xl font-general font-light min-[1536px]:text-2xl">
            Get my resume
          </button>
        </div>
      </div>
    </section>
  );
}
