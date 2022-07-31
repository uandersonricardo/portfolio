import Terminal from "../Terminal";

const AboutMe = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-800 py-20 w-full" id="about">
      <div className="container mx-auto overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 items-center">
        <h1 className="text-4xl text-white font-bold text-center w-full mb-12">
          Sobre mim
        </h1>
        <Terminal />
      </div>
    </section>
  );
};

export default AboutMe;
