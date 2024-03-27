import Head from "next/head";
import Image from "next/image";
import Script from "next/script";


   // OUR CHAT LAYOUT COMPONENT
  export default function ChatLMAIN_COPY({children, initials=''}){

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(false);



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

    useEffect(() => {
        PRELOADER_CONTROLLER();
    }, []);



    return (

        <>

            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Study, connect, collaborate, and deliver business projects." />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="Study, connect, collaborate, and deliver business projects." />
                <meta name="author" content="UniSkills" />
                {/* End Required meta tags */}

                {/* Begin SEO tag */}
                <meta property="og:title" content="UniSkills" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:description" content="Study, connect, collaborate, and deliver business projects." />
                <meta property="og:site_name" content="UniSkills" />
                {/* End SEO meta tags */}

                {/* <FAVICONS AND TOUCH ICONS */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.jpg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_16x16.png" />
                {/* <End FAVICONS AND TOUCH ICONS */}

                {/* <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        let modulus = window.localStorage.getItem('mode'),
                            root = document.getElementsByTagName('html')[0];
                        if (modulus !== undefined && modulus === 'dark') {
                        root.classList.add('dark-mode');
                        } else {
                        root.classList.remove('dark-mode');
                        }
                    `,
                    }}
                /> */}

                {/* <script 
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function () {
                            window.onload = function () {
                            const preloader = document.querySelector(".page-loading");
                            preloader.classList.remove("active");
                            setTimeout(function () {
                                preloader.remove();
                            }, 1500);
                            };
                        })();
                        `,
                    }}
                /> */}

                {/* <!-- Import Google Font--> */}
                <link rel="preconnect" href="https://fonts.googleapis.com/" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"
                    id="google-font" />
                {/* <!-- Vendor styles--> */}
                <link rel="stylesheet" media="screen" href="/assets/vendor/aos/dist/aos.css" />
                <link rel="stylesheet" media="screen" href="/assets/vendor/swiper/swiper-bundle.min.css" />
                <link rel="stylesheet" media="screen" href="/assets/vendor/img-comparison-slider/dist/styles.css" />
                {/* <!-- Main Theme Styles + Bootstrap--> */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>
                <link rel="stylesheet" media="screen" href="/assets/css/theme.min.css" />
                {/* <!-- Customizer generated styles--> */}

                {/* <!-- Vendor styles--> */}
                <link rel="stylesheet" media="screen" href="/assets/vendor/simplebar/dist/simplebar.min.css" />
                <link rel="stylesheet" media="screen" href="/assets/vendor/lightgallery/css/lightgallery-bundle.min.css" />
                <link rel="stylesheet" media="screen" href="/assets/vendor/prismjs/themes/prism.css" />
                <link rel="stylesheet" media="screen" href="/assets/vendor/prismjs/plugins/toolbar/prism-toolbar.css" />
                <link rel="stylesheet" media="screen" href="/assets/vendor/prismjs/plugins/line-numbers/prism-line-numbers.css" />
                <link rel="stylesheet" media="screen" href="/chat/chat.css" />

                <style id="customizer-styles"></style>
                
                {/* Other important meta tags */}
                <title>{initials.page_title ?? config.APP_NAME}</title>


                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                        .page-loading {
                            position: fixed;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            -webkit-transition: all 0.4s 0.2s ease-in-out;
                            transition: all 0.4s 0.2s ease-in-out;
                            background-color: #fff;
                            opacity: 0;
                            visibility: hidden;
                            z-index: 9999;
                        }

                        .dark-mode .page-loading {
                            background-color: #121519;
                        }

                        .page-loading.active {
                            opacity: 1;
                            visibility: visible;
                        }

                        .page-loading-inner {
                            position: absolute;
                            top: 50%;
                            left: 0;
                            width: 100%;
                            text-align: center;
                            -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                            -webkit-transition: opacity 0.2s ease-in-out;
                            transition: opacity 0.2s ease-in-out;
                            opacity: 0;
                        }

                        .page-loading.active > .page-loading-inner {
                            opacity: 1;
                        }

                        .page-loading-inner > span {
                            display: block;
                            font-family: "Inter", sans-serif;
                            font-size: 1rem;
                            font-weight: normal;
                            color: #6f788b;
                        }

                        .dark-mode .page-loading-inner > span {
                            color: #fff;
                            opacity: 0.6;
                        }

                        .page-spinner {
                            display: inline-block;
                            width: 2.75rem;
                            height: 2.75rem;
                            margin-bottom: 0.75rem;
                            vertical-align: text-bottom;
                            background-color: #d7dde2;
                            border-radius: 50%;
                            opacity: 0;
                            -webkit-animation: spinner 0.75s linear infinite;
                            animation: spinner 0.75s linear infinite;
                        }

                        .dark-mode .page-spinner {
                            background-color: rgba(255, 255, 255, 0.25);
                        }

                        @-webkit-keyframes spinner {
                            0% {
                            -webkit-transform: scale(0);
                            transform: scale(0);
                            }

                            50% {
                            opacity: 1;
                            -webkit-transform: none;
                            transform: none;
                            }
                        }

                        @keyframes spinner {
                            0% {
                            -webkit-transform: scale(0);
                            transform: scale(0);
                            }

                            50% {
                            opacity: 1;
                            -webkit-transform: none;
                            transform: none;
                            }
                        }

                        .uniskills-play-button {
                            font-size: 40px;
                            padding: 20px 20px 20px 20px;
                            display: block;
                            position: absolute;
                            top: 30%;
                            left: 45%;
                        }

                        .lightmode-dashboard-slider {
                            display: none;
                        }

                        .darkmode-dashboard-slider {
                            display: block;
                        }

                        .landing-video {
                            background-color: red;
                            height: 500px;
                            width: 100%;
                            position: absolute;
                        }

                        .video-modal {
                            position: fixed;
                            height: 100vh;
                            width: 100%;
                            display: none;
                            background-color: rgba(0, 0, 0, 0.6);
                        }

                        #uniskills-video:checked ~ .video-modal {
                            display: block;
                            transition-duration: 1s;
                        }

                        .close-button {
                            color: #f6f9fc;
                            width: 100%;
                            height: 100%;
                            font-size: 95px;
                        }

                        .profile-completion-image {
                            height: 280px;
                            width: 300px;
                        }

                        .unskills-video {
                            width: 70%;
                            height: 600px;
                            margin-left: auto;
                            margin-right: auto;
                            margin-top: 80px;
                        }

                        @media only screen and (max-width: 991px) {
                            .unskills-video {
                            width: 95%;
                            height: 700px;
                            }
                        }

                        @media only screen and (max-width: 761px) {
                            .unskills-video {
                            width: 95%;
                            height: 200px;
                            }

                            .student-business-slider {
                            width: 250px;
                            }
                        }

                        @media only screen and (max-width: 580px) {
                            .student-business-slider {
                            width: 150px;
                            }
                        }
                        `,
                    }}
                />

            </Head>


            
            <Script id="script"
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function (w, d, s, l, i) {
                            w[l] = w[l] || [];
                            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                            var f = d.getElementsByTagName(s)[0],
                            j = d.createElement(s),
                            dl = l != "dataLayer" ? "&l=" + l : "";
                            j.async = true;
                            j.src = "https://www.googletagmanager.com/gtm5445.html?id=" + i + dl;
                            f.parentNode.insertBefore(j, f);
                        })(window, document, "script", "dataLayer", "GTM-WKV3GT5");
                        `,
                    }}
                />



                <Script src="/assets/vendor/simplebar/dist/simplebar.min.js"/>
                <Script src="/assets/vendor/lightgallery/lightgallery.min.js"/>
                <Script src="/assets/vendor/lightgallery/plugins/video/lg-video.min.js"/>
                {/* <Script src="/assets/vendor/prismjs/components/prism-core.min.js"/>
                <Script src="/assets/vendor/prismjs/components/prism-markup.min.js"/>
                <Script src="/assets/vendor/prismjs/components/prism-clike.min.js"/>
                <Script src="/assets/vendor/prismjs/components/prism-javascript.min.js"/>
                <Script src="/assets/vendor/prismjs/components/prism-pug.min.js"/>
                <Script src="/assets/vendor/prismjs/plugins/toolbar/prism-toolbar.min.js"/>
                <Script src="/assets/vendor/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js"/>
                <Script src="/assets/vendor/prismjs/plugins/line-numbers/prism-line-numbers.min.js"/> */}
                <Script src="/assets/vendor/aos/dist/aos.js"/>
                {/* <Script src="/assets/vendor/img-comparison-slider/dist/index.js"/> */}

                <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"/>
                <Script src="/assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"/>
                <Script src="/assets/vendor/jarallax/dist/jarallax.min.js"/>
                <Script src="/assets/vendor/swiper/swiper-bundle.min.js"/>
                <Script src="/assets/js/theme.js"/>

                {/* <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        let mode = window.localStorage.getItem('mode'),
                            root = document.getElementsByTagName('html')[0];
                        if (mode !== undefined && mode === 'dark') {
                        root.classList.add('dark-mode');
                        } else {
                        root.classList.remove('dark-mode');
                        }
                    `,
                    }}
                /> */}
















{/* Page loading spinner */}
<div className="cs-page-loading active">
    <div className="cs-page-loading-inner">
        <div className="cs-page-spinner"></div>
        <span>Loading...</span>
    </div>
</div>




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
<div className="col-md-12 col-lg-4 col-xl-4 col-xs-12 col-sm-12 col-xs-12  pb-xl-0 ps-3 pt-2 mt-4 chat-list">

<div className="chat-list-header d-flex  align-items-center col-xl-4 col-md-12 col-lg-4 col-sm-12 col-xs-12">

    {/* {isDarkMode && <Image src="/Uniskills Logo 48a2c3ff.png" height="120px" width="120px" alt="" /> }
    {!isDarkMode && <Image src="/logo.png" height="120px" width="120px" alt="" />} */}

  <h4 className="ms-3 mt-2 text-start">Chat</h4>
  <div className="form-check ms-5 ps-5 text-end form-switch mode-switch mb-1 order-lg-2" data-bs-toggle="mode">
      <input
          className="ms-auto form-check-input"
          type="checkbox"
          id="theme-mode"
          checked={isDarkMode}

          onChange={handleThemeToggle}
      />
      <label className="form-check-label" htmlFor="theme-mode">
          <i className={isDarkMode ? 'ai-moon fs-lg' : 'ai-sun fs-lg'}></i>
      </label>
      </div>
</div>
     {/* <!-- Contact--> */}
     <ul className="nav nav-pills col-12 col-sm-12 mb-3" id="pills-tab" role="tablist"  data-simplebar  style={{height: "85vh"}}>
     <a className="nav-item d-sm-none d-xs-none d-none d-flex active align-items-center text-decoration-none px-2 py-2"
        href={`/${config.LOGIN}`}
        id="pills-default-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-default"
        type="button"
        role="tab"
        aria-controls="pills-default"
        aria-selected="true"
        onClick={toggleChat}
    >    </a>

     <a className="nav-item d-flex align-items-center text-decoration-none px-2 col-11 py-2" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={toggleChat}>
        <div className="position-relative flex-shrink-0 my-1"><Image className="rounded-circle" src="/assets/img/avatar/06.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem"}}></span></div>
        <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
            <div className="h6 mb-1">Mikaela Collins</div>
            <p className="text-body fs-sm mb-0"></p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">15:01</span><span className="badge bg-danger fs-xs lh-1 py-1 px-2">2</span></div>
        </div> </a>
     {/* <!-- Contact--> */}
     <a className="nav-item d-flex align-items-center text-decoration-none px-2 col-11 py-2 bg-gray " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={toggleChat}>
      <div className="position-relative flex-shrink-0 my-1"><Image className="rounded-circle" src="/assets/img/avatar/19.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem"}}></span></div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">Mark Virgows</div>
          <p className="text-body fs-sm mb-0">Ac aliquam victoria ...</p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">11:36</span></div>
      </div></a>
     {/* <!-- Contact--> */}
     <a className="d-flex align-items-center text-decoration-none px-2 col-11 py-2" href={`/${config.LOGIN}`}>
      <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0 rounded-circle text-primary fs-lg fw-semibold my-1" style={{width: "48px", height: "48px", backgroundColor: "rgba(var(--ar-primary-rgb))"}}>FA<span className="position-absolute bottom-0 end-0 border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem", backgroundColor: "#d7dde2"}}></span></div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">Furry Aocklen</div>
          <p className="text-body fs-sm mb-0">I got it, thanks 👍</p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">12:04</span></div>
      </div></a>

     {/* <!-- Contact--> */}
     <a className="d-flex align-items-center text-decoration-none px-2 col-11 py-2" href={`/${config.LOGIN}`}>
      <div className="d-flex align-items-center justify-content-center position-relative flex-shrink-0 rounded-circle text-info fs-lg fw-semibold my-1" style={{width: "48px", height: "48px", backgroundColor: "rgba(var(--ar-info-rgb))" }}>ND<span className="position-absolute bottom-0 end-0 border border-white rounded-circle me-1" style={{width: ".625rem", height:".625rem", backgroundColor: "#d7dde2"}}></span></div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">Nadia Davidson</div>
          <p className="text-body fs-sm mb-0">Nullam id devices ...</p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">20 hr</span></div>
      </div></a>
     {/* <!-- Contact--> */}
     <a className="d-flex align-items-center text-decoration-none px-2 col-11 py-2" href={`/${config.LOGIN}`}>
      <div className="position-relative flex-shrink-0 my-1"><Image className="rounded-circle" src="/assets/img/avatar/09.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem", backgroundColor: "#d7dde2"}}></span></div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">Alica Hawkins</div>
          <p className="text-body fs-sm mb-0">Massa laoreet molit ...</p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">23 hr</span></div>
      </div></a>
     {/* <!-- Contact--> */}
     <a className="d-flex align-items-center text-decoration-none px-2 col-11 py-2" href={`/${config.LOGIN}`}>
      <div className="position-relative flex-shrink-0 my-1"><Image className="rounded-circle" src="/assets/img/avatar/05.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem"}}></span></div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">Natalia Bocous</div>
          <p className="text-body fs-sm mb-0">Awesome 🚀</p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">2 days</span></div>
      </div></a>
     {/* <!-- Contact--> */}
     <a className="d-flex align-items-center text-decoration-none px-2 col-11 py-2" href={`/${config.LOGIN}`}>
      <div className="position-relative flex-shrink-0 my-1"><Image className="rounded-circle" src="/assets/img/avatar/20.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem", backgroundColor: "#d7dde2"}}></span></div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">Marry Black</div>
          <p className="text-body fs-sm mb-0">I have great news!</p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">3 days</span></div>
      </div></a>
     {/* <!-- Contact--> */}

     <a className="d-flex align-items-center text-decoration-none px-2 col-11 py-2" href={`/${config.LOGIN}`}>
      <div className="position-relative flex-shrink-0 my-1"><Image className="rounded-circle" src="/assets/img/avatar/10.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem"}}></span></div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">Jerome Bell</div>
          <p className="text-body fs-sm mb-0">Ok 👌</p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">May 21</span></div>
      </div></a>
     {/* <!-- Contact--> */}
     <a className="d-flex align-items-center text-decoration-none px-2 col-11 py-2" href={`/${config.LOGIN}`}>
      <div className="position-relative flex-shrink-0 my-1"><Image className="rounded-circle" src="/assets/img/avatar/11.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem", backgroundColor: "#d7dde2"}}></span></div>
      <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
        <div className="me-3">
          <div className="h6 mb-1">Jerome Bell</div>
          <p className="text-body fs-sm mb-0">Do you know how ...</p>
        </div>
        <div className="text-end"><span className="d-block fs-xs text-muted">2 days</span></div>
      </div></a></ul>
  </div>












