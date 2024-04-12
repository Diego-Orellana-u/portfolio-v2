import Follow from '../ui/Follow';
import Form from './Form';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-[768px]:flex px-[1.4rem] min-[1024px]:px-[6rem] py-8 min-[615px]:py-24"
    >
      <div className="min-[768px]:flex-[90%] min-[768px]:pr-10 min-[1224px]:pr-[4rem]">
        <h2 className="text-black-body-font text-heading-3 font-bold pb-[2rem] text-center min-[768px]:text-left">
          Let&apos;s Connect
        </h2>
        <p className="text-body-1 text-black-body-font pb-8 min-[768px]:pb-0 min-[1224px]:pb-8 min-[1536px]:text-3xl">
          I always enjoy meeting new people and sharing ideas or experiences. If
          you consider yourself a growth oriented person don&apos;t doubt
          reaching to me!
        </p>
        <div className="max-[767px]:hidden">
          <Follow />
        </div>
      </div>
      <Form />
      <div className="min-[768px]:hidden">
        <Follow />
      </div>
    </section>
  );
}
