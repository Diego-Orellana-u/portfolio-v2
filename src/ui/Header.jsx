import logo from '../assets/logos/logo.svg';

export default function Header() {
  return (
    <header className="flex justify-between px-[1.4rem] pt-[1.4rem]">
      <div className="flex gap-10">
        <a href="#hero">
          <img
            src={logo}
            alt="logo of Factorial"
            className="w-[104px] h-[35px] mt-[4px] min-[550px]:w-[165px] min-[550px]:h-[55px]"
          />
        </a>
        <div className="flex flex-col text-[0.9rem] max-[550px]:hidden">
          <span>SOFTWARE DEVELOPMENT \\</span>
          <span>OPTIMIZATION</span>
          <span>SOLUTIONS</span>
        </div>
      </div>

      <div className="text-body-1 self-center">
        <ul className="min-[1024px]:flex min-[1024px]:items-center min-[1024px]:gap-9">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li className="min-[1024px]:hidden">
            <a href="#contact">Contact</a>
          </li>
          <li className="max-[1023px]:hidden bg-buttons-bg text-white-body-font px-8 py-[0.3rem] rounded-3xl tracking-[.05em]">
            <a href="#contact">Let&apos;s Talk</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
