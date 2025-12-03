import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message Sent Successfully!");

    // Reset state
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Reset the HTML form
    e.target.reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold text-green-700 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-10">
        Have questions or need help? We'd love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Mail className="text-green-600" size={28} />
            <p className="text-gray-700 text-lg">support@greennest.com</p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Phone className="text-green-600" size={28} />
            <p className="text-gray-700 text-lg">+880 1234-567890</p>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-green-600" size={28} />
            <p className="text-gray-700 text-lg">
              GreenNest HQ, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:border-green-600"
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
