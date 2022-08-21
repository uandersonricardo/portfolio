import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 w-full text-xl md:text-2xl font-semibold">
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 md:pt-8 pb-4 md:pb-8 flex items-center">
        <img
          src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
          alt="Logo"
          className="w-12 h-12 mr-4"
        />
        Uanderson Ricardo
      </div>
    </footer>
  );
};

export default Footer;
