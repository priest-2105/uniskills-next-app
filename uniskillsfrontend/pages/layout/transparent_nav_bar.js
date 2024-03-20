// Load NEXT.JS related packages
import Link from 'next/link.js';
import Image from 'next/image';

// Bring in the config file
import config from '../../config';




// OUR APP LAYOUT COMPONENT
export default function NavigationBar({ layout_initials = '' }){

    return (
        
        <header id='nav' className="cs-header navbar navbar-expand-lg navbar-light navbar-floating navbar-sticky" data-scroll-header>
            <div className="container px-0 px-xl-3">
                <button className="navbar-toggler ml-n2 mr-2" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4" href={config.HOMEPAGE}>
                    <Image className="d-none d-lg-block" src="/logo_dark.png" alt={config.APP_NAME+" Official Logo"} width="48" height="65" />
                    <Image className="d-lg-none" src="/logo_dark.png" alt={config.APP_NAME+" Official Logo"} width="30" height="65" />
                </Link>
                <div className="d-flex align-items-center order-lg-3 ml-lg-auto">
                    <Link className="nav-link-style font-size-sm text-nowrap" href={config.LOGIN}>
                        <i className="fe-user font-size-xl mr-2"></i>Sign in
                    </Link>
                    <Link className="btn btn-primary ml-grid-gutter d-none d-lg-inline-block" href={config.REGISTER}>Sign up</Link>
                </div>
                <div className="cs-offcanvas-collapse order-lg-2" id="primaryMenu">
                    <div className="cs-offcanvas-cap navbar-box-shadow">
                    <h5 className="mt-1 mb-0">Menu</h5>
                    <button className="close lead" type="button" data-toggle="offcanvas" data-offcanvas-id="primaryMenu">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="cs-offcanvas-body">
                    {/* Menu */}
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" href={config.HOMEPAGE}><b>Home</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href={config.CONTACT}>Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </header>

    )
    
}