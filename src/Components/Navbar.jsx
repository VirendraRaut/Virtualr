import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-12 justify-center items-center">
            <a href="#" className="px-3 py-2 border rounded-md">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
