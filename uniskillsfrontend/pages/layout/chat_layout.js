// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
// Load REACT.JS related packages
import { useEffect, useState } from 'react';  
// Load this project Helpers
import { PRELOADER_CONTROLLER } from '../../helpers/app_utilities.js'


// import all parts/components needed to set up the layout here
import Footer from './footer.js';
import NavigationBar from './nav_bar.js';

// Bring in the config file
import config from '../../config.js';





   // OUR CHAT LAYOUT COMPONENT
  export default function ChatLayout({children, initials=''}){

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

        <div>

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
                {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.jpg" /> */}
                {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32x32.png" /> */}
                <link rel="icon" type="image/png" sizes="16x16" href="/uni-favicon.ico" />
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

                        @media only screen and (max-width:768px) {
                        .default-chat-welcome-window{
                            display:none;
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
                {/* <Script src="/assets/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"/> */}
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
{/* <div className="cs-page-loading active">
    <div className="cs-page-loading-inner">
        <div className="cs-page-spinner"></div>
        <span>Loading...</span>
    </div>
</div> */}










<main className={initials.body_class}>
                    {initials.page_title === "Uniskills Chat | "+config.APP_NAME ?
                        <div className="text-light positon-fixed pt-2 pb-2 col-12 d-flex align-item-center" 
                            style={{ "position": "fixed", "alignItems": "center !important", "bottom": "0%", "backgroundColor": "#204d74", "color":"#ffff !important",  "zIndex": "5000" }}>
                            <marquee className="text-light d-flex" style={{ "display":"flex !important" }}>
                                <h5 className="mt-2 text-light">
                                    Were Offering <span className="text-primary">100</span> Job Postings for
                                    Free. Snag Your Chance! Only <a className="text-primary" href={`/${config.LOGIN}`} >99</a>
                                    Free job postings Remaining.
                                </h5>
                            </marquee>
                        </div>
                    : null}

                    {children}
                    
                    
                </main>












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

        </div>


    )
    
}