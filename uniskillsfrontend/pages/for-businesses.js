// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function ForBusinesses() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "For Businesses | "+config.APP_NAME };


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

            <section className="overflow-hidden px-2">
                <div className="container overflow-hidden pt-2 pt-sm-2 pb-sm-2 pb-md-4 py-xl-2 ">
                    <div className="row align-items-center py-5 mt-md-2 my-lg-3 my-xl-4 my-xxl-5">
                        <div className="col-lg-7 order-lg-2 d-flex justify-content-center justify-content-lg-end mb-4 mb-md-5 mb-lg-0 pb-3 pb-md-0">
                            <div className="parallax me-lg-n4 me-xl-n5" style={{ "maxWidth": "667px" }}>
                                <div className="parallax-layer" data-depth="0.1">
                                    <Image  width={400} height={400} src="/assets/img/for-business/Office work-rafiki.png" alt="Layer" />
                                </div>
                                <div className="parallax-layer" data-depth="-0.2">
                                    <Image width={400} height={400} src="/assets/img/landing/business-consulting/hero/02.png" alt="Layer" />
                                </div>
                                <div className="parallax-layer" data-depth="0.25">
                                    <Image width={400} height={400} src="/assets/img/landing/business-consulting/hero/03.png" alt="Layer" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 card border-0 rounded ps-4 pt-3 pb-3 pe-4 order-lg-1">
                            <h1 className="display-4 text-center  text-lg-start pb-sm-2 pb-md-3">Uniskills for Business</h1>
                            <p className="fs-lg text-center text-lg-start text-grey pb-xl-2 mx-auto mx-lg-0 mb-5" style={{ "maxWidth": "420px" }}>
                                Experience UniSkills, a video-centric job platform connecting businesses with talented students and graduates to fuel 
                                innovation and success.
                            </p>
                            <div className="text-center text-lg-start">
                                <Link className="btn btn-lg btn-primary me-1" href={config.FIND_STUDENT}>Find Students</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="overflow-hidden px-2">
                <div className="container pb-5 pt-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
                    <div className="row pb-md-3 pb-lg-4 mb-2 mb-lg-3">
                        
                        <div className="col-md-5 d-flex flex-column align-items-center mb-4 mb-md-0">
                            <div className="position-relative" style={{ "maxWidth": "416px" }}>
                                <Image   fill={true} className="d-block position-relative zindex-2" src="/assets/img/for-business/Online report-pana.png" alt="Uniskills" />
                                <div className="bg-primary position-absolute start-0 bottom-0 w-100" 
                                style={{ "height": "85.4%", "borderRadius": "2.25rem 8rem 2.25rem 2.25rem" }}></div>
                            </div>

                            <div className="text-center text-md-start pt-3 mt-3">
                                <div className="position-relative pt-4" style={{ "maxWidth": "500px" }}>
                                <div className="position-absolute top-0 start-0 w-100 text-center text-md-start ms-md-1">
                                    <svg className="text-border" width="155" height="111" viewBox="0 0 155 111" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M125.969 38.7937C129.372 30.2345 134.734 21.7781 141.902 13.6311C144.17 11.053 144.48 7.34066 142.623 4.45316C141.18 2.18441 138.808 0.94696 136.23 0.94696C135.508 0.94696 134.786 0.99826 134.064 1.25633C118.905 5.69065 83.4811 21.4171 82.5014 71.8454C82.1407 91.2842 96.3717 107.99 114.883 109.898C125.144 110.93 135.353 107.578 142.933 100.772C150.512 93.914 154.844 84.117 154.844 73.9077C154.844 56.8922 142.778 41.9905 125.969 38.7937Z"></path>
                                    <path d="M32.5904 109.898C42.7999 110.93 53.0092 107.578 60.5888 100.772C68.1686 93.914 72.5 84.117 72.5 73.9077C72.5 56.8922 60.4342 41.9905 43.6248 38.7937C47.0281 30.2345 52.3905 21.7781 59.5578 13.6312C61.8265 11.0531 62.1359 7.34071 60.2794 4.45321C58.8358 2.18446 56.4638 0.947006 53.8857 0.947006C53.1641 0.947006 52.4421 0.998306 51.7202 1.25638C36.5608 5.6907 1.13734 21.4172 0.157654 71.8454V72.5671C0.157654 91.6968 14.2341 107.99 32.5904 109.898Z"></path>
                                    </svg>
                                </div>
                                <p className="fs-lg position-relative zindex-2 mb-0">UniSkills goes beyond traditional CVs, offering a dynamic job platform that
                                    emphasizes video profiles. This innovative approach allows job seekers to showcase their impressive skills and personalities
                                    in a more personal manner. For students, it&apos;s a chance to highlight their unique qualities and talents; for employers, it&apos;s an
                                    opportunity to gain a better understanding of what potential employees have to offer.
                                    In addition, UniSkills enables businesses to efficiently shortlist candidates for employment, making the hiring process more
                                    streamlined and effective. Experience the benefits of video-based profiles and discover exceptional talent with UniSkills.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-7 col-lg-6 col-xxl-5 offset-lg-1 offset-xxl-2">
                            <div className="ps-md-4 ps-lg-0">
                                <div className="position-relative d-flex justify-content-end my-3 py-1" data-aos="fade-left" data-aos-easing="ease-out-back">
                                    <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">01</div>
                                        <div className="card border-0 ps-3" style={{ "width": "calc(100% - 1.75rem)" }}>
                                            <div className="card-body ps-4">
                                            <h3 className="h5 card-title pb-2 mb-1">Discover Top Talent</h3>
                                            <p className="card-text">Access a diverse pool of skilled students and graduates, ready to contribute to your company&apos;s growth and success.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="position-relative d-flex justify-content-end my-3 py-1" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="250">
                                        <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">02</div>
                                        <div className="card border-0 ps-3" style={{ "width": "calc(100% - 1.75rem)" }}>
                                            <div className="card-body ps-4">
                                            <h3 className="h5 card-title pb-2 mb-1">Video-Based Profiles</h3>
                                            <p className="card-text">Gain deeper insights into candidates&apos; personalities and skills through dynamic video profiles, enhancing the hiring process.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="position-relative d-flex justify-content-end my-3 py-1" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="500">
                                    <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">03</div>
                                    <div className="card border-0 ps-3" style={{ "width": "calc(100% - 1.75rem)" }}>
                                        <div className="card-body ps-4">
                                        <h3 className="h5 card-title pb-2 mb-1">Efficient Shortlisting</h3>
                                        <p className="card-text">Streamline candidate selection with our user-friendly platform, allowing you to quickly identify the best fit for your team
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative d-flex justify-content-end my-3 py-1" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="700">
                                    <div className="btn btn-lg btn-icon btn-primary fs-xl fw-bold rounded-circle position-absolute top-50 start-0 translate-middle-y zindex-2 pe-none">04</div>
                                    <div className="card border-0 ps-3" style={{ "width": "calc(100% - 1.75rem)" }}>
                                        <div className="card-body ps-4">
                                        <h3 className="h5 card-title pb-2 mb-1">Future-Proof Workforce</h3>
                                        <p className="card-text">Invest in the next generation of professionals, fostering innovation and staying ahead in today&apos;s competitive business landscape.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-100 px-3 px-md-5 py-4" style={{ "maxWidth": "1680px" }}>
                
                <div className="row py-4 py-lg-5 py-sm-2 py-md-4 py-lg-0 py-xl-2 py-xxl-4 mx-auto" data-aos="fade-up" data-aos-duration="600" 
                    data-aos-offset="300" data-disable-parallax-down="md">
                    <div className="col-md-6 pt-xl-2 pb-3 pb-3 pb-md-0">
                        <Image className="d-dark-mode-none row justify-content-center align-content-center" src="/assets/img/landing/saas-1/features/03-light.png" width={636} height={100} alt="Image" />
                        <Image className="d-none d-dark-mode-block"  src="/assets/img/landing/saas-1/features/03-dark.png" width={636} height={100}  alt="Image" />
                    </div>
                    <div className="col-md-6 col-xl-5 offset-xl-1 pt-xl-2" data-aos="fade-up" data-aos-duration="850"
                        data-aos-offset="200" data-disable-parallax-down="md">
                        <div className="pe-md-3 pe-xl-2">
                            <span className="badge bg-faded-primary text-primary fs-sm mb-3 mb-lg-4">For Business</span>
                            <h3 className="h2 mb-lg-4">
                                Trusted by businesses and startups of any scale
                            </h3>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex pt-1 mt-2">
                                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Providing the right value for every budget
                                </li>
                                <li className="d-flex pt-1 mt-2">
                                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Delivering quality work on time
                                </li>
                                <li className="d-flex pt-1 mt-2">
                                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Work
                                with amazing people
                                </li>
                                <li className="d-flex pt-1 mt-2">
                                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Pay
                                with confidence, every time
                                </li>
                                <li className="d-flex pt-1 mt-2">
                                <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>A
                                platform designed to meet your needs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>

        </div>


    </Layout>

  )

}


