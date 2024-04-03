export default function Form() {
  return (
    <div className="bg-buttons-bg px-5 min-[1024px]:px-10 pt-12 pb-8 min-[768px]:pt-8 rounded-2xl text-white-body-font min-[768px]:w-[80%]">
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
  );
}
