import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" transition-all duration-200 hover:bg-[#e8f6ed] font-bold text-sm shadow-2xl shadow-black bg-white text-teal-900 px-6 py-2 rounded"
    >
      {title}
    </button>
  );
};

export default Button;
