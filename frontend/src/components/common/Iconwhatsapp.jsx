import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Iconwhatsapp = () => {
  return (
    <div>
       <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
    </div>
  )
}

export default Iconwhatsapp
