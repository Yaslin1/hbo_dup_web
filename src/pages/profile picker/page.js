export default function ProfilePicker() {
  return (
    <div class="flex flex-col min-h-screen">
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
        <div class="relative px-8 mt-20 text-white">
          <h2 class="font-medium text-center text-3xl md:text-5xl mb-6">Who's Watching?</h2>
        </div>
        <div class="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center ">
            <img src="/images/icons/profile-icon.png" class="h-28 w-28" alt="Profile Icon" />
          </a>
        </div>
        <div>
          <button class="cursor-pointer bg-blue-500 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded relative mx-auto flex justify-center items-center min-w-[152px]">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}