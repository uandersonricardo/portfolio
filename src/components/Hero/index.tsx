import { useTheme } from "next-themes";
import Link from "next/link";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="w-full pt-24 overflow-hidden flex flex-col lg:flex-row container mx-auto px-4 sm:px-6 lg:px-8 h-screen"
    >
      <div className="flex-1 flex flex-col items-start py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:mt-6 lg:mt-12 xl:mt-24 mb-6">
          Opa, tudo bom? 👋
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-500 dark:text-neutral-500 mb-8">
          Me chamo Uanderson Ricardo. Sou desenvolvedor fullstack, técnico em
          eletrônica, entusiasta de machine learning e metido a designer
        </p>
        <Link href="/#about">
          <a className="group inline-flex items-center justify-center rounded-xl py-3 px-6 text-lg transition font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 border-2 bg-black text-white border-black hover:bg-white hover:text-black hover:border-black active:bg-gray-100 active:text-black focus-visible:outline-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white dark:active:bg-gray-800 dark:active:text-white dark:focus-visible:outline-white">
            Saiba mais
          </a>
        </Link>
      </div>
      <div className="flex-1 flex flex-row items-end justify-center h-full self-end">
        <img
          src={theme === "dark" ? "/art-dark.svg" : "/art.svg"}
          alt="Arte de Uanderson Ricardo"
          className="mt-4 max-w-full max-h-full flex-1"
        />
      </div>
    </section>
  );
};

export default Hero;
