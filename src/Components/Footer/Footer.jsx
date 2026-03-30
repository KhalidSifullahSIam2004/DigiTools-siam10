import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content pt-32 pb-2">
      <div className="grid gap-12 grid-cols-2 md:grid-cols-3 justify-center px-20 lg:grid-cols-5 lg:px-52">
        <div>
          <h2 className="text-2xl font-bold">DigiTools</h2>
          <p>
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <nav className="grid gap-2">
          <h6 className="text-xl font-medium">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>

        <nav className="grid gap-2">
          <h6 className="text-xl font-medium">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>

        <nav className="grid gap-2">
          <h6 className="text-xl font-medium">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>

        <div>
          <h2 className="text-xl font-medium">Social Links</h2>

          <div className="flex gap-3 space-y-4">
            <FaInstagramSquare className="text-4xl rounded-full" />
            <FaFacebookSquare className="text-4xl rounded-full" />
            <FaXTwitter className="text-4xl rounded-full" />
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-gray-800 container mx-auto"></div>
      <div className="grid md:flex justify-between w-full px-20 lg:px-52">
        <p>© 2026 Digitools. All rights reserved.</p>

        <ul className="flex gap-6">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
