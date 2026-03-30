import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({
  totalCart,
  handleOpenCartSection,
  handleOpenProductsSection,
  handleOpenPricingSection,
  handleOpenGetStartedSection,
}) => {
  return (
    <div className="navbar bg-base-100 container mx-auto py-9 border-none shadow-none">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 border-none shadow-none"
          >
            <li className="font-semibold text-[#101727FF]">
              <button type="button" onClick={handleOpenProductsSection}>
                Products
              </button>
            </li>
            <li className="font-semibold text-[#101727FF]">
              <a>Features</a>
            </li>
            <li className="font-semibold text-[#101727FF]">
              <button type="button" onClick={handleOpenPricingSection}>
                Pricing
              </button>
            </li>
            <li className="font-semibold text-[#101727FF]">
              <a>Testimonials</a>
            </li>
            <li className="font-semibold text-[#101727FF]">
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <p className="bg-linear-to-b from-[#a139f6] to-[#7504fe] text-transparent bg-clip-text text-2xl font-bold">
          DigiTools
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-8">
          <li className="font-semibold text-[#101727FF]">
            <button type="button" onClick={handleOpenProductsSection}>
              Products
            </button>
          </li>
          <li className="font-semibold text-[#101727FF]">
            <a>Features</a>
          </li>
          <li className="font-semibold text-[#101727FF]">
            <button type="button" onClick={handleOpenPricingSection}>
              Pricing
            </button>
          </li>
          <li className="font-semibold text-[#101727FF]">
            <a>Testimonials</a>
          </li>
          <li className="font-semibold text-[#101727FF]">
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <button
          type="button"
          className="relative inline-block cursor-pointer"
          onClick={handleOpenCartSection}
        >
          <CiShoppingCart className="text-3xl cursor-pointer" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalCart.length}
          </span>
        </button>

        <button
          className="cursor-pointer"
          onClick={handleOpenGetStartedSection}
        >
          Login
        </button>
        <button
          style={{ fontFamily: "Inter, sans-serif" }}
          className="bg-linear-to-r from-[#4F39F6] to-[#7b47e3] font-semibold text-white rounded-full px-4 py-3 cursor-pointer hover:-translate-y-2 transition-all duration-500 mt-4 hover:scale-95"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
