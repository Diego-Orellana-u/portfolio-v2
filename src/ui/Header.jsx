import logo from '../assets/logos/logo.svg';

export default function Header() {
  return (
    <header className="flex justify-between px-[1.4rem] pt-[1.4rem]">
      <a href="#hero">
        <img
          src={logo}
          alt="logo of Factorial"
          className="w-[104px] h-[35px] mt-[4px]"
        />
      </a>

      <div className="text-body-1">
        <ul>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
