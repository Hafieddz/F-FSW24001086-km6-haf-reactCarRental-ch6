import React from "react";
import Offcanvas from "./Offcanvas";

function Navbar() {
  return (
    <header className="bg-slate-200 h-14 md:px-24 px-8 flex items-center justify-between">
      <h1 className="text-xl font-bold"> Car Rental </h1>
      <div>
        <ul className="gap-8 font-semibold items-center hidden md:flex">
          <li> Our Services </li>
          <li> Why Us </li>
          <li> Testimonial </li>
          <li> FAQ </li>
          <button className="text-white bg-green-600 py-2 px-4 rounded-sm">
            Register
          </button>
        </ul>
        <Offcanvas />
      </div>
    </header>
  );
}

export default Navbar;
