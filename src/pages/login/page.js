import LoginForm from "./LoginForm";
import LoginNav from "./LoginNav";
import Footer from "../../components/Footer";
import LoginProvider from "./LoginProvider";



export default function LoginPage() {
  return (
    <div class="flex flex-col min-h-screen">
      <LoginNav />
      <div class="flex-grow">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" class="fixed inset-0 w-full h-full">
          <linearGradient id='a' gradientUnits='userSpaceOnUse' x1='500' x2='500' y1='18.18' y2='1018.18'>
            <stop offset=".12" stopColor='#03f' stopOpacity='.2' />
            <stop offset=".65" stopColor='#006' stopOpacity='.06' />
          </linearGradient>
          <radialGradient id='b' cx='-7.98' cy='1011.58' gradientTransform='matrix(220 0 0 -220 2435 222787)' gradientUnits='userSpaceOnUse' r='2.5'>
            <stop offset="0" stopColor='#03f' stopOpacity='.12' />
            <stop offset="1" stopColor='#006' stopOpacity='0' />
          </radialGradient>
          <rect x="0" y="0" width="100%" height="100%" fill="#060212" />
          <rect x="0" y="0" width="100%" height="100%" fill="url(#a)" />
          <rect x="0" y="0" width="100%" height="100%" fill="url(#b)" />
        </svg>
        <div class="relative px-8 mt-20 text-white ">
          <h2 class="font-medium text-center text-5xl mb-6">Get Started</h2>
          <div class="flex justify-center space-x-4">
            <LoginForm />
            <LoginProvider />
          </div>
          <a class="w-fit border-b border-transparent cursor-pointer hover:border-blue-500 relative mx-auto flex justify-center items-center pt-4 first-letter:text-center text-sm font-bold text-blue-500">
           <span class="pr-1"> Need help signing in? </span> 
            <svg class="icon external w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path class="fill-blue-500" d="M14 3C13.4477 3 13 3.44771 13 4C13 4.55228 13.4477 5 14 5H17.5858L9.29289 13.2929C8.90237 13.6834 8.90237 14.3166 9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071L19 6.41421V10C19 10.5523 19.4477 11 20 11C20.5523 11 21 10.5523 21 10V3H14Z"></path>
              <path class="fill-rule-evenodd clip-rule-evenodd fill-current" d="M3 5C3 3.89543 3.89543 3 5 3H10V5H5V19H19V14H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"></path>
            </svg>
          </a>
          <Footer />
        </div>
      </div>
    </div>
  );
}
