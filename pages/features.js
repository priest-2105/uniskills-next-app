// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';
import { useEffect, useState } from 'react';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function FEATURES() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "New Features | "+config.APP_NAME, body_class: "page-wrapper bg-secondary overflow-hidden px-2" };

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





        {/* <!-- Page title--> */}
      <section className="container pt-1 pb-4 pb-lg-0 my-md-2 my-lg-5">
        <div className="row pt-5 pb-4 pb-lg-5 mb-2 mt-1 mt-sm-2 my-xl-3">
          <div className="col-md-7">
            <h1 className="display-3 fw-medium text-uppercase mb-0">New Featues And Update on <span className="text-primary">UniSkills</span></h1>
          </div>
          <div className="col-md-5 col-lg-4 offset-lg-1 pt-3 pt-md-2">
            <p className="mb-0"><span className="text-primary">UniSkills</span>  is better with your voice! Share your thoughts, ideas, and requests with us. Let`s build and improve together for a stronger UniSkills community</p>
            <Link href="/suggestion" className="mt-3 btn btn-primary col-12 btn-sm">Share Tips </Link>
        </div>
        </div>
        <hr/>
      </section>



      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row pb-md-4 pb-xl-5 align-items-center">
          <div className="col-md-6 mb-2 mb-md-0">
            <div className="card border-0  bg-size-cover bg-position-center" style={{ height:"500px", width:"100%", backgroundImage:"url('assets/img/landing/a-hand-holding-a-phone-in-a-sunny-room-typing-a-me-upscaled.png');"}}>
              <div className="d-none d-sm-block d-md-none" style={{height:"450px"}}></div>
              <div className="d-sm-none" style={{height: "350px"}}></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
              <h2 className="h1 pb-2 pb-sm-3 pb-xl-4"> Next-Level Chat Performance </h2>
              <div className="d-flex pb-3 mb-2 mb-xl-3">
                <div className="ps-3">
                  <p className="mb-0">UniSkills v3 is proud to unveil its next-level chat experience, featuring an enhanced UI and unprecedented speed. Our commitment to performance means students and businesses can enjoy a fluid and responsive communication platform. Embrace the future of collaboration with UniSkills v3, where chat performance knows no bounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row pb-md-4 pb-xl-5 align-items-center">

          <div className="col-md-6 col-xl-6 col-lg-6 ">
            <div className="pt-4 pb-sm-4">
              <h2 className="h1 pb-2 pb-sm-3 pb-xl-4">Your Personalized Career Concierge</h2>
              <div className="d-flex pb-3 mb-2 mb-xl-3">
                <div className="ps-3">
                  <p className="mb-0">UniSkills v3 introduces your personalized career concierge, leveraging AI assistance for bio and job postings. Tailor your professional narrative with ease and let our intelligent system enhance your job listings for maximum impact. Navigate your career journey with precision, powered by UniSkills v3`s cutting-edge AI guidance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2 mb-md-0">
            <div className="card border-0  bg-size-cover bg-position-center" style={{ height:"500px", width:"100%", backgroundImage:"url('../public/assets/img/landing/ai-technology-microchip-background-digital-transformation-concept.jpg')"}}>
              <div className="d-none d-sm-block d-md-none" style={{height:"450px"}}></div>
              <div className="d-sm-none" style={{height: "350px"}}></div>
            </div>
          </div>
        </div>
      </section>












      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row pb-md-4 pb-xl-5 align-items-center">
          <div className="col-md-6 mb-2 mb-md-0">
            <div className="card border-0  bg-size-cover bg-position-center" style={{ height:"500px", width:"100%", backgroundImage:"url('assets/img/landing/_apowerfulsea.png');"}}>
              <div className="d-none d-sm-block d-md-none" style={{height:"450px"}}></div>
              <div className="d-sm-none" style={{height: "350px"}}></div>
            </div>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="pt-4 pb-sm-4 ps-md-4 ps-xl-0">
              <h2 className="h1 pb-2 pb-sm-3 pb-xl-4">Navigate Opportunities Seamlessly </h2>
              <div className="d-flex pb-3 mb-2 mb-xl-3">
                <div className="ps-3">
                  <p className="mb-0">Discover a new era of efficiency with UniSkills advanced filters, designed to simplify your search for business collaborations and job opportunities. Tailor your preferences effortlessly, whether you`re seeking the perfect project or the ideal candidate. UniSkills ensures that finding the right match is not just easy but tailored precisely to your unique requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>










      <section className="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
        <div className="row pb-md-4 pb-xl-5 align-items-center">

          <div className="col-md-6 col-xl-6 col-lg-6 ">
            <div className="pt-4 pb-sm-4">
              <h2 className="h1 pb-2 pb-sm-3 pb-xl-4">Your Ideas, Our Evolution</h2>
              <div className="d-flex pb-3 mb-2 mb-xl-3">
                <div className="ps-3">
                  <p className="mb-0"> UniSkills is committed to constant improvement, and we value your insights. Introducing our update suggestion feature, where your ideas have the potential to drive meaningful evolution. Whether it`s refining existing features or proposing new ones, your contributions play a crucial role in ensuring UniSkills remains at the forefront of innovation. Let`s build a better future together!  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2 mb-md-0">
            <div className="card border-0  bg-size-cover bg-position-center" style={{ height:"500px", width:"100%", backgroundImage:"url('assets/img/landing/14979112_SL_052021_43150_03.jpg');"}}>
              <div className="d-none d-sm-block d-md-none" style={{height:"450px"}}></div>
              <div className="d-sm-none" style={{height: "350px"}}></div>
            </div>
          </div>
        </div>
      </section>








      </>




    </Layout>

  )

}

