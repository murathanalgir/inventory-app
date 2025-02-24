"use client";
import React from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      {/* TOP LOGO */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">MASTOCK</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hoveR:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-gros mt-8">{/* link comes here */}</div>

      {/* footer */}
      <div>
        <p className="text-center text-xs text-gray-500">&copy; 2025 MASTOCK</p>
      </div>
    </div>
  );
};

export default Sidebar;
