import logo from '../assets/logos/heroLogo.svg';
import pattern from '../assets/logos/pattern.svg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-135px)] w-full select-none min-[1024px]:h-[calc(100vh-80px)]"
    >
      <div className="text-[58px] min-[550px]:text-[108px] min-[1024px]:text-[128px] font-bold relative top-[15vh] min-[375px]:top-[4vh] min-[425px]:top-[7vh] px-[1.4rem] min-[550px]:top-[0] min-[1024px]:top-[-2vh]">
        <div className="flex flex-col items-center">
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
              className="w-[260px] h-[88px] min-[550px]:w-[430px] min-[550px]:h-[143px] min-[1024px]:w-[736px] min-[1024px]:h-[213px]  ml-[1rem] min-[345px]:ml-[3rem]"
            />
            <h1 className="text-body-1 font-normal text-center mt-[5px]">
              SOFTWARE DEVELOPMENT \\
            </h1>
          </div>
        </div>

        <div className="mt-[10vh] min-[375px]:mt-[20vh] min-[550px]:mt-[2.5rem] min-[550px]:text-end min-[1024px]:mt-[1.5rem]">
          <span className="hero-span">AVAILABLE FOR WORK //</span>
          <span className="hero-span underline">+569 4266 8187</span>
          <span className="hero-span underline">
            DIEGO.ORELLANA.GIT@GMAIL.COM
          </span>
        </div>
        <span className="block text-body-1 font-medium text-center mt-8 min-[1024px]:mt-[0] min-[1024px]:font-normal">
          Scroll down to see more
        </span>
      </div>
      <div className="absolute overflow-x-hidden max-w w-full top-[15vh] min-[550px]:top-[20vh] min-[650px]:top-[5vh] min-[750px]:top-[16vh] min-[1024px]:top-[18vh]">
        <img
          src={pattern}
          alt="vector pattern of the hero"
          className="w-[170%] min-[750px]:w-[124%] min-[1024px]:w-[100%] max-w-none translate-x-[-8%] translate-y-[15%] min-[425px]:translate-y-[0%] min-[1024px]:translate-x-[0%]"
        />
      </div>
    </section>
  );
}
