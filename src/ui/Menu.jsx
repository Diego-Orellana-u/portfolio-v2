import favicon from "../assets/logos/fac-favicon.svg";
import cvdiego from "/cv-diego.pdf";

export default function Menu({ setIsAnimating }) {
  return (
    <div>
      <div className="menu-blocks">
        <div className="menu-block"></div>
        <div className="menu-block"></div>
        <div className="menu-block"></div>
        <div className="menu-block"></div>
        <div className="menu-block"></div>
        <div className="menu-block"></div>
        <div className="menu-block max-[768px]:hidden "></div>
        <div className="menu-block max-[768px]:hidden "></div>
      </div>
      <div className="menu-container min-[768px]:flex py-8 min-[768px]:px-[3rem] min-[1024px]:px-[6rem] justify-start gap-8">
        <div className="max-[767px]:hidden w-[60%] flex flex-col justify-between">
          <div>
            <img src={favicon} alt="favicon of Factorial" />
          </div>
          <div className="flex flex-col text-white-body-font gap-2 pb-[1.3rem]">
            <a
              href="https://www.linkedin.com/in/diego-orellana-3ba1b52ba/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Diego-Orellana-u" target="_blank">
              GitHub
            </a>
            <a href={cvdiego} target="_blank">
              Resume
            </a>
            <span>diego.orellana.git@gmail.com</span>
          </div>
        </div>
        <div className="menu-links text-white-body-font min-[768px]:items-start min-[768px]:justify-evenly">
          <a
            href="#hero"
            className="rolling-text link"
            onClick={() => {
              setIsAnimating(true);
            }}
          >
            <div className="blockm">
              <span className="letter">H</span>
              <span className="letter">O</span>
              <span className="letter">M</span>
              <span className="letter">E</span>
            </div>
            <div className="blockm">
              <span className="letter">H</span>
              <span className="letter">O</span>
              <span className="letter">M</span>
              <span className="letter">E</span>
            </div>
          </a>
          <a
            href="#projects"
            className="rolling-text link"
            onClick={() => {
              setIsAnimating(true);
            }}
          >
            <div className="blockm">
              <span className="letter">P</span>
              <span className="letter">R</span>
              <span className="letter">O</span>
              <span className="letter">J</span>
              <span className="letter">E</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
              <span className="letter">S</span>
            </div>
            <div className="blockm">
              <span className="letter">P</span>
              <span className="letter">R</span>
              <span className="letter">O</span>
              <span className="letter">J</span>
              <span className="letter">E</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
              <span className="letter">S</span>
            </div>
          </a>
          <a
            href="#about"
            className="rolling-text link"
            onClick={() => {
              setIsAnimating(true);
            }}
          >
            <div className="blockm">
              <span className="letter">A</span>
              <span className="letter">B</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter">T</span>
            </div>
            <div className="blockm">
              <span className="letter">A</span>
              <span className="letter">B</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter">T</span>
            </div>
          </a>
          <a
            href="#skills"
            className="rolling-text link"
            onClick={() => {
              setIsAnimating(true);
            }}
          >
            <div className="blockm">
              <span className="letter">S</span>
              <span className="letter">K</span>
              <span className="letter">I</span>
              <span className="letter">L</span>
              <span className="letter">L</span>
              <span className="letter">S</span>
            </div>
            <div className="blockm">
              <span className="letter">S</span>
              <span className="letter">K</span>
              <span className="letter">I</span>
              <span className="letter">L</span>
              <span className="letter">L</span>
              <span className="letter">S</span>
            </div>
          </a>
          <a
            href="#contact"
            className="rolling-text link"
            onClick={() => {
              setIsAnimating(true);
            }}
          >
            <div className="blockm">
              <span className="letter">C</span>
              <span className="letter">O</span>
              <span className="letter">N</span>
              <span className="letter">T</span>
              <span className="letter">A</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
            </div>
            <div className="blockm">
              <span className="letter">C</span>
              <span className="letter">O</span>
              <span className="letter">N</span>
              <span className="letter">T</span>
              <span className="letter">A</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
