export default function SkillRow({ logo1, logo2, name1, name2 }) {
  return (
    <div className="flex font-medium">
      <div className="flex items-center w-[180px] gap-3">
        {logo1 && (
          <img src={logo1} className="w-[28px]" alt={`Logo of ${name1}`} />
        )}
        <span>{name1}</span>
      </div>

      <div className="flex items-center gap-3">
        {logo2 && (
          <img src={logo2} className="w-[28px]" alt={`Logo of ${name2}`} />
        )}
        <span>{name2}</span>
      </div>
    </div>
  );
}