{/* <!-- Chat window--> */}

<div className={`tab-content ${showChat ? 'chat-convo-active' : ''} chat-conversation-window`} style={{width: "100%", overflow:"hidden"}} id="pills-tabContent">


{/* <div className={` ${isDarkMode ? 'default-chat-banner' : 'default-chat-banne'}  tab-pane fade show chat-convo-active`}  role="tabpanel"></div> */}
<div className="tab-pane active show fade pt-5" id="pills-default" role="tabpanel" aria-labelledby="pills-default-tab" style={{ height: "97vh", overflow: "hidden"}}>
<h1 className="display-3 text-center mx-auto pt-5 my-2 my-sm-4" style={{marginTop:"20vh", maxWidth: "680px"}}>Welcome To <br/> <b className="text-primary"> UNISKILLS</b> Chat</h1>
<svg className="d-block mx-auto text-primary" width="511" height="40" viewBox="0 0 511 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M385.252 0.160149C313.41 0.614872 292.869 0.910678 253.008 2.06539C211.7 3.26203 182.137 4.46154 135.231 6.84429C124.358 7.39665 112.714 7.92087 99.0649 8.47247C48.9242 10.4987 39.1671 11.0386 22.9579 12.6833C14.9267 13.4984 7.98117 14.0624 4.08839 14.2162C0.627411 14.3527 0 14.4386 0 14.7762C0 15.0745 5.53537 15.3358 8.56298 15.1804C9.64797 15.1248 12.5875 14.9887 15.0956 14.8782C17.6037 14.7676 23.123 14.4706 27.3608 14.2183C37.3399 13.6238 42.1312 13.4363 59.2817 12.9693C88.1133 12.1844 109.893 11.43 136.647 10.2898C146.506 9.86957 159.597 9.31166 165.737 9.04993C212.308 7.06466 269.195 5.29439 303.956 4.74892C346.139 4.08665 477.094 3.50116 474.882 3.98441C474.006 4.17607 459.021 5.6015 450.037 6.34782C441.786 7.03345 428 8.02235 411.041 9.14508C402.997 9.67773 391.959 10.4149 386.51 10.7832C366.042 12.1673 359.3 12.5966 347.67 13.2569C294.096 16.2987 258.708 18.9493 209.451 23.6091C180.174 26.3788 156.177 29.5584 129.396 34.2165C114.171 36.8648 112.687 37.3352 114.186 39.0402C115.161 40.1495 122.843 40.2933 138.338 39.492C166.655 38.0279 193.265 36.8923 219.043 36.048C235.213 35.5184 237.354 35.4296 253.795 34.6075C259.935 34.3005 270.549 33.8517 277.382 33.6105L289.804 33.1719L273.293 32.999C248.274 32.7369 221.435 32.7528 212.596 33.035C183.334 33.9693 167.417 34.6884 141.419 36.2506C135.222 36.623 129.994 36.8956 129.801 36.8566C127.94 36.4786 169.612 30.768 189.492 28.6769C234.369 23.956 280.582 20.4337 351.602 16.3207C358.088 15.9451 371.108 15.1233 380.535 14.4947C389.962 13.866 404.821 12.8761 413.556 12.2946C447.177 10.057 457.194 9.22358 489.506 5.97543C510.201 3.895 510.311 3.8772 510.875 2.50901C511.496 1.00469 509.838 0.322131 505.088 0.127031C500.576 -0.0584957 416.098 -0.0351424 385.252 0.160149ZM291.144 33.02C291.536 33.0658 292.102 33.0641 292.402 33.0162C292.703 32.9683 292.383 32.9308 291.691 32.9329C290.999 32.935 290.753 32.9743 291.144 33.02Z"></path>
</svg></div>


