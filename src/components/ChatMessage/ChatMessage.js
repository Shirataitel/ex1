import React from "react";
import { showOnlyHour } from "../../config/time.config";
import useUser from "../../hooks/useUser";
import "./ChatMessage.css";

function ChatMessage({ message, time, username , image}) {
  const user = useUser()
  return (
    <div className={`chat-message ${user.username === username ? 'my-msg': 'mate-msg' }`}>
      <div className="chat-message-text">
        <label>{message}</label>
      </div>
      <Media image={image}/>
      <div className="chat-message-date">
        <p>{showOnlyHour(time)}</p>
      </div>
    </div>
  );
}

function Media({image}){
  if(image !== undefined && image.length > 0){
    return (
    <img src={image}></img>
    )
  }
  return(<></>)
}

export default ChatMessage;