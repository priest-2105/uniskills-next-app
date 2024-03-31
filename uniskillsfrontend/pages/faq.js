// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';
import FIND_STUDENT from './find-students/index.jsx';





export default function FAQ() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "For Students | "+config.APP_NAME };


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
    




        <section class="container pt-5 pb-xxl-3 mt-5">
        {/* <!-- Breadcrumb--> */}
        <nav aria-label="breadcrumb">
          <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">FAQs</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col pb-3 mb-3">
            <h1 class="display-1">FAQs</h1>
            {/* <!-- <p class="pe-5 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae voluptas expedita hic cum ducimus.</p> --> */}
          </div>
          
        </div>
      </section>
      
      {/* <!-- FAQ (Accordion)--> */}
      <section class="bg-secondary py-5">
        <div class="container py-lg-3 py-xl-5">
          <div class="row pt-1 pb-2 py-sm-4">
            <div class="col-md-4 text-center text-md-start">
              <h2 class="h1">General Questions? Check out the FAQ</h2>
              <div class="d-none d-md-flex justify-content-center">
                <svg
                  class="text-warning ms-n4"
                  width="200"
                  height="211"
                  viewBox="0 0 200 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="col-md-8 col-lg-7 offset-lg-1">
              <div class="accordion" id="faq">
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionOne"
                      aria-expanded="true"
                      aria-controls="questionOne"
                    >
                      Is it free?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse show"
                    id="questionOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      Project based opportunities are free, other opportunities cost £50 per post.
                      Posting the first 100 jobs is free for everyone
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionTwo"
                      aria-expanded="false"
                      aria-controls="questionTwo"
                    >
                      How much does it cost?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      UniSkills cost £50 per job listing, job listing can stay live for 30 days. Your first listing is free, so give it a try.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionThree"
                      aria-expanded="false"
                      aria-controls="questionThree"
                    >
                      I am having trouble signing in. Why?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      You may need to have cookies enabled on your browser. Reset the settings on your browser to allow cookies.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionFour"
                      aria-expanded="false"
                      aria-controls="questionFour"
                    >
                      Where do I see my messages?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionFour"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      You can see your messages inbox or access them from your home page.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionFive"
                      aria-expanded="false"
                      aria-controls="questionFive"
                    >
                      Do you have more messages?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionFive"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      Pls, send us your enquiries using the contact form shown on the support page or through our email xxxxxxxx@xxxxxx.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- FAQ (Accordion)--> */}
      <section class="bg-secondary py-5">
        <div class="container py-lg-3 py-xl-5">
          <div class="row pt-1 pb-2 py-sm-4">
            <div class="col-md-4 text-center text-md-start">
              <h2 class="h1">Hiring On Uniskills?</h2>
              <div class="d-none d-md-flex justify-content-center">
                <svg
                  class="text-warning ms-n4"
                  width="200"
                  height="211"
                  viewBox="0 0 200 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="col-md-8 col-lg-7 offset-lg-1">
              <div class="accordion" id="faq">
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionOne"
                      aria-expanded="true"
                      aria-controls="questionOne"
                    >
                      How do I hire?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse show"
                    id="questionOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      By posting a job on our platform. You can post the job by clicking on "Post Job" as seen on the navigation menu when you're signing in.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionTwo"
                      aria-expanded="false"
                      aria-controls="questionTwo"
                    >
                      How do I see my posted jobs?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      All your posted jobs are displayed on your home page.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionThree"
                      aria-expanded="false"
                      aria-controls="questionThree"
                    >
                      How do I manage my jobs?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      All applicants will be shown to you. Award jobs to your favourites. You can also modify the gig or cancel it from the actual job page.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionFour"
                      aria-expanded="false"
                      aria-controls="questionFour"
                    >
                      How do I contact candidates?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionFour"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      You can message skilled students or graduates that've submitted proposals to your job post by clicking on the created proposal. You can also message them through their profiles
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionFive"
                      aria-expanded="false"
                      aria-controls="questionFive"
                    >
                      How long does a job remain open?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionFive"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      Your posted job remains open until it's awarded or cancelled.
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- FAQ (Accordion)--> */}
      <section class="bg-secondary py-5">
        <div class="container py-lg-3 py-xl-5">
          <div class="row pt-1 pb-2 py-sm-4">
            <div class="col-md-4 text-center text-md-start">
              <h2 class="h1">Providing Services</h2>
              <div class="d-none d-md-flex justify-content-center">
                <svg
                  class="text-warning ms-n4"
                  width="200"
                  height="211"
                  viewBox="0 0 200 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="col-md-8 col-lg-7 offset-lg-1">
              <div class="accordion" id="faq">
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionOne"
                      aria-expanded="true"
                      aria-controls="questionOne"
                    >
                      Is signing up free?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse show"
                    id="questionOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      Yes! Signing up on UniSkills is free.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionTwo"
                      aria-expanded="false"
                      aria-controls="questionTwo"
                    >
                      How do I find the right job?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      Jobs matching your profile will be sent to you. Therefore, endeavour to provide the right location and skills.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionThree"
                      aria-expanded="false"
                      aria-controls="questionThree"
                    >
                      How do I edit my profile on the platform?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      Edit profile is found on your account.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionFour"
                      aria-expanded="false"
                      aria-controls="questionFour"
                    >
                      Where do I see the job I created proposal for?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionFour"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      All the jobs you have applied for can be seen on your own home page.
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-light">
                  <h3 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#questionFive"
                      aria-expanded="false"
                      aria-controls="questionFive"
                    >
                      Have more questions?
                    </button>
                  </h3>
                  <div
                    class="accordion-collapse collapse"
                    id="questionFive"
                    aria-labelledby="headingFive"
                    data-bs-parent="#faq"
                  >
                    <div class="accordion-body fs-sm">
                      If you have any other questions,  don't hesitate to contact us by using the form below. We will gladly get back to you within a day.
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA--> */}
      <section class="px-3 py-5">
        <div class="container pt-lg-2 pt-xl-4 pt-xxl-5 pb-1 pb-sm-3">
          <div class="row pt-sm-3 pt-md-4">
            <div class="col-md-6 col-xl-5 offset-xl-1">
              <h2 class="display-3">Start your journey now!</h2>
            </div>
            <div class="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
              {/* <!-- <p class="fs-xl pb-4 mb-2 mb-lg-3">Massa velitienes semper faucibus tristique id nibh elementum, id eu aliquamd diam mi tempus at laciniarty scelerisques augue at morbi. Arcu sit orcirs, risus mattissit laoreet.</p> --> */}
              <div class="d-sm-flex mt-md-5"><a class="btn btn-primary w-100 w-sm-auto mb-3 mb-sm-0 me-sm-3 me-xl-4" href={`${config.FIND_STUDENT}`}>Find Students</a><a class="btn btn-outline-primary w-100 w-sm-auto d-md-none d-lg-inline-flex" href={`${config.FINDOPPORTUNITIES}`}>Explore Jobs</a></div>
            </div>
          </div>
          <div class="d-none d-md-block text-center mt-n5">
            <svg class="text-warning ms-lg-5" width="171" height="97" viewBox="0 0 171 97" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M169.319 54.333C162.404 55.9509 155.712 58.0764 149.09 60.6764L149.07 60.6761C148.967 60.7158 148.863 60.7554 148.76 60.7951C147.3 61.3811 148.325 63.4238 149.672 63.2067C154.548 62.4134 159.994 59.8725 164.87 59.0792C148.278 73.1339 129.684 89.2549 107.779 92.6402C85.6981 96.0539 65.5665 86.7839 56.8768 66.9865C70.9662 55.0671 79.2106 35.6614 79.0299 17.6457C78.9484 10.3157 76.1485 -3.36373 65.7068 1.21851C55.8557 5.53146 52.0466 22.5213 50.5736 31.7739C48.7364 43.2858 49.7593 55.5291 53.8643 66.2014C52.787 67.0812 51.6907 67.8989 50.5755 68.6546C40.6328 75.3851 27.1039 78.8929 16.4487 72.0362C2.91045 63.3259 1.93984 44.9485 1.56902 30.4091C1.54778 29.6265 0.359869 29.6092 0.360624 30.3915C0.322634 44.0809 0.835929 59.065 10.5664 69.6857C18.5722 78.4182 30.4315 79.7753 41.3346 75.9924C46.2437 74.2834 50.7739 71.7557 54.8581 68.6348C59.9738 80.2586 68.9965 89.6956 82.2735 93.7393C113.474 103.223 141.744 83.0494 164.903 63.697L161.901 71.0334C161.267 72.5887 163.76 73.2736 164.393 71.7389C165.986 67.8713 167.569 63.9933 169.152 60.1359C169.288 60.0247 169.695 58.6127 169.821 58.491C170.122 57.1161 169.152 60.1359 169.851 58.4169C170.189 57.6087 170.517 56.79 170.855 55.9818C171.248 54.9994 170.185 54.1192 169.319 54.333ZM54.3624 59.8578C51.4872 49.1623 51.6051 37.5841 54.2025 26.8039C55.5185 21.3369 57.4405 15.8066 60.1572 10.8541C61.2311 8.89354 62.5139 6.77134 64.2307 5.31421C69.4231 0.902277 74.3649 4.80357 75.8002 10.4446C80.5272 28.9489 70.1806 51.6898 55.8431 64.5114C55.2971 63.0109 54.793 61.4698 54.3624 59.8578Z"></path>
            </svg>
          </div>
        </div>
      </section>



















        </div>


    </Layout>

  )

}


