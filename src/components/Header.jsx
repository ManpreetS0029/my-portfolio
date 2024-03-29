import { Link, NavLink } from 'react-router-dom';
import Switcher from './Switcher';

function Header() {
  return (
    <>
      <div className="relative w-full h-24 border-b bg-white dark:bg-black dark:border-gray-700">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span className="text-xl font-bold dark:text-white">
              My Portfolio
            </span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900 dark:text-white"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <Switcher />
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
