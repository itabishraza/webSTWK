import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F3D1BF] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E8C6B2]">

            <h3 className="text-3xl font-bold text-[#391400] mb-8">
              Get In Touch
            </h3>

            <form className="space-y-5">

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-[#E8C6B2] rounded-lg p-4 outline-none focus:border-[#EF6D58]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-[#E8C6B2] rounded-lg p-4 outline-none focus:border-[#EF6D58]"
              />

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full border border-[#E8C6B2] rounded-lg p-4 outline-none resize-none focus:border-[#EF6D58]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#EF6D58] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#E05A45] transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}
          <div>

            <p className="text-[#EF6D58] uppercase tracking-[4px] text-lg mb-4">
              Contact
            </p>

            <h2 className="text-[#391400] text-4xl md:text-6xl font-bold mb-6">
              Let's Work
              <br />
              Together
            </h2>

            <p className="text-[#6B4F45] leading-8 mb-10">
              Have a project in mind or need a website?
              Feel free to reach out. I'm always open to discussing
              new opportunities, freelance work, and exciting ideas.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EF6D58] flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>

                <span className="text-[#391400] font-medium">
                  Gurgaon, Haryana, India
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EF6D58] flex items-center justify-center">
                  <FaPhoneAlt className="text-white" />
                </div>

                <span className="text-[#391400] font-medium">
                  +91 8368397561
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#EF6D58] flex items-center justify-center">
                  <FaEnvelope className="text-white" />
                </div>

                <span className="text-[#391400] font-medium">
                  webstwk@gmailc.com
                </span>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#EF6D58] flex items-center justify-center hover:scale-110 transition"
              >
                <FaGithub className="text-white text-lg" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#EF6D58] flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedin className="text-white text-lg" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}