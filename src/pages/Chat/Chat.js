import Sidebar from "./components/Sidebar/Sidebar"
import "./Chat.css";
import Chatcontainer from "./components/ChatContianer/Chatcontainer";
import { useState } from "react";

function Chat() {
    const [currentChat, setCurrentChat] = useState()
    return (
        <div className="chatpage chat-bg">
           <nav className="navbar" id="screen-title">
                <div className="container-fluid">
                    <a className="navbar-brand text-right" id="WebChat-text" href="/">
                        <img src="WebChat logo.png" alt="" width="50" height="40" className="d-inline-block"  style={{ margin: '0 5px' }} />
                        WebChat
                    </a>
                </div>
            </nav>
            <div className="chatpage-container">
                {/* sidebar */}
                <Sidebar currentChat={currentChat} setCurrentChat={setCurrentChat}/>
                {/* chatcontainer */}
                <Chatcontainer currentChat={currentChat} setCurrentChat={setCurrentChat}/>
            </div>
        </div>
    );
}

export default Chat;