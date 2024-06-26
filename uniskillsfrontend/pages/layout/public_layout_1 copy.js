// Load NEXT.JS related packages
import Head from 'next/head';
import Script from 'next/script';
// Load REACT.JS related packages
import { useEffect } from 'react'; 

// Load this project Helpers
// import { PRELOADER_CONTROLLER } from '../helpers/app_utilities.js'

import { PRELOADER_CONTROLLER } from '@/helpers/app_utilities.js';

// import all parts/components needed to set up the layout here
import Footer from './footer.js';
import NavigationBar from './nav_bar.js';

// Bring in the config file
import config from '../../config.js';

// load google fonts into the layout
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] })




// OUR APP LAYOUT COMPONENT
export default function Layout({children, initials=''}){

    useEffect(() => {
        PRELOADER_CONTROLLER();
    }, []);


    return (
        <div>

            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />Study, connect, collaborate, and deliver business projects.
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Study, connect, collaborate, and deliver business projects." />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="Study, connect, collaborate, and deliver business projects." />
                <meta name="author" content="UniSkills" />
                {/* End Required meta tags */}

                {/* Begin SEO tag */}
                <meta property="og:title" content="UniSkills" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:description" content="Study, connect, collaborate, and deliver business projects." />
                <meta property="og:site_name" content="UniSkills" />
                {/* End SEO meta tags */}

                {/* <FAVICONS AND TOUCH ICONS */}
                {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.jpg" /> */}
                {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32x32.png" /> */}
                {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon_16x16.png" > */}
                <link rel="icon" type="image/png" sizes="16x16" href="/logo-icon.png" />

                {/* <End FAVICONS AND TOUCH ICONS */}
                
                {/* Other important meta tags */}
                {/* <title>Charity</title> */}
                <title>{initials.page_title ?? config.APP_NAME}</title>

            </Head>



            {/* Load scripts, the next JS way */}
            <Script src='/js/VENDORS/jquery/dist/jquery.slim.min.js' strategy="beforeInteractive" />
            <Script src='/js/VENDORS/bootstrap/dist/js/bootstrap.bundle.min.js' strategy="beforeInteractive" />
            {/* <Script src='/js/VENDORS/smooth-scroll/dist/smooth-scroll.polyfills.min.js' strategy="afterInteractive" /> */}
            <Script src='/js/theme.min.js' strategy="afterInteractive" />







            {/* Page loading spinner */}
            <div className="cs-page-loading active">
                <div className="cs-page-loading-inner">
                    <div className="cs-page-spinner"></div>
                    <span>Loading...</span>
                </div>
            </div>








            <main className="cs-page-wrapper">

                <NavigationBar layout_initials={initials} />


                {children}


                <Footer layout_initials={initials} />
                
            </main>



        </div>

    )
    
}