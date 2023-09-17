import { useState } from "react"

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false)
  const openEye = <svg strokeWidth="0.15px" width="2em" height="2em" aria-hidden="true" className="icon eye-show" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="fill-current" fill-rule="evenodd" clip-rule="evenodd" d="M11.9745 5C11.9256 5 11.8768 5.00037 11.8279 5.00112C11.7791 5.00037 11.7303 5 11.6814 5V5.00447C8.46079 5.10272 5.3423 6.81985 2.39775 9.98798C1.86741 10.5586 1.86742 11.4414 2.39776 12.012C5.34233 15.1801 8.46116 16.8973 11.6814 16.9955V17C11.7303 17 11.7791 16.9996 11.8279 16.9989C11.8768 16.9996 11.9256 17 11.9745 17V16.9955C15.1947 16.8973 18.3136 15.1801 21.2581 12.012C21.7885 11.4414 21.7885 10.5586 21.2581 9.98798C18.3136 6.81985 15.1951 5.10272 11.9745 5.00447V5ZM8.48455 7.80557C7.08391 8.45091 5.6509 9.49847 4.19454 11C5.65082 12.5014 7.08384 13.5489 8.48442 14.1943C7.71746 13.3507 7.25 12.2299 7.25 11C7.25 9.76999 7.71752 8.64918 8.48455 7.80557ZM15.7635 13.8984C16.975 13.2457 18.2096 12.2905 19.4614 11C18.2095 9.70935 16.975 8.7541 15.7634 8.10141C16.382 8.90344 16.75 9.90875 16.75 11C16.75 12.0912 16.3821 13.0964 15.7635 13.8984ZM8.75 11C8.75 9.20507 10.2051 7.75 12 7.75C13.7949 7.75 15.25 9.20507 15.25 11C15.25 12.7949 13.7949 14.25 12 14.25C10.2051 14.25 8.75 12.7949 8.75 11Z"></path></svg>
  const closedEye = <svg strokeWidth="0.15px" width="2em" height="2em" aria-hidden="true" className="icon eye-hide" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M3.85005 10.6503C3.47405 10.2457 2.84131 10.2226 2.43678 10.5986C2.03224 10.9746 2.0091 11.6073 2.38509 12.0119C2.59364 12.2362 2.80306 12.4533 3.01333 12.6631L1.21967 14.4568C0.926777 14.7496 0.926777 15.2245 1.21967 15.5174C1.51256 15.8103 1.98744 15.8103 2.28033 15.5174L4.11214 13.6856C4.99312 14.447 5.88783 15.0812 6.79444 15.5841L5.46281 17.8906C5.25571 18.2493 5.37861 18.708 5.73733 18.9151C6.09605 19.1222 6.55475 18.9993 6.76185 18.6406L8.15098 16.2345C9.16715 16.6459 10.1968 16.8938 11.2374 16.9725L11.2374 19.5C11.2374 19.9142 11.5732 20.25 11.9874 20.25C12.4017 20.25 12.7374 19.9142 12.7374 19.5L12.7374 16.9403C13.7554 16.8266 14.7626 16.5507 15.7565 16.1182L17.2128 18.6406C17.4199 18.9993 17.8786 19.1222 18.2373 18.9151C18.5961 18.708 18.719 18.2493 18.5119 17.8906L17.0951 15.4367C17.9761 14.9224 18.8456 14.2839 19.7019 13.525L21.6944 15.5175C21.9873 15.8104 22.4622 15.8104 22.7551 15.5175C23.048 15.2246 23.048 14.7498 22.7551 14.4569L20.7886 12.4903C20.9413 12.3347 21.0936 12.1752 21.2455 12.0119C21.6215 11.6073 21.5983 10.9746 21.1938 10.5986C20.7892 10.2226 20.1565 10.2457 19.7805 10.6503C17.0244 13.6156 14.3487 14.949 11.8153 14.9984C9.28183 14.949 6.60614 13.6156 3.85005 10.6503Z"> </path> </svg>
  

  return (
    <div className="flex min-h-full bg-svg-background flex-col justify-center">
      <div className="flex min-h-full flex-col justify-start md:p-14 min-[440px]:bg-gray-300 min-[440px]:bg-opacity-5 rounded-lg">
        <div className="">
          <h2 className="text-center text-3xl font-medium leading-9 tracking-tight text-white">Sign In</h2>
          <p className="mt-2 mb-14 text-center text-white text-base font-light">Enter your Max or HBO Max account email addres and password.</p>
        </div>
        <div className="">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label for="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
              </div>
              <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md bg-transparent border border-white h-14 px-3 py-3.5 text-white font-normal text-base shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <div className="relative flex items-start justify-between flex-col">
                <label for="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                <input id="password" name="password" type={showPass ? "text" : "password"} autocomplete="current-password" required className="block w-full rounded-md bg-transparent border border-white h-14 px-3 py-3.5 text-white font-normal text-base shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none focus:border-blue-400" />
                <span className="absolute right-2 top-10 cursor-pointer" onClick={() => setShowPass(!showPass)}>{showPass ? closedEye : openEye}</span>
              </div>


              <div className="mt-2">
              </div>
            </div>
            <div className="text-sm">
              <a href="#" className="font-semibold text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <div className="w-full flex">
                <button type="submit" className="w-full md:w-auto rounded-md bg-gray-300 px-12 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}