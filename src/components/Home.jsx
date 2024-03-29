import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="w-full dark:bg-black dark:border-gray-700">
        <div className="relative w-full h-full bg-white border-b dark:bg-black dark:border-gray-700">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
              <div class="w-64 h-64 overflow-hidden rounded-full">
                <img
                  class="w-full h-full object-cover"
                  src="my_img.jpg"
                  alt="Your Image"
                />
              </div>
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-3xl lg:text-5xl dark:text-white">
                Manpreet Singh
              </h1>
              <p className="mt-8 text-lg text-gray-700 dark:text-white">
                Welcome to my portfolio. I am a Full Stack Developer. My
                technology stack is HTML, CSS, JavaScript, jQuery, Bootstrap,
                Tailwind CSS and React.js in Frontend and PHP, Laravel and
                Codeigniter in Backend.
              </p>

              <div className="flex flex-row mt-4">
                <div>
                  <div className="h-8 w-8 my-2">
                    <img src="ig.png" alt="" />
                  </div>
                </div>
                <div>
                  <p className="text-xl mx-2 my-2 dark:text-white">
                    @manpreetsingh.ig
                  </p>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <div className="h-8 w-8 my-2">
                    <img src="li.png" alt="" />
                  </div>
                </div>
                <div>
                  <p className="text-xl mx-2 my-2 dark:text-white">
                    @manpreet-singh-a3767a210
                  </p>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <div className="h-8 w-8 my-2">
                    <img src="github.png" alt="" />
                  </div>
                </div>
                <div>
                  <p className="text-xl mx-2 my-2 dark:text-white">
                    @ManpreetS0029
                  </p>
                </div>
              </div>

              <div className="flex flex-row">
                <div>
                  <div className="h-8 w-8 my-2">
                    <img src="x.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <p className="text-xl mx-2 my-2 dark:text-white">
                    @tweet_manpreet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
          <div class="relative h-full w-full rounded-md border p-6 dark:bg-white dark:border-gray-700">
            <div class="flex items-center">
              <p className="font-bold text-gray-900 md:text-4xl md:leading-10">
                Skills
              </p>
            </div>
            <div class="mt-10 gap-8 sm:grid sm:grid-cols-2 py-8">
              <div>
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    HTML
                  </dt>
                  <dd class="flex items-center mb-3">
                    <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                      <div
                        class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    CSS
                  </dt>
                  <dd class="flex items-center mb-3">
                    <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                      <div
                        class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    JavaScript
                  </dt>
                  <dd class="flex items-center mb-3">
                    <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                      <div
                        class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                        style={{ width: '95%' }}
                      ></div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    jQuery
                  </dt>
                  <dd class="flex items-center">
                    <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                      <div
                        class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                        style={{ width: '95%' }}
                      ></div>
                    </div>
                  </dd>
                </dl>
              </div>
              <div>
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    MySQL
                  </dt>
                  <dd class="flex items-center mb-3">
                    <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                      <div
                        class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    PHP
                  </dt>
                  <dd class="flex items-center mb-3">
                    <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                      <div
                        class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </dd>
                </dl>
                <dl>
                  <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Laravel
                  </dt>
                  <dd class="flex items-center">
                    <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                      <div
                        class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                        style={{ width: '99%' }}
                      ></div>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="mx-auto max-w-7xl px-2">
            <div class="flex flex-col space-y-8 pb-10 pt-12 md:pt-4">
              <p class="font-bold text-gray-900 md:text-4xl md:leading-10 dark:text-white">
                Projects
              </p>
            </div>
            <div class="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
              <div class="border">
                <img
                  src="konferens.jpg"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <div class="min-h-min p-3">
                  <p class="mt-4 flex-1 text-base font-semibold text-gray-900 dark:text-white">
                    Konferensbokarna
                  </p>
                  <p class="mt-4 w-full text-sm leading-normal text-gray-600 dark:text-white">
                    Konferensbokarna is a portal for partners and customers for
                    requesting quotes for conference booking.
                  </p>
                </div>
              </div>
              <div class="border">
                <img
                  src="designteam.jpg"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <div class="min-h-min p-3">
                  <p class="mt-4 flex-1 text-base font-semibold text-gray-900 dark:text-white">
                    DesignTeam
                  </p>
                  <p class="mt-4 w-full text-sm leading-normal text-gray-600 dark:text-white">
                    Design Team is an interior designing company. They design
                    the interior of the house according to the requirements of
                    the people. This website is made to showcase their products
                    and services.
                  </p>
                </div>
              </div>
              <div class="border">
                <img
                  src="vipparking.png"
                  class="aspect-video w-full rounded-md"
                  alt=""
                />
                <div class="min-h-min p-3">
                  <p class="mt-4 flex-1 text-base font-semibold text-gray-900 dark:text-white">
                    Vip Parking
                  </p>
                  <p class="mt-4 w-full text-sm leading-normal text-gray-600 dark:text-white">
                    VIP Parking is a parking system in which user can pay for
                    the VIP Parking for their vehicles with extra services.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <NavLink to="/projects">
                  <button
                    type="button"
                    class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black"
                  >
                    View More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
