import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section
      className="pt-16 md:pt-24 pb-4 md:pb-12 w-full container mx-auto overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 items-center"
      id="projects"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center w-full mb-4">
        Projetos
      </h2>
      <h3 className="text-xl md:text-2xl text-center text-gray-500 dark:text-neutral-500 w-full mb-16 md:mb-20">
        Veja alguns dos projetos que eu tenho desenvolvido
      </h3>
      <div className="grid grid-flow-col grid-rows-3 grid-cols-3 gap-4 md:gap-8 w-full">
        <Link href="/otonio">
          <a className="flex flex-col items-center md:items-start justify-center md:justify-start p-4 md:p-8 rounded-3xl bg-[#3361ff]">
            <div className="max-w-full w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3">
              <img
                src="/assets/otonio/logo.svg"
                className="w-full h-full"
                alt="Logo Oton.io"
              />
            </div>
            <div className="hidden md:flex w-full flex-col justify-center items-start mt-4">
              <h2 className="text-2xl font-bold text-white mb-2">Oton.io</h2>
              <p className="hidden lg:block text-md text-white/90">
                Plataforma de submissão de atividades, trabalhos, provas e
                avaliações empresariais coerente com o ambiente remoto
              </p>
            </div>
          </a>
        </Link>
        <Link href="/portfolio">
          <a className="flex flex-col items-center md:items-start justify-center md:justify-start px-4 pt-4 md:px-8 md:pt-8 rounded-3xl bg-gray-900 col-start-2 row-start-1 row-span-2">
            <div className="max-w-full w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3">
              <img
                src="/logo-dark.svg"
                className="w-full h-full"
                alt="Logo URFS"
              />
            </div>
            <div className="hidden md:flex w-full flex-col justify-center items-start mt-4">
              <h2 className="text-2xl font-bold text-white mb-2">Portfólio</h2>
              <p className="hidden lg:block text-md text-white/90">
                Site pessoal e portfólio dos projetos mais importantes
              </p>
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center justify-center rounded-xl mt-4">
              <img
                src="/assets/urfs/phone.png"
                className="w-full"
                alt="Smartphone mostrando o portfólio"
                loading="lazy"
              />
            </div>
          </a>
        </Link>
        <Link href="/dinoio">
          <a className="flex flex-col items-center md:items-start justify-center md:justify-start p-4 md:p-8 rounded-3xl bg-[#0a0a0a]">
            <div className="max-w-full w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3">
              <img
                src="/assets/dinoio/logo.svg"
                className="w-full h-full"
                alt="Logo Dino.io"
              />
            </div>
            <div className="hidden md:flex w-full flex-col justify-center items-start mt-4">
              <h2 className="text-2xl font-bold text-white mb-2">Dino.io</h2>
              <p className="hidden lg:block text-md text-white/90">
                Jogo baseado no {'"Running T-Rex"'} do Google Chrome, onde um
                jogador controla um dinossauro e tenta desviar de cactos e de
                outros dinossauros
              </p>
            </div>
          </a>
        </Link>
        <Link href="/cobrinhaio">
          <a className="flex flex-col items-center md:items-start justify-center md:justify-start p-4 md:p-8 rounded-3xl bg-[#f92672]">
            <div className="max-w-full w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3">
              <img
                src="/assets/cobrinhaio/logo.svg"
                className="w-full h-full"
                alt="Logo Cobrinha.io"
              />
            </div>
            <div className="hidden md:flex w-full flex-col justify-center items-start mt-4">
              <h2 className="text-2xl font-bold text-white mb-2">
                Cobrinha.io
              </h2>
              <p className="hidden lg:block text-md text-white/90">
                Jogo multiplayer onde um jogador controla uma serpente em um
                espaço aberto, tentando aumentar seu comprimento e derrotar os
                outros jogadores
              </p>
            </div>
          </a>
        </Link>
        <Link href="/guitario">
          <a className="flex flex-col items-center md:items-start justify-center md:justify-start p-4 md:p-8 rounded-3xl bg-[#353739]">
            <div className="max-w-full w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3">
              <img
                src="/assets/guitario/logo.svg"
                className="w-full h-full"
                alt="Logo Guitar.io"
              />
            </div>
            <div className="hidden md:flex w-full flex-col justify-center items-start mt-4">
              <h2 className="text-2xl font-bold text-white mb-2">Guitar.io</h2>
              <p className="hidden lg:block text-md text-white/90">
                Jogo single-player cujo objetivo é acertar as notas da guitarra
                conforme a música escolhida, aumentando a pontuação do jogador
              </p>
            </div>
          </a>
        </Link>
        <Link href="/facethewall">
          <a className="flex flex-col items-center md:items-start justify-center md:justify-start p-4 md:p-8 rounded-3xl bg-[#7c3aed]">
            <div className="max-w-full w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3">
              <img
                src="/assets/facethewall/logo.svg"
                className="w-full h-full"
                alt="Logo Face the Wall"
              />
            </div>
            <div className="hidden md:flex w-full flex-col justify-center items-start mt-4">
              <h2 className="text-2xl font-bold text-white mb-2">
                Face the Wall
              </h2>
              <p className="hidden lg:block text-md text-white/90">
                Projeto vencedor do {'"2021 F8 Refresh Hackathon"'} do Facebook,
                utilizando tecnologia imersiva de realidade aumentada e
                inteligência artificial
              </p>
            </div>
          </a>
        </Link>
        <Link href="/tetrlio">
          <a className="flex flex-col items-center md:items-start justify-center md:justify-start p-4 md:p-8 rounded-3xl bg-[#ff7751]">
            <div className="max-w-full w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3">
              <img
                src="/assets/tetrlio/logo.svg"
                className="w-full h-full"
                alt="Logo Tetrl.io"
              />
            </div>
            <div className="hidden md:flex w-full flex-col justify-center items-start mt-4">
              <h2 className="text-2xl font-bold text-white mb-2">Tetrl.io</h2>
              <p className="hidden lg:block text-md text-white/90">
                Algoritmo de aprendizado por reforço (RL) para um single agent
                jogar um jogo de Tetris com design minimalista
              </p>
            </div>
          </a>
        </Link>
        <Link href="https://github.com/uandersonricardo">
          <a className="rounded-3xl bg-gray-50" target="_blank">
            <div className="w-full h-full flex flex-col items-center justify-center rounded-xl p-3 mb-4 text-7xl text-gray-700">
              <BsGithub />
              <h2 className="hidden md:block text-2xl font-bold text-gray-700 mt-4">
                Mais no github
              </h2>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
