// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';
import { useCallback, useEffect, useRef, useState } from 'react';

// Import the APPs layout component, to be used to struct this page
import ChatLayout from '../layout/chat_layout.js';
import io from 'socket.io-client';
// Bring in the config file
import config from '../../config.js';
import CHATLIST from './chatlist.js';
import CHATMESSAGE from './chatmessage.js';
import { useRouter } from 'next/router.js';
// import { socket, useSocket } from './usesocket.js';

const socket = io.connect("http://localhost:3001");


export default function CHATMAIN() {



  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "Chat | "+config.APP_NAME, body_class: "page-wrapper bg-secondary overflow-hidden px-2" };
  // const [mainUserId, setMainUserId] = useState('')
  
  const router = useRouter();
  const mainUserId = router.query.mainUserId;
  const chatContainerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState("pills-default");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([])
  const [isSendingMessage, setIsSendingMessage] = useState(false) 
  const [chatUsers, setChatUsers] = useState([]);
  const [token, setToken] = useState('');
  const [text, setText] = useState('');
  const [visibleMessages, setVisibleMessages] = useState(20);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const fetchToken = async () => {
      try {
        console.log(`Fetching token for mainUserId: ${mainUserId}`);
        const response = await fetch(`https://private4testing.uniskills.net/api/v3/auth/messages/${mainUserId}`, { method: 'GET' });

        if (!response.ok) {
          console.error(`Failed to fetch token: Server responded with status ${response.status}`);
          return;
        }

        const data = await response.json();
        if (data && data.status === 'success') {
          console.log(`Token fetched successfully: ${data.data.token}`);
          setToken(data.data.token); // Store fetched token in state
        } else {
          console.error('Failed to fetch token:', data.message);
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, [mainUserId]);


  useEffect(() => {
    setIsClient(true);
  }, []);



  const handleThemeToggle = () => {
    const root = document.getElementsByTagName('html')[0];
    setIsDarkMode(prevMode => !prevMode);

    if (isDarkMode) {
      root.classList.remove('dark-mode');
      window.localStorage.setItem('mode', 'light');
    } else {
      root.classList.add('dark-mode');
      window.localStorage.setItem('mode', 'dark');
    }
  };
 
 

  const toggleChat = () => {
    if (window.innerWidth <= 990) {
      toggleMobileChat();
    } 
    else {
      setShowChat((prevShowChat) => {
        const isShowingChat = !prevShowChat;
        if (isShowingChat) {
          setSelectedUser(null);
        } else {
        }
        return isShowingChat;
      }); 
    }
  };

const closeChat = () => {
  setSelectedUser(null);
  setShowChat(false);
};
  
  const toggleMobileChat = () => {
    if (showChat) {
      setShowChat(false);
    } else {
      const truncatedCodec = selectedUser ? truncateCodec(selectedUser.codec, -2) : '';
      setActiveTab(`pills-chat-${truncatedCodec}`);
      setShowChat(true);
      scrollToBottomChat();
    }
  };
  
  const scrollToBottomChat = () => {
    setTimeout(() => {
      const bottomChatElement = document.querySelector('#bottomchat');
      if (bottomChatElement) {
        bottomChatElement.scrollIntoView();
      }
    }, 200);
  };
  
  useEffect(() => {
    if (!showChat) {
      scrollToBottomChat();
    }else{
    }
  }, [showChat]);
  
  useEffect(() => {
    if (selectedUser) {
      const truncatedCodec = truncateCodec(selectedUser.codec, -2);
      setActiveTab(`pills-chat-${truncatedCodec}`);
    } else {
      setActiveTab("pills-default");
    }
  }, [selectedUser]);


  
  
  // Adjust fetchData to use the token from state instead of fetching it again
  const fetchData = useCallback(async () => {
    if (!token) {
      console.log('Token is not yet available.');
      return;
    }

    try {
      // Use the token from state in the Authorization header
      const response = await fetch(`https://private4testing.uniskills.net/api/v3/chats/chat-users`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Use the token stored in state
        },
      });
      const data = await response.json();

      if (data && data.chatUsers) {
        setChatUsers(data.chatUsers);
      } else {
        console.error('Error with API response:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [token]); // Depend on the token state

  // Call fetchData in a useEffect to run it when token becomes available or changes
  useEffect(() => {
    fetchData();
  }, [fetchData, token]);
  

  useEffect(() => {
    if (socket && selectedUser) {
      socket.emit('joinChat', selectedUser.chats[0].id);
    }
  }, [socket, selectedUser]);

  


  const sendMessage = async () => {
    if (!token) {
      console.error('Token is not available. Cannot send message.');
      return;
    }
    setIsSendingMessage(true); 
    
    const apiUrl = 'http://localhost:3001/api/proxy';
    const payload = {
      message: text,
      mainUserId: mainUserId,
      chatCodec: selectedUser.codec,
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
  
  

const fetchMessages = async () => {
  if (selectedUser && token) {
    try {
      const response = await fetch(`https://private4testing.uniskills.net/api/v3/auth/chats/chat-users`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      const userChats = data.chatUsers.find(user => user.codec === selectedUser.codec)?.chats || [];
      
      // Assuming messages are already sorted by created_at
      const allMessages = userChats.reduce((allMessages, chat) => allMessages.concat(chat.messages), []);
      setMessages(allMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  } else {
    console.log('Token is not available. Cannot fetch messages.');
  }
};

useEffect(() => {
  const handleChatListUpdated = () => {
    // Calls fetchData and fetchMessages to refresh the chat list and messages
    fetchData();  
    fetchMessages();
  };

  // Setup socket event listeners
  socket.on('chatListUpdated', handleChatListUpdated);

  // Cleanup function to remove event listeners
  return () => {
    socket.off('chatListUpdated', handleChatListUpdated);
  };
}, [socket, fetchData, fetchMessages]); // Include fetchData and fetchMessages in the dependency array



useEffect(() => {
  // Listen for 'newMessage' event from the server
  socket.on('newMessage', (newMessage) => {
    // Update the messages state to include the new message
    setMessages(currentMessages => [...currentMessages, newMessage]);
  });

  return () => {
    // Clean up the event listener
    socket.off('newMessage');
  };
}, [socket]);
 
         
  
  
  
  useEffect((user) => {
    socket.on('chatListUpdated', () => {
        fetchData();  
        fetchMessages(); 
      });
  
    return () => {
        socket.off('chatListUpdated');
        socket.off('newMessage');
    };
}, [socket, fetchMessages , fetchData]); 


  

    function getFormattedTimestamp(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleTimeString(); 
    }

    const handleTextChange = (event) => {
      setText(event.target.value);
    };
   
    
    const truncateContent = (content, wordLimit) => {
      if (!content) {
        return '';
      }
    
      const words = content.split(' ');
      const truncated = words.slice(0, wordLimit).join(' ');
    
      return truncated + (words.length > wordLimit ? '...' : '');
    };

   const truncateCodec = (content, charLimit) => {
    if (!content) {
      return '';
    }
    if (content.length > charLimit) {
      return content.slice(0, charLimit);
    }
    return content;
  };
    
  const handleChatItemClick = (user) => {
    setSelectedUser(user);
    const truncatedCodec = truncateCodec(user.codec, -2);
    setActiveTab(`pills-chat-${truncatedCodec}`);
    toggleChat();
  };
  
  
     const isDifferentDay = (date1, date2) => {
    return new Date(date1).toLocaleDateString() !== new Date(date2).toLocaleDateString();
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toDateString();
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

  
  

    


  return (
    <div>
    <ChatLayout initials={page_initials}>

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


<div className="overflow-hidden">


{/* <div className="page-loading active">
<div className="page-loading-inner">
<div className="page-spinner"></div><span>Loading...</span>
</div>
</div> */}
{/* <!-- Page wrapper--> */}
<main className="page-wrapper overflow-hidden">
{/* <!-- Page content--> */}
<div className="overflow-hidden ps-lg-4 ps-sm-0 ps-xs-0">
<div className="d-flex position-relative overflow-hidden" style={{height:"100vh", overflow:"hidden" }}>




{/* <!-- Contacts list--> */}
<div className="col-md-12 col-lg-4 col-xl-4 col-xs-12 col-sm-12 col-xs-12  pb-xl-0 ps-1 pt-2 mt-4 chat-list">



<div className="chat-list-header d-flex  align-items-center col-xl-4 col-md-12 col-lg-4 col-sm-12 col-xs-12">

    {/* {isDarkMode && <Image src="/Uniskills Logo 48a2c3ff.png" height="120px" width="120px" alt="" /> }
    {!isDarkMode && <Image src="/logo.png" height="120px" width="120px" alt="" />} */}

  <h4 className="ms-3 mt-2 text-start">Chat</h4><a className='d-none'  href='#bottomchat' id='scrollToBottomChat'>bottom</a>
  <div className="form-check ms-5 ps-5 text-end form-switch mode-switch mb-1 order-lg-2" data-bs-toggle="mode">
      <input
          className="form-check-input"
          type="checkbox"
          id="theme-mode"
          Checked
          checked={!isDarkMode}
          onChange={handleThemeToggle}
      />
      <label className="ms-auto form-check-label" htmlFor="theme-mode">
          <i className={isDarkMode ? 'ai-moon fs-lg' : 'ai-sun fs-lg'}></i>
      </label>
      </div>
</div>
  <ul className="nav nav-pills col-12 col-sm-12 mb-3" id="pills-tab" role="tablist" data-simplebar style={{ height: "85vh" }}>
 <li className='d-none'></li>
  {chatUsers
  .sort((b, a) => new Date(a.chats[0].created_at) - new Date(b.chats[0].created_at))
  .map((user) => (<a
    key={truncateCodec(user.codec, -2)}
    className={`nav-item d-flex align-items-center text-decoration-none px-2 col-11 py-2 ${activeTab === `pills-chat-${truncateCodec(user.codec, -2)}` ? 'active' : ''}`}
    id={`pills-chat-${truncateCodec(user.codec, -2)}-tab`}
    data-bs-toggle="pill"
    data-bs-target={`#pills-chat-${truncateCodec(user.codec, -2)}`}
    type="button"
    role="tab"
    aria-controls={`pills-chat-${truncateCodec(user.codec, -2)}`}
    aria-selected={activeTab === `pills-chat-${truncateCodec(user.codec, -2)}`}
    onClick={() => handleChatItemClick(user)}
    style={{ marginLeft: "-100%", transitionDuration:"0.4s", transitionTimingFunction:"ease-in-out"}}
  >
    <div className="position-relative flex-shrink-0 my-1">
      {user.imageurl ? (
        <Image src={user.imageurl} alt={user.firstname} className="rounded-circle" width={48} height={50} />) : (
              <Image src="/assets/img/avatar/09.jpg"  alt={user.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/>          
        ) }
      <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{ width: ".625rem", height: ".625rem" }}></span>
    </div>
 
    <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
      <div className="me-3">
        <div className="h6 mb-1">{user.fullname}</div>
        {user && user.chats && user.chats[0] && user.chats[0].messages && user.chats[0].messages.length >= 1 ? (
          <div className="latest-message">
        {user.chats[0].messages
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 1)
          .map((latestMessage) => (
            <div key={latestMessage.id}>
              {/* Render the latest message content */}
              <p className="latest-message-text-body-mobile text-body fs-sm mb-0">{truncateContent(latestMessage.content, 25)}</p>
              <p className="latest-message-text-body-desktop text-body fs-sm mb-0">{truncateContent(latestMessage.content, 4)}</p>
              <span className="text-muted fs-xs">{getFormattedTimestamp(latestMessage.created_at)}  {formatDate(latestMessage.created_at)}</span>
     </div>
            ))}
          </div>
        ) : (
          <div className="no-conversation-yet-container">
            {!isDarkMode && <div className="no-conversation-yet">No messages available</div>}
            {isDarkMode && <div className="no-conversation-yet-dark">No messages available</div>} 
          </div>
        )}
      </div>
      <div className="text-end">
      <span className="badge bg-danger fs-xs lh-1 py-1 px-2">
        {user && user.chats.reduce((count, chat) => {
          return count + chat.messages.filter((message) => message.is_read === "0").length;
        }, 0)}
      </span>
        </div>
        </div>
        </a>
    ))}

 
    </ul>



    </div>





{/* <!-- Chat window--> */}


<div className={`tab-content ${showChat ? 'chat-convo-active' : ''} chat-conversation-window`} style={{ width: "100%", overflow: "hidden" }} id="pills-tabContent">

<div className={`default-chat-welcome-window tab-pane fade ${activeTab === 'pills-default' ? 'show  active' : ''}`} id="pills-default" role="tabpanel" aria-labelledby="pills-default-tab" style={{ height: "97vh", overflow: "hidden"}}>
<h1 className="display-3 text-center mx-auto pt-5 my-2 my-sm-4" style={{marginTop:"20vh", maxWidth: "680px"}}>Welcome To <br/> <b className="text-primary"> UNISKILLS</b> Chat</h1>
<svg className="d-block mx-auto text-primary" width="511" height="40" viewBox="0 0 511 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M385.252 0.160149C313.41 0.614872 292.869 0.910678 253.008 2.06539C211.7 3.26203 182.137 4.46154 135.231 6.84429C124.358 7.39665 112.714 7.92087 99.0649 8.47247C48.9242 10.4987 39.1671 11.0386 22.9579 12.6833C14.9267 13.4984 7.98117 14.0624 4.08839 14.2162C0.627411 14.3527 0 14.4386 0 14.7762C0 15.0745 5.53537 15.3358 8.56298 15.1804C9.64797 15.1248 12.5875 14.9887 15.0956 14.8782C17.6037 14.7676 23.123 14.4706 27.3608 14.2183C37.3399 13.6238 42.1312 13.4363 59.2817 12.9693C88.1133 12.1844 109.893 11.43 136.647 10.2898C146.506 9.86957 159.597 9.31166 165.737 9.04993C212.308 7.06466 269.195 5.29439 303.956 4.74892C346.139 4.08665 477.094 3.50116 474.882 3.98441C474.006 4.17607 459.021 5.6015 450.037 6.34782C441.786 7.03345 428 8.02235 411.041 9.14508C402.997 9.67773 391.959 10.4149 386.51 10.7832C366.042 12.1673 359.3 12.5966 347.67 13.2569C294.096 16.2987 258.708 18.9493 209.451 23.6091C180.174 26.3788 156.177 29.5584 129.396 34.2165C114.171 36.8648 112.687 37.3352 114.186 39.0402C115.161 40.1495 122.843 40.2933 138.338 39.492C166.655 38.0279 193.265 36.8923 219.043 36.048C235.213 35.5184 237.354 35.4296 253.795 34.6075C259.935 34.3005 270.549 33.8517 277.382 33.6105L289.804 33.1719L273.293 32.999C248.274 32.7369 221.435 32.7528 212.596 33.035C183.334 33.9693 167.417 34.6884 141.419 36.2506C135.222 36.623 129.994 36.8956 129.801 36.8566C127.94 36.4786 169.612 30.768 189.492 28.6769C234.369 23.956 280.582 20.4337 351.602 16.3207C358.088 15.9451 371.108 15.1233 380.535 14.4947C389.962 13.866 404.821 12.8761 413.556 12.2946C447.177 10.057 457.194 9.22358 489.506 5.97543C510.201 3.895 510.311 3.8772 510.875 2.50901C511.496 1.00469 509.838 0.322131 505.088 0.127031C500.576 -0.0584957 416.098 -0.0351424 385.252 0.160149ZM291.144 33.02C291.536 33.0658 292.102 33.0641 292.402 33.0162C292.703 32.9683 292.383 32.9308 291.691 32.9329C290.999 32.935 290.753 32.9743 291.144 33.02Z"></path>
</svg></div>


<div className={`tab-pane each-chat-tab fade ${activeTab === `pills-chat-${truncateCodec(selectedUser?.codec, -2)}` ? 'show active' : 'active'}`} id={`pills-chat-${truncateCodec(selectedUser?.codec, -2)}`} role="tabpanel" aria-labelledby={`pills-chat-${truncateCodec(selectedUser?.codec, -2)}-tab`} style={{ height: "100vh", overflow: "hidden" }}>
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
                  <Image src="/assets/img/avatar/09.jpg"  alt={selectedUser.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/>
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
     {selectedUser && selectedUser.chats && selectedUser.chats.length >= 20 && ( <button className='btn btn-secondary text-center justify-content-center ms-auto me-auto' onClick={() => setVisibleMessages(visibleMessages + 10)}>Load More Messages</button>)}
     <div ref={bottomMarkerRef}></div> 
     <div>
     {
  selectedUser && selectedUser.chats && selectedUser.chats.length >= 1 ? (
    selectedUser.chats
      .reduce((allMessages, chat) => allMessages.concat(chat.messages), [])
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      .slice(-visibleMessages) 
      .map((message, index, visibleArray) => { 
        const showDay = index === 0 || isDifferentDay(visibleArray[index - 1].created_at, message.created_at);

      const chatForMessage = selectedUser.chats.find(chat => chat.messages.some(m => m.id === message.id));
      
      // This line is where the corrected logic is applied
      const isReceiver =  chatForMessage.pivot.user_id === message.user_id ;
      // const isReceiver = chatForMessage.users.some(user => user.pivot.user_id === message.user_id && user.codec === selectedUser.codec);
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
                        <Image className="rounded-circle" src={selectedUser.imageurl} width="48" height="59" alt={setSelectedUser.fullname} />
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
  </div></div>
 





</div>





</div>
</div>
</main>



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
    <Image src="/assets/img/avatar/09.jpg"  alt={selectedUser.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={80} height={80}/>
    }
     <div className="pt-3 pt-sm-0 ps-1">
      <h3 className="h5 mb-2 mt-4">{selectedUser.fullname}<i className="ai-circle-check-filled fs-base text-success ms-1"></i></h3>
      <div className="col-md-12 mb-4 mb-md-0">
    <table className="table mt-5 mw-auto ms-0 text-start mb-0">
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Phone</td>
        <td className="border-0 mb-2 fw-medium py-1 ps-3">{selectedUser.phone}</td>
      </tr>
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Language</td>
        <td className="border-0 mb-2 fw-medium py-1 ps-3">English</td>
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

{/* <LightGallery className="lightgallery" plugins={[lgZoom, lgVideo]} mode="lg-fade">
            <a
                data-lg-size="1406-1390"
                className="gallery-item"
                data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
            >
                <Image
                className="img-responsive"
                src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                />
            </a>
            <a
                data-lg-size="1400-1400"
                data-pinterest-text="Shinimamiya, Osaka, Japan"
                data-tweet-text="Shinimamiya, Osaka, Japan"
                className="gallery-item"
                data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
            >
                <Image
                className="img-responsive"
                src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                />
            </a>
            <a
                data-lg-size="1400-1400"
                className="gallery-item"
                data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
            >
                <Image
                className="img-responsive"
                src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                />
            </a>
            <a
                data-lg-size="1400-1400"
                className="gallery-item"
                data-iframe="true"
                data-src="https://www.lightgalleryjs.com/pdf/sample.pdf"
            >
                <Image
                className="img-responsive"
                src="https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80"
                />
            </a>
            <a
                className="gallery-item"
                data-src="https://www.youtube.com/watch?v=egyIeygdS_E&mute=0"
                key="4"
            >
                <Image
                style={{ maxWidth: '400px' }}
                className="img-responsive"
                alt=""
                src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
                />
            </a>
            </LightGallery> */}

                        </div>
                     </div>
                 </div>
              </div>
        </div>)}












   





</div>




























      </>




    </ChatLayout>
    </div>
  )

}

