import { useTheme } from "next-themes";
import Link from "next/link";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <main className="container mx-auto flex flex-row px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex flex-col items-start">
        <h1 className="text-6xl font-bold mt-32 mb-6">Opa, tudo bom? 👋</h1>
        <h2 className="text-3xl text-gray-600 dark:text-gray-500 mb-6">
          Me chamo Uanderson Ricardo. Sou desenvolvedor fullstack, técnico em
          eletrônica, entusiasta de machine learning e metido a designer
        </h2>
        <Link href="/#about">
          <a className="group mb-12 inline-flex items-center justify-center rounded-xl py-3 px-6 text-xl font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-black text-white hover:bg-gray-700 hover:text-gray-100 active:bg-gray-800 active:text-gray-300 focus-visible:outline-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-gray-600 dark:active:bg-gray-100 dark:active:text-gray-700 dark:focus-visible:outline-white">
            Saiba mais
          </a>
        </Link>
      </div>
      <div className="flex-1 flex flex-row items-center justify-center h-full">
        <img
          src={theme === "dark" ? "/art-dark.svg" : "/art.svg"}
          alt="Arte de Uanderson Ricardo"
          className="mt-4 w-full h-full flex-1"
        />
      </div>
    </main>
  );
};

export default Hero;
