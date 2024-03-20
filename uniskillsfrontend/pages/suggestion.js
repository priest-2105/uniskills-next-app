// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';
import { useEffect, useState } from 'react';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function SUGGESTION() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "Suggestion | "+config.APP_NAME, body_class: "page-wrapper bg-secondary overflow-hidden px-2" };

  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('marketers');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  // const main_suggestion_cover_image = '../public/assets/img/suggestion/Building-blocks-cuate.png';

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
        <div
          className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
          style={{backgroundColor: "rgba(255, 255, 255, 0.02)"}}
        ></div>
        <div
          className="container dark-mode position-relative zindex-2 py-5 mb-4 mb-sm-5"
        >
          <div className="row pb-5 mb-2 mb-sm-0 mb-lg-3">
            <div className="col-lg-10 col-xl-9">
              {/* <!-- Breadcrumb--> */}
              {/* <x-atoms.breadcrumb title="Suggestions" /> */}
              <h1 className="display-6 pb-2 pb-sm-3">
                Let`s Build <span className="text-primary">UniSkills</span> Together
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container position-relative zindex-3 px-3"
        style={{marginTop: "-135px"}}
      >
        <div className="rounded-5 overflow-hidden">
          <div className="jarallax ratio ratio-4x3" data-jarallax data-speed="0.6">
            <div className="jarallax-img main-suggestion-cover-image" style={{backgroundImage:"url('../public/assets/img/suggestion/Building-blocks-cuate.png')"}}></div>
          </div>
        </div>
      </section>


      {/* <!-- Industries--> */}
      <section className=" border-top border-light py-2 py-sm-3 py-md-4 py-lg-5">

      <div className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: "rgba(255,255,255,0.02);"}}></div>
      <div className="dark-mode container position-relative zindex-2 pt-4 pt-md-2 pt-xl-4 pt-xxl-5">
        <div className="row py-md-3 ">
          <div className="col-md-12 col-lg-12 col-xxl-12 mb-sm-4 mb-md-0">
            <h2 className="display-4 mb-4 mb-md-5">Build  <span className="text-primary">UniSkills</span> With Us </h2>
            <div className="d-sm-flex align-items-center">

            <div className="col-lg-12 mb-5 mb-lg-0">
              <p className="pb-1 pb-md-0 mb-4 mb-md-5">We value your input and want to make sure you stay informed about updates and improvements to UniSkills. To enhance your experience, we`ve created a simple and effective way for you to stay in the loop. Feel free to send us your requests or suggestions, and we`ll keep you updated on the latest developments. Your feedback is crucial to the growth of UniSkills, and we appreciate your contribution to making it a platform that truly meets your needs. Let`s work together to empower and enrich the UniSkills community!</p>
              <h3 className="mb-4">Send your Request!</h3>
              <form className="needs-validation row g-4" novalidate>
                <div className="col-lg-10">
                  <label className="form-label fs-base" for="name">Name</label>
                  <input className="form-control form-control-lg" type="text" placeholder="Your name" required id="name"/>
                  <div className="invalid-feedback">Please enter your name!</div>
                </div>
                <div className="col-lg-10">
                  <label className="form-label fs-base" for="email">Email</label>
                  <input className="form-control form-control-lg" type="email" placeholder="Email address" required id="email"/>
                  <div className="invalid-feedback">Please provide a valid email address!</div>
                </div>
                <div className="col-lg-10">
                  <label className="form-label fs-base" for="message">Message</label>
                  <textarea className="form-control form-control-lg" placeholder="Your message" rows="4" required id="message"></textarea>
                  <div className="invalid-feedback">Please write your message!</div>
                </div>
                <div className="col-lg-10">
                  <button className="btn btn-lg btn-dark rounded-pill mt-2" type="submit">Send Request</button>
                </div>
              </form>
            </div>


            </div>
          </div>
        </div>
      </div>

      </section>






      <section className="container mt-n3 mt-sm-n2 pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
        <h2 className="h1 text-center pb-3 pb-lg-4">Other Suggestions</h2>
        {/* <!-- Swiper slider--> */}
        <div className="swiper pb-1 pb-md-2 pb-lg-3 pb-xl-4" data-swiper-options="{
            &quot;spaceBetween&quot;: 24,
            &quot;loop&quot;: true,
            &quot;autoHeight&quot;: true,
            &quot;pagination&quot;: {
                &quot;el&quot;: &quot;.swiper-pagination&quot;,
                &quot;clickable&quot;: true
            },
            &quot;breakpoints&quot;: {
                &quot;576&quot;: { &quot;slidesPerView&quot;: 2 },
                &quot;992&quot;: { &quot;slidesPerView&quot;: 3 }
            }
            }">
          <div className="swiper-wrapper">
            {/* <!-- Item--> */}
            <div className="swiper-slide">
              <div className="card border-0 mb-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3"><Image className="rounded-circle" src="assets/img/avatar/22.jpg" width="60" alt="Jane Cooper"/>
                    <div className="ps-3">
                      <div className="h6 mb-1">Jane Cooper</div>
                      <div className="fs-sm text-muted">Medical Assistant</div>
                    </div>
                  </div>
                  <p className="card-text">Sit risus metus, vel neque eu lectus duis. Vulputate facilisi at feugiat mi aenean nunc enim faucibus arcu. Diam id accumsan sit.</p>
                </div>
              </div>
              <div className="card border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3"><Image className="rounded-circle" src="assets/img/avatar/25.jpg" width="60" alt="Cameron Williamson"/>
                    <div className="ps-3">
                      <div className="h6 mb-1">Cameron Williamson</div>
                      <div className="fs-sm text-muted">Marketing Coordinator</div>
                    </div>
                  </div>
                  <p className="card-text">Nam convallis maecenas leo sapien interdum id. Facilisi dictum lacinia in phasellus. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa lacus lobortis.</p>
                </div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="swiper-slide">
              <div className="card border-0 mb-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3"><Image className="rounded-circle" src="assets/img/avatar/23.jpg" width="60" alt="Wade Warren"/>
                    <div className="ps-3">
                      <div className="h6 mb-1">Wade Warren</div>
                      <div className="fs-sm text-muted">President of Sales</div>
                    </div>
                  </div>
                  <p className="card-text">Vitae tempor morbi tellus pulvinar. Ut iaculis sit tristique in turpis volutpat quam nec. Pretium eu nulla egestas ultrices. Donec in pulvinar ut fermentum a, nunc, aliquam. Integer dui dui ornare sed lacinia.</p>
                </div>
              </div>
              <div className="card border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3"><Image className="rounded-circle" src="assets/img/avatar/26.jpg" width="60" alt="Leslie Alexander"/>
                    <div className="ps-3">
                      <div className="h6 mb-1">Leslie Alexander</div>
                      <div className="fs-sm text-muted">CEO, Divi</div>
                    </div>
                  </div>
                  <p className="card-text">Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.</p>
                </div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="swiper-slide">
              <div className="card border-0 mb-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3"><Image className="rounded-circle" src="assets/img/avatar/24.jpg" width="60" alt="Esther Howard"/>
                    <div className="ps-3">
                      <div className="h6 mb-1">Esther Howard</div>
                      <div className="fs-sm text-muted">CEO, Slack</div>
                    </div>
                  </div>
                  <p className="card-text">Ante turpis leo dictum adipiscing nisl magnis elementum eu. Integer consequat sed ipsum massa egestas integer proin id.</p>
                </div>
              </div>
              <div className="card border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3"><Image className="rounded-circle" src="assets/img/avatar/27.jpg" width="60" alt="Brooklyn Simmons"/>
                    <div className="ps-3">
                      <div className="h6 mb-1">Brooklyn Simmons</div>
                      <div className="fs-sm text-muted">Marketing Coordinator</div>
                    </div>
                  </div>
                  <p className="card-text">In quisque dolor, aliquam faucibus. Gravida diam ornare egestas proin quis odio suspendisse pellentesque. Condimentum risus, rutrum curabitur faucibus mi a turpis morbi. Nulla euismod dolor quis amet sed.</p>
                </div>
              </div>
            </div>
            {/* <!-- Item--> */}
            <div className="swiper-slide">
              <div className="card border-0 mb-4">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3"><Image className="rounded-circle" src="assets/img/avatar/28.jpg" width="60" alt="Fannie Summers"/>
                    <div className="ps-3">
                      <div className="h6 mb-1">Fannie Summers </div>
                      <div className="fs-sm text-muted">VP of Sales</div>
                    </div>
                  </div>
                  <p className="card-text">In et dui amet amet elementum urna, dictum. Eget leo ornare bibendum a fermentum. Rutrum pellentesque ipsum cras purus ac a ullamcorper. Elit ac amet quam tellus euismod ac aliquam pharetra lectus.</p>
                </div>
              </div>
              <div className="card border-0">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3"><Image className="rounded-circle" src="assets/img/avatar/29.jpg" width="60" alt="Robert Fox"/>
                    <div className="ps-3">
                      <div className="h6 mb-1">Robert Fox</div>
                      <div className="fs-sm text-muted">Marketing Coordinator</div>
                    </div>
                  </div>
                  <p className="card-text">At felis non consequat neque in ultrices tortor purus dui. At sed fermentum, egestas amet et donec euismod risus. Nulla mauris.</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Pagination (bullets)--> */}
          <div className="swiper-pagination position-relative bottom-0 mt-2 mt-md-3 mt-lg-4 pt-4"></div>
        </div>
      </section>





      </>




    </Layout>

  )

}

