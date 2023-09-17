"use client"
import { useState, useEffect } from "react"

export default function LoginNav() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
      <div class="absolute z-10 h-32 w-full bg-gradient-to-b from-black to-transparent">
        <nav class={`transition-all 
    ${scrolling ? "bg-slate-950/75 backdrop-blur-sm shadow-md" : "bg-transparent"} fixed w-full z-20 top-0 left-0 `}>
          <div class="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" class="flex items-center">
              <img src="/images/maxlogo.webp" class="w-auto h-6 md:ml-10" alt="HBO Logo" />
            </a>
            <div class="flex md:order-2">
            {/* FIX THIS LIGHT GRAY   */}
            <button type="button" class="text-white bg-transparent hover:bg-gray-300 hover:bg-opacity-5 font-medium rounded-lg text-base px-4 py-2 text-center md:mr-10">Sign Up Now</button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              </ul>
            </div>
          </div>
        </nav>
      </div>
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