import IndProject from './IndProject';

const proyects = [
  [
    '/img/testimg.webp',
    'PROJECT NAME 1',
    'ROLES?',
    'DESCRIPTION',
    'TECHNOLOGIES',
    'NUMBER',
  ],
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black-bg rounded-t-2xl">
      <h2 className="text-secondary-600 heading-1">RECENT PROJECTS</h2>
      <IndProject />
      <IndProject />
      <IndProject />
    </section>
  );
}
