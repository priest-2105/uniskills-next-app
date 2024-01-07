// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';





export default function ForgetPassword() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "Forget Password | "+config.APP_NAME };


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
        
            <div className="d-flex flex-column align-items-center position-relative h-100 px-3 pt-5 mt-4">
                
                <div className="mt-auto" style={{ "maxWidth": "700px" }}>
                    <h1 className="pt-3 pb-2 pb-lg-3">Forgot your password?</h1>
                    <p className="pb-2">
                        Change your password in three easy steps. This helps to keep your new password secure.
                    </p>
                    <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
                        <li className="d-flex mb-2">
                            <span className="text-primary fw-semibold me-2">1.</span>Fill in your email address below.
                        </li>
                        <li className="d-flex mb-2">
                            <span className="text-primary fw-semibold me-2">2.</span>We&apos;ll email you a temporary code.
                        </li>
                        <li className="d-flex mb-2">
                            <span className="text-primary fw-semibold me-2">3.</span>Use the code to change your password on our secure website.
                        </li>
                    </ul>
                    <p className="pb-3 mb-3 mb-lg-4">
                        Want to abort this?&nbsp;&nbsp;<Link href={config.LOGIN}>Sign in here!</Link>
                    </p>

                    <div className="card dark-mode border-0 bg-primary">
                        <form className="card-body">
                            <div className="mb-4">
                                <div className="position-relative">
                                    <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y text-light opacity-80 ms-3"></i>
                                    <input className="form-control form-control-lg ps-5" type="email" placeholder="Email address" required />
                                </div>
                            </div>
                            {/* <x-atoms.button text="Get new password" className="btn btn-light" target="submit" /> */}
                            <button className="btn btn-light d-flex align-items-center justify-content-center position-relative" type="submit">
                            Get new password 
                                {/* <Image src="assets/loaders/loading-white.svg" alt='' style={{ "width": "20px", "height": "auto" }} /> */}
                            </button>
                        </form>
                    </div>
                </div>

            </div>

        </main>


    </Layout>

  )

}













const SIGN_UP_BUTTON_CONTROLLER = ({loginButtonAnimation}) => {
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

