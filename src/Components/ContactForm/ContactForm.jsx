import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      await emailjs.send(
        "service_wmr4wsq",
        "template_ygm4asr",
        formData,
        "yaw4EMpi21VXFGX6F"
      );
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Failed to send email. Error: ", error);
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500 focus:outline-none text-gray-800"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500 focus:outline-none text-gray-800" 
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500 focus:outline-none text-gray-800 h-32" 
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-3 text-white py-2 px-4 rounded-md font-semibold transition duration-300 ${
              isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 ml-2 text-red-500 hover:underline"
          >
            Cancel
          </button>
        </form>
        {successMessage && (
          <div className="mt-4 text-green-600">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
