import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myImage from './311257867_795413988242978_3146148854823656281_n.jpeg'; 


function Header() {

    document.body.style.overflow = 'hidden';
  const [isTextLoaded, setTextLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextLoaded(true);
    }, 10);
  }, []);

  return (
    <header className="h-screen w-screen bg-black text-white">
      <div className="flex justify-between items-center h-full">
        <div className="w-1/2">
          <div className={` ml-28 w-96 transition-transform duration-1000 ${isTextLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
            <img src={myImage} alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="w-1/2">
          <div className={`ml-8 transition-transform duration-1000 ${isTextLoaded ? 'translate-x-0' : '-translate-y-full'}`}>
            <h1 className="text-5xl font-semibold">
              Hi, I'm <span className="text-blue-500">Jackson Doumith.</span>
              A Web Developer.
            </h1>
            <p className="text-gray-300 mt-9 text-3xl">
              I'm a Web Developer, I love to create beautiful and functional websites.
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:px-2 [&.active]:text-black/90 [&.active]:text-neutral-200 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 mt-7"
                data-te-nav-link-ref
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

