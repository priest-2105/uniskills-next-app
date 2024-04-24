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



const socket = io.connect(process.env.NEXT_PUBLIC_SERVER_URL);


export default function CHATMAIN() {



  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "Chat | "+config.APP_NAME, body_class: "page-wrapper bg-secondary overflow-hidden px-2" };



  const router = useRouter();
  const [mainUserId, setMainUserId] = useState(null);
  const [receiverId, setReceiverId] = useState(null);
  const chatContainerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [chatListMessages, setChatListMessages] = useState([]); 
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]) 
  const [isSendingMessage, setIsSendingMessage] = useState(false) 
  const [chatUsers, setChatUsers] = useState([]);
  const [token, setToken] = useState('');
  const [text, setText] = useState('');
  const [visibleMessages, setVisibleMessages] = useState(20);
  const [chatMessages, setChatMessages] = useState([])
  const [visibleChatMessages, setVisibleChatMessages] = useState(20)
  const [directMessages, setDirectMessages] = useState([]);
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




  useEffect(() => {
    const fetchChatData = async () => {
      if (mainUserId && receiverId) {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v3/auth/direct/messaging/${mainUserId}/${receiverId}`;
  
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
            // Set the other user's data
            const otherUserDatas = data.data.data.original.other_user_datas;
            setOtherUserData(otherUserDatas);

        
            // Process each chat to determine the sender and receiver for each message
            const chats = data.data.data.original.chat.data;

     
            const processedMessages = chats.flatMap(chat => 
              chat.messages.map(message => ({
                ...message,
                // Determine if the logged-in user is the sender
                isSender: chat.users.some(user => user.id === message.user_id && user.codec === mainUserId),
                chatId: chat.id, // Preserve the chat ID for reference
              }))
            );
  
            // directchatreciverId = otherUserDatas.business_profile_picture.owner_id
            // console.log('directchatreciverId', directchatreciverId);
  

            // Set the processed messages to state
            setDirectMessages(processedMessages);

            
            // Optionally, toggle the chat UI here after successfully setting the user data
            scrollToBottomChat(); 
          } else {
            console.error('Failed to fetch chat data:', data.message);
          }
        } catch (error) {
          console.error('Error fetching chat data:', error);
        }
      }
    };
  
    fetchChatData();


  }, [mainUserId, receiverId]);
  
 // Button to reload messages


  
  
   
  useEffect(() => {
    const fetchToken = async () => {
      try {
        console.log(`Fetching token for mainUserId: ${mainUserId}`);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v3/auth/messages/${mainUserId}`, { method: 'GET' });

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
 
 

  useEffect(() => {
    if (mainUserId && params && params.length >= 2) {
      const truncatedReceiverId = truncateCodec(receiverId, -2);
      const selectedUser = {
        codec: truncatedReceiverId,
      };
      setSelectedUser(selectedUser);
      scrollToBottomChat(); 
    }
  }, [params]);
  
 
  const scrollToBottomChat = () => {
    setTimeout(() => {
      const bottomChatElement = document.querySelector('#bottomchat');
      if (bottomChatElement) {
        bottomChatElement.scrollIntoView();
      }
    }, 200);
  };
  
   
  
  useEffect(() => {
    if (mainUserId && receiverId) {
      setActiveTab("pills-default");
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v3/chats/chat-users`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,  
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
    if (params.length === 1) {
    fetchData();
  } 
}, [fetchData, token]);
  





 



  const sendMessage = async () => {
    if (!token) {
      console.error('Token is not available. Cannot send message.');
      return;
    }
    setIsSendingMessage(true); 
    const chatCodec = receiverId || selectedUser.codec;
    
    const apiUrl = `${NEXT_PUBLIC_SERVER_URL}/api/proxy`;
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
  

  const fetchMessages = async () => {
    // Adjust this condition to also check for mainUserId and receiverId presence
    if (selectedUser && token && mainUserId && receiverId) {
      try {
        // If you need to use mainUserId and receiverId in the URL or request, adjust accordingly
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v3/auth/chats/chat-users`, {
          method: 'GET', 
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
  
        // Assuming you're looking for chats related to selectedUser; adjust if needed
        const userChats = data.chatUsers.find(user => user.codec === selectedUser.codec)?.chats || [];
        
        // Reduce the chats to a single array of messages, assuming they're sorted
        const allMessages = userChats.reduce((acc, chat) => [...acc, ...chat.messages], []);
        setMessages(allMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    } else {
      console.log('Required parameters are not available. Cannot fetch messages.');
    }
  };
  
  
  // Effect for fetching data
  useEffect(() => {
    fetchData();
    fetchMessages();
  }, [params]);  // Assuming fetchData and fetchMessages are stable functions or wrapped in useCallback






  const handleChatItemClick = (user) => {
    setSelectedUser(user);
    const truncatedCodec = truncateCodec(user.codec, -2);
    setActiveTab(`pills-chat-${truncatedCodec}`);
    toggleChat();
  };



  useEffect(() => {
    const handleChatListUpdated = async (user) => {
      if (params.length === 1) {
        console.log("Handling chat list update...");
        await fetchData();  // Ensure data is fetched and state is updated
        await fetchMessages();  // Ensure messages are fetched and state is updated
      }
    };
  
    socket.on('chatListUpdated', handleChatListUpdated);
  
    return () => {
      socket.off('chatListUpdated', handleChatListUpdated);
    };
  }, [socket, fetchData, fetchMessages, selectedUser, visibleMessages]);
  



// Effect for fetching data
useEffect(() => {
  fetchData();
  fetchMessages();
}, [params]);  // Assuming fetchData and fetchMessages are stable functions or wrapped in useCallback




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

  
  

  const [activeTab, setActiveTab] = useState(chatUsers.length > 0 ? chatUsers[0].codec : null);
  
  const handleUserClick = (user) => {
    // Check if the currently selected user is the same as the clicked user
    if (selectedUser && selectedUser.codec === user.codec) {
        // If the same user is clicked again, close the chat
        setSelectedUser(null);
        setShowChat(false);
    } else {
        // Otherwise, switch to the new user and scroll to bottom
        setSelectedUser(user);
        scrollToBottomChat();
        setShowChat(true);
    }
};
useEffect(() => {
  if (selectedUser) {
      chatContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}, [selectedUser]);


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


        /* Styles the scrollbar track */
        .chat-scroll-bar::-webkit-scrollbar {
          width: 0px; /* Width for vertical scrollbars */
        }
        
        /* Increases the width of the scrollbar when hovered */
        .chat-scroll-bar:hover::-webkit-scrollbar {
          width: 8px; /* Increased width for vertical scrollbars on hover */
        }
        
        /* Styles the scrollbar thumb */
        .chat-scroll-bar::-webkit-scrollbar-thumb {
          background: #888; /* Scrollbar color */
          border-radius: 6px; /* Roundness of the scrollbar */
        }
        
        /* Lightens the scrollbar thumb color and increases its width on hover */
        .chat-scroll-bar::-webkit-scrollbar-thumb:hover {
          background: #CCC; /* Lighter color on hover */
        }
        
        /* Styles the scrollbar track */
        .chat-scroll-bar::-webkit-scrollbar-track {
          background: #E0E0E0; /* Color of the track, already light */
          border-radius: 6px; /* Roundness of the track */
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

{!otherUserData && (
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
  {/* <ul className="nav nav-pills col-md-12 col-lg-4 col-xl-4 col-xs-12 col-sm-12 col-xs-12  mb-3 position-relative" id="pills-tab" role="tablist"  */}

  <ul className="nav nav-pills col-12 col-sm-12 chat-scroll-bar mb-3 position-relative" id="pills-tab" role="tablist" 
  //  data-simplebar 
   style={{ height: "75vh", 
  //  backgroundColor:"red",
    overflowY:"scroll" 
   }}>
  {chatUsers.map((user, index) => (<a
         key={truncateCodec(user?.codec, -2)}
         className={`nav-item d-flex position-absolute align-items-center text-decoration-none px-2 rounded-1 col-11 py-2 nav-link `}
         style={{marginTop: `${10 + index * 100}px`, transitionDuration: "0.4s", transitionTimingFunction: "ease-in-out"}}
         onClick={() => handleUserClick(user)}
  >
    <div className="position-relative flex-shrink-0 my-1">
      {user.imageurl ? (
        <Image src={user.imageurl} alt={user.firstname} className="rounded-circle" width={48} height={50} />) : (
              <Image src="/assets/img/avatar/99.png"  alt={user.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/>          
        ) }
      <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{ width: ".625rem", height: ".625rem" }}></span>
    </div>
 
    <div className="d-flex  justify-content-between w-100 ps-2 ms-1 my-1">
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


{otherUserData && (
<a
      key={truncateCodec(otherUserData.codec, -2)}
      className={`nav-item d-flex position-absolute align-items-center text-decoration-none px-2 col-11 py-2 ${activeTab === `pills-chat-${truncateCodec(otherUserData.codec, -2)}` ? 'active' : ''}`}
      id={`pills-chat-${truncateCodec(otherUserData.codec, -2)}-tab`}
      data-bs-toggle="pill"
      data-bs-target={`#pills-chat-${truncateCodec(otherUserData.codec, -2)}`}
      type="button"
      role="tab"
      aria-controls={`pills-chat-${truncateCodec(otherUserData.codec, -2)}`}
      aria-selected={activeTab === `pills-chat-${truncateCodec(otherUserData.codec, -2)}`}
      onClick={() => handleChatItemClick(otherUserData)}
      style={{marginTop: "10px", transitionDuration:"0.4s", transitionTimingFunction:"ease-in-out", height:"fit-content", padding:"0 !important", margin:"0 !important"}}
    >
    <div className="position-relative d-flex col-12 align-items-start flex-shrink-0 my-1"
      style={{marginTop: "10px", transitionDuration:"0.4s", transitionTimingFunction:"ease-in-out", height:"50px", padding:"0 !important", margin:"0 !important"}}
      >
      {otherUserData.imageurl ? (
        <Image src={otherUserData.imageurl} alt={otherUserData.firstname} className="rounded-circle" width={48} height={50} />) : (
              <Image src="/assets/img/avatar/99.png"  alt={otherUserData.firstname}  className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" width={50} height={50}/>          
        ) }
      <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{ width: ".625rem", height: ".625rem" }}></span>
      <div className="d-flex  justify-content-between w-100 ps-2 ms-1 my-1">
      <div className="me-3">
        <div className="h6 mb-1">{otherUserData.fullname}</div>
        {otherUserData && otherUserData.chats && otherUserData.chats[0] && otherUserData.chats[0].messages && otherUserData.chats[0].messages.length >= 1 ? (
          <div className="latest-message">
        {otherUserData.chats[0].messages
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
    </div>
              </div>
  
        </a>
    )}
   

  </ul>
  

         
    </div>)}


    <div className={`tab-content ${showChat ? 'chat-convo-active' : ''} chat-conversation-window`} style={{ width: "100%", overflow: "hidden" }} id="pills-tabContent">
      {/* <!-- Chat window--> */}
      <CHAT_RECIEVER 
      setSelectedUser={setSelectedUser} 
      selectedUser={selectedUser}  
      token={token} 
      fetchData={fetchData} 
      setShowChat={setShowChat}
      showChat={showChat} 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      receiverId={receiverId}
      truncateCodec={truncateCodec} 
      chatMessages={chatMessages} 
      // toggleChat={toggleChat} 
      otherUserData={otherUserData}
      mainUserId={mainUserId}
      directMessages={directMessages}
      visibleChatMessages={visibleChatMessages}
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