<div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{ height: "100vh", overflow: "hidden"}}>
    <div className="card border-0">
            {/* <!-- Hader--> */}
    <div className="navbar card-header w-100 mx-0 px-4">
        <div className="d-flex align-items-center w-100 px-sm-3">
        <button className="d-lg-none d-xl-none btn btn-secondary me-3 me-sm-4" type="button"  onClick={toggleChat}> <i className="bi bi-arrow-left"></i> </button>
        <a type="button" className="btn border-0" data-bs-toggle="modal" data-bs-target="#modalId">
        <div className="position-relative flex-shrink-0"><Image className="rounded-circle" src="/assets/img/avatar/06.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem"}}></span></div>
        <div className="h6 ps-2 ms-1 mb-0">Mikaela Collins</div></a>
        <div className="dropdown ms-auto">
            <button className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-n2" type="button" data-bs-toggle="dropdown"><i className="ai-dots-vertical fs-4 fw-bold"></i></button>
            <div className="dropdown-menu dropdown-menu-end my-1">
            <a className="dropdown-item ms-1" type="button"  data-bs-toggle="modal" data-bs-target="#modalId"><i className="ai-user fs-base opacity-80 me-2"></i>View profile</a>
                <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-bell-off fs-base opacity-80 me-2"></i>Disable notifications</a>
                <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-edit fs-base opacity-80 me-2"></i>Edit contact</a>
                <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-trash fs-base opacity-80 me-2"></i>Delete contact</a>
                <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-logout fs-base opacity-80 me-2"></i>Leave chat</a>
                <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-circle-slash fs-base opacity-80 me-2"></i>Block user</a></div>
        </div>
            </div>
            </div>
       {/* <!-- Body--> */}
  <div className="card-body pb-0 pt-4" data-simplebar style={{height: "63vh"}}>
   <div className="no-conversation-yet-container">
   {!isDarkMode && <div className="no-conversation-yet"> </div>}
    {isDarkMode &&  <div className="no-conversation-yet-dark"></div>}
    </div>
  </div>


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
  <div className="card-footer w-100 border-0 mx-0 px-4">

    <div className="d-flex align-items-end border rounded-3 pb-1 pe-3 mx-sm-3">
      <textarea className="form-control border-0" rows="3"
        type="text"
        // value={text + (selectedEmoji || '')}
        // onChange={handleTextChange}
        // onKeyDown={handleKeyDown}
        placeholder="Type your message..."  style={{resize: "none"}}></textarea>
      <div className="nav flex-nowrap align-items-center">
        <div className="dropdown ms-auto">
          <a className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-2  text-muted p-1 me-1" href={`/${config.LOGIN}`} type="button" data-bs-toggle="dropdown"><i className="ai-paperclip fs-xl"></i></a>
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

        <button className="btn btn-sm btn-secondary ms-3"  type="button">Send</button>
      </div>
    </div>
  </div>
