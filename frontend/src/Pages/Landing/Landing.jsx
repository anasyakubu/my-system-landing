// import React from 'react'
import "./Landing.scss";

import Nav from "../../Components/ui/Nav";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="">
        <Nav />
      </div>
      <div className="py-20">
        <div className="flex flex-col items-center justify-center">
          {/* <!-- Top Banner --> */}
          {/* <div className="flex items-center justify-center bg-gray-100 py-3 px-6 rounded-full mb-6">
            <span className="text-sm text-gray-600">Are you a Brand?</span>
            <a
              href="#"
              className="ml-2 text-purple-600 font-semibold hover:underline"
            >
              Explore how to use Tract for growth
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div> */}

          {/* <!-- Login Header --> */}
          <h1 className="mt-5 text-5xl font-semibold text-center text-[#f8f8f8]">
            <span className="relative">
              Login to
              <span className="inline-block relative text-yellow-500">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-yellow-300 opacity-50"></span>
                Your Account
              </span>
            </span>
          </h1>

          {/* <!-- Subtitle --> */}
          <p className="mt-10 text-gray-600 text-lg text-center max-w-lg">
            Uncover the Untapped Potential of Your Growth to Connect with
            Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
