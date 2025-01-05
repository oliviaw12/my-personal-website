import React, { useState, useRef } from "react";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import styles from "@/css/contact.module.css";
import { useTheme } from "../context/ThemeContext";

export default function ContactMe() {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("Sending...");

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please don't leave a field empty!");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      );
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className={`${styles.contactContainer} ${theme === "synthwave" ? styles.synthwave : styles.light}`}>
        <div className="max-w-5xl mx-auto">
          <h1 className={styles.contactTitle}>Contact Me</h1>

          <div className={styles.contactForm}>
            <h2 className={styles.contactSubTitle}>Hello! Please leave me a message here.</h2>

            <form onSubmit={sendEmail} ref={form}>
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
                  className={`${styles.inputField}`}
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
                  className={`${styles.inputField}`}
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
                  className={`${styles.textareaField}`}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>

            {formStatus && (
              <p
                className={`${styles.statusMessage} ${
                  formStatus.includes("success")
                    ? styles.statusSuccess
                    : styles.statusError
                }`}
              >
                {formStatus}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
