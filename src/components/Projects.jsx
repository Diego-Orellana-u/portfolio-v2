import { useId } from 'react';
import IndProject from './IndProject';
import { proyectsData } from '../data/proyectsData';

export default function Projects() {
  const proyectId = useId();
  return (
    <section id="projects" className="bg-black-bg ">
      <h2 className="text-secondary-600 text-transparent projects-heading">
        RECENT PROJECTS
      </h2>
      {proyectsData.map((proyect, idx) => (
        <IndProject key={`${proyectId} - ${idx}`} proyectInfo={proyect} />
      ))}
    </section>
  );
}
