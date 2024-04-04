import { useId } from 'react';
import IndProject from './IndProject';

const proyects = [
  [
    '/img/testimg.webp',
    'PROJECT NAME 1',
    'DESIGN • FRONTEND DEVELOPER',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
    ['JavaScript', 'CSS', 'React', 'TailwindCSS'],
    '01.',
  ],
  [
    '/img/testimg.webp',
    'PROJECT NAME 1',
    'DESIGN • FRONTEND DEVELOPER',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
    ['JavaScript', 'CSS', 'React', 'TailwindCSS'],
    '01.',
  ],
  [
    '/img/testimg.webp',
    'PROJECT NAME 1',
    'DESIGN • FRONTEND DEVELOPER',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
    ['JavaScript', 'CSS', 'React', 'TailwindCSS'],
    '01.',
  ],
];

export default function Projects() {
  const proyectId = useId();
  return (
    <section id="projects" className="bg-black-bg rounded-t-2xl">
      <h2 className="text-secondary-600 heading-1">RECENT PROJECTS</h2>
      {proyects.map((proyect, idx) => (
        <IndProject key={`${proyectId} - ${idx}`} proyectInfo={proyect} />
      ))}
    </section>
  );
}
