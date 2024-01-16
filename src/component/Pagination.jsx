import React from "react";

export default function Pagination({ paginate, postPerPage, totalPosts }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        Hello
        <ul className="bg-black">
          {pageNumbers.map((number) => {
            <li key={number} className="bg-black">
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="!#"
                className="text-red-400"
              >
                {console.log(number)}
                {number}
              </a>
            </li>;
          })}
        </ul>
      </nav>
    </div>
  );
}
