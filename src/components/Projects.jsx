import React, { forwardRef, useState } from "react";
import { motion } from "framer-motion";

const Projects = forwardRef((props, ref) => {
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

  const [errors, setErrors] = useState({
    name: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked,
      },
    }));
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: value,
      },
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate required fields
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.streetAddress)
      newErrors.streetAddress = "Street Address is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.state) newErrors.state = "State/Province is required.";
    if (!formData.pinCode) newErrors.pinCode = "Pin Code is required.";

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-10 w-full overflow-hidden flex flex-col items-center"
      id="Projects"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl font-bold mb-4 text-center"
      >
        Your{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Details
        </span>
      </motion.h1>
      <p className="text-center text-gray-500 mb-6 max-w-80 mx-auto text-lg">
        Providing Precision, Delivering Excellence – Share Your Details
      </p>

      {/* Address Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </motion.div>

        {/* Country */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label
            htmlFor="country"
            className="block text-lg font-semibold text-gray-900"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country}</p>
          )}
        </motion.div>

        {/* Street Address */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label
            htmlFor="street-address"
            className="block text-lg font-semibold text-gray-900"
          >
            Street Address
          </label>
          <input
            type="text"
            name="streetAddress"
            id="street-address"
            placeholder="123, ABC Street"
            value={formData.streetAddress}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
          {errors.streetAddress && (
            <p className="text-red-500 text-sm">{errors.streetAddress}</p>
          )}
        </motion.div>

        {/* City, State/Province, Pin Code */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-lg font-semibold text-gray-900"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-lg font-semibold text-gray-900"
              >
                State/Province
              </label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="State/Province"
                value={formData.state}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="pin-code"
                className="block text-lg font-semibold text-gray-900"
              >
                Pin Code
              </label>
              <input
                type="text"
                name="pinCode"
                id="pin-code"
                placeholder="Pin Code"
                value={formData.pinCode}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
              {errors.pinCode && (
                <p className="text-red-500 text-sm">{errors.pinCode}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </motion.div>

        {/* Save Button */}
        <motion.div
          className="mt-6 flex items-center justify-end gap-x-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            type="button"
            className="text-lg font-semibold text-gray-900"
            onClick={() => alert("Cancelled")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            className="rounded-md bg-indigo-600 px-6 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Save
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
});

export default Projects;
