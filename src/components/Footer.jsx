export default function Footer() {
  return (
    <>
   
      <footer className="mt-44 bg-transparent rounded-lg shadow m-4 justify-between">
      <span className="flex flex-row justify-end w-full text-sm text-gray-300 sm:text-center">© 2023 WarnerMedia Direct, LLC. All rights reserved.
      </span>
        <div className="flex justify-between items-center w-full mx-auto py-4">
          <div className="flex">
          <a className="flex pr-3 text-sm font-bold text-blue-500" href="https://www.youtube.com/@streamonmax" label="YouTube">
            <img className="w-5 opacity-75 hover:opacity-100" loading="lazy" alt="Youtube Logo White" src="/images/icons/YOUTUBE-white.webp"/>
          </a>
          <a className="flex pr-3 text-sm font-bold text-blue-500" href="https://www.twitter.com/streamonmax" label="Twitter">
            <img className="w-5 opacity-75 hover:opacity-100" loading="lazy" alt="Twitter Logo White" src="/images/icons/TWITTER-white.webp"/>
          </a>
          <a className="flex pr-3 text-sm font-bold text-blue-500" href="https://www.facebook.com/streamonmax" label="Facebook">
            <img className="w-5 opacity-75 hover:opacity-100" loading="lazy" alt="Facebook Logo White" src="/images/icons/FACEBOOK-white.webp"/>
          </a>
          <a className="flex pr-3 text-sm font-bold text-blue-500" href="https://www.instagram.com/streamonmax" label="Instagram">
            <img className="w-5 opacity-75 hover:opacity-100" loading="lazy" alt="Instagram Logo White" src="/images/icons/INSTAGRAM-white.webp"/>
          </a>
          <a className="flex pr-3 text-sm font-bold text-blue-500" href="https://www.tiktok.com/@streamonmax" label="TikTok">
            <img className="w-5 opacity-75 hover:opacity-100" loading="lazy" alt="TikTok Logo White" src="/images/icons/TIKTOK-white.webp"/>
          </a>
          </div>
          <div>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300">
            <li>
              <a href="#" className="mr-4 hover:text-white md:mr-6 ">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-white md:mr-6">Term of Use</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-white md:mr-6">Ad Choices</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:text-white md:mr-6">Do Not Sell or Share My Personal Information</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Help</a>
            </li>
          </ul>
          </div>
        </div>
      </footer>
    </>
  )
}