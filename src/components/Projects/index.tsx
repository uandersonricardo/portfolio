import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section
      className="border-b border-gray-100 dark:border-gray-900 py-20 w-full"
      id="projects"
    >
      <div className="container mx-auto overflow-hidden flex flex-col px-4 sm:px-6 lg:px-8 items-center">
        <h1 className="text-4xl font-bold text-center w-full mb-12">
          Projetos
        </h1>
        <div className="grid grid-flow-col grid-rows-3 grid-cols-3 gap-8 w-full">
          <div className="p-8 rounded-3xl bg-[#3361ff]">
            <div className="w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3 mb-4">
              <img
                src="/assets/otonio/logo.svg"
                className="w-full h-full"
                alt="Logo Oton.io"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="text-2xl font-bold text-white mb-2">Oton.io</h2>
              <p className="text-md text-white/90">
                Plataforma de submissão de atividades, trabalhos, provas e
                avaliações empresariais coerente com o ambiente remoto
              </p>
            </div>
          </div>
          <div className="px-8 pt-8 rounded-3xl bg-gray-900 col-start-2 row-start-1 row-span-2">
            <div className="w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3 mb-4">
              <img
                src="/logo-dark.svg"
                className="w-full h-full"
                alt="Logo URFS"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="text-2xl font-bold text-white mb-2">Portfólio</h2>
              <p className="text-md text-white/90">
                Site pessoal e portfólio dos projetos mais importantes
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center rounded-xl mt-4">
              <img
                src="/assets/urfs/phone.png"
                className="w-full"
                alt="Smartphone mostrando o portfólio"
                loading="lazy"
              />
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-[#000000]">
            <div className="w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3 mb-4">
              <img
                src="/assets/dinoio/logo.svg"
                className="w-full h-full"
                alt="Logo Dino.io"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="text-2xl font-bold text-white mb-2">Dino.io</h2>
              <p className="text-md text-white/90">
                Jogo baseado no {'"Running T-Rex"'} do Google Chrome, onde um
                jogador controla um dinossauro e tenta desviar de cactos e de
                outros dinossauros
              </p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-[#f92672]">
            <div className="w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3 mb-4">
              <img
                src="/assets/cobrinhaio/logo.svg"
                className="w-full h-full"
                alt="Logo Cobrinha.io"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="text-2xl font-bold text-white mb-2">
                Cobrinha.io
              </h2>
              <p className="text-md text-white/90">
                Jogo multiplayer onde um jogador controla uma serpente em um
                espaço aberto, tentando aumentar seu comprimento e derrotar os
                outros jogadores
              </p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-[#353739]">
            <div className="w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3 mb-4">
              <img
                src="/assets/guitario/logo.svg"
                className="w-full h-full"
                alt="Logo Guitar.io"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="text-2xl font-bold text-white mb-2">Guitar.io</h2>
              <p className="text-md text-white/90">
                Jogo single-player cujo objetivo é acertar as notas da guitarra
                conforme a música escolhida, aumentando a pontuação do jogador
              </p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-[#7c3aed]">
            <div className="w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3 mb-4">
              <img
                src="/assets/facethewall/logo.svg"
                className="w-full h-full"
                alt="Logo Face the Wall"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="text-2xl font-bold text-white mb-2">
                Face the Wall
              </h2>
              <p className="text-md text-white/90">
                Projeto vencedor do {'"2021 F8 Refresh Hackathon"'} do Facebook,
                utilizando tecnologia imersiva de realidade aumentada e
                inteligência artificial
              </p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-[#ff7751]">
            <div className="w-20 h-20 bg-black/10 flex items-center justify-center rounded-xl p-3 mb-4">
              <img
                src="/assets/tetrlio/logo.svg"
                className="w-full h-full"
                alt="Logo Tetrl.io"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <h2 className="text-2xl font-bold text-white mb-2">Tetrl.io</h2>
              <p className="text-md text-white/90">
                Algoritmo de aprendizado por reforço (RL) para um single agent
                jogar um jogo de Tetris com design minimalista
              </p>
            </div>
          </div>
          <Link href="https://github.com/uandersonricardo">
            <a className="rounded-3xl bg-gray-50" target="_blank">
              <div className="w-full h-full flex flex-col items-center justify-center rounded-xl p-3 mb-4 text-7xl text-gray-700">
                <BsGithub />
                <h2 className="text-2xl font-bold text-gray-700 mt-4">
                  Mais no github
                </h2>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
