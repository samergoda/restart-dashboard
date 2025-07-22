"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import NavLinks from "./nav-links";

export default function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden p-3 bg-blue-700  h-auto  text-white flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <IoClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <NavLinks isOpen={isOpen} />

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
