import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../public/Logo.png";
import Search from "../../../public/Search.png";
import Mail from "../../../public/mail.png";
import Profile from "../../../public/profile.png";
import Notification from "../../../public/notification.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Overview" },
    { path: "/contacts", label: "Contacts" },
    { path: "/sales", label: "Sales" },
    { path: "/task", label: "Task" },
    { path: "/report", label: "Report" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Left side - Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="ClientBase" className="mr-2" />
        </Link>

        {/* Middle - Navigation (hidden on mobile) */}
        <nav className="hidden md:flex gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full transition-colors ${
                isActive(link.path)
                  ? "bg-[#14183E] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side - Icons */}
        <div className="flex items-center">
          <button className="hover:bg-gray-100 rounded-full hidden md:block">
            <img src={Search} alt="Search" />
          </button>
          <button className="hover:bg-gray-100 rounded-full hidden md:block">
            <img src={Mail} alt="Messages" />
          </button>
          <button className="hover:bg-gray-100 rounded-full hidden md:block">
            <img src={Notification} alt="Notifications" />
          </button>
          <img src={Profile} alt="Profile" />

          {/* Mobile menu button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img src="/menu-icon.png" alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-left transition-colors ${
                  isActive(link.path)
                    ? "bg-[#14183E] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4 mt-4 pb-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <img src={Search} alt="Search" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <img src={Mail} alt="Messages" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <img src={Notification} alt="Notifications" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
