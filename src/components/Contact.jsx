import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting CourseNest!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="Contact" className="relative bg-black text-white min-h-screen flex flex-col items-center p-10 overflow-hidden">

      {/* === Floating Background Bubbles === */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-2xl opacity-50 z-0"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500 rounded-full blur-2xl opacity-50 z-0"
        animate={{ y: [0, 40, 0], x: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-40 z-0"
        animate={{ y: [0, -20, 0], x: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-28 h-28 bg-purple-500 rounded-full blur-2xl opacity-50 z-0"
        animate={{ y: [0, 25, 0], x: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Page Content === */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-extrabold mb-6 relative z-10"
      >
        Get in Touch with <span className="text-blue-500">CourseNest</span>
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full max-w-6xl relative z-10">
        
        {/* Contact Info */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 w-full md:w-1/2"
        >
          {[
            { icon: <Mail />, label: "Email", value: "support@coursenest.com", color: "text-blue-400" },
            { icon: <Phone />, label: "Phone", value: "+91 98765 43210", color: "text-green-400" },
            { icon: <MapPin />, label: "Location", value: "Kochi, Kerala, India", color: "text-red-400" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-xl transition-all duration-300"
            >
              <div className={`${item.color}`}>{item.icon}</div>
              <div>
                <h2 className="text-lg font-semibold">{item.label}</h2>
                <p className="text-gray-400">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#1a1a1a] rounded-2xl shadow-lg p-8 w-full md:w-1/2 flex flex-col gap-5 hover:shadow-blue-700/40"
        >
          {["name", "email", "message"].map((field, i) => (
            <motion.input
              key={i}
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="p-3 rounded-lg bg-transparent border border-gray-700 focus:border-blue-500 outline-none text-white"
              whileFocus={{ scale: 1.02 }}
            />
          ))}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-500"
          >
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
