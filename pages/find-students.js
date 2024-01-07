// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';



 
export default function FIND_STUDENT() {

    
  // Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
  const page_initials = { page_title: "Find Students | "+config.APP_NAME};


  return (
    
    <Layout initials={page_initials}>

      <Head>
        <style>{`
  <style>
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

       /*Fonts*/
       @import url('https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Darker+Grotesque&display=swap');
    body{
    background: #4d4d4d;
    margin:0;
    }
    .bold{
    font-family: 'Montserrat', sans-serif;
    font-weight:700;
    font-size:25px;
    }
    .normal{
    font-family: 'Darker Grotesque', sans-serif;
    font-weight:500;
    font-size:17px;
    }
    .welcome-text{
    color:#fff;
    }
    .welcome{
    text-align:center;
    color:#fff;
    position:absolute;
    height:50%;
    width:400px;
    z-index:30;
    }
    .hello{
    text-align:center;
    color:#fff;
    position:absolute;
    height:50%;
    right:0;
    width:400px;
    z-index:30;
    display:none;
    }
    .welcome-text{
    margin-top:100px;
    }
    .move{
    height:100%;
    position:absolute;
    width:400px;
    text-align:center;
    z-index:20;
    background-color:#2ecc71;
    background-image:url("http://www.pixmy.tech/Projects/Codepen/SlideForm/bg.jpg");
    background-size:cover;
    background-position:left;
    transition:all .4s ease;
    border-radius: 10px 0px 0px 10px;
    }
    @keyframes moving{
    0%{width:400px;transform:translate(0px);}
    50%{width:550px;transform:translate(200px);}
    100%{width:400px;transform:translate(500px);}
    }
    @keyframes start{
    0%{width:400px;transform:translate(500px);}
    50%{width:550px;transform:translate(200px);}
    100%{width:400px;transform:translate(0px);}
    }
    @keyframes startForm{
    0%{width:500px;transform:translate(0px);}
    50%{width:650px;transform:translate(200px);}
    100%{width:500px;transform:translate(400px);}
    }
    @keyframes movingForm{
    0%{width:500px;transform:translate(400px);}
    50%{width:650px;transform:translate(200px);}
    100%{width:500px;transform:translate(0px);}
    }
    .moving{
    animation: moving .4s linear forwards;
    transition:all .4s ease-out;
    }
    .movingForm{
    animation: movingForm .4s linear forwards;
    transition:all .4s ease-out;
    }
    .start{
    animation: start .4s linear forwards;
    transition:all .4s ease-out;
    }
    .startForm{
    animation: startForm .4s linear forwards;
    transition:all .4s ease-out;
    }
    .p-button{
    animation-iteration-count:5;
    color:white;
    padding:12px 60px;
    color:#fff;
    font-size:14px;
    border-radius:25px;
    border:1px solid #fff;
    width:40%;
    position:absolute;
    left:0;
    right:0;
    margin: auto;
    top:60%;
    text-align:center;
    cursor:pointer;
    transition:all .4s ease;
    }
    .p-button:hover{
    transition:all .4s ease;
    background-color:rgba(0,0,0,.7);
    }
    h4{
    font-size:22px;
    }
    p{
    font-size:14px;
    }
    .container{
    height:450px;
    width:900px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    }
    .text{
    width:60%;
    line-height:20px;
    margin:0 auto;
    }
    .icon{
    width:30px;
    height:30px;
    border:1px solid lightgray;
    border-radius:50%;
    text-align:center;
    cursor:pointer;
    line-height:30px;
    display:inline-block;
    }
    .icon:hover{
    background-color:#000;
    color:white;
    }
    .light{
    color:#b2bec3;
    }
    .icons{
    text-aling:center;
    margin-bottom:20px;
    }
    .forgot{
    display:none;
    }
    .form{
    text-align:center;
    position:absolute;
    height:100%;
    transform:translate(400px);
    width:500px;
    background-color:#fff;
    border-radius:0px 10px 10px 0px;
    }
    input{
    border:0px;
    border-bottom:1px solid lightgray;
    margin-bottom:15px;
    padding: 8px 5px;
    width:60%;
    }
    .b-button{
    background-color:#079992;
    clor:white;
    padding:12px 60px;
    color:#fff;
    font-size:14px;
    border-radius:25px;
    }

  .filter-header{
    display: none;
  }
  
  .find-students-header{
    height: 250px;
  } 

  .input-group{
    padding: 0 !important;
  }

  .student-listing-body{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .student-list-card-container{
    max-width: 400px;
    
    max-height:400px;
  }

 
  .student-list-image{
    
    padding-top: -20px;
  }

  .img-thumbnail {
    width: 150px;
    height: 150px;
  }
 

  .student-list-body{
    padding-top: 10px;
    width: 100%; 
    padding-bottom: 10px;
    border-bottom: 1.5px solid rgba(211, 201, 201, 0.5);
    
  }
  .list-info{ 
    display: block;
    margin-top: -15px;
    padding-left: 10px;
    /* max-width: 100%; */
  }

  .star-ratings {
    padding-left: 10px;
  }

  .col {
    padding: 0;
    margin: 0;
  }

  .bi-star-fill{
    color: gold;
  } 

  i{margin-right: 5px;}
  li{list-style-type: none;}


  .list-info li{
    font-size: 14px;
    line-height: 10px;
    margin-bottom: 10px;
    padding-right: 10px;
    margin-right: 5px;
    list-style-type: none;
  }

  .student-list-body p{
    font-size: 12px;
    font-weight: 400;
  }

  .skills{
    align-items: center;
    display: flex;
  }

  .skills span{
    font-size: 12px;
    padding: 8px 12px 8px 12px;
    background-color:#3f7fca;
    margin-right: 10px;
    color:white;
    border-radius: 20px;
  }

  .student-list-action{
    width: 100%; 
    padding-top: 10px;
    text-align: start;
    align-items: center;
  }

  .student-list-action li{
    height: fit-content;
  } 

  
  .student-list-action p{
    margin-top: 8px; 
  } 



  .student-list-action a{
    margin-top: 10px;
    width: 90%;
    align-self: center;
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
  .find-students-header{ 
      background-image: url('./assets/img/find-students/People\ search-rafiki.png');
      background-position: right;
      background-repeat: no-repeat;
      background-size:60% 230%;
    }
  }


  @media only screen and (max-width:768px){

    .student-list-card-container{
    width: 100%;
    height: 450px;
  }


  find-students-header{
    background-image: url('./assets/img/find-students/People\ search-rafiki.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size:60% 230%;
    }

  /* .student-list-card-container{
    height:fit-content ;
    width: 100%;
  }

    .student-list-card{
    width: 100%;
    display: block;
    height: fit-content;
  }  
  
  
  .student-list-body{
    width: 100%;  
    padding-top: 10px;
     padding-left: 0px;         
    width: 100%; 
    border-right: none;
    padding-bottom: 10px;
     border-bottom: 1.5px solid rgba(211, 201, 201, 0.5);  
    min-height: 100px;
}


  .student-list-image img{
    border-radius: 50%;
    height: 50px;
    width: 60px;
  }
  .list-info{
    padding-left:0px;
  }

  .student-list-body p{
    margin-left: 0px;
    font-size: 14px;
  }

  .student-list-action{
    padding-top: 10px; 
    width: 100%;
    display: block;
    justify-content:start;
    text-align: start;
    min-height: 100px;
  }


  .student-list-action h5{
    margin-right: 0;

  } 
  } */
}

      
      @media only screen and (max-width:580px){

 .find-students-header{
    height: 150px;
  } 

  .student-list-card-container{
  width: 100%;
  height: 480px;
  }
      }
  
        `}</style>
      </Head>



















{/* d mobile filter  --> */}
             
            
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
                    </div>
  
  
  
                   
                  <div>           
                     <label class="form-label mt-3 fs-base " for="skills">Skills</label>
            {/* d Checked switch --> */}
                  
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
                      Find Students
                    </button>
                  </div>
                </form>
              </div>
              </div> 
      {/* d end of mobile filter  --> */}

    
    
    
    
    
    
    
    
{/* d Hero--> */}
      <section class="bg-secondary py-5"
        data-jarallax
        data-speed="0.6">
        <div class="container position-relative pt-5 pb-md-2 pb-lg-3 pb-xxl-5">
    {/* d Breadcrumb--> */}
          <nav aria-label="breadcrumb">
            <ol class="pt-lg-3 mb-0 breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Find Students
              </li>
            </ol>
          </nav>
    {/* d Page title--> */}
          
          <div class="find-students-header d-block mt-5 pt-3 ps-md-5 ps-lg-5 ps-sm-1 pe-3 pe-xs-1 ps-xs-1 pb-3 rounded">
            <h1 class="display-6 mt-2 mb-4">Find Students</h1>

            <div class=" col-lg-5 col-md-6 col-sm-8 col-xs-md">
            <div class="input-group mb-3 input-group-sm">
              <input type="text" class="form-control" placeholder="Look for Talents" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
          </div>
          </div>
          
          
        </div>
      </section>
      
{/* d Search--> */}
      <section class="pt-3 pb-4 px-3">
        <div class=" py-lg-2 py-xl-4 py-xxl-5">
          <div class="row mt-1 ps-2  pt-sm-2 pt-md-3 pt-lg-4">
              <div class="col-lg-3 desktop-filter bg-secondary rounded pt-3 ps-3 pe-2 pb-3 mb-5 mb-lg-0">
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
                 </div>
                 
                <div>           
                   <label class="form-label mt-3 fs-base " for="skills">Skills</label>
          {/* d Checked switch --> */}
                
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
                    Find Students       
                  </button>
                </div>
              </form>
            </div>
           

            
            <div class="col-lg-12 col-xl-9 col-sm-12 col-xs-12">
              <div class="row row-cols-12 row-cols-sm-12">
                <div class="col">
                  <div class="card search-results border-0 mb-4">
                    <div class="card-body search-results  px-0">
                      <a class="text-decoration-none filter-header" data-bs-toggle="offcanvas" href="#filteroffcanvasExample" role="button" aria-controls="filteroffcanvasExample">
                        Filter<i class="bi bi-bar-chart-steps"></i>
                      </a> 
                      

                  
                      <div class="listing-top">
                          <h4>Selected</h4>
                        <div class="selected-options-container col-12 d-flex">
                           
                          <div class="selected-options">
                              <a href="#" class="bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2"><span class="text-danger">X</span> Oldest</a>
                              <a href="#" class="bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2"><span class="text-danger">X</span> Newest</a>
                              <a href="#" class="bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2"><span class="text-danger">X</span> Highest</a>
                          </div>

                          <div class="clear-options ms-auto">
                            <a href="" class="text-danger" >Clear all</a>
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


                      <div class="student-listing-body pt-3 ps-0 pe-0 ps-lg-3 pe-lg-3 pb-5">

                    {/* d list card  --> */}
                        <div class="student-list-card-container mb-5 bg-secondary p-2 p-md-3 rounded shadow-sm">
                        <div class="student-list-card">

                    {/* d Copied --> */}
                          <div class="row col-12 gap-1">
                            <div class="student-list-image col-3 row ms-1 pt-2">
                              <Image src="/assets/img/find-jobs/parallax-image-header.jpg" alt="Componay logo" class="img-thumbnail p-0 border-0 rounded-circle " width="150" height="150"/>
                            </div>  
                            <div class="col-9 pt-4 ps-3">
                              <h5 class="m-0 ">Lolade Jones</h5>
                              <div class="list-info row">
                                <div class="col p-0"><i class="bi bi-mortarboard-fill"></i><span class="fs-xs fs-md-sm">Harvard</span></div>
                                <div class="col p-0"><i class="bi bi-rocket-takeoff-fill"></i> <span class="fs-xs fs-md-sm">Nursing</span></div>
                                
                              </div>
                              <div class="star-ratings row gap-2 pt-2">
                                <div class="border-0 d-flex col-6 p-0 m-0" >
                                  <i class="me-2 bi bi-star-fill"></i>
                                  <i class="me-2 bi bi-star-fill"></i>
                                  <i class="me-2 bi bi-star-fill"></i>
                                  <i class="me-2 bi bi-star-fill"></i>
                                  <p class="pt-1 fs-xs" > 4.0 (1)</p>
                                </div>
                                <div class="col-5"> <i class="bi bi-geo-alt-fill"></i><span class="fs-xs fs-md-sm">Los Angeles</span></div>
                                
                              </div>
                            </div>
                            
                          </div>
                          
                              <div>
                                <p class="pt-3"> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                              <div class="skills pt-1">
                                <span>Adobe xd</span>
                                <span>Artist</span>
                                <span>Computer</span> +3
                              </div>
                              </div>
                              
                            </div>
                            <div class="student-list-action row justify-content-center">
                               
                                
                                <a href="./student-details.html" class="btn bg-primary btn-lg mb-1 col-12">View Profile</a>
                            </div>
                          </div>

                        </div>
                  {/* d end of list card   --> */}



                        
                    {/* d list card  --> */}
                          <div class="student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
                            <div class="student-list-card">
                              <div class="student-list-image">
                                <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg"  width={50} height={50}  alt="Componay logo"/>
                              </div>                     
                                <div class="student-list-body">
                                  <h6> Thomas Powell </h6>
                                  <div class="list-info align-items-center">
                                    <li> <i class="bi bi-mortarboard-fill fs-4"></i> Harvard</li>
                                    <li>Nursing</li>                          
                                  </div>
                                  <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                                  <div class="skills">
                                    <span>Adobe xd</span>
                                    <span>Artist</span>
                                    <span>Computer</span> +3
                                  </div>
                                </div>
                                <div class="student-list-action">
                                    <li class="border-0 d-flex" style="line-height: 5px;">
                                      <i class="me-2 bi bi-star-fill"></i>
                                      <i class="me-2 bi bi-star-fill"></i>
                                      <i class="me-2 bi bi-star-fill"></i>
                                      <i class="me-2 bi bi-star-fill"></i>
                                      <p> 4.0 (1)Review</p> </li>
                                    <li> <i class="bi bi-geo-alt-fill"></i>Los Angeles</li>
                                    <a href="./student-details.html" class="btn bg-primary btn-lg mb-1 col-12">View Profile</a>
                                </div>
                              </div>
    
                            </div>
                      {/* d end of list card   --> */}


                            

                            
                    {/* d list card  --> */}
                        <div class="student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
                          <div class="student-list-card">
                            <div class="student-list-image">
                              <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-150x150.jpg" width={50} height={50}  alt="Componay logo"/>
                            </div>                     
                              <div class="student-list-body">
                                <h6>Ifeanyi Okweakwalam</h6>
                                <div class="list-info align-items-center">
                                  <li> <i class="bi bi-mortarboard-fill fs-4"></i> Harvard</li>
                                  <li>Nursing</li>                          
                                </div>
                                <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                                <div class="skills">
                                  <span>Adobe xd</span>
                                  <span>Artist</span>
                                  <span>Computer</span> +3
                                </div>
                              </div>
                              <div class="student-list-action">
                                  <li class="border-0 d-flex" style="line-height: 5px;">
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <p> 4.0 (1)Review</p> </li>
                                  <li> <i class="bi bi-geo-alt-fill"></i>Los Angeles</li>
                                  <a href="./student-details.html" class="btn bg-primary btn-lg mb-1 col-12">View Profile</a>
                              </div>
                            </div>
  
                          </div>
                    {/* d end of list card   --> */}
  






                          
                    {/* d list card  --> */}
                        <div class="student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
                          <div class="student-list-card">
                            <div class="student-list-image">
                              <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/12-150x150.jpg" width={50} height={50}  alt="Componay logo"/>
                            </div>                     
                              <div class="student-list-body">
                                <h6>Fawaz Bailey</h6>
                                <div class="list-info align-items-center">
                                  <li> <i class="bi bi-mortarboard-fill fs-4"></i> Harvard</li>
                                  <li>Nursing</li>                          
                                </div>
                                <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                                <div class="skills">
                                  <span>Adobe xd</span>
                                  <span>Artist</span>
                                  <span>Computer</span> +3
                                </div>
                              </div>
                              <div class="student-list-action">
                                  <li class="border-0 d-flex" style="line-height: 5px;">
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <p> 4.0 (1)Review</p> </li>
                                  <li> <i class="bi bi-geo-alt-fill"></i>Los Angeles</li>
                                  <a href="./student-details.html" class="btn bg-primary btn-lg mb-1 col-12">View Profile</a>
                              </div>
                            </div>
  
                          </div>
                    {/* d end of list card   --> */}
  





                          
                    {/* d list card  --> */}
                        <div class="student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
                          <div class="student-list-card">
                            <div class="student-list-image">
                              <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/09/bg-video-150x150.png" width={50} height={50}  alt="Componay logo"/>
                            </div>                     
                              <div class="student-list-body">
                                <h6>Mother Father</h6>
                                <div class="list-info align-items-center">
                                  <li> <i class="bi bi-mortarboard-fill fs-4"></i> Harvard</li>
                                  <li>Nursing</li>                          
                                </div>
                                <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                                <div class="skills">
                                  <span>Adobe xd</span>
                                  <span>Artist</span>
                                  <span>Computer</span> +3
                                </div>
                              </div>
                              <div class="student-list-action">
                                  <li class="border-0 d-flex" style="line-height: 5px;">
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <p> 4.0 (1)Review</p> </li>
                                  <li> <i class="bi bi-geo-alt-fill"></i>Los Angeles</li>
                                  <a href="./student-details.html" class="btn bg-primary btn-lg mb-1 col-12">View Profile</a>
                              </div>
                            </div>
  
                          </div>
                    {/* d end of list card   --> */}










                          
                    {/* d list card  --> */}
                        <div class="student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
                          <div class="student-list-card">
                            <div class="student-list-image">
                              <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg" width={50} height={50}  alt="Componay logo"/>
                            </div>                     
                              <div class="student-list-body">
                                <h6>Agent Pakulla</h6>
                                <div class="list-info align-items-center">
                                  <li> <i class="bi bi-mortarboard-fill fs-4"></i> Harvard</li>
                                  <li>Nursing</li>                          
                                </div>
                                <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                                <div class="skills">
                                  <span>Adobe xd</span>
                                  <span>Artist</span>
                                  <span>Computer</span> +3
                                </div>
                              </div>
                              <div class="student-list-action">
                                  <li class="border-0 d-flex" style="line-height: 5px;">
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <p> 4.0 (1)Review</p> </li>
                                  <li> <i class="bi bi-geo-alt-fill"></i>Los Angeles</li>
                                  <a href="./student-details.html" class="btn bg-primary btn-lg mb-1 col-12">View Profile</a>
                              </div>
                            </div>
  
                          </div>
                    {/* d end of list card   --> */}


                          









                          
                    {/* d list card  --> */}
                        <div class="student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
                          <div class="student-list-card">
                            <div class="student-list-image">
                              <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg" width={50} height={50}  alt="Componay logo"/>
                            </div>                     
                              <div class="student-list-body">
                                <h6>Agent Pakulla</h6>
                                <div class="list-info align-items-center">
                                  <li> <i class="bi bi-mortarboard-fill fs-4"></i> Harvard</li>
                                  <li>Nursing</li>                          
                                </div>
                                <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                                <div class="skills">
                                  <span>Adobe xd</span>
                                  <span>Artist</span>
                                  <span>Computer</span> +3
                                </div>
                              </div>
                              <div class="student-list-action">
                                  <li class="border-0 d-flex" style="line-height: 5px;">
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <p> 4.0 (1)Review</p> </li>
                                  <li> <i class="bi bi-geo-alt-fill"></i>Los Angeles</li>
                                  <a href="./student-details.html" class="btn bg-primary btn-lg mb-1 col-12">View Profile</a>
                              </div>
                            </div>
  
                          </div>
                    {/* d end of list card   --> */}

                          





                          
                    {/* d list card  --> */}
                        <div class="student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
                          <div class="student-list-card">
                            <div class="student-list-image">
                              <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg" width={50} height={50}  alt="Componay logo"/>
                            </div>                     
                              <div class="student-list-body">
                                <h6>Agent Pakulla</h6>
                                <div class="list-info align-items-center">
                                  <li> <i class="bi bi-mortarboard-fill fs-4"></i> Harvard</li>
                                  <li>Nursing</li>                          
                                </div>
                                <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
                                <div class="skills">
                                  <span>Adobe xd</span>
                                  <span>Artist</span>
                                  <span>Computer</span> +3
                                </div>
                              </div>
                              <div class="student-list-action">
                                  <li class="border-0 d-flex" style="line-height: 5px;">
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <i class="me-2 bi bi-star-fill"></i>
                                    <p> 4.0 (1)Review</p> </li>
                                  <li> <i class="bi bi-geo-alt-fill"></i>Los Angeles</li>
                                  <a href="./student-details.html" class="btn bg-primary btn-lg mb-1 col-12">View Profile</a>
                              </div>
                            </div>
  
                          </div>
                    {/* d end of list card   --> */}
  



                        



                          <div class="container">
                            <div class="move">
                            <div class="p-button normal signin animated pulse">SIGN IN</div>
                            </div>
                            <div class="welcome">
                            <h4 class="bold welcome-text">Welcome Back!</h4>
                            <p class="normal text">To keep connected with us please login with your personal info</p>
                            </div>
                            <div class="hello">
                            <h4 class="bold welcome-text">Hello Friend</h4>
                            <p class="normal text">Enter your personal details and start journey with us</p>
                            </div>
                            <div class="form">
                            <h4 class="bold title">Create Account</h4>
                            <div class="icons">
                            <div class="icon"><i class="fab fa-facebook-f"></i></div>
                            <div class="icon"><i class="fab fa-github"></i></div>
                            <div class="icon"><i class="fab fa-twitter"></i></div>
                            </div>
                            <p class="normal light">Or use your email for registration</p>
                            <input type="text" placeholder="Name" class="normal name"/>
                            <input type="text" placeholder="Email" class="normal"/>
                            <br/>
                            <input type="password" placeholder="Password" class="normal"/><br/>
                            <p class="normal forgot">Forgot your password?</p>
                            <button class="b-button normal">SIGN UP</button>
                            </div>
                            </div>






                   
                                      


                        

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