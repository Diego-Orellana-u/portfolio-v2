export default function Workflow() {
  return (
    <section className="bg-black-bg py-8 px-[1.4rem] min-[615px]:py-16">
      <h2 className="text-heading-3 font-semibold text-white-body-font pb-[2rem]">
        My Workflow
      </h2>
      <div className="flex justify-between min-[580px]:h-[400px] min-[698px]:h-[550px]">
        <div className="flex">
          <div className="w-5 mr-6 h-full min-[425px]:mr-12 min-[615px]:mr-16 min-[425px]:py-10">
            <div className="w-18px h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[425px]:mr-12 min-[615px]:mr-16">
            <div className="w-18px h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[425px]:hidden min-[615px]:mr-16 min-[425px]:py-10">
            <div className="w-18px h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[615px]:hidden min-[615px]:mr-16">
            <div className="w-18px h-full radial"></div>
          </div>
          <div className="w-5 mr-2 h-full min-[390px]:mr-14 min-[570px]:mr-12 max-[615px]:hidden min-[425px]:py-10">
            <div className="w-18px h-full radial"></div>
          </div>
        </div>

        <div className="text-white-body-font flex flex-col gap-4 justify-between ">
          <div className="flex items-start">
            <span className="font-bold text-[1.3rem] text-big-nums tracking-[0.12em] w-[34px]">
              01.
            </span>
            <p className="text-body-1 font-light pt-[3px] pl-3">
              Recopilation of ideas and requirements
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-bold text-[1.3rem] text-big-nums w-[34px]">
              02.
            </span>
            <p className="text-body-1 font-light pt-[3px] pl-3">
              Recopilation of ideas and requirements
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-bold text-[1.3rem] text-big-nums w-[34px]">
              03.
            </span>
            <p className="text-body-1 font-light pt-[3px] pl-3">
              Recopilation of ideas and requirements
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-bold text-[1.3rem] text-big-nums w-[34px]">
              04.
            </span>
            <p className="text-body-1 font-light pt-[3px] pl-3">
              Recopilation of ideas and requirements
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-bold text-[1.3rem] text-big-nums w-[34px]">
              05.
            </span>
            <p className="text-body-1 font-light pt-[3px] pl-3">
              Recopilation of ideas and requirements
            </p>
          </div>

          <div className="flex items-start">
            <span className="font-bold text-[1.3rem] text-big-nums w-[34px]">
              06.
            </span>
            <p className="text-body-1 font-light pt-[3px] pl-3">
              Recopilation of ideas and requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
