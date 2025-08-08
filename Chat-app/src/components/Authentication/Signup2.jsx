import React, { useState } from 'react'

const Signup2 = () => {
  const [name , setname] = useState("");
  const [email , setemail] = useState("");
  const [pass , setpass] = useState("");
  const [cpass , setcpass] = useState("");
  const [pic , setpic] = useState();

  return (
    <div>
      <form action="">
        <div className="flex flex-col mx-8 my-6">
          <label htmlFor="name">Name</label>
          <input
            className="border-1"
            type="text"
            placeholder="Enter Your Name"
            required
            onChange={(e) => setname(e.target.value)}
          />
        </div>
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
        <div className="flex flex-col mx-8 my-6">
          <label htmlFor="name"> Confirm Password</label>
          <input
            className="border-1"
            type="password"
            placeholder="Confrim Your password"
            required
            onChange={(e)=> setcpass(e.target.value)}
          />
        </div>
        <div className="flex flex-col mx-8 my-6">
          <label htmlFor="name">Profile Pic</label>
          <input
            className="border-1"
            type="file"
            accept="image/*"
            onChange={(e) => setpic(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <input
            className="btn2 flex items-center  bg-[#FFD8D8] "
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
    </div>
  );
}

export default Signup2