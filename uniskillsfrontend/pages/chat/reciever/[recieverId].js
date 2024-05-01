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



const socket = io.connect(process.env.NEXT_PUBLIC_SERVER_URL);




export default function CHAT_RECIEVER({ token, toggleChat, otherUserData ,selectedUser, truncateEmail, activeTab, chatUsers,fetchChatData, setActiveTab, directMessages ,setSelectedUser, receiverId ,showChat, setShowChat, mainUserId}) {

  const chatContainerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  // const [activeTab, setActiveTab] = useState("pills-default");
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const [messages, setMessages] = useState([]);
  const [isSendingMessage, setIsSendingMessage] = useState(false);  
  const [isLoading, setIsLoading] = useState(false);  // State to handle loading indicator
  const [text, setText] = useState('');
  const [visibleMessages, setVisibleMessages] = useState(20);
  const [showButton, setShowButton] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [visibleChatMessages, setVisibleChatMessages] = useState(20);
  const [chatData, setchatData] = useState([])
  const [chats, setChats] = useState([])
  const [processedMessages, setProcessedMessages] = useState([])
  const [visibleMessagesCount, setVisibleMessagesCount] = useState(20);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);

  

  useEffect(() => {
    setIsClient(true);
  }, []);

  

const closeChat = () => {
  setSelectedUser(null);
  setShowChat(false);
};



