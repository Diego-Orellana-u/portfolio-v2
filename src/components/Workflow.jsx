import { useId } from 'react';
import WorkflowPoint from '../ui/WorkflowPoint';

const workflowArr = [
  ['01.', 'PROJECT ANALYSIS'],
  ['02.', 'ASK ABOUT DEADLINES AND CORE FEATURES'],
  ['03.', 'CREATION OF DESIGN PROTOTYPES'],
  ['04.', 'CODE. CODE. CODE.'],
  ['05.', 'OPTIMIZATION AND TESTING'],
  ['06.', 'DELIVER FINAL PRODUCT'],
];

export default function Workflow() {
  const pointId = useId();
  return (
    <section className="bg-black-bg py-8 px-[1.4rem] min-[1024px]:px-[6rem] min-[615px]:pt-24 min-[615px]:pb-32">
      <h2 className="text-heading-3 font-semibold text-white-body-font pb-[2rem] min-[1024px]:text-[4rem] min-[1536px]:text-[5rem] s">
        My Workflow
      </h2>
      <div className="flex justify-between min-[580px]:min-h-[400px] min-[698px]:min-h-[550px]">
        <div className="flex w-[80%] min-[1220px]:w-[50%] justify-evenly">
          <div className="w-5 mr-6 h-full min-[425px]:mr-12 min-[615px]:mr-16 min-[425px]:py-14">
            <div className="h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[425px]:mr-12 min-[615px]:mr-16">
            <div className="h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[425px]:hidden min-[615px]:mr-16 min-[425px]:py-14">
            <div className="h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[615px]:hidden min-[615px]:mr-16">
            <div className="h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[615px]:hidden min-[425px]:py-14">
            <div className="h-full radial"></div>
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
