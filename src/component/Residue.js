<div class="mb-6">
  <label
    for="repeat-password"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    Repeat password
  </label>
  <input
    type="password"
    id="repeat-password"
    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    required
  />
</div>;

<div class="flex items-start mb-6">
  <div class="flex items-center h-5">
    <input
      id="terms"
      type="checkbox"
      value=""
      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
      required
    />
  </div>
  <label
    for="terms"
    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    I agree with the{" "}
    <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">
      terms and conditions
    </a>
  </label>

  <div className="">
    <i class="fa-solid fa-bars fa-lg"></i>
  </div>

  <div>
    <div className="flex lg:gap-6 md:gap-3 gap-2" id="navbar-dashboard">
      <img
        src={userImage}
        alt="google-image"
        className="rounded-full w-10 h-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
      />
      <span className="my-auto lg:text-xl text-base">{userName}</span>
      {userName ? (
        <i
          class="fa-solid fa-right-from-bracket my-auto cursor-pointer"
          onClick={handleSignout}
        ></i>
      ) : (
        <></>
      )}
    </div>
    <div
          id="dropdownHover"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {userName}
            </a>
          </li>
          <li
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            {userName ? (
              <i
                class="fa-solid fa-right-from-bracket my-auto cursor-pointer"
                onClick={handleSignout}
              ></i>
            ) : (
              <></>
            )}
          </li>
        </div>
  </div>
  //Dropdown
  <div>
        //   <button
        //     id="dropdownDefaultButton"
        //     data-dropdown-toggle="dropdown"
        //     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //     type="button"
        //   >
        //     Dropdown button{" "}
        //     <svg
        //       class="w-2.5 h-2.5 ml-2.5"
        //       aria-hidden="true"
        //       xmlns="http://www.w3.org/2000/svg"
        //       fill="none"
        //       viewBox="0 0 10 6"
        //     >
        //       <path
        //         stroke="currentColor"
        //         stroke-linecap="round"
        //         stroke-linejoin="round"
        //         stroke-width="2"
        //         d="m1 1 4 4 4-4"
        //       />
        //     </svg>
        //   </button>

        //   <div
        //     id="dropdown"
        //     class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        //   >
        //     <ul
        //       class="py-2 text-sm text-gray-700 dark:text-gray-200"
        //       aria-labelledby="dropdownDefaultButton"
        //     >
        //       <li>
        //         <a
        //           href="#"
        //           class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        //         >
        //           All
        //         </a>
        //       </li>
        //       <li>
        //         <a
        //           href="#"
        //           class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        //         >
        //           Tesla News
        //         </a>
        //       </li>
        //       <li>
        //         <a
        //           href="#"
        //           class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        //         >
        //           Earnings
        //         </a>
        //       </li>
        //       <li>
        //         <a
        //           href="#"
        //           class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        //         >
        //           Sign out
        //         </a>
        //       </li>
        //     </ul>
        //   </div>
        // </div>
</div>;
