const AboutMe = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-800 py-20" id="about">
      <div className="container mx-auto flex flex-col px-4 sm:px-6 lg:px-8 items-center">
        <h1 className="text-4xl text-white font-bold text-center w-full mb-12">
          Sobre mim
        </h1>

        <div className="relative overflow-hidden shadow-xl flex bg-gray-800 h-auto max-h-auto] sm:max-h-[none] sm:rounded-xl lg:h-auto xl:h-auto dark:bg-gray-900">
          <div className="relative w-full flex flex-col">
            <div className="flex-none border-b border-gray-500/30">
              <div className="flex items-center h-8 space-x-1.5 px-3">
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="relative min-h-0 flex-auto flex flex-col">
              <div className="w-full flex-auto flex min-h-0 overflow-auto">
                <div className="w-full relative flex-auto">
                  <pre className="flex min-h-full text-sm leading-6">
                    <div
                      aria-hidden="true"
                      className="hidden md:block text-gray-600 flex-none py-4 pr-4 text-right select-none"
                      style={{ width: "50px" }}
                    >
                      {
                        "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22"
                      }
                    </div>
                    <code className="flex-auto relative block pt-4 pb-4 px-4 overflow-auto text-yellow-200">
                      <span className="text-yellow-400 block">{"{"}</span>
                      <span className="text-gray-50 block">
                        {"    "}name:{" "}
                        <span className="text-lime-300">
                          {'"Uanderson Ricardo"'}
                        </span>
                        ,
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}pronouns:{" "}
                        <span className="text-pink-400">{"["}</span>
                        <span className="text-lime-300">{'"Ele", "Dele"'}</span>
                        <span className="text-pink-400">{"]"}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}located_in:{" "}
                        <span className="text-lime-300">
                          {'"Recife, Pernambuco"'}
                        </span>
                        ,
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}job:{" "}
                        <span className="text-lime-300">
                          {'"Fullstack Developer"'}
                        </span>
                        ,
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}education:{" "}
                        <span className="text-pink-400">{"["}</span>
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">
                          {'"Graduando em Engenharia na Computação (UFPE)"'}
                        </span>
                        ,
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">
                          {'"Técnico em Eletrônica (IFPE)"'}
                        </span>
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}
                        <span className="text-pink-400">{"]"}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}code:{" "}
                        <span className="text-pink-400">{"["}</span>
                        <span className="text-lime-300">
                          {
                            '"Javascript", "Typescript", "Python", "PHP", "C", "C#"'
                          }
                        </span>
                        <span className="text-pink-400">{"]"}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}tools:{" "}
                        <span className="text-pink-400">{"["}</span>
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">{'"React"'}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">{'"Next.js"'}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">{'"Node"'}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">{'"Laravel"'}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">{'"PostgreSQL"'}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">{'"Jest"'}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">{'"Arduino"'}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"        "}
                        <span className="text-lime-300">{'"Figma"'}</span>
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}
                        <span className="text-pink-400">{"]"}</span>,
                      </span>
                      <span className="text-gray-50 block">
                        {"    "}hobbies:{" "}
                        <span className="text-pink-400">{"["}</span>
                        <span className="text-lime-300">
                          {'"Guitarra", "Violão", "e-Sports", "Cinema"'}
                        </span>
                        <span className="text-pink-400">{"]"}</span>,
                      </span>
                      <span className="text-yellow-400 block">{"}"}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
