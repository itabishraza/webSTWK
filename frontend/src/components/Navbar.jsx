import { useState } from "react";
import logostwk from "../assets/logostwk.svg";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className=" top-0 left-0 w-full z-50 bg-[#22233b] text-white px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logostwk}
              alt="STWK Logo"
              className="h-20 md:h-28 object-contain"
            />

            <h1 className="text-2xl md:text-3xl font-space font-bold">
              webSTWK
            </h1>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-16 text-lg font-inter">

            <li>
              <a
                href="#about"
                className="hover:text-orange-500 transition"
              >
                About
              </a>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <a
                href="#services"
                className="flex items-center gap-1 hover:text-orange-500 transition"
              >
                Services
                <span className="text-xs">▾</span>
              </a>

              <div
                className="absolute left-0 top-full mt-2 w-72
                bg-[#36375e] rounded-lg shadow-xl
                opacity-0 invisible translate-y-2
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all duration-300
                z-50"
              >
                <a
                  href="#web-development"
                  className="block px-5 py-3 hover:bg-orange-500 rounded-t-lg"
                >
                  🌐 Web Development
                </a>

                <a
                  href="#website-redesign"
                  className="block px-5 py-3 hover:bg-orange-500"
                >
                  🎨 Website Redesign
                </a>

                <a
                  href="#maintenance"
                  className="block px-5 py-3 hover:bg-orange-500 rounded-b-lg"
                >
                  🛠 Website Maintenance
                </a>
              </div>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-orange-500 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#blog"
                className="hover:text-orange-500 transition"
              >
                Blog
              </a>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <button
            className="hidden md:block border border-gray-500 px-8 py-3 rounded-md
            hover:bg-orange-500 hover:border-orange-500 transition"
          >
            CONTACT
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-[#2d2f4b] rounded-xl p-5 space-y-4">

            <a
              href="#about"
              className="block hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            {/* Mobile Services */}
            <div>

              <button
                className="flex justify-between items-center w-full hover:text-orange-500"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <span>{servicesOpen ? "▴" : "▾"}</span>
              </button>

              {servicesOpen && (
                <div className="ml-5 mt-3 space-y-3">

                  <a
                    href="#web-development"
                    className="block hover:text-orange-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    🌐 Web Development
                  </a>

                  <a
                    href="#website-redesign"
                    className="block hover:text-orange-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    🎨 Website Redesign
                  </a>

                  <a
                    href="#maintenance"
                    className="block hover:text-orange-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    🛠 Website Maintenance
                  </a>

                </div>
              )}

            </div>

            <a
              href="#projects"
              className="block hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#blog"
              className="block hover:text-orange-500"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>

            <button
              className="w-full border border-gray-500 py-3 rounded-md
              hover:bg-orange-500 hover:border-orange-500 transition"
            >
              CONTACT
            </button>

          </div>
        )}
      </div>
    </nav>
  );
}