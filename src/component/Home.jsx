import React from "react";
import "./css/Home.css";
import {
  auth,
  googleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectUserEmail,
  selectUserName,
  selectuserImage,
  setActiveUser,
  selectUserSign,
} from "./redux/userSlice";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userImage = useSelector(selectuserImage);
  const userSignedIn = useSelector(selectUserSign);
  const handleSignIn = () => {
    console.log(auth);
    signInWithRedirect(auth, googleAuthProvider)
      .then((result) => {
        dispatch(
          setActiveUser({
            userEmail: result.user.email,
            userName: result.user.displayName,
            userImage: result.user.photoURL,
            userSignedIn: true,
          })
        );
        navigate("/news");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (userSignedIn === false) {
    navigate("/");
  }

  return (
    <div>
      <div
        className="flex justify-center 
      drop-shadow-xl bg-slate-300 lg:p-6 p-4"
      >
        <span className="text-base lg:text-xl font-bold tracking-wide">
          NewsDocs
        </span>
      </div>
      <div className="flex" id="login-home">
        <div id="login-image"></div>
        <div className="flex justify-center " id="login-buttons">
          <div className="flex flex-col justify-around lg:p-10 p-0 my-auto w-full xl:px-20 lg:gap-10 gap-6">
            <div className="flex flex-col justify-between gap-10">
              <h1 className="xl:text-4xl lg:text-3xl text-xl w-full tracking-wide text-center">
                Welcome to News Docs
              </h1>
              <button
                className="rounded-full bg-blue-300 p-2 text-base font-bold "
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login/Register
              </button>
            </div>
            <div className="flex flex-col justify-between my-auto">
              {userEmail ? (
                <></>
              ) : (
                <button
                  class="lg:px-4 py-2 border flex lg:gap-2 border-slate-200 rounded-full text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 bg-green-100"
                  onClick={handleSignIn}
                >
                  <div className="flex mx-auto lg:gap-4 gap-2">
                    <img
                      class="w-6 h-6"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      loading="lazy"
                      alt="google logo"
                    />
                    <span>SignGoogle</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
