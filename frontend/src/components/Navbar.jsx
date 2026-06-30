import logostwk from "../assets/logostwk.svg";


export default function Navbar() {
  return (
    <nav className="bg-[#22233b] text-white px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
           <div className="flex items-center">
          <img
               src={logostwk}
               alt="STWK Logo"
               className="h-28 object-contain"
               />
            </div>

          <h1 className="text-3xl font-space font-bold">
            webSTWK
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-16 text-lg font-inter">
          <li>
            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-orange-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-orange-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#blog" className="hover:text-orange-500 transition">
              Blog
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <button className="border border-gray-500 px-8 py-3 rounded-md hover:bg-orange-500 hover:border-orange-500 transition">
          CONTACT
        </button>

      </div>
    </nav>
  );
}