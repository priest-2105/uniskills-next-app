// Load NEXT.JS related packages
import Image from 'next/image';

// Bring in the config file
import config from '../../config';





export default function Hero() {
  
    return (
        // Home Page Hero 
        <section className="bg-size-cover overflow-hidden pt-5 pt-md-6 pt-lg-7 bg-gradient" 
            style={{ position: "relative", maxHeight: "750px" }}>

            <Image src="/img/backgrounds/hero-bg-.jpg" fill={true} style={{ objectFit: "cover", objectPosition: "center", zIndex: "0"  }} alt={"Find Flatmates on "+config.APP_NAME} />
            {/* , width: "1724px", height: "591px" */}
            <span className="bg-overlay bg-gradient" style={{ opacity: ".6" }}></span>

            <div className="container pt-2 pb-4 pb-md-2 bg-overlay-content" style={{ zIndex: "1"  }}>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-8 text-center" style={{ width: "1724px", height: "550px"  }}>
                        
                        {/* <h1 className="display-4 text-light mb-4 mt-3 h1">Find A Verified Flat Mate.</h1> */}
                        <h1 class="display-4 text-light mb-4">Find A Verified and Compatible Flat Mate.</h1>
                        <p className="d-inline-flex align-items-center text-light mx-1 px-3 mb-4 h4">
                            Get a Compatible Flatmate or Roommate to share rent with, Sign up now, it wlll only take a moment 
                            to get you a Good Match.
                        </p>
                        {/* <div className="d-inline-flex align-items-center mx-1 px-3 mb-4">
                            <i className="fe-calendar h2 mb-0 mr-2 text-light"></i>
                            <span className="text-light">September 11-13, 2020</span>
                        </div>
                        <div className="d-inline-flex align-items-center mx-1 px-3 mb-4">
                            <i className="fe-map-pin h2 mb-0 mr-2 text-light"></i>
                            <span className="text-light">Hotel Oranfe, Los Angeles</span>
                        </div> */}
                        <div className="pt-2"><a className="btn btn-success btn-lg btn-square" href={config.REGISTER}>Get Started</a></div>
                    </div>
                </div>
            </div>
            {/* <div data-jarallax-element="50" data-disable-parallax-down="md" style={{ zIndex: "1", position: "relative" }}>
                <Image className="d-block mx-auto" src="/img/flatsharing.png" alt={"Find a flatmate on "+config.APP_NAME} width={1724} height={491} 
                    loading='lazy' />
            </div> */}
        </section>
    )

}

