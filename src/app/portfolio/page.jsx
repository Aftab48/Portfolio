"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Brainware Landing Page",
    desc: "Fully responsive landing page with modern UI/UX designs, properly using key concepts of tailwind css and reactjs.",
    img: "/bw.png",
    link: "https://brainware-aftab.vercel.app/",
    alt: "Brainware Landing Page",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Real Estate Website",
    desc: "A Full Stack Real Estate website with full functionality and responsiveness.",
    img: "/nr2.png",
    link: "https://nr-star-ae.vercel.app/",
    alt: "Real Estate Website",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "MeetSpace",
    desc: "A custom app for online meetings and video calls.",
    img: "/ms.png",
    link: "https://meetspace.vercel.app/",
    alt: "MeetSpace",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "3D Portfolio Website",
    desc: "3D Portfolio website with multiple 3d models optimized with threejs for devices with bigger screens.",
    img: "/port.png",
    link: "https://aftab-port.netlify.app/",
    alt: "3D Portfolio Website",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "CaseCobra",
    desc: "A full stack website for creating your own custom phone case. Integrated with its own authentication and stripe payments functionality, and a custom dashboard page for admins.",
    img: "/cc.png",
    link: "https://casecobra-a.vercel.app/",
    alt: "CaseCobra",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[350px] lg:h-[250px] xl:w-[400px] xl:h-[250px]">
                    <Image src={item.img} alt={item.alt} fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[400px] lg:text-lg xl:w-[500px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-start"
                  >
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
