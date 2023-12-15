// Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[rgba(0,0,0,0.1)] p-4 ,">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-black text-lg font-bold">
          G.Report System
        </Link>

        <div className=" lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/home"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
            >
              Home
            </Link>
            {
              <Link
                to="/tutors"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
              >
                Tutors
              </Link>
            }
            {
              <Link
                to="/dashboard"
                className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
              >
                Dashboard
              </Link>
            }

            <Link
              to="/missinggrade"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
            >
              Missing Grade
            </Link>
            <Link
              to="/gradereport"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
            >
              Grade Report
            </Link>

            <Link
              to="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400 mr-4"
            >
              Login
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
