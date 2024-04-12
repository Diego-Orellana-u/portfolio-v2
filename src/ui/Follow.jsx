import githubLogo from '../assets/logos/github-logo.svg';
import xLogo from '../assets/logos/x-logo.svg';
import mail from '../assets/logos/mail.svg';
import linkedinLogo from '../assets/logos/linkedin-logo.svg';

export default function Follow() {
  return (
    <div className="pt-6 min-[1024px]:pt-0 min-[1224px]:pt-6 min-[1224px]:flex min-[1224px]:justify-between">
      <div className="my-10 min-[1224px]:my-0">
        <h3 className="text-center text-heading-4 min-[1024px]:text-[1.6rem] mb-3">
          FOLLOW ME
        </h3>
        <div className="flex gap-7 justify-center">
          <a
            href="https://twitter.com/diegoOrellanaJs"
            target="_blank"
            rel="me"
          >
            <img src={xLogo} alt="logo of twitter" className="w-[35px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-orellana-3ba1b52ba/"
            target="_blank"
            rel="me"
          >
            <img
              src={linkedinLogo}
              alt="logo of linkedin"
              className="w-[35px]"
            />
          </a>
          <a
            href="https://github.com/Diego-Orellana-u"
            target="_blank"
            rel="me"
          >
            <img src={githubLogo} alt="logo of github" className="w-[35px]" />
          </a>
          <a>
            <img src={mail} alt="logo of mail" className="w-[40px]" />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-center text-heading-4 min-[1024px]:text-[1.6rem] min-[1224px]:mb-4">
          MAIL ME AT
        </h3>
        <span className="block text-center text-body-1">
          diego.orellana.git@gmail.com
        </span>
      </div>
    </div>
  );
}
