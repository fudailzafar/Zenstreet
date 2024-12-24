import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen  bh-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <label
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
          for="personal_information"
        >
          Personal Information{" "}
        </label>
        <div className="space-x-6 mt-16">
          <input
            type="text"
            className="border border-white px-8 py-3 rounded text-black"
            id="personal_information"
            placeholder="Your name"
          />

          <a href="#Submit" className="bg-blue-500 px-8 py-3 rounded">
            Submit
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
