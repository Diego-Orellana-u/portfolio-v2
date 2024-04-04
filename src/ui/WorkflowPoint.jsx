export default function WorkflowPoint({ number, point }) {
  return (
    <div className="flex items-start text-white-body-font">
      <span
        className={`font-bold text-[1.3rem] min-[740px]:text-[1.5rem] min-[880px]:text-[1.8rem] ${
          number === '01.' && 'tracking-[0.14rem]'
        } text-big-nums w-[34px] min-[740px]:pt-[2px] min-[880px]:pt-[4px]  min-[880px]:pr-[3rem]`}
      >
        {number}
      </span>
      <p className="text-[1rem] font-light pt-[3px] pl-3 min-[1024px]:pt-[8px] min-[740px]:text-[1.5rem]">
        {point}
      </p>
    </div>
  );
}
