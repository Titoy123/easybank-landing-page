import { useState, useEffect } from "react";
import Hamburger from 'hamburger-react';
import { ButtonInvite } from "./Primary";
export default function Menu() {
    const [isOpen, setOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <div className="flex items-center  justify-between p-6 bg-white z-10 relative lg:justify-around ">
        <LogoImg />
        <div className="relative ml-20 ">
          {windowWidth <= 767 ? (
            <Hamburger toggled={isOpen} toggle={setOpen} />
          ) : null}
          {isOpen && <NavigationLinks />}
        </div>
        <>
        {windowWidth >= 768 ? (
            <DesktopLinks/>
        ): null}
        </>
        <div>
            {windowWidth >= 1024 ? (
              <ButtonInvite/>
            ): null }
        </div>
      </div>
    );
  }

export function LogoImg({className}) {
    return (
        <>
        <img src="/images/logo.svg" alt="Easybank logo" className={className} />
        </>
    )
}

const DesktopLinks = () => {
    return (
        <ul className="flex gap-4  text-sm font-light text-grayish-blue lg:mr-80">
        <li><a href="#" className="custom-border hover:text-dark-blue cursor-pointer">Home</a></li>
        <li><a href="#" className="custom-border hover:text-dark-blue cursor-pointer">About</a></li>
        <li><a href="#" className="custom-border hover:text-dark-blue cursor-pointer">Contact</a></li>
        <li><a href="#" className="custom-border hover:text-dark-blue cursor-pointer">Blog</a></li>
        <li><a href="#" className="custom-border hover:text-dark-blue cursor-pointer">Careers</a></li>
        </ul>
    )
}

const NavigationLinks = () => (
    <ul className="absolute text-sm text-dark-blue top-24 -right-[2rem] font-normal rounded-lg mx-8  px-28 py-8 text-center   bg-very-light-gray p-4 flex flex-col gap-4 shadow-lg drop-shadow-2xl backdrop-saturate-200">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
    </ul>
);
