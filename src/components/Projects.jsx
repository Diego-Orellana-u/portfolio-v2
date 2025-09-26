import IndProject from "./IndProject";
import { proyectsData } from "../data/proyectsData";

export default function Projects() {
  return (
    <section id="projects" className="bg-black-bg ">
      <h2 className="text-secondary-600 text-transparent projects-heading">
        RECENT PROJECTS
      </h2>
      {proyectsData.map((proyect) => (
        <IndProject key={proyect[10]} proyectInfo={proyect} />
      ))}
    </section>
  );
}
