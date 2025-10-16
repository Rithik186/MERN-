import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">NAV-BAR</div>
        <ul className="flex space-x-6">
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">
            HOME
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">
            ABOUT
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">
            CONTACT
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