const handleReloadMessages = () => {
  fetchChatData();
};  

  
  const scrollToBottomChat = () => {
    setTimeout(() => {
      const bottomChatElement = document.querySelector('#bottomchat');
      if (bottomChatElement) {
        bottomChatElement.scrollIntoView();
      }
    }, 200);
  };
  const [showScrollToBottomButton, setShowScrollToBottomButton] = useState(false);
  const bottomMarkerRef = useRef(null); // Reference to an element at the bottom of the chat
  // const chatContainerRef = useRef(null); // Reference to the chat container

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Assuming only one entry is being observed
      const entry = entries[0];
      // If entry is intersecting, we are at the bottom, so hide the button
      setShowScrollToBottomButton(!entry.isIntersecting);
    }, {
      root: chatContainerRef.current,
      threshold: 1.0 // Adjust threshold as needed
    });

    // Observe the bottom marker
    if (bottomMarkerRef.current) {
      observer.observe(bottomMarkerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) {
      console.log("Container is not available");
      return;
    }
  
    const handleScroll = () => {
      const isScrolledUp = chatContainer.scrollTop > 50;
      setShowLoadMoreButton(isScrolledUp);
    };
  
    chatContainer.addEventListener('scroll', handleScroll);
  
    return () => {
      chatContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  






  useEffect(() => {
    if (!showChat) {
      scrollToBottomChat();
    }else{
    }
  }, [showChat]);
  
  useEffect(() => {
    if (selectedUser) {
      const truncatedemail = truncateEmail(selectedUser.email, -2);
      setActiveTab(`pills-chat-${truncatedemail}`);
    } else {
      setActiveTab("pills-default");
    }
  }, [selectedUser]);
  

    




  const sendMessage = async () => {
    if (!token) {
      console.error('Token is not available. Cannot send message.');
      return;
    }
    setIsSendingMessage(true); 
    const chatCodec = receiverId || selectedUser.codec;
    
    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/proxy`;
    const payload = {
      message: text,
      mainUserId: mainUserId,
      chatCodec,
    };
    
    const tempId = Date.now();
    const optimisticMessage = { ...payload, id: tempId };
    
    setMessages(currentMessages => [...currentMessages, optimisticMessage]);
    scrollToBottomChat();
    setTimeout(async () => { // Add a setTimeout to delay the message send
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // const newMessage = await response.json(); // You might want to use this to update the UI or state
        
        // Delay the setting of isSendingMessage to false and clearing the text by 3 seconds
      } catch (error) {
        console.error('Error while sending message:', error);
      } finally {
        setIsSendingMessage(false); // Set sending state to false after successful or failed send
        setText(''); // Clear the text input after sending the message
      }
    }, 1500); // Delay the execution by 3000 milliseconds (3 seconds)
  };
  
   
  

    function getFormattedTimestamp(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleTimeString(); 
    }

    const handleTextChange = (event) => {
      setText(event.target.value);
    };
    
    
  const handleChatItemClick = (user) => {
    setSelectedUser(user);
    const truncatedemail = truncateEmail(user.email, -2);
    setActiveTab(`pills-chat-${truncatedemail}`);
    toggleChat();
  };
 
  
  
     const isDifferentDay = (date1, date2) => {
    return new Date(date1).toLocaleDateString() !== new Date(date2).toLocaleDateString();
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toDateString();
  };
  

  const handleNavigate = () => {
    window.location.href = `/chat/${mainUserId}`;
  };


  useEffect(() => {
    if (receiverId && otherUserData) {
      const match = chatUsers.find(user => user.email === otherUserData.email);
      if (match) {
        setSelectedUser(match);
      } else {
        console.warn("No matching user found.");
        return;
      }
    }

    if (selectedUser && selectedUser.chats) {
      fetchChats();
    }
  }, [receiverId, otherUserData, selectedUser, chatUsers]);

  const fetchChats = async () => {
    setIsLoading(true);
    try {
      const updatedChats = selectedUser.chats;
      const processedMessages = processMessages(updatedChats);
      // Sort messages so the newest are last and then display the most recent ones at the bottom
      const sortedMessages = processedMessages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      const slicedMessages = sortedMessages.slice(Math.max(sortedMessages.length - visibleMessagesCount, 0));
      setMessages(slicedMessages);
    } catch (error) {
      console.error("Failed to fetch chats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const processMessages = (chats) => {
    return chats.flatMap(chat => chat.messages.map(message => ({
      ...message,
      isSender: message.user_id === selectedUser.id,
      chat: chat
    })));
  };

  const handleLoadMoreMessages = () => {
    // Load more messages increases the count and loads older messages to appear above the current ones
    setVisibleMessagesCount(prevCount => prevCount + 100);
    
  }




const handleRefresh = () => {
  fetchChats();
  scrollToBottomChat();
};


useEffect(() => {
  const handleChatListUpdated = async (user) => {
    handleRefresh();
    scrollToBottomChat(); 
    handleRefresh();
  };

  socket.on('chatListUpdated', handleChatListUpdated);

  return () => {
    socket.off('chatListUpdated', handleChatListUpdated);
  };
}, [socket, selectedUser, handleRefresh, processMessages, handleRefresh,fetchChats, scrollToBottomChat, visibleMessages]);

 

   

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
    

    .spinner-border {
      position: absolute;
      top: 50%;
      left: 50%;
    }
    

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
      top:0%;
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





<div className={` tab-pane  each-chat-tab fade ${activeTab === 'pills-default' ? 'show  active' : ''}`} id="pills-default" role="tabpanel" aria-labelledby="pills-default-tab" style={{ height: "100vh", overflow: "hidden"}}>
{!otherUserData && (
<div className='default-chat-welcome-window'>
 
<h1 className="display-3 text-center mx-auto pt-5 my-2 my-sm-4" style={{marginTop:"20vh", maxWidth: "680px"}}>Welcome To <br/> <b className="text-primary"> UNISKILLS</b> Chat</h1>
<svg className="d-block mx-auto text-primary" width="511" height="40" viewBox="0 0 511 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M385.252 0.160149C313.41 0.614872 292.869 0.910678 253.008 2.06539C211.7 3.26203 182.137 4.46154 135.231 6.84429C124.358 7.39665 112.714 7.92087 99.0649 8.47247C48.9242 10.4987 39.1671 11.0386 22.9579 12.6833C14.9267 13.4984 7.98117 14.0624 4.08839 14.2162C0.627411 14.3527 0 14.4386 0 14.7762C0 15.0745 5.53537 15.3358 8.56298 15.1804C9.64797 15.1248 12.5875 14.9887 15.0956 14.8782C17.6037 14.7676 23.123 14.4706 27.3608 14.2183C37.3399 13.6238 42.1312 13.4363 59.2817 12.9693C88.1133 12.1844 109.893 11.43 136.647 10.2898C146.506 9.86957 159.597 9.31166 165.737 9.04993C212.308 7.06466 269.195 5.29439 303.956 4.74892C346.139 4.08665 477.094 3.50116 474.882 3.98441C474.006 4.17607 459.021 5.6015 450.037 6.34782C441.786 7.03345 428 8.02235 411.041 9.14508C402.997 9.67773 391.959 10.4149 386.51 10.7832C366.042 12.1673 359.3 12.5966 347.67 13.2569C294.096 16.2987 258.708 18.9493 209.451 23.6091C180.174 26.3788 156.177 29.5584 129.396 34.2165C114.171 36.8648 112.687 37.3352 114.186 39.0402C115.161 40.1495 122.843 40.2933 138.338 39.492C166.655 38.0279 193.265 36.8923 219.043 36.048C235.213 35.5184 237.354 35.4296 253.795 34.6075C259.935 34.3005 270.549 33.8517 277.382 33.6105L289.804 33.1719L273.293 32.999C248.274 32.7369 221.435 32.7528 212.596 33.035C183.334 33.9693 167.417 34.6884 141.419 36.2506C135.222 36.623 129.994 36.8956 129.801 36.8566C127.94 36.4786 169.612 30.768 189.492 28.6769C234.369 23.956 280.582 20.4337 351.602 16.3207C358.088 15.9451 371.108 15.1233 380.535 14.4947C389.962 13.866 404.821 12.8761 413.556 12.2946C447.177 10.057 457.194 9.22358 489.506 5.97543C510.201 3.895 510.311 3.8772 510.875 2.50901C511.496 1.00469 509.838 0.322131 505.088 0.127031C500.576 -0.0584957 416.098 -0.0351424 385.252 0.160149ZM291.144 33.02C291.536 33.0658 292.102 33.0641 292.402 33.0162C292.703 32.9683 292.383 32.9308 291.691 32.9329C290.999 32.935 290.753 32.9743 291.144 33.02Z"></path>
</svg></div>)}

{otherUserData && (
         <div className="card rounded-0 border-0" style={{transitionDuration:"0.5s", transitionTimingFunction:"ease-in-out"}}>
                    {/* <!-- Hader--> */}
            <div className="navbar card-header w-100 mx-0 px-4">
                <div className="d-flex align-items-center w-100 px-sm-3">
                <button className="btn btn-secondary closechatbutton" type="button" onClick={handleNavigate}> <i className="bi bi-arrow-left"></i></button>         
                {/* <button className="btn btn-secondary me-5 me-sm-4" type="button"  onClick={toggleMobileChat}> <i className="bi bi-arrow-left"></i> </button> */}
                <a type="button" className="btn border-0" data-bs-toggle="modal" data-bs-target="#modalId">
                <div className="position-relative flex-shrink-0">
                {otherUserData.imageurl ? 
                <Image src={otherUserData.imageurl}  alt={otherUserData.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/> :
                  <Image src="/assets/img/avatar/99.png"  alt={otherUserData.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/>
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
        <div className="card-body pb-0 pt-4 position-relative" ref={chatContainerRef} data-simplebar>
        <div className="chat-messages-container" ref={chatContainerRef} style={{ height: '500px', overflowY: 'auto' }}>
           <button onClick={handleLoadMoreMessages}>Load More</button>
     {messages.length > 0 ? (
    messages.slice(0, visibleMessagesCount).map((message, index, array) => {
      const showDay = index === 0 || isDifferentDay(message.created_at, array[index - 1].created_at);


      function isUserReceiver(user, messageUserId) {
        const studentOwnerId = user.student_profile_picture?.owner_id ?? null;
        const businessOwnerId = user.business_profile_picture?.owner_id ?? null;
        return messageUserId === studentOwnerId || messageUserId === businessOwnerId;
    }
    
    // Usage in your existing code
    const isReceiver = isUserReceiver(selectedUser, message.user_id);    
      const isSender = !isReceiver;

    return (
        <div key={message.id}>
            {showDay && (
                  <div className="d-flex py-5 text-center ms-auto me-auto justify-content-center mb-2">
                   <div className="chat-day-divider-border col-4 border-bottom" ></div> <div className="day-divider  text-center ms-auto me-auto justify-content-center">{formatDate(message.created_at)}</div><div className="chat-day-divider-border border-bottom col-4" ></div>
                  </div>
                )}

                {isSender && (
              <div className="sender-message-box ms-auto mb-3 " style={{ maxWidth: "400px" }}>
                
                <div className="d-flex align-items-end mb-2 justify-content-start">
                    <div className="message-box-end bg-primary">{message.content} </div>
           
                </div>
                <div className="ms-auto d-flex col-12 align-items-end justify-content-end text-end">
                  <div className="fs-xs text-end ms-auto text-muted">{getFormattedTimestamp(message.created_at)}</div>
                  <div className='ms-auto'>  
                    {message.user_id === 1 && (
                      <span className="text-end">
                        {message.is_read == 1 ? (
                          <i style={{ marginLeft: "60px !important", fontSize: "17px" }} className="text-secondary bi bi-check2-all"></i>
                        ) : (
                          <i style={{ marginLeft: "60px !important", fontSize: "17px" }} className="text-secondary bi bi-check2"></i>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>)}
              

                {(isReceiver  && <div className="reciever-message-box ms-0 mb-3 ms-0 mb-3 " style={{ maxWidth: "400px" }}>
                
                <div className={`d-flex align-items-end mb-2 ${message.user_id === 1 ? "justify-content-start" : "justify-content-end"}`}>
                      <div className="flex-shrink-0 pe-2 ms-1">
                      {selectedUser.imageurl ? (<Image className="rounded-circle" src={selectedUser.imageurl} width="48" height="59" alt={selectedUser.fullname} />):
                      (<Image className="rounded-circle" src="/assets/img/avatar/99.png" width="48" height="59" alt={selectedUser.fullname} />)}
                        
                      </div>
                      <div className="message-box-start">{message.content}</div>
                </div>
                <div className="d-flex col-12 align-items-end justify-content-space-between">
                  <div className="fs-xs text-muted">{getFormattedTimestamp(message.created_at)}</div>
                  <div className='ms-auto'>  
                      <span className="d-none text-end">
                        {message.is_read == 1 ? (
                          <i style={{ marginLeft: "60px !important", fontSize: "17px" }} className="text-secondary bi bi-check2-all"></i>
                        ) : (
                          <i style={{ marginLeft: "60px !important", fontSize: "17px" }} className="text-secondary bi bi-check2"></i>
                        )}
                      </span>
                  </div>
                </div>
              </div>)}

               
             </div>
            );
          })
      ): (
          <div className="no-messages">No messages available</div>
        )}    <div>{isSendingMessage &&
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
                  <div id="bottomchat" ></div>

        </div>

        </div>

        {showLoadMoreButton && (
      <button onClick={handleLoadMoreMessages} style={{ position: 'absolute', top: '10px' }}>
        Load More Messages
      </button>
    )}          
                 
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

</div>


 



{!otherUserData && (
<div>
   <div>
  {selectedUser && (
         <div className="card rounded-0 border-0" style={{transitionDuration:"0.5s", transitionTimingFunction:"ease-in-out"}}  ref={chatContainerRef}>
                    {/* <!-- Hader--> */}
            <div className="navbar card-header w-100 mx-0 px-4">
                <div className="d-flex align-items-center w-100 px-sm-3">
                <button className="btn btn-secondary closechatbutton" type="button"  onClick={closeChat}> <i className="bi bi-arrow-left"></i> </button>
                {/* <button className="btn btn-secondary me-5 me-sm-4" type="button"  onClick={toggleMobileChat}> <i className="bi bi-arrow-left"></i> </button> */}
                <a type="button" className="btn border-0" data-bs-toggle="modal" data-bs-target="#modalId">
                <div className="position-relative flex-shrink-0">
                {selectedUser.imageurl ? 
                <Image src={selectedUser.imageurl}  alt={selectedUser.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/> :
                  <Image src="/assets/img/avatar/99.png"  alt={selectedUser.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/>
                  }<span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem"}}></span></div>
                <div className="h6 ps-1 me-1 user-full-name mb-0">{selectedUser.fullname}</div></a>
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
    <div ref={bottomMarkerRef}></div>    {visibleMessagesCount >= "20" && (
        <button onClick={handleLoadMoreMessages}>Load More</button>
      )}
     {isLoading ? (
        // <div className='chat-message-loading'>
          <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      // </div>
      ) :
    
   <div>
   
   {messages.length > 0 ? (
    messages.slice(0, visibleMessagesCount).map((message, index, array) => {
      const showDay = index === 0 || isDifferentDay(message.created_at, array[index - 1].created_at);


      function isUserReceiver(user, messageUserId) {
        const studentOwnerId = user.student_profile_picture?.owner_id ?? null;
        const businessOwnerId = user.business_profile_picture?.owner_id ?? null;
        return messageUserId === studentOwnerId || messageUserId === businessOwnerId;
    }
    
    // Usage in your existing code
    const isReceiver = isUserReceiver(selectedUser, message.user_id);    
      const isSender = !isReceiver;

    return (
        <div key={message.id}>
            {showDay && (
                  <div className="d-flex py-5 text-center ms-auto me-auto justify-content-center mb-2">
                   <div className="chat-day-divider-border col-4 border-bottom" ></div> <div className="day-divider  text-center ms-auto me-auto justify-content-center">{formatDate(message.created_at)}</div><div className="chat-day-divider-border border-bottom col-4" ></div>
                  </div>
                )}

                {isSender && (
              <div className="sender-message-box ms-auto mb-3 " style={{ maxWidth: "400px" }}>
                
                <div className="d-flex align-items-end mb-2 justify-content-start">
                    <div className="message-box-end bg-primary">{message.content} </div>
           
                </div>
                <div className="ms-auto d-flex col-12 align-items-end justify-content-end text-end">
                  <div className="fs-xs text-end ms-auto text-muted">{getFormattedTimestamp(message.created_at)}</div>
                  <div className='ms-auto'>  
                    {message.user_id === 1 && (
                      <span className="text-end">
                        {message.is_read == 1 ? (
                          <i style={{ marginLeft: "60px !important", fontSize: "17px" }} className="text-secondary bi bi-check2-all"></i>
                        ) : (
                          <i style={{ marginLeft: "60px !important", fontSize: "17px" }} className="text-secondary bi bi-check2"></i>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>)}
              

                {(isReceiver  && <div className="reciever-message-box ms-0 mb-3 ms-0 mb-3 " style={{ maxWidth: "400px" }}>
                
                <div className={`d-flex align-items-end mb-2 ${message.user_id === 1 ? "justify-content-start" : "justify-content-end"}`}>
                      <div className="flex-shrink-0 pe-2 ms-1">
                      {selectedUser.imageurl ? (<Image className="rounded-circle" src={selectedUser.imageurl} width="48" height="59" alt={selectedUser.fullname} />):
                      (<Image className="rounded-circle" src="/assets/img/avatar/99.png" width="48" height="59" alt={selectedUser.fullname} />)}
                        
                      </div>
                      <div className="message-box-start">{message.content}</div>
                </div>
                <div className="d-flex col-12 align-items-end justify-content-space-between">
                  <div className="fs-xs text-muted">{getFormattedTimestamp(message.created_at)}</div>
                  <div className='ms-auto'>  
                      <span className="d-none text-end">
                        {message.is_read == 1 ? (
                          <i style={{ marginLeft: "60px !important", fontSize: "17px" }} className="text-secondary bi bi-check2-all"></i>
                        ) : (
                          <i style={{ marginLeft: "60px !important", fontSize: "17px" }} className="text-secondary bi bi-check2"></i>
                        )}
                      </span>
                  </div>
                </div>
              </div>)}

               
             </div>
            );
          })
      ) : (
        <div className="no-conversation-yet-container">
          {!isDarkMode && <div className="no-conversation-yet">No messages available</div>}
          {isDarkMode && <div className="no-conversation-yet-dark">No messages available</div>}
        </div>
      )}</div>

     
      
}


</div>
      <div>{isSendingMessage &&
        <div className="isSendingMessage ms-auto mb-5" style={{ maxWidth: "400px" }}>
        <div className="d-flex align-items-end mb-2 justify-content-start">
        <div className="message-box-end bg-primary me-1">{text}</div>
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>    </div>
        <div className="ms-auto d-flex col-12 align-items-end justify-content-end text-end">
        {/* <div className="fs-xs text-end ms-auto text-muted">{new Date().toLocaleTimeString()}</div> */}
          {/* <div className='ms-auto'>  
          
          </div> */}
        </div>
      </div> 
      }</div>  
                  <div id="bottomchat" ></div>
                 
                  </div>
                  {showButton && <button onClick={() => scrollToBottomChat({scrollbehavior: "smooth"})} className='btn scroll-to-bottom-arrow'><i className='bi bi-arrow-down'></i></button>}
  


        {/* image/doc uploads  */}
        {/* <div className="add-product-input-group upload-image-input-group container d-flex" style={{ display: img.length > 0 ? 'block' : 'none', backgroundColor: img.length > 0 ? 'transparent' : '' }}>
                    <input
                    className='input d-none add-img-product-input'
                    type="file"
                    name="image"
                    id="add-img-product-input"
                    onChange={handleImageChange}
                    required
                    multiple
                    style={{ display: img.length === 0 ? 'block' : 'none' }}
                    />  <div className="add-paintings-image-preview">
                  <div className="dashboard-input-upload-image-container">
                    {img.map((image, index) => (
                  <div  key={index} className="dashboard-input-upload-image bg-secondary">
                        <Image src={image} alt="" />
                        <button className="dashboard-delete-one-uploded-image" type='button' onClick={() => handleRemoveImage(index)}> <i className="bi bi-trash"></i> </button>
                    </div>))}
                    </div>
                    {img.length >= 1 && (<label className='dashboard-upload-more-images' htmlFor="add-more-images-input"> <i className="mt-4 bi bi-plus"></i> </label>)}
                    {img.length >= 1 && (<button type="button" className='clear-uploaded-images-button' onClick={handleClearImages}><i className="bi bi-trash"></i> </button>)}
                    <input
                        type="file"
                        name="moreImages"
                        id="add-more-images-input"
                        onChange={handleMoreImagesChange}
                        multiple
                        style={{ display: 'none' }}
                        />   </div>

                    </div> */}

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
  </div></div>)}
 
























{selectedUser && (<div className="modal fade modal-z-index-one" id="modalId" tabIndex="-1" role="dialog">
<div className="modal-dialog modal-fullscreen  profile-modal  modal-z-index-two"  role="document">

<div className="modal-content profile-modal-inner pt-3  modal-z-index-three">

<ul className="nav nav-tabs flex-nowrap text-nowrap mb-n2" role="tablist">
<li className="nav-item">
<a href="#userprofile" className="nav-link flex-column flex-sm-row px-3 px-sm-4 active" data-bs-toggle="tab" role="tab" aria-selected="true">
<i className="ai-user me-sm-2 ms-sm-n1"></i>
<span className="d-none d-sm-inline">Profile</span>
<span className="fs-sm fw-medium d-sm-none pt-1">Profile</span>
</a>
</li>
<li className="nav-item">
<a href="#sharedmedia" className="nav-link flex-column flex-sm-row px-3 px-sm-4" data-bs-toggle="tab" role="tab" aria-selected="false">
<i className="bi bi-collection-fill me-sm-2 ms-sm-n1"></i>
<span className="d-none d-sm-inline">Shared Media</span>
<span className="fs-sm fw-medium d-sm-none pt-1">Shared Media</span>
</a>
</li>
<li className="nav-item">
<a href="#settings" className="nav-link flex-column flex-sm-row px-3 px-sm-4" data-bs-toggle="tab" role="tab" aria-selected="false">
<i className="bi bi-gear-wide-connected me-sm-2 ms-sm-n1"></i>
<span className="d-none d-sm-inline">Settings</span>
<span className="fs-sm fw-medium d-sm-none pt-1">Settings</span>
</a>
</li>
<button type="button" className="btn ms-auto fs-lg btn-secondary" data-bs-toggle="modal" data-bs-target="#modalId">
<button className="btn-close btn-secondary ms-auto" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
</button>
</ul>

<div className="modal-body tab-content" style={{height:"500px", overflowY:"scroll"}}>
<div className="tab-pane fade show active mt-n2" id="userprofile" autocomplete="off">

<div className="d-md-flex align-items-center mt-2">
  <div className="d-sm-flex align-items-start">
   {selectedUser.imageurl ? 
    <Image src={selectedUser.imageurl}  alt={selectedUser.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={80} height={80}/> :
    <Image src="/assets/img/avatar/99.png"  alt={selectedUser.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={80} height={80}/>
    }
     <div className="pt-3 pt-sm-0 ps-1">
      <h3 className="h5 mb-2 mt-4">{selectedUser.fullname}<i className="ai-circle-check-filled fs-base text-success ms-1"></i></h3>
      <div className="col-md-12 mb-4 mb-md-0">
    <table className="table mt-5 mw-auto ms-0 text-start mb-0">
      
    <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Email</td>
        <td className="border-0 mb-2 fw-medium py-1 ps-3">{selectedUser.email}</td>
      </tr>
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Phone</td>
        <td className="border-0 mb-2 fw-medium py-1 ps-3">{selectedUser.phone}</td>
      </tr>
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Gender</td>
        <td className="border-0 mb-2 fw-medium py-1 ps-3">{selectedUser.gender}</td>
      </tr>
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Communication</td>
        <td className="border-0 mb-2 fw-medium py-1 ps-3">Mobile, email</td>
      </tr>
    </table>
  </div>

    </div>
  </div>

</div>


</div>


<div className="tab-pane fade" id="settings" autocomplete="off"Name>
<section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
<div className="card-body">
<div className="d-flex align-items-center pb-4 mt-sm-n1 mb-0 mb-lg-1 mb-xl-3"><i className="bi bi-gear text-primary lead pe-1 me-2"></i>
  <h2 className="h4 mb-0">Settings</h2>
  <button className="btn btn-sm btn-outline-secondary ms-auto" type="button" data-bs-toggle="checkbox" data-bs-target="#checkboxList">Toggle all</button>
</div>
<div id="checkboxList">
  <div className="form-check form-switch d-flex pb-md-2 mb-4">
    <input className="text-start form-check-input flex-shrink-0" type="checkbox" checked id="product-sold"/>
    <label className="text-start form-check-label ps-3 ps-sm-4" for="product-sold"><span className="h6 d-block mb-2">Product sold notifications</span><span className="fs-sm text-muted">Send an email when someone purchased one of my products</span></label>
  </div>
  <div className="form-check form-switch d-flex pb-md-2 mb-4">
    <input className="text-start form-check-input flex-shrink-0" type="checkbox" checked id="product-update"/>
    <label className="text-start form-check-label ps-3 ps-sm-4" for="product-update"><span className="h6 d-block mb-2">Product update notifications</span><span className="fs-sm text-muted">Send an email when a product I`ve purchased is updated</span></label>
  </div>
  <div className="form-check form-switch d-flex pb-md-2 mb-4">
    <input className="text-start form-check-input flex-shrink-0" type="checkbox" id="product-comment"/>
    <label className="text-start form-check-label ps-3 ps-sm-4" for="product-comment"><span className="h6 d-block mb-2">Product comment notifications</span><span className="fs-sm text-muted">Send an email when someone comments on one of my products</span></label>
  </div>
  <div className="form-check form-switch d-flex pb-md-2 mb-4">
    <input className="text-start form-check-input flex-shrink-0" type="checkbox" checked id="product-review"/>
    <label className="text-start form-check-label ps-3 ps-sm-4" for="product-review"><span className="h6 d-block mb-2">Product review notifications</span><span className="fs-sm text-muted">Send an email when someone leaves a review with his/her rating</span></label>
  </div>
</div>
<div className="form-check form-switch d-flex">
  <input className="text-start form-check-input flex-shrink-0" type="checkbox" disabled id="daily-summary"/>
  <label className="text-start form-check-label opacity-100 ps-3 ps-sm-4" for="daily-summary"><span className="h6 text-muted d-block mb-2">Daily summary emails<span className="badge bg-faded-danger text-danger ms-3">Only for premium</span></span><span className="fs-sm text-muted">Send an email when someone leaves a review with his/her rating</span></label>
</div>
</div>
</section>

</div>



<div className="tab-pane fade" id="sharedmedia" autocomplete="off">


                        </div>
                     </div>
                 </div>
              </div>
        </div>)}











    </>
  )

}