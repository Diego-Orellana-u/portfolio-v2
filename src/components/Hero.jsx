import logo from '../assets/logos/heroLogo.svg';
import pattern from '../assets/logos/pattern.svg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-135px)] min-[1024px]:h-[calc(100vh-80px)]"
    >
      <div className="flex min-h-full justify-between flex-col text-[58px] min-[550px]:text-[108px] min-[1024px]:text-[128px] font-bold px-[1.4rem]">
        <div className="flex flex-col items-center pt-16 min-[550px]:pt-[0] min-[1424px]:pt-[7vh] long-p">
          <div>
            <span className="font-general text-transparent font-outline-3">
              HI
            </span>
            <span className="font-general text-transparent font-outline-3">
              , I&rsquo;M
            </span>
            <img
              src={logo}
              alt="hero logo of Factorial"
              className="w-[260px] h-[88px] min-[550px]:w-[430px] min-[550px]:h-[143px] min-[1024px]:w-[736px] min-[1024px]:h-[213px] ml-[1rem] min-[345px]:ml-[3rem]"
            />
            <h1 className="text-body-1 font-normal text-center mt-[5px]">
              SOFTWARE DEVELOPMENT \\
            </h1>
          </div>
        </div>

        <div className="pb-[5vh] min-[550px]:text-end">
          <div className="pb-10 min-[1024px]:pb-0">
            <span className="hero-span">AVAILABLE FOR WORK //</span>
            <span className="hero-span underline">+569 4266 8187</span>
            <span className="hero-span underline">
              DIEGO.ORELLANA.GIT@GMAIL.COM
            </span>
          </div>
          <span className="block text-body-1 font-normal text-center">
            Scroll down to see more
          </span>
        </div>
      </div>
      <div className="absolute w-full top-[190px] min-[1024px]:top-[100px] overflow-hidden long-top">
        <img
          src={pattern}
          alt="vector pattern of the hero"
          className="w-[175%] min-[540px]:w-[135%] min-[750px]:w-[124%] min-[1024px]:w-[100%] max-w-none"
        />
      </div>
    </section>
  );
}
