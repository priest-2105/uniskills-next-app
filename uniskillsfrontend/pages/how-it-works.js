// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function HowItWorks() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "How It Works | "+config.APP_NAME };


  return (
    
    <Layout initials={page_initials}>

      <Head>
        <style>{`
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

        .page-loading.active>.page-loading-inner {
            opacity: 1;
        }

        .page-loading-inner>span {
            display: block;
            font-family: "Inter", sans-serif;
            font-size: 1rem;
            font-weight: normal;
            color: #6f788b;
        }

        .dark-mode .page-loading-inner>span {
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
        `}</style>
      </Head>









        <div className="bg-secondary">

            <section class="px-5 px-md-3 pt-5 pb-sm-3" >
                
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href={config.HOMEPAGE}>Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">How We Work</li>
                    </ol>
                </nav>

                <h1 class="display-1 pb-3">How We Work</h1>
                <div class="row align-items-center pt-xl-2 pb-5">
                    <div class="" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170" >
                        <div class="ps-md-3 ps-lg-0">
                            <h1 class="display-5">Connecting your business with the best students</h1>
                            <p class="fs-lg pb-3 pb-lg-4">
                                UniSkills connects clients to skilled students who are available to hire by the hour or project.
                            </p>
                        </div>
                    </div>
                </div>

            </section>



            
            <section class="border-top border-light py-2 py-sm-3 py-md-4 py-lg-5">
                <div class="container  py-5 my-lg-3 my-xl-4 my-xxl-5">
                    <div class="row pt-sm-2 pt-md-0 pt-xl-1 pt-xxl-2">

                        <div class="col">
                            <ul class="nav nav-tabs flex-nowrap overflow-auto text-nowrap pb-3 justify-content-center align-content-center" role="tablist">
                                <li class="nav-item mb-0"><a class="nav-link active" href="#marketers-text" data-bs-toggle="tab" data-binded-content="#marketers-image" role="tab">Business</a></li>
                                <li class="nav-item mb-0"><a class="nav-link" href="#agencies-text" data-bs-toggle="tab" data-binded-content="#agencies-image" role="tab">Students</a></li>
                            </ul>

                            <div class="tab-content pt-lg-2 pt-xl-3">
                                <div class="tab-pane fade show active" id="marketers-text" role="tabpanel">
                                    <div class="container py-1">
                                        <div class="row row-cols-1 justify-content-around col-12 justify-content-between row-cols-sm-1 row-cols-lg-3 gy-4 gy-sm-5 gx-4 pb-3 pb-md-4 pb-lg-5 mb-md-3 mb-lg-0 text-center">
                                            <div class="col text-center  bg-secondary pt-1 pb-1 ps-2 pe-2 rounded" style={{ "width": "300px" }}>
                                                <div class="display-4 text-primary ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{ "width": "50px" }}>
                                                1
                                                </div>
                                                <h3 class="h4 pb-2 mb-1">Post your job</h3>
                                                <p class="fs-sm mb-3">Give details of your job and we will match you with suitable candidates.</p>
                                            </div>
                                            <div class="col text-center  bg-secondary pt-1 pb-1 ps-2 pe-2 rounded" style={{ "width": "300px" }}>
                                                <div class="display-4 text-primary ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{ "width": "50px" }}>
                                                2
                                                </div>
                                                <h3 class="h4 pb-2 mb-1">Chat with candidates</h3>
                                                <p class="fs-sm mb-3">Call, chat, or meet with your favourites to discuss the project including the cost.</p>
                                            </div>
                                            <div class="col text-center  bg-secondary pt-1 pb-1 ps-2 pe-2 rounded" style={{ "width": "300px" }}>
                                                <div class="display-4 text-primary ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{ "width": "50px" }}>
                                                3
                                                </div>
                                                <h3 class="h4 pb-2 mb-1">Auto admin</h3>
                                                <p class="fs-sm mb-3">UniSkills will manage the billing, deadlines, payment, and everything else!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="agencies-text" role="tabpanel">
                                    <div class="container py-1">
                                        <div class="row row-cols-1 justify-content-around col-12 justify-content-between row-cols-sm-1 row-cols-lg-3 gy-4 gy-sm-5 gx-4 pb-3 pb-md-4 pb-lg-5 mb-md-3 mb-lg-0 text-center">
                                            <div class="col text-center bg-secondary pt-1 pb-1 ps-2 pe-2 rounded" style={{ "width": "300px" }}>
                                                <div class="display-4 text-primary ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{ "width": "50px" }}>
                                                1
                                                </div>
                                                <h3 class="h4 pb-2 mb-1">Submit details</h3>
                                                <p class="fs-sm mb-4">Submit details of your vacancy and we will match you with suitable candidates.</p>
                                            </div>

                                            <div class="col text-center bg-secondary pt-1 pb-1 ps-2 pe-2 rounded" style={{ "width": "300px" }}>
                                                <div class="display-4 text-primary ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{ "width": "50px" }}>
                                                2
                                                </div>
                                                <h3 class="h4 pb-2 mb-1">Chat with candidates</h3>
                                                <p class="fs-sm mb-4">Call, chat, or meet with your favourites to discuss the project including the cost.</p>
                                            </div>

                                            <div class="col text-center bg-secondary pt-1 pb-1 ps-2 pe-2 rounded" style={{ "width": "300px" }}>
                                                <div class="display-4 text-primary ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{ "width": "50px" }}>
                                                3
                                                </div>
                                                <h3 class="h4 pb-2 mb-1">Auto admin</h3>
                                                <p class="fs-sm mb-4">UniSkills will manage the billing, deadlines, payment, and everything else!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>





            
            <div class="row align-items-center pt-xl-1 mt-4 bg-secondary rounded pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
                <div class="col-md-5 col-xl-5 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
                    <div class="ps-md-3 ps-lg-0 pt-5">
                        <h2 class="h4">
                            No job is too small
                        </h2>
                        <h1 class="display-2">Post a Job</h1>
                        <p class="fs-sm pb-3 pb-lg-4 mb-3">
                            UniSkills is a marketplace where you can find the right people for your job, whether it is a small, one-off task or a full-time position. Because it`s a curated platform for students, the quality is always high. We have a clean user interface, detailed profiles, and sophisticated search functionality that makes finding the right candidate easy.
                        </p>
                        <ul class="list-unstyled mb-0">
                            <li class="d-flex pt-1 mt-2">
                                <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Recruit bright prospects for your position
                            </li>
                            <li class="d-flex pt-1 mt-2">
                                <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Anti-fraud protection
                            </li>
                            <li class="d-flex pt-1 mt-2">
                                <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Dedicated 24/7 customer service team
                            </li>
                        </ul>
                        <div class="pt-4">
                            <Link class="btn btn-sm btn-outline-dark rounded-pill" href={`${config.LOGIN}`}>Post a Job</Link>
                        </div>
                    </div>
                </div>

                <div class="col-md-5 col-lg-5 mb-4 mb-md-0 pt-5 pt-md-0 ">
                    <Link class="d-block position-relative" href={`${config.LOGIN}`} >
                        <div class="bg-info rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250" ></div>
                        <Image class="d-block position-relative zindex-2 mx-auto how-we-work-img" src="/assets/img/how-we-work/Multitasking.svg" height={100} width="400" 
                            alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250" />
                    </Link>
                </div>

            </div>


            <div class="row align-items-center pt-xl-1 mt-4 bg-secondary rounded pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
                <div class="col-md-5 col-xl-5 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170" >
                <a class="d-block position-relative" href={`/${config.LOGIN}`} >
                <div
                    class="bg-primary rounded-5 position-absolute top-0 start-0 w-100 h-100"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-offset="250"
                ></div>
                <Image
                    class="d-block position-relative zindex-2 mx-auto"
                    src="/assets/img/how-we-work/Business-deal.svg"
                    height={100}
                    width="400"
                    alt="Image"
                    data-aos="fade-in"
                    data-aos-duration="400"
                    data-aos-offset="250"
                /></a>
            </div>


            <div
                class="col-md-5 col-xl-5 offset-lg-1 order-sm-0 order-md-1 mx-1"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-offset="170"
            >
                <div class="ps-md-3 ps-lg-0">
                <h2 class="h4">
                Find the student of your choice
                </h2>
                <h1 class="display-2">Hire a Student</h1>
                <p class="fs-sm pb-2 pb-lg-4 mb-3">
                    We`re here to simplify your life. From finding the right talent to making the match. It`s what UniSkills do best! We have bright minds in every field, from IT to HR and accounting. This means you can find the right person for the right job, right now. All you need to do is tell us where you need a person and we`ll take care of the rest.
                </p>
                <ul class="list-unstyled mb-0">
                    <li class="d-flex pt-1 mt-2">
                    <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Detailed profile of students
                    </li>
                    <li class="d-flex pt-1 mt-2">
                    <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Engage in a conversation with a prospective client
                    </li>
                    <li class="d-flex pt-1 mt-2">
                    <i class="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>A video CV that is safe and secure as a first impression
                    </li>
                </ul>
                <div class="pt-4"><a
                    class="btn btn-sm btn-outline-dark rounded-pill"
                    href="{{ route('talents') }}"
                    >Hire a Student</a
                ></div>
                </div>
            </div>
            </div>
            <div class="text-start text-md-center mt-5">
            <h1 class="text-center display-4 mt-4">Manage Projects Effectively</h1>
            <p class="leading-1 px-5">You&apos;ve got a million things on your to-do list for your project. You have to delegate tasks, schedule meetings and track progress. You only need UniSkills to manage your project. We`ll help you get things done with its simple and intuitive interface.</p>
            </div>
   {/* d Item--> */}
            <div
            class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4  bg-secondary rounded  mt-5"
            >
            <div class="col-md-7 col-lg-6 mb-4 mb-md-0 pt-4">
                <a
                class="d-block position-relative"
                href={`/${config.LOGIN}`}
                >
                <div
                    class="bg-danger rounded-5 position-absolute top-0 start-0 w-100 h-100"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-offset="250"
                ></div>
                <Image
                    class="d-block position-relative zindex-2 ms-auto"
                    src="/assets/img/how-we-work/Customer-Survey.svg"
                    height={100}
                    width="400"
                    alt="Image"
                    data-aos="fade-in"
                    data-aos-duration="400"
                    data-aos-offset="250"
                /></a>
            </div>
            <div
                class="col-md-5 col-xl-4 offset-lg-1"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-offset="170"
            >
                <div class="ps-md-3 ps-lg-0">
                <h1 class="display-5 text-center">Review feedbacks</h1>
                </div>
            </div>
            </div>
   {/* d Item--> */}
            <div
            class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4  bg-secondary rounded mt-5"
            >
            <div class="col-md-7 col-lg-6 mb-4 mb-md-0 pt-3">
                <a
                class="d-block position-relative"
                href={`/${config.LOGIN}`}
                >
                <div
                    class="col-md-5 col-xl-4 offset-lg-1"
                    style={{backgroundColor: "#d7e4f4"}}
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-offset="250"
                ></div>
                <Image
                    class="d-block position-relative zindex-2 mx-auto"
                    src="/assets/img/how-we-work/Texting-bro.svg"
                    height={100}
                    width="400"
                    alt="Image"
                    data-aos="fade-in"
                    data-aos-duration="400"
                    data-aos-offset="250"
                /></a>
            </div>
            <div
                class="col-md-5 col-xl-4 offset-lg-1"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-offset="170"
            >
                <div class="ps-md-3 ps-lg-0">
                <h1 class="display-4 text-center">Communicate</h1>
                </div>
                </div>
            </div>




   {/* d Item--> */}
            <div
            class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4   bg-secondary rounded mt-5"
            >
                <div class="col-md-7 col-lg-6 mb-4 mb-md-0 pt-5">
                    <a
                    class="d-block position-relative"
                    href={`/${config.LOGIN}`}
                    >
                    <div
                        class="bg-warning rounded-5 position-absolute top-0 start-0 w-100 h-100"
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        data-aos-offset="250"
                    ></div>
                    <Image
                        class="d-block position-relative zindex-2 mx-auto"
                        src="/assets/img/how-we-work/Online-Review.svg"
                        height={100}
                        width="400"
                        alt="Image"
                        data-aos="fade-in"
                        data-aos-duration="400"
                        data-aos-offset="250"
                    /></a>
                </div>
                <div
                    class="col-md-5 col-xl-4 offset-lg-1"
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-offset="170"
                >
                    <div class="ps-md-3 ps-lg-0">
                    <h1 class="display-4 text-center">Rate the student</h1>
                    </div>
                </div>
                </div>
    {/* d Item--> */}
                <div
                class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4   bg-secondary rounded mt-5"
                >
                <div class="col-md-7 col-lg-6 mb-4 mb-md-0 pt-5">
                    <a
                    class="d-block position-relative"
                    href={`/${config.LOGIN}`}
                    >
                    <div
                        class="bg-danger rounded-5 position-absolute top-0 start-0 w-100 h-100"
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        data-aos-offset="250"
                    ></div>
                    <Image
                        class="d-block position-relative zindex-2 mx-auto"
                        src="/assets/img/how-we-work/Secure-data.svg"
                        height={100}
                        width="400"
                        alt="Image"
                        data-aos="fade-in"
                        data-aos-duration="400"
                        data-aos-offset="250"
                    /></a>
                </div>
                <div
                    class="col-md-5 col-xl-4 offset-lg-1"
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-offset="170"
                >
                    <div class="ps-md-3 ps-lg-0">
                    <h1 class="display-4 text-center">Secured Payments</h1>
                    </div>
                </div>
                </div>
         </div>
                {/* dCTA--> */}
        <section class="px-3 py-5  bg-secondary rounded  mt-5">
            <div class="container pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3">
            <div class="row pt-sm-3 pt-md-4">
                <div class="col-md-6 col-xl-5 offset-xl-1">
                <h2 class="display-3">Start your journey now!</h2>
                </div>
                <div class="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
       {/* d <p class="fs-xl pb-4 mb-2 mb-lg-3">Massa velitienes semper faucibus tristique id nibh elementum, id eu aliquamd diam mi tempus at laciniarty scelerisques augue at morbi. Arcu sit orcirs, risus mattissit laoreet.</p> --> */}
                <div class="d-sm-flex mt-md-5"><a class="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href="{{ route('talents') }}">Find Students</a><a class="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" href="{{ route('job') }}">Explore Jobs</a></div>
                </div>
            </div>
            <div class="d-none d-md-block text-center mt-n5">
                <svg class="text-warning ms-lg-5" width="171" height="97" viewBox="0 0 171 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M169.319 54.333C162.404 55.9509 155.712 58.0764 149.09 60.6764L149.07 60.6761C148.967 60.7158 148.863 60.7554 148.76 60.7951C147.3 61.3811 148.325 63.4238 149.672 63.2067C154.548 62.4134 159.994 59.8725 164.87 59.0792C148.278 73.1339 129.684 89.2549 107.779 92.6402C85.6981 96.0539 65.5665 86.7839 56.8768 66.9865C70.9662 55.0671 79.2106 35.6614 79.0299 17.6457C78.9484 10.3157 76.1485 -3.36373 65.7068 1.21851C55.8557 5.53146 52.0466 22.5213 50.5736 31.7739C48.7364 43.2858 49.7593 55.5291 53.8643 66.2014C52.787 67.0812 51.6907 67.8989 50.5755 68.6546C40.6328 75.3851 27.1039 78.8929 16.4487 72.0362C2.91045 63.3259 1.93984 44.9485 1.56902 30.4091C1.54778 29.6265 0.359869 29.6092 0.360624 30.3915C0.322634 44.0809 0.835929 59.065 10.5664 69.6857C18.5722 78.4182 30.4315 79.7753 41.3346 75.9924C46.2437 74.2834 50.7739 71.7557 54.8581 68.6348C59.9738 80.2586 68.9965 89.6956 82.2735 93.7393C113.474 103.223 141.744 83.0494 164.903 63.697L161.901 71.0334C161.267 72.5887 163.76 73.2736 164.393 71.7389C165.986 67.8713 167.569 63.9933 169.152 60.1359C169.288 60.0247 169.695 58.6127 169.821 58.491C170.122 57.1161 169.152 60.1359 169.851 58.4169C170.189 57.6087 170.517 56.79 170.855 55.9818C171.248 54.9994 170.185 54.1192 169.319 54.333ZM54.3624 59.8578C51.4872 49.1623 51.6051 37.5841 54.2025 26.8039C55.5185 21.3369 57.4405 15.8066 60.1572 10.8541C61.2311 8.89354 62.5139 6.77134 64.2307 5.31421C69.4231 0.902277 74.3649 4.80357 75.8002 10.4446C80.5272 28.9489 70.1806 51.6898 55.8431 64.5114C55.2971 63.0109 54.793 61.4698 54.3624 59.8578Z"></path>
                </svg>
            </div>
            </div>
        </section>

    </Layout>

  )

}


