export default function LoginProvider() {
  return (
    <div class="flex min-h-full bg-svg-background flex-col justify-center px-6 py-12 lg:px-8">
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-300 bg-opacity-5 rounded-lg">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-white">Connect Your Provider</h2>
          <p class="mt-2 text-center text-white text-base font-light">Select your internet, mobile, or TV provider below to connect your subscription.</p>
        </div>
        <div class="relative flex flex flex-col justify-center items-center flex-1">
          <button
            type="button"
            class="inline-block rounded bg-gray-300 bg-opacity-5 px-6 py-15 h-14 transition-all duration-250 ease-in-out cursor-pointer hover:bg-black-900">
            Button
          </button>
        </div>
      </div>

    </div>

  )
}


