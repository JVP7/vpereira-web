"use client";
import { useState } from "react";
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
      if(!res.ok) throw new Error("Fail");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  return <><div className="page-heading wrap"><p className="eyebrow">SAY HELLO</p><h1>Get in touch<span className="accent">.</span></h1></div><div className="contact-layout wrap"><div className="contact-info"><h2>Contact John</h2><p>I’m always open to new opportunities, collaborations, or simply connecting. Feel free to reach out!</p><dl className="contact-details"><dt>EMAIL</dt><dd><a href="mailto:john@vpereira.com">john@vpereira.com</a></dd><dt>LOCATION</dt><dd>Columbus &amp; Akron, OH</dd></dl></div><form className="contact-form" onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required />
    <label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
    <label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required />
    <button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending…" : "Send message"}</button>
    <div role="status" aria-live="polite" className="form-status">{status === "success" && "Message sent successfully!"}{status === "error" && <p className="form-error">Failed to send message. Please try again, or email <a href="mailto:john@vpereira.com">john@vpereira.com</a>.</p>}</div>
  </form></div></>;
};
export default ContactPage;
