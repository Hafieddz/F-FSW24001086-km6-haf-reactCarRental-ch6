import React from "react";
import menuIcon from "../../assets/icon/icon_menu.svg";
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

function Offcanvas() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center md:hidden ">
        <button onClick={() => setIsOpen(true)}>
          <img src={menuIcon} alt="" />
        </button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <h1 className="font-bold text-2xl my-5"> Car Rental </h1>
        <Drawer.Items>
          <ul className="font-semibold flex flex-col gap-4">
            <li> Our Services </li>
            <li> Why Us </li>
            <li> Testimonial </li>
            <li> FAQ </li>
            <li>
              <button className="bg-green-500 px-4 py-2 rounded-md text-white">
                Register
              </button>
            </li>
          </ul>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default Offcanvas;
