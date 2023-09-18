export default function LoginProvider() {
  return (
    <div className="flex min-h-full bg-svg-background flex-col justify-center ">
      <div className="flex min-h-full flex-col justify-start md:p-14 min-[440px]:bg-gray-300 min-[440px]:bg-opacity-5 rounded-lg mt-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl md:text-3xl font-medium leading-9 tracking-tight text-white">Connect Your Provider</h2>
          <p className="mt-2 mb-8 md:mb-14 text-center text-white text-base font-light">Select your internet, mobile, or TV provider below to connect your subscription.</p>
        </div>
        <div className="grid cols-2 gap-2 md:grid-cols-3 md:gap-3 justify-center ">
          <button
            type="button"
            className="col-start-1 inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/AT&T-transparent.svg" className="w-auto" alt="AT&T Logo"/>
          </button>
          <button
            type="button"
            className="col-start-2 inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/Cox-transparent.svg" className="w-auto" alt="Cox Logo"/>
          </button>
          <button
            type="button"
            className="col-start-1 md:col-start-3 inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/Cricket-transparent.svg" className="w-auto" alt="Cricket Logo"/>
          </button>
          <button
            type="button"
            className="inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/DIRECTV-transparent.svg" className="w-auto" alt="DirectTV Logo"/>
          </button>
          <button
            type="button"
            className="col-start-1 md:col-start-2 inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/DISH-transparent.svg" className="w-auto" alt="Dish Logo"/>
          </button>
          <button
            type="button"
            className="inline-block md:col-start-3 rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/Hulu-transparent.svg" className="w-auto" alt="Hulu Logo"/>
          </button>
          <button
            type="button"
            className="col-start-1 inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 hover:border-2 hover:border-white border-transparent">
            <img src="images/icons/Optimum-transparent.svg" className="w-auto" alt="Optimum Logo"/>
          </button>
          <button
            type="button"
            className="inline-block md:col-start-2 rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/PrimeVideo-transparent.svg" className="w-auto" alt="Prime Video Logo"/>
          </button>
          <button
            type="button"
            className="col-start-1 md:col-start-3 inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/Spectrum-transparent.svg" className="w-auto" alt="Spectrum Logo"/>
          </button>
          <button
            type="button"
            className="inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/Verizon-transparent.svg" className="w-auto" alt="Verizon Logo"/>
          </button>
          <button
            type="button"
            className="col-start-1 md:col-start-2 inline-block rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/Xfinity-transparent.svg" className="w-auto" alt="Xfinity Logo"/>
          </button>
          <button
            type="button"
            className="inline-block md:col-start-3 rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border-2 hover:border-white border-transparent">
            <img src="/images/icons/YouTubeTV-transparent.svg" className="w-auto" alt="YouTubeTV Logo"/>
          </button>
        </div>
          <button
            type="button"
            className="w-fit relative mx-auto px-10 md:col-start-2 md:col-span-1 text-center rounded bg-gray-300 bg-opacity-5 px-2 py-15 h-14 transition-all duration-150 ease-in-out cursor-pointer  hover:bg-black hover:bg-opacity-20 border hover:border-white border-[#ffffff6b]">
            View All
          </button>
      </div>

    </div>

  )
}


