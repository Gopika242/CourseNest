import { motion } from "framer-motion";

const About = () => {
  const cards = [
    {
      title: "Who We Are",
      color: "bg-red-200 hover:bg-red-300",
      img: "/education.png",
      desc: "We are a team of passionate developers, educators, and designers dedicated to building intuitive, high-quality e-learning experiences.",
    },
    {
      title: "Our Mission",
      color: "bg-green-200 hover:bg-green-300",
      img: "/shield.png",
      desc: "To empower learners across the globe by offering flexible, affordable, and practical courses that unlock real-world opportunities.",
    },
    {
      title: "Why Choose Us",
      color: "bg-[#7e87e8] hover:bg-[#6b7cde]",
      img: "/success.png",
      desc: "We combine expert-led content, real-world projects, and supportive mentorship to help you grow confidently in your career journey.",
    },
  ];

  return (
    <div id="About" className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center p-10 overflow-hidden">

      {/* === Animated curved colorful lines === */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
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
          d="M 0 250 Q 400 150 800 250 T 1600 250"
          stroke="url(#grad1)"
          strokeWidth="3"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path
          d="M 0 400 Q 400 300 800 400 T 1600 400"
          stroke="url(#grad2)"
          strokeWidth="2.5"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.path
          d="M 0 550 Q 400 450 800 550 T 1600 550"
          stroke="url(#grad3)"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
        />
      </svg>

      {/* === Floating glowing bubbles === */}
      <motion.div
        className="absolute top-10 left-16 w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0], x: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-16 w-32 h-32 bg-pink-500 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 25, 0], x: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-36 left-1/3 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-25"
        animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* === Main Content === */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-6 relative z-10"
      >
        About <span className="text-blue-500">CourseNest</span>
      </motion.h1>

      <p className="text-gray-300 text-center max-w-3xl mb-12 relative z-10">
        At <span className="text-blue-400 font-semibold">CourseNest</span>, we believe education should be accessible,
        engaging, and transformative. Our platform helps learners and professionals upskill with cutting-edge,
        industry-aligned courses.
      </p>

      <div className="relative z-10 flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`${card.color} transition-all duration-500 p-6 rounded-2xl shadow-lg w-72 text-center hover:scale-105`}
          >
            <img src={card.img} alt={card.title} className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-black">{card.title}</h2>
            <p className="text-black text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
