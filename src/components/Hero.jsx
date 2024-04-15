import logo from '../assets/logos/factorial-logo.svg';
import Pattern from '../assets/logos/test-lines.jsx';

export default function Hero() {
  return (
    <section className="h-[calc(100vh-135px)] min-[1024px]:h-[calc(100vh-80px)] linear-gradient">
      <div className="flex min-h-full justify-between flex-col text-[58px] min-[550px]:text-[108px] min-[1024px]:text-[128px] font-bold px-[1.4rem]">
        <div className="flex flex-col items-center pt-16 min-[550px]:pt-[0] min-[1424px]:pt-[7vh] long-p">
          <div className="z-10">
            <span className="font-general text-white-bg font-outline-3">
              HI
            </span>
            <span className="font-general text-white-bg font-outline-3">
              , I&rsquo;M
            </span>
            <img
              src={logo}
              alt="hero logo of Factorial"
              className="w-[260px] h-[88px] min-[550px]:w-[430px] min-[550px]:h-[143px] min-[1024px]:w-[736px] min-[1024px]:h-[213px] ml-[1rem] min-[345px]:ml-[3rem] "
            />
            <h1 className="text-body-1 font-normal text-center mt-[5px] text-black-body-font">
              SOFTWARE DEVELOPMENT \\
            </h1>
          </div>
        </div>

        <div className="pb-[5vh] min-[550px]:text-end relative">
          <div className="pb-14 min-[1024px]:pb-0 text-black-body-font">
            <span className="hero-span">AVAILABLE FOR WORK //</span>
            <span className="hero-span underline">+569 4266 8187</span>
            <span className="hero-span underline">
              DIEGO.ORELLANA.GIT@GMAIL.COM
            </span>
          </div>
          <span className="absolute bottom-8 left-0 right-0 block text-body-1 font-normal text-center text-black-body-font">
            Scroll down to see more
          </span>
        </div>
      </div>
      <div className="absolute w-full top-[190px] min-[1024px]:top-[100px] overflow-hidden long-top">
        {/* <img
          src={pattern}
          alt="vector pattern of the hero"
          className="w-full"
        /> */}
        <Pattern />
      </div>
    </section>
  );
}
