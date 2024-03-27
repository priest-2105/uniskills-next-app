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
import CHAT_RECIEVER from './reciever/[recieverId].js';
import CHAT_DIRECT from './reciever/direct.js';
// import { socket, useSocket } from './usesocket.js';

const socket = io.connect("http://localhost:3001");


export default function CHATMAIN() {



  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "Chat | "+config.APP_NAME, body_class: "page-wrapper bg-secondary overflow-hidden px-2" };
  
  const router = useRouter();
  const [mainUserId, setMainUserId] = useState(null);
  const [receiverId, setReceiverId] = useState(null);
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
  const [chatData, setChatData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { params } = router.query; 
  
  
 
  useEffect(() => {
    if (params && params.length > 0) {
      setMainUserId(params[0]); 
      setReceiverId(params[1]); 
      // setActiveTab("pills-direct");
    }else{
      setMainUserId(params[0]); 
    }
  }, [params]);


  const [otherUserData, setOtherUserData] = useState(null);
   


  const toggleDirectChat = () => {
    if (window.innerWidth <= 990) {
      toggleDirectMobileChat();
    }
  };
 
  const toggleDirectMobileChat = () => {
    if (showChat) {
      setActiveTab('pills-chat-direct');
    }
  };

  
useEffect(() => {
  const fetchChatData = async () => {
    if (mainUserId && receiverId) {
      const url = `https://private4testing.uniskills.net/api/v3/auth/direct/messaging/${mainUserId}/${receiverId}`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`Error fetching direct message data: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.status === 'success') {
          const otherUserDatas = data.data.data.original.other_user_datas;
          if (otherUserDatas) {
            setOtherUserData(otherUserDatas);
            // toggleDirectChat();
          } else {
            console.log('other_user_datas not found in the response');
          }
        } else {
          console.error('Failed to fetch chat data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    }
  };

  fetchChatData();
}, [mainUserId, receiverId]); // toggleDirectChat needs to be stable or wrapped in useCallback if defined within this component


  useEffect(() => {
    console.log(otherUserData?.firstname, otherUserData?.lastname);
  }, [otherUserData]);
  
  

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
    if (mainUserId && receiverId) {
      setActiveTab("pills-direct");
    } else if (selectedUser) {
      const truncatedCodec = truncateCodec(selectedUser.codec, -2);
      setActiveTab(`pills-chat-${truncatedCodec}`);
    } else {
      setActiveTab("pills-default");
    }
  }, [mainUserId, receiverId, selectedUser]); 


  
  
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


    <div className={`tab-content ${showChat ? 'chat-convo-active' : ''} chat-conversation-window`} style={{ width: "100%", overflow: "hidden" }} id="pills-tabContent">
      {/* <!-- Chat window--> */}
      <CHAT_RECIEVER 
      setSelectedUser={setSelectedUser} 
      selectedUser={selectedUser}  
      token={token} fetchData={fetchData} 
      setShowChat={setShowChat}
      showChat={showChat} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      truncateCodec={truncateCodec} 
      toggleChat={toggleChat} 
      otherUserData={otherUserData}
      />
 


</div>
</div>
</div>
</main>




</div>


 
      </>




    </ChatLayout>
    </div>
  )

}
