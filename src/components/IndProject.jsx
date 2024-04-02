import testimg from '/img/testimg.webp';

export default function IndProject() {
  return (
    <div className="min-[1024px]:border-y-[1px] min-[1024px]:border-primary-lines/30 min-[1024px]:py-[5rem] min-[1150px]:py-[8rem]">
      <div className="flex flex-col gap-y-7 pb-14 min-[1024px]:pb-0 px-[1.4rem] min-[1024px]:px-[6rem] min-[1024px]:flex-row">
        <div>
          <img
            src={testimg}
            className="w-full max-w-full h-auto object-cover"
          />
        </div>

        <div className="text-white-body-font flex flex-col relative">
          <div className="pb-4 min-[1024px]:pl-14 min-[1124px]:pl-20 min-[1024px]:hidden">
            <div className="border border-white w-fit px-4 py-[0.25rem] rounded-3xl text-sm">
              <span>JavaScript</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 min-[1024px]:pl-14 min-[1124px]:pl-20 min-[1024px]:pb-5">
            <h3 className="text-heading-4 font-medium min-[1024px]:text-[4rem] min-[1024px]:font-semibold min-[1536px]:text-[4.5rem]">
              PROJECT NAME
            </h3>
            <span className="font-thin min-[1536px]:text-2xl">
              DESIGN • FRONTEND DEVELOPER
            </span>
            <p className="text-body-1 min-[1536px]:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="pb-4 max-[1023px]:hidden">
              <div className="border border-white w-fit px-4 py-[0.25rem] rounded-3xl text-ml min-[1250px]:text-xl ">
                <span>JavaScript</span>
              </div>
            </div>
          </div>
          <span className="bottom-[-14rem] flex w-full justify-end items-end max-[1023px]:hidden text-[256px] text-accent-100/20 font-bold absolute">
            01.
          </span>
        </div>
      </div>
    </div>
  );
}
