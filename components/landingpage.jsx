import Image from "next/image";
import MainImg1 from "../image/temp1.jpg";
import MainImg2 from "../image/temp2.jpg";
import MainImg3 from "../image/temp3.jpg";
import MainImg4 from "../image/image4.jpg";
import MainImg5 from "../image/white tiger.jpg";
import MainImg6 from "../image/janesh.jpg";
import MainImg7 from "../image/peacock.jpg";
import MainImg8 from "../image/robbin.jpg";
import MainImg9 from "../image/space.jpg";
import MainImg10 from "../image/structure.jpg";

function landingpage() {
  return (
    <div>
      <section class="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div class="absolute inset-0">
          <Image
            class="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src={MainImg2}
            alt=""
          />
        </div>

        <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get full access to GalleryGo
            </h2>
            <p class="mt-4 text-base text-gray-200">
              The internet’s source for visuals. Powered by creators everywhere.
            </p>

            <form action="#" method="POST" class="mt-8 lg:mt-12">
              <div class="flex flex-col items-center sm:flex-row sm:justify-center">
                <div class="flex-1 w-full min-w-0 px-4 sm:px-0">
                  <div class="relative text-gray-400 focus-within:text-gray-600">
                    <label for="email" class="sr-only"></label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      class="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md sm:rounded-r-none caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  class="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:rounded-l-none sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Photos for everyone
              </h1>
              <p className="mt-4 text-gray-500 lg:text-2xl">
                Free high-resolution images brought to you by the world’s most
                generous community of photographers.
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-1 gap-4 sm:gap-6 lg:gap-4">
              <Image src={MainImg6} className="rounded-lg bg-gray-100" alt="" />
              <Image src={MainImg7} className="rounded-lg bg-gray-100" alt="" />
              <Image src={MainImg8} alt="" className="rounded-lg bg-gray-100" />
              <Image src={MainImg9} alt="" className="rounded-lg bg-gray-100" />
              <Image
                src={MainImg10}
                alt=""
                className="rounded-lg bg-gray-100"
              />
              <Image src={MainImg3} alt="" className="rounded-lg bg-gray-100" />
            </div>
          </div>
        </div>
      </section>
      <section>
            <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
      </section>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Team
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600 lg:text-2xl">
              They work collaboratively and communicate effectively, making sure
              that everyone is on the same page and that tasks are completed
              efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
              <Image src={MainImg1} alt="" className="shadow-xl rounded-xl" />
            </div>
            <div>
              <Image src={MainImg2} alt="" className="shadow-xl rounded-xl" />
            </div>

            <div>
              <Image src={MainImg3} alt="" className="shadow-xl rounded-xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black 2xl:py-24 2xl:bg-gray-50">
        <div className="px-4 mx-auto bg-black max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
          <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
              <div className="lg:order-2 2xl:-mr-24">
                <Image
                  className="w-full shadow-xl rounded-xl"
                  src={MainImg5}
                  alt=""
                />
              </div>

              <div className="lg:order-1">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">
                  Are you ready to <br className="hidden xl:block" />
                  join GalleryGo?
                </h2>

                <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      High Quality Image{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Focus On Safety
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Unlimited Storage{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Quick Upload{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Edit & Customize Easily{" "}
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">
                      {" "}
                      Get Free Facilities{" "}
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                    role="button"
                  >
                    Sign In Now
                  </a>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white rounded-md sm:mt-0 hover:bg-white hover:text-black"
                    role="button"
                  >
                    {" "}
                    Help & Support{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default landingpage;
