"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      console.error("Error sending message:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-20 text-center">
        Contact <span className="text-primary">John</span>
      </h1>

      {/* contact section with grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-[#8892B0] md: w-2/3">
            I&lsquo;m always open to new opportunities, collaborations, or
            simply connecting. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Email</h3>
                <Link
                  href="mailto:john@vpereira.com"
                  className="text-[#8892B0] hover:text-primary"
                >
                  john@vpereira.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkedAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">Location</h3>
                <p className="text-[#8892B0]">Columbus & Akron, OH</p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                required
                value={formData.name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md border border-black dark:border-gray-700 bg-white dark:bg-dark 
          text-black dark:text-[#8892B0] placeholder-[#8892B0] dark:placeholder-gray-400 focus:ring-2 focus:ring-primary 
          focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-black dark:text-[#cad5e2]"
              >
                Email
              </label>
              <input
                required
                value={formData.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-black dark:border-gray-700 bg-white dark:bg-dark 
          text-black dark:text-[#8892B0] placeholder-[#8892B0] dark:placeholder-gray-400 focus:ring-2 focus:ring-primary 
          focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-black dark:text-[#cad5e2]"
              >
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-md border border-black dark:border-gray-700 bg-white dark:bg-dark 
          text-black dark:text-[#8892B0] placeholder-[#8892B0] dark:placeholder-gray-400 focus:ring-2 focus:ring-primary 
          focus:outline-none focus:border-primary"
              />
            </div>

            <button type="submit" className="w-full btn btn-primary">
              {status === "loading" ? "sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
