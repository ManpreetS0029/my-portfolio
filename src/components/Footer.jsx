function Footer() {
  return (
    <>
      <footer className="w-full dark:bg-black dark:border-gray-700">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0"></div>
        <hr className="my-8" />
        <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
          <div className="mt-8 mb-6 grid grid-cols-2 gap-12 md:mt-0 lg:w-3/4 lg:grid-cols-3">
            <div className="mb-8 lg:mb-0">
              <p className="text-5xl dark:text-white">My Portfolio</p>
            </div>
            <div className="mb-8 lg:mb-0"></div>
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-700 dark:text-white">
                Pages
              </p>
              <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500 dark:text-white">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t"></div>
      </footer>
    </>
  );
}

export default Footer;
