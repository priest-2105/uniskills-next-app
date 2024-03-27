// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';
import { useCallback, useEffect, useRef, useState } from 'react';
// Import the APPs layout component, to be used to struct this page
import io from 'socket.io-client';
// Bring in the config file
import config from '../../../config.js';
import { useRouter } from 'next/router.js';
// import { socket, useSocket } from './usesocket.js';

const socket = io.connect("http://localhost:3001");




export default function CHAT_DIRECT({ otherUserData, activeTab, handleTextChange, setShowChat,sendMessage, text }) {

  const chatContainerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [messages, setMessages] = useState([])
  const [isSendingMessage, setIsSendingMessage] = useState(false)  
  const [visibleMessages, setVisibleMessages] = useState(20);
  const [showButton, setShowButton] = useState(false);





  const closeChat = () => {
    setSelectedUser(null);
    setShowChat(false);
  };
  
   

  return (
<> 

 
  <Head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>

  <style>
  {`
  // .scroll-to-bottom-arrow{
  //   position:fixed;
  //   top:60%;
  //   right:50%;
  //   transform: translateY(-50%, -50%);
  // }

  @media (min-width: 991px) {
    .default-chat-welcome-window {
      display: block !important;
    }
    .latest-message-text-body-mobile{
      display: none !important;
    }
  }
  @media (max-width: 990px) {
    .default-chat-welcome-window {
      display: none !important; 
    }
    .each-chat-tab{
      position: fixed;
      z-index: 999;
      top:50%;
      left:0%;
      width:100%;
    }
    .latest-message-text-body-desktop{
      display: none !important;
    }
    .latest-message-text-body-mobile{
      width: 90% !important;
    }
    .chat-conversation-window{
      z-index: 0 !important;
    }
    .reciever-message-box{
      max-width:300px !important;
      padding:0px !important;
      font-size:13px;
    }
    .sender-message-box{
      max-width:300px !important;
      padding:0px !important;
      font-size:14px;
    }
    .isSendingMessage{
      max-width:300px !important;
      padding:0px !important;
      font-size:15px;
    }
    .closechatbutton{
      padding:6px;
      background-color:grey;
    }
    .user-full-name{
      font-size:14px;
    }
    .day-divider{
      margin-bottom:-10px;
      font-size:13px;
    }
   
  }

`}
  </style>
</Head>


    <div className={`tab-pane each-chat-tab fade ${activeTab === `pills-chat-direct` ? 'show active' : 'active'}`} id="pills-chat-direct" role="tabpanel" aria-labelledby="pills-chat-direct-tab" style={{ height: "100vh", overflow: "hidden" }}>
 <div>
  {otherUserData && (
         <div className="card rounded-0 border-0" style={{transitionDuration:"0.5s", transitionTimingFunction:"ease-in-out"}}>
                    {/* <!-- Hader--> */}
            <div className="navbar card-header w-100 mx-0 px-4">
                <div className="d-flex align-items-center w-100 px-sm-3">
                <button className="btn btn-secondary closechatbutton" type="button"  onClick={closeChat}> <i className="bi bi-arrow-left"></i> </button>
                {/* <button className="btn btn-secondary me-5 me-sm-4" type="button"  onClick={toggleMobileChat}> <i className="bi bi-arrow-left"></i> </button> */}
                <a type="button" className="btn border-0" data-bs-toggle="modal" data-bs-target="#modalId">
                <div className="position-relative flex-shrink-0">
                {otherUserData.imageurl ? 
                <Image src={otherUserData.imageurl}  alt={otherUserData.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/> :
                  <Image src="/assets/img/avatar/09.jpg"  alt={otherUserData.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/>
                  }<span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem"}}></span></div>
                <div className="h6 ps-1 me-1 user-full-name mb-0">{otherUserData.fullname}</div></a>
                <div className="dropdown ms-auto">
                    <button className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-n2" type="button" data-bs-toggle="dropdown">.<i className="ai-dots-vertical fs-4 fw-bold"></i></button>
                    <div className="dropdown-menu dropdown-menu-end my-1">
                    <a className="dropdown-item ms-1" type="button"  data-bs-toggle="modal" data-bs-target="#modalId"><i className="ai-user fs-base opacity-80 me-2"></i>View profile</a>
                        <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-edit fs-base opacity-80 me-2"></i>Mark as Unread</a>
                        <button onClick={closeChat} className='dropdown-item' type='button' ><i className="ai-logout fs-base opacity-80 me-2"></i>Leave chat</button>
                        <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-circle-slash fs-base opacity-80 me-2"></i>Block user</a></div>
                </div>
                    </div>
                    </div>
              {/* <!-- Body--> */}
        <div style={{transitionDuration:"0.1s", transitionTimingFunction:"ease-in-out", height: "63vh" }} className="card-body pb-0 pt-4 position-relative"  ref={chatContainerRef}  data-simplebar>
     <div>
    {!isDarkMode && <div className="no-conversation-yet">No messages available</div>}
          {isDarkMode && <div className="no-conversation-yet-dark">No messages available</div>}
        </div>
      <div>{isSendingMessage &&
        <div className="isSendingMessage ms-auto mb-5" style={{ maxWidth: "400px" }}>
        <div className="d-flex align-items-end mb-2 justify-content-start">
        <div className="message-box-end bg-primary me-1">{text}</div>
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>    </div>
        <div className="ms-auto d-flex col-12 align-items-end justify-content-end text-end">
        <div className="fs-xs text-end ms-auto text-muted">{new Date().toLocaleTimeString()}</div>
          <div className='ms-auto'>  
          
          </div>
        </div>
      </div> 
      }</div> 
                 
                  </div>
  
      {/* <!-- Footer (Textarea)--> */}
          <div className="card-footer card w-100 border-0 mx-0 px-4">

            <div className="d-flex align-items-end border rounded-3 pb-1 pe-3 mx-sm-3">
              <textarea className="form-control border-0" rows="3"
                type="text"
                // value={text + (selectedEmoji || '')}
                // onChange={handleTextChange}
                // onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                value={text}
                onChange={handleTextChange}
                style={{resize: "none"}}></textarea>
              <div className="nav flex-nowrap align-items-center">
                <div className="dropdown ms-auto">
                  {/* <a className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-2  text-muted p-1 me-1" href={`/${config.LOGIN}`} type="button" data-bs-toggle="dropdown"><i className="ai-paperclip fs-xl"></i></a> */}
                <div className="dropdown-menu dropdown-menu-end my-1">
        <label for="add-img-product-input" className="dropdown-item" href={`/${config.LOGIN}`}><i className="me-2 mb-1 bi bi-file-earmark-pdf"></i>Documents</label>
        <label for="add-img-product-input" className="dropdown-item" href={`/${config.LOGIN}`}><i className="me-2 mb-1 bi bi-image"></i>Images</label>
        <label for="add-img-product-input" className="dropdown-item" href={`/${config.LOGIN}`}><i className="me-2 mb-1 bi bi-camera-reels"></i>Videos</label>
        </div>

        </div>

              <div className="dropdown ms-auto">
                  <a className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-2  text-muted p-1 me-1" href={`/${config.LOGIN}`} type="button" data-bs-toggle="dropdown"> <i className="ai-emoji-smile fs-xl"></i></a>
                <div className="dropdown-menu dropdown-menu-end my-1">
                {/* <EmojiPicker onEmojiClick={handleEmojiClick} /> */}
                </div>
              </div>
                <button className="btn btn-sm btn-secondary ms-3"    onClick={sendMessage} type="button">Send</button>
              </div>
            </div>
          </div>
        </div>)}
  </div></div>
 












 







    </>
  )

}

