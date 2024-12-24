import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Your{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Preferences
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting spaces, Building Legacies-Explore Our Portfolio
      </p>
    </motion.div>
  );
};

export default Projects;
