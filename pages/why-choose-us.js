// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';
import { useEffect, useState } from 'react';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function WHY_() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "Why Choose Us | "+config.APP_NAME, body_class: "page-wrapper bg-secondary overflow-hidden px-2" };

  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('marketers');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    
    <Layout initials={page_initials}>

      <>

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
              -webkit-transition: all .4s .2s ease-in-out;
              transition: all .4s .2s ease-in-out;
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
              -webkit-transition: opacity .2s ease-in-out;
              transition: opacity .2s ease-in-out;
              opacity: 0;
            }

            .page-loading.active > .page-loading-inner {
              opacity: 1;
            }

            .page-loading-inner > span {
              display: block;
              font-family: 'Inter', sans-serif;
              font-size: 1rem;
              font-weight: normal;
              color: #6f788b;
            }

            .dark-mode .page-loading-inner > span {
              color: #fff;
              opacity: .6;
            }

            .page-spinner {
              display: inline-block;
              width: 2.75rem;
              height: 2.75rem;
              margin-bottom: .75rem;
              vertical-align: text-bottom;
              background-color: #d7dde2;
              border-radius: 50%;
              opacity: 0;
              -webkit-animation: spinner .75s linear infinite;
              animation: spinner .75s linear infinite;
            }

            .dark-mode .page-spinner {
              background-color: rgba(255, 255, 255, .25);
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

            @media only screen and (max-width: 767px) {
              .nav-tabs {
                margin-top: 50px;
              }

              .nav-tabs li {
                font-size: 14px;
              }
            }
          `}</style>
        </Head>
















        <section className="container pt-5 pb-xxl-3 mt-5">
        {/* <!-- Breadcrumb--> */}
        {/* <x-atoms.breadcrumb title="Why Choose Us" /> */}

        <div className="row">
          <div className="col pb-3">
            <h1 className="display-1">Why Choose Us</h1>
            <p className="pe-5 mb-0 ms-2">Highlighted below are the benefits of choosing us</p>
          </div>

        </div>
      </section>
      {/* <!-- Features--> */}
      <section className="container py-4 pt-sm-5 pb-md-5 my-1 my-lg-1 my-xxl-2">
        {/* <!-- Item--> */}
        <div className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4 justify-content-center ms-md-5">
          <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <Image className="d-block rounded-5" src="assets/img/why-choose-us/pay-money.svg" alt="Image" width="400" />
          </div>
          <div className="col-md-6 col-lg-5 order-md-1 bg-secondary rounded mt-2 mb-5 ps-4 pt-5 pb-5 pe-5">
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-sm-2 pb-lg-3">Pay Per Post</h2>
              <p className="fs-xl">There are several benefits to using UniSkills. You can choose a selection of listings that suit your needs or the type of assistants you require. You can post a job listing or create a budget for a project you may need assistance with.</p>

            </div>
          </div>
        </div>
        {/* <!-- Item--> */}
        <div className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4 justify-content-center ms-md-5">
          <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <Image className="d-block rounded-5" src="assets/img/why-choose-us/scale-up.svg" alt="Image" width="400" />
          </div>
          <div className="col-md-6 col-lg-5 order-md-1 bg-secondary rounded mb-3 mt-2 ps-4 pt-5 pb-5 pe-5">
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-3 mb-2 mb-lg-3 mb-xl-4">Quality Commitment</h2>
              <p>A company`s top priority is to hire the right talent in its field. It is our mission to take all the hassle out of it for you. With UniSkills, you can post a job or project and get in touch with students in a transparent and straightforward manner. Post your job or project today and find your perfect match in no time! Check out what we have to offer</p>
            </div>
          </div>
        </div>
        {/* <!-- Item--> */}
        <div className="row align-items-center py-3 py-sm-4 py-lg-5 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4 justify-content-center ms-md-5">
          <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <Image className="d-block rounded-5" src="assets/img/why-choose-us/save-money.svg" alt="Image" width="400" />
          </div>
          <div className="col-md-6 col-lg-5 order-md-1 bg-secondary rounded mb-3 mt-2 ps-4 pt-5 pb-5 pe-5">
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-sm-2 pb-lg-3">No recruitment fees</h2>
              <p className="fs-xl mb-lg-4">UniSkills helps companies find reliable, quality candidates for their companies. With our best-in-class sourcing tools and expertise, we can save you time, money, and headaches. In addition to having no recruitment fees, a simple pay-as-you-post approach, and access to the latest innovations in candidate matching, we are the only partner you will need when it comes to finding the right talent.</p>
            </div>
          </div>
        </div>
        {/* <!-- Item--> */}
        <div className="row align-items-center py-3 py-sm-4 py-lg-5 mb-3 my-sm-2 my-md-3 my-lg-0 my-xl-2 my-xxl-4 justify-content-center ms-md-5">
          <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1 order-md-2 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <Image className="d-block rounded-5" src="assets/img/why-choose-us/customer-care.svg" alt="Image" width="400" />
          </div>
          <div className="col-md-6 col-lg-5 order-md-1 bg-secondary rounded mb-4 mt-2 ps-4 pt-5 pb-5 pe-5">
            <div className="pe-md-4 pe-lg-0">
              <h2 className="h1 pb-sm-2 pb-lg-3">Here For You</h2>
              <p className="fs-xl">UniSkills is an online networking platform that links professionals with the skills they need for jobs. This allows students and professionals to interact in a safe environment while showcasing their skills and achievements in order to get them matched with the right opportunities. Start networking now! UniSkills is the smartest way to connect with opportunities. It is a platform for connecting students and professionals so they can connect, share, and learn at their own pace.</p>

            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA--> */}
      <section className="px-3 py-5 bg-secondary rounded  mt-5 ps-4 pt-5 pb-5 pe-5">
        <div className="container pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3">
          <div className="row pt-sm-3 pt-md-4">
            <div className="col-md-6 col-xl-5 offset-xl-1 ">
              <h2 className="display-3">Start your journey now!</h2>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
              {/* <!-- <p className="fs-xl pb-4 mb-2 mb-lg-3">Massa velitienes semper faucibus tristique id nibh elementum, id eu aliquamd diam mi tempus at laciniarty scelerisques augue at morbi. Arcu sit orcirs, risus mattissit laoreet.</p> --> */}
              {/* <div className="d-sm-flex mt-md-5"><Link className="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" to=":">Find Students</Link> <Link className="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" to=":">Explore Jobs</Link></div> */}
            </div>
          </div>
          <div className="d-none d-md-block text-center mt-n5">
            <svg className="text-warning ms-lg-5" width="171" height="97" viewBox="0 0 171 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M169.319 54.333C162.404 55.9509 155.712 58.0764 149.09 60.6764L149.07 60.6761C148.967 60.7158 148.863 60.7554 148.76 60.7951C147.3 61.3811 148.325 63.4238 149.672 63.2067C154.548 62.4134 159.994 59.8725 164.87 59.0792C148.278 73.1339 129.684 89.2549 107.779 92.6402C85.6981 96.0539 65.5665 86.7839 56.8768 66.9865C70.9662 55.0671 79.2106 35.6614 79.0299 17.6457C78.9484 10.3157 76.1485 -3.36373 65.7068 1.21851C55.8557 5.53146 52.0466 22.5213 50.5736 31.7739C48.7364 43.2858 49.7593 55.5291 53.8643 66.2014C52.787 67.0812 51.6907 67.8989 50.5755 68.6546C40.6328 75.3851 27.1039 78.8929 16.4487 72.0362C2.91045 63.3259 1.93984 44.9485 1.56902 30.4091C1.54778 29.6265 0.359869 29.6092 0.360624 30.3915C0.322634 44.0809 0.835929 59.065 10.5664 69.6857C18.5722 78.4182 30.4315 79.7753 41.3346 75.9924C46.2437 74.2834 50.7739 71.7557 54.8581 68.6348C59.9738 80.2586 68.9965 89.6956 82.2735 93.7393C113.474 103.223 141.744 83.0494 164.903 63.697L161.901 71.0334C161.267 72.5887 163.76 73.2736 164.393 71.7389C165.986 67.8713 167.569 63.9933 169.152 60.1359C169.288 60.0247 169.695 58.6127 169.821 58.491C170.122 57.1161 169.152 60.1359 169.851 58.4169C170.189 57.6087 170.517 56.79 170.855 55.9818C171.248 54.9994 170.185 54.1192 169.319 54.333ZM54.3624 59.8578C51.4872 49.1623 51.6051 37.5841 54.2025 26.8039C55.5185 21.3369 57.4405 15.8066 60.1572 10.8541C61.2311 8.89354 62.5139 6.77134 64.2307 5.31421C69.4231 0.902277 74.3649 4.80357 75.8002 10.4446C80.5272 28.9489 70.1806 51.6898 55.8431 64.5114C55.2971 63.0109 54.793 61.4698 54.3624 59.8578Z"></path>
            </svg>
          </div>
        </div>
      </section>



      </>




    </Layout>

  )

}

