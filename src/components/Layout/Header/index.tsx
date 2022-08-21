import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="w-full absolute h-24 top-0 z-50 flex flex-wrap items-center">
      <nav className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 flex relative z-50 justify-between">
        <Link href="/">
          <a>
            <img
              src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
              className="h-16 w-16"
              alt="Uanderson Ricardo"
            />
          </a>
        </Link>
        <div className="hidden lg:flex md:gap-x-8 px-8 items-center">
          <Link href="/#about">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100">
              Sobre mim
            </a>
          </Link>
          <Link href="/#projects">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100">
              Projetos
            </a>
          </Link>
          <Link href="/#experience">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100">
              Educação e Experiência
            </a>
          </Link>
          <Link href="/#interests">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100">
              Áreas de Interesse
            </a>
          </Link>
          <Link href="/#contact">
            <a className="inline-block rounded-lg py-1 px-4 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100">
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
