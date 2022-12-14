import "../HomePage.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { tecnologies, portfolio } from "../../assets/data";
import { useState } from "react";

export const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`bg-slate-50 px-4 md:px-20 lg:px-40 dark:bg-gray-900`}>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <a href="mailto:juandeossa.nc@gmail.com" target="_blank">
              <h1 className="dark:text-gray-200">juandeossa.nc@gmail.com</h1>
            </a>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsSunFill
                    onClick={() => setDarkMode((prevstate) => !prevstate)}
                    className="cursor-pointer text-2xl dark:text-white"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode((prevstate) => !prevstate)}
                    className="cursor-pointer text-2xl dark:text-white"
                  />
                )}
              </li>
              {/* <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-2"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="text-center p-4">
            <h2 className="text-4xl py2 text-teal-600 font-medium md:text-6xl">
              Juan Deossa
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Frontend Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-300 md:text-xl max-w-lg mx-auto">
              Apasionado por la tecnologia y el desarrollo de software, En
              busqueda constante de crecimiento profesional en torno a
              javascript y su libreria mas utilizada (React).
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-8 py-3 text-gray-700 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/juan-ricardo-deossa-morales-7b2468249/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/JuanDeossa"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://wa.link/ippqg6"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ImWhatsapp />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-600 to-teal-100 rounded-full w-60 h-60 mt-8 md:h-96 md:w-96 overflow-hidden">
            <img
              className="absolute bottom-0 left-4 w-56 rounded-xl md:w-80 md:left-10"
              src="https://i.postimg.cc/Gt0y7fpQ/xyzpng.png"
              alt=""
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200 text-center">Tecnologies</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              soluta impedit at quam perspiciatis.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur..
            </p> */}
          </div>
          <div className="lg:flex gap-10">
            {Object.values(tecnologies).map((card, i) => (
              <div
                key={i}
                className="text-teal-700 tex h-80 w-60 text-center shadow-xl p-6 rounded-lg my-6 dark:bg-slate-50 max-w-sm mx-auto"
              >
                <img
                  className="mx-auto w-20 h-20 rounded-full"
                  src={card.image}
                  alt="react"
                />
                <h3 className="text-2xl font-medium pt-8 pb-2">{card.name}</h3>
                {/* <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates perspiciatis beatae.
                </p> */}
                {/* <h4 className="py-4 text-teal-600">Related features</h4> */}
                {card?.features.map((feature, j) => (
                  <p key={j} className="text-gray-800 py-1">
                    {feature}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200 text-center">Projects</h3>
            {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              nam, tenetur voluptas laborum obcaecati iusto unde.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elite.
            </p> */}
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* Portfolio Cards */}
            {portfolio?.map((project, i) => (
              <div
                key={i}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto"
              >
                <img
                  className="rounded-t-lg h-80 w-full"
                  src={project?.image}
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project?.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {project?.description}
                  </p>
                  <div className="flex gap-8 mx-auto">
                    <a
                      href={project?.url?.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-teal-600 hover:bg-teal-700 "
                    >
                      Repository
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href={project?.url?.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-teal-600 hover:bg-teal-700 "
                    >
                      Play demo
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
