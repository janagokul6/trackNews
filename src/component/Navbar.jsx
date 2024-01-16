import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, auth, googleAuthProvider } from "../Firebase";
import {
  selectUserEmail,
  selectUserName,
  selectuserImage,
  selectuserNameNormal,
  setActiveUser,
  setUserLogout,
} from "./redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./css/Navbar.css";
export default function Navbar() {
  const userImage = useSelector(selectuserImage);
  const userEmail = useSelector(selectUserEmail);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userNameNormal = useSelector(selectuserNameNormal);
  const handleSignout = () => {
    signOut(auth, googleAuthProvider)
      .then(() => {
        dispatch(setUserLogout());
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleSignoutNormal = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserLogout());
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userSign");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const userMail = localStorage.getItem("userEmail");
  const userSign = localStorage.getItem("userSign");

  return (
    <div>
      {userSign ? (
        <div className="flex justify-around relative top-0 lg:px-10  lg:py-3 py-1 shadow-xl">
          <span className="lg:text-3xl md:text-base text-xs font-bold my-auto">
            NEWS DOCS
          </span>

          {userNameNormal ||
            (userSign && (
              <>
                <span className="my-auto lg:text-2xl md:text-base text-sm">
                  {userSign ? userMail : <></>}
                </span>
              </>
            ))}
          {userMail && (
            <i
              class="fa-solid fa-right-from-bracket my-auto cursor-pointer"
              onClick={handleSignoutNormal}
            ></i>
          )}

          {userName && (
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src={userImage} alt="" />
                </button>
              </div>

              <div
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="!#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  {userName}
                </a>
                <button
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

// <img
// src={userImage}
// alt="google-image"
// className="rounded-full w-10 h-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
// />

// <div>
//             <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
//               Options
//               <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
//               </svg>
//             </button>
//           </div>

// <button
// id="dropdownHoverButton"
// data-dropdown-toggle="dropdownHover"
// data-dropdown-trigger="hover"
// class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// type="button"
// ></button>
