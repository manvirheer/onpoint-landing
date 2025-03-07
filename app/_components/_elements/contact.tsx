"use client";

import { useEffect, useState, useRef, FormEvent, ChangeEvent } from "react";
import { SITE_CONFIG } from "@/config/content";

export default function ContactUsSection() {
  const [mounted, setMounted] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.05}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset submit status when user starts typing again
    if (submitStatus) setSubmitStatus(null);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      // Optional: Reset form after successful submission
      // setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden text-gray-700">
      {/* Parallax Background Pattern */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left column: Map & Contact Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:shadow-xl flex-1">
              <iframe
                src={SITE_CONFIG.mapEmbedSrc}
                width="600"
                height="650"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-3/5 lg:h-3/5"
              ></iframe>
              
              {/* Contact Info Card */}
              <div className="p-6 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      {SITE_CONFIG.address}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Details</h3>
                    <p className="text-gray-600">
                      Phone: {SITE_CONFIG.phone}<br />
                      Email: {SITE_CONFIG.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Contact Form */}
          <div className="w-full lg:w-1/2">
            <form 
              onSubmit={handleSubmit} 
              className="bg-white p-8 rounded-lg shadow-lg h-full transform transition-all duration-300 hover:shadow-xl"
            >

<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded">
                  Thank you for your message! We'll be in touch soon.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                  There was a problem sending your message. Please try again.
                </div>
              )}
              
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className={`w-full border ${focusedField === 'name' ? 'border-yellow-500 ring-1 ring-yellow-500' : 'border-gray-300'} p-3 rounded-md transition-all duration-200`}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`w-full border ${focusedField === 'email' ? 'border-yellow-500 ring-1 ring-yellow-500' : 'border-gray-300'} p-3 rounded-md transition-all duration-200`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className={`w-full border ${focusedField === 'message' ? 'border-yellow-500 ring-1 ring-yellow-500' : 'border-gray-300'} p-3 rounded-md transition-all duration-200`}
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-yellow-400' : 'bg-yellow-500 hover:bg-yellow-400'} text-black font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}