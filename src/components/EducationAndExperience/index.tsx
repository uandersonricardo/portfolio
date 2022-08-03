import { BiBook, BiLaptop } from "react-icons/bi";

const EducationAndExperience = () => {
  return (
    <section
      className="pt-24 pb-12 w-full container mx-auto overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 items-center"
      id="experience"
    >
      <h2 className="text-5xl font-bold text-center w-full mb-4">
        Educação e Experiência
      </h2>
      <h3 className="text-2xl text-center text-gray-500 dark:text-neutral-500 w-full mb-20">
        Veja uma linha do tempo da minha formação e trabalhos
      </h3>
      <div className="grid grid-flow-col grid-rows-[repeat(7,_minmax(0,_1fr))] grid-cols-[repeat(14,_minmax(0,_1fr))] gap-x-4 gap-y-12 w-full">
        <button className="relative has-tooltip flex items-center justify-start rounded-3xl bg-gray-200 dark:bg-neutral-800 hover:bg-gray-900 dark:hover:bg-white transition duration-100 col-start-1 col-span-6 row-start-6">
          <div className="tooltip rounded-xl whitespace-nowrap shadow-lg p-4 text-left bg-gray-900 text-white dark:bg-white dark:text-black bottom-[100%] mb-4">
            <div className="text-3xl mb-2">
              <BiBook />
            </div>
            <div className="text-white/50 dark:text-black/75">2008 - 2014</div>
            <div className="font-bold">Colégio Maria Tereza</div>
            <div>Ensino Fundamental</div>
          </div>
        </button>
        <button className="relative has-tooltip flex items-center justify-start rounded-3xl bg-gray-200 dark:bg-neutral-800 hover:bg-gray-900 dark:hover:bg-white transition duration-100 col-start-5 col-span-1 row-start-5">
          <div className="tooltip rounded-xl whitespace-nowrap shadow-lg p-4 text-left bg-gray-900 text-white dark:bg-white dark:text-black bottom-[100%] mb-4">
            <div className="text-3xl mb-2">
              <BiBook />
            </div>
            <div className="text-white/50 dark:text-black/75">2012 - 2013</div>
            <div className="font-bold">Minds English School</div>
            <div>Curso de Inglês</div>
          </div>
        </button>
        <button className="relative has-tooltip flex items-center justify-start rounded-3xl bg-gray-200 dark:bg-neutral-800 hover:bg-gray-900 dark:hover:bg-white transition duration-100 col-start-7 col-span-4 row-start-4">
          <div className="tooltip rounded-xl whitespace-nowrap shadow-lg p-4 text-left bg-gray-900 text-white dark:bg-white dark:text-black bottom-[100%] mb-4">
            <div className="text-3xl mb-2">
              <BiBook />
            </div>
            <div className="text-white/50 dark:text-black/75">2014 - 2018</div>
            <div className="font-bold">Instituto Federal de Pernambuco</div>
            <div>Técnico em Eletrônica/Ensino Médio</div>
          </div>
        </button>
        <button className="relative has-tooltip flex items-center justify-start rounded-3xl bg-gray-200 dark:bg-neutral-800 hover:bg-gray-900 dark:hover:bg-white transition duration-100 col-start-10 col-span-1 row-start-3">
          <div className="tooltip rounded-xl whitespace-nowrap shadow-lg p-4 text-left bg-gray-900 text-white dark:bg-white dark:text-black bottom-[100%] mb-4">
            <div className="text-3xl mb-2">
              <BiLaptop />
            </div>
            <div className="text-white/50 dark:text-black/75">2017 - 2018</div>
            <div className="font-bold">Instituto Federal de Pernambuco</div>
            <div>Iniciação Científica</div>
          </div>
        </button>
        <button className="relative has-tooltip flex items-center justify-start rounded-3xl bg-gray-200 dark:bg-neutral-800 hover:bg-gray-900 dark:hover:bg-white transition duration-100 col-start-11 col-span-5 row-start-2">
          <div className="tooltip rounded-xl whitespace-nowrap shadow-lg p-4 text-left bg-gray-900 text-white dark:bg-white dark:text-black bottom-[100%] mb-4">
            <div className="text-3xl mb-2">
              <BiBook />
            </div>
            <div className="text-white/50 dark:text-black/75">2018 - Hoje</div>
            <div className="font-bold">Universidade Federal de Pernambuco</div>
            <div>Graduação em Engenharia da Computação</div>
          </div>
        </button>
        <button className="relative has-tooltip flex items-center justify-start rounded-3xl bg-gray-200 dark:bg-neutral-800 hover:bg-gray-900 dark:hover:bg-white transition duration-100 col-start-12 col-span-4 row-start-1">
          <div className="tooltip rounded-xl whitespace-nowrap shadow-lg p-4 text-left bg-gray-900 text-white dark:bg-white dark:text-black bottom-[100%] mb-4">
            <div className="text-3xl mb-2">
              <BiLaptop />
            </div>
            <div className="text-white/50 dark:text-black/75">2019 - Hoje</div>
            <div className="font-bold">Educandus</div>
            <div>Desenvolvedor Fullstack</div>
          </div>
        </button>
        <div className="col-start-1 text-gray-400 dark:text-neutral-500 row-start-7">
          2008
        </div>
        <div className="col-start-2 text-gray-400 dark:text-neutral-500 row-start-7">
          2009
        </div>
        <div className="col-start-3 text-gray-400 dark:text-neutral-500 row-start-7">
          2010
        </div>
        <div className="col-start-4 text-gray-400 dark:text-neutral-500 row-start-7">
          2011
        </div>
        <div className="col-start-5 text-gray-400 dark:text-neutral-500 row-start-7">
          2012
        </div>
        <div className="col-start-6 text-gray-400 dark:text-neutral-500 row-start-7">
          2013
        </div>
        <div className="col-start-7 text-gray-400 dark:text-neutral-500 row-start-7">
          2014
        </div>
        <div className="col-start-8 text-gray-400 dark:text-neutral-500 row-start-7">
          2015
        </div>
        <div className="col-start-9 text-gray-400 dark:text-neutral-500 row-start-7">
          2016
        </div>
        <div className="col-start-10 text-gray-400 dark:text-neutral-500 row-start-7">
          2017
        </div>
        <div className="col-start-11 text-gray-400 dark:text-neutral-500 row-start-7">
          2018
        </div>
        <div className="col-start-12 text-gray-400 dark:text-neutral-500 row-start-7">
          2019
        </div>
        <div className="col-start-13 text-gray-400 dark:text-neutral-500 row-start-7">
          2020
        </div>
        <div className="col-start-14 text-gray-400 dark:text-neutral-500 row-start-7">
          2021
        </div>
        <div className="col-start-15 text-gray-400 dark:text-neutral-500 row-start-7">
          Hoje
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;
