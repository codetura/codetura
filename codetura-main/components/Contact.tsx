"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { CheckCircle2, X } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      await emailjs.sendForm(
        "service_jqglug9",
        "template_ddk4xih",
        form,
        "hkqU5xd27UWiOZ8ct"
      );
      form.reset();
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="pt-32 px-4 sm:px-6 lg:px-8 text-white"
        style={{
          background:
            "linear-gradient(90deg, #061b3a 0%, #0c324f 50%, #0b6149 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
              <p className="text-white/70">
                Whatever your goal – we’ll help you get there.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-white/70 mt-1" size={20} />
              <div>
                <h4 className="font-semibold">Our Address</h4>
                <address className="not-italic text-white/70 text-sm">
                  CodeTura, Pvt Ltd,  
                  <br /> Colombo, Sri Lanka
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-white/70 mt-1" size={20} />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <a
                  href="mailto:codetura.info@gmail.com"
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  codetura.info@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white/5 p-6 rounded-xl shadow-xl space-y-6 backdrop-blur-md"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/30 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full py-3 px-6 bg-gradient-to-r from-[#061b3a] via-[#0c324f] to-[#0b6149] text-white rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {formStatus === "success" && (
              <div className="mt-4 flex items-center gap-2 text-green-400 bg-green-900/30 p-3 rounded-md">
                <CheckCircle2 className="w-5 h-5" />
                <p className="text-sm">Message sent successfully!</p>
              </div>
            )}

            {formStatus === "error" && (
              <div className="mt-4 flex items-center gap-2 text-red-400 bg-red-900/30 p-3 rounded-md">
                <X className="w-5 h-5" />
                <p className="text-sm">Failed to send message. Please try again.</p>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer
  className="bg-[#0c324f] text-white py-4 px-4 sm:px-6 lg:px-8"
  style={{
    background: "linear-gradient(90deg, #061b3a 0%, #0c324f 50%, #0b6149 100%)",
  }}
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
    <p className="text-xs text-center md:text-left">
      &copy; {new Date().getFullYear()} CodeTura. All rights reserved.
    </p>
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/company/codetura-innovation-technology/?lipi=urn%3Ali%3Apage%3Acompanies_company_index%3Bf2b111ca-5801-4c06-ab12-36de6e46e7ff"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://www.facebook.com/share/1Amz6qd8Ug/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaFacebook size={20} />
      </a>
      <a
        href="https://www.instagram.com/codetura.solutions/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-400"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://x.com/codetura_Team"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-400"
      >
        <FaTwitter size={20} />
      </a>
    </div>
  </div>
</footer>

    </>
  );
};

export default Contact;