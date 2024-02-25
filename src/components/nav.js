import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" z-30 relative flex w-full flex-nowrap items-center justify-between bg-black text-white shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="mx-2">
          <a className="text-xl text-neutral-100" href="#">JacksonPortfolio</a>
        </div>

        <button
          className="block border-0 bg-transparent px-2 text-neutral-300 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div className={`absolute top-full left-0 w-full bg-neutral-800 lg:relative lg:flex lg:w-auto lg:bg-transparent lg:py-0 lg:px-0 ${isOpen ? '' : 'hidden'}`} id="navbarSupportedContent10" data-te-collapse-item>
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
          <Link
                to="/profile"
                className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                data-te-nav-link-ref
              >
                Profile
              </Link>
              <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
              <Link
                to="/contact" 
                className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                data-te-nav-link-ref
              >
                Contact
              </Link>
            </li>
            
            <Link
                to="/about" 
                className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200"
                data-te-nav-link-ref
              >
                About
              </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
