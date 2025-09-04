"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Aftab</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL + CV */}
      <div className="hidden md:flex gap-4 items-center w-1/3 justify-end">
        <Link href="https://github.com/Aftab48" target="_blank">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aftab-alam-53b521246/"
          target="_blank"
        >
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link
          href="/AftabAlam-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-3 py-1 border rounded-md hover:bg-white bg-black text-white hover:text-black transition"
        >
          View CV
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {/* NAV LINKS */}
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}

            {/* CV BUTTON */}
            <motion.div variants={listItemVariants}>
              <Link
                href="/AftabAlam-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg px-4 py-2 border rounded-md hover:bg-white hover:text-black transition"
              >
                View CV
              </Link>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div variants={listItemVariants} className="flex gap-6 mt-6">
              <Link href="https://github.com/Aftab48" target="_blank">
                <Image
                  src="/github.png"
                  className="bg-white"
                  alt="GitHub"
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aftab-alam-53b521246/"
                target="_blank"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
