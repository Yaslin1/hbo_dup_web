export default function Footer() {
  return (
    <>
   
      <footer class="mt-44 bg-transparent rounded-lg shadow m-4 justify-between">
      <span class="flex flex-row justify-end w-full text-sm text-gray-300 sm:text-center">© 2023 WarnerMedia Direct, LLC. All rights reserved.
      </span>
        <div class="flex justify-between items-center w-full mx-auto max-w-screen-xl p-4">
          <div class="flex">
          <a class="flex pr-3 text-sm font-bold text-blue-500" href="https://www.youtube.com/@streamonmax" label="YouTube">
            <img class="w-5 transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500" loading="lazy" alt="Youtube Logo White" src="/images/icons/YOUTUBE-white.webp"/>
          </a>
          <a class="flex pr-3 text-sm font-bold text-blue-500" href="https://www.twitter.com/streamonmax" label="Twitter">
            <img class="w-5 transition-all duration-300 ease-in-out transform hover:scale-110" loading="lazy" alt="Twitter Logo White" src="/images/icons/TWITTER-white.webp"/>
          </a>
          <a class="flex pr-3 text-sm font-bold text-blue-500" href="https://www.facebook.com/streamonmax" label="Facebook">
            <img class="w-5 transition-all duration-300 ease-in-out transform hover:scale-110" loading="lazy" alt="Facebook Logo White" src="/images/icons/FACEBOOK-white.webp"/>
          </a>
          <a class="flex pr-3 text-sm font-bold text-blue-500" href="https://www.instagram.com/streamonmax" label="Instagram">
            <img class="w-5 transition-all duration-300 ease-in-out transform hover:scale-110" loading="lazy" alt="Instagram Logo White" src="/images/icons/INSTAGRAM-white.webp"/>
          </a>
          <a class="flex pr-3 text-sm font-bold text-blue-500" href="https://www.tiktok.com/@streamonmax" label="TikTok">
            <img class="w-5 transition-all duration-300 ease-in-out transform hover:scale-110" loading="lazy" alt="TikTok Logo White" src="/images/icons/TIKTOK-white.webp"/>
          </a>
          </div>
          <div>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300 sm:mt-0">
            <li>
              <a href="#" class="mr-4 hover:text-white md:mr-6 ">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:text-white md:mr-6">Term of Use</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:text-white md:mr-6">Ad Choices</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:text-white md:mr-6">Do Not Sell or Share My Personal Information</a>
            </li>
            <li>
              <a href="#" class="hover:text-white">Help</a>
            </li>
          </ul>
          </div>
        </div>
      </footer>
    </>
  )
}