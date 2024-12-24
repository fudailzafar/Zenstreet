import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Projects = () => {
  const [result, setResult] = React.useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    state: "",
    postalCode: "",
    addressType: "home",
    interests: [],
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((interest) => interest !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.streetAddress)
      newErrors.streetAddress = "Street Address is required.";
    if (!formData.state) newErrors.state = "State/Province is required.";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setResult("Sending....");

      // Prepare form data for submission
      const formDataToSubmit = new FormData();
      for (const key in formData) {
        if (formData[key]) {
          formDataToSubmit.append(key, formData[key]);
        }
      }
      formDataToSubmit.append(
        "access_key",
        "cbc9b376-c834-40a4-be61-c4d42f02de39"
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
      } else {
        toast.error(data.message);
        setResult("");
      }
    } else {
      toast.error("Please fix the errors in the form.");
    }
  };

  return (
    <div
      className={`container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Theme Toggle Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
          } px-4 py-2 rounded-md transition-colors`}
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20"
        id="Projects"
      >
        <h1
          className={`text-2xl sm:text-4xl font-bold mb-2 text-center ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Your{" "}
          <span
            className={`underline underline-offset-4 decoration-1 font-light ${
              isDarkMode ? "decoration-white" : "decoration-black"
            }`}
          >
            Address
          </span>
        </h1>
        <p
          className={`text-center text-gray-500 mb-8 max-w-80 mx-auto ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Providing Precision, Delivering Excellence – Share Your Address
        </p>

        {/* Address Form */}
        <form onSubmit={onSubmit} className="space-y-6 max-w-3xl mx-auto">
          {/* First Name and Last Name */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-sm font-semibold">Name</label>
            <div className="mt-2.5 grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 ${
                  isDarkMode
                    ? "bg-gray-800 text-white outline-gray-600"
                    : "bg-white text-gray-900 outline-gray-300"
                } placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 ${
                  isDarkMode
                    ? "bg-gray-800 text-white outline-gray-600"
                    : "bg-white text-gray-900 outline-gray-300"
                } placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 ${
                  isDarkMode
                    ? "bg-gray-800 text-white outline-gray-600"
                    : "bg-white text-gray-900 outline-gray-300"
                } placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </motion.div>

          {/* Country */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label htmlFor="country" className="block text-sm font-semibold">
              Country
            </label>
            <div className="mt-2.5">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-base outline outline-1 ${
                  isDarkMode
                    ? "bg-gray-800 text-white outline-gray-600" // Dark mode styles for select
                    : "bg-white text-gray-900 outline-gray-300" // Light mode styles for select
                } placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600`}
              >
                <option
                  value=""
                  className={`${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  Select your country
                </option>
                <option
                  value="USA"
                  className={`${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  USA
                </option>
                <option
                  value="Canada"
                  className={`${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  Canada
                </option>
                <option
                  value="India"
                  className={`${
                    isDarkMode
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  India
                </option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
          </motion.div>

          {/* Street Address */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <label
              htmlFor="street-address"
              className="block text-sm font-semibold"
            >
              Street Address
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="streetAddress"
                id="street-address"
                placeholder="123, ABC Street"
                value={formData.streetAddress}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 ${
                  isDarkMode
                    ? "bg-gray-800 text-white outline-gray-600"
                    : "bg-white text-gray-900 outline-gray-300"
                } placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600`}
              />
              {errors.streetAddress && (
                <p className="text-red-500 text-sm">{errors.streetAddress}</p>
              )}
            </div>
          </motion.div>

          {/* State, Postal Code */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label
              htmlFor="state-postal"
              className="block text-sm font-semibold"
            >
              State/Province, Postal Code
            </label>
            <div className="mt-2.5 grid grid-cols-2 gap-4">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="State/Province"
                value={formData.state}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 ${
                  isDarkMode
                    ? "bg-gray-800 text-white outline-gray-600"
                    : "bg-white text-gray-900 outline-gray-300"
                } placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600`}
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
              <input
                type="text"
                name="postalCode"
                id="postal-code"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base outline outline-1 ${
                  isDarkMode
                    ? "bg-gray-800 text-white outline-gray-600"
                    : "bg-white text-gray-900 outline-gray-300"
                } placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600`}
              />
              {errors.postalCode && (
                <p className="text-red-500 text-sm">{errors.postalCode}</p>
              )}
            </div>
          </motion.div>

          {/* Address Type - Radio Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <label className="block text-sm font-semibold">Address Type</label>
            <div className="mt-2.5">
              <label>
                <input
                  type="radio"
                  name="addressType"
                  value="home"
                  checked={formData.addressType === "home"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                Home
              </label>
              <p className="text-sm text-gray-600">
                Select if this is your home address.
              </p>

              <label className="mt-2">
                <input
                  type="radio"
                  name="addressType"
                  value="work"
                  checked={formData.addressType === "work"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                Work
              </label>
              <p className="text-sm text-gray-600">
                Select if this is your work address.
              </p>

              <label className="mt-2">
                <input
                  type="radio"
                  name="addressType"
                  value="other"
                  checked={formData.addressType === "other"}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                Other
              </label>
              <p className="text-sm text-gray-600">
                Select if this is an alternative address.
              </p>
            </div>
          </motion.div>

          {/* Interests - Checkboxes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <label className="block text-sm font-semibold">Interests</label>
            <div className="mt-2.5">
              <label>
                <input
                  type="checkbox"
                  name="interests"
                  value="coding"
                  checked={formData.interests.includes("coding")}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                Coding
              </label>
              <p className="text-sm text-gray-600">
                Select if you are interested in coding.
              </p>

              <label className="mt-2">
                <input
                  type="checkbox"
                  name="interests"
                  value="gaming"
                  checked={formData.interests.includes("gaming")}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                Gaming
              </label>
              <p className="text-sm text-gray-600">
                Select if you are interested in gaming.
              </p>

              <label className="mt-2">
                <input
                  type="checkbox"
                  name="interests"
                  value="sports"
                  checked={formData.interests.includes("sports")}
                  onChange={handleChange}
                  className="text-indigo-600"
                />
                Sports
              </label>
              <p className="text-sm text-gray-600">
                Select if you are interested in sports.
              </p>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <button
              type="submit"
              className="w-full py-3 text-white bg-indigo-600 rounded-md mt-4"
            >
              Submit
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Projects;
