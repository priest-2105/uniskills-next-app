// Load NEXT.JS related packages
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link.js';

// Import the APPs layout component, to be used to struct this page
import Layout from './layout/public_layout_1.js';

// Bring in the config file
import config from '../config.js';



 
export default function Business_Profile() {

    
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

  .body{
    padding-top: 100px;
  }

  .top-description{
    background-image: url('./assets/img/business-details/pexels-photo-1437908-scaled.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 90%;
    overflow: hidden;
    margin-left: auto;
    align-items: center;
    margin-right: auto;
    height: 400px;
    position: relative;
    display: flex;
  }

  /* .top-description::before {
    content: "";
    display:flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 255, 0.3); 
    } */

  .top-description-spinners{
    position: absolute;
    background-color: rgba(255, 255, 255,0.5);
    width: 200px; 
    height:200px;
    transform:rotate(0deg) ;
    animation-iteration-count: infinite;
    animation-duration: 25s;
    animation-name:top-description-spinners-animation;
  }

  @keyframes top-description-spinners-animation {
    from{transform:rotate(0deg) ;}
    to{transform:rotate(370deg) ; }
  }

  .top-description-spinner-1{
    top: -10%;
    right: -5%;
  }

  

  .top-description-spinner-2{
    bottom: -10%;
    left: -5%;
  }
  
    .top-description-contents{
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
  }

  .top-description-business-details{
    margin-bottom: -100px;
    align-items: center;
    display: flex;
    overflow: visible;
  }
  
  .top-description-business-details-info{
    color: #3f7fca;
    display:block;
    padding-left: 20px;
  }



  .top-description-business-details img{
    height:100px;
    width: 120px;
    border-radius: 10px;
  }

  .top-description-business-details h4{
    font-size: 25px;
    margin-top: 20px;
    /* color: #303b44; */
  }
  .top-description-business-details p{
    font-size: 18px;
    /* color: #282e32; */
    font-weight: 500;
  }




  .top-description-options{
    margin-left: auto;
    width: fit-content;
    margin-bottom: 20px;
    align-self:flex-end;
    display: block;
    margin-right: 0px;
  }

  .top-description-options-socials a{
    text-decoration: none;
    margin-right: 10px;
    font-size: 18px;
    background-color:white;
    padding: 7px 5px 7px 8px;
  }

  .top-description-options-button{
    background-color: transparent;
    color:black;
    margin-left: 30px;
    padding: 15px 30px 15px 30px;
  }

  .top-description-options-button:hover{
    background-color: steelblue;
  }



  .bottom-section{
    width: 100%;
    height: fit-content;
    display: flex;
    padding: 50px 20px 20px 50px;
  }

  .bottom-section-left{
    width: 32%;
    height:fit-content;
  }

  .profile-info-mobile{
    display:none;
  } 
  
  .profile-info-header{
    font-weight: 700;
  }

  .profile-info-header span{
      border-bottom: 5px solid rgb(22, 129, 217);
  }

  .profile-info-overview{
    margin-top: 20px;
    padding-top: 20px;
    border: 1px solid grey;
    height: fit-content;
    width: 100%;
    display: block;
  }

  .profile-info-overview ul{
    border-bottom: 1px solid grey;
    display: flex;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .profile-info-overview li{
    display: block;
    padding-top: 10px;
    margin-left: 10px;
  }li{list-style-type: none;}

  .profile-info-overview i{
    font-size: 20px;
  }


  .achievements-mobile{
    display: none;
  }

  .achievement-gallery img{
    height: 160px;
    width:120px;
    margin-right: 20px;
    margin-top: 10px;
  }

  .achievement-office-photos-img{
    height: 130px;
    margin-top: 10px;
    margin-right: 20px;
    width:150px;
  }





  /* job list style DO NOT  TOUCH  */



  .job-list-card-container rounded{
    width:100%;
    min-height: 250px;
  }

  .job-list-card{
    display: block;
    height: 100%;
    width: 100%;
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
    width: 100%; 
    border-bottom: 1.5px solid rgba(211, 201, 201, 0.5);
    padding-bottom: 5px;
    
  }
  .list-info{
    padding-left: 10px;
    display: flex;
    max-width: 350px;
    flex-wrap: wrap;
  }
  .list-info li{
    line-height: 15px;
    margin-bottom: 10px;
    padding-right: 10px;
    margin-right: 5px;
    list-style-type: none;
    border-right: 2px solid rgba(211, 201, 201, 0.5);
  }

  .job-list-body p{
    margin-left: 10px;
    font-size: 15px;
    font-weight: 400;
  }

  .skills{
    align-items: center;
    display: flex;
  }

  .skills span{
    color:white;
    font-size: 13px;
    padding: 10px 15px 10px 15px;
    background-color:#3f7fca;
    margin-right: 10px;
    border-radius: 20px;
  }

  .job-list-action{
    width: 100%; 
    padding-top: 5%;
    align-items: center;
    justify-content:start;
    min-height: 100px;
    text-align: start;
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

  .job-list-card-container rounded{
    height:fit-content ;
    width: 100%;
  }


    .job-list-card{
    width: 100%;
    display: block;
    height: fit-content;
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
    height: 50px;
    width: 60px;
  }
  .list-info{
    padding-left:0px;
  }

  .job-list-body p{
    margin-left: 0px;
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



/*END OF JOB LIST STYLE (DO NOT TOUCH) */

  
  .bottom-section-right{
    width: 68%;
    height:fit-content;
    padding:  0px 10px 0px 20px;
  }
  
  .about-company h4{
    font-weight: 700;
  }

  .about-company p{
    font-size: 18px;
    color: #8b8e97;
  }

  .responsibilities{
    margin-top: 40px;
    padding-bottom: 10px;
  }

  .responsibilities h4{
      font-weight: 700;
  }

  .responsibilities i{
    color: aqua;
    font-size: 25px;
  }


  .responsibilities li{
    font-size: 20px;
    margin-top: 15px;
  }

  .video{
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .video h4{
    width: fit-content;
    border-bottom: 5px solid rgb(22, 129, 217);
  }

  .video iframe{
    border-radius: 10px;
  }



  .office-photos h4{
    width: fit-content;
    border-bottom: 5px solid rgb(22, 129, 217);
  }

  .gallery{
    display:flex;
    flex-wrap: wrap;
  }
  .gallery img{
    height: 140px;
    width:180px;
    margin-right: 20px;
    margin-top: 10px;
  }

  .office-photos-img{
    height: 140px;
    margin-top: 10px;
    margin-right: 20px;
    width:180px;
  }


  
.review-container{
    padding-top:50px;
}

.review-img img{
border-radius: 50%;
height: 60px;
width: 60px;

}

li{list-style-type: none;}

.progress-bar-container{
    width: 300px;
    height: 15px;
    border-radius: 20px;
    background-color: red;
}

.progress-bar{
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #3f7fca !important;
}

@media only screen and (max-width:768px) {
  
  .top-description-business-details{
    display: block;
  }

  .top-description-contents{
    width: 100%;
    height: 100%;
  }

  /* .top-description-options{
    width: 100%;
  } */

  .bottom-section{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding: 20px 10px 10px 20px;
  }

  
  .bottom-section-left{
    width: 100%;
    height:fit-content;
  }

        
  .bottom-section-right{
    width: 100%;
    height:fit-content;
    padding:  0px 0px 0px 0px;
  }

  .profile-info-mobile{
    display: block;
  } 
  
  .achievements-mobile{
    display: block;
  }

  .profile-info-desktop{
    display: none;
  } 
  .achievements-desktop{
    display: none;
  }

  
  .gallery{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .gallery img{
    height: 120px;
    width:140px;
    /* margin-right: 10px; */
    margin-top: 10px;
  }

  .office-photos-img{
    height: 120px;
    margin-top: 10px;
    /* margin-right: 10px; */
    width:140px;
  }
  
        `}</style>
      </Head>




      
      <div class="body">

        
<div class="top-description rounded">
  <div class="top-description-spinners rounded top-description-spinner-1"></div>
  <div class="top-description-spinners rounded top-description-spinner-2"></div>


    <div class="top-description-contents">
  <div class="top-description-business-details">
    <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer3.jpg" alt=""/>
    <div class="top-description-business-details-info">  <h4>DS Printings</h4>
    <p> <i class="bi bi-pin-map-fill"></i> Los Angeles </p>
    {/* <!-- <a href="https://oursite.com">https://oursite.com</a> --> */}
    </div>

  </div>

  <div class="top-description-options">
   <ul class="top-description-options-socials">
   <a href="#" class="rounded-pill"> <i class="bi bi-facebook"></i> </a>
    <a href="#" class="rounded-pill"> <i class="bi bi-instagram"></i> </a>
    <a href="#" class="rounded-pill"> <i class="bi bi-twitter"></i> </a>
    <a href="#" class="rounded-pill"> <i class="bi bi-whatsapp"></i> </a>
    <a href="#" class="rounded-pill"> <i class="bi bi-pinterest"></i> </a> </ul>

    <a href="#review" class="top-description-options-button btn-sm btn-primary btn">Add Review</a>
</div>


</div>
</div>



<div class="bottom-section">

<div class="bottom-section-left">

<div class="profile-info profile-info-desktop">

  <h4 class="profile-info-header"><span> Profile</span> Info</h4>

  <div class="profile-info-overview rounded">

     <ul>
      <li> <i class="bi bi-cash-stack"></i> </li>
      <li>
        <span>Offered Salary</span>
          <p>2000</p>
      </li>
    </ul> 

    <ul>
      <li> <i class="bi bi-phone-fill"></i> </li>
      <li>
        <span>Phone</span>
          <p>+244-890-5333</p>
      </li>
    </ul>


    <ul>
      <li> <i class="bi bi-envelope"></i> </li>
      <li>
        <span>Email</span>
          <p>Johnblackson@gmail.com</p>
      </li>
    </ul>


    <ul>
      <li> <i class="bi bi-pin-map-fill"></i> </li>
      <li>
        <span>Adress</span>
          <p>25 John mcarthy Way, LA</p>
      </li>
    </ul>



  </div>

</div>



<div class="achievements achievements-desktop mt-5 pb-5">

  <h4>Achievements</h4>

  <div class="achievement-list">

          {/* <!-- Image gallery --> */}
<div class="achievement-gallery gallery">


<a href="#" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
   
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
    Saving Planet Earth Award
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="./assets/img/awards/Planet_earth__Earth_Icon__Earth__globe__world__sphere_png-removebg-preview.png" class="d-block rounded-4" alt="Image caption"/>
</a>




<a href="#" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
   
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
Best In Laying Off
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="./assets/img//awards/Top_Trophy_3d_Transparent_PNG__3d_Top_1_Trophy__3d__Top_1__Top_One_PNG_Image_For_Free_Download-removebg-preview.png" class="d-block rounded-4" alt="Image caption"/>
</a>



 <a href="#" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
   
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
      Golden gLobe 
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="./assets/img/awards/Triple_Star_Figure_on_wood_base-removebg-preview.png" class="d-block rounded-4" alt="Image caption"/>
</a> 




<a href="#" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
   
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
     Top 5 Best In The World 2019 
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="./assets/img/awards/1st_Place_Vector_Design_Images__Top_Trophy_1st_Place_Gold_3d_Realistic__Top__Trophy__1st_PNG_Image_For_Free_Download-removebg-preview.png" class="d-block rounded-4" alt="Image caption"/>
</a>



</div>

      


  </div>
</div>







<div class="available-jobs mt-5">


  <h4>Available Jobs</h4>



  <div class="job-listing-body pt-3 pb-5">


                      {/* <!-- list card  --> */}
  <div class="job-list-card-container rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">

    <div class="job-list-card">

      <div class="job-list-image">
        <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/11/employer11.jpg" alt="Componay logo"/>
      </div>                     
        <div class="job-list-body">

          <h6>PHP, Javascript Projects for Beginners</h6>
          <div class="list-info">
            <li> <i class="bi bi-geo-alt-fill"></i>New York</li>
            <li><i class="bi bi-calendar-week-fill"></i> Posted 3 months ago</li>
            <li class="border-0"><i class="bi bi-rocket-takeoff-fill"></i> 5 proposals</li>
          </div>

          <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
    
          <div class="skills">
            <span>PHP</span>
            <span>Artist</span>
            <span>Computer</span> +3
          </div>
        </div>
        <div class="job-list-action">
            <h5>$50 - $550</h5>
            <p>Fixed</p>
            <a href="./business-details.html" class="btn bg-primary btn-md">See More<i class="bi ms-1 fs-4 bi-arrow-up-right"></i></a>
        </div>
      </div>

    </div>
    {/* <!-- end of list card   --> */}








    {/* <!-- list card  --> */}
  <div class="job-list-card-container rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">

  <div class="job-list-card">

    <div class="job-list-image">
      <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg" alt="Componay logo"/>
    </div>                     
      <div class="job-list-body">

        <h6>Website Designer Required For My Project</h6>
        <div class="list-info">
          <li> <i class="bi bi-geo-alt-fill"></i>Los Angeles</li>
          <li><i class="bi bi-calendar-week-fill"></i> Posted 5 months ago</li>
          <li class="border-0"><i class="bi bi-rocket-takeoff-fill"></i> 3 proposals</li>
        </div>

        <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
  
        <div class="skills">
          <span>Adobe xd</span>
          <span>Artist</span>
          <span>Computer</span> +3
        </div>
      </div>
      <div class="job-list-action">
          <h5>$500 - $550</h5>
          <p>Fixed</p>
          <a href="./business-details.html" class="btn bg-primary btn-md">See More<i class="bi ms-1 fs-4 bi-arrow-up-right"></i></a>
      </div>
    </div>

  </div>
  {/* <!-- end of list card   --> */}






                 {/* <!-- list card  --> */}
  <div class="job-list-card-container rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">

    <div class="job-list-card">

      <div class="job-list-image">
        <Image src="https://demoapus1.com/freeio/wp-content/uploads/2022/11/employer11.jpg" alt="Componay logo"/>
      </div>                     
        <div class="job-list-body">

          <h6>PHP, Javascript Projects for Beginners</h6>
          <div class="list-info">
            <li> <i class="bi bi-geo-alt-fill"></i>New York</li>
            <li><i class="bi bi-calendar-week-fill"></i> Posted 3 months ago</li>
            <li class="border-0"><i class="bi bi-rocket-takeoff-fill"></i> 5 proposals</li>
          </div>

          <p> Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!.....</p>
    
          <div class="skills">
            <span>PHP</span>
            <span>Artist</span>
            <span>Computer</span> +3
          </div>
        </div>
        <div class="job-list-action">
            <h5>$50 - $550</h5>
            <p>Fixed</p>
            <a href="./business-details.html" class="btn bg-primary btn-md">See More<i class="bi ms-1 fs-4 bi-arrow-up-right"></i></a>
        </div>
      </div>

    </div>
    {/* <!-- end of list card   --> */}

      {/* <!-- view more job from compnany  --> */}
      <a href="./company-jobs.html" style={{"backgroundColor":"#3f7fca"}} class="btn col-12 btn-md">View More</a>



</div>


</div>



</div>







<div class="bottom-section-right">





<div class="profile-info-mobile profile-info">

  <h4 class="profile-info-header"><span> Profile</span> Info</h4>

  <div class="profile-info-overview rounded">

     <ul>
      <li> <i class="bi bi-cash-stack"></i> </li>
      <li>
      <span>Company size</span>
          <p>200 - 500</p>
      </li>
    </ul> 

    <ul>
      <li> <i class="bi bi-phone-fill"></i> </li>
      <li>
        <span>Phone</span>
          <p>+244-890-5333</p>
      </li>
    </ul>


    <ul>
      <li> <i class="bi bi-envelope"></i> </li>
      <li>
        <span>Email</span>
          <p>Johnblackson@gmail.com</p>
      </li>
    </ul>


    <ul>
      <li> <i class="bi bi-pin-map-fill"></i> </li>
      <li>
        <span>Adress</span>
          <p>25 John mcarthy Way, LA</p>
      </li>
    </ul>



  </div>

</div>




<div class="about-company mt-5">

  <h4>About Company</h4>

  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, sapiente. Necessitatibus eos corporis dolorem dignissimos dolor perferendis, neque consectetur 
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eum officia perferendis deserunt consequuntur quibusdam optio repellat sed, esse dolorem quisquam cupiditate aut accusantium cumque facere quos, maiores consectetur odit.
     oquasi molestiae totam v , ad laudantium explicabo saepe nesciunt.</p>

     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta animi vel pariatur eligendi. Error, quo magni offici
      is at mollitia recusandae nam eligendi ea delectus nemo magnam similique, rerum qupsum dolor, sit amet consectetur adipisicing elit. Optio, sapiente. Necessitatibus eos corporis dolorem dignissimos dolor perferendis, neque consectetur 
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eum officia perferendis deserunt consequuntur quibusdam optio repellat sed, esse dolorem quisquam cupiditate aut accusantium cumque facere quos, maiores consectetur odit.
       oquasi molestiae totam voluptatibus ex modi, ad laudantium explicabo saepe nesciuntam?</p>

</div>



<div class="responsibilities pb-5">

  <h4>Responsibilities</h4>

  <li><i class="bi bi-check-lg"></i> Establish and promote design guidelines, best practices and standards.</li>
  <li><i class="bi bi-check-lg"></i> Accurately estimate design tickets during planning sessions.</li>
  <li><i class="bi bi-check-lg"></i> Partnering with product and engineering to translate business and user goals</li>
</div>







<div class="achievements achievements-mobile mt-5 pb-5">

  <h4>Achievements</h4>

  <div class="achievement-list">

          {/* <!-- Image gallery --> */}
<div class="achievement-gallery gallery">


<a href="#" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
   
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
    Saving Planet Earth Award
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="./assets/img/awards/Planet_earth__Earth_Icon__Earth__globe__world__sphere_png-removebg-preview.png" class="d-block rounded-4" alt="Image caption"/>
</a>




<a href="#" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
   
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
Best In Laying Off
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="./assets/img//awards/Top_Trophy_3d_Transparent_PNG__3d_Top_1_Trophy__3d__Top_1__Top_One_PNG_Image_For_Free_Download-removebg-preview.png" class="d-block rounded-4" alt="Image caption"/>
</a>



<a href="#" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
   
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
      Golden gLobe 
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="./assets/img/awards/Triple_Star_Figure_on_wood_base-removebg-preview.png" class="d-block rounded-4" alt="Image caption"/>
</a>




<a href="#" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
   
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
     Top 5 Best In The World 2019 
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="./assets/img/awards/1st_Place_Vector_Design_Images__Top_Trophy_1st_Place_Gold_3d_Realistic__Top__Trophy__1st_PNG_Image_For_Free_Download-removebg-preview.png" class="d-block rounded-4" alt="Image caption"/>
</a>



</div>

      


  </div>
</div>






<div class="office-photos">

<h4>Office-photos</h4>

    {/* <!-- Image gallery --> */}
<div class="gallery">


<a href="https://media.istockphoto.com/id/507839056/photo/entrance-of-the-modern-building.jpg?s=612x612&w=0&k=20&c=xisBw5l5pgwTp21vS2sN4T_IkPSRtK0Yin56u0DXu9I=" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
     Entrance
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="https://media.istockphoto.com/id/507839056/photo/entrance-of-the-modern-building.jpg?s=612x612&w=0&k=20&c=xisBw5l5pgwTp21vS2sN4T_IkPSRtK0Yin56u0DXu9I=" class="d-block rounded-4" alt="Image caption"/>
</a>




<a href="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
      Managers Office
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" class="d-block rounded-4" alt="Image caption"/>
</a>



<a href="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
     Office Space
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block rounded-4" alt="Image caption"/>
</a>




<a href="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
     Dining
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" class="d-block rounded-4" alt="Image caption"/>
</a>





<a href="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
      Meeting Confrence Room
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block rounded-4" alt="Image caption"/>
</a>



<a href="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
      Recreational Area
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block rounded-4" alt="Image caption"/>
</a>




<a href="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
      General Wrokspace
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" class="d-block rounded-4" alt="Image caption"/>
</a>




<a href="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="gallery-item d-block card-hover">
  <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
      Confrence Space
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
  </div>
  <Image src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block rounded-4" alt="Image caption"/>
</a>


</div>


</div>






<div class="video">

<h4>Video</h4>
<iframe width="100%" height="415" src="https://www.youtube-nocookie.com/embed/udMULpKcnn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>


  

<div class="review-container" id="review">


{/* <!-- REVIEWS --> */}
<div class="container-xxl mb-5">
<div class="col-12 col-xl-12">
<div class="reveiw_header_container d-lg-flex d-md-flex" style={{alignItems:" flex-start"}}>
  <div class="client_review ">
  <h2 class="fs-2 mb-3">Company Reviews</h2>
  <span class="ms-1">4.5</span>
  <p>50 reviews</p>
  </div>
          <div class="">
              
              {/* <!-- NEW CODE--> */}
  <div class="ms-5">
  <div class="client_review_star mt-1 d-flex flex-row" style={{alignItems:"center"}}>
      <span class="star_text fs-3 fw-3">5</span>
      <i class="bi bi-star-fill ms-1 fs-5"></i>
      <div class="progress-bar-container ms-2">
          <div class="progress-ms-2" style={{height: "100%", width: "95%"}} ></div>
          </div>
      <span class="ms-2">0</span>
          </div>
      
          <div class="client_review_star mt-1 d-flex flex-row" style={{alignItems: "center"}}>
              <span class="star_text fs-3 fw-3">4</span>
              <i class="bi bi-star-fill ms-1 fs-5"></i>
          <div class="progress-bar-container ms-2">
          <div class="progress-bar " style={{height: "100%", width: "70%;"}}></div>
          </div>
              <span class="ms-2">0</span>
          </div>
      
          <div class="client_review_star mt-1 d-flex flex-row" style={{alignItems: "center"}}>
              <span class="star_text fs-3 fw-3">3</span>
              <i class="bi bi-star-fill ms-1 fs-5"></i>
          <div class="progress-bar-container ms-2">
          <div class="progress-bar " style={{height: "100%", width: "49%;"}}></div>
          </div>
              <span class="ms-2">0</span>
          </div>
      
          <div class="client_review_star mt-1 d-flex flex-row" style={{alignItems: "center"}}>
              <span class="star_text fs-3 fw-3">2</span>
              <i class="bi bi-star-fill ms-1 fs-5"></i>
          <div class="progress-bar-container ms-2">
          <div class="progress-bar " style={{ height: "100%", width: "15%"}} ></div>
          </div>
              <span class="ms-2">0</span>
          </div>
      
          <div class="client_review_star mt-1 d-flex flex-row" style={{alignItems: "center"}}>
              <span class="star_text fs-3 fw-3">1&nbsp;</span>
              <i class="bi bi-star-fill ms-1 fs-5"></i>
          <div class="progress-bar-container ms-2">
          <div class="progress-bar " style={{height: "15px", width: "4%"}} ></div>
          </div>
              <span class="ms-2">0</span>
      
          </div>
          </div>
          {/* <!-- NEW CODE ENDS--> */}

          </div>
      
      
      
          {/* <!-- NEW CODE ENDS--> */}
      
      
      </div> <div class="mt-3">
          {/* <!-- <button class="nav-link text-light rounded review-report" style="background-color:#6610f2;">Create review</button> --> */}
          </div>
          <div class="col-12">
          <hr />
          <div>
              <div class="py-2">
              <div class="d-flex flex-row align-items-center">
                  <div class="review-img me-3">
                  <Image
                      src="./assets/img/avatar/12.jpg"
                      alt="ifeanyi image"
                      class="review_image"
                  />
                  </div>

                  <div class="user-info d-block align-items-center">
                  <p class="review_name mt-5">Ifeanyi Okeakwalam</p>
                  <li class="qualification">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <span class="ps-2">2 weeks ago</span>
                  </li>
                  </div>

                  <div class="ms-auto">
                  <i class="bi bi-share"></i>
                  </div>
              </div>

              <div class="pt-3 review_text">
                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere vel reprehenderit cumque architecto cupiditate
                  distinctio earum repudiandae adipisci.
                  </p>
              </div>
              <div class=" ">
              
                  <button class="btn">.
                  <i class="bi bi-hand-thumbs-up-fill"></i> 
                  </button>
                  <button class="btn ms-2">.
                  <i class="bi bi-hand-thumbs-down-fill"></i> 
                  </button>
                  <button class="btn review-report ms-2">
                  Report this review
                  </button>
              </div>
              </div>
              <hr />
          </div>

              <div class="pt-3 review_text">
                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere vel reprehenderit cumque architecto cupiditate
                  distinctio earum repudiandae adipisci.
                  </p>
              </div>
              <div class="review_helpful">
              
                  <button class="btn">.
                  <i class="bi bi-hand-thumbs-up-fill "></i> 
                  </button>
                  <button class="btn ms-2">
                  <i class="bi bi-hand-thumbs-down-fill "></i> 
                  (100)
                  </button>
                  <button class="btn review-report ms-2 ">
                  Report this review
                  </button>
              </div>
              </div>
              <hr />
          </div>

          <div>
              <div class="py-2">
              <div class="d-flex flex-row align-items-center">
                  <div class="review-img me-3">
                  <Image
                      src="./assets/img/avatar/11.jpg"
                      alt="ifeanyi image"
                      class="review_image"
                  />
                  </div>

                  <div class="user-info d-block align-items">
                  <p class="review_name mt-5">Ifeanyi Okeakwalam</p>
                  <li class="qualification">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                      <i class="bi bi-star"></i>
                      <span class="ps-2">2 weeks ago</span>
                  </li>
                  </div>

                  <div class="ms-auto">
                  <i class="bi bi-share"></i>
                  </div>
              </div>

              <div class="pt-3 review_text">
                  <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere vel reprehenderit cumque architecto cupiditate
                  distinctio earum repudiandae adipisci.
                  </p>
              </div>
              <div class="review_helpful">
              
                  <button class="btn">.
                  <i class="bi bi-hand-thumbs-up-fill"></i> 
                  </button>
                  <button class="btn ms-2">
                  <i class="bi bi-hand-thumbs-down-fill"></i> 
                  (100)
                  </button>
                  <button class="btn review-report ms-2">
                  Report this review.
                  </button>
              </div>
              </div>
              <hr />
          </div>

          <div class="row">
              <nav
              class="pagination-nav w-auto mx-auto my-5"
              aria-label="Page navigation example pagination-bottom"
              >
              <ul class="pagination" >
                  <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                      <i class="bi bi-chevron-left"></i>
                      </span>
                  </a>
                  </li>
                  <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                  <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                  <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                  <a class="page-link" href="#">4</a>
                  </li>
                  <li class="page-item">
                  <a class="page-link" href="#">5</a>
                  </li>
                  <li class="page-item">
                      <a class="page-link" href="#">...</a>
                  </li> 
                  <li class="page-item">
                      <a class="page-link" href="#">509</a>
                  </li>   
                  <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                      <i class="bi bi-chevron-right"></i>
                      </span>
                  </a>
                  </li>
              </ul>
             </nav>
          </div>
  </div>
          </div>
          </div>
</div>
</div>







      {/* <!-- Gallery grid with enabled thumbnails --> */}
            <div class="gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" data-thumbnails="true">

            {/* <!-- Item --> */}
            <div class="col">
            <a href="assets/img/landing/corporate/features/01.jpg" class="gallery-item d-block card-hover">
            <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden zindex-2 opacity-0">
            <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
            <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
              Image #1
            </div>
            <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
            </div>
            <Image src="assets/img/landing/corporate/features/01.jpg" class="d-block rounded-4" alt="Image #1"/>
            </a>
            </div>

        {/* <!-- Item --> */}
        <div class="col">
        <a href="assets/img/landing/corporate/features/02.jpg" class="gallery-item d-block card-hover">
        <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden zindex-2 opacity-0">
        <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
        <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
          Image #2
        </div>
        <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
        </div>
        <Image src="assets/img/landing/corporate/features/02.jpg" class="d-block rounded-4" alt="Image #2"/>
        </a>
        </div>

    {/* <!-- Item --> */}
    <div class="col">
    <a href="assets/img/landing/corporate/features/03.jpg" class="gallery-item d-block card-hover">
    <div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden zindex-2 opacity-0">
    <i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
    <div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
      Image #3
    </div>
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
    </div>
    <Image src="assets/img/landing/corporate/features/03.jpg" class="d-block rounded-4" alt="Image #3s"/>
    </a>
    </div>
    </div>









      
    </Layout>

  )

}