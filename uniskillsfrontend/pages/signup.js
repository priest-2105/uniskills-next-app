// Load NEXT.JS related packages
import Image from 'next/image';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_2.js';

// Bring in the config file
import config from '../config.js';





export default function Login() {

  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.
  const page_initials = { page_title: "Sign Up | "+config.APP_NAME };


  return (
    
    <Layout initials={page_initials}>

      <div className="d-none d-md-block position-absolute w-50 h-100 bg-size-cover" 
        style={{ position: "relative", top: "0", right: "0", maxHeight: "780px" }}>
        <Image src="/img/backgrounds/sign-up.jpg" fill={true} style={{ objectFit: "cover", objectPosition: "center", zIndex: "0"  }} 
        alt={"Find Flatmates on "+config.APP_NAME} />
      </div>

      <section className="container d-flex align-items-center pt-7 pb-9 pb-md-5" style={{ flex: "1 0 auto", marginTop: "1%" }}>
        <div className="w-100 pt-3">
          <div className="row">
            <div className="col-lg-4 col-md-6 offset-lg-1">
              <div className="cs-view show" id="signin-view">
                  <h1 className="h2 text-center">Sign Up</h1>
                  <p className="font-size-ms text-muted mb-4 text-center">Registration takes less than 2 minute.</p>
                  <form className="needs-validation" novalidate>
                      <div className="input-group-overlay form-group">
                        <div className="input-group-prepend-overlay">
                          <span className="input-group-text"><i className="fe-user"></i></span>
                        </div>
                        <input className="form-control prepended-form-control" type="text" placeholder="First Name" required />
                      </div>

                      <div className="input-group-overlay form-group">
                        <div className="input-group-prepend-overlay">
                          <span className="input-group-text"><i className="fe-user"></i></span>
                        </div>
                        <input className="form-control prepended-form-control" type="text" placeholder="Last Name" required />
                      </div>

                      <div className="input-group-overlay form-group">
                        <div className="input-group-prepend-overlay">
                          <span className="input-group-text"><i className="fe-phone"></i></span>
                        </div>
                        <input className="form-control prepended-form-control" type="text" placeholder="Phone Number" required />
                      </div>

                      <div className="input-group-overlay form-group">
                        <div className="input-group-prepend-overlay">
                          <span className="input-group-text"><i className="fe-mail"></i></span>
                        </div>
                        <input className="form-control prepended-form-control" type="email" placeholder="Email or phone number" required />
                      </div>

                      <div className="input-group-overlay cs-password-toggle form-group">
                        <div className="input-group-prepend-overlay">
                          <span className="input-group-text"><i className="fe-lock"></i></span>
                        </div>
                        <input className="form-control prepended-form-control" type="password" placeholder="Password" required />
                        <label className="cs-password-toggle-btn">
                          <input className="custom-control-input" type="checkbox" />
                          <i className="fe-eye cs-password-toggle-indicator"></i>
                          <span className="sr-only">Show password</span>
                        </label>
                      </div>

                      <SIGN_UP_BUTTON_CONTROLLER loginButtonAnimation={false} />

                      <p className="font-size-sm pt-3 mb-0">Already have an account? 
                      <Link href={config.LOGIN} className='font-weight-medium'> Sign in</Link></p>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>

  )

}













const SIGN_UP_BUTTON_CONTROLLER = ({loginButtonAnimation}) => {
    /* We test the "loginButtonAnimation" state to use to know when member click on the "sign in" button, so that we can control at this point when to display 
     * the animated version of the "sign in" button. */
    if(loginButtonAnimation === false){
        return ( 
            <button className="btn btn-primary btn-block" type="submit">Sign up</button>
        );
    }else{
        return (
            <button className="btn btn-warning btn-block" type="submit">
                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> Processing.....
            </button>        
        );
    }
};

