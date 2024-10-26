import React, { useState } from "react";

const ContactFormCard = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setFormMessage({
          type: "success",
          text: "Form submitted successfully!",
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        const data = await response.json();
        setFormMessage({
          type: "error",
          text: data.message || "Failed to submit form.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormMessage({ type: "error", text: "An unexpected error occurred." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full flex justify-center">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl text-center font-extrabold font-inter text-gray-800 mb-4">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="font-satochi font-semibold text-base text-gray-700">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Write your Name here..."
              required
              className="form_input p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-satochi font-semibold text-base text-gray-700">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="form_input p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="flex flex-col">
            <span className="font-satochi font-semibold text-base text-gray-700">
              Your Message
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your Message here..."
              required
              className="form_textarea p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2 text-sm bg-blue-950 rounded-full text-white"
            >
              {submitting ? `Submitting...` : `Submit`}
            </button>
          </div>
        </form>
        {formMessage && (
          <div
            className={`mt-4 text-center text-${
              formMessage.type === "success" ? "green" : "red"
            }-600`}
          >
            {formMessage.text}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactFormCard;
