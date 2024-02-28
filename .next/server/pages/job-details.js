"use strict";(()=>{var i={};i.id=1745,i.ids=[1745],i.modules={1997:(i,e,s)=>{s.r(e),s.d(e,{config:()=>v,default:()=>u,getServerSideProps:()=>w,getStaticPaths:()=>y,getStaticProps:()=>j,reportWebVitals:()=>k,routeModule:()=>_,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>L,unstable_getStaticParams:()=>z,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>P});var t={};s.r(t),s.d(t,{default:()=>f});var a=s(7093),n=s(5244),o=s(1323),l=s(1106),r=s(2166),p=s(997),d=s(5675),c=s.n(d),x=s(968),h=s.n(x);s(5384);var b=s(6477),m=s(4376),g=s.n(m);function f(){let i={page_title:"Find Jobs | "+g().APP_NAME};return(0,p.jsxs)(b.default,{initials:i,children:[p.jsx(h(),{children:p.jsx("style",{children:`

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
        `})}),(0,p.jsxs)("div",{class:"top-header",children:[p.jsx("nav",{"aria-label":"breadcrumb",children:(0,p.jsxs)("ol",{class:"mb-0 breadcrumb",children:[p.jsx("li",{class:"breadcrumb-item",children:p.jsx("a",{href:"index.html",children:"Home"})}),p.jsx("li",{class:"breadcrumb-item active","aria-current":"page",children:"Business Details"})]})}),(0,p.jsxs)("div",{class:"top-header-options",children:[(0,p.jsxs)("li",{children:[" ",p.jsx("a",{href:"#",children:" Share"}),p.jsx("i",{class:"bi bi-share-fill"})]}),(0,p.jsxs)("li",{children:["  ",p.jsx("a",{href:"#",children:"Save"})," ",p.jsx("i",{class:"bi bi-suit-heart"})," "]})]})]}),(0,p.jsxs)("div",{class:"job-title rounded ",children:[p.jsx("h2",{children:"Food Delivery Mobile App on IOS and Android "}),(0,p.jsxs)("div",{class:"title-info",children:[(0,p.jsxs)("li",{children:[p.jsx("i",{class:"bi bi-geo-alt-fill"})," ",p.jsx("span",{children:"Los Angeles "}),"  "]}),(0,p.jsxs)("li",{children:[p.jsx("i",{class:"bi bi-calendar-date-fill"})," ",p.jsx("span",{children:" 11 November 2011"}),"  "]}),(0,p.jsxs)("li",{children:[p.jsx("i",{class:"bi bi-eye-fill"})," ",p.jsx("span",{children:"Views  "})," "]}),(0,p.jsxs)("li",{children:[p.jsx("i",{class:"bi bi-collection-fill"})," ",p.jsx("span",{children:" Long-Term"})," "]})]})]}),(0,p.jsxs)("div",{class:"bottom-section",children:[(0,p.jsxs)("div",{class:"left-bottom-section",children:[(0,p.jsxs)("div",{class:"job-info",children:[(0,p.jsxs)("li",{class:"bg-secondary rounded",children:[p.jsx("i",{class:"bi ms-2 bi-collection-fill"})," ",p.jsx("span",{children:"Project Location Type"})," ",p.jsx("br",{})," ",p.jsx("p",{children:"On-site"})," "]}),(0,p.jsxs)("li",{class:"bg-secondary rounded",children:[p.jsx("i",{class:"bi ms-2 bi-geo-alt-fill"})," ",p.jsx("span",{children:"Location"})," ",p.jsx("br",{})," ",p.jsx("p",{children:" Los Angeles "}),"  "]}),(0,p.jsxs)("li",{class:"bg-secondary rounded",children:[p.jsx("i",{class:"bi ms-2 bi-calendar-date-fill"})," ",p.jsx("span",{children:"Start Date "})," ",p.jsx("br",{})," ",p.jsx("p",{children:"11 November 2011"}),"  "]}),(0,p.jsxs)("li",{class:"bg-secondary rounded",children:[p.jsx("i",{class:"bi ms-2 bi-eye-fill"})," ",p.jsx("span",{children:"Views  "})," ",p.jsx("br",{})," ",p.jsx("p",{children:"24"})," "]}),(0,p.jsxs)("li",{class:"bg-secondary rounded",children:[p.jsx("i",{class:"bi ms-2 bi-collection-fill"})," ",p.jsx("span",{children:"Job Type"})," ",p.jsx("br",{})," ",p.jsx("p",{children:" Long-Term"})," "]}),(0,p.jsxs)("li",{class:"bg-secondary rounded",children:[p.jsx("i",{class:"bi ms-2 bi-calendar-date-fill"})," ",p.jsx("span",{children:" Duration"})," ",p.jsx("br",{})," ",p.jsx("p",{children:"2 Years"}),"  "]})]}),(0,p.jsxs)("div",{class:"project-description",children:[p.jsx("h4",{children:"Project"}),p.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sequi quam explicabo vel porro voluptatum perspiciatis Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam laboriosam maxime maiores quibusdam? At ea tempore aut neque officiis sit deleniti, eaque libero, corrupti mollitia illum doloribus laborum tenetur. incidunt corrupti cumque aspernatur, Lorem ipsum dolor sit,"}),p.jsx("p",{children:" amet consectetur adipisicing elit. Accusamus beatae ab voluptatibus quasi, ratione necessitatibus, facilis quia repudiandae neque commodi eveniet blanditiis quas eaque. Delectus nam molestiae ab odit minus. nobis quo sed voluptatibus libero! Facilis odio totam maxime expedita!"})]}),p.jsx("h4",{children:"Attachments"}),(0,p.jsxs)("div",{class:"attachments",children:[(0,p.jsxs)("li",{class:"bg-secondary rounded",children:[(0,p.jsxs)("p",{children:[" ",p.jsx("span",{children:"Information"})," ",p.jsx("br",{})," PDF"]}),p.jsx("i",{class:"bi bi-collection-fill"}),"  "]}),(0,p.jsxs)("li",{class:"bg-secondary rounded",children:["  ",(0,p.jsxs)("p",{children:[" ",p.jsx("span",{children:" Project"})," ",p.jsx("br",{}),"PDF"]})," ",p.jsx("i",{class:"bi bi-calendar-date-fill"})," "]})]}),(0,p.jsxs)("div",{class:"skills-required-container",children:[p.jsx("h4",{children:"Skills Required"}),(0,p.jsxs)("div",{class:"skills-required",children:[p.jsx("a",{class:"btn btn-sm  rounded-pill",href:"#",children:"Adobe photoshop"}),p.jsx("a",{class:"btn btn-sm  rounded-pill",href:"#",children:"Html"}),p.jsx("a",{class:"btn btn-sm  rounded-pill",href:"#",children:"Python"}),p.jsx("a",{class:"btn btn-sm  rounded-pill",href:"#",children:"Css"})]})]}),p.jsx("h4",{children:"Send Your Proposal"}),(0,p.jsxs)("div",{class:"row",children:[(0,p.jsxs)("div",{class:"col",children:[p.jsx("label",{for:"inputEmail1",class:"form-label",children:"Price"}),p.jsx("input",{type:"number",class:"form-control",placeholder:"Price","aria-label":"Price"})]}),(0,p.jsxs)("div",{class:"col",children:[p.jsx("label",{for:"inputEmail2",class:"form-label",children:"Estimated Hours"}),p.jsx("input",{type:"number",class:"form-control",placeholder:"Estimated Hours","aria-label":"Estimated Hours"})]}),(0,p.jsxs)("div",{class:"col col-12",children:[p.jsx("label",{for:"inputEmail3",class:"form-label",children:"Cover Letter"}),p.jsx("textarea",{type:"text",class:"form-control",placeholder:"Cover Letter","aria-label":"Cover Letter",style:{minHeight:"200px;"},children:" "})]}),p.jsx("a",{href:"#",class:"btn btn-md btn-primary",children:"Submit a Proposal"})]})]}),(0,p.jsxs)("div",{class:"right-bottom-section",children:[(0,p.jsxs)("div",{class:"top-submit-proposal bg-secondary rounded",id:"scroll-proposal",children:[p.jsx("span",{children:"$89 - $99"}),p.jsx("p",{children:"Long Term"}),p.jsx("a",{href:"#",class:"btn ms-auto me-auto btn-primary",children:"Submit Proposal"})]}),p.jsx("div",{class:"about-seller-card-container bg-secondary rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",id:"scroll-company-details",children:(0,p.jsxs)("div",{class:"about-seller-card",children:[(0,p.jsxs)("div",{class:"about-seller-image",children:[p.jsx(c(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg",alt:"Componay logo"}),(0,p.jsxs)("div",{class:"about-seller-body",children:[p.jsx("h5",{children:"DesignBlue"}),p.jsx("h6",{children:"Open Project - 1"}),(0,p.jsxs)("p",{children:[" ",p.jsx("i",{class:"me-2 mb-2 fs-5 bi bi-star-fill"})," 9.9 ",p.jsx("span",{children:" 0 Reviews"})," "]})]})," "]}),(0,p.jsxs)("div",{class:"about-seller-action",children:[(0,p.jsxs)("div",{class:"list-info",children:[(0,p.jsxs)("li",{children:[" ",p.jsx("span",{children:"Location "})," ",p.jsx("p",{children:"New York"})," "]}),(0,p.jsxs)("li",{children:[" ",p.jsx("span",{children:"Employees "})," ",p.jsx("p",{children:"20-50"})," "]}),(0,p.jsxs)("li",{children:[" ",p.jsx("span",{children:"Categories "})," ",p.jsx("p",{children:"Business"})," "]})]}),(0,p.jsxs)("a",{href:`${g().Business_Profile}`,class:"btn bg-primary btn-mg col-12",children:["View Company",p.jsx("i",{class:"bi ms-1 fs-4 bi-arrow-up-right"})]})]})]})}),p.jsx("div",{class:" about-seller-card-container-mobile mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,p.jsxs)("div",{class:"about-seller-card",children:[(0,p.jsxs)("div",{class:"about-seller-image",children:[p.jsx(c(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg",alt:"Componay logo"}),(0,p.jsxs)("div",{class:"about-seller-body",children:[p.jsx("h5",{children:"DesignBlue"}),p.jsx("h6",{children:"Open Project - 1"}),(0,p.jsxs)("p",{children:[" ",p.jsx("i",{class:"me-2 mb-2 fs-5 bi bi-star-fill"})," 9.9 ",p.jsx("span",{children:" 0 Reviews"})," "]})]})," "]}),(0,p.jsxs)("div",{class:"about-seller-action",children:[(0,p.jsxs)("div",{class:"list-info",children:[(0,p.jsxs)("li",{children:[" ",p.jsx("span",{children:"Location "})," ",p.jsx("p",{children:"New York"})," "]}),(0,p.jsxs)("li",{children:[" ",p.jsx("span",{children:"Employees "})," ",p.jsx("p",{children:"20-50"})," "]}),(0,p.jsxs)("li",{children:[" ",p.jsx("span",{children:"Categories "})," ",p.jsx("p",{children:"Business"})," "]})]}),(0,p.jsxs)("a",{href:`${g().Business_Profile}`,class:"btn bg-primary btn-mg col-12",children:["View Company",p.jsx("i",{class:"bi ms-1 fs-4 bi-arrow-up-right"})]})]})]})})]})]})]})}let u=(0,o.l)(t,"default"),j=(0,o.l)(t,"getStaticProps"),y=(0,o.l)(t,"getStaticPaths"),w=(0,o.l)(t,"getServerSideProps"),v=(0,o.l)(t,"config"),k=(0,o.l)(t,"reportWebVitals"),P=(0,o.l)(t,"unstable_getStaticProps"),S=(0,o.l)(t,"unstable_getStaticPaths"),z=(0,o.l)(t,"unstable_getStaticParams"),q=(0,o.l)(t,"unstable_getServerProps"),L=(0,o.l)(t,"unstable_getServerSideProps"),_=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/job-details",pathname:"/job-details",bundlePath:"",filename:""},components:{App:r.default,Document:l.default},userland:t})},2785:i=>{i.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:i=>{i.exports=require("next/head")},5384:i=>{i.exports=require("next/link.js")},6689:i=>{i.exports=require("react")},6405:i=>{i.exports=require("react-dom")},997:i=>{i.exports=require("react/jsx-runtime")},1017:i=>{i.exports=require("path")}};var e=require("../webpack-runtime.js");e.C(i);var s=i=>e(e.s=i),t=e.X(0,[6859,8165,3773,1833,6477],()=>s(1997));module.exports=t})();