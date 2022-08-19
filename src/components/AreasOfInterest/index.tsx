const AreasOfInterest = () => {
  return (
    <section
      className="pt-16 md:pt-24 pb-4 md:pb-12 w-full container mx-auto overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 items-center"
      id="interests"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center w-full mb-2 md:mb-4">
        Áreas de Interesse
      </h2>
      <h3 className="text-xl md:text-2xl text-center text-gray-500 dark:text-neutral-500 w-full mb-16 md:mb-20">
        Veja as áreas que eu tenho interesse em trabalhar
      </h3>
      <ul className="flex-wrap flex text-center w-full items-end justify-center uppercase">
        <li className="inline break-all md:break-words cursor-pointer font-black text-3xl md:text-5xl text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition">
          Inteligência Artificial
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-4xl md:text-6xl text-gray-400 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-white transition">
          UI/UX Design
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-5xl md:text-7xl text-gray-300 dark:text-neutral-800 hover:text-gray-900 dark:hover:text-white transition">
          Sistemas Embarcados
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-3xl md:text-5xl text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition">
          Educação
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-4xl md:text-6xl text-gray-400 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-white transition">
          Publicidade
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-5xl md:text-7xl text-gray-300 dark:text-neutral-800 hover:text-gray-900 dark:hover:text-white transition">
          Empreendedorismo
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-3xl md:text-5xl text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition">
          Desenvolvimento de Produtos
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-4xl md:text-6xl text-gray-400 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-white transition">
          Biotecnologia
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-5xl md:text-7xl text-gray-300 dark:text-neutral-800 hover:text-gray-900 dark:hover:text-white transition">
          Economia
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-3xl md:text-5xl text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition">
          Visão Computacional
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-4xl md:text-6xl text-gray-400 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-white transition">
          Realidade Estendida (XR)
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-5xl md:text-7xl text-gray-300 dark:text-neutral-800 hover:text-gray-900 dark:hover:text-white transition">
          Reconhecimento de Voz
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-3xl md:text-5xl text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition">
          Eletrônica Digital
        </li>
        <li className="inline break-all md:break-words cursor-pointer font-black text-4xl md:text-6xl text-gray-400 dark:text-neutral-600 hover:text-gray-900 dark:hover:text-white transition">
          Carros Autônomos
        </li>
      </ul>
    </section>
  );
};

export default AreasOfInterest;
