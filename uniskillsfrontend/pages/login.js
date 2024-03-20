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









      
      <div className="modal fade" id="customizer-modal" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Your custom styles</h4>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body py-4">
              <p className="mb-3">
                Grab the generated styles below. Wrap them inside
                <code>&lt;style&gt;</code> tag and put in the
                <code>&lt;head&gt;</code> section of your HTML document.
              </p>
              <p className="mb-4">
                <span className="fw-medium">IMPORTANT:</span> In order for these styles to take effect you have to placed them below:<br />
                <code>&lt;link rel=&quot;stylesheet&quot; media=&quot;screen&quot; href=&quot;assets/css/theme.min.css&quot;&gt;</code>
              </p>
              <div className="bg-secondary overflow-hidden rounded-4">
                <pre className="text-wrap bg-transparent border-0 text-dark p-4" id="custom-generated-styles"></pre>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary w-100 w-sm-auto mb-3 mb-sm-0" type="button" data-bs-dismiss="modal"> Close </button>
              <button className="btn btn-primary w-100 w-sm-auto ms-sm-3" type="button" id="copy-styles-btn">
                <i className="ai-copy me-2 ms-n1"></i>Copy styles
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link className="position-fixed top-50 bg-light text-dark fw-medium border rounded-pill shadow text-decoration-none"
        href="#customizer" data-bs-toggle="offcanvas" style={{ "right": "-1.75rem", "marginTop": "-1rem", "padding": "0.25rem 0.75rem", 
          "transform": "rotate(-90deg)", "fontSize": "calc(var(--ar-body-font-size) * 0.8125)", "letterSpacing": "0.075rem", "zIndex": "1030" }}>
          <i className="ai-settings text-primary fs-base me-1 ms-n1"></i>Customize
      </Link>

      <div className="offcanvas offcanvas-end" id="customizer" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1">
        <div className="offcanvas-header border-bottom">
          <h4 className="offcanvas-title">Customize theme</h4>
          <button className="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
        </div>

        <div className="offcanvas-body">
          <div className="d-flex align-items-center mb-3">
            <i className="ai-paint-roll text-muted fs-4 me-2"></i>
            <h5 className="mb-0">Colors</h5>
          </div>
          <div className="row row-cols-3 g-3 mb-5" id="theme-colors">
            <div className="col">
              <div className="text-dark fs-sm fw-medium mb-2">Primary</div>
              <div className="color-swatch" id="theme-primary" data-color-labels='["theme-primary", "primary", "primary-rgb"]'>
                <label className="ratio ratio-4x3 border rounded-1 cursor-pointer mb-1" for="primary" style={{ "backgroundColor": "#448c74" }} 
                  role="button"></label>
                <input className="form-control form-control-sm" type="text" value="#448c74" />
                <input className="visually-hidden" type="color" id="primary" value="#448c74" />
              </div>
            </div>
            <div className="col">
                <div className="text-dark fs-sm fw-medium mb-2">Warning</div>
                <div className="color-swatch" id="theme-warning" data-color-labels='["theme-warning", "warning", "warning-rgb"]'>
                  <label className="ratio ratio-4x3 border rounded-1 cursor-pointer mb-1" for="warning"
                      style={{ "backgroundColor": "#edcb50" }} role="button"></label>
                  <input className="form-control form-control-sm" type="text" value="#edcb50" />
                  <input className="visually-hidden" type="color" id="warning" value="#edcb50" />
                </div>
            </div>
            <div className="col">
                <div className="text-dark fs-sm fw-medium mb-2">Info</div>
                <div className="color-swatch" id="theme-info" data-color-labels='["theme-info", "info", "info-rgb"]'>
                    <label className="ratio ratio-4x3 border rounded-1 cursor-pointer mb-1" for="info"
                        style={{ "backgroundColor": "#3f7fca" }} role="button"></label>
                    <input className="form-control form-control-sm" type="text" value="#3f7fca" />
                    <input className="visually-hidden" type="color" id="info" value="#3f7fca" />
                </div>
            </div>
            <div className="col">
                <div className="text-dark fs-sm fw-medium pt-1 mb-2">Success</div>
                <div className="color-swatch" id="theme-success"
                    data-color-labels='["theme-success", "success", "success-rgb"]'>
                    <label className="ratio ratio-4x3 border rounded-1 cursor-pointer mb-1" for="success"
                        style={{ "backgroundColor" : "#3fca90" }} role="button"></label>
                    <input className="form-control form-control-sm" type="text" value="#3fca90" />
                    <input className="visually-hidden" type="color" id="success" value="#3fca90" />
                </div>
            </div>
            <div className="col">
                <div className="text-dark fs-sm fw-medium pt-1 mb-2">Danger</div>
                <div className="color-swatch" id="theme-danger"
                    data-color-labels='["theme-danger", "danger", "danger-rgb"]'>
                    <label className="ratio ratio-4x3 border rounded-1 cursor-pointer mb-1" for="danger"
                        style={{ "backgroundColor" : "#ed5050"  }} role="button"></label>
                    <input className="form-control form-control-sm" type="text" value="#ed5050" />
                    <input className="visually-hidden" type="color" id="danger" value="#ed5050" />
                </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
              <i className="ai-align-left text-muted fs-4 me-2"></i>
              <h5 className="mb-0"> Typography <span className="text-muted fs-sm fw-normal">(1rem = 16px)</span> </h5>
          </div>
          <div className="mb-5">
            <div className="mb-3">
              <label className="text-dark fs-sm fw-medium pt-1 mb-2" for="font-url">Google font URL</label>
              <input className="form-control" type="url" value="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" id="font-url" />
            </div>
            <div className="mb-3">
              <label className="text-dark fs-sm fw-medium pt-1 mb-2" for="body-font-family">Font family</label>
              <input className="form-control" type="text" value="'Inter', sans-serif" id="body-font-family" />
            </div>
            <div className="row row-cols-2">
              <div className="col mb-3">
                <label className="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="root-font-size">Root font size, rem</label>
                <select className="form-select" id="root-font-size">
                  <option value=".75rem">.75</option>
                  <option value=".875rem">.875</option>
                  <option value="1rem" selected>1</option>
                  <option value="1.05rem">1.05</option>
                  <option value="1.1rem">1.1</option>
                  <option value="1.15rem">1.15</option>
                  <option value="1.25rem">1.25</option>
                  <option value="1.375rem">1.375</option>
                </select>
              </div>
              <div className="col mb-3">
                <label className="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="body-font-size">Body font size, rem</label>
                <select className="form-select" id="body-font-size">
                  <option value=".75rem">.75</option>
                  <option value=".875rem">.875</option>
                  <option value="1rem" selected>1</option>
                  <option value="1.15rem">1.15</option>
                  <option value="1.25rem">1.25</option>
                  <option value="1.375rem">1.375</option>
                </select>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center mt-n2 mb-3">
            <i className="ai-maximize text-muted fs-5 me-2"></i>
            <h5 className="mb-0">Borders / Rounding</h5>
          </div>
          <div className="mb-3">
            <label className="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-width">Border width, px</label>
            <input className="form-control" type="number" min="0" step="1" value="1" id="border-width" />
          </div>
          <div className="mb-3">
            <label className="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius">Rounded base, rem</label>
            <input className="form-control" type="number" min="0" step=".05" value="1" id="border-radius" />
          </div>

          <div id="theme-border-radiuses">
            <div className="mb-3">
              <label className="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius-sm">
                  Rounded SM<span className="text-muted fw-normal ms-1">
                      = Rounded base multiplied by</span></label>
              <input className="form-control" type="number" min="0" step=".05" value=".75" id="border-radius-sm" />
            </div>
            <div className="mb-3">
              <label className="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius-lg">
                  Rounded LG<span className="text-muted fw-normal ms-1">
                      = Rounded base multiplied by</span></label>
              <input className="form-control" type="number" min="0" step=".05" value="1.125" id="border-radius-lg" />
            </div>
            <div className="mb-3">
              <label className="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius-xl">
                  Rounded XL<span className="text-muted fw-normal ms-1">
                      = Rounded base multiplied by</span></label>
              <input className="form-control" type="number" min="0" step=".05" value="1.5" id="border-radius-xl" />
            </div>
            <div className="mb-3">
              <label className="d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2" for="border-radius-2xl">
                  Rounded 2XL<span className="text-muted fw-normal ms-1">
                      = Rounded base multiplied by</span></label>
              <input className="form-control" type="number" min="0" step=".05" value="2.25" id="border-radius-2xl" />
            </div>
          </div>
        </div>
        <div className="offcanvas-header border-top d-none" id="customizer-btns">
            <button className="btn btn-secondary w-100 me-3" type="button" id="customizer-reset-btn">
                <i className="ai-undo fs-lg me-2 ms-n1"></i>Reset
            </button>
            <button className="btn btn-primary w-100" type="button" data-bs-toggle="modal"
                data-bs-target="#customizer-modal">
                <i className="ai-code-curly fs-lg me-2 ms-n1"></i>Show styles
            </button>
        </div>
    </div>


    
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

