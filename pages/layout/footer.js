// Load NEXT.JS related packages
import Link from 'next/link.js';
import Image from 'next/image';

// Bring in the config file
import config from '../../config';





// OUR APP LAYOUT COMPONENT
export default function Footer({ layout_initials = '' }){

    return (
        
        <div>

            <footer className="footer py-5">
                <div className="container pt-md-2 pt-lg-3 pt-xl-4">
                    <div className="row pb-5 pt-sm-2 mb-lg-2">
                        <div className="col-md-4 col-lg-3 pb-2 pb-md-0 mb-4 mb-md-0">
                            
                            <Link className="navbar-brand py-0 mb-3 mb-md-4 logo" href={`/${config.HOMEPAGE}`}>
                                <span className="text-primary flex-shrink-0 me-2">
                                    <Image src="/assets/img/logo/Uniskills Logo 48a2c3ff.png" width={100} alt="" height={100} className="logo" id="logo" />
                                </span>
                            </Link>
                            <h4 className="h6 fw-bold pb-lg-1 text-white text-white">Contact Us</h4>
                            <div className="nav-link">
                                <Link href={`/${config.LOGIN}`} className="contact text-white">Live Chat</Link>
                            </div>
                            <div className="nav-link pb-3">
                                <Link href="mailto:support@uniskills.net" className="text-white">support@uniskills.net</Link>
                            </div>

                            <div className="d-flex">
                                <Link className="btn btn-icon btn-sm footer-social-buttons btn-secondary btn-facebook rounded-circle me-3" href={`/${config.FACEBOOK}`}>
                                    <i className="ai-facebook"></i>
                                </Link>
                                <Link className="btn btn-icon btn-sm footer-social-buttons btn-secondary btn-instagram rounded-circle me-3" href={`/${config.INSTAGRAM}`}>
                                    <i className="ai-instagram"></i>
                                </Link>
                                <Link className="btn btn-icon btn-sm footer-social-buttons btn-secondary btn-linkedin rounded-circle" href={`/${config.LINKEDIN}`}>
                                    <i className="ai-linkedin"></i>
                                </Link>
                                <Link className="btn btn-icon btn-sm footer-social-buttons btn-secondary btn-twitter rounded-circle me-3 ms-3" href={`/${config.TWITTER}`}>
                                    <i className="ai-twitter"></i>
                                </Link>
                            </div>

                        </div>


                        <div className="col-md-8 col-lg-7 col-xl-6 offset-lg-2 offset-xl-3">
                            <div className="row row-cols-1 row-cols-sm-3">
                                <div className="col mb-4 mb-md-0">
                                    <h4 className="h6 fw-bold pb-lg-1 text-white">Get Started</h4>
                                    <ul className="nav flex-column">
                                        <li>
                                            <Link className="nav-link fw-normal py-1 px-0 text-white" href={`/${config.FOR_BUSINESS}`}>For Business</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link fw-normal py-1 px-0 text-white" href={`/${config.FOR_STUDENT}`}>For Students</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col mb-4 mb-md-0">
                                    <h4 className="h6 fw-bold pb-lg-1 text-white">Support</h4>
                                    <ul className="nav flex-column">
                                        <li>
                                            <Link className="nav-link fw-normal py-1 px-0 text-white" href={`/${config.ABOUT}`}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link fw-normal py-1 px-0 text-white" href={`/${config.CONTACT}`}>Contact</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link fw-normal py-1 px-0 text-white" href={`/${config.HOW_IT_WORKS}`}>How we work</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link fw-normal py-1 px-0 text-white" href={`/${config.WHY_CHOOSE_US}`}>Why choose us</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col mb-4 mb-md-0">
                                    <h4 className="h6 fw-bold pb-lg-1 text-white">Helpful Resources</h4>
                                    <ul className="nav flex-column">
                                        <li>
                                            <Link className="nav-link fw-normal py-1 px-0 text-white" href={`/${config.FAQ}`}>FAQ</Link>
                                        </li>
                                        <li>
                                            <Link className="nav-link fw-normal py-1 px-0 text-white" href={`/${config.POLICY_AND_TERMS}`}>Privacy policy, Terms and Conditions</Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <p className="fs-sm mb-0">
                        <span className="opacity-70 text-white">&copy; 2023 Uniskills. All rights reserved.</span>
                    </p>
                </div>
            </footer>

            <a className="btn-scroll-top" href="#top" data-scroll>
                <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10">
                        </circle>
                </svg>
                <i className="ai-arrow-up"></i>
            </a>

        </div>


    )
    
}