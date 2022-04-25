import React, { useEffect, useRef, useState } from "react"
import "./Chatcontainer.css";
import ChatMessage from "../../../../components/ChatMessage/ChatMessage";
import { fomatCurrentDate } from "../../../../config/time.config";
import useUser from "../../../../hooks/useUser";
import MediaUpload from "../MediaUpload";


function Chatcontainer({ currentChat, setCurrentChat }) {
  const inputRef = useRef()
  const msgRef = useRef()
  const user = useUser()
  const onNewMessage = () => {
    const newMSG = {
      content: inputRef.current.value,
      timestamp: fomatCurrentDate(),
      username: user?.username,
    }
    setCurrentChat(curr => ({ ...curr, chat: [...curr.chat, newMSG] }))
    inputRef.current.value = ''
  }
  useEffect(() => {
    if (msgRef.current) {
      msgRef.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }, [currentChat?.chat])

  function mediaUpload() {
    let mediaUpload = document.getElementById('mediaUpload');
    mediaUpload.style.visibility = 'visible';
  }

  function hideMediaUpload() {
    let mediaUpload = document.getElementById('mediaUpload');
    mediaUpload.style.visibility = 'hidden';
  }

  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <div className="chat-user-info">
          <div className="chat-user-img">
            <img src={currentChat?.image} alt="" />
          </div>
          <p> {currentChat?.nickname} </p>
        </div>
      </div>

      <div className="chat-display-container">
        {!currentChat ? (
          <h2 className="chat-display-bg"></h2>
        ) : (<>
          <div className="chat-bubble-continer">
            {currentChat.chat.map(chatMsg => (
              <ChatMessage key={chatMsg.timestamp} username={chatMsg.username}
                message={chatMsg.content} time={chatMsg.timestamp} image={chatMsg.image} />
            ))}
            <div ref={msgRef}></div>
          </div>

          <MediaUpload />
          <div className="chat-input">
            <button onClick={mediaUpload} className="no-border">
              <svg className="media-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
              </svg>
            </button>
            <input id="input" ref={inputRef} placeholder="Type new message here..." />
            <button id="sendBtn" onClick={onNewMessage} className="chat-input-send-btn" formaction='javascript:alert("Bingo!");'>send</button>
          </div>
        </>)}


      </div>
    </div>
  );
}

export default Chatcontainer;