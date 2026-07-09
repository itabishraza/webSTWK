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
            <h2 className="text-3xl font-bold inline-block">
              webSTWK
            </h2>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-[#ff7b61] uppercase tracking-[4px] text-sm mb-6">
              Menu
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#ff7b61] uppercase tracking-[4px] text-sm mb-6">
              Service
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Web Design</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>API Integration</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex md:justify-end gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#ff7b61] flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#ff7b61] flex items-center justify-center hover:scale-110 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
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
            © {new Date().getFullYear()} Tabish Raza. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">
              Terms of Use
            </a>

            <a href="#" className="hover:text-white transition ml-16 mr-28">
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}