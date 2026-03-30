import React from "react";

const WorkFlowSection = () => {
  return (
    <div className="bg-linear-to-r from-[#a139f6] to-[#7504fe] text-white py-40 text-center">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
        Ready to Transform Your Workflow?
      </h2>

      <p className="text-base md:text-lg lg:text-xl mb-8">
        Join thousands of professionals who are already using Digitools to work
        smarter.Start your free trial today.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-white font-semibold text-[#7b47e3] rounded-full px-6 py-3 flex items-center justify-center gap-2 border border-[#7b47e3] hover:bg-linear-to-r from-[#a139f6] to-[#7504fe] hover:text-white cursor-pointer hover:-translate-y-2 transition-all duration-500 mt-4 hover:scale-95">
          Explore Products
        </button>

        <button className="bg-transparent border font-semibold text-white rounded-full px-6 py-3 cursor-pointer hover:text-green-300 hover:-translate-y-2 transition-all duration-500 mt-4 hover:scale-95">
          View Pricing
        </button>
      </div>

      <p className="text-base md:text-lg lg:text-xl mt-8">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default WorkFlowSection;
