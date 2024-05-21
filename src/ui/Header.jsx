export default function Header() {
  return (
    <header
      id="hero"
      className="flex justify-between px-[1.4rem] pt-[1.4rem] min-[1024px]:px-[2.5rem]"
    >
      <div className="flex gap-8 min-[1260px]:gap-12 h-fit">
        <a
          href="#hero"
          className="self-center font-extrabold text-[1.7rem] font-general text-black-body-font"
        >
          FACTORIAL
        </a>
        <div className="flex flex-col text-[0.9rem] max-[550px]:hidden text-black-body-font">
          <span>SOFTWARE DEVELOPMENT \\</span>
          <span>OPTIMIZATION</span>
          <span>DESIGN</span>
        </div>
      </div>

      <nav className="text-body-1 self-center">
        <ul className="min-[1024px]:flex min-[1024px]:items-center min-[1024px]:gap-9">
          <li>
            <a
              href="#skills"
              className="group relative md:inline-block text-black-body-font"
            >
              <span>Projects</span>
              <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-800 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="group relative md:inline-block text-black-body-font"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-800 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="group relative md:inline-block text-black-body-font"
            >
              <span>Skills</span>
              <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-800 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li className="min-[1024px]:hidden text-black-body-font">
            <a
              href="#contact"
              className="group relative md:inline-block text-black-body-font"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-800 duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </li>
          <li className="max-[1023px]:hidden">
            <a
              href="#contact"
              className="bg-buttons-bg text-white-body-font px-8 py-[0.6rem] rounded-3xl tracking-[.05em]"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
