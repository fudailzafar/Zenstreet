import React from "react";
import Header from "./components/Header";

import Projects from "./components/Projects";

import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
