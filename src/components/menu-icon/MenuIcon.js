import React, { useEffect, useRef } from "react";

const MenuIcon = ({ size = 28, className, isOpen, ...props }) => {
  return (
    <div
      className={`menu-icon ${isOpen ? "animate" : ""} ${className}`}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="0" y1="6" x2="20" y2="6" className="line line-1" />
        <line x1="0" y1="12" x2="20" y2="12" className="line line-2" />
        <line x1="0" y1="18" x2="20" y2="18" className="line line-3" />
      </svg>
    </div>
  );
};

export default MenuIcon;
