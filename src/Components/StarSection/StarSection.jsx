import React from "react";

const StarSection = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#7b47e3] grid  gap-20 md:flex md:gap-0 justify-around items-center py-16 ">
      <div className="text-center">
        <h2 className="text-white text-7xl font-extrabold">50K+</h2>
        <p className="text-white text-2xl font-medium">Active Users</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex divider divider-horizontal before:bg-white after:bg-white"></div>

        <div className="text-center">
          <h2 className="text-white text-7xl font-extrabold">200+</h2>
          <p className="text-white text-2xl font-medium">Premium Tools</p>
        </div>

        <div className="hidden md:flex divider divider-horizontal before:bg-white after:bg-white"></div>
      </div>

      <div className="text-center">
        <h2 className="text-white text-7xl font-extrabold">4.9</h2>
        <p className="text-white text-2xl font-medium">Rating</p>
      </div>
    </div>
  );
};

export default StarSection;
