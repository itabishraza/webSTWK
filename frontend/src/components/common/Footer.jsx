import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#22233b] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <Link to="/">
              <h2 className="text-3xl font-bold inline-block cursor-pointer">
                webSTWK
              </h2>
            </Link>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[#ff7b61] uppercase tracking-[4px] text-sm mb-6">
              Menu
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="hover:text-white transition"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/#contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#ff7b61] uppercase tracking-[4px] text-sm mb-6">
              Service
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-white transition"
                >
                  Web Development
                </Link>
              </li>

              <li>
                <Link
                  to="/services/website-redesign"
                  className="hover:text-white transition"
                >
                  Website Redesign
                </Link>
              </li>

              <li>
                <Link
                  to="/services/website-maintenance"
                  className="hover:text-white transition"
                >
                  Website Maintenance
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Get Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end gap-4">

            {/* Facebook */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#ff7b61] flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#ff7b61] flex items-center justify-center hover:scale-110 transition"
            >
              <FaTwitter />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#ff7b61] flex items-center justify-center hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">

          <p>
            © {new Date().getFullYear()} <strong>webSTWK</strong>. All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <Link
              to="#"
              className="hover:text-white transition"
            >
              Terms of Use
            </Link>

            <Link
              to="#"
              className="hover:text-white transition ml-16 mr-28"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}