</div>
</div>




   <div className="tab-pane fade col-12 col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0"  style={{ height: "100vh", overflow: "hidden",width:"100%"}}>
    <div className="card border-0">
   {/* <!-- Hader--> */}
  <div className="navbar card-header w-100 mx-0 px-4">
     <div className="d-flex align-items-center w-100 px-sm-3">
      <button className="d-lg-none btn btn-secondary d-xl-none me-3 me-sm-4" onClick={toggleChat} type="button"><i className="bi bi-arrow-left fw-bolder"></i> </button>
      <a type="button" className="btn border-0" data-bs-toggle="modal" data-bs-target="#modalId">
      <div className="position-relative flex-shrink-0"><Image className="rounded-circle" src="/assets/img/avatar/19.jpg" width="48" alt="Avatar"/><span className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1" style={{width: ".625rem",height:".625rem"}}></span></div>
      <div className="h6 ps-2 ms-1 mb-0">Mark Virgows</div></a>
      <div className="dropdown ms-auto">
        <button className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-n2" type="button" data-bs-toggle="dropdown"><i className="ai-dots-vertical fs-4 fw-bold"></i></button>
        <div className="dropdown-menu dropdown-menu-end my-1">
            <a className="dropdown-item ms-1" type="button"  data-bs-toggle="modal" data-bs-target="#modalId"><i className="ai-user fs-base opacity-80 me-2"></i>View profile</a>
            <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-bell-off fs-base opacity-80 me-2"></i>Disable notifications</a>
            <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-edit fs-base opacity-80 me-2"></i>Edit contact</a>
            <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-trash fs-base opacity-80 me-2"></i>Delete contact</a>
            <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-logout fs-base opacity-80 me-2"></i>Leave chat</a>
            <a className="dropdown-item" href={`/${config.LOGIN}`}><i className="ai-circle-slash fs-base opacity-80 me-2"></i>Block user</a></div>
      </div>
    </div>
  </div>
   {/* <!-- Body--> */}
  <div className="card-body message-conversation-body pb-0 pt-4" d data-simplebar style={{height: "63vh"}}>
    <div className="text-muted text-center mb-4">May 27, 2022</div>
     {/* <!-- Message--> */}
                   <div className="text-muted text-center my-4">May 29, 2022</div>
     {/* <!-- Message--> */}
 
           {/* <!-- Image gallery --> */}
        {/* <!-- Message--> */}
        <div className="mb-3" style={{maxWidth: "400px"}}>
      <div className="d-flex align-items-end mb-2">
        <div className="flex-shrink-0 pe-2 me-1"><Image className="rounded-circle" src="/assets/img/avatar/19.jpg" width="48" alt="Avatar"/></div>
        <div className="w-100">

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
      <div className="fs-xs text-muted text-end">4:04 am</div>
    </div>





     {/* <!-- Message--> */}
    <div className="ms-auto mb-3" style={{maxWidth: "400px"}}>
      <div className="d-flex align-items-end mb-2">
        <div className="message-box-end bg-primary text-white">You are welcome!</div>
        <div className="flex-shrink-0 ps-2 ms-1"><Image className="rounded-circle" src="/assets/img/avatar/01.jpg" width="48" alt="Avatar"/></div>
      </div>
      <div className="fs-xs text-muted"><i className="ai-check text-primary fs-xl mt-n1 me-1"></i>2:18 pm</div>
    </div>
    <div className="text-muted text-center my-4">Today</div>

     {/* <!-- Message--> */}
    <div className="mb-3" style={{maxWidth: "400px"}}>
      <div className="d-flex align-items-end mb-2">
        <div className="flex-shrink-0 pe-2 me-1"><Image className="rounded-circle" src="/assets/img/avatar/19.jpg" width="48" alt="Avatar"/></div>
        <div className="message-box-start text-dark">I`m so happy to be part of the team and work with you on this new exciting project. Can`t thank you enough 😊</div>
      </div>
      <div className="fs-xs text-muted text-end">10:17 am</div>
    </div>
        {/* <!-- Typing Message--> */}
            <div className="mb-3" style={{maxWidth: "100px"}}>
            <div className="d-flex align-items-end mb-2">
                <div className="flex-shrink-0 pe-2 me-1"><Image className="rounded-circle" src="/assets/img/avatar/19.jpg" width="48" alt="Avatar"/></div>
                <div className="message-box-start text-dark">
                <div class='typing'>
                <span></span>
                <span></span>
                <span></span>
                </div></div>
            </div>


  </div></div>

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
  <div className="card-footer w-100 border-0 mx-0 px-4">

    <div className="d-flex align-items-end border rounded-3 pb-1 pe-3 mx-sm-3">
      <textarea className="form-control border-0" rows="3"
        type="text"
        // value={newMessage + (selectedEmoji || '')}
        // // onChange={handleTextChange}
        // onChange={(e) => setNewMessage(e.target.value)}
        // onKeyDown={handleKeyDown}
        placeholder="Type your message..."  style={{resize: "none"}}></textarea>
      <div className="nav flex-nowrap align-items-center">
        <div className="dropdown ms-auto">
          <a className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-2  text-muted p-1 me-1" href={`/${config.LOGIN}`} type="button" data-bs-toggle="dropdown"><i className="ai-paperclip fs-xl"></i></a>
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

        <button className="btn btn-sm btn-secondary ms-3" type="button">Send</button>
      </div>
    </div>
  </div>
