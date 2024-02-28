"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        As a frontend developer, I thrive on crafting elegant interfaces that
        captivate users. With a blend of aesthetics and functionality, I turn
        designs into seamless digital experiences, from structured HTML to
        dynamic CSS presentations. I relish staying at the forefront of emerging
        technologies, mastering new frameworks, and optimizing performance.
        Transforming ideas into interactive websites that are more user
        friendly.
      </p>
    </motion.section>
  );
}
