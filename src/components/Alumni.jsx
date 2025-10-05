import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const alumniData = [
  {
    name: "Stefan Salvatore",
    batch: "2020 - Full Stack Development",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    message:
      "CourseNest gave me the confidence and the skills to become a software engineer. The mentors truly care about our growth.",
    linkedin: "https://linkedin.com/in/stefansalvatore",
  },
  {
    name: "Caroline Forbes",
    batch: "2021 - UI/UX Design",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "The hands-on projects and community were game changers. I’m now working as a product designer at a leading startup!",
    linkedin: "https://linkedin.com/in/carolineforbes",
  },
  {
    name: "David Warner",
    batch: "2019 - Data Science",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    message:
      "CourseNest helped me transition into data science smoothly. The mentorship and peer network are unmatched.",
    linkedin: "https://linkedin.com/in/davidwarner",
  },
  {
    name: "Bonnie Bennett",
    batch: "2022 - Software Testing",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    message:
      "I loved the practical approach of CourseNest. It helped me crack my first QA Engineer role right after graduation!",
    linkedin: "https://linkedin.com/in/bonniebennett",
  },
];

const Alumni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextAlumni();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextAlumni = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
  };

  const prevAlumni = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + alumniData.length) % alumniData.length
    );
  };

  const alumni = alumniData[currentIndex];

  return (
    <div id="Alumni" className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">

      {/* === Animated curved lines background === */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6FD8" />
            <stop offset="100%" stopColor="#3813C2" />
          </linearGradient>
          <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00DBDE" />
            <stop offset="100%" stopColor="#FC00FF" />
          </linearGradient>
          <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD200" />
            <stop offset="100%" stopColor="#F7971E" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 0 200 Q 400 100 800 200 T 1600 200"
          stroke="url(#grad1)"
          strokeWidth="3"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path
          d="M 0 350 Q 400 250 800 350 T 1600 350"
          stroke="url(#grad2)"
          strokeWidth="2.5"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path
          d="M 0 500 Q 400 400 800 500 T 1600 500"
          stroke="url(#grad3)"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
        />
      </svg>

      {/* === Floating bubbles === */}
      <motion.div
        className="absolute top-16 left-20 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0], x: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 25, 0], x: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-25"
        animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Main Alumni Card === */}
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-8 relative z-10">
        Alumni Stories
      </h1>

      <div className="relative z-10 w-full max-w-3xl bg-gray-900 border border-gray-700 rounded-3xl p-10 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 text-center">
        <img
          src={alumni.image}
          alt={alumni.name}
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-md"
        />

        <h2 className="text-2xl font-semibold mt-4">{alumni.name}</h2>
        <p className="text-sm text-blue-400">{alumni.batch}</p>
        <p className="text-gray-400 italic my-4">“{alumni.message}”</p>

        <a
          href={alumni.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 rounded-full text-white font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
        >
          Connect on LinkedIn
        </a>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={prevAlumni}
            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full ml-2 transition"
          >
            <ChevronLeft className="text-white w-5 h-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={nextAlumni}
            className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full mr-2 transition"
          >
            <ChevronRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex mt-6 space-x-2 relative z-10">
        {alumniData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>

      <div className="text-center mt-16 relative z-10">
        <h3 className="text-3xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Want to share your success story?
        </h3>
        <p className="text-gray-400 mt-2">
          Join our alumni network and inspire the next generation of learners.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300">
          Join Alumni Network
        </button>
      </div>
    </div>
  );
};

export default Alumni;
