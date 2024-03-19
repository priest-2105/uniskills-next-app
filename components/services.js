// Load NEXT.JS related packages
import Image from 'next/image';

// Bring in the config file
import config from '../../config';





export default function Services() {
  
    return (
        // Our Services
        <>
        
            <section className="container pt-6 pt-md-7 mt-lg-3 mb-md-n4 mb-lg-n5">
                <div className="row align-items-center pt-xl-3">
                    <div className="col-md-6 col-lg-5 offset-lg-1" data-jarallax-element="25" data-disable-parallax-down="md">
                        <div className="mx-auto mx-md-0" style={{ maxWidth: "495px" }}>
                            <Image className="rounded-lg" src="/img/find_flatmate-.jpg" width={990} height={1206} alt={"Share Your Property on "+config.APP_NAME} />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 py-5" data-jarallax-element="-15" data-disable-parallax-down="md">
                        <div className="mx-auto" style={{ maxWidth: "370px" }}>
                            <h2 className="pb-2">Find Roommate</h2>
                            <p className="pb-2">
                                Now you can get a partner of like mind  in the community to inspect, rent and move into your preferred property 
                                or space. Simply search through our suggested lists of potential match, invite prospective roommates to book inspection 
                                together with an agent. Living in your dream Neighborhood is now possible, regardless of the Rent, click on button 
                                below to get started.
                            </p>
                            <div className="pt-2"><a className="btn btn-primary" href={config.REGISTER}>Get Started</a></div>
                        </div>
                    </div>
                </div>
            </section>
            
            

            <section className="container pb-5 mb-3 mb-md-0 pb-md-7">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-5 order-md-2" data-jarallax-element="-40" data-disable-parallax-down="md">
                        <div className="mx-auto mx-md-0" style={{ maxWidth: "495px" }}>
                            <Image className="rounded-lg" src="/img/share_your_property-.jpg" width={990} height={1206} alt={"Find Flatmates on "+config.APP_NAME} />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 offset-lg-1 order-md-1 pt-5 pt-md-7 pb-md-5" data-jarallax-element="40" data-disable-parallax-down="md">
                        <div className="mx-auto" style={{ maxWidth: "370px" }}>
                            <h2 className="pb-2">Share Your Property</h2>
                            <p className="pb-2">
                                Tired of paying the huge rent and utility bills, now you can get a partner of like mind to split the espenses. Publish 
                                your apartment on our platform and begin to receive requests from a list of verified potential roommies. Click on button 
                                below to get started.
                            </p>
                            <ul className="list-unstyled font-size-sm pb-2">
                                <li className="d-flex align-items-center">
                                    <i className="fe-check-circle font-size-lg text-primary mr-2"></i>
                                    <span>Sign Up</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="fe-check-circle font-size-lg text-primary mr-2"></i>
                                    <span>Verify Account</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="fe-check-circle font-size-lg text-primary mr-2"></i>
                                    <span>Upload Property</span>
                                </li>
                            </ul>
                            <div className="pt-2"><a className="btn btn-primary" href={config.REGISTER}>Post Propert Now!</a></div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )

}

