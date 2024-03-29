function Projects() {
  return (
    <>
      <div className="dark:bg-black">
        <div class="mx-auto max-w-7xl px-2">
          <div class="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <p class="font-bold text-gray-900 md:text-5xl md:leading-10 dark:text-white">
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
                  Design Team is an interior designing company. They design the
                  interior of the house according to the requirements of the
                  people. This website is made to showcase their products and
                  services.
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
                  VIP Parking is a parking system in which user can pay for the
                  VIP Parking for their vehicles with extra services.
                </p>
              </div>
            </div>
            <div class="border">
              <img
                src="crown.jpg"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900 dark:text-white">
                  Crown Group
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600 dark:text-white">
                  Crown Group is a builders' website which showcases the
                  business and services offered by this architecture company.
                </p>
              </div>
            </div>
            <div class="border">
              <img
                src="goog.jpg"
                class="aspect-video w-full rounded-md"
                alt=""
              />
              <div class="min-h-min p-3">
                <p class="mt-4 flex-1 text-base font-semibold text-gray-900 dark:text-white">
                  Googlinks
                </p>
                <p class="mt-4 w-full text-sm leading-normal text-gray-600 dark:text-white">
                  Googlinks is an offer management system to manage offers for
                  publishers. Admin can add offers and publisher can start
                  working out by phone number which is assigned for that
                  particular offer. The publisher will get paid per call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
