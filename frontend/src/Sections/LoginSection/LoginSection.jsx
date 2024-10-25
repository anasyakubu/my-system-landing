// import React from 'react'
import "./LoginSection.scss";
import logo from "../../assets/logo.png";

const LoginSection = () => {
  return (
    <div className="LoginSection p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* login with email and pass */}
        <div className="">
          <form action="">
            <div className="mt-5">
              <input
                className="input-style"
                type="email"
                name=""
                id=""
                placeholder="Email : yakubuanas04@gmail.com"
              />
            </div>
            <div className="mt-5">
              <input
                className="input-style"
                type="password"
                name=""
                id=""
                placeholder="Passcode ****"
              />
            </div>

            <div className="mt-10">
              <button type="submit" className="btn-style">
                Login to Your Account
              </button>
            </div>
          </form>
        </div>
        {/* login with google */}
        <div className="flex justify-center">
          <div className="">
            <img className="w-96" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
