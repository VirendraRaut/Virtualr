import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="VirtualR logo" />
            <span className="text-xl tracking-tight text-white">VirtualR</span>
          </div>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white hover:text-gray-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Sign In and Sign Up */}
          <div className="hidden lg:flex space-x-12 justify-center items-center">
            <a
              href="#"
              className="px-3 py-2 border rounded-md text-white border-white hover:bg-gray-800"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-3 rounded-md text-white"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Items */}
        {mobileDrawerOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-neutral-900 z-40 shadow-lg">
            <ul className="flex flex-col items-start p-4 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-white hover:text-gray-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Mobile Sign In and Create Account Buttons */}
              <div className="space-y-4 w-full">
                <a
                  href="#"
                  className="block px-3 py-2 border rounded-md text-center text-white border-white hover:bg-gray-800"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="block bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-3 rounded-md text-center text-white"
                >
                  Create an account
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
