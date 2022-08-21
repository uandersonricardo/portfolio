import Terminal from "../Terminal";

const AboutMe = () => {
  return (
    <section
      className="pt-16 md:pt-24 pb-4 md:pb-12 w-full container mx-auto overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 items-center"
      id="about"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center w-full mb-4">
        Sobre mim
      </h2>
      <h3 className="text-xl md:text-2xl text-center text-gray-500 dark:text-neutral-500 w-full mb-16 md:mb-20">
        Use o terminal abaixo para conhecer um pouco mais sobre mim
      </h3>
      <Terminal />
    </section>
  );
};

export default AboutMe;
