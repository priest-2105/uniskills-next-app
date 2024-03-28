// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function Login() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "Sign In | "+config.APP_NAME };


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









      

    
    <main className="page-wrapper">

        <div className="d-lg-flex position-relative h-100">
            <Link className="text-nav btn text-dark btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mx-3 my-3"
                href={config.HOMEPAGE} data-bs-toggle="tooltip" data-bs-placement="left" title="Back to home"><i
                    className="ai-home"></i></Link>
            <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-4 py-5 my-4">
              <div className="w-100 mt-auto mt-5" style={{ "maxWidth": "526px" }}>
                <h1>Sign in to <span className="text-primary">Uniskills</span></h1>
                <p className="pb-3 mb-3 mb-lg-4">
                    Don&#39;t have an account yet?&nbsp;&nbsp;
                    <Link href={config.STUDENT_REGISTER}>Register as a student!</Link>&nbsp;
                    or&nbsp;
                    <Link href={config.BUSINESS_REGISTER}>Register as a business!</Link>
                </p>

                {/* @if (session()->has('message'))
                    <div className="alert {{ Session::get('alert-class') }}" role="alert">
                        <p>{{ session('message') }}</p>
                    </div>
                @endif
                @if (session('error'))
                    <div className="alert alert-danger" role="alert">
                        {{ session('error') }}
                    </div>
                @endif */}

                <form className="needs-validation" novalidate >
                  <div className="pb-3 mb-3">
                    <div className="position-relative">
                      <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                      <input className="form-control form-control-lg ps-5" type="email" placeholder="Email address" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="position-relative">
                      <i className="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                      <div className="password-toggle">
                        <input className="form-control form-control-lg ps-5" type="password" placeholder="Password" required />
                        <label className="password-toggle-btn" aria-label="Show/hide password">
                          <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center justify-content-between pb-4">
                    <form-check className="my-1">
                      <input className="form-check-input" type="checkbox" id="keep-signedin" />
                      <label className="form-check-label ms-1" for="keep-signedin">Keep me signed in</label>
                    </form-check>
                    <Link className="fs-sm fw-semibold text-decoration-none my-1" href={config.FORGET_PASS}>Forgot password?</Link>
                  </div>

                  {/* <x-atoms.button text="Sign in" className="btn btn-lg btn-primary w-100 mb-4" target="submit"  /> */}
                  <button className="btn btn-lg btn-primary w-100 mb-4 d-flex align-items-center justify-content-center position-relative" type="submit">
                    Sign in 
                    {/* <Image src="assets/loaders/loading-white.svg" alt='' style={{ "width": "20px", "height": "auto" }} /> */}
                  </button>

                  <h2 className="h6 text-center pt-3 pt-lg-4 mb-4">
                      Are you a Student, sign in with your social account
                  </h2>

                  <div className="row row-cols-1 row-cols-sm-2 gy-3">
                    <div className="col">
                      <Link className="btn btn-icon btn-outline-secondary btn-linkedin btn-lg w-100" href={`/${config.LOGIN}`}>
                        <i className="ai-linkedin fs-xl me-2"></i><span className="mt-1">LinkedIn</span>
                      </Link>
                    </div>

                    <div className="col">
                      <Link className="btn btn-icon btn-outline-secondary btn-google btn-lg w-100" href={`/${config.LOGIN}`}>
                        <i className="ai-google fs-xl me-2"></i><span className="mt-1">Google</span>
                      </Link>
                    </div>
                  </div>
                </form>

              </div>
            </div>
            
            <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center" style={{ "backgroundImage": "url('assets/img/account/cover.jpg')" }}></div>

        </div>
    </main>


    </Layout>

  )

}













const SIGN_IN_BUTTON_CONTROLLER = ({loginButtonAnimation}) => {
    /* We test the "loginButtonAnimation" state to use to know when member click on the "sign in" button, so that we can control at this point when to display 
     * the animated version of the "sign in" button. */
    if(loginButtonAnimation === false){
        return ( 
            <button className="btn btn-primary btn-block" type="submit">Sign in</button>
        );
    }else{
        return (
            <button className="btn btn-warning btn-block" type="submit">
                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> Signing in.....
            </button>        
        );
    }
};