</div>
</div>


</div>






</div>
</div>
</main>



<div className="modal fade modal-z-index-one" id="modalId" tabIndex="-1" role="dialog">
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
    <Image src="https://i.ibb.co/MSGPty4/19.jpg" alt="" className="rounded-circle bg-size-cover bg-position-center flex-shrink-0" style={{width: "80px", height:"80px"}}/>
    <div className="pt-3 pt-sm-0 ps-1">
      <h3 className="h5 mb-2 mt-4">Mark Virgows<i className="ai-circle-check-filled fs-base text-success ms-1"></i></h3>
      <div className="col-md-12 mb-4 mb-md-0">
    <table className="table mt-5 mw-auto ms-0 text-start mb-0">
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Phone</td>
        <td className="border-0 mb-2 text-dark fw-medium py-1 ps-3">+1 234 567 890</td>
      </tr>
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Language</td>
        <td className="border-0 mb-2 text-dark fw-medium py-1 ps-3">English</td>
      </tr>
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Gender</td>
        <td className="border-0 mb-2 text-dark fw-medium py-1 ps-3">Female</td>
      </tr>
      <tr>
        <td className="border-0 mb-2 text-muted py-1 px-0">Communication</td>
        <td className="border-0 mb-2 text-dark fw-medium py-1 ps-3">Mobile, email</td>
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
        </div>









