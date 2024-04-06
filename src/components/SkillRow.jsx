export default function SkillRow({ logo1, logo2, name1, name2 }) {
  return (
    <div className="flex font-medium ">
      <div className="flex items-center w-[150px] min-[350px]:w-[180px] min-[410px]:w-[60%] gap-3">
        {logo1 && (
          <img
            src={logo1}
            className="w-[28px] min-[530px]:w-[37px] min-[1223px]:w-[50px]"
            alt={`Logo of ${name1}`}
          />
        )}
        <span className="text-body-2 min-[350px]:text-body-1 min-[1536px]:text-2xl">
          {name1}
        </span>
      </div>

      <div className="flex items-center gap-3 ">
        {logo2 && (
          <img
            src={logo2}
            className="w-[28px] min-[530px]:w-[37px] min-[1223px]:w-[50px] "
            alt={`Logo of ${name2}`}
          />
        )}
        <span className="text-body-2 min-[360px]:text-body-1 min-[1536px]:text-2xl">
          {name2}
        </span>
      </div>
    </div>
  );
}
