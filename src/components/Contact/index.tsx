import Link from "next/link";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <footer
      className="bg-gray-900 dark:bg-gray-800 pt-20 pb-8 w-full"
      id="contact"
    >
      <div className="container mx-auto overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 items-center justify-center">
        <div className="flex items-center justify-center py-24 mb-20">
          <Link href="https://github.com/uandersonricardo">
            <a
              className="text-5xl mr-16 text-white/75 hover:text-white"
              target="_blank"
            >
              <BsGithub />
            </a>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5581986330884">
            <a
              className="text-5xl mr-16 text-white/75 hover:text-white"
              target="_blank"
            >
              <BsWhatsapp />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/uandersonrfs">
            <a
              className="text-5xl mr-16 text-white/75 hover:text-white"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </Link>
          <Link href="https://instagram.com/uandersonrfs">
            <a
              className="text-5xl mr-16 text-white/75 hover:text-white"
              target="_blank"
            >
              <BsInstagram />
            </a>
          </Link>
          <Link href="https://twitter.com/uandersonrfs">
            <a
              className="text-5xl mr-16 text-white/75 hover:text-white"
              target="_blank"
            >
              <BsTwitter />
            </a>
          </Link>
          <Link href="mailto:uandersonrfs@gmail.com">
            <a className="text-5xl text-white/75 hover:text-white">
              <SiGmail />
            </a>
          </Link>
        </div>
        <div className="flex items-center w-full text-white text-2xl font-semibold pt-8 border-t border-gray-700">
          <img src="/logo-dark.svg" alt="Logo" className="w-12 h-12 mr-4" />
          Uanderson Ricardo
        </div>
      </div>
    </footer>
  );
};

export default Contact;
