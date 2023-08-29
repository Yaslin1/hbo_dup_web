export default function LoginForm() {
  return (
    <div class="flex min-h-full bg-svg-background flex-col justify-center px-6 py-12 lg:px-8">
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-300 bg-opacity-5 rounded-lg">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-white">Sign In</h2>
            <p class="mt-2 text-center text-white text-base font-light">Enter your Max or HBO Max account email addres and password.</p>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md bg-transparent border border-white h-14 px-3 py-3.5 text-white font-normal text-base shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none focus:border-blue-400" />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
                </div>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md bg-transparent border border-white h-14 px-3 py-3.5 text-white font-normal text-base shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 sm:text-sm sm:leading-6 focus:outline-none focus:border-blue-400" />
                <div class="mt-2">
                </div>
              </div>

              <div class="w-full flex flex-row items-center justify-evenly">
                <div>
                  <button type="submit" class="grow w-full rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
                </div>
                <div class="text-sm">
                  <a href="#" class="font-semibold text-blue-500 hover:underline">Forgot Password?</a>
                </div>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
            </p>
          </div>
        </div>
      </div>
  )
}