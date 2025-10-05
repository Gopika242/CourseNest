const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex bg-black p-4 text-white z-50 shadow-md">
      <h2 className="font-bold text-xl w-1/2">CourseNest</h2>
      <ul className="flex justify-between w-1/2 items-center space-x-6">
        <li>
          <a href="#Home" className="hover:text-blue-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#About" className="hover:text-blue-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#Alumni" className="hover:text-blue-400 transition-colors">
            Alumni
          </a>
        </li>
        <li>
          <a href="#Courses" className="hover:text-blue-400 transition-colors">
            Courses
          </a>
        </li>
        <li>
          <a href="#Contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white font-semibold px-6 py-3 rounded-full w-fit shadow-lg"
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
