export default function Hamb() {
  return (
    <div className="hamb fixed top-16 right-6 min-[1024px]:right-10 rounded-full bg-secondary-500 h-16 w-16 min-[1024px]:h-24 min-[1024px]:w-24 z-[9999] flex justify-center items-center cursor-pointer">
      <svg
        className="w-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 8l16 0" />
        <path d="M4 16l16 0" />
      </svg>
    </div>
  );
}
