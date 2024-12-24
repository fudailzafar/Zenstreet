import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Projects from "./Projects"; // Import the Projects component

const Header = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Create a ref for the "Projects" section
  const projectsRef = useRef(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate input
    if (!name.trim()) {
      setError("Name is required.");
    } else if (name.trim().length < 2) {
      setError("Name must be at least 2 characters long.");
    } else {
      setError("");
      alert("Form submitted successfully!");

      // Scroll to the "Projects" section after successful form submission
      if (projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
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
          htmlFor="personal_information"
        >
          Personal Information Form ZenStreet.AI
        </label>
      </motion.div>
      {/* Pass the ref to the Projects component */}
    </div>
  );
};

export default Header;
