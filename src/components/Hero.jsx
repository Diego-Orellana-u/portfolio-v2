import logo from '../assets/logos/heroLogo.svg';
import pattern from '../assets/logos/pattern.svg';

export default function Hero() {
  return (
    <section id="hero" className="h-[calc(100vh-135px)] w-full select-none">
      <div className="text-[58px] font-bold relative top-[15vh] px-[1.4rem]">
        <span className="font-general text-transparent font-outline-3">HI</span>
        <span className="font-general text-transparent font-outline-3">
          , I&rsquo;M
        </span>
        <img
          src={logo}
          alt="hero logo of Factorial"
          className="w-[260px] h-[88px] ml-[3rem]"
        />
        <h1 className="text-body-1 font-normal text-center mt-[5px]">
          SOFTWARE DEVELOPMENT \\
        </h1>

        <div className="mt-[10vh]">
          <span className="hero-span">AVAILABLE FOR WORK //</span>
          <span className="hero-span underline">+569 4266 8187</span>
          <span className="hero-span underline">
            DIEGO.ORELLANA.GIT@GMAIL.COM
          </span>
        </div>
        <span className="block text-body-1 font-medium text-center mt-8">
          Scroll down to see more
        </span>
      </div>
      <div className="absolute top-[15vh] w-full">
        <img
          src={pattern}
          alt="vector pattern of the hero"
          className="w-full"
        />
      </div>
    </section>
  );
}
