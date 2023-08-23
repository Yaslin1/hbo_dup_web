"use client"
import { useState, useEffect } from "react"

export default function LoginNav () {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div>
    <nav className= {`transition-all 
    ${scrolling ? "bg-slate-950/75 backdrop-blur-sm" : "bg-pink-500"} fixed w-full z-20 top-0 left-0 border-b border-gray-200`}>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" className="flex items-center">
          <img src="/images/maxlogo.webp" className="w-auto h-6 ml-10" alt="HBO Logo"/>
      </a>
      <div className="flex md:order-2">
          <button type="button" className="text-white bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-10">Sign Up</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          
        </ul>
      </div>
      </div>
    </nav>
  </div>
  )
}

/*
nav/top
background: linear-gradient(rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0) 100%);


*/


      // backgroundImage: {
      //   'svg-background': 'url("public/images/hbobackground.svg")',
      // },