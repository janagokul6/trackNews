import React from "react";
import "./css/Login.css";
import { signInWithEmailAndPassword, auth } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import News from "./images/NEWS.png";
import { useDispatch, useSelector } from "react-redux";
import { selectUserSign, setActiveUser } from "./redux/userSlice";
export default function Login({ signIn, setsignIn }) {
  const navigate = useNavigate();
  const userSigned = useSelector(selectUserSign);
  const dispatch = useDispatch();
  const [email, setemail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, seterr] = React.useState(false);
  const error = "Wrong Email or Password";

  const handleSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setsignIn(true);
        <div
          class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span class="font-medium">Success Login</span> Well Done
        </div>;
        dispatch(
          setActiveUser({
            userNameNormal: email,
          })
        );
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userSign", true);
        navigate("/news");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        seterr(true);
      });

    setemail("");
    setPassword("");
    seterr(false);
  };
  return (
    <div>
      <section class="gradient-form h-full w-full">
        <div class="container h-full lg:p-20 px-4">
          <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div class="w-full">
              <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div class="g-0 lg:flex lg:flex-wrap my-10">
                  <div class="lg:px-4 md:px-0 lg:w-6/12">
                    <div class="md:mx-6 md:p-12 bg-neutral-200 dark:bg-neutral-700">
                      <div class="text-center">
                        <img class="mx-auto w-36 h-36 " src={News} alt="logo" />
                        <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                          We are The NewsDocs Team
                        </h4>
                      </div>
                      <div className="text-center pb-4 text-base ">
                        Didn't have a{" "}
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={() => {
                            navigate("/register");
                          }}
                        >
                          account?
                        </span>
                      </div>
                      <form
                        onSubmit={(e) => {
                          handleSignin(e);
                        }}
                        className="mb-4"
                      >
                        <div class="mb-6 lg:px-10 px-4">
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="name@email.com"
                            required
                          />
                          {err ? (
                            <div className="text-red-400">{error}</div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div class="mb-6 lg:px-10 px-4">
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your password
                          </label>
                          <input
                            type="password"
                            id="password"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            required
                          />
                          {err ? (
                            <div className="text-red-400">{error}</div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 class="mb-6 text-xl font-semibold">
                        We are NEWS Broadcaster
                      </h4>
                      <p class="text-sm">
                        We are are responsible for presenting news stories,
                        reports, and updates to the audience. They read scripts,
                        provide live commentary, and introduce various segments
                        of the news broadcast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}
