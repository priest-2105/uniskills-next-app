// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';
import { useEffect, useState } from 'react';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function AboutUs() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "About Us | "+config.APP_NAME, body_class: "page-wrapper bg-secondary overflow-hidden px-2" };

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

















        <section className="bg-dark position-relative py-5 px-3">
          <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style={{ "backgroundColor": "rgba(255, 255, 255, 0.02)" }}></div>
          <div className="container dark-mode position-relative zindex-2 py-5 mb-4 mb-sm-5">
            <div className="row pb-5 mb-2 mb-sm-0 mb-lg-3">
              <div className="col-lg-10 col-xl-9">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href={`/${config.HOMEPAGE}`}>Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">About Us</li>
                  </ol>
                </nav>
                <h1 className="display-6 pb-2 pb-sm-3">
                  Connecting the best students to businesses
                </h1>
              </div>
            </div>
          </div>
        </section>
        










        <section className="container position-relative zindex-3 px-3" style={{ "marginTop": "-235px"  }}>
          <div className="rounded-5 overflow-hidden">
            <div className="jarallax ratio ratio-4x3" data-jarallax data-speed="0.6">
              {isClient ? 
                <div className="jarallax-img">
                  <Image src="/assets/img/about/agency/In the office-pana.png" fill={true} 
                    style={{ objectFit: "cover", objectPosition: "center", zIndex: "0"  }} alt={"About "+config.APP_NAME} />
                </div>
              : null }
            </div>
          </div>
        </section>
        











        <section className="py-5 px-1 mt-md-1 mt-xl-1 mt-xxl-1">
          <div className="container pt-2 pt-sm-4 pt-lg-5 mt-xxl-2">
            <h2 className="display-6 pb-3 mb-lg-4 text-center">Our Mission</h2>
            <div>
              <p>
                Unlock the full potential of individuals with UniSkills, a robust online marketplace connecting talented students and graduates to 
                companies seeking their expertise.
              </p>
              <p>
                Established in 2022, our platform was built to bridge the gap between forward-thinking employers searching for fresh talent and 
                inventive students eager to build careers based on their skills and passions.
                What sets UniSkills apart is our commitment to helping both startups and established businesses tap into the potential of young 
                professionals. Through our platform, students and recent graduates can embark on their careers in a professional setting, while the 
                market uncovers a new pool of skilled talent.
                Join us in our mission to empower the next generation and drive innovation across industries by connecting bright minds with exciting 
                opportunities.
              </p>
            </div>
          </div>
        </section>















    
        <section className=" border-top border-light py-2 py-sm-3 py-md-4 py-lg-5">
          <ul className="nav nav-tabs flex-nowrap overflow-auto text-nowrap pb-3 mb-3 mb-xl-4 justify-content-center align-content-center" role="tablist">
            <li className="nav-item mb-0">
              <Link className={`nav-link ${activeTab === 'marketers' ? 'active' : ''}`} href="#marketers-text" 
                onClick={() => handleTabClick('marketers')} data-bs-toggle="tab" data-binded-content="#marketers-image" role="tab">Students</Link>
            </li>
            <li className="nav-item mb-0">
              <Link className={`nav-link ${activeTab === 'agencies' ? 'active' : ''}`} href="#agencies-text" 
                onClick={() => handleTabClick('agencies')} data-bs-toggle="tab" data-binded-content="#agencies-image" role="tab">Employers</Link>
            </li>
            <li className="nav-item mb-0">
              <Link className={`nav-link ${activeTab === 'ecommerce' ? 'active' : ''}`} href="#ecommerce-text" 
                onClick={() => handleTabClick('ecommerce')} data-bs-toggle="tab" data-binded-content="#ecommerce-image" role="tab">Startups</Link>
            </li>
          </ul> 
          <div className="container bg-secondary rounded ps-4 pt-5 pb-5 pe-4  py-5 my-lg-3 my-xl-4 my-xxl-5 mx-md-5">
            <div className="row pt-sm-2 pt-md-0 pt-xl-1 pt-xxl-3">

              <div className="col-md-6 col-xl-5 offset-xl-1 order-md-2 pb-4 pb-md-0 mb-2 mb-md-0">
                <div className="binded-content" style={{ "maxWidth": "526px" }}>
                  <div className={`binded-item ${activeTab === 'marketers' ? 'active' : ''}`} id="marketers-image">
                    <div className="from-bottom">
                      <div className="d-flex justify-content-center position-absolute top-0 start-0 w-100 h-100">
                        <div className="bg-primary rounded-5 h-100" style={{ "width": "88.2%" }}></div>
                      </div>
                      <Image className="d-block position-relative zindex-2" src="/assets/img/about/student-about-image.svg" width={100} height={100} fill={true} 
                        style={{ objectFit: "cover", objectPosition: "center", zIndex: "0"  }} alt={"About "+config.APP_NAME} />
                    </div>
                  </div>
                  <div className={`binded-item pt-5 ${activeTab === 'agencies' ? 'active' : ''}`} id="agencies-image">
                    <div className="from-bottom">
                      <div className="d-flex justify-content-center position-absolute top-0 start-0 w-100 h-100">
                        <div className="bg-info rounded-5 h-100" style={{ "width": "88.2%" }}></div>
                      </div>
                      <Image className="d-block position-relative zindex-2" src="/assets/img/about/business-about-image.svg" width={100} height={100} fill={true} 
                        style={{ objectFit: "cover", objectPosition: "center", zIndex: "0"  }} alt={"About "+config.APP_NAME} />
                    </div>
                  </div>
                  <div className={`binded-item pt-5 ${activeTab === 'ecommerce' ? 'active' : ''}`} id="ecommerce-image">
                    <div className="from-bottom">
                      <div className="d-flex justify-content-center position-absolute top-0 start-0 w-100 h-100">
                        <div className="bg-warning rounded-5 h-100" style={{ "width": "88.2%" }}></div>
                      </div>
                      <Image className="d-block position-relative zindex-2" src="/assets/img/about/start-up-image.svg" width={100} height={100} fill={true} 
                        style={{ objectFit: "cover", objectPosition: "center", zIndex: "0"  }} alt={"About "+config.APP_NAME} />
                    </div>
                  </div>
                </div>
              </div>



              <div className="col-md-6 order-md-1">
                <div className="tab-content pt-lg-2 pt-xl-3">
                  <div className="tab-pane fade show active px-1" id="marketers-text" role="tabpanel">
                    <h3 className="mb-lg-4">Designed for students and recent graduates</h3>
                    <p>
                      You&apos;re more than just a certificate. UniSkills offers you a chance to stand out with the most exciting career opportunities in 
                      the UK by showcasing your unique skills. To connect with employers directly, you need to record your video CV, list your ongoing 
                      experience, and use our messaging platform. Any benefit? Signing up for an account with us will allow you to begin your career 
                      even before you leave university. At the very least, you&apos;ll gain valuable work experience - who knows where it will lead?
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex pt-1 mt-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Flexible payment system.
                      </li>
                      <li className="d-flex pt-1 mt-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>No agency fee.
                      </li>
                      <li className="d-flex pt-1 mt-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                        With our 24/7 & 365 days of customer support and service, we&apos;re always here to take the pressure off your shoulders.
                      </li>
                    </ul>
                  </div>

                  <div className="tab-pane fade px-1" id="agencies-text" role="tabpanel">
                    <h3 className="mb-lg-4">Designed for businesses</h3>
                    <p>
                      Discover the right students and graduates for your business operations on UniSkills. Our special tagging system allows you to 
                      browse prospective employees by their locations and skill sets, with insights into their video diaries, portfolios, and video CVs. 
                      When you find a candidate you like, you can get in touch with them straight away. No fuss or any arduous selection process. Just 
                      a clear view of the relevant candidates who can meet and exceed your standards.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex pt-1 mt-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Flexible payment system.
                      </li>
                      <li className="d-flex pt-1 mt-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>No agency fee.
                      </li>
                      <li className="d-flex pt-1 mt-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                        With our 24/7 & 365 days of customer support and service, we&apos;re always here to take the pressure off your shoulders.
                      </li>
                    </ul>
                  </div>

                  <div className="tab-pane fade px-1" id="ecommerce-text" role="tabpanel">
                    <h3 className="mb-lg-4">A resource for startups</h3>
                    <p>
                      Getting access to new skills, as well as flexibility and affordability are helpful resources for your startup. You can easily 
                      find students with the right skills on our platform, whether you need a permanent team member, an ad-hoc team member, or one-off 
                      project help. UniSkills is free to list your job vacancies - we charge start-ups a commission when the right candidate is found.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex pt-1 mt-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Our messaging system allows you to contact candidates.
                      </li>
                      <li className="d-flex pt-1 mt-2">
                        <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>
                        Provide your business with innovative solutions by partnering with bright students.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     














        <section className="px-3 py-5 ">
          <div className="container pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3 bg-secondary rounded ps-4 pt-3 pb-3 pe-4 ">
            <div className="row pt-sm-3 pt-md-4">
              <div className="col-md-6 col-xl-5 offset-xl-1">
                <h2 className="display-3">Start your journey now!</h2>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
                <div className="d-sm-flex mt-md-5">
                  <Link className="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href={`/${config.FIND_STUDENT}`}>Find Students</Link>
                  <Link className="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" href={`/${config.FINDOPPORTUNITIES}`}>Explore Jobs</Link>
                </div>
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

