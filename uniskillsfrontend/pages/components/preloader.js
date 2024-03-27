import Head from "next/head";



export default function Preloader() {
    return (
            <>

<Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content=" ." />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="" />
                <meta name="author" content=" " />
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



      <div className="preloader card d-block mx-auto">
      <h1 className="display-3 text-center mx-auto pt-5 my-2 my-sm-4" style={{ marginTop:"20vh", maxWidth: "680px"}}><br/> <b className="text-primary ms-3">UNI</b> Skills</h1>
      <svg className="d-block mx-auto text-primary" width="511" height="40" viewBox="0 0 511 40" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <path d="M385.252 0.160149C313.41 0.614872 292.869 0.910678 253.008 2.06539C211.7 3.26203 182.137 4.46154 135.231 6.84429C124.358 7.39665 112.714 7.92087 99.0649 8.47247C48.9242 10.4987 39.1671 11.0386 22.9579 12.6833C14.9267 13.4984 7.98117 14.0624 4.08839 14.2162C0.627411 14.3527 0 14.4386 0 14.7762C0 15.0745 5.53537 15.3358 8.56298 15.1804C9.64797 15.1248 12.5875 14.9887 15.0956 14.8782C17.6037 14.7676 23.123 14.4706 27.3608 14.2183C37.3399 13.6238 42.1312 13.4363 59.2817 12.9693C88.1133 12.1844 109.893 11.43 136.647 10.2898C146.506 9.86957 159.597 9.31166 165.737 9.04993C212.308 7.06466 269.195 5.29439 303.956 4.74892C346.139 4.08665 477.094 3.50116 474.882 3.98441C474.006 4.17607 459.021 5.6015 450.037 6.34782C441.786 7.03345 428 8.02235 411.041 9.14508C402.997 9.67773 391.959 10.4149 386.51 10.7832C366.042 12.1673 359.3 12.5966 347.67 13.2569C294.096 16.2987 258.708 18.9493 209.451 23.6091C180.174 26.3788 156.177 29.5584 129.396 34.2165C114.171 36.8648 112.687 37.3352 114.186 39.0402C115.161 40.1495 122.843 40.2933 138.338 39.492C166.655 38.0279 193.265 36.8923 219.043 36.048C235.213 35.5184 237.354 35.4296 253.795 34.6075C259.935 34.3005 270.549 33.8517 277.382 33.6105L289.804 33.1719L273.293 32.999C248.274 32.7369 221.435 32.7528 212.596 33.035C183.334 33.9693 167.417 34.6884 141.419 36.2506C135.222 36.623 129.994 36.8956 129.801 36.8566C127.94 36.4786 169.612 30.768 189.492 28.6769C234.369 23.956 280.582 20.4337 351.602 16.3207C358.088 15.9451 371.108 15.1233 380.535 14.4947C389.962 13.866 404.821 12.8761 413.556 12.2946C447.177 10.057 457.194 9.22358 489.506 5.97543C510.201 3.895 510.311 3.8772 510.875 2.50901C511.496 1.00469 509.838 0.322131 505.088 0.127031C500.576 -0.0584957 416.098 -0.0351424 385.252 0.160149ZM291.144 33.02C291.536 33.0658 292.102 33.0641 292.402 33.0162C292.703 32.9683 292.383 32.9308 291.691 32.9329C290.999 32.935 290.753 32.9743 291.144 33.02Z"></path>
      </svg>
        {/* Add your preloader animation or image here */}
        <style jsx>{`
          .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
             z-index: 9999;
          }
        `}</style>
      </div></>
    );
  }
  