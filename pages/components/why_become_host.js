// Load NEXT.JS related packages
import Image from 'next/image';

// Bring in the config file
import config from '../../config';





export default function WhyHost() {
  
    return (
        // About US 
        <section className="container mb-md-4 pb-md-5 pt-5 mt-5">

            <div className="row align-items-center">
                
                <div className="col-md-6 offset-lg-1 order-md-2">
                    <Image className="d-block mx-auto" src="/img/svg/why_post_your_property.svg" width={601} height={351} 
                        alt={"Why post your property on "+config.APP_NAME} />
                </div>

                <div className="col-md-6 col-lg-5 order-md-1 pt-4 pt-md-0">
                    <h2 className="mt-4 mb-5 text-center text-md-left">Why Post you Apartment?</h2>

                    <p className="mb-5">
                        Explore a range of verified prospective flatmates and occupants from diverse backgrounds, including professionals, 
                        entrepreneurs, and students, all within our community. You have the freedom to choose. Click the button below to get 
                        started.
                    </p>

                    <div className="pt-2"><a className="btn btn-success" href={config.REGISTER}>Post Propert Now!</a></div>
                </div>
            </div>
            
        </section>
    )

}

