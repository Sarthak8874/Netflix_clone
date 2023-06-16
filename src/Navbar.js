import React, { useEffect, useState } from "react";
import logo from "./Nav_logo.webp";
import "./Navbar.css";

function Navbar() {
  const [show, handleshow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix Logo" />
    </div>
  );
}

export default Navbar;
