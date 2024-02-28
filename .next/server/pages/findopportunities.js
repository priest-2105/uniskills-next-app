"use strict";(()=>{var s={};s.id=9357,s.ids=[9357],s.modules={3699:(s,e,c)=>{c.r(e),c.d(e,{config:()=>S,default:()=>k,getServerSideProps:()=>y,getStaticPaths:()=>v,getStaticProps:()=>w,reportWebVitals:()=>P,routeModule:()=>J,unstable_getServerProps:()=>C,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>T,unstable_getStaticPaths:()=>F,unstable_getStaticProps:()=>A});var i={};c.r(i),c.d(i,{default:()=>g});var l=c(7093),t=c(5244),r=c(1323),a=c(1106),o=c(2166),n=c(997),d=c(5675),h=c.n(d),p=c(968),x=c.n(p),m=c(5384),b=c.n(m),f=c(6477),j=c(4376),u=c.n(j);function g(){let s={page_title:"Find Jobs | "+u().APP_NAME};return(0,n.jsxs)(f.default,{initials:s,children:[n.jsx(x(),{children:n.jsx("style",{children:`

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

        
        `})}),(0,n.jsxs)("div",{class:"offcanvas offcanvas-start",tabindex:"-1",id:"filteroffcanvasExample","aria-labelledby":"filteroffcanvasExampleLabel",children:[(0,n.jsxs)("div",{class:"offcanvas-header",children:[n.jsx("h5",{class:"offcanvas-title",id:"filteroffcanvasExampleLabel",children:"Filter"}),n.jsx("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),(0,n.jsxs)("div",{class:"offcanvas-body",children:[n.jsx("h2",{class:"fs-6",children:"Filter your Results"}),(0,n.jsxs)("form",{class:"needs-validation row g-4",novalidate:!0,children:[(0,n.jsxs)("div",{class:"col-lg-10",children:[n.jsx("label",{class:"form-label fs-base",for:"skills",children:"Search by Keywords"}),(0,n.jsxs)("div",{class:"input-group",children:[n.jsx("span",{class:"input-group-text",children:n.jsx("i",{class:"ai-search"})}),n.jsx("input",{type:"text",class:"form-control",placeholder:"Search by Title, Preferences"})]}),n.jsx("div",{class:"invalid-feedback",children:"Please enter a valid keyword"})]}),(0,n.jsxs)("div",{class:"col-lg-10",children:[n.jsx("label",{class:"form-label fs-base",for:"location",children:"Location"}),(0,n.jsxs)("div",{class:"input-group",children:[n.jsx("span",{class:"input-group-text",children:n.jsx("i",{class:"ai-map-pin"})}),n.jsx("input",{type:"text",class:"form-control",placeholder:"Search by Location"})]}),n.jsx("div",{class:"invalid-feedback",children:"Please provide a location!"})]}),(0,n.jsxs)("div",{class:"col-lg-10",children:[n.jsx("label",{class:"form-label fs-base",for:"location",children:"Category"}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Catering"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Music"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Technology"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Food"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Art"})]})]}),(0,n.jsxs)("div",{children:[n.jsx("label",{class:"form-label mt-3 fs-base ",for:"Job type",children:"Job Type"}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch2",checked:!0}),n.jsx("label",{class:"form-check-label",for:"customSwitch2",children:"All"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Freelance"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Full Time"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Internship"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Part Time"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Temporary"})]})]}),(0,n.jsxs)("div",{children:[n.jsx("label",{class:"form-label mt-3 fs-base ",for:"skills",children:"Skills"}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Adobe Photoshop"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Adobe XD"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Android Developer"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Artist"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"   Computer"})]})]}),n.jsx("div",{class:"col-lg-10",children:n.jsx("button",{class:"btn btn-lg btn-primary mt-2",type:"submit",children:"Find Jobs"})})]})]})]}),n.jsx("section",{class:"bg-secondary py-5","data-jarallax":!0,"data-speed":"0.6",children:(0,n.jsxs)("div",{class:"container position-relative pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5",children:[n.jsx("nav",{"aria-label":"breadcrumb",children:(0,n.jsxs)("ol",{class:"pt-lg-3 mb-0 breadcrumb",children:[n.jsx("li",{class:"breadcrumb-item",children:n.jsx("a",{href:"index.html",children:"Home"})}),n.jsx("li",{class:"breadcrumb-item active","aria-current":"page",children:"Find Jobs"})]})}),(0,n.jsxs)("div",{class:"find-jobs-header d-block mt-5 pt-3 ps-lg-5 pe-lg-3 ps-xl-5 pe-xl-3  pe-xs-1 ps-xs-1 pb-3 rounded",children:[n.jsx("h1",{class:"display-6 mt-2 mb-4",children:"Find Jobs"}),n.jsx("div",{class:" col-lg-5 col-md-6 col-sm-8 col-xs-md",children:(0,n.jsxs)("div",{class:"input-group mb-3 input-group-sm",children:[n.jsx("input",{type:"text",class:"form-control",placeholder:"Search for Jobs","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),n.jsx("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",children:"Search"})]})})]})]})}),n.jsx("section",{class:"pt-3 pb-4 px-lg-3",children:n.jsx("div",{class:" py-lg-2 py-xl-4 py-xxl-5",children:(0,n.jsxs)("div",{class:"row mt-1 ps-2  pt-sm-2 pt-md-3 pt-lg-4",children:[(0,n.jsxs)("div",{class:"col-lg-3 desktpp-filter bg-secondary rounded pt-3 ps-3 pe-2 pb-3 mb-5 mb-lg-0",children:[n.jsx("h2",{class:"fs-5",children:"Filter your Results"}),(0,n.jsxs)("form",{class:"needs-validation row g-4",novalidate:!0,children:[(0,n.jsxs)("div",{class:"col-lg-10",children:[n.jsx("label",{class:"form-label fs-base",for:"skills",children:"Search by Keywords"}),(0,n.jsxs)("div",{class:"input-group",children:[n.jsx("span",{class:"input-group-text",children:n.jsx("i",{class:"ai-search"})}),n.jsx("input",{type:"text",class:"form-control",placeholder:"Search by Title, Preferences"})]}),n.jsx("div",{class:"invalid-feedback",children:"Please enter a valid keyword"})]}),(0,n.jsxs)("div",{class:"col-lg-10",children:[n.jsx("label",{class:"form-label fs-base",for:"location",children:"Location"}),(0,n.jsxs)("div",{class:"input-group",children:[n.jsx("span",{class:"input-group-text",children:n.jsx("i",{class:"ai-map-pin"})}),n.jsx("input",{type:"text",class:"form-control",placeholder:"Search by Location"})]}),n.jsx("div",{class:"invalid-feedback",children:"Please provide a location!"})]}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{class:"col-lg-10",children:[n.jsx("label",{class:"form-label fs-base",for:"location",children:"Category"}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Catering"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Music"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Technology"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Food"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Art"})]})]}),(0,n.jsxs)("div",{children:[n.jsx("label",{class:"form-label mt-3 fs-base ",for:"Job type",children:"Job Type"}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch2",checked:!0}),n.jsx("label",{class:"form-check-label",for:"customSwitch2",children:"All"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Freelance"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Full Time"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Internship"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Part Time"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Temporary"})]})]})]}),(0,n.jsxs)("div",{children:[n.jsx("label",{class:"form-label mt-3 fs-base ",for:"skills",children:"Skills"}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Adobe Photoshop"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Adobe XD"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Android Developer"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Artist"})]}),(0,n.jsxs)("div",{class:"form-check form-switch pb-1",children:[n.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),n.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"   Computer"})]})]}),n.jsx("div",{class:"col-lg-10",children:n.jsx("button",{class:"btn btn-lg btn-primary mt-2",type:"submit",children:"Find Jobs"})})]})]}),n.jsx("div",{class:"col-lg-9 col-xl-9 col-sm-12 col-xs-12",children:n.jsx("div",{class:"row row-cols-12 row-cols-sm-12",children:n.jsx("div",{class:"col",children:(0,n.jsxs)("div",{class:"card search-results px-0 border-0 mb-4",children:[(0,n.jsxs)("div",{class:"card-body search-results",children:[(0,n.jsxs)("a",{class:"text-decoration-none filter-header","data-bs-toggle":"offcanvas",href:"#filteroffcanvasExample",role:"button","aria-controls":"filteroffcanvasExample",children:["Filter",n.jsx("i",{class:"bi bi-bar-chart-steps"})]}),(0,n.jsxs)("div",{class:"listing-top",children:[n.jsx("h4",{children:"Selected"}),(0,n.jsxs)("div",{class:"selected-options-container col-12 d-flex",children:[(0,n.jsxs)("div",{class:"selected-options gap-1",children:[(0,n.jsxs)("a",{class:"bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2",children:[n.jsx("span",{class:"text-danger",children:"X"})," Oldest"]}),(0,n.jsxs)("a",{class:"bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2",children:[n.jsx("span",{class:"text-danger",children:"X"})," Newest"]}),(0,n.jsxs)("a",{class:"bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2",children:[n.jsx("span",{class:"text-danger",children:"X"})," Highest"]})]}),n.jsx("div",{class:"clear-options ms-auto",children:n.jsx("a",{href:`/${u().LOGIN}`,class:"text-danger",children:"Clear all"})})]}),(0,n.jsxs)("div",{class:"result-page-list d-flex align-items-center mt-5",children:[n.jsx("p",{children:"Showing 1 - 7 of 9 Result"}),(0,n.jsxs)("div",{class:"option-select col-2 ms-auto",children:[(0,n.jsxs)("select",{class:"form-select bg-transparent text-dark","aria-label":"Default select example",children:[n.jsx("option",{class:"bg-transparent text-dark",selected:!0,children:" Default"}),n.jsx("option",{class:"bg-transparent text-dark",value:"1",children:"One"}),n.jsx("option",{class:"bg-transparent text-dark",value:"2",children:"Two"}),n.jsx("option",{class:"bg-transparent text-dark",value:"3",children:"Three"})]})," "]})]})]}),(0,n.jsxs)("div",{class:"job-listing-body pt-3  ps-lg-3 pe-lg-3 pb-5 border-0",children:[n.jsx("div",{class:"job-list-card-container mb-5 bg-secondary p-3 p-md-4 p-md-4 rounded",children:(0,n.jsxs)("div",{class:"job-list-card row",children:[(0,n.jsxs)("div",{class:"row col-12 gap-1",children:[n.jsx("div",{class:"job-list-image col-2",children:n.jsx(h(),{height:40,width:50,src:"/assets/img/find-jobs/parallax-image-header.jpg",alt:"Componay logo"})}),(0,n.jsxs)("div",{class:"col-9",children:[n.jsx("h5",{children:"Website Designer"}),(0,n.jsxs)("div",{class:"list-info gap-1",children:[(0,n.jsxs)("div",{children:[n.jsx("i",{class:"bi bi-geo-alt-fill"}),n.jsx("span",{class:"fs-xs fs-md-sm mt-4",children:"Los Angeles"})]}),(0,n.jsxs)("div",{children:[n.jsx("i",{class:"bi bi-calendar-week-fill"})," ",n.jsx("span",{class:"fs-xs fs-md-sm",children:"5 months ago"})]}),(0,n.jsxs)("div",{class:"border-0",children:[n.jsx("i",{class:"bi bi-rocket-takeoff-fill"})," ",n.jsx("span",{class:"fs-xs fs-md-sm",children:"3 proposals"})]})]})]})]}),(0,n.jsxs)("div",{class:"row",children:[(0,n.jsxs)("div",{class:"job-list-body row col-12 col-md-8 pt-3",children:[n.jsx("p",{class:"fs-sm fs-md-lg pe-md-3 text-gray-900",children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,n.jsxs)("div",{class:"skills",children:[n.jsx("span",{class:"my-1 my-md-0",children:"Adobe xd"}),n.jsx("span",{class:"my-1 my-md-0",children:"Artist"}),n.jsx("span",{class:"my-1 my-md-0",children:"Computer"})," +3"]})]}),(0,n.jsxs)("div",{class:"job-list-action col-12 col-md-3 row pt-2",children:[(0,n.jsxs)("div",{class:"col-6 col-md-12 pt-2 pt-md-0",children:[n.jsx("h5",{children:"$500 - $550"}),n.jsx("p",{children:"Fixed"})]}),n.jsx("div",{class:"col-6 col-md-9 d-flex justify-content-end",children:(0,n.jsxs)("a",{href:"./business-details.html",class:"btn bg-primary btn-md",children:["See More",n.jsx("i",{class:"bi ms-1 fs-4 bi-arrow-up-right"})]})})]})]})]})}),n.jsx("div",{class:"job-list-card-container mb-5 bg-secondary p-3 p-md-4 p-md-4 rounded",children:(0,n.jsxs)("div",{class:"job-list-card row",children:[(0,n.jsxs)("div",{class:"row col-12 gap-1",children:[n.jsx("div",{class:"job-list-image col-2",children:n.jsx(h(),{height:40,width:50,src:"/assets/img/find-jobs/parallax-image-header.jpg",alt:"Componay logo"})}),(0,n.jsxs)("div",{class:"col-9",children:[n.jsx("h5",{children:"Website Designer"}),(0,n.jsxs)("div",{class:"list-info gap-1",children:[(0,n.jsxs)("div",{children:[n.jsx("i",{class:"bi bi-geo-alt-fill"}),n.jsx("span",{class:"fs-xs fs-md-sm mt-4",children:"Los Angeles"})]}),(0,n.jsxs)("div",{children:[n.jsx("i",{class:"bi bi-calendar-week-fill"})," ",n.jsx("span",{class:"fs-xs fs-md-sm",children:"5 months ago"})]}),(0,n.jsxs)("div",{class:"border-0",children:[n.jsx("i",{class:"bi bi-rocket-takeoff-fill"})," ",n.jsx("span",{class:"fs-xs fs-md-sm",children:"3 proposals"})]})]})]})]}),(0,n.jsxs)("div",{class:"row",children:[(0,n.jsxs)("div",{class:"job-list-body row col-12 col-md-8 pt-3",children:[n.jsx("p",{class:"fs-sm fs-md-lg pe-md-3 text-gray-900",children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,n.jsxs)("div",{class:"skills",children:[n.jsx("span",{class:"my-1 my-md-0",children:"Adobe xd"}),n.jsx("span",{class:"my-1 my-md-0",children:"Artist"}),n.jsx("span",{class:"my-1 my-md-0",children:"Computer"})," +3"]})]}),(0,n.jsxs)("div",{class:"job-list-action col-12 col-md-3 row pt-2",children:[(0,n.jsxs)("div",{class:"col-6 col-md-12 pt-2 pt-md-0",children:[n.jsx("h5",{children:"$500 - $550"}),n.jsx("p",{children:"Fixed"})]}),n.jsx("div",{class:"col-6 col-md-9 d-flex justify-content-end",children:(0,n.jsxs)(b(),{href:`/${u().Job_Details}`,class:"btn bg-primary btn-md",children:["See More",n.jsx("i",{class:"bi ms-1 fs-4 bi-arrow-up-right"})]})})]})]})]})})]})]}),(0,n.jsxs)("h2",{children:["   No jobs available. ",n.jsx("a",{href:"index.html",children:"Return to Homepage"})," "]})]})})})})]})})})]})}let k=(0,r.l)(i,"default"),w=(0,r.l)(i,"getStaticProps"),v=(0,r.l)(i,"getStaticPaths"),y=(0,r.l)(i,"getServerSideProps"),S=(0,r.l)(i,"config"),P=(0,r.l)(i,"reportWebVitals"),A=(0,r.l)(i,"unstable_getStaticProps"),F=(0,r.l)(i,"unstable_getStaticPaths"),T=(0,r.l)(i,"unstable_getStaticParams"),C=(0,r.l)(i,"unstable_getServerProps"),_=(0,r.l)(i,"unstable_getServerSideProps"),J=new l.PagesRouteModule({definition:{kind:t.x.PAGES,page:"/findopportunities",pathname:"/findopportunities",bundlePath:"",filename:""},components:{App:o.default,Document:a.default},userland:i})},2785:s=>{s.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:s=>{s.exports=require("next/head")},5384:s=>{s.exports=require("next/link.js")},6689:s=>{s.exports=require("react")},6405:s=>{s.exports=require("react-dom")},997:s=>{s.exports=require("react/jsx-runtime")},1017:s=>{s.exports=require("path")}};var e=require("../webpack-runtime.js");e.C(s);var c=s=>e(e.s=s),i=e.X(0,[6859,8165,3773,1833,6477],()=>c(3699));module.exports=i})();