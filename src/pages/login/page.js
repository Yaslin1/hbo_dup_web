import LoginForm from "./LoginForm";
import LoginNav from "./LoginNav";
import Footer from "../../components/Footer";
import LoginProvider from "./LoginProvider";

export default function LoginPage() {
  return (
    <div class="flex flex-col min-h-screen">
      <LoginNav />
      <div class="relative flex-grow">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" class="absolute inset-0 w-full h-full">
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
        <div class="relative p-8 text-white ">
          <h2 class="font-medium text-center text-4xl">Get Started</h2>
          <div class="flex justify-center space-x-4">
            <LoginForm />
            <LoginProvider />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
