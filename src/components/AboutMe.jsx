import SkillRow from "./SkillRow";
import me2 from "/img/me2.webp";
import me3 from "/img/me3.webp";
import nextLogo from "../assets/logos/nextjs.png";
import reactLogo from "../assets/logos/react-logo.png";
import TS from "../assets/logos/TS-logo.png";
import liquidLogo from "../assets/logos/liquid-logo.png";
import mongodbLogo from "../assets/logos/mongodb-logo.png";
import djangoLogo from "../assets/logos/django.png";
import reduxLogo from "../assets/logos/redux-logo.png";
import pythonLogo from "../assets/logos/python.png";
import tailwindLogo from "../assets/logos/tailwind-logo.png";
import gitLogo from "../assets/logos/git-logo.png";
import cvdiego from "/cv-diego.pdf";

let skills = [
  [TS, "TypeScript", nextLogo, "Next.JS", 12314],
  [pythonLogo, "Python", reactLogo, "REACT", 32341],
  [djangoLogo, "Django", tailwindLogo, "TAILWINDCSS", 34313],
  // [routerLogo, "REACT-ROUTER", nodeLogo, "NODE.JS", 87964],
  [mongodbLogo, "MONGODB", liquidLogo, "LIQUID", 58584],
  [reduxLogo, "REDUX", gitLogo, "GIT/GITHUB", 94921],
];

export default function AboutMe() {
  return (
    <section id="about" className="px-[1.4rem] min-[1024px]:px-[6rem] pb-16">
      <h2 className="text-secondary-900 heading-1">ABOUT ME</h2>
      <div className="flex flex-col gap-7 min-[1024px]:gap-16 min-[728px]:flex-row-reverse min-[768px]:pb-8">
        <div className="min-[728px]:flex-1">
          <img
            src={me2}
            className="w-full max-w-full h-auto object-cover rounded-md max-h-[85vh]"
            alt="An image about me"
          />
        </div>
        <div className="pt-6 flex flex-col gap-6 min-[1024px]:gap-8 min-[1536px]:gap-12 text-body-1 mb-12 min-[728px]:flex-1 min-[1536px]:text-3xl">
          <h3 className="text-heading-3 text-black-body-font font-semibold w-64 min-[728px]:w-auto min-[1024px]:text-[4rem] min-[1536px]:text-[5rem] leading-[4.5rem]">
            Who am I?
          </h3>
          <p className="text-black-body-font">
            I am a full-stack software developer and UI/UX designer based in
            Santiago, Chile, with more than 2 years of experience. My core
            values are: discipline, hard work, integrity and personal growth.
          </p>
          <p className="text-black-body-font">
            I specialize in crafting blazingly fast and elegant applications,
            finding the right balance between usability and design. I have
            experience leading teams and accomplishing objectives in a fast and
            creative way.
          </p>
          <p className="text-black-body-font">
            When I am not creating amazing projects, I like to exercise, read
            fantasy/personal development books, play the guitar, or learn new
            things on any topic!
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 min-[1024px]:gap-16 pb-10 pt-14 min-[1284px]:pt-20 min-[728px]:flex-row">
        <div className="min-[728px]:flex-1">
          <img
            src={me3}
            className="w-screen max-w-full h-auto object-cover rounded-md max-h-[1000px]"
            alt="An image of me"
          />
        </div>
        <div id="skills" className="min-[728px]:flex-1 text-body-1 pt-6 ">
          <h3 className="text-heading-3 text-black-body-font font-semibold mb-7 min-[1024px]:text-[4rem] min-[1536px]:text-[5rem] leading-[4.5rem] min-[1024px]:mb-16">
            My Skills
          </h3>
          <div className="flex flex-col gap-[3.5rem] pb-10 min-[1024px]:mb-12">
            {skills.map((row) => (
              <SkillRow
                logo1={row[0]}
                logo2={row[2]}
                name1={row[1]}
                name2={row[3]}
                key={row[4]}
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
