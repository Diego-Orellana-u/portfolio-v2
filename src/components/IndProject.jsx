import { useId } from 'react';
import arrowRight from '../assets/logos/arrowRight.svg';

export default function IndProject({ proyectInfo }) {
  const techId = useId();
  const paragraphId = useId();

  return (
    <div className="min-[1024px]:border-y-[1px] min-[1024px]:border-primary-lines/30 min-[1024px]:pb-[5rem] min-[1024px]:pt-[5rem] min-[1150px]:pb-[8rem] min-[1150px]:pt-[11.5rem]">
      <div className="flex flex-col gap-y-7 pb-14 min-[1024px]:pb-0 px-[1.4rem] min-[1024px]:px-[6rem] min-[1024px]:flex-row">
        <div className="flex-1 min-[1024px]:pt-[1.2rem] min-[1248px]:pt-[1.6rem]">
          <img
            src={proyectInfo[0]}
            className="w-full max-w-full h-auto object-cover min-[1024px]:hidden"
            alt="image of project"
          />

          <img
            src={proyectInfo[1]}
            className="w-full max-w-full h-auto object-cover max-[1023px]:hidden"
            alt="image of project"
          />
          <div className="flex justify-between text-secondary-800 pt-7 min-[1250px]:pt-10">
            <a
              href={proyectInfo[7]}
              target="_blank"
              className="flex items-center text-body-2 min-[768px]:text-body-1 min-[1250px]:text-[2.1rem]"
            >
              <img
                src={arrowRight}
                alt="icon of an arrow to the right"
                className="w-6 min-[768px]:w-8 min-[1250px]:w-12"
              />
              <span>Code</span>
            </a>
            <a
              href={proyectInfo[8]}
              target="_blank"
              className="flex items-center text-body-2 min-[768px]:text-body-1 min-[1250px]:text-[2.1rem]"
            >
              <img
                src={arrowRight}
                alt="icon of an arrow to the right"
                className="w-6 min-[768px]:w-8 min-[1250px]:w-12"
              />
              <span>Visit Project</span>
            </a>
            <a
              href={proyectInfo[9]}
              target="_blank"
              className="flex items-center text-body-2 min-[768px]:text-body-1 min-[1250px]:text-[2.1rem]"
            >
              <img
                src={arrowRight}
                alt="icon of an arrow to the right"
                className="w-6 min-[768px]:w-8 min-[1250px]:w-12"
              />
              <span>Readme</span>
            </a>
          </div>
        </div>

        <div className="text-white-body-font flex flex-col relative flex-1 min-[1024px]:grow-[1.3]">
          <div className="flex flex-wrap gap-4 pb-4 min-[1024px]:hidden">
            {proyectInfo[5].map((tech, idx) => (
              <div
                key={`${techId} - ${idx}`}
                className="border border-white px-4 py-[0.25rem] rounded-3xl text-sm"
              >
                <span>{tech} </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col z-10 gap-y-3 min-[1024px]:pl-14 min-[1124px]:pl-20 min-[1024px]:pb-5">
            <h3 className="text-heading-4 font-medium min-[1024px]:text-[3rem] min-[1248px]:text-[4rem] min-[1024px]:font-semibold">
              {proyectInfo[2]}
            </h3>
            <span className="font-thin min-[1536px]:text-2xl">
              {proyectInfo[3]}
            </span>
            <div className="flex flex-col gap-4 min-[768px]:gap-5">
              {proyectInfo[4].map((p, idx) => (
                <p
                  key={`${paragraphId} - ${idx}`}
                  className="text-body-1 min-[1536px]:text-3xl"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="pb-16 pt-5 max-[1023px]:hidden flex flex-wrap gap-4">
              {proyectInfo[5].map((tech, idx) => (
                <div
                  key={`${techId} - ${idx}`}
                  className="border border-white px-4 py-[0.25rem] rounded-3xl text-ml min-[1250px]:text-xl "
                >
                  <span>{tech} </span>
                </div>
              ))}
            </div>
          </div>
          <span
            className={`${
              proyectInfo[6] === '01.' && 'min-[1024px]:tracking-[0.08em]'
            } bottom-[-10rem] z-[1] min-[1150px]:bottom-[-14rem] flex w-full justify-end max-[1023px]:hidden min-[1024px]:text-[208px] min-[1150px]:text-[256px] text-accent-100/20 font-bold absolute`}
          >
            {proyectInfo[6]}
          </span>
        </div>
      </div>
    </div>
  );
}
