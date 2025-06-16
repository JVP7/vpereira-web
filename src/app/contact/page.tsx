/* src/app/components/ContactPage.tsx */
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

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

  /* --------------------------- handlers ---------------------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Fail");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  /* ----------------------------- ui ------------------------------- */
  return (
    <div className="container max-w-7xl mx-auto py-20">
      {/* heading */}
      <motion.h1
        variants={fadeInDown}
        initial="initial"
        animate="animate"
        className="text-4xl font-bold mb-20 text-center"
      >
        Contact <span className="text-primary">John</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* info col */}
        <motion.div
          className="space-y-8"
          variants={slideInLeft}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-2xl font-semibold mb-4"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-[#8892B0] md:w-2/3"
          >
            I&apos;m always open to new opportunities, collaborations, or simply
            connecting. Feel free to reach out!
          </motion.p>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            {/* email row */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
            >
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <Link
                  href="mailto:john@vpereira.com"
                  className="text-[#8892B0] hover:text-primary"
                >
                  john@vpereira.com
                </Link>
              </div>
            </motion.div>

            {/* location row */}
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
            >
              <FaMapMarkedAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-[#8892B0]">Columbus &amp; Akron, OH</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* form col */}
        <motion.div
          className="bg-white dark:bg-[#1c2841]/50 p-6 rounded-lg shadow-md"
          variants={slideInRight}
          initial="initial"
          animate="animate"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            {/* name */}
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-black dark:border-gray-700 bg-white dark:bg-dark text-black dark:text-[#8892B0] placeholder-[#8892B0] dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </motion.div>

            {/* email */}
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-black dark:border-gray-700 bg-white dark:bg-dark text-black dark:text-[#8892B0] placeholder-[#8892B0] dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </motion.div>

            {/* message */}
            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-black dark:border-gray-700 bg-white dark:bg-dark text-black dark:text-[#8892B0] placeholder-[#8892B0] dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </motion.div>

            {/* submit */}
            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                className="text-green-500 text-center"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                className="text-red-500 text-center"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
