// Load NEXT.JS related packages
import Image from 'next/image';

// Bring in the config file
import config from '../../config';





export default function About() {
  
    return (
        // About US 
        <section className="row no-gutters">
            <div className="col-md-6 bg-size-cover py-7" style={{ position: "relative" }}>
                <Image src="/img/about_us.jpg" fill={true} style={{ objectFit: "cover", objectPosition: "left" }} alt={"About "+config.APP_NAME} />
                <div className="py-6"></div>
            </div>
            <div className="col-md-6 border-top border-bottom px-3 pr-xl-0 pl-lg-5 pl-xl-7">
                <div className="ml-sm-4 my-2 py-5 my-sm-0 py-sm-6 py-md-7" style={{ maxWidth: "495px" }}>
                    <h2 className="mb-4">Why Us?</h2>
                    <p className="mb-5">
                        {config.APP_NAME} is creates an avenue to find yourself not just a random person but a compatible and verified flatmate or 
                        roommate to peacefully share a property with.
                    </p>
                    <div className="media mb-grid-gutter">
                        <Image width="47" height="57" src="/img/svg/compatible.svg" alt={config.APP_NAME+" Compatible Flatmate Icon"} />
                        <div className="media-body pl-4">
                            <h3 className="h6 mb-2">Get Compatible Flatmate</h3>
                            <p className="font-size-sm mb-0">We make it easier to secure a compatible flatmate or roommate</p>
                        </div>
                    </div>
                    <div className="media mb-grid-gutter">
                        <Image width="47" height="57" src="/img/svg/filter.svg" alt={config.APP_NAME+" Advance Search Filters"} />
                        <div className="media-body pl-4">
                            <h3 className="h6 mb-2">Explore Advance Search Filters</h3>
                            <p className="font-size-sm mb-0">Advanced flatmate search with filters for stricter flatmate targeting</p>
                        </div>
                    </div>
                    <div className="media mb-grid-gutter">
                        <Image width={47} height={57} src="/img/svg/verified.svg" alt={config.APP_NAME+" Verified Flatmate"} />
                        <div className="media-body pl-4">
                            <h3 className="h6 mb-2">Verified Flatmate</h3>
                            <p className="font-size-sm mb-0">We go the extra mile to verify members on our platform.</p>
                        </div>
                    </div>
                    {/* <div className="pl-5 mt-n1"><a className="cs-fancy-link ml-4" href={`/${config.LOGIN}`}>Read more</a></div> */}
                </div>
            </div>
        </section>
    )

}

