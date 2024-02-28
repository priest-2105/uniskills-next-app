"use strict";(()=>{var s={};s.id=6840,s.ids=[6840],s.modules={1801:(s,i,e)=>{e.r(i),e.d(i,{config:()=>y,default:()=>j,getServerSideProps:()=>v,getStaticPaths:()=>w,getStaticProps:()=>u,reportWebVitals:()=>k,routeModule:()=>I,unstable_getServerProps:()=>M,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>z,unstable_getStaticProps:()=>_});var t={};e.r(t),e.d(t,{default:()=>g});var o=e(7093),a=e(5244),r=e(1323),l=e(1106),n=e(2166),d=e(997),c=e(5675),p=e.n(c),x=e(968),h=e.n(x);e(5384);var m=e(6477),b=e(4376),f=e.n(b);function g(){let s={page_title:"Find Jobs | "+f().APP_NAME};return(0,d.jsxs)(m.default,{initials:s,children:[d.jsx(h(),{children:d.jsx("style",{children:`
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
     background-image: url('./assets/img/find-jobs/Job hunt-bro.png');
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
  
        `})}),(0,d.jsxs)("div",{class:"body",children:[(0,d.jsxs)("div",{class:"top-description rounded",children:[d.jsx("div",{class:"top-description-spinners rounded top-description-spinner-1"}),d.jsx("div",{class:"top-description-spinners rounded top-description-spinner-2"}),(0,d.jsxs)("div",{class:"top-description-contents",children:[(0,d.jsxs)("div",{class:"top-description-business-details",children:[d.jsx(p(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer3.jpg",alt:""}),(0,d.jsxs)("div",{class:"top-description-business-details-info",children:["  ",d.jsx("h4",{children:"DS Printings"}),(0,d.jsxs)("p",{children:[" ",d.jsx("i",{class:"bi bi-pin-map-fill"})," Los Angeles "]})]})]}),(0,d.jsxs)("div",{class:"top-description-options",children:[(0,d.jsxs)("ul",{class:"top-description-options-socials",children:[(0,d.jsxs)("a",{href:"#",class:"rounded-pill",children:[" ",d.jsx("i",{class:"bi bi-facebook"})," "]}),(0,d.jsxs)("a",{href:"#",class:"rounded-pill",children:[" ",d.jsx("i",{class:"bi bi-instagram"})," "]}),(0,d.jsxs)("a",{href:"#",class:"rounded-pill",children:[" ",d.jsx("i",{class:"bi bi-twitter"})," "]}),(0,d.jsxs)("a",{href:"#",class:"rounded-pill",children:[" ",d.jsx("i",{class:"bi bi-whatsapp"})," "]}),(0,d.jsxs)("a",{href:"#",class:"rounded-pill",children:[" ",d.jsx("i",{class:"bi bi-pinterest"})," "]})," "]}),d.jsx("a",{href:"#review",class:"top-description-options-button btn-sm btn-primary btn",children:"Add Review"})]})]})]}),(0,d.jsxs)("div",{class:"bottom-section",children:[(0,d.jsxs)("div",{class:"bottom-section-left",children:[(0,d.jsxs)("div",{class:"profile-info profile-info-desktop",children:[(0,d.jsxs)("h4",{class:"profile-info-header",children:[d.jsx("span",{children:" Profile"})," Info"]}),(0,d.jsxs)("div",{class:"profile-info-overview rounded",children:[(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-cash-stack"})," "]}),(0,d.jsxs)("li",{children:[d.jsx("span",{children:"Offered Salary"}),d.jsx("p",{children:"2000"})]})]}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-phone-fill"})," "]}),(0,d.jsxs)("li",{children:[d.jsx("span",{children:"Phone"}),d.jsx("p",{children:"+244-890-5333"})]})]}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-envelope"})," "]}),(0,d.jsxs)("li",{children:[d.jsx("span",{children:"Email"}),d.jsx("p",{children:"Johnblackson@gmail.com"})]})]}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-pin-map-fill"})," "]}),(0,d.jsxs)("li",{children:[d.jsx("span",{children:"Adress"}),d.jsx("p",{children:"25 John mcarthy Way, LA"})]})]})]})]}),(0,d.jsxs)("div",{class:"achievements achievements-desktop mt-5 pb-5",children:[d.jsx("h4",{children:"Achievements"}),d.jsx("div",{class:"achievement-list",children:(0,d.jsxs)("div",{class:"achievement-gallery gallery",children:[(0,d.jsxs)("a",{href:"#",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Saving Planet Earth Award"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"./assets/img/awards/Planet_earth__Earth_Icon__Earth__globe__world__sphere_png-removebg-preview.png",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"#",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Best In Laying Off"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"./assets/img//awards/Top_Trophy_3d_Transparent_PNG__3d_Top_1_Trophy__3d__Top_1__Top_One_PNG_Image_For_Free_Download-removebg-preview.png",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"#",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Golden gLobe"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"./assets/img/awards/Triple_Star_Figure_on_wood_base-removebg-preview.png",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"#",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Top 5 Best In The World 2019"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"./assets/img/awards/1st_Place_Vector_Design_Images__Top_Trophy_1st_Place_Gold_3d_Realistic__Top__Trophy__1st_PNG_Image_For_Free_Download-removebg-preview.png",class:"d-block rounded-4",alt:"Image caption"})]})]})})]}),(0,d.jsxs)("div",{class:"available-jobs mt-5",children:[d.jsx("h4",{children:"Available Jobs"}),(0,d.jsxs)("div",{class:"job-listing-body pt-3 pb-5",children:[d.jsx("div",{class:"job-list-card-container rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,d.jsxs)("div",{class:"job-list-card",children:[d.jsx("div",{class:"job-list-image",children:d.jsx(p(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/11/employer11.jpg",alt:"Componay logo"})}),(0,d.jsxs)("div",{class:"job-list-body",children:[d.jsx("h6",{children:"PHP, Javascript Projects for Beginners"}),(0,d.jsxs)("div",{class:"list-info",children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-geo-alt-fill"}),"New York"]}),(0,d.jsxs)("li",{children:[d.jsx("i",{class:"bi bi-calendar-week-fill"})," Posted 3 months ago"]}),(0,d.jsxs)("li",{class:"border-0",children:[d.jsx("i",{class:"bi bi-rocket-takeoff-fill"})," 5 proposals"]})]}),d.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,d.jsxs)("div",{class:"skills",children:[d.jsx("span",{children:"PHP"}),d.jsx("span",{children:"Artist"}),d.jsx("span",{children:"Computer"})," +3"]})]}),(0,d.jsxs)("div",{class:"job-list-action",children:[d.jsx("h5",{children:"$50 - $550"}),d.jsx("p",{children:"Fixed"}),(0,d.jsxs)("a",{href:"./business-details.html",class:"btn bg-primary btn-md",children:["See More",d.jsx("i",{class:"bi ms-1 fs-4 bi-arrow-up-right"})]})]})]})}),d.jsx("div",{class:"job-list-card-container rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,d.jsxs)("div",{class:"job-list-card",children:[d.jsx("div",{class:"job-list-image",children:d.jsx(p(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg",alt:"Componay logo"})}),(0,d.jsxs)("div",{class:"job-list-body",children:[d.jsx("h6",{children:"Website Designer Required For My Project"}),(0,d.jsxs)("div",{class:"list-info",children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-geo-alt-fill"}),"Los Angeles"]}),(0,d.jsxs)("li",{children:[d.jsx("i",{class:"bi bi-calendar-week-fill"})," Posted 5 months ago"]}),(0,d.jsxs)("li",{class:"border-0",children:[d.jsx("i",{class:"bi bi-rocket-takeoff-fill"})," 3 proposals"]})]}),d.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,d.jsxs)("div",{class:"skills",children:[d.jsx("span",{children:"Adobe xd"}),d.jsx("span",{children:"Artist"}),d.jsx("span",{children:"Computer"})," +3"]})]}),(0,d.jsxs)("div",{class:"job-list-action",children:[d.jsx("h5",{children:"$500 - $550"}),d.jsx("p",{children:"Fixed"}),(0,d.jsxs)("a",{href:"./business-details.html",class:"btn bg-primary btn-md",children:["See More",d.jsx("i",{class:"bi ms-1 fs-4 bi-arrow-up-right"})]})]})]})}),d.jsx("div",{class:"job-list-card-container rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,d.jsxs)("div",{class:"job-list-card",children:[d.jsx("div",{class:"job-list-image",children:d.jsx(p(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/11/employer11.jpg",alt:"Componay logo"})}),(0,d.jsxs)("div",{class:"job-list-body",children:[d.jsx("h6",{children:"PHP, Javascript Projects for Beginners"}),(0,d.jsxs)("div",{class:"list-info",children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-geo-alt-fill"}),"New York"]}),(0,d.jsxs)("li",{children:[d.jsx("i",{class:"bi bi-calendar-week-fill"})," Posted 3 months ago"]}),(0,d.jsxs)("li",{class:"border-0",children:[d.jsx("i",{class:"bi bi-rocket-takeoff-fill"})," 5 proposals"]})]}),d.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,d.jsxs)("div",{class:"skills",children:[d.jsx("span",{children:"PHP"}),d.jsx("span",{children:"Artist"}),d.jsx("span",{children:"Computer"})," +3"]})]}),(0,d.jsxs)("div",{class:"job-list-action",children:[d.jsx("h5",{children:"$50 - $550"}),d.jsx("p",{children:"Fixed"}),(0,d.jsxs)("a",{href:"./business-details.html",class:"btn bg-primary btn-md",children:["See More",d.jsx("i",{class:"bi ms-1 fs-4 bi-arrow-up-right"})]})]})]})}),d.jsx("a",{href:"./company-jobs.html",style:{backgroundColor:"#3f7fca"},class:"btn col-12 btn-md",children:"View More"})]})]})]}),(0,d.jsxs)("div",{class:"bottom-section-right",children:[(0,d.jsxs)("div",{class:"profile-info-mobile profile-info",children:[(0,d.jsxs)("h4",{class:"profile-info-header",children:[d.jsx("span",{children:" Profile"})," Info"]}),(0,d.jsxs)("div",{class:"profile-info-overview rounded",children:[(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-cash-stack"})," "]}),(0,d.jsxs)("li",{children:[d.jsx("span",{children:"Company size"}),d.jsx("p",{children:"200 - 500"})]})]}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-phone-fill"})," "]}),(0,d.jsxs)("li",{children:[d.jsx("span",{children:"Phone"}),d.jsx("p",{children:"+244-890-5333"})]})]}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-envelope"})," "]}),(0,d.jsxs)("li",{children:[d.jsx("span",{children:"Email"}),d.jsx("p",{children:"Johnblackson@gmail.com"})]})]}),(0,d.jsxs)("ul",{children:[(0,d.jsxs)("li",{children:[" ",d.jsx("i",{class:"bi bi-pin-map-fill"})," "]}),(0,d.jsxs)("li",{children:[d.jsx("span",{children:"Adress"}),d.jsx("p",{children:"25 John mcarthy Way, LA"})]})]})]})]}),(0,d.jsxs)("div",{class:"about-company mt-5",children:[d.jsx("h4",{children:"About Company"}),d.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, sapiente. Necessitatibus eos corporis dolorem dignissimos dolor perferendis, neque consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eum officia perferendis deserunt consequuntur quibusdam optio repellat sed, esse dolorem quisquam cupiditate aut accusantium cumque facere quos, maiores consectetur odit. oquasi molestiae totam v , ad laudantium explicabo saepe nesciunt."}),d.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta animi vel pariatur eligendi. Error, quo magni offici is at mollitia recusandae nam eligendi ea delectus nemo magnam similique, rerum qupsum dolor, sit amet consectetur adipisicing elit. Optio, sapiente. Necessitatibus eos corporis dolorem dignissimos dolor perferendis, neque consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eum officia perferendis deserunt consequuntur quibusdam optio repellat sed, esse dolorem quisquam cupiditate aut accusantium cumque facere quos, maiores consectetur odit. oquasi molestiae totam voluptatibus ex modi, ad laudantium explicabo saepe nesciuntam?"})]}),(0,d.jsxs)("div",{class:"responsibilities pb-5",children:[d.jsx("h4",{children:"Responsibilities"}),(0,d.jsxs)("li",{children:[d.jsx("i",{class:"bi bi-check-lg"})," Establish and promote design guidelines, best practices and standards."]}),(0,d.jsxs)("li",{children:[d.jsx("i",{class:"bi bi-check-lg"})," Accurately estimate design tickets during planning sessions."]}),(0,d.jsxs)("li",{children:[d.jsx("i",{class:"bi bi-check-lg"})," Partnering with product and engineering to translate business and user goals"]})]}),(0,d.jsxs)("div",{class:"achievements achievements-mobile mt-5 pb-5",children:[d.jsx("h4",{children:"Achievements"}),d.jsx("div",{class:"achievement-list",children:(0,d.jsxs)("div",{class:"achievement-gallery gallery",children:[(0,d.jsxs)("a",{href:"#",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Saving Planet Earth Award"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"./assets/img/awards/Planet_earth__Earth_Icon__Earth__globe__world__sphere_png-removebg-preview.png",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"#",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Best In Laying Off"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"./assets/img//awards/Top_Trophy_3d_Transparent_PNG__3d_Top_1_Trophy__3d__Top_1__Top_One_PNG_Image_For_Free_Download-removebg-preview.png",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"#",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Golden gLobe"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"./assets/img/awards/Triple_Star_Figure_on_wood_base-removebg-preview.png",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"#",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 achievement-office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Top 5 Best In The World 2019"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"./assets/img/awards/1st_Place_Vector_Design_Images__Top_Trophy_1st_Place_Gold_3d_Realistic__Top__Trophy__1st_PNG_Image_For_Free_Download-removebg-preview.png",class:"d-block rounded-4",alt:"Image caption"})]})]})})]}),(0,d.jsxs)("div",{class:"office-photos",children:[d.jsx("h4",{children:"Office-photos"}),(0,d.jsxs)("div",{class:"gallery",children:[(0,d.jsxs)("a",{href:"https://media.istockphoto.com/id/507839056/photo/entrance-of-the-modern-building.jpg?s=612x612&w=0&k=20&c=xisBw5l5pgwTp21vS2sN4T_IkPSRtK0Yin56u0DXu9I=",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Entrance"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"https://media.istockphoto.com/id/507839056/photo/entrance-of-the-modern-building.jpg?s=612x612&w=0&k=20&c=xisBw5l5pgwTp21vS2sN4T_IkPSRtK0Yin56u0DXu9I=",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Managers Office"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Office Space"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Dining"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Meeting Confrence Room"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Recreational Area"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"General Wrokspace"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",class:"d-block rounded-4",alt:"Image caption"})]}),(0,d.jsxs)("a",{href:"https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Confrence Space"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",class:"d-block rounded-4",alt:"Image caption"})]})]})]}),(0,d.jsxs)("div",{class:"video",children:[d.jsx("h4",{children:"Video"}),d.jsx("iframe",{width:"100%",height:"415",src:"https://www.youtube-nocookie.com/embed/udMULpKcnn8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]}),d.jsx("div",{class:"review-container",id:"review",children:(0,d.jsxs)("div",{class:"container-xxl mb-5",children:[(0,d.jsxs)("div",{class:"col-12 col-xl-12",children:[(0,d.jsxs)("div",{class:"reveiw_header_container d-lg-flex d-md-flex",style:{alignItems:" flex-start"},children:[(0,d.jsxs)("div",{class:"client_review ",children:[d.jsx("h2",{class:"fs-2 mb-3",children:"Company Reviews"}),d.jsx("span",{class:"ms-1",children:"4.5"}),d.jsx("p",{children:"50 reviews"})]}),d.jsx("div",{class:"",children:(0,d.jsxs)("div",{class:"ms-5",children:[(0,d.jsxs)("div",{class:"client_review_star mt-1 d-flex flex-row",style:{alignItems:"center"},children:[d.jsx("span",{class:"star_text fs-3 fw-3",children:"5"}),d.jsx("i",{class:"bi bi-star-fill ms-1 fs-5"}),d.jsx("div",{class:"progress-bar-container ms-2",children:d.jsx("div",{class:"progress-ms-2",style:{height:"100%",width:"95%"}})}),d.jsx("span",{class:"ms-2",children:"0"})]}),(0,d.jsxs)("div",{class:"client_review_star mt-1 d-flex flex-row",style:{alignItems:"center"},children:[d.jsx("span",{class:"star_text fs-3 fw-3",children:"4"}),d.jsx("i",{class:"bi bi-star-fill ms-1 fs-5"}),d.jsx("div",{class:"progress-bar-container ms-2",children:d.jsx("div",{class:"progress-bar ",style:{height:"100%",width:"70%;"}})}),d.jsx("span",{class:"ms-2",children:"0"})]}),(0,d.jsxs)("div",{class:"client_review_star mt-1 d-flex flex-row",style:{alignItems:"center"},children:[d.jsx("span",{class:"star_text fs-3 fw-3",children:"3"}),d.jsx("i",{class:"bi bi-star-fill ms-1 fs-5"}),d.jsx("div",{class:"progress-bar-container ms-2",children:d.jsx("div",{class:"progress-bar ",style:{height:"100%",width:"49%;"}})}),d.jsx("span",{class:"ms-2",children:"0"})]}),(0,d.jsxs)("div",{class:"client_review_star mt-1 d-flex flex-row",style:{alignItems:"center"},children:[d.jsx("span",{class:"star_text fs-3 fw-3",children:"2"}),d.jsx("i",{class:"bi bi-star-fill ms-1 fs-5"}),d.jsx("div",{class:"progress-bar-container ms-2",children:d.jsx("div",{class:"progress-bar ",style:{height:"100%",width:"15%"}})}),d.jsx("span",{class:"ms-2",children:"0"})]}),(0,d.jsxs)("div",{class:"client_review_star mt-1 d-flex flex-row",style:{alignItems:"center"},children:[d.jsx("span",{class:"star_text fs-3 fw-3",children:"1\xa0"}),d.jsx("i",{class:"bi bi-star-fill ms-1 fs-5"}),d.jsx("div",{class:"progress-bar-container ms-2",children:d.jsx("div",{class:"progress-bar ",style:{height:"15px",width:"4%"}})}),d.jsx("span",{class:"ms-2",children:"0"})]})]})})]})," ",d.jsx("div",{class:"mt-3"}),(0,d.jsxs)("div",{class:"col-12",children:[d.jsx("hr",{}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{class:"py-2",children:[(0,d.jsxs)("div",{class:"d-flex flex-row align-items-center",children:[d.jsx("div",{class:"review-img me-3",children:d.jsx(p(),{src:"./assets/img/avatar/12.jpg",alt:"ifeanyi image",class:"review_image"})}),(0,d.jsxs)("div",{class:"user-info d-block align-items-center",children:[d.jsx("p",{class:"review_name mt-5",children:"Ifeanyi Okeakwalam"}),(0,d.jsxs)("li",{class:"qualification",children:[d.jsx("i",{class:"bi bi-star-fill"}),d.jsx("i",{class:"bi bi-star-fill"}),d.jsx("i",{class:"bi bi-star-fill"}),d.jsx("i",{class:"bi bi-star"}),d.jsx("i",{class:"bi bi-star"}),d.jsx("span",{class:"ps-2",children:"2 weeks ago"})]})]}),d.jsx("div",{class:"ms-auto",children:d.jsx("i",{class:"bi bi-share"})})]}),d.jsx("div",{class:"pt-3 review_text",children:d.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel reprehenderit cumque architecto cupiditate distinctio earum repudiandae adipisci."})}),(0,d.jsxs)("div",{class:" ",children:[(0,d.jsxs)("button",{class:"btn",children:[".",d.jsx("i",{class:"bi bi-hand-thumbs-up-fill"})]}),(0,d.jsxs)("button",{class:"btn ms-2",children:[".",d.jsx("i",{class:"bi bi-hand-thumbs-down-fill"})]}),d.jsx("button",{class:"btn review-report ms-2",children:"Report this review"})]})]}),d.jsx("hr",{})]}),d.jsx("div",{class:"pt-3 review_text",children:d.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel reprehenderit cumque architecto cupiditate distinctio earum repudiandae adipisci."})}),(0,d.jsxs)("div",{class:"review_helpful",children:[(0,d.jsxs)("button",{class:"btn",children:[".",d.jsx("i",{class:"bi bi-hand-thumbs-up-fill "})]}),(0,d.jsxs)("button",{class:"btn ms-2",children:[d.jsx("i",{class:"bi bi-hand-thumbs-down-fill "}),"(100)"]}),d.jsx("button",{class:"btn review-report ms-2 ",children:"Report this review"})]})]}),d.jsx("hr",{})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{class:"py-2",children:[(0,d.jsxs)("div",{class:"d-flex flex-row align-items-center",children:[d.jsx("div",{class:"review-img me-3",children:d.jsx(p(),{src:"./assets/img/avatar/11.jpg",alt:"ifeanyi image",class:"review_image"})}),(0,d.jsxs)("div",{class:"user-info d-block align-items",children:[d.jsx("p",{class:"review_name mt-5",children:"Ifeanyi Okeakwalam"}),(0,d.jsxs)("li",{class:"qualification",children:[d.jsx("i",{class:"bi bi-star-fill"}),d.jsx("i",{class:"bi bi-star-fill"}),d.jsx("i",{class:"bi bi-star-fill"}),d.jsx("i",{class:"bi bi-star"}),d.jsx("i",{class:"bi bi-star"}),d.jsx("span",{class:"ps-2",children:"2 weeks ago"})]})]}),d.jsx("div",{class:"ms-auto",children:d.jsx("i",{class:"bi bi-share"})})]}),d.jsx("div",{class:"pt-3 review_text",children:d.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vel reprehenderit cumque architecto cupiditate distinctio earum repudiandae adipisci."})}),(0,d.jsxs)("div",{class:"review_helpful",children:[(0,d.jsxs)("button",{class:"btn",children:[".",d.jsx("i",{class:"bi bi-hand-thumbs-up-fill"})]}),(0,d.jsxs)("button",{class:"btn ms-2",children:[d.jsx("i",{class:"bi bi-hand-thumbs-down-fill"}),"(100)"]}),d.jsx("button",{class:"btn review-report ms-2",children:"Report this review."})]})]}),d.jsx("hr",{})]}),d.jsx("div",{class:"row",children:d.jsx("nav",{class:"pagination-nav w-auto mx-auto my-5","aria-label":"Page navigation example pagination-bottom",children:(0,d.jsxs)("ul",{class:"pagination",children:[d.jsx("li",{class:"page-item",children:d.jsx("a",{class:"page-link",href:"#","aria-label":"Previous",children:d.jsx("span",{"aria-hidden":"true",children:d.jsx("i",{class:"bi bi-chevron-left"})})})}),d.jsx("li",{class:"page-item active",children:d.jsx("a",{class:"page-link",href:"#",children:"1"})}),d.jsx("li",{class:"page-item",children:d.jsx("a",{class:"page-link",href:"#",children:"2"})}),d.jsx("li",{class:"page-item",children:d.jsx("a",{class:"page-link",href:"#",children:"3"})}),d.jsx("li",{class:"page-item",children:d.jsx("a",{class:"page-link",href:"#",children:"4"})}),d.jsx("li",{class:"page-item",children:d.jsx("a",{class:"page-link",href:"#",children:"5"})}),d.jsx("li",{class:"page-item",children:d.jsx("a",{class:"page-link",href:"#",children:"..."})}),d.jsx("li",{class:"page-item",children:d.jsx("a",{class:"page-link",href:"#",children:"509"})}),d.jsx("li",{class:"page-item",children:d.jsx("a",{class:"page-link",href:"#","aria-label":"Next",children:d.jsx("span",{"aria-hidden":"true",children:d.jsx("i",{class:"bi bi-chevron-right"})})})})]})})})]})})]})]})]}),(0,d.jsxs)("div",{class:"gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4","data-thumbnails":"true",children:[d.jsx("div",{class:"col",children:(0,d.jsxs)("a",{href:"assets/img/landing/corporate/features/01.jpg",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Image #1"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"assets/img/landing/corporate/features/01.jpg",class:"d-block rounded-4",alt:"Image #1"})]})}),d.jsx("div",{class:"col",children:(0,d.jsxs)("a",{href:"assets/img/landing/corporate/features/02.jpg",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Image #2"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"assets/img/landing/corporate/features/02.jpg",class:"d-block rounded-4",alt:"Image #2"})]})}),d.jsx("div",{class:"col",children:(0,d.jsxs)("a",{href:"assets/img/landing/corporate/features/03.jpg",class:"gallery-item d-block card-hover",children:[(0,d.jsxs)("div",{class:"d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden zindex-2 opacity-0",children:[d.jsx("i",{class:"ai-zoom-in fs-2 text-white position-relative zindex-2"}),d.jsx("div",{class:"position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3",children:"Image #3"}),d.jsx("div",{class:"position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"})]}),d.jsx(p(),{src:"assets/img/landing/corporate/features/03.jpg",class:"d-block rounded-4",alt:"Image #3s"})]})})]})]})}let j=(0,r.l)(t,"default"),u=(0,r.l)(t,"getStaticProps"),w=(0,r.l)(t,"getStaticPaths"),v=(0,r.l)(t,"getServerSideProps"),y=(0,r.l)(t,"config"),k=(0,r.l)(t,"reportWebVitals"),_=(0,r.l)(t,"unstable_getStaticProps"),z=(0,r.l)(t,"unstable_getStaticPaths"),P=(0,r.l)(t,"unstable_getStaticParams"),M=(0,r.l)(t,"unstable_getServerProps"),q=(0,r.l)(t,"unstable_getServerSideProps"),I=new o.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/business-profile",pathname:"/business-profile",bundlePath:"",filename:""},components:{App:n.default,Document:l.default},userland:t})},2785:s=>{s.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:s=>{s.exports=require("next/head")},5384:s=>{s.exports=require("next/link.js")},6689:s=>{s.exports=require("react")},6405:s=>{s.exports=require("react-dom")},997:s=>{s.exports=require("react/jsx-runtime")},1017:s=>{s.exports=require("path")}};var i=require("../webpack-runtime.js");i.C(s);var e=s=>i(i.s=s),t=i.X(0,[6859,8165,3773,1833,6477],()=>e(1801));module.exports=t})();