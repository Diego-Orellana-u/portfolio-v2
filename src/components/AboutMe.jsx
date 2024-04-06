import { useId } from 'react';
import SkillRow from './SkillRow';
import me from '/img/me.jpeg';
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
import cvdiego from '/cv-diego.pdf';

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
    <section id="about" className="px-[1.4rem] min-[1024px]:px-[6rem] pb-16">
      <h2 className="text-secondary-600 heading-1">ABOUT ME</h2>
      <div className="flex flex-col gap-7 min-[1024px]:gap-16 min-[728px]:flex-row-reverse min-[768px]:pb-8">
        <div className="min-[728px]:flex-1">
          <img
            src={me}
            className="w-full max-w-full h-auto object-cover rounded-md max-h-[800px]"
            alt="An image about me"
          />
        </div>
        <div className="pt-6 flex flex-col gap-6 min-[1024px]:gap-8 min-[1536px]:gap-12 text-body-1 mb-12 min-[728px]:flex-1 min-[1536px]:text-3xl">
          <h3 className="text-heading-3 font-semibold w-64 min-[728px]:w-auto min-[1024px]:text-[4rem] min-[1536px]:text-[5rem] leading-[4.5rem]">
            Who am I?
          </h3>
          <p>
            I am a full-stack software developer and UI/UX designer based in
            Santiago, Chile, with more than 2 years of experience. My core
            values are: discipline, hard work, integrity and personal growth.
          </p>
          <p>
            I specialize in crafting blazingly fast and elegant applications,
            finding the right balance between usability and design. I have
            experience leading teams and accomplishing objectives in a fast and
            creative way.
          </p>
          <p>
            When I am not creating amazing projects, I like to exercise, read
            fantasy/personal development books, play the guitar, or learn new
            things on any topic!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 min-[1024px]:gap-16 pb-10 pt-14 min-[1284px]:pt-20 min-[728px]:flex-row">
        <div className="min-[728px]:flex-1">
          <img
            src={me}
            className="w-screen max-w-full h-auto object-cover rounded-md max-h-[1000px]"
            alt="An image of me"
          />
        </div>
        <div id="skills" className="min-[728px]:flex-1 text-body-1 pt-6 ">
          <h3 className="text-heading-3 font-semibold mb-7 min-[1024px]:text-[4rem] min-[1536px]:text-[5rem] leading-[4.5rem] min-[1024px]:mb-10">
            My Skills
          </h3>
          <div className="flex flex-col gap-[3.5rem] pb-10">
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
          <a
            href={cvdiego}
            target="_blank"
            className="bg-buttons-bg text-white-body-font py-3 px-5 rounded-3xl font-general font-light min-[1536px]:text-2xl"
          >
            Get my resume
          </a>
        </div>
      </div>
    </section>
  );
}