</div>

















            <Script src="{{ asset('./assets/js/sweetalert2@10.js') }}" />
                      <Script id="my style" strategy="afterInteractive">
            {`
              if (typeof window !== 'undefined') {
                document.addEventListener('DOMContentLoaded', function() {
                  showAlert();
                });

                function showAlert() {
                  if ('Safari' === 'Safari') {
                    Swal.fire({
                      title: 'Browser Compatibility Warning',
                      text: 'Safari is not a recommended browser for the full functionality of this app. Please consider using a different browser.',
                      icon: 'warning',
                    });
                  }
                }
              }
            `}
          </Script>


            {/* <Script src="./assets/vendor/simplebar/dist/simplebar.min.js" />
            <Script src="./assets/vendor/lightgallery/lightgallery.min.js" />
            <Script src="./assets/vendor/lightgallery/plugins/video/lg-video.min.js" />
            <Script src="./assets/vendor/prismjs/components/prism-core.min.js" />
            <Script src="./assets/vendor/prismjs/components/prism-markup.min.js" />
            <Script src="./assets/vendor/prismjs/components/prism-clike.min.js" />
            <Script src="./assets/vendor/prismjs/components/prism-javascript.min.js" />
            <Script src="./assets/vendor/prismjs/components/prism-pug.min.js" />
            <Script src="./assets/vendor/prismjs/plugins/toolbar/prism-toolbar.min.js" />
            <Script src="./assets/vendor/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js" />
            <Script src="./assets/vendor/prismjs/plugins/line-numbers/prism-line-numbers.min.js" />
            <Script src="./assets/vendor/aos/dist/aos.js" /> */}
            <Script src="/assets/vendor/img-comparison-slider/dist/index.js" />

            <input type="checkbox" id="uniskills-video" style={{ "display": "none" }} />
            <label className="video-modal" for="uniskills-video">
                <label className="close-button" for="uniskills-video">
                    <i className="bi bi-x-circle"></i>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/708322704?h=5314f3a3a7"
                        style={{ "width":"90%", "height": "70%", "marginTop": "100px", "marginLeft": "10px" }} frameborder="0" allowfullscreen></iframe>
                </label>
            </label>











            <Script id="n" strategy="lazyOnload">
                {`
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/64cc224e94cf5d49dc684c42/1h6umc0ue';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                })();
                `}
            </Script>


            {/* <Script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
            <Script src="/assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js" />
            <Script src="/assets/vendor/jarallax/dist/jarallax.min.js" />
            <Script src="/assets/vendor/swiper/swiper-bundle.min.js" />
            <Script src="/assets/js/theme.min.js" /> */}

            {/* <Script src="https://unpkg.com/alpinejs@3.9.0/dist/cdn.min.js" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/lightgallery.min.js" integrity="sha512-dSI4QnNeaXiNEjX2N8bkb16B7aMu/8SI5/rE6NIa3Hr/HnWUO+EAZpizN2JQJrXuvU7z0HTgpBVk/sfGd0oW+w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/plugins/fullscreen/lg-fullscreen.min.js" integrity="sha512-wUl8rYJugCiHiMm1uyGDqcgkvwoY9paD9vLJzT3e4mwp46yB0cicFVcvzy8N6UpbtQyFlJDBzrQQ3BNL72w1+A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/plugins/mediumZoom/lg-medium-zoom.min.js" integrity="sha512-nMuTAVO/JX4krfPgOYQrnQrGknkoLXsvepoXIIRc2LHF8/PWTTxfaIm59GzMIvcLjkfbgPR6EsunU4gQcMC9Ng==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}

        </>


    )
    
}