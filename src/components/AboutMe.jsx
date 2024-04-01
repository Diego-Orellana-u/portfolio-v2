import { useId } from 'react';
import SkillRow from './SkillRow';
import graybg from '../assets/logos/gray-bg.png';
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
    <section className="px-[1.4rem]">
      <h2 className="text-black-body-font heading-1">ABOUT ME</h2>
      <div className="flex flex-col gap-7">
        <img src={graybg} className="h-[20rem] object-cover rounded-md" />
        <div className="flex flex-col gap-4 text-body-1 mb-12">
          <h3 className="text-heading-3 font-semibold w-64">
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

      <div className="flex flex-col gap-7">
        <img src={graybg} className="h-[20rem] object-cover rounded-md" />
        <div>
          <h3 className="text-heading-3 font-semibold w-64 mb-7">My Skills</h3>
          <div className="flex flex-col gap-[4.5rem]">
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
        </div>
      </div>
    </section>
  );
}
