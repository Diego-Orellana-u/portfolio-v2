import { useId } from 'react';
import WorkflowPoint from '../ui/WorkflowPoint';

const workflowArr = [
  ['01.', 'Recopilation of ideas and requirements'],
  ['02.', 'Recopilation of ideas and requirements'],
  ['03.', 'Recopilation of ideas and requirements'],
  ['04.', 'Recopilation of ideas and requirements'],
  ['05.', 'Recopilation of ideas and requirements'],
  ['06.', 'Recopilation of ideas and requirements'],
];

export default function Workflow() {
  const pointId = useId();
  return (
    <section className="bg-black-bg py-8 px-[1.4rem] min-[1024px]:px-[6rem] min-[615px]:py-16">
      <h2 className="text-heading-3 font-semibold text-white-body-font pb-[2rem] min-[1024px]:text-[4rem] min-[1536px]:text-[5rem] s">
        My Workflow
      </h2>
      <div className="flex justify-between min-[580px]:min-h-[400px] min-[698px]:min-h-[550px]">
        <div className="flex w-[80%] min-[1220px]:w-[50%] justify-evenly">
          <div className="w-5 mr-6 h-full min-[425px]:mr-12 min-[615px]:mr-16 min-[425px]:py-14">
            <div className="w-18px h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[425px]:mr-12 min-[615px]:mr-16">
            <div className="w-18px h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[425px]:hidden min-[615px]:mr-16 min-[425px]:py-14">
            <div className="w-18px h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[615px]:hidden min-[615px]:mr-16">
            <div className="w-18px h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[615px]:hidden min-[425px]:py-14">
            <div className="w-18px h-full radial"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-between ">
          {workflowArr.map((point, idx) => (
            <WorkflowPoint
              key={`${pointId} - ${idx}`}
              number={point[0]}
              point={point[1]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
