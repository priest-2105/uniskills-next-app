// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';



 
export default function FINDOPPORTUNITIES() {

    
  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "Find Jobs | "+config.APP_NAME};


  return (
    
    <Layout initials={page_initials}>

      <Head>
        <style>{`

        .page-loading {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-transition: all 0.4s 0.2s ease-in-out;
          transition: all 0.4s 0.2s ease-in-out;
          background-color: #fff;
          opacity: 0;
          visibility: hidden;
          z-index: 9999;
        }
        .dark-mode .page-loading {
          background-color: #121519;
        }
        .page-loading.active {
          opacity: 1;
          visibility: visible;
        }
        .page-loading-inner {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          text-align: center;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          -webkit-transition: opacity 0.2s ease-in-out;
          transition: opacity 0.2s ease-in-out;
          opacity: 0;
        }
        .page-loading.active > .page-loading-inner {
          opacity: 1;
        }
        .page-loading-inner > span {
          display: block;
          font-family: "Inter", sans-serif;
          font-size: 1rem;
          font-weight: normal;
          color: #6f788b;
        }
        .dark-mode .page-loading-inner > span {
          color: #fff;
          opacity: 0.6;
        }
        .page-spinner {
          display: inline-block;
          width: 2.75rem;
          height: 2.75rem;
          margin-bottom: 0.75rem;
          vertical-align: text-bottom;
          background-color: #d7dde2;
          border-radius: 50%;
          opacity: 0;
          -webkit-animation: spinner 0.75s linear infinite;
          animation: spinner 0.75s linear infinite;
        }
        .dark-mode .page-spinner {
          background-color: rgba(255, 255, 255, 0.25);
        }
        @-webkit-keyframes spinner {
          0% {
            -webkit-transform: scale(0);
            transform: scale(0);
          }
          50% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }
        @keyframes spinner {
          0% {
            -webkit-transform: scale(0);
            transform: scale(0);
          }
          50% {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }
  
        .filter-header{
          display: none;
        }
  
        .selected-options{
          flex-wrap: wrap;
          display: flex;
          word-wrap: normal;
        }
        .selected-options a{
          word-wrap: normal;
        }
        
        .find-jobs-header{
          height: 250px;
        } 
  
        .input-group{
          padding: 0 !important;
        }
  
  
        .job-list-card-container{
          min-width: 200px;
          min-height: 250px;
        }
  
        /* .job-list-card{
          display: flex;
          height: 100%;
          width: 100%;
        } */
  
        .row {
          padding: 0;
          margin: 0;
        }
        .job-list-image{
          width: 100px;
          height: 100%; 
        }
  
        .job-list-image img{
          border-radius: 50%;
          height: 100px;
          width: 250px;
        }
  
        .job-list-body{
          padding-left: 10px;
          width: 60%; 
          border-right: 1.5px solid rgba(211, 201, 201, 0.5);
          
        }
        .list-info{
          
          display: flex;
          
          flex-wrap: wrap;
        }
        .list-info div{
          line-height: 15px;
          margin-bottom: 10px;
          padding-right: 10px;
          margin-right: 5px;
          list-style-type: none;
          border-right: 2px solid rgba(211, 201, 201, 0.5);
        }
  
        .job-list-body p{
          
          font-size: 15px;
          font-weight: 400;
        }
  
        .skills{
          align-items: center;
          display: flex;
          flex-wrap: wrap;
        }
  
        .skills span{
          color:white;
          font-size: 13px;
          padding: 10px 15px 10px 15px;
          background-color:#3f7fca;
          margin-right: 5px;
          border-radius: 20px;
        }
  
        .job-list-action{
          width: 30%; 
          padding-top: 5%;
          align-items: center;
          justify-content:end;
          min-height: 100px;
          text-align: end;
        }
  
        .job-list-action h5{
          font-weight: 700;
          margin-right: auto;
  
        }
  
        @media only screen and (max-width:1200px){
           
           .filter-header{
           display: block;
           text-align: end;
           margin-left: auto;
           font-size: 30px;
           font-weight: 700;
         }
   
         .desktop-filter{
           display: none;
         }
   
         }
   
   
         @media only screen and (min-width:768px){
         .find-jobs-header{ 
             background-image: url('./assets/img/find-jobs/find-jobs.png');
             background-position: right;
             background-repeat: no-repeat;
             background-size:60% 230%;
           }
         }
    
   
         @media only screen and (max-width:768px){
    
   
         find-jobs-header{
           background-image: url('./assets/img/find-jobs/Job\ hunt-bro.png');
             background-position: center;
             background-repeat: no-repeat;
             background-size:60% 230%;
           }
          } 
   
  
        @media only screen and (max-width:768px){
      
          .filter-header{
          display: block;
          text-align: end;
          margin-left: auto;
          font-size: 30px;
          font-weight: 700;
        }
  
        .desktpp-filter{
          display: none;
        }
  
        .job-list-card-container{
          height:fit-content ;
          width: 100%;
        }
  
  
          .job-list-card{
          /* width: 100%; */
          /* display: block;
          height: fit-content; */
        }  
        
        
        .job-list-body{
          width: 100%;  
          padding-top: 10px;
           padding-left: 0px;         
          width: 100%; 
          border-right: none;
          padding-bottom: 10px;
           border-bottom: 1.5px solid rgba(211, 201, 201, 0.5);  
          min-height: 100px;
      }
  
      
        .job-list-image img{
          border-radius: 50%;
          height: 100%;
          width:100%;
        }
        .list-info{
          padding-left:0px;
        }
  
        .job-list-body p{
          
          font-size: 14px;
        }
  
        .job-list-action{
          padding-top: 10px; 
          width: 100%;
          display: block;
          justify-content:start;
          text-align: start;
          min-height: 100px;
        }
  
  
        .job-list-action h5{
          margin-right: 0;
  
        }
  }
  
  @media only screen and (max-width:768px){
          .find-jobs-header{
          height: 150px;
        } 
      }

        
        `}</style>
      </Head>







      {/* <!-- mobile filter  --> */}
             
            
             <div class="offcanvas offcanvas-start" tabindex="-1" id="filteroffcanvasExample" aria-labelledby="filteroffcanvasExampleLabel">
               <div class="offcanvas-header">
                 <h5 class="offcanvas-title" id="filteroffcanvasExampleLabel">Filter</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
               <div class="offcanvas-body">
                
                 
 
                    <h2 class="fs-6">Filter your Results</h2>
                  
                    <form class="needs-validation row g-4" novalidate>
                      <div class="col-lg-10">
                        <label class="form-label fs-base" for="skills">Search by Keywords</label>
                        <div class="input-group">
                          <span class="input-group-text">
                            <i class="ai-search"></i>
                          </span>
                          <input type="text" class="form-control" placeholder="Search by Title, Preferences"/>
                        </div>
                        <div class="invalid-feedback">Please enter a valid keyword</div>
                      </div>
                      <div class="col-lg-10">
                        <label class="form-label fs-base" for="location">Location</label>
                        <div class="input-group">
                          <span class="input-group-text">
                            <i class="ai-map-pin"></i>
                          </span>
                          <input type="text" class="form-control" placeholder="Search by Location"/>
                        </div>
                        <div class="invalid-feedback">
                          Please provide a location!
                        </div>
                      </div>
      
      
                        <div class="col-lg-10">
                          <label class="form-label fs-base" for="location">Category</label>
                          
                          <div class="form-check form-switch pb-1">
                            <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                            <label class="form-check-label" for="customSwitch1">Catering</label>
                          </div>
        
                          
                          <div class="form-check form-switch pb-1">
                            <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                            <label class="form-check-label" for="customSwitch1">Music</label>
                          </div>
        
                          
                          <div class="form-check form-switch pb-1">
                            <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                            <label class="form-check-label" for="customSwitch1">Technology</label>
                          </div>
        
                          
                          <div class="form-check form-switch pb-1">
                            <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                            <label class="form-check-label" for="customSwitch1">Food</label>
                          </div>
        
        
                          <div class="form-check form-switch pb-1">
                            <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                            <label class="form-check-label" for="customSwitch1">Art</label>
                          </div>
                          
                        </div>
      
      
                      
                        
                      <div>           
                              <label class="form-label mt-3 fs-base " for="Job type">Job Type</label>
                    {/* <!-- Checked switch --> */}
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch2" checked/>
                          <label class="form-check-label" for="customSwitch2">All</label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Freelance</label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Full Time</label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Internship</label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Part Time</label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Temporary</label>
                        </div>
                        
                      </div>
                      
                    
      
      
      
                        
                      <div>           
                          <label class="form-label mt-3 fs-base " for="skills">Skills</label>
                      {/* <!-- Checked switch --> */}
                      
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Adobe Photoshop
                        </label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Adobe XD
                            </label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Android Developer
                              </label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">Artist</label>
                        </div>
                        <div class="form-check form-switch pb-1">
                          <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                          <label class="form-check-label" for="customSwitch1">   Computer</label>
                        </div>                    
                      </div>
                      <div class="col-lg-10">
                        <button
                          class="btn btn-lg btn-primary mt-2"
                          type="submit"
                        >
                          Find Jobs          
                        </button>
                      </div>
                    </form>
                  </div>
               </div>            
             {/* <!-- end of mobile filter  --> */}
 
     
     
     
     
     
     
     
     
       {/* <!-- Hero--> */}
       <section class="bg-secondary py-5"
         data-jarallax
         data-speed="0.6">
         <div class="container position-relative pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
           {/* <!-- Breadcrumb--> */}
           <nav aria-label="breadcrumb">
             <ol class="pt-lg-3 mb-0 breadcrumb">
               <li class="breadcrumb-item"><a href="index.html">Home</a></li>
               <li class="breadcrumb-item active" aria-current="page">
                 Find Jobs
               </li>
             </ol>
           </nav>
           {/* <!-- Page title--> */}
           
           <div class="find-jobs-header d-block mt-5 pt-3 ps-lg-5 pe-lg-3 ps-xl-5 pe-xl-3  pe-xs-1 ps-xs-1 pb-3 rounded" >
             <h1 class="display-6 mt-2 mb-4">Find Jobs</h1>
 
             <div class=" col-lg-5 col-md-6 col-sm-8 col-xs-md">
             <div class="input-group mb-3 input-group-sm">
               <input type="text" class="form-control" placeholder="Search for Jobs" aria-label="Recipient's username" aria-describedby="button-addon2"/>
               <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
             </div>
           </div></div>
           
           
         </div>
       </section>
       
       {/* <!-- Search--> */}
       <section class="pt-3 pb-4 px-lg-3">
         <div class=" py-lg-2 py-xl-4 py-xxl-5">
           <div class="row mt-1 ps-2  pt-sm-2 pt-md-3 pt-lg-4">
               <div class="col-lg-3 desktpp-filter bg-secondary rounded pt-3 ps-3 pe-2 pb-3 mb-5 mb-lg-0">
               <h2 class="fs-5">Filter your Results</h2>
               
               <form class="needs-validation row g-4" novalidate>
                 <div class="col-lg-10">
                   <label class="form-label fs-base" for="skills">Search by Keywords</label>
                   <div class="input-group">
                     <span class="input-group-text">
                       <i class="ai-search"></i>
                     </span>
                     <input type="text" class="form-control" placeholder="Search by Title, Preferences"/>
                   </div>
                   <div class="invalid-feedback">Please enter a valid keyword</div>
                 </div>
                 <div class="col-lg-10">
                   <label class="form-label fs-base" for="location">Location</label>
                   <div class="input-group">
                     <span class="input-group-text">
                       <i class="ai-map-pin"></i>
                     </span>
                     <input type="text" class="form-control" placeholder="Search by Location"/>
                   </div>
                   <div class="invalid-feedback">
                     Please provide a location!
                   </div>
                 </div>
                 <div>
 
 
                   <div class="col-lg-10">
                     <label class="form-label fs-base" for="location">Category</label>
                     
                     <div class="form-check form-switch pb-1">
                       <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                       <label class="form-check-label" for="customSwitch1">Catering</label>
                     </div>
   
                     
                     <div class="form-check form-switch pb-1">
                       <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                       <label class="form-check-label" for="customSwitch1">Music</label>
                     </div>
   
                     
                     <div class="form-check form-switch pb-1">
                       <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                       <label class="form-check-label" for="customSwitch1">Technology</label>
                     </div>
   
                     
                     <div class="form-check form-switch pb-1">
                       <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                       <label class="form-check-label" for="customSwitch1">Food</label>
                     </div>
   
   
                     <div class="form-check form-switch pb-1">
                       <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                       <label class="form-check-label" for="customSwitch1">Art</label>
                     </div>
                     
                   </div>
 
 
                 
                  
                 <div>           
                         <label class="form-label mt-3 fs-base " for="Job type">Job Type</label>
              {/* <!-- Checked switch --> */}
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch2" checked/>
                     <label class="form-check-label" for="customSwitch2">All</label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Freelance</label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Full Time</label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Internship</label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Part Time</label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Temporary</label>
                   </div>
                   
                 </div>
                 
                 </div>
 
 
 
 
                  
                 <div>           
                    <label class="form-label mt-3 fs-base " for="skills">Skills</label>
                 {/* <!-- Checked switch --> */}
                 
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Adobe Photoshop
                  </label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Adobe XD
                       </label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Android Developer
                        </label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">Artist</label>
                   </div>
                   <div class="form-check form-switch pb-1">
                     <input type="checkbox" class="form-check-input" id="customSwitch1"/>
                     <label class="form-check-label" for="customSwitch1">   Computer</label>
                   </div>
                   
                 </div>
                 
                 
 
                 <div class="col-lg-10">
                   <button
                     class="btn btn-lg btn-primary mt-2"
                     type="submit"
                   >
                     Find Jobs          
                   </button>
                 </div>
               </form>
             </div>
            
 
             
             <div class="col-lg-9 col-xl-9 col-sm-12 col-xs-12">
               <div class="row row-cols-12 row-cols-sm-12">
                 <div class="col">
                   <div class="card search-results px-0 border-0 mb-4">
                     <div class="card-body search-results">
                       <a class="text-decoration-none filter-header" data-bs-toggle="offcanvas" href="#filteroffcanvasExample" role="button" aria-controls="filteroffcanvasExample">
                         Filter<i class="bi bi-bar-chart-steps"></i>
                       </a> 
                       
 
                   
                       <div class="listing-top">
                           <h4>Selected</h4>
                         <div class="selected-options-container col-12 d-flex">
                            
                           <div class="selected-options gap-1">
                               <a class="bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2"><span class="text-danger">X</span> Oldest</a>
                               <a class="bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2"><span class="text-danger">X</span> Newest</a>
                               <a class="bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2"><span class="text-danger">X</span> Highest</a>
                           </div>
 
                           <div class="clear-options ms-auto">
                             <a href={`/${config.LOGIN}`} class="text-danger" >Clear all</a>
                           </div>
 
                         </div>
 
                         <div class="result-page-list d-flex align-items-center mt-5">
 
                           <p>Showing 1 - 7 of 9 Result</p>
 
                        <div class="option-select col-2 ms-auto">
                         <select class="form-select bg-transparent text-dark" aria-label="Default select example">
                             <option class="bg-transparent text-dark" selected> Default</option>
                             <option class="bg-transparent text-dark" value="1">One</option>
                             <option class="bg-transparent text-dark" value="2">Two</option>
                             <option class="bg-transparent text-dark" value="3">Three</option>
                           </select> </div> 
                         </div>
                       </div> 
 
 
                       <div class="job-listing-body pt-3  ps-lg-3 pe-lg-3 pb-5 border-0">
 
                           {/* <!-- list card  --> */}
                           <div class="job-list-card-container mb-5 bg-secondary p-3 p-md-4 p-md-4 rounded">
 
                          <div class="job-list-card row">

                            <div class="row col-12 gap-1">
                              <div class="job-list-image col-2">
                                <Image  height={40} width={50} src="/assets/img/find-jobs/parallax-image-header.jpg" alt="Componay logo"/>
                              </div> 
                              <div class="col-9">
                                <h5>Website Designer</h5>
                                <div class="list-info gap-1">
                                  <div><i class="bi bi-geo-alt-fill"></i><span class="fs-xs fs-md-sm mt-4">Los Angeles</span></div>
                                  <div><i class="bi bi-calendar-week-fill"></i> <span class="fs-xs fs-md-sm">5 months ago</span></div>
                                  <div class="border-0"><i class="bi bi-rocket-takeoff-fill"></i> <span class="fs-xs fs-md-sm">3 proposals</span></div>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="job-list-body row col-12 col-md-8 pt-3">
                                <p class="fs-sm fs-md-lg pe-md-3 text-gray-900"> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                            
                                  <div class="skills">
                                    <span class="my-1 my-md-0">Adobe xd</span>
                                    <span class="my-1 my-md-0">Artist</span>
                                    <span class="my-1 my-md-0">Computer</span> +3
                                  </div>
                              </div> 
                              <div class="job-list-action col-12 col-md-3 row pt-2">
                                <div class="col-6 col-md-12 pt-2 pt-md-0">
                                  <h5>$500 - $550</h5>
                                  <p>Fixed</p>
                                </div>
                                
                                <div class="col-6 col-md-9 d-flex justify-content-end">
                                  <a href="./business-details.html" class="btn bg-primary btn-md">See More<i class="bi ms-1 fs-4 bi-arrow-up-right"></i></a>
                                </div>
                                
                            </div>     
                            
                            </div>

                                          
                              
                                

                                

                                
                              </div>
                              
                                                
                         </div>




   {/* <!-- list card  --> */}
                           <div class="job-list-card-container mb-5 bg-secondary p-3 p-md-4 p-md-4 rounded">
 
                          <div class="job-list-card row">

                            <div class="row col-12 gap-1">
                              <div class="job-list-image col-2">
                                <Image  height={40} width={50} src="/assets/img/find-jobs/parallax-image-header.jpg" alt="Componay logo"/>
                              </div> 
                              <div class="col-9">
                                <h5>Website Designer</h5>
                                <div class="list-info gap-1">
                                  <div><i class="bi bi-geo-alt-fill"></i><span class="fs-xs fs-md-sm mt-4">Los Angeles</span></div>
                                  <div><i class="bi bi-calendar-week-fill"></i> <span class="fs-xs fs-md-sm">5 months ago</span></div>
                                  <div class="border-0"><i class="bi bi-rocket-takeoff-fill"></i> <span class="fs-xs fs-md-sm">3 proposals</span></div>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="job-list-body row col-12 col-md-8 pt-3">
                                <p class="fs-sm fs-md-lg pe-md-3 text-gray-900"> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                            
                                  <div class="skills">
                                    <span class="my-1 my-md-0">Adobe xd</span>
                                    <span class="my-1 my-md-0">Artist</span>
                                    <span class="my-1 my-md-0">Computer</span> +3
                                  </div>
                              </div> 
                              <div class="job-list-action col-12 col-md-3 row pt-2">
                                <div class="col-6 col-md-12 pt-2 pt-md-0">
                                  <h5>$500 - $550</h5>
                                  <p>Fixed</p>
                                </div>
                                
                                <div class="col-6 col-md-9 d-flex justify-content-end">
                                  <Link href={`/${config.Job_Details}`} class="btn bg-primary btn-md">See More<i class="bi ms-1 fs-4 bi-arrow-up-right"></i></Link>
                                </div>
                                
                            </div>     
                            
                            </div>

                                          
                              
                                

                                

                                
                              </div>
                              
                                                
                         </div>















 </div>
 {/* <!-- end of list card   --> */}








 
 
                         
 
 
                       </div>
                      
                       <h2>   No jobs available. <a href="index.html">Return to Homepage</a> </h2>
                     </div>
                   </div>
                 </div>
               
               </div>
             </div>
           </div>
       </section>
     



    </Layout>

  )

}