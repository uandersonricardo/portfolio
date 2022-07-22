import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="container mx-auto sticky top-0 z-50 flex flex-wrap items-center bg-white px-4 py-5 sm:px-6 lg:px-8 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-white/75 dark:bg-black dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-black/75">
      <nav className="flex relative z-50 justify-between w-full">
        <Image
          height={60}
          width={60}
          src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
          alt="Uanderson Ricardo"
        />
        <div className="hidden md:flex md:gap-x-8 items-center">
          <Link href="/#about">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100">
              Sobre mim
            </a>
          </Link>
          <Link href="/#projects">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100">
              Projetos
            </a>
          </Link>
          <Link href="/#experience">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100">
              Educação e Experiência
            </a>
          </Link>
          <Link href="/#interests">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100">
              Áreas de Interesse
            </a>
          </Link>
          <Link href="/#contact">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100">
              Contato
            </a>
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
