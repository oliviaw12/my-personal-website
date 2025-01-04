import React, { useState } from "react";
import Navbar from "@/components/navBar";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Sending...");

    try {
      // Assuming you will handle the form submission here, e.g. using an API call
      // Example: await sendContactMessage(formData);

      // Mock submission success
      setTimeout(() => {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      setFormStatus("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-100 text-gray-800 px-8 py-12 transition duration-200 ease-in-out">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mt-16 mb-8 text-center">Contact Me</h1>

          <div className="max-w-lg mx-auto p-10 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-16 ">Hello, please leave your message here:</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {formStatus && (
              <p
                className={`mt-4 text-center ${
                  formStatus.includes("success") ? "text-green-500" : "text-red-500"
                }`}
              >
                {formStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
