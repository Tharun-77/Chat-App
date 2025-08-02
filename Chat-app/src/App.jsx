import React from "react";

const App = () => {
  return (
    <div>
      <nav className="bg-purple-600 text-white">
        <ul className="flex px-10 py-3 space-x-4 justify-end">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact us</li>
          <li className="cursor-pointer">Phone</li>
        </ul>
      </nav>
      <div className="animate-bounce text-blue-600">Bouncing!</div>
    </div>
  );
};

export default App;
