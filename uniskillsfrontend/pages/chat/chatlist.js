// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';
import { useEffect, useState } from 'react';

// Bring in the config file
import config from '../../config.js';




export default function CHATLIST({ onTabClick }) {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
//   const page_initials = { page_title: "Chat | "+config.APP_NAME, body_class: "page-wrapper bg-secondary overflow-hidden px-2" };

  const [isClient, setIsClient] = useState(false);

 
  const [activeTab, setActiveTab] = useState("pills-default");

  const handleChatItemClick = (user) => {
    setSelectedUser(user);
    setActiveTab(`pills-chat-${user.lastname}`);
    toggleChat();
  };
  useEffect(() => {
    setIsClient(true)
  }, [])

   

  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);




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
    setShowChat(!showChat);
  }



  const [chatUsers, setChatUsers] = useState([]);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://private4testing.uniskills.net/api/v3/auth/messages/7fa8fca211990f6c2310081b902a5ad3Mw==', {
          method: 'GET',
        });
  
        const data = await response.json();
        console.log('API Response:', data);
  
        if (data && data.status === 'success' && data.data && data.data.token) {
          setToken(data.data.token);
          const originalData = data.data.data.original;
  
          if (originalData && originalData.chatUsers) {
            const users = originalData.chatUsers;
            console.log('Chat Users:', users);
            setChatUsers(users);
          } else {
            console.error('Invalid or missing chatUsers array in the response data:', originalData);
          }
        } else {
          console.error('Invalid or missing data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
    console.log('Final Chat Users:', chatUsers);




  return (
    

      <>

       
                 {/* <!-- Contact--> */}
               
 <ul className="nav nav-pills col-12 col-sm-12 mb-3" id="pills-tab" role="tablist" data-simplebar style={{ height: "85vh" }}>
 <li> <a
    className="nav-item d-sm-none d-xs-none d-flex active align-items-center text-decoration-none px-2 py-2" 
    id="pills-default-tab"
    data-bs-toggle="pill"
    data-bs-target="#pills-default"
    type="button"
    role="tab"
    aria-controls="pills-default"
    aria-selected="true"
    onClick={toggleChat}
  ></a></li>

 <li>
     <a className="nav-item d-flex  align-items-center text-decoration-none px-2 col-11 py-2"
    id="pills-about-tab"
    data-bs-toggle="pill"
    data-bs-target="#pills-about"
    type="button"
    role="tab"
    aria-controls="pills-about"
    aria-selected="true"
    onClick={toggleChat}
  >
    .
    <div className="position-relative flex-shrink-0 my-1">
      <Image className="rounded-circle" src="/assets/img/avatar/04.jpg" height={67} width={48} alt="Avatar" />
      <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{ width: ".625rem", height: ".625rem" }}></span>
    </div>
    <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
      <div className="me-3">
        <div className="h6 mb-1">jonn brownn Collins</div>
        <p className="text-body fs-sm mb-0"></p>
      </div>
      <div className="text-end">
        <span className="d-block fs-xs text-muted">15:01</span>
        <span className="badge bg-danger fs-xs lh-1 py-1 px-2">2</span>
      </div>
    </div>

  </a></li>

  {chatUsers.map((user) => (<>
  <a
    key={user.lastname}
    className={`nav-item d-flex align-items-center text-decoration-none px-2 col-11 py-2 ${activeTab === `pills-chat-${user.lastname}` ? 'active' : ''}`}
    id={`pills-chat-${user.lastname}-tab`}
    data-bs-toggle="pill"
    data-bs-target={`#pills-chat-${user.lastname}`}
    type="button"
    role="tab"
    aria-controls={`pills-chat-${user.lastname}`}
    style={{ marginLeft: "-400px" }}
    aria-selected={activeTab === `pills-chat-${user.lastname}`}
    // onClick={() => handleChatItemClick(user)}  
    onClick={() => onTabClick(user)} 
    
      >
      <div className="position-relative flex-shrink-0 my-1">
        {user.imageurl ? (
          <Image src={user.imageurl} alt={user.fullname} className="rounded-circle" width={48} height={50} />
        ) : (
          <span>Image Not Available</span>
        )}
        <span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{ width: ".625rem", height: ".625rem" }}></span>
      </div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">{user.fullname}</div>
          <p className="text-body fs-sm mb-0"></p>
        </div>
        <div className="text-end">
          <span className="d-block fs-xs text-muted">15:01</span>
          <span className="badge bg-danger fs-xs lh-1 py-1 px-2">2</span>
        </div>
      </div>
    </a></>
  ))}
</ul>



      </>




  )

}



 
