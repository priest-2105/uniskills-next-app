// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';



 
export default function Job_Details() {

    
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
      -webkit-transition: all .4s .2s ease-in-out;
      transition: all .4s .2s ease-in-out;
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
      -webkit-transition: opacity .2s ease-in-out;
      transition: opacity .2s ease-in-out;
      opacity: 0;
    }
    .page-loading.active > .page-loading-inner {
      opacity: 1;
    }
    .page-loading-inner > span {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      font-weight: normal;
      color: #6f788b;
    }
    .dark-mode .page-loading-inner > span {
      color: #fff;
      opacity: .6;
    }
    .page-spinner {
      display: inline-block;
      width: 2.75rem;
      height: 2.75rem;
      margin-bottom: .75rem;
      vertical-align: text-bottom;
      background-color: #d7dde2; 
      border-radius: 50%;
      opacity: 0;
      -webkit-animation: spinner .75s linear infinite;
      animation: spinner .75s linear infinite;
    }
    .dark-mode .page-spinner {
      background-color: rgba(255,255,255,.25);
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
    

    .top-header{
      margin-top: 50px;
      display: flex;
      width: 100%;
      align-items:center;
      padding: 50px 50px 50px 50px;
    }

    .top-header-options{
      margin-left: auto;
      display: flex;
    }
    .top-header-options li{
      list-style-type: none;
       margin-right: 25px;
       display: flex;
       align-items: center;
       flex-direction: row-reverse;
    }
    


    .top-header-options a{
      margin-left: 5px;
      line-height: 30px;
      color:#3aaed8;
      text-decoration: none;        
  }
  .top-header-options a:hover ~ i{
      background-color: #3aaed8;
  }


  .top-header-options i{
      border: 2px solid rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      padding: 10px 10px 10px 10px;
  }
  

  .job-title{ 
      margin-top: 10px;
      opacity: 0.7;
      display: block;
      position: relative;
      width: 100%;
      align-items:center;
      /* background-color: #3aaed8; */
      background-image: url('./assets/img/business-details/wallpaperflare.com_wallpaper.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 250px;
      padding: 70px 70px 70px 70px;
    }

    .title-info{
      display: flex;
      width: 60%;
      justify-content: space-around;
    }

    .title-info li{
     align-items:baseline;
      list-style-type: none;
   }

   .title-info i{
    margin-bottom:5px;
    font-size: 20px;
   }

   .bottom-section{
     height: fit-content;
     width: 100%;
     padding: 10px 10px 10px 10px;
     display: flex;
  }

   .left-bottom-section{
    height:fit-content;
    width: 65%; 

   }

   .job-info{
    /* display: none; */
    min-height: 200px;
    padding: 10px 10px 10px 10px;
    flex-wrap: wrap; 
    display: flex;
    width: 100%;
    justify-content: space-around;
    border-bottom: 2px solid grey;

    }

    .job-info li{
     align-items:center;
     font-size: 20px;
     min-width: 250px; 
     line-height:8px;
     height: fit-content;
     padding-top: 5px;
     list-style-type: none;
     margin-bottom: 5px;
   }

   .job-info span{
    font-weight: 600;
    font-size: 15px;
    margin-left: 5px;
   
  }
  .job-info p{
    font-size: 13px; 
    margin-left: 38px;
  }


   .job-info i{
    margin-top:10px;
    font-size: 20px;
   }


   .project-description h4{
    margin-left: 10px;
    margin-top: 50px;

   }

   .project-description{
    border-bottom: 2px solid grey;
    padding-bottom: 40px;
   }


   .attachments-container{
    margin-top: 70px;
    padding-bottom: 50px;
    display: block;
    border-bottom: 2px solid grey;

   }

   .attachments{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
   }

   .attachments h4{
    margin-left: 10px;
   }

   
   
   .attachments li{
     align-items:flex-start;
     font-size: 15px;
     width: 200px;
     margin-left: 40px; 
     /* line-height:8px; */
     display: flex;
     height: fit-content;
     padding:10px 20px 10px 20px;
     list-style-type: none;
   }

   .attachments span{
    font-weight: 600;
    font-size: 16px;
  }

  .attachments p{
    font-size: 13px; 
  }


   .attachments i{
    margin-left: 40px;
    font-weight: 200;
    color: rgba(14, 157, 228, 0.3);
    margin-top:10px;
    font-size: 25px;
   }


   .skills-required-container{
    padding-top: 50px;
    display: block;
    padding-bottom: 50px;
    /* border-bottom: 2px solid grey; */
   }

   .skills-required{
    flex-wrap: wrap;
    display: flex;
  
  }

  .skills-required a{
    background-color:#3f7fca;
    margin-top: 10px;
    word-wrap: normal;
    margin-left: 10px;
  }
  
  .send-proposal {
    padding-top:50px;
    width: 100%;
    padding-bottom: 50px;
  }

  .send-proposal label{
    margin-top: 30px;
    font-size: 18px;
  }

  .send-proposal a{
    margin-top:40px;
  }



   .right-bottom-section{
    width: 35%;
    height: 100%; 
    position: relative;
   
   }


   .top-submit-proposal{
    margin-left: auto;
    margin-top:-80px;
    margin-right:auto;
    width: 350px;
    padding: 20px 20px 20px 20px; 
    min-height: fit-content;
    height: fit-content;
    /* position: absolute;  */
    /* top:-5%; */
    /* left: 10%; */
  }

   
   .top-submit-proposal span{
    font-size: 25px;
   }



   
   .about-seller-card-container{
    /* position: absolute; */
    margin-top: 20px;
    /* top: 8%; */
    /* left: 5%; */
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    min-height: fit-content;
    }

    .about-seller-card{
      display: block;
      height: 100%; 
      padding: 10px 10px 10px 10px;
      width: 100%;
    }

    .about-seller-image{
      width: 100%;
      height: 100%; 
      display: flex;    
      border-bottom: 1.5px solid rgba(211, 201, 201, 0.5);
  
    }

    .about-seller-image img{
      border-radius: 50%;
      height: 100px;
      width: 120px;
    }

    .about-seller-body{
      padding-left: 10px;
      width: 100%; 
      
    }
    .list-info{
      padding-left: 10px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      /* flex-wrap: wrap; */
    }
    .list-info li{
       margin-bottom: 10px; 
      display: block;
      list-style-type: none;
    
    }

    .about-seller-body p{
      margin-left: 10px;
      font-size: 15px;
      font-weight: 400;
    }


    .about-seller-action{
      width: 100%; 
      padding-top: 5%;
      align-items: center;
      justify-content:end;
      min-height: 100px;
      text-align: end;
    }

    .about-seller-action h5{
      font-weight: 700;
      margin-right: auto;

    }
    
    /* .fixed-proposal{
      position: fixed;
      top: 25%;
      right: 4.6%;
    }
    .footer-fixed-proposal{
      position: absolute;
      bottom:0%;
    } */

    .fixed-company-details{
      position: fixed; 
      top: 40%;
      right: 2.6%;
    }
    .footer-fixed-company-details{
      position: absolute;
      bottom:0%;
    }

    .about-seller-card-container-mobile{
      display: none;
    }


    @media only screen and (max-width:991px) {
      
     .top-header{
      margin-top: 50px;
      padding: 45px 20px 15px 20px;
    }
      .job-title{ 
        height: 180px;
        padding-top: 20px;
        padding: 50px 20px 50px 20px;
      }


    

      .bottom-section{
        display: block;
      }
      
      .left-bottom-section{
        width: 100%;
      }

      .job-info li{
        padding-top: 5px;
        margin-top: 10px;
        font-size: 13px;
        min-width: 180px; 
      
      } 

      .job-info span{
      font-weight: 600;
      margin-left:10px;
      font-size: 14px;
      
    }

    .job-info p{
      font-size: 11px; 
      margin-left:35px;
    }


      .job-info i{
      margin-top:10px;
      font-size: 15px;
      }

      .right-bottom-section{
        width: 100%;
      }
    
      .attachments li{
     font-size: 13px;
     width: 180px;
     margin-left: 10px; 
   }

    .about-seller-card-container{
    display: none;}

   .fixed-proposal{
      position: fixed;
      top: 92%;
      right: 0%;
      height: 130px;
      width: 100%;  
    }

         
   .top-submit-proposal span{
    font-size: 16px;
   }

   .top-submit-proposal a{
    margin-top: -15px;
   }


    .fixed-company-details{
      display: none; 
    }

    .about-seller-card-container-mobile{ 
      display:block;
    margin-top: 20px;
   margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-bottom: 50px;
    min-height: fit-content;
    
    }

    }
 

    
    @media only screen and (max-width:520px) {
      
      .top-header{
       margin-top: 50px;
       display: block;
       width: 100%;
       align-items:center;
       padding: 45px 20px 15px 20px;
     }

     .top-header-options{
       margin-top: 10px;
       margin-right:3%;
       display: flex;
     }

     .job-info{
      padding: 0px 5px 0px 0px;
     }

     .job-info li{
      padding-left: 5px;
      padding-right: 2px;
        margin-top: 10px;
        font-size: 13px;
        margin-left: 0px;
        min-width: 150px; 
      
      } 

      .job-info span{
      font-weight: 600;
      font-size: 13px;
      
    }

    .job-info p{
      font-size: 11px; 
      margin-left:43px;
    }


      .job-info i{
      margin-top:10px;
      font-size: 20px;
      }


      .attachments h4{
    margin-left: 2px;
   }

   
   
   .attachments li{
    margin-top: 10px;
   }

   .attachments span{
    font-weight: 600;
    font-size: 16px;
  }

  .attachments p{
    font-size: 13px; 
  }


   .attachments i{
    margin-left: 40px;
    font-weight: 200;
    color: rgba(14, 157, 228, 0.3);
    margin-top:10px;
    font-size: 25px;
   }     
        `}</style>
      </Head>




      
      <div class="top-header">

        <nav aria-label="breadcrumb">
            <ol class="mb-0 breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">
               Business Details
              </li>
            </ol>
          </nav>
        <div class="top-header-options">
          <li> <a href="#"> Share</a><i class="bi bi-share-fill"></i></li> 
           <li>  <a href="#">Save</a> <i class="bi bi-suit-heart"></i> </li>
        </div>

      </div>



      <div class="job-title rounded ">

        <h2>Food Delivery Mobile App on IOS and Android </h2>
         <div class="title-info">
                <li><i class="bi bi-geo-alt-fill"></i> <span>Los Angeles </span>  </li>
                <li><i class="bi bi-calendar-date-fill"></i> <span> 11 November 2011</span>  </li>
                <li><i class="bi bi-eye-fill"></i> <span>Views  </span> </li>
                <li><i class="bi bi-collection-fill"></i> <span> Long-Term</span> </li>
        </div>
      </div>



      
      <div class="bottom-section">

        <div class="left-bottom-section">
        <div class="job-info">
          <li class="bg-secondary rounded"><i class="bi ms-2 bi-collection-fill"></i> <span>Project Location Type</span> <br/> <p>On-site</p> </li>
          <li class="bg-secondary rounded"><i class="bi ms-2 bi-geo-alt-fill"></i> <span>Location</span> <br/> <p> Los Angeles </p>  </li>
            <li class="bg-secondary rounded"><i class="bi ms-2 bi-calendar-date-fill"></i> <span>Start Date </span> <br/> <p>11 November 2011</p>  </li>
            <li class="bg-secondary rounded"><i class="bi ms-2 bi-eye-fill"></i> <span>Views  </span> <br/> <p>24</p> </li>
            <li class="bg-secondary rounded"><i class="bi ms-2 bi-collection-fill"></i> <span>Job Type</span> <br/> <p> Long-Term</p> </li> 
            <li class="bg-secondary rounded"><i class="bi ms-2 bi-calendar-date-fill"></i> <span> Duration</span> <br/> <p>2 Years</p>  </li> 
      </div> 


      <div class="project-description">

        <h4>Project</h4>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi quam explicabo vel porro voluptatum perspiciatis
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam laboriosam maxime maiores quibusdam? At ea tempore aut neque officiis sit deleniti, eaque libero, 
          corrupti mollitia illum doloribus laborum tenetur. incidunt corrupti cumque aspernatur, Lorem ipsum dolor sit,
          </p>
          <p> amet consectetur adipisicing elit. Accusamus beatae ab voluptatibus quasi, ratione necessitatibus, facilis quia repudiandae neque commodi eveniet blanditiis quas eaque. 
          Delectus nam molestiae ab odit minus. nobis quo sed voluptatibus libero! Facilis odio totam maxime expedita!</p>
      </div>


      {/* <!-- <div class="attachments-container"> */}
        <h4>Attachments</h4>

      <div class="attachments">

        <li class="bg-secondary rounded"><p> <span>Information</span> <br/> PDF</p><i class="bi bi-collection-fill"></i>  </li> 
        <li class="bg-secondary rounded">  <p> <span> Project</span> <br/>PDF</p> <i class="bi bi-calendar-date-fill"></i> </li> 
          </div>

      {/* </div> --> */}

      <div class="skills-required-container">
         <h4>Skills Required</h4>
         <div class="skills-required">      
          <a class="btn btn-sm  rounded-pill" href="#">Adobe photoshop</a>
          <a class="btn btn-sm  rounded-pill" href="#">Html</a>
          <a class="btn btn-sm  rounded-pill" href="#">Python</a>
          <a class="btn btn-sm  rounded-pill" href="#">Css</a>
      </div>
    </div>


      {/* <!-- <div class="send-proposal"> */}
        <h4>Send Your Proposal</h4>

        <div class="row">
          <div class="col">
            <label for="inputEmail1" class="form-label">Price</label>
            <input type="number" class="form-control" placeholder="Price" aria-label="Price"/>
          </div>
          <div class="col">
            <label for="inputEmail2" class="form-label">Estimated Hours</label>
            <input type="number" class="form-control" placeholder="Estimated Hours" aria-label="Estimated Hours"/>
          </div> 
          
          <div class="col col-12">
            <label for="inputEmail3" class="form-label">Cover Letter</label>
            <textarea type="text" class="form-control" placeholder="Cover Letter" aria-label="Cover Letter" style={{minHeight: "200px;"}}> </textarea>
          </div>
          <a href="#" class="btn btn-md btn-primary">Submit a Proposal</a>
        </div>
        {/* </div> --> */}


   </div>


      <div class="right-bottom-section">
    	{/* <!-- Your page content here -->  */}
        <div class="top-submit-proposal bg-secondary rounded"  id="scroll-proposal">
          <span>$89 - $99</span>
          <p>Long Term</p>
          <a href="#" class="btn ms-auto me-auto btn-primary">Submit Proposal</a>
        </div>
   



           {/* <!-- company details card  --> */}
           <div class="about-seller-card-container bg-secondary rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3" id="scroll-company-details">
            <div class="about-seller-card">
              <div class="about-seller-image">
                <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg" alt="Componay logo"/>
               <div class="about-seller-body">
                     <h5>DesignBlue</h5>
                    <h6>Open Project - 1</h6>
                    <p> <i class="me-2 mb-2 fs-5 bi bi-star-fill"></i> 9.9 <span> 0 Reviews</span> </p>
                </div> </div>                     
                <div class="about-seller-action">
                    <div class="list-info">
                       <li> <span>Location </span> <p>New York</p> </li>
                        <li> <span>Employees </span> <p>20-50</p> </li>
                        <li> <span>Categories </span> <p>Business</p> </li>
               </div>        
               <a href={`${config.Business_Profile}`} class="btn bg-primary btn-mg col-12">View Company<i class="bi ms-1 fs-4 bi-arrow-up-right"></i></a>
          
              </div>

            </div>




          </div>

 

          {/* <!-- company details card  --> */}
          <div class=" about-seller-card-container-mobile mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
            <div class="about-seller-card">
              <div class="about-seller-image">
                <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg" alt="Componay logo"/>
               <div class="about-seller-body">
                     <h5>DesignBlue</h5>
                    <h6>Open Project - 1</h6>
                    <p> <i class="me-2 mb-2 fs-5 bi bi-star-fill"></i> 9.9 <span> 0 Reviews</span> </p>
                </div> </div>                     
                <div class="about-seller-action">
                    <div class="list-info">
                       <li> <span>Location </span> <p>New York</p> </li>
                        <li> <span>Employees </span> <p>20-50</p> </li>
                        <li> <span>Categories </span> <p>Business</p> </li>
               </div>        
               <a href={`${config.Business_Profile}`} class="btn bg-primary btn-mg col-12">View Company<i class="bi ms-1 fs-4 bi-arrow-up-right"></i></a>
          
              </div></div>

            </div>




          </div>
          
        
        
    </div>









      
    </Layout>

  )

}