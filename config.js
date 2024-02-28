
const FRONTEND_APP_HOSTNAME = "uniskills.net";
const BACKEND_SERVER = "http://localhost/SHAREFLAT/ShareFlatAPI/";
// {`/${config.LOGIN}`} 

// APP CONFIG FILE
const config = {

  // BASIC APP DATAS.
  APP_NAME: "Uniskills",
  COMPANY_EMAIL: "info@"+FRONTEND_APP_HOSTNAME,
  ABUSE_EMAIL: "abuse@"+FRONTEND_APP_HOSTNAME,
  ADDRESS: "13 abayomi street Akoka, Lagos",
  ADDRESS_HTML: "<p className='text-light'>13 abayomi street <br /> Akoka, Lagos.</p>",
  HOTLINE: "+2348034436977",
  WHATSAPP_LINK: "https://wa.me/2348034436977",
  BUDGET_MIN_DIGITS: 5,
  BUDGET_MIN_AMOUNT: 30000,
  CHAT_REFRESH_TIMER: 5000,
  DASHBOARD_REFRESH_TIMER: 10000, // 10 secs
  HOST_CARD_CAROUSEL_STYLE: 1,
  SmartTech_Academy_Link: "https://smarttechacademy.org",

  // APP ROUTES 
  HOMEPAGE: "/",
  ABOUT: "/about-us",
  CONTACT: "/contact",
  HOW_IT_WORKS: "/how-it-works",
  WHY_CHOOSE_US: "/why-choose-us",
  BUSINESS_REGISTER: "/business-signup",
  STUDENT_REGISTER: "/student-signup",
  LOGIN: "/login",
  FEATURES: "/features",
  SUGGESTION: "/suggestions",
  FORGET_PASS: "/forget-password",
  FOR_BUSINESS: "/for-businesses",
  CHATMAIN: "/chat/[mainUserId]",
  FOR_STUDENT: "/for-students",
  FINDOPPORTUNITIES: "/findopportunities",
  Business_Profile: "/business-profile",
  Student_Profile: "/student-profile",
  Job_Details: "/job-details",
  FIND_STUDENT: "/find-students",
  FAQ: "/faq",
  POLICY_AND_TERMS: "/terms-and-policy",
  NewSignUpPage: "/newsignuppage",

  // EXTERNAL ROUTES USED ON THE APP
  // APP OFFICIAL SOCIAL HANDLES
  FACEBOOK: "https://web.facebook.com/",
  TWITTER: "https://twitter.com/",
  INSTAGRAM: "https://instagram.com/",
  LINKEDIN: "https://linkedin.com/company/",
  // LINKS TO APP-STORES TO DOWNLOAD MOBILE APP VERSION OF THE PLATFORM
  APP_STORE: "",
  GOOGLE_PLAY: "",

  // APP OPERATIONS API's LIST
  // SUBSCRIBER_API: BACKEND_SERVER+"visitors/subscriber",
  // LOGIN_API: BACKEND_SERVER+"authenticate/legit/user",
  // CONTACT_API: BACKEND_SERVER+"admin/contact",
  // PASS_RECOVERY_API: BACKEND_SERVER+"recover/user/password",
  // FLATMATE_REG_API: BACKEND_SERVER+"register/new/potential/flatmate",
  // DASHBOARD_API: BACKEND_SERVER+"load/dashboard/data",
  // FILTER_UPDATE_API: BACKEND_SERVER+"filter/requests",
  // PROFILE_UPDATE_API: BACKEND_SERVER+"profile/data/update",
  // VIEWS_DATA_FETCHER_API: BACKEND_SERVER+"fetch/viewers/data",
  // PROFILE_DATA_FETCHER_API: BACKEND_SERVER+"acting/member/profile/data",
  // RECIEVED_REQUEST_FETCHER: BACKEND_SERVER+"recieved/requests/loader",
  // REVIEWS_DATA_FETCHER_API: BACKEND_SERVER+"fetch/reviewers/data",
  // REVIEW_PUBLISHER: BACKEND_SERVER+"publish/member/reviews",
  // MESSAGES_DATA_FETCHER: BACKEND_SERVER+"fetch/messages/data",
  // REFRESHED_MESSAGE_FETCHER: BACKEND_SERVER+"fetch/refreshed/messages",
  // MESSAGES_PUBLISHER: BACKEND_SERVER+"publish/member/messages",
  // PROFILE_PHOTO_UPLOADER: BACKEND_SERVER+"member/profile/picture/uploader",
  // REQUEST_SENDER: BACKEND_SERVER+"member/request/sender",
  // REQUEST_DELETER: BACKEND_SERVER+"member/request/deleter",
  // MATCH_CREATOR: BACKEND_SERVER+"members/match/creator",
  // MATCH_DELETER: BACKEND_SERVER+"members/match/deleter",
  // MEMBER_REPORTER: BACKEND_SERVER+"members/reporter",
  // MESSAGE_PAGE_MESSAGES_FETCHER: BACKEND_SERVER+"fetch/member/messages",

  // GET THE CURRENT YEAR
  CURRENT_YEAR: ""
  
}

module.exports = config
