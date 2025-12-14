import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuActive(false);

  return (
    <div
      className={`fixed w-full bg-white z-50 ${
        scrolled ? "border-b border-stone-200" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <h1 className="text-3xl font-bold">Logo.</h1>

          {/* Menu */}
          <div
            className={`absolute md:static top-16 left-0 w-full md:w-auto
            bg-white md:bg-transparent
            flex flex-col md:flex-row gap-8 text-center
            transition-all duration-300
            ${
              menuActive
                ? "opacity-100 visible"
                : "opacity-0 invisible md:visible md:opacity-100"
            }`}
          >
            <NavLink to="/" onClick={closeMenu}>
              Beranda
            </NavLink>
            <NavLink to="/About" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/Sosmed" onClick={closeMenu}>
              Client
            </NavLink>
            <NavLink to="/Contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuActive(!menuActive)}
          >
            <i className="ri-menu-3-line ri-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
