import Link from "next/link";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => (
  <section className="pt-16 md:pt-20 pb-4 md:pb-8 w-full" id="contact">
    <div className="container mx-auto overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 items-center justify-center">
      <div className="flex flex-wrap gap-16 items-center justify-center py-8 md:py-24 mb-12 md:mb-20">
        <Link href="https://github.com/uandersonricardo">
          <a
            className="text-5xl text-gray-700 hover:text-black dark:text-neutral-200 dark:hover:text-white"
            target="_blank"
          >
            <BsGithub />
          </a>
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=5581986330884">
          <a
            className="text-5xl text-gray-700 hover:text-black dark:text-neutral-200 dark:hover:text-white"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/uandersonrfs">
          <a
            className="text-5xl text-gray-700 hover:text-black dark:text-neutral-200 dark:hover:text-white"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </Link>
        <Link href="https://instagram.com/uandersonrfs">
          <a
            className="text-5xl text-gray-700 hover:text-black dark:text-neutral-200 dark:hover:text-white"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </Link>
        <Link href="https://twitter.com/uandersonrfs">
          <a
            className="text-5xl text-gray-700 hover:text-black dark:text-neutral-200 dark:hover:text-white"
            target="_blank"
          >
            <BsTwitter />
          </a>
        </Link>
        <Link href="mailto:uandersonrfs@gmail.com">
          <a className="text-5xl text-gray-700 hover:text-black dark:text-neutral-200 dark:hover:text-white">
            <SiGmail />
          </a>
        </Link>
      </div>
    </div>
  </section>
);

export default Contact;
