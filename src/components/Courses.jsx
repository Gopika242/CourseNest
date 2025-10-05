import { motion } from "framer-motion";

const courses = [
  { name: "UI/UX Design", color: "bg-purple-600", img: "src/images/ux.png" },
  { name: "Full Stack Development", color: "bg-green-600", img: "src/images/full-stack-developer-icon.png" },
  { name: "Software Testing", color: "bg-red-600", img: "src/images/software-testing.png" },
  { name: "Data Science", color: "bg-[#294095]", img: "src/images/8932269.png" },
];

const Courses = () => {
  return (
    <div id="Courses" className="relative bg-black text-white p-8 flex flex-col gap-8 w-full overflow-hidden">
      {/* Animated curved lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6FD8" />
            <stop offset="100%" stopColor="#3813C2" />
          </linearGradient>
          <linearGradient id="gradB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00DBDE" />
            <stop offset="100%" stopColor="#FC00FF" />
          </linearGradient>
          <linearGradient id="gradC" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD200" />
            <stop offset="100%" stopColor="#F7971E" />
          </linearGradient>
        </defs>

        <motion.path
          d="M 0 200 Q 400 100 800 200 T 1600 200"
          stroke="url(#gradA)"
          strokeWidth="3"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path
          d="M 0 350 Q 400 250 800 350 T 1600 350"
          stroke="url(#gradB)"
          strokeWidth="2.5"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path
          d="M 0 500 Q 400 400 800 500 T 1600 500"
          stroke="url(#gradC)"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
        />
      </svg>

      {/* Floating colorful bubbles */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-30"
        animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-16 right-20 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 15, 0], x: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-500 rounded-full blur-2xl opacity-30"
        animate={{ y: [0, -25, 0], x: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold text-center relative z-10"
      >
        Browse Top Essential Career Courses
      </motion.h1>

      {/* Course Cards */}
      <div className="relative z-10 flex justify-evenly flex-wrap gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.7 }}
            className={`${course.color} p-4 w-60 rounded-2xl text-center shadow-lg`}
          >
            <img
              src={course.img}
              alt={course.name}
              className="w-20 h-20 mx-auto mb-3"
            />
            <h1 className="text-lg font-semibold">{course.name}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
