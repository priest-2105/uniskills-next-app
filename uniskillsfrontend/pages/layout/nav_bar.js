// Load NEXT.JS related packages
import Link from 'next/link.js';
import Image from 'next/image';
// Bring in the config file
import config from '../../config';
import { useState } from 'react';
import Head from 'next/head';




// OUR APP LAYOUT COMPONENT
export default function NavigationBar({ layout_initials = '' }){

    const [isNavbarOpen, setIsNavbarOpen] = useState(true);

    

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
      };
      

      return (
        <>

        <Head>

        <style>`{
           
           

           }`
        </style>

        </Head>

        <header className="navbar navbar-expand-lg nav-head" style={{ "top": "0", "zIndex": "1000" }}>

            <div className="container">

                <Link className="navbar-brand pe-sm-3" href={`${config.HOMEPAGE}`}>
                    <Image src="/assets/img/logo/Uniskills Logo 48a2c3ff.png" alt="" width={100} height={100}   id="logo" />
                    {/* <Image src="/assets/img/logo/Uniskills Logo 48a2c3ff.png" width={100} height={100}  alt="" className="logo" id="uniskills official logo" /> */}
                </Link>

                <nav className="d-none d-md-block" id="navbarNav">
                    <ul className="navbar-nav navbar-nav-scroll me-auto nav-dis" style={{ "--arScrollHeight": "520px" }}>

                        {/* @if(!auth()->check() || (auth()->user()->user_role === "business" ?? false)) */}
                        <li className="nav-item">
                            <Link className="nav-link nav-link-navbar" href={`${config.FINDOPPORTUNITIES}`}>Find Opportunities</Link>
                        </li>
                    
                        <li className="nav-item">
                            <Link className="nav-link nav-link-navbar" href={`${config.FIND_STUDENT}`}>Find Students</Link>
                        </li>

                    </ul>
                </nav>

                <div className="form-check form-switch mode-switch me-lg-4 ms-auto" data-bs-toggle="made">
                            <input className="form-check-input form-check-input2" type="checkbox" id="theme-mode" />
                            <label className="form-check-label" for="theme-mode"><i className="ai-sun fs-lg"></i></label>
                            <label className="form-check-label" for="theme-mode"><i className="ai-moon fs-lg"></i></label>
                        </div>

                <button className="navbar-toggler ms-sm-3 d-md-none" onClick={toggleNavbar}  type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <div className="offcanvas offcanvas-start d-md-none" tabindex="-1" id="offcanvasExample" > */}
                <div className={`offcanvas offcanvas-start ${isNavbarOpen ? 'd-none' : 'show'}`} id="offcanvasNavbar">

                    <div className="offcanvas-header">

                    <div className="form-check form-switch mode-switch me-lg-4 ms-auto" data-bs-toggle="made">
                            <input className="form-check-input form-check-input2" type="checkbox" id="theme-mode" />
                            <label className="form-check-label" for="theme-mode"><i className="ai-sun fs-lg"></i></label>
                            <label className="form-check-label" for="theme-mode"><i className="ai-moon fs-lg"></i></label>
                        </div>

                        <button type="button" onClick={toggleNavbar}  className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="row gap-4">
                            <li><Link className="nav-link" onClick={toggleNavbar} href={`${config.HOMEPAGE}`}><i className="ai-home fs-xl me-3 ms-n1"></i>Home</Link></li>
                            <li><Link className="nav-link" onClick={toggleNavbar} href={`${config.ABOUT}`}><i className="ai-user-group fs-xl me-3 ms-n1"></i>About Us</Link></li>

                            {/* @if(!auth()->check() || (auth()->user()->user_role === "business" ?? false)) */}
                                <li><Link className="nav-link" onClick={toggleNavbar} href={`${config.FIND_STUDENT}`}><i className="ai-search fs-xl me-3 ms-n1"></i>Find Students</Link></li>
                            {/* @endIf */}

                            {/* @if(!auth()->check() || (auth()->user()->user_role === "student" ?? false)) */}
                                <li><Link className="nav-link" onClick={toggleNavbar} href={`${config.FINDOPPORTUNITIES}`} ><i className="ai-briefcase fs-xl me-3 ms-n1"></i>Find Jobs</Link></li>
                            {/* @endIf */}
                            <li><Link className="nav-link" onClick={toggleNavbar} href={`${config.HOW_IT_WORKS}`}><i className="ai-rocket fs-xl me-3 ms-n1"></i>How We Work</Link></li>
                            
                            <li><Link className="nav-link" onClick={toggleNavbar} href={`${config.CONTACT}`}><i className="ai-chat fs-xl me-3 ms-n1"></i>Contact Us</Link></li>
                        </ul>

                        
                        <div className="border-top mt-5"></div>
                        
                        <div className="d-flex justify-content-center row mt-3">
                            
                            {/* @if(!auth()->check()) */}
                                <div className="btn-group dropdown col-6 p-2">
                                    <Link type="button" className="btn btn-primary" href={`${config.LOGIN}`}>
                                        <i className="ai-login me-1"></i>Sign In
                                    </Link>
                                </div>
                                <div className="btn-group dropdown col-6 p-2">
                                    <Link type="button" className="btn btn-primary" href={`${config.NewSignUpPage}`}>
                                        <i className="ai-user me-1"></i>Sign Up
                                    </Link>
                                </div>

                                {/* <div className="btn-group dropdown col-6 p-2">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i className="ai-user me-1"></i>Sign Up
                                    </button>
                                    <div className="dropdown-menu my-1">
                                        <Link href={`/${config.STUDENT_REGISTER}`} className="dropdown-item">As a Student</Link>
                                        <Link href={`/${config.BUSINESS_REGISTER}`} className="dropdown-item">As a Business</Link>
                                    </div>
                                </div> */}
                            {/* @else */}
                                {/* <div className="btn-group dropdown col-6 p-2">
                                    <Link type="button" className="btn btn-outline-primary" href={`/${config.HOMEPAGE}>
                                        <i className="ai-grid me-1"></i>
                                        Dashboard
                                    </Link>
                                </div> */}
                            {/* @endIf */}

                        </div>

                        <div className="border-top mt-3"></div>

                        <div className="d-flex row mt-3 justify-content-center align-content-center mt-5">
                            <Link className="btn btn-icon btn-sm btn-secondary btn-facebook rounded-circle me-3" href={`${config.HOMEPAGE}`}>
                                <i className="ai-facebook"></i>
                            </Link>
                            <Link className="btn btn-icon btn-sm btn-secondary btn-instagram rounded-circle me-3" href={`${config.HOMEPAGE}`}>
                                <i className="ai-instagram"></i></Link>
                            <Link className="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle" href={`${config.HOMEPAGE}`}>
                                <i className="ai-linkedin"></i></Link>
                            <Link className="btn btn-icon btn-sm btn-secondary btn-twitter rounded-circle me-3 ms-3" href={`${config.HOMEPAGE}`}>
                                <i className="ai-twitter"></i>
                            </Link>
                        </div>

                    </div>

                </div>


                
                <div className="d-none d-md-inline-flex">
                    {/* @if(!auth()->check()) */}
                        <div className="btn-group dropdown col-6" style={{ marginRight: "15px" }}>
                            <Link type="button" className="btn btn-primary" href={`${config.LOGIN}`}>
                                <i className="ai-login me-1"></i>Sign In
                            </Link>
                        </div>


                        <div className="btn-group dropdown col-6 ">
                                    <Link type="button" className="btn btn-primary" href={`${config.NewSignUpPage}`}>
                                        <i className="ai-user me-1"></i>Sign Up
                                    </Link>
                                </div>

                        {/* <div className="dropdown position-relative">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="ai-user me-1"></i>Sign Up
                            </button>
                            <div className="dropdown-menu">
                                <Link href={`/${config.STUDENT_REGISTER}`} className="dropdown-item">As a Student</Link>
                                <Link href={`/${config.BUSINESS_REGISTER}`} className="dropdown-item">As a Business</Link>
                            </div>
                        </div> */}
                    {/* @else */}
                        {/* <div className="btn-group dropdown col-6">
                            <Link type="button" className="btn btn-primary" href={`/${config.HOMEPAGE}`}>
                                <i className="ai-grid me-1"></i>Dashboard
                            </Link>
                        </div> */}
                    {/* @endIf */}
                </div>

            </div>

        </header>
 
        </>
    );
   }