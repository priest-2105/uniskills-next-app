// Load NEXT.JS related packages
import Head from 'next/head';
import Script from 'next/script';
// Load REACT.JS related packages
import { useEffect } from 'react'; 

// Load this project Helpers
import { PRELOADER_CONTROLLER } from '../helpers/app_utilities.js'

// import all parts/components needed to set up the layout here
import Footer from './transparent_footer.js';
import NavigationBar from './transparent_nav_bar.js';

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
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Nigeria's no1 flatsharing platform, Get a Flatmate instantly and get your dream Apartment. Get cheap apartments." />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="Flat Sharing, Room Sharing, Cheap Apartment for rent, House For rent, Rent, Rent House, Rent Room, Rent Flat, Get Flatmate, Get your 
                    dream Apartment, Get a roommate" />
                <meta name="author" content="SmartTech Academy" />
                {/* End Required meta tags */}

                {/* Begin SEO tag */}
                <meta property="og:title" content="Room share, flatsharing" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:description" content="Nigeria's no1 flatsharing platform, Get a Flatmate instantly and get your dream Apartment. Get cheap apartments." />
                <meta property="og:site_name" content="Flatshare - Room share, flatsharing." />
                {/* End SEO meta tags */}

                {/* <FAVICONS AND TOUCH ICONS */}
                {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.jpg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_16x16.png" /> */}
                <link rel="icon" type="image/png" sizes="16x16" href="/uni-favicon.ico" />
                <link rel="stylesheet" media="screen" href="/assets/css/theme.min.css" />
                {/* <link rel="stylesheet" href="/assets/css/style.css"/> */}


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
                
            </main>
            

            <Footer layout_initials={initials} />



        </div>

    )
    
}