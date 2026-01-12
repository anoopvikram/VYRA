import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#111] text-gray-400 pt-20 pb-10">
      
      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-10 text-xl text-gray-300">
        <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
        <a href="#" className="hover:text-white transition"><FaTwitter /></a>
        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
        <a href="#" className="hover:text-white transition"><FaYoutube /></a>
        <a href="#" className="hover:text-white transition"><FaPinterestP /></a>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center text-sm mb-12">
        
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold">Tripzy</p>
          <a href="#">About Us</a>
          <a href="#">Our Story</a>
          <a href="#">Sustainability</a>
          <a href="#">Press</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold">Help</p>
          <a href="#">Customer Support</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQs</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold">Careers</p>
          <a href="#">Open Roles</a>
          <a href="#">Internships</a>
          <a href="#">Culture</a>
          <a href="#">Apply</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold">Contact</p>
          <p>Tripzy Street, MG Road</p>
          <p>Bangalore, India</p>
          <p>support@tripzywear.com</p>
          <p>+91 98765 43210</p>
        </div>

      </div>

      {/* Description */}
      <p className="text-center max-w-3xl mx-auto text-sm text-gray-500 mb-8">
        Tripzy creates premium streetwear designed for everyday expression.
        Built with quality fabrics, minimal design, and a bold mindset.
        All content on this site is the property of Tripzy Wear Pvt Ltd.
      </p>

      {/* Brand */}
      <p className="text-center text-3xl font-black text-white tracking-wider mb-4">
        TRIPZY
      </p>

      <p className="text-center text-gray-500 text-sm">
        India | ₹ INR
      </p>

    </footer>
  );
};
