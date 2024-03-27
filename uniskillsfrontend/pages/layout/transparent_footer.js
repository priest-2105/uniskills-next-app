
// Bring in the config file
import config from '../../config.js';





// OUR APP LAYOUT COMPONENT
export default function Footer({ layout_initials = '' }){

    return (

        <footer class="cs-footer py-4">
            <div class="container font-size-sm mb-0 py-3">
                <span class="text-muted mr-1">© All rights reserved. Powered by </span>
                <a className="nav-link-style" href={config.SmartTech_Academy_Link} target="_blank" rel="noopener noreferrer">UniSkills</a>
            </div>
        </footer>

    )
    
}