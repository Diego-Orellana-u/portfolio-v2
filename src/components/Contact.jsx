export default function Contact() {
  return (
    <section className="px-[1.4rem] py-8">
      <div>
        <h2 className="text-black-body-font text-heading-3 font-bold pb-[2rem] text-center">
          Let&apos;s Connect
        </h2>
        <p className="text-body-1 text-black-body-font pb-8">
          I always enjoy meeting new people and sharing ideas or experiences. If
          you consider yourself a kind and growth oriented person don&apos;t
          doubt reaching to me!
        </p>
      </div>
      <div className="bg-buttons-bg px-5 pt-12 pb-8 rounded-2xl text-white-body-font">
        <form className="flex flex-col gap-9" autoComplete="off">
          <div>
            <label htmlFor="name" hidden>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="pb-1 border-b-[1px] focus:outline-none border-primary-lines/30 bg-transparent  placeholder:text-white-body-font w-full"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" hidden>
              Your Email
            </label>
            <input
              type="text"
              id="email"
              className="pb-1 border-b-[1px] focus:outline-none border-primary-lines/30 bg-transparent placeholder:text-white-body-font w-full"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="budget" hidden>
              Your Budget
            </label>
            <input
              type="text"
              id="budget"
              className="pb-1 border-b-[1px] focus:outline-none border-primary-lines/30 bg-transparent placeholder:text-white-body-font w-full"
              placeholder="Your Budget (optional)"
            />
          </div>

          <div>
            <label htmlFor="project" hidden>
              Your Project Idea
            </label>
            <textarea
              type="text"
              id="project"
              className="resize-none h-20 focus:outline-none border-b-[1px] border-primary-lines/30 bg-transparent placeholder:text-white-body-font w-full"
              placeholder="Your Project Idea (optional)"
            />
          </div>
          <button className="border border-white w-fit px-4 py-[0.35rem] rounded-3xl text-sm tracking-[0.04rem] self-end">
            Send Mail
          </button>
        </form>
      </div>
      <div>
        <div className="my-6">
          <h3 className="text-center text-heading-4">FOLLOW ME</h3>
        </div>
        <div>
          <h3 className="text-center text-heading-4">MAIL ME AT</h3>
          <span className="block text-center text-body-1">
            diego.orellana.git@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
