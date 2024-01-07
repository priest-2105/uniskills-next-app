// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function Contact() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "Contact Us | "+config.APP_NAME, body_class: "page-wrapper" };


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









        <section class="container pt-5 pb-lg-2 pb-xl-4 py-xxl-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href={config.HOMEPAGE}>Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
            </nav>

            <div class="row pb-1 pb-sm-3 pb-lg-4">
                <div class="col-lg-4 pe-xxl-4">
                    <h1 class="display-4">Contact Us</h1>
                    <p class="fs-lg pb-4 mb-0 mb-sm-2">Fill in this form, and we&apos;ll be in touch with you as soon as possible.</p>
                </div>
                <div class="col-lg-8 col-xl-7 offset-xl-1">
                    <form class="row g-4 needs-validation" novalidate >
                        <div class="col-sm-6">
                            <label class="form-label fs-base" for="name">Name</label>
                            <input class="form-control form-control-lg" type="text" placeholder="Your name" required id="name" />
                            <div class="invalid-feedback">Please enter your name!</div>
                        </div>

                        <div class="col-sm-6">
                            <label class="form-label fs-base" for="email">Email</label>
                            <input class="form-control form-control-lg" type="email" placeholder="Email address" required id="email" />
                            <div class="invalid-feedback">Please provide a valid email address!</div>
                        </div>
                        
                        <div class="col-sm-6">
                            <label class="form-label fs-base" for="phone">Phone</label>
                            <input class="form-control form-control-lg" type="text" placeholder="Phone number" id="phone" />
                        </div>

                        <div class="col-sm-6">
                            <label class="form-label fs-base" for="contact">Reason for Contact</label>
                            <select class="form-select form-select-lg" id="contact">
                                <option value="" default>Please Select</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Tips">Tips</option>
                                <option value="Media Inquiry">Media Inquiry</option>
                                <option value="Partnership Inquiry">Partnership Inquiry</option>
                                <option value="Complaints">Complaints</option>
                                <option value="Suggestions/Improvements">Suggestions/Improvements</option>
                            </select>
                        </div>

                        <div class="col-sm-12">
                            <label class="form-label fs-base" for="message">How can we help?</label>
                            <textarea class="form-control form-control-lg" rows="5" placeholder="Enter your message here..." required id="message"></textarea>
                            <div class="invalid-feedback">Please enter your message!</div>
                        </div>

                        <div class="col-sm-12">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input"  type="checkbox" id="agree" required />
                                <label class="form-check-label" for="agree">I agree to the <Link class="nav-link d-inline fs-normal text-decoration-underline p-0" href={config.POLICY_AND_TERMS}>Privacy Policy, Terms &amp; Conditions </Link>
                                </label>
                                <br />
                            </div>
                        </div>

                        <div class="col-sm-12 pt-2">
                            <button  class="btn btn-lg btn-primary" type="submit"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>


    </Layout>

  )

}


