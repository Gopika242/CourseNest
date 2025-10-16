import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="Home" className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Colorful moving curved lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00C9FF" />
            <stop offset="100%" stopColor="#92FE9D" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6FD8" />
            <stop offset="100%" stopColor="#3813C2" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD200" />
            <stop offset="100%" stopColor="#F7971E" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 0 300 Q 400 100 800 300 T 1600 300"
          stroke="url(#gradient1)"
          strokeWidth="3"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path
          d="M 0 400 Q 400 200 800 400 T 1600 400"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path
          d="M 0 500 Q 400 300 800 500 T 1600 500"
          stroke="url(#gradient3)"
          strokeWidth="2.5"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
      </svg>

      {/* Animated background blobs */}
      <motion.div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></motion.div>
      <motion.div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Learn Today{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              <br /> Lead Tomorrow
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Learning made easy, exciting, and meaningful—no matter where you start.
          </p>
          <div className="flex space-x-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
            >
              Contact Us
            </motion.button>

            <motion.div whileHover={{ scale: 1.1 }}>
              <h1 className="text-3xl font-bold">50+</h1>
              <p>Career Courses</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h1 className="text-3xl font-bold">1M+</h1>
              <p>Our Students</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section with animated squares */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Animated squares behind image */}
          <motion.div
            className="absolute w-24 h-24 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-30"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            style={{ top: "-20%", left: "-10%" }}
          ></motion.div>
          <motion.div
            className="absolute w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 opacity-25"
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            style={{ bottom: "-15%", right: "-10%" }}
          ></motion.div>
          <motion.div
            className="absolute w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 opacity-20"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            style={{ top: "10%", right: "5%" }}
          ></motion.div>

          {/* Main Image */}
          <motion.img
            src="/istockphoto-1478962894-612x612.jpg"
            alt="E-learning"
            className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover z-10"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
