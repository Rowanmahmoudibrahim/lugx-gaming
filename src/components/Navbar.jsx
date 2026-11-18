
import { NavLink, Link } from 'react-router-dom';
import { IMAGES } from '../data/images';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Nav Links Style
  const navLinkStyle = ({ isActive }) =>
    `px-5 ${isScrolled ? 'py-1.5' : 'py-2'} rounded-full text-[15px] font-normal tracking-wide transition-all duration-300 ${
      isActive
        ? 'bg-white/10 text-white font-medium shadow-sm'
        : 'text-white hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header
      className={`bg-[#0071f8] text-white rounded-b-3xl fixed top-0 left-0 w-full z-50 px-5 md:px-10 transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg' : 'py-5'
      }`}
    >
      <div
        className={`max-w-[1320px] mx-auto px-2 md:px-6 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'py-1' : 'py-4'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={IMAGES.logo}
            alt="LUGX Gaming Logo"
            className={`object-contain transition-all duration-300 ${
              isScrolled ? 'h-9' : 'h-11'
            }`}
          />
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document.getElementById("hero")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
            className={navLinkStyle({ isActive: true })}
          >
            Home
          </button>

          <NavLink to="/shop" className={navLinkStyle}>
            Our Shop
          </NavLink>

          <NavLink to="/details" className={navLinkStyle}>
            Product Details
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact Us
          </NavLink>

          {/* Sign In */}
          <Link
            to="/signin"
            className={`ml-2 bg-[#f27880] hover:bg-[#d9535c] text-white px-6 rounded-full text-[15px] font-medium uppercase tracking-wider transition-all duration-300 shadow-sm ${
              isScrolled ? 'py-2' : 'py-2.5'
            }`}
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden text-white p-2 focus:outline-none transition-all duration-300 active:scale-90 cursor-pointer"
        >
          {isOpen ? (
            <X size={28} className="transition-all duration-300 rotate-90" />
          ) : (
            <Menu size={28} className="transition-all duration-300 rotate-0" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mx-4 mt-3 bg-[#f1f1f1] text-gray-700 rounded-2xl shadow-2xl overflow-hidden text-center border border-gray-200 transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[350px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <button
          onClick={() => {
            setIsOpen(false);
            navigate("/");
            setTimeout(() => {
              document.getElementById("hero")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 100);
          }}
          className="w-full py-3.5 font-medium text-[#ee626b] hover:bg-gray-200 transition-all duration-300"
        >
          Home
        </button>

        <Link
          to="/shop"
          onClick={() => setIsOpen(false)}
          className="block py-3.5 font-medium text-gray-700 hover:text-[#0071f8] hover:bg-gray-200 transition-all duration-300"
        >
          Our Shop
        </Link>

        <Link
          to="/details"
          onClick={() => setIsOpen(false)}
          className="block py-3.5 font-medium text-gray-700 hover:text-[#0071f8] hover:bg-gray-200 transition-all duration-300"
        >
          Product Details
        </Link>

        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="block py-3.5 font-medium text-gray-700 hover:text-[#0071f8] hover:bg-gray-200 transition-all duration-300"
        >
          Contact Us
        </Link>

        <Link
          to="/signin"
          onClick={() => setIsOpen(false)}
          className="block py-3.5 font-semibold text-[#ee626b] hover:bg-gray-200 transition-all duration-300"
        >
          SIGN IN
        </Link>
      </div>
    </header>
  );
}
