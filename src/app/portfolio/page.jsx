"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Haemologix",
    desc: "Startup Project : Real-Time Blood Shortage Alert and Donor Mobilization System. Built to connect hospitals and donors instantly during emergencies. Winner of 2 hackathons.",
    img: "/h.png",
    link: "https://www.haemologix.in",
    alt: "Haemologix",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Real Estate Website",
    desc: "Client project: A full stack Real Estate platform built as a freelance assignment. Includes property listings, advanced search, and fully responsive UI.",
    img: "/nr2.png",
    link: "https://nr-star-ae.vercel.app",
    alt: "Real Estate Website",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Creator Landing Page",
    desc: "Client project: A responsive landing page built for an AI automation YouTuber. Showcases creator info, highlights services, and promotes paid courses.",
    img: "/hta.png",
    link: "https://howtoai2.vercel.app",
    alt: "howtoai",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "CarePulse",
    desc: "Hackathon Project: An all-in-one healthcare platform with separate patient and admin dashboards. Patients can schedule doctor appointments, book medical tests, check bed availability, and trigger an SOS emergency alert. Hospitals can manage inventory and operations from the admin side.",
    img: "/cp.png",
    link: "https://app-carepulse.vercel.app",
    alt: "CarePulse",
  },

  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "CaseCobra",
    desc: "Hackathon Project: A full stack website for creating your own custom phone case. Integrated with its own authentication and stripe payments functionality, and a custom dashboard page for admins.",
    img: "/cc.png",
    link: "https://casecobra-a.vercel.app",
    alt: "CaseCobra",
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "MeetSpace",
    desc: "Personal project: A full-featured online meetings and video calls platform with screen sharing, recording, and collaboration tools. Comparable to Google Meet/Zoom in functionality.",
    img: "/ms.png",
    link: "https://meetspace.vercel.app",
    alt: "MeetSpace",
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "3D Portfolio Website",
    desc: "Personal project: 3D Portfolio website with multiple 3d models optimized with threejs for devices with bigger screens.",
    img: "/port.png",
    link: "https://aftab-port.netlify.app",
    alt: "3D Portfolio Website",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Brainware Landing Page",
    desc: "Personal project: Fully responsive landing page with modern UI/UX designs, properly using key concepts of tailwind css and ReactJS.",
    img: "/bw.png",
    link: "https://brainware-aftab.vercel.app",
    alt: "Brainware Landing Page",
  },
];

const highlightColors = {
  "Hackathon Project": "text-red-700",
  "Client project": "text-black",
  "Personal project": "text-blue-800",
  "Startup Project": "text-gray-700",
};

const PortfolioPage = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [shiftPx, setShiftPx] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setShiftPx(Math.max(0, trackWidth - viewportWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -shiftPx]);

  const slides = items.length + 1;
  const sectionHeightVh = slides * 100;

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${sectionHeightVh}vh` }}
      >
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>

        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x, willChange: "transform" }}
            className="flex"
          >
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl md:text-4xl lg:text-6xl xl:text-8xl font-bold bg-gradient-to-r text-gray-500 drop-shadow-lg bg-clip-text text-transparent">
                    {item.title}
                  </h1>

                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[350px] lg:h-[250px] xl:w-[400px] xl:h-[250px]">
                    <Image src={item.img} alt={item.alt} fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[400px] lg:text-lg xl:w-[500px]">
                    {item.desc.includes(":") ? (
                      <>
                        {(() => {
                          const prefix = item.desc.split(":")[0].trim();
                          const suffix = item.desc.split(":")[1];
                          const colorClass =
                            highlightColors[prefix] || "text-white";
                          return (
                            <>
                              <span className={`${colorClass} font-semibold`}>
                                {prefix}:
                              </span>{" "}
                              {suffix}
                            </>
                          );
                        })()}
                      </>
                    ) : (
                      item.desc
                    )}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex justify-start"
                  >
                    <button className="p-2 w-96 text-sm md:p-3 md:text-md lg:p-5 lg:text-lg bg-white text-gray-600 font-semibold m-3 rounded">
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
                Full Stack Developer and UI Designer
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
