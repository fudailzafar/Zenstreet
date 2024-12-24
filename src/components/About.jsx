import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="min-h-screen bh-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="About"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <label
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
          for="address_information"
        >
          Your Address{" "}
        </label>
        <div className="space-x-6 mt-16">
          <input
            type="text"
            className="border border-white px-10 py-3 rounded text-black"
            id="address_information"
            placeholder="123, ABC Street, City100 "
          />

          <a href="#Submit" className="bg-blue-500 px-10 py-3 rounded">
            Submit
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
