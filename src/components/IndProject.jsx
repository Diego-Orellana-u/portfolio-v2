import graybg from '../assets/logos/gray-bg.png';

export default function IndProject() {
  return (
    <div className="flex flex-col gap-y-7 pb-14">
      <img src={graybg} className="h-[15rem] object-cover" />

      <div className="text-white-body-font">
        <div className="pb-4">
          <div className="border border-white w-fit px-4 py-[0.25rem] rounded-3xl text-sm">
            <span>JavaScript</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h3 className="text-heading-4 font-medium">PROJECT NAME</h3>
          <span className="font-thin">DESIGN • FRONTEND DEVELOPER</span>
          <p className="text-body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
