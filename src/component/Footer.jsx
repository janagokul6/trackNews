import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="bg-black rounded-lg shadow m-4  dark:bg-gray-800 text-white dar:text-white sticky left-0 right-0 bottom-0">
        <div class="w-full mx-auto max-w-screen-xl lg:p-4 p-2 md:flex md:items-center md:justify-between">
          <span class="text-sm  sm:text-center dark:text-gray-400 ">
            © 2023{" "}
            <a href="#" class="hover:underline">
              Gokul Jana
            </a>
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium    sm:mt-0">
            <li>
              <a
                href="https://www.instagram.com"
                class="mr-4 hover:underline md:mr-6 text-white dar:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                class="mr-4 hover:underline md:mr-6 text-white dar:text-white"
              >
                Facebook{" "}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                class="mr-4 hover:underline md:mr-6 text-white dar:text-white"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="mailto:janasomnath173@gmail.com@gmail.com"
                class="hover:underline text-white dar:text-white"
              >
                Mail
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
