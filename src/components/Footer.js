import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-start space-x-8 mb-6 py-10">
          <a href="#" aria-label="Facebook" className="text-gray-400 h-4 hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
          <a href="#" className="hover:underline">Audio Description</a>
          <a href="#" className="hover:underline">Help Centre</a>
          <a href="#" className="hover:underline">Gift Cards</a>
          <a href="#" className="hover:underline">Media Centre</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Legal Notices</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

      

        
        <div className="text-center text-sm mt-8 font-mono opacity-60">
          <p>Netflix-AI Developed by Kiran</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
