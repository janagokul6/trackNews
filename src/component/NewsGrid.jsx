import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/News.css";
// import Pagination from "./Pagination";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserSign, selectsearchText } from "./redux/userSlice";
import Footer from "./Footer";
// import NewsDeopdow from "./NewsDeopdow";
export default function NewsGrid() {
  const [searchText, setSearch] = useState("bbc-news");
  const [newsState, setnewsState] = useState([]);
  const userSignedIn = useSelector(selectUserSign);
  const [postPerPage] = useState(90);
  const [currentPage, setcurrentPage] = useState(1);
  const MAX_LENGTH = 100;
  // const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${searchText}&apiKey=c92f90c58a524bc99f951e284a294078`
      )
      .then((data) => {
        setnewsState(data.data.articles);
        setSearch("");
      })
      .catch((err) => {
        alert("Request Exceeded Sorry :(");
      });
  };

  const TopUs = () => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=df12f525efca985b0c88b57113435e3c"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      })
      .catch((err) => {
        alert("Request Exceeded Sorry :(");
      });
  };

  const Apple = () => {
    console.log("1");
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2023-09-14&to=2023-09-14&sortBy=popularity&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      })
      .catch((err) => {
        alert("Request Exceeded Sorry :(");
      });
  };

  const Tesla = () => {
    // dispatch(selectnewsText("Tesla"));
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-08-15&sortBy=publishedAt&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      })
      .catch((err) => {
        alert("Request Exceeded Sorry :(");
      });
  };

  const Wall = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c92f90c58a524bc99f951e284a294078"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      })
      .catch((err) => {
        alert("Request Exceeded Sorry :(");
      });
  };
  useEffect(() => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&apikey=df12f525efca985b0c88b57113435e3c"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      })
      .catch((err) => {
        alert("Request Exceeded Sorry :(");
      });
  }, []);

  const All = () => {
    axios
      .get(
        "https://gnews.io/api/v4/top-headlines?category=general&apikey=df12f525efca985b0c88b57113435e3c"
      )
      .then((data) => {
        setnewsState(data.data.articles);
      })
      .catch((err) => {
        alert("Request Exceeded Sorry :(");
      });
  };

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPage - postPerPage;
  const currentPosts = newsState.slice(indexOfFirstPost, indexOfLastPage);
  // const paginate = (pageNumber) => {
  //   setcurrentPage(pageNumber);
  // };

  const signinnormal = localStorage.getItem("userSign");

  return (
    <div>
      {signinnormal ? (
        <>
          <Navbar />
          <div className="lg:py-8 py-6 w-full flex justify-center">
            <span className="lg:px-36 md:px-24 px-6 xl:text-4xl text-2xl lg:text-3xl font-light">
              {"Top News"}
            </span>
          </div>

          <div className="px-10 mt-10 flex w-full">
            <div className="float-right">
              <nav>
                <label for="touch">
                  <span className="Dropdown-class">News</span>
                </label>
                <input type="checkbox" id="touch" />
                <ul class="slide">
                  <li>
                    <span onClick={All} style={{ cursor: "pointer" }}>
                      All
                    </span>
                  </li>

                  <li>
                    <span onClick={TopUs} style={{ cursor: "pointer" }}>
                      Us Top
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="lg:px-16 xl:px-20 pt-4 lg:pt-8 xl:pt-16 px-6 shadow-xl ">
            <div className="flex justify-center ">
              <div className="shadow-md align-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 mb-10">
                {newsState ? (
                  newsState.map((curr) => {
                    return (
                      <div className="">
                        <div class="my-auto max-w-sm rounded overflow-hidden shadow-lg bg-slate-100 ">
                          <img
                            class="h-40 w-40 mx-auto"
                            src={curr.image}
                            alt={curr.source.name}
                          />
                          <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 ">
                              {curr.title.substring(0, 40)}
                            </div>
                            <p class="text-gray-700 text-base ">
                              {curr.content.substring(0, MAX_LENGTH)}
                            </p>
                          </div>
                          <div class="lg:px-6 lg:pt-4 lg:pb-2 flex justify-around px-2">
                            <span
                              onClick={() => {
                                window.open(curr.url, "_blank");
                              }}
                              class="cursor-pointer my-auto inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                              Read More
                            </span>
                            <span className="lg:text-base text-xs my-1">
                              {curr.publishedAt.split("T")[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-black">Loading...</div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-xl">Please Sign In</div>
        </>
      )}
      <Footer />
    </div>
  );
}

// <form
//   className="flex justify-center pt-10 my-auto"
//   onSubmit={(e) => {
//     search(e);
//   }}
// >
//   <label
//     for="default-search"
//     class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//   >
//     Search
//   </label>
//   <div class="relative ">
//     <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//       <svg
//         class="w-4 h-4 text-gray-500 dark:text-gray-400"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 20 20"
//       >
//         <path
//           stroke="currentColor"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//         />
//       </svg>
//     </div>
//     <input
//       type="search"
//       id="default-search"
//       class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//       placeholder="Search News..."
//       // value={searchText}
//       onChange={(e) => {
//         setSearch(e.target.value);
//       }}
//       required
//     />
//     <button
//       type="submit"
//       class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm lg:px-4 md:px-2 px-1 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//     >
//       Search
//     </button>
//   </div>
// </form>

// <Pagination
//   paginate={paginate}
//   postPerPage={postPerPage}
//   totalPosts={newsState.length}
// />
// <div className="flex flex-col justify-around lg:flex-row">
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               All
//             </button>
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               Button
//             </button>
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               Button
//             </button>
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               Button
//             </button>
//             <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 lg:px-20 px-4 border border-blue-500 hover:border-transparent rounded">
//               Button
//             </button>
// </div>

// <li>
// <span onClick={Tesla} style={{ cursor: "pointer" }}>
//   Tesla
// </span>
// </li>
// <li>
//                     <span onClick={Apple} style={{ cursor: "pointer" }}>
//                       Apple
//                     </span>
//                   </li>
//                   <li>
//                     <span onClick={Wall} style={{ cursor: "pointer" }}>
//                       Wall
//                     </span>
//                   </li>
