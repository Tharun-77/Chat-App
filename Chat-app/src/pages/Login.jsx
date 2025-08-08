import React, { useState } from "react";
import LoginComp from "../components/Authentication/LoginComp";
import Signup2 from "../components/Authentication/Signup2";

const Login = () => {
  const [log, setlog] = useState(false);

  return (
    <div className="flex justify-center items-center bg-[#093FB4] w-[100vw] h-[100vh]">
      <div className="w-120 h-155 bg-[#FFFCFB] rounded-xl">
        <div>
          <p className="text-center mt-10 font-semibold text-[#093FB4] text-5xl underline decoration-[#093FB4]">
            {log === false ? "Sign Up" : "Log In"}
          </p>
        </div>
        <div className="buttons flex justify-between mx-12 mt-10">
          <button
            type="button"
            className={`btn ${
              log === false ? "bg-[#093FB4]" : "bg-[#ED3500]"
            }`}
            onClick={() => setlog(false)}
          >
            Sign-in
          </button>
          <button
            type="button"
            className={`btn ${
              log === true ? "bg-[#093FB4]" : "bg-[#ED3500]"
            }`}
            onClick={() => setlog(true)}
          >
            Log-in
          </button>
        </div>
        <div className="fom">{log === true ? <LoginComp /> : <Signup2 />}</div>
      </div>
    </div>
  );
};

export default Login;
