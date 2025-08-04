import React, { useEffect, useState } from "react";
import axios from 'axios'

const Chats = () => {

  const [chats,setChats] = useState([]);
  async function fetchchats() {
    try {
      const response = await axios.get("http://localhost:4000/api");
      console.log(response.data);
      
      setChats(response.data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(()=>{fetchchats();},[]);
  return (
    <div >
      <ul className="bg-amber-300 flex justify-center flex-col items-center">
        {chats.map((chat) => {
          return (
            <li key={chat.id} className="">
              {" "}
              {chat.chatName}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chats;
