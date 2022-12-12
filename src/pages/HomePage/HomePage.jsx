import "./HomePage.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { logos } from "../../assets/images";

export const HomePage = () => {
  return (
    <div className="bg-white px-4 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="">developed by JR</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-2"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-4">
          <h2 className="text-4xl py2 text-teal-600 font-medium md:text-6xl">
            Juan Deossa
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Frontend Developer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            maxime quia asperiores quibusdam nobis, voluptatum consectetur
            recusandae nihil corporis autem.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-8 py-3 text-gray-700">
          <AiFillLinkedin />
          <AiFillGithub />
          <ImWhatsapp />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-600 to-teal-100 rounded-full w-60 h-60 mt-8 md:h-96 md:w-96"></div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Service I Offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            soluta impedit at quam perspiciatis.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur..
          </p>
        </div>
        <div className="lg:flex gap-10">
          {Object.values(logos)
            .concat(Object.values(logos))
            .map((card, i) => (
              <div
                key={i}
                className="text-center shadow-xl p-10 rounded-lg my-6"
              >
                <img
                  className="mx-auto w-20 h-20 rounded-full"
                  src={card}
                  alt="react"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful designs
                </h3>
                <p className="py-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptates perspiciatis beatae.
                </p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Ilustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
            ))}
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            nam, tenetur voluptas laborum obcaecati iusto unde.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elite.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <img
              src="https://i.postimg.cc/Y0RbCDhq/QuizApp.png"
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src="https://i.postimg.cc/VLr5WrWD/pubg1.png"
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src="https://i.postimg.cc/G290hxSR/ToDoApp.png"
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src="https://i.postimg.cc/Y0RbCDhq/QuizApp.png"
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src="https://i.postimg.cc/VLr5WrWD/pubg1.png"
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              src="https://i.postimg.cc/G290hxSR/ToDoApp.png"
              alt=""
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
