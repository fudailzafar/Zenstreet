import React, { useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
    email: "",
    notifications: {
      comments: true,
      candidates: false,
      offers: false,
      push: "everything",
    },
  });

  const handleFormDataChange = (updatedFormData) => {
    setFormData(updatedFormData);
  };

  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <Projects formData={formData} onFormDataChange={handleFormDataChange} />

      <Footer />
    </div>
  );
};

export default App;
