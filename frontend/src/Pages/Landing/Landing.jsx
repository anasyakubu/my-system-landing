// import React from 'react'
import "./Landing.scss";

import Nav from "../../Components/ui/Nav";
import LoginSection from "../../Sections/LoginSection/LoginSection";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="">
        <Nav />
      </div>
      <div className="py-10">
        <div className="flex flex-col items-center justify-center">
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
          <p className="mt-8 text[#f5f5f5] text-xl text-center ">
            Uncover the Untapped Potential of Your Growth to Connect with
            Clients
          </p>
        </div>
        <div className="mt-5">
          <LoginSection />
        </div>
      </div>
    </div>
  );
};

export default Landing;
