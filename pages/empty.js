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
          
        `}</style>
      </Head>









      



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

