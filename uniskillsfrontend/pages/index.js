import Link from 'next/link.js';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Import other components needed to set up this page
// import Hero from './components/hero.js';
// import About from './components/about_us.js';
// import Services from './components/services.js';
// import WhyHost from './components/why_become_host.js';

// Bring in the config file
import config from '../config';





export default function Home({data}) {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "Home | "+config.APP_NAME, body_class: "page-wrapper" };

  // State variable and its setter function
  const [mode, setMode] = useState('light'); // Initial value is an empty string

  useEffect(() => {
    // Code that uses the window object
    setMode(window.localStorage.getItem('mode'));
  }, [mode]); // Empty dependency array ensures this effect runs once after the component mounts


  return (

    // <Link href={config.CONTACT}>Lover</Link>
    
    <Layout initials={page_initials}>


      <section className="bg-secondary py-5 hero" data-aos="fade-up" data-aos-duration="500" data-aos-offset="280" 
        data-disable-parallax-down="lg" style={{ "backgroundImage": "url('/assets/img/landing/web-studio/hero-wave.png')", "overflow": "hidden" }}>
          <div className="container text-center pt-4 mt-lg-2 mt-xl-3 hero"  style={{ "maxHeight": "2800px", "backgroundImage": "url('/assets/img/landing/web-studio/hero-wave.png')" }}>
            <div className="position-relative mx-auto my-3" style={{ "maxWidth": "800px" }}>
              <h1 className="display-4 position-relative zindex-2 mb-0">Find and Hire the Best Students</h1>
              <div className="text-warning position-absolute top-0 start-50 translate-middle-x w-100 mt-md-3">
                  <svg width="608" height="66" viewBox="0 0 608 66" fill="#3aaed8"xmlns="http://www.w3.org/2000/svg">
                      <path opacity=".35" d="M45.66 63.0651C48.1682 62.8708 50.692 62.5736 53.2046 62.482C55.5493 62.3949 57.8918 62.3033 60.232 62.2161C73.0671 61.7358 85.8977 61.1192 98.7394 60.9293C112.169 60.7304 125.603 60.402 139.035 60.3663C152.743 60.3328 166.446 60.2747 180.152 60.3417C206.867 60.4757 231.522 59.2366 258.233 59.3013C290.201 57.8797 306.797 56.9045 334.904 55.6546C348.07 55.5876 361.243 55.2681 374.408 55.0111C387.336 54.7632 399.538 53.6311 412.46 53.1396C415.299 53.0323 418.137 52.8201 420.972 52.6548C423.774 52.4894 426.583 52.3576 429.383 52.1432C436.572 51.5913 444.461 51.7091 451.639 51.0545C464.138 49.9061 476.595 48.378 489.11 47.4218C502.221 46.4209 515.361 45.8534 528.486 45.0379C534.408 44.6715 540.366 44.2135 546.249 43.4048C552.974 42.4865 559.639 41.3762 566.288 39.991C572.715 38.6505 579.137 37.2743 585.567 35.9584C588.655 35.3261 591.757 34.7497 594.873 34.2984C598.4 33.7868 601.894 33.2618 605.377 32.5044C607.052 32.138 607.381 29.8927 607.381 28.4494C607.388 27.6273 607.258 26.8297 606.995 26.0567C606.749 25.4065 606.232 24.3676 605.377 24.3967C599.094 24.6089 592.816 24.8234 586.535 25.1205C580.2 25.4177 573.853 25.6009 567.51 25.6903C555.192 25.8578 542.852 25.4311 530.548 24.9172C532.645 24.6335 534.742 24.3498 536.839 24.0638C544.371 23.0361 551.882 21.7448 559.453 21.0522C563.482 20.6813 567.524 20.373 571.541 19.8971C573.579 19.6581 575.599 19.381 577.614 18.9744C579.777 18.5365 581.91 17.9378 584.036 17.339C584.719 17.2653 585.234 16.9212 585.587 16.3158C586.213 15.4489 586.5 14.2872 586.608 13.1746C588.761 12.511 589.194 9.31622 589.194 7.39709C589.207 6.20853 589.022 5.05348 588.635 3.93417C588.261 2.94892 587.55 1.55034 586.297 1.53694C579.758 1.46321 573.23 1.01862 566.691 0.938188C565.93 0.931485 565.163 0.927017 564.397 0.927017C558.77 0.927017 553.155 1.17501 547.535 1.47885C535.016 2.1558 522.495 2.96679 509.989 3.87832C504.175 4.29834 498.369 4.79655 492.551 5.15178C485.435 5.58297 478.335 5.91139 471.212 6.19066C459.296 6.65536 447.361 6.83632 435.438 7.05527C421.763 7.3122 408.106 7.67189 394.447 8.31756C381.795 8.91631 369.155 9.7139 356.512 10.4757C343.816 11.2354 331.122 11.9905 318.427 12.7613C305.415 13.5499 292.394 14.1353 279.373 14.7206C272.783 15.02 266.185 15.1071 259.593 15.297C253.354 15.4758 247.107 15.5227 240.864 15.6143C228.574 15.7952 216.287 15.9069 203.998 16.0343C179.21 16.2867 154.428 16.6934 129.642 17.1067C116.025 17.3346 102.412 17.587 88.7943 17.8439C81.8486 17.9758 74.9007 18.2506 67.9594 18.4539C62.0236 18.6259 56.0901 19.0303 50.1565 19.3364C43.8406 19.6625 37.5247 20.0222 31.2089 20.3886C27.4542 20.6076 23.6952 20.8332 19.9362 21.0522C18.3053 21.1505 16.67 21.2443 15.0346 21.3426C13.5474 21.4297 12.0579 21.5415 10.5729 21.6554C9.51432 21.7358 8.37346 21.89 7.42818 22.0687C6.26798 22.2631 5.11442 22.7859 4.00063 23.1657C3.33545 23.7019 2.87138 24.381 2.61503 25.2099C2.24156 26.3002 2.05814 27.4217 2.0714 28.5768C2.05814 29.7341 2.24156 30.8556 2.61503 31.9459C2.81834 32.3569 3.02165 32.768 3.22496 33.1769C3.60506 33.8292 4.15974 34.1979 4.88901 34.2783C6.1818 34.6492 7.4547 35.0156 8.78063 35.2367C9.50548 35.1563 10.0602 34.7922 10.4381 34.142C10.5817 33.9432 10.7077 33.7309 10.8182 33.5075C11.5121 33.4896 12.2082 33.4919 12.9043 33.4919C13.5695 33.4919 14.2369 33.4874 14.9043 33.4718C16.407 33.4383 17.9053 33.4003 19.4058 33.3645C23.2709 33.2729 27.136 33.1791 31.0011 33.0875C35.1889 32.987 39.3766 32.911 43.5622 32.8373C43.129 32.8753 42.6981 32.9132 42.265 32.9467C32.3735 33.7242 22.4886 34.5062 12.606 35.3931C11.0038 35.5741 9.79056 36.3784 8.95301 37.806C7.71768 39.5129 7.04366 41.7135 6.70996 43.9231C4.97299 43.9075 3.2338 43.8873 1.49682 43.8739C0.28359 43.865 0.0449219 46.0031 0.0449219 46.8252C0.0449219 47.6608 0.28359 49.7564 1.50345 49.7698C3.1675 49.7855 4.83376 49.8145 6.49781 49.8369C6.64146 51.6934 7.01272 53.5098 7.62265 55.2882C8.06905 56.1908 8.51545 57.0934 8.96184 57.9937C9.79719 59.4213 15.9944 65.1786 17.5966 65.3596C26.9466 64.5218 36.3011 63.789 45.66 63.0651Z"></path>
                  </svg>
              </div>
            </div>
            <p className="fs-lg mx-auto" style={{ "maxWidth": "640px" }}>
              UniSkills bridges the gap between talented students and prospective
              employers by making it easier for them to connect, collaborate, and
              deliver business projects. At UniSkills, no job is too big or too
              small!
            </p>
            <Link className="btn btn-lg btn-primary me-1 mt-4" href={`/${config.ABOUT}`}>Learn More</Link>
            <Link className="btn btn-lg btn-primary ms-1 mt-4" href={`/${config.LOGIN}`}>Get Started</Link>
          </div>


          <div className="unskills-video" data-aos="fade-up" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
              <iframe title="vimeo-player" src="https://player.vimeo.com/video/708322704?h=5314f3a3a7" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
          </div>


        </section>







        <section className="container py-5 mt-2 mt-sm-3 mt-md-4 d-xs-flex-row-reverse d-xs-flex-row-reverse d-sm-flex-row-reverse" 
          style={{ "overflow": "hidden" }}>
          <h2 className="h1 text-center pt-lg-3"> 
            What`s New ? In 
            <span className="text-primary"> Uniskills v3</span>  
            <span className="badge bg-faded-success text-danger mb-3 p-2 fs-sm"> </span>
          </h2>
          <p className="pb-3 pb-md-4 mb-0 mb-sm-2 mb-lg-3 text-center">Transformative Features for Students and Businesses Alike</p>
          <div className="row align-items-lg-center">
            <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
              <div className="ps-lg-4 ps-xl-0">
                <div className="binded-content">
                    <div className="binded-item active" id="finance-img">
                      <Image className="rounded-5" src="/assets/img/landing/a-hand-holding-a-phone-in-a-sunny-room-typing-a-me-upscaled.png" width={525} height={100} alt="Image" />
                    </div>
                    <div className="binded-item" id="tech-img">
                      <Image className="rounded-5" src="/assets/img/landing/ai-technology-microchip-background-digital-transformation-concept.jpg" width={525} height={100} alt="Image" />
                    </div>
                    <div className="binded-item" id="medicine-img">
                      <Image className="rounded-5" src="/assets/img/landing/_apowerfulsea.png"  width={525} height={100} alt="Image" />
                    </div>
                    <div className="binded-item" id="ecommerce-img">
                      <Image className="rounded-5" src="/assets/img/landing/14979112_SL_052021_43150_03.jpg" width={525} height={100} alt="Image" />
                    </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 pb-2 pb-lg-0 mb-4 mb-md-0" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md" >
              <div className="accordion accordion-alt" id="industries">
                <div className="accordion-item mb-2 mb-lg-2 mb-xl-1">
                  <h3 className="accordion-header text-lg text-md text-sm">
                  <button className="accordion-button fs-4 text-lg text-md text-sm " type="button" data-bs-toggle="collapse" data-binded-content="#finance-img" data-bs-target="#finance" aria-expanded="true" aria-controls="finance"> Next-Level Chat Performance </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="finance" data-bs-parent="#industries">
                    <div className="accordion-body">
                      UniSkills v3 is proud to unveil its next-level chat experience, featuring an enhanced UI and unprecedented speed. Our 
                      commitment to performance means students and businesses can enjoy a fluid and responsive communication platform. Embrace the 
                      future of collaboration with UniSkills v3, where chat performance knows no bounds
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2 mb-lg-2 mb-xl-1">
                  <h3 className="accordion-header text-lg text-md text-sm">
                    <button className="accordion-button fs-4 text-lg text-md text-sm  collapsed" type="button" data-bs-toggle="collapse" 
                      data-binded-content="#tech-img" data-bs-target="#tech" aria-expanded="false" aria-controls="tech"> 
                      Your Personalized Career Concierge 
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="tech" data-bs-parent="#industries">
                    <div className="accordion-body">
                      UniSkills v3 introduces your personalized career concierge, leveraging AI assistance for bio and job postings. Tailor your 
                      professional narrative with ease and let our intelligent system enhance your job listings for maximum impact. Navigate your 
                      career journey with precision, powered by UniSkills v3`s cutting-edge AI guidance.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2 mb-lg-2 mb-xl-1">
                  <h3 className="accordion-header text-lg text-md text-sm">
                    <button className="accordion-button fs-4 text-lg text-md text-sm  collapsed" type="button" data-bs-toggle="collapse" 
                      data-binded-content="#medicine-img" data-bs-target="#medicine" aria-expanded="false" aria-controls="medicine">
                      Navigate Opportunities Seamlessly 
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="medicine" data-bs-parent="#industries">
                    <div className="accordion-body"> 
                      Discover a new era of efficiency with UniSkills advanced filters, designed to simplify your search for business collaborations 
                      and job opportunities. Tailor your preferences effortlessly, whether you`re seeking the perfect project or the ideal candidate. 
                      UniSkills ensures that finding the right match is not just easy but tailored precisely to your unique requirements. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2 mb-lg-2 mb-xl-1">
                  <h3 className="accordion-header text-lg text-md text-sm">
                    <button className="accordion-button fs-4 text-lg text-md text-sm  collapsed" type="button" data-bs-toggle="collapse" 
                      data-binded-content="#ecommerce-img" data-bs-target="#ecommerce" aria-expanded="false" aria-controls="ecommerce">
                        Your Ideas, Our Evolution
                    </button>
                  </h3>
                  <div className="accordion-collapse collapse" id="ecommerce" data-bs-parent="#industries">
                    <div className="accordion-body"> 
                      UniSkills is committed to constant improvement, and we value your insights. Introducing our update suggestion feature, where 
                      your ideas have the potential to drive meaningful evolution. Whether it`s refining existing features or proposing new ones, 
                      your contributions play a crucial role in ensuring UniSkills remains at the forefront of innovation. Let`s build a better 
                      future together! 
                    </div>
                  </div>
                </div>
              </div>
              <Link className="btn mt-3 btn-primary col-12" href={config.FEATURES}> View more Updates</Link>
            </div>
          </div>
        </section>
























        <section className="overflow-hidden py-5 mt-md-3 mt-lg-2 mt-xl-4 mt-xxl-5">
          <div className="container pt-2 pt-sm-4 pt-lg-5">
            <h2 className="h1 text-center pb-3 mb-3 mb-lg-4">How does <span className="text-primary">Uniskills</span> work? </h2>
              <ul className="nav nav-tabs text-center ms-auto me-auto justify-content-center" role="tablist">
                <li className="nav-item">
                  <Link href="#student" className="nav-link active" data-bs-toggle="tab" role="tab"> Student </Link>
                </li>
                <li className="nav-item">
                  <Link href="#business" className="nav-link" data-bs-toggle="tab" role="tab"> Business </Link>
                </li>
              </ul>

              <div className="tab-content">

                <div className="tab-pane fade show active" id="student" role="tabpanel">
                  <div className="row align-items-center mb-3 position-relative pb-2 pb-lg-0 mb-1 mb-sm-1 mb-md-2 mb-lg-0">
                    <div className="col-md-6  col-xl-5 offset-lg-1 order-md-2 pb-1 pb-md-0 mb-1 mb-md-0" data-aos="fade-left" data-aos-duration="500" 
                      data-aos-offset="250" data-disable-parallax-down="md">
                      <Image className="d-dark-mode-none" src="/assets/img/landing/saas-2/steps/Mobile-login-bro.png" width={525} height={100} alt="Image" />
                      <Image className="d-none d-dark-mode-block" src="/assets/img/landing/saas-2/steps/Mobile-login-bro.png" width={525} height={100} alt="Image" />
                    </div>
                    <div className="col-md-6 col-lg-5  bg-secondary pt-3 pb-3 pe-3 ps-3 rounded col-xl-4 offset-xl-1 order-md-1" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <div className="pe-md-4 pe-lg-0">
                        <span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 01</span>
                        <h3 className="h2 mb-3 mb-lg-4">Sign Up & Begin</h3>
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex pt-1 mt-2">
                            <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Pick Your Role: Student/Business
                          </li>
                          <li className="d-flex pt-1 mt-2">
                            <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Provide Info: Name, Email
                          </li>
                          <li className="d-flex pt-1 mt-2">
                            <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Confirm Email: Click Link
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-none d-lg-flex justify-content-center" data-aos="fade-in" data-aos-duration="500" data-aos-offset="250">
                    <svg className="d-block text-primary" width="239" height="165" viewBox="0 0 339 365" fill="none" xmlns="http://www.w3.org/2000/svg" 
                      style={{ "marginLeft": "-150px", "marginTop": "-140px", "marginBottom": "-108px" }}>
                      <path d="M324 291.371C120.111 291.37 240.756 58.7225 1.00032 73.2606" stroke="url(#arrow1)" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6"></path>
                      <path d="M337.375 290.62C338.074 290.998 338.074 292.001 337.375 292.379L328.476 297.196C327.81 297.557 327 297.074 327 296.317L327 286.683C327 285.925 327.81 285.443 328.476 285.803L337.375 290.62Z" fill="currentColor"></path>
                      <defs>
                        <linearGradient id="arrow1" x1="324" y1="291.5" x2="-2.99974" y2="72.4997" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="currentColor"></stop>
                          <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="row align-items-center mb-3 position-relative pb-1 pb-lg-0 mb-1 mb-sm-2 mb-md-2 mb-lg-0">
                    <div className="col-md-6 col-xl-5 offset-xl-1 pb-1 pb-md-0 mb-2 mb-md-0" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <Image className="d-dark-mode-none" src="/assets/img/landing/saas-2/steps/Creativity-pana.png" width={373} height={100} alt="Image" />
                      <Image className="d-none d-dark-mode-block" src="/assets/img/landing/saas-2/steps/Creativity-pana.png" width={373} height={100} alt="Image" />
                    </div>
                    <div className="col-md-6 col-lg-5  bg-secondary pt-3 pb-3 pe-3 ps-3 rounded col-xl-4 offset-lg-1" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <div className="ps-md-4 ps-lg-0">
                        <span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 02</span>
                        <h3 className="h2 mb-3 mb-lg-4"> Craft your Profile </h3>
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Showcase Skills & Interests
                          </li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Attach CV/Portfolio
                          </li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Upload Professional Photo
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-none d-lg-flex justify-content-center" data-aos="fade-in" data-aos-duration="500" data-aos-offset="250">
                    <svg className="d-block text-primary" width="200" height="125" viewBox="0 0 263 275" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    style={{ "marginTop": "-60px", "marginLeft": "-120px", "marginBottom": "-80px" }}>
                      <path d="M8.13678 249.647C7.47108 250.081 6.59001 249.602 6.59106 248.808L6.60444 238.689C6.60544 237.931 7.4158 237.45 8.08162 237.811L16.5478 242.408C17.2136 242.77 17.2512 243.712 16.6163 244.125L8.13678 249.647Z" fill="currentColor"></path>
                      <path d="M261.961 37.8891C216.908 65.6243 128.226 135.486 133.916 193.05C141.029 265.005 265.134 173.468 173.666 148.634C89.2542 125.715 30.9125 210.547 13.9796 236.702" stroke="url(#arrow2)" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6"></path>
                      <defs>
                        <linearGradient id="arrow2" x1="13.9797" y1="234.5" x2="276.704" y2="60.1939" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="currentColor"></stop>
                          <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="row align-items-center mb-3 position-relative">
                    <div className="col-md-6 col-xl-5 offset-lg-1 order-md-2 d-md-flex justify-content-end pb-2 pb-md-0 mb-4 mb-md-0" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <Image className="d-dark-mode-none" src="/assets/img/landing/saas-2/steps/Business-support-amico.png" width={373} height={100} alt="Image" />
                      <Image className="d-none d-dark-mode-block" src="/assets/img/landing/saas-2/steps/Business-support-amico.png" width={373} height={100} alt="Image" />
                    </div>

                    <div className="col-md-6 col-lg-5 col-xl-4 bg-secondary pt-3 pb-3 pe-3 ps-3 rounded offset-xl-1 order-md-1" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <div className="pe-md-4 pe-lg-0">
                        <span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 03</span>
                        <h3 className="h2 mb-3 mb-lg-4"> Explore Opportunities </h3>
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Browse Jobs/Profiles
                          </li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Apply for Post Impactful Jobs
                          </li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Connect, Collaborate, Succeed
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>




                
                <div className="tab-pane fade" id="business" role="tabpanel">
                  <div className="row align-items-center mb-3 position-relative pb-2 pb-lg-0 mb-1 mb-sm-2 mb-md-2 mb-lg-0">
                    <div className="col-md-6 col-xl-5 offset-lg-1 order-md-2 pb-1 pb-md-0 mb-2 mb-md-0" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <Image className="d-dark-mode-none" src="/assets/img/landing/saas-2/steps/Login-pana.png" width={525} height={100} alt="Image" />
                      <Image className="d-none d-dark-mode-block" src="/assets/img/landing/saas-2/steps/Login-pana.png" width={525} height={100} alt="Image" />
                    </div>
                    <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1  bg-secondary pt-3 pb-3 pe-3 ps-3 rounded" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <div className="pe-md-4 pe-lg-0">
                        <span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 01</span>
                        <h3 className="h2 mb-3 mb-lg-4">Sign Up & Register Your Business</h3>
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Publish a Unique Business Name
                          </li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Provide Info: Name, Email, etc
                          </li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Confirm Email: Click Link
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-none d-lg-flex justify-content-center" data-aos="fade-in" data-aos-duration="500" data-aos-offset="250">
                    <svg className="d-block text-primary" width="139" height="125" viewBox="0 0 339 365" fill="none" xmlns="http://www.w3.org/2000/svg" 
                    style={{ "marginLeft": "-150px", "marginTop": "-140px", "marginBottom": "-108px" }}>
                      <path d="M324 291.371C120.111 291.37 240.756 58.7225 1.00032 73.2606" stroke="url(#arrow1)" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6"></path>
                      <path d="M337.375 290.62C338.074 290.998 338.074 292.001 337.375 292.379L328.476 297.196C327.81 297.557 327 297.074 327 296.317L327 286.683C327 285.925 327.81 285.443 328.476 285.803L337.375 290.62Z" fill="currentColor"></path>
                      <defs>
                        <linearGradient id="arrow1" x1="324" y1="291.5" x2="-2.99974" y2="72.4997" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stop-color="currentColor"></stop>
                          <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                   
                  <div className="row align-items-center mb-3 position-relative pb-2 pb-lg-0 mb-1 mb-sm-1 mb-md-2 mb-lg-0">
                    <div className="col-md-6 col-xl-5 offset-xl-1 pb-1 pb-md-0 mb-2 mb-md-0" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <Image className="d-dark-mode-none" src="/assets/img/landing/saas-2/steps/Online--page-rafiki.png" width={373} height={100} alt="Image" />
                      <Image className="d-none d-dark-mode-block" src="/assets/img/landing/saas-2/steps/Online--page-rafiki.png" width={373} height={100} alt="Image" />
                    </div>

                    <div className="col-md-6 col-lg-5 col-xl-4 offset-lg-1  bg-secondary pt-3 pb-3 pe-3 ps-3 rounded" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <div className="ps-md-4 ps-lg-0">
                        <span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 02</span>
                        <h3 className="h2 mb-3 mb-lg-4"> Craft your Profile </h3>
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex pt-1 mt-2"><i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Attach Credentials</li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Upload Business Banner and others
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="d-lg-flex justify-content-center" data-aos="fade-in" data-aos-duration="500" data-aos-offset="250">
                    <svg className="d-block text-primary" width="63" height="75" viewBox="0 0 263 275" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ "marginTop": "-60px", "marginLeft": "-120px", "marginBottom": "-80px" }}>
                      <path d="M8.13678 249.647C7.47108 250.081 6.59001 249.602 6.59106 248.808L6.60444 238.689C6.60544 237.931 7.4158 237.45 8.08162 237.811L16.5478 242.408C17.2136 242.77 17.2512 243.712 16.6163 244.125L8.13678 249.647Z" fill="currentColor"></path>
                      <path d="M261.961 37.8891C216.908 65.6243 128.226 135.486 133.916 193.05C141.029 265.005 265.134 173.468 173.666 148.634C89.2542 125.715 30.9125 210.547 13.9796 236.702" stroke="url(#arrow2)" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6"></path>
                      <defs>
                        <linearGradient id="arrow2" x1="13.9797" y1="234.5" x2="276.704" y2="60.1939" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="currentColor"></stop>
                            <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  
                  <div className="row align-items-center mb-3 position-relative">
                    <div className="col-md-6 col-xl-5 offset-lg-1 order-md-2 d-md-flex justify-content-end pb-2 pb-md-0 mb-4 mb-md-0" data-aos="fade-left" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <Image className="d-dark-mode-none" src="/assets/img/landing/saas-2/steps/New--employee-rafiki.png" width={373} height={100} alt="Image" />
                      <Image className="d-none d-dark-mode-block" src="/assets/img/landing/saas-2/steps/New--employee-rafiki.png" width={373} height={100} alt="Image" />
                    </div>
                    <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1  bg-secondary pt-3 pb-3 pe-3 ps-3 rounded" data-aos="fade-right" data-aos-duration="500" data-aos-offset="250" data-disable-parallax-down="md">
                      <div className="pe-md-4 pe-lg-0">
                        <span className="badge fs-sm bg-faded-primary text-primary mb-3 mb-lg-4">Step 03</span>
                        <h3 className="h2 mb-3 mb-lg-4"> Explore Talents </h3>
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Find Students
                          </li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Post Impactful Jobs and Neccesary Skills Required
                          </li>
                          <li className="d-flex pt-1 mt-2">
                              <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Connect, Collaborate, Succeed
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>


        </section>


























        <section className="d-flex w-100 position-relative bg-transparent overflow-hidden">

          <div className="student-business-slider position-relative pt-4 bg-transparent flex-xl-shrink-0 zindex-5 start-50 translate-middle-x my-n1" style={{ "maxWidth": "950px" }}>
            <div className="mx-md-n5 mx-xl-0 bg-transparent">
              <div className="mx-n4 mx-sm-n5 mx-xl-0">
                <div className="mx-n5 mx-xl-0">

                {(mode !== undefined && mode === 'dark') ? (
                  <img-comparison-slider className="mx-n5 rounded-1 mx-xl-0 d-dark-mode-block lightmode-dashboard-slider">
                    <Image className="" slot="first" src="/assets/img/landing/saas-2/STUDENT DASHBOARD DARK MODE.JPG" height={1000} width={2000} alt="Dark Mode" />
                    <Image className="" slot="second" src="/assets/img/landing/saas-2/BUSINESS DASHBOARD DARK MODE.JPG" height={1000} width={2000} alt="Dark Mode" />
                    <div slot="handle" style={{ "width": "42px" }}>
                      <svg className="text-primary rounded-circle" width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                        <g><circle fill="currentColor" cx="21" cy="21" r="21"></circle></g>
                        <path fill="white" d="M25.5019 19.7494H15.9147V15.9146L11.1211 20.7081L15.9147 25.5017V21.6669H25.5019V25.5017L30.2955 20.7081L25.5019 15.9146V19.7494Z"></path>
                      </svg>
                    </div>
                  </img-comparison-slider>
                ) : (
                  <img-comparison-slider className="mx-n5 rounded-1 mx-xl-0 d-dark-mode-none darkmode-dashboard-slider">
                    <Image slot="first" src="/assets/img/landing/saas-2/STUDENT DASHBOARD LIGHT MODE.JPG" width={1000} height={2000} alt="Light Mode" />
                    <Image slot="second" src="/assets/img/landing/saas-2/BUSINESS DASHBOARD LIGHT MODE.JPG"  width={1000} height={2000}  alt="Light Mode" />
                    <div slot="handle" style={{ "width": "42px" }}>
                      <svg className="text-primary rounded-circle" width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                         <g><circle fill="currentColor" cx="21" cy="21" r="21"></circle></g>
                        <path fill="white" d="M25.5019 19.7494H15.9147V15.9146L11.1211 20.7081L15.9147 25.5017V21.6669H25.5019V25.5017L30.2955 20.7081L25.5019 15.9146V19.7494Z"></path>
                      </svg>
                    </div>
                  </img-comparison-slider>
                )}



                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute top-0 start-0 w-50  h-100 d-none d-dark-mode-block" style={{ "backgroundColor": "#171a1e" }}></div>
          <div className="position-absolute top-0 end-0 w-50 h-100 d-dark-mode-none" style={{ "backgroundColor": "#f6f9fc" }}></div>
          <div className="position-absolute top-0 end-0 w-50 h-100 d-dark-mode-none" style={{ "backgroundColor": "#f6f9fc" }}></div>
          <div className="position-absolute top-0 end-0 w-50 h-100 d-none d-dark-mode-block" style={{ "backgroundColor": "#171a1e" }}></div>

        </section>




















        <section className="row align-items-center mx-auto w-100 px-3 py-4 overflow-hidden" style={{ "maxWidth": "1180px" }}>
            
          <div className="row align-items-center mx-auto py-4 py-lg-5 my-sm-2 my-md-4 my-lg-0 my-xl-2 my-xxl-4" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
            <div className="col-md-6 pt-xl-2 pb-3 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0">
              <Image className="d-dark-mode-none row justify-content-center align-content-center ms-lg-4 ms-md-3" src="/assets/img/landing/saas-1/features/03-light.png" width={436} height={100} alt="Image" />
              <Image className="d-none d-dark-mode-block" src="/assets/img/landing/saas-1/features/03-dark.png" width={436} height={100} alt="Image" />
            </div>
                
            <div className="col-md-6 col-xl-5 offset-xl-1 pt-xl-2" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
              <div className="pe-md-3 pe-xl-2">
                <span className="badge bg-faded-primary text-primary fs-sm mb-3 mb-lg-4">For Business</span>
                <h3 className="h2 mb-lg-4"> A platform designed to meet your needs </h3>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pt-1 mt-2">
                      <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i> Packages available to suit your budget
                  </li>
                  <li className="d-flex pt-1 mt-2">
                      <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>High quality and reliable service
                  </li>
                  <li className="d-flex pt-1 mt-2">
                      <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Experienced and knowledgeable team
                  </li>
                  <li className="d-flex pt-1 mt-2">
                      <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Simple and secure payments
                  </li>
                </ul>
              </div>
            </div>
          </div>
           
          <div className="row align-items-center justify-content-center ms-lg-5 mx-auto py-4 py-lg-5 my-sm-2 my-md-4 my-lg-0 my-xl-2 my-xxl-4" data-aos="fade-up" data-aos-duration="600" data-aos-offset="300" data-disable-parallax-down="md">
            <div className="col-md-6 offset-xl-1 order-md-2 pb-3 pb-md-0 mb-3 mb-sm-4 mb-md-0 ms-aut"> 
              <Image className="d-dark-mode-none" src="/assets/img/landing/saas-1/features/04-light.png" width="336" height="100" alt="Image" />
              <Image className="d-none d-dark-mode-block" src="/assets/img/landing/saas-1/features/04-dark.png" width="336" height="100" alt="Image" />
            </div>
            <div className="col-md-6 col-xl-5 order-md-1" data-aos="fade-up" data-aos-duration="850" data-aos-offset="200" data-disable-parallax-down="md">
              <div className="pe-md-3 pe-xl-2">
                <span className="badge bg-faded-primary text-primary fs-sm mb-3 mb-lg-4">For Students</span>
                <h3 className="h2 mb-lg-4"> Designed to meet the needs of students. </h3>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Use your skills to make a difference
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Become a professional while learning
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Engage with companies you are interested in
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Decide what suits you best (freelance work or employment)
                  </li>
                  <li className="d-flex pt-1 mt-2">
                    <i className="ai-check-alt text-primary fs-4 mt-n1 me-2"></i>Your degree is not all that makes you who you are
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </section>


































        <section className="container mt-5">
          <div className="bg-dark rounded-5 position-relative overflow-hidden py-5 px-4 px-sm-5">
            <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style={{ "backgroundColor": "rgba(255, 255, 255, 0.02)" }}></div>
            <svg className="position-absolute start-0 bottom-0 zindex-2" width="713" height="410" viewBox="0 0 713 410" fill="none" stroke="white" stroke-opacity="0.12" xmlns="http://www.w3.org/2000/svg">
              <path d="M682.907 484.533C695.503 444.57 705.228 400.872 691.238 361.386C672.894 309.65 617.745 278.967 563.532 270.375C509.32 261.768 454.065 270.505 399.207 272.603C344.348 274.702 285.906 268.882 241.992 235.917C181.111 190.21 163.777 104.969 109.285 51.7863C63.8512 7.45308 -6.63234 -9.27787 -67.1491 9.9424"></path>
              <path d="M641.482 482.967C653.4 445.169 662.6 403.82 649.367 366.472C632.013 317.53 579.846 288.506 528.564 280.379C477.267 272.236 425.011 280.507 373.121 282.492C321.231 284.477 265.935 278.97 224.403 247.786C166.796 204.54 150.415 123.91 98.8593 73.6098C55.8807 31.6733 -10.8023 15.8433 -68.0415 34.0275"></path>
              <path d="M600.052 481.4C611.277 445.751 619.968 406.784 607.477 371.559C591.113 325.409 541.928 298.044 493.561 290.383C445.194 282.705 395.92 290.508 346.984 292.363C298.047 294.234 245.913 289.041 206.762 259.639C152.445 218.868 137.002 142.834 88.3989 95.4004C47.876 55.8447 -14.9912 40.9323 -68.9688 58.0798"></path>
              <path d="M558.622 479.833C569.168 446.349 577.336 409.73 565.601 376.644C550.227 333.287 504.025 307.582 458.589 300.385C413.153 293.173 366.862 300.493 320.893 302.251C274.925 304.009 225.953 299.128 189.168 271.507C138.142 233.198 123.636 161.774 77.9686 117.223C39.9006 80.0639 -19.166 66.0526 -69.8661 82.164"></path>
              <path d="M517.195 478.267C527.064 446.932 534.691 412.678 523.729 381.732C509.361 341.167 466.125 317.121 423.62 310.39C381.115 303.643 337.806 310.496 294.806 312.141C251.807 313.785 205.981 309.216 171.561 283.377C123.825 247.544 110.24 180.715 67.5263 139.03C31.9133 104.268 -23.3529 91.1578 -70.7753 106.233"></path>
            </svg>
            <svg className="position-absolute top-0 end-0 zindex-2" width="317" height="367" viewBox="0 0 317 367" fill="none" stroke="white" stroke-opacity="0.12" xmlns="http://www.w3.org/2000/svg">
              <path d="M766.907 366.533C779.503 326.57 789.228 282.872 775.238 243.386C756.894 191.65 701.745 160.967 647.532 152.375C593.32 143.768 538.065 152.505 483.207 154.603C428.348 156.702 369.906 150.882 325.992 117.917C265.111 72.2101 247.777 -13.031 193.285 -66.2137C147.851 -110.547 77.3677 -127.278 16.8509 -108.058"></path>
              <path d="M725.482 364.967C737.4 327.169 746.6 285.82 733.367 248.472C716.013 199.53 663.846 170.506 612.564 162.379C561.267 154.236 509.011 162.507 457.121 164.492C405.231 166.477 349.935 160.97 308.403 129.786C250.796 86.5396 234.415 5.91023 182.859 -44.3902C139.881 -86.3267 73.1977 -102.157 15.9585 -83.9725"></path>
              <path d="M684.052 363.4C695.277 327.751 703.968 288.784 691.477 253.559C675.113 207.409 625.928 180.044 577.561 172.383C529.194 164.705 479.92 172.508 430.984 174.363C382.047 176.234 329.913 171.041 290.762 141.639C236.445 100.868 221.002 24.8341 172.399 -22.5996C131.876 -62.1553 69.0088 -77.0677 15.0312 -59.9202"></path>
              <path d="M642.622 361.833C653.168 328.349 661.336 291.73 649.601 258.644C634.227 215.287 588.025 189.582 542.589 182.385C497.153 175.173 450.862 182.493 404.893 184.251C358.925 186.009 309.953 181.128 273.168 153.507C222.142 115.198 207.636 43.7743 161.969 -0.777178C123.901 -37.9361 64.834 -51.9474 14.1339 -35.836"></path>
              <path d="M601.195 360.267C611.064 328.932 618.691 294.678 607.729 263.732C593.361 223.167 550.125 199.121 507.62 192.39C465.115 185.643 421.806 192.496 378.806 194.141C335.807 195.785 289.981 191.216 255.561 165.377C207.825 129.544 194.24 62.7152 151.526 21.0304C115.913 -13.7317 60.6471 -26.8422 13.2247 -11.7668"></path>
            </svg>
            <div className="dark-mode position-relative zindex-3 text-center px-3 px-sm-0 pb-2 py-sm-3 py-md-4 py-lg-5">
              <h2 className="display-3 pt-xl-2">Get Started with <span className="text-primary">Uniskills</span></h2>
              <p className="fs-lg pb-4 pb-lg-5 mb-2 mb-sm-3 mb-lg-0 mb-xl-2">
                  Using basic data skills you can analyse and improve your business
                  indicators.
              </p>
              <div className="position-relative text-center zindex-2 ms-auto me-auto" data-aos="fade-up" data-aos-duration="500" data-aos-offset="280" data-disable-parallax-down="lg">
                <div className="card-body pb-lg-5  ps-lg-5">
                  <h4>Getting work done has never been this easy</h4>
                  <div className="row row-cols-1 ms-auto me-auto row-cols-sm-2">
                    <ul className="col list-unstyled ms-auto me-auto pb-1 pb-sm-0 mb-2 mb-sm-0">
                      <li className="d-flex pb-1 mb-2">
                          <i className="ai-check text-success fs-lg mt-1 me-2"></i>Flexible payment
                      </li>
                      <li className="d-flex pb-1 mb-2">
                          <i className="ai-check text-success fs-lg mt-1 me-2"></i>No agency fee
                      </li>
                      <li className="d-flex pb-1 mb-2">
                          <i className="ai-check text-success fs-lg mt-1 me-2"></i>
                          With our 24/7 & 365 days of customer-support and
                          service, we`re always here to take the pressure off
                          your shoulders.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link className="btn btn-lg btn-primary mb-lg-2 mb-xl-4" href={`/${config.LOGIN}`}>Get Started</Link>
            </div>
          </div>
        </section>






      

    </Layout>

  )

}



export async function getStaticProps(){

  // Get external datas from file system, API, DB etc.
  const data = { name: "IFYCOOL", product_no: "125"};

  // The value of the 'props' key will be passed to the 'Home' component.
  return {
    props: { data }
  }

}



{/* <Hero />

<Services />

<Linkbout />

<WhyHost /> */}