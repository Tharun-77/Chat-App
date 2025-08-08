import React from "react";
import { useState } from "react";

const LoginComp = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  return (
    <div>
      <form action="">
        <div className="flex flex-col mx-8 my-6">
          <label htmlFor="name">Email</label>
          <input
            className="border-1"
            type="email"
            placeholder="Enter Your E-mail"
            required
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-8 my-6">
          <label htmlFor="name">Password</label>
          <input
            className="border-1"
            type="password"
            placeholder="Enter Your password"
            required
            onChange={(e) => setpass(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <input
            className="btn2 flex items-center  bg-[#FFD8D8]"
            type="submit"
            value="Log In"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginComp;
