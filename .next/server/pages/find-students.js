"use strict";(()=>{var s={};s.id=5598,s.ids=[5598],s.modules={8956:(s,e,i)=>{i.r(e),i.d(e,{config:()=>k,default:()=>j,getServerSideProps:()=>w,getStaticPaths:()=>v,getStaticProps:()=>g,reportWebVitals:()=>y,routeModule:()=>F,unstable_getServerProps:()=>C,unstable_getServerSideProps:()=>L,unstable_getStaticParams:()=>A,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>S});var l={};i.r(l),i.d(l,{default:()=>u});var t=i(7093),a=i(5244),r=i(1323),c=i(1106),n=i(2166),o=i(997),d=i(5675),h=i.n(d),p=i(968),x=i.n(p);i(5384);var m=i(6477),b=i(4376),f=i.n(b);function u(){let s={page_title:"Find Students | "+f().APP_NAME};return(0,o.jsxs)(m.default,{initials:s,children:[o.jsx(x(),{children:o.jsx("style",{children:`
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
      background-image: url('./assets/img/find-students/People search-rafiki.png');
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
    background-image: url('./assets/img/find-students/People search-rafiki.png');
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
  
        `})}),(0,o.jsxs)("div",{class:"offcanvas offcanvas-start",tabindex:"-1",id:"filteroffcanvasExample","aria-labelledby":"filteroffcanvasExampleLabel",children:[(0,o.jsxs)("div",{class:"offcanvas-header",children:[o.jsx("h5",{class:"offcanvas-title",id:"filteroffcanvasExampleLabel",children:"Filter"}),o.jsx("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),(0,o.jsxs)("div",{class:"offcanvas-body",children:[o.jsx("h2",{class:"fs-6",children:"Filter your Results"}),(0,o.jsxs)("form",{class:"needs-validation row g-4",novalidate:!0,children:[(0,o.jsxs)("div",{class:"col-lg-10",children:[o.jsx("label",{class:"form-label fs-base",for:"skills",children:"Search by Keywords"}),(0,o.jsxs)("div",{class:"input-group",children:[o.jsx("span",{class:"input-group-text",children:o.jsx("i",{class:"ai-search"})}),o.jsx("input",{type:"text",class:"form-control",placeholder:"Search by Title, Preferences"})]}),o.jsx("div",{class:"invalid-feedback",children:"Please enter a valid keyword"})]}),(0,o.jsxs)("div",{class:"col-lg-10",children:[o.jsx("label",{class:"form-label fs-base",for:"location",children:"Location"}),(0,o.jsxs)("div",{class:"input-group",children:[o.jsx("span",{class:"input-group-text",children:o.jsx("i",{class:"ai-map-pin"})}),o.jsx("input",{type:"text",class:"form-control",placeholder:"Search by Location"})]}),o.jsx("div",{class:"invalid-feedback",children:"Please provide a location!"})]}),o.jsx("div",{children:(0,o.jsxs)("div",{class:"col-lg-10",children:[o.jsx("label",{class:"form-label fs-base",for:"location",children:"Category"}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Catering"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Music"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Technology"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Food"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Art"})]})]})}),(0,o.jsxs)("div",{children:[o.jsx("label",{class:"form-label mt-3 fs-base ",for:"skills",children:"Skills"}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Adobe Photoshop"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Adobe XD"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Android Developer"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Artist"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"   Computer"})]})]}),o.jsx("div",{class:"col-lg-10",children:o.jsx("button",{class:"btn btn-lg btn-primary mt-2",type:"submit",children:"Find Students"})})]})]})]}),o.jsx("section",{class:"bg-secondary py-5","data-jarallax":!0,"data-speed":"0.6",children:(0,o.jsxs)("div",{class:"container position-relative pt-5 pb-md-2 pb-lg-3 pb-xxl-5",children:[o.jsx("nav",{"aria-label":"breadcrumb",children:(0,o.jsxs)("ol",{class:"pt-lg-3 mb-0 breadcrumb",children:[o.jsx("li",{class:"breadcrumb-item",children:o.jsx("a",{href:"index.html",children:"Home"})}),o.jsx("li",{class:"breadcrumb-item active","aria-current":"page",children:"Find Students"})]})}),(0,o.jsxs)("div",{class:"find-students-header d-block mt-5 pt-3 ps-md-5 ps-lg-5 ps-sm-1 pe-3 pe-xs-1 ps-xs-1 pb-3 rounded",children:[o.jsx("h1",{class:"display-6 mt-2 mb-4",children:"Find Students"}),o.jsx("div",{class:" col-lg-5 col-md-6 col-sm-8 col-xs-md",children:(0,o.jsxs)("div",{class:"input-group mb-3 input-group-sm",children:[o.jsx("input",{type:"text",class:"form-control",placeholder:"Look for Talents","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),o.jsx("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",children:"Search"})]})})]})]})}),o.jsx("section",{class:"pt-3 pb-4 px-3",children:o.jsx("div",{class:" py-lg-2 py-xl-4 py-xxl-5",children:(0,o.jsxs)("div",{class:"row mt-1 ps-2  pt-sm-2 pt-md-3 pt-lg-4",children:[(0,o.jsxs)("div",{class:"col-lg-3 desktop-filter bg-secondary rounded pt-3 ps-3 pe-2 pb-3 mb-5 mb-lg-0",children:[o.jsx("h2",{class:"fs-5",children:"Filter your Results"}),(0,o.jsxs)("form",{class:"needs-validation row g-4",novalidate:!0,children:[(0,o.jsxs)("div",{class:"col-lg-10",children:[o.jsx("label",{class:"form-label fs-base",for:"skills",children:"Search by Keywords"}),(0,o.jsxs)("div",{class:"input-group",children:[o.jsx("span",{class:"input-group-text",children:o.jsx("i",{class:"ai-search"})}),o.jsx("input",{type:"text",class:"form-control",placeholder:"Search by Title, Preferences"})]}),o.jsx("div",{class:"invalid-feedback",children:"Please enter a valid keyword"})]}),(0,o.jsxs)("div",{class:"col-lg-10",children:[o.jsx("label",{class:"form-label fs-base",for:"location",children:"Location"}),(0,o.jsxs)("div",{class:"input-group",children:[o.jsx("span",{class:"input-group-text",children:o.jsx("i",{class:"ai-map-pin"})}),o.jsx("input",{type:"text",class:"form-control",placeholder:"Search by Location"})]}),o.jsx("div",{class:"invalid-feedback",children:"Please provide a location!"})]}),o.jsx("div",{children:(0,o.jsxs)("div",{class:"col-lg-10",children:[o.jsx("label",{class:"form-label fs-base",for:"location",children:"Category"}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Catering"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Music"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Technology"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Food"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Art"})]})]})}),(0,o.jsxs)("div",{children:[o.jsx("label",{class:"form-label mt-3 fs-base ",for:"skills",children:"Skills"}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Adobe Photoshop"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Adobe XD"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Android Developer"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"Artist"})]}),(0,o.jsxs)("div",{class:"form-check form-switch pb-1",children:[o.jsx("input",{type:"checkbox",class:"form-check-input",id:"customSwitch1"}),o.jsx("label",{class:"form-check-label",for:"customSwitch1",children:"   Computer"})]})]}),o.jsx("div",{class:"col-lg-10",children:o.jsx("button",{class:"btn btn-lg btn-primary mt-2",type:"submit",children:"Find Students"})})]})]}),o.jsx("div",{class:"col-lg-12 col-xl-9 col-sm-12 col-xs-12",children:o.jsx("div",{class:"row row-cols-12 row-cols-sm-12",children:o.jsx("div",{class:"col",children:(0,o.jsxs)("div",{class:"card search-results border-0 mb-4",children:[(0,o.jsxs)("div",{class:"card-body search-results  px-0",children:[(0,o.jsxs)("a",{class:"text-decoration-none filter-header","data-bs-toggle":"offcanvas",href:"#filteroffcanvasExample",role:"button","aria-controls":"filteroffcanvasExample",children:["Filter",o.jsx("i",{class:"bi bi-bar-chart-steps"})]}),(0,o.jsxs)("div",{class:"listing-top",children:[o.jsx("h4",{children:"Selected"}),(0,o.jsxs)("div",{class:"selected-options-container col-12 d-flex",children:[(0,o.jsxs)("div",{class:"selected-options",children:[(0,o.jsxs)("a",{href:"#",class:"bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2",children:[o.jsx("span",{class:"text-danger",children:"X"})," Oldest"]}),(0,o.jsxs)("a",{href:"#",class:"bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2",children:[o.jsx("span",{class:"text-danger",children:"X"})," Newest"]}),(0,o.jsxs)("a",{href:"#",class:"bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2",children:[o.jsx("span",{class:"text-danger",children:"X"})," Highest"]})]}),o.jsx("div",{class:"clear-options ms-auto",children:o.jsx("a",{href:"",class:"text-danger",children:"Clear all"})})]}),(0,o.jsxs)("div",{class:"result-page-list d-flex align-items-center mt-5",children:[o.jsx("p",{children:"Showing 1 - 7 of 9 Result"}),(0,o.jsxs)("div",{class:"option-select col-2 ms-auto",children:[(0,o.jsxs)("select",{class:"form-select bg-transparent text-dark","aria-label":"Default select example",children:[o.jsx("option",{class:"bg-transparent text-dark",selected:!0,children:" Default"}),o.jsx("option",{class:"bg-transparent text-dark",value:"1",children:"One"}),o.jsx("option",{class:"bg-transparent text-dark",value:"2",children:"Two"}),o.jsx("option",{class:"bg-transparent text-dark",value:"3",children:"Three"})]})," "]})]})]}),o.jsx("div",{class:"student-listing-body pt-3 ps-0 pe-0 ps-lg-3 pe-lg-3 pb-5",children:(0,o.jsxs)("div",{class:"student-list-card-container mb-5 bg-secondary p-2 p-md-3 rounded shadow-sm",children:[(0,o.jsxs)("div",{class:"student-list-card",children:[(0,o.jsxs)("div",{class:"row col-12 gap-1",children:[o.jsx("div",{class:"student-list-image col-3 row ms-1 pt-2",children:o.jsx(h(),{src:"/assets/img/find-jobs/parallax-image-header.jpg",alt:"Componay logo",class:"img-thumbnail p-0 border-0 rounded-circle ",width:"150",height:"150"})}),(0,o.jsxs)("div",{class:"col-9 pt-4 ps-3",children:[o.jsx("h5",{class:"m-0 ",children:"Lolade Jones"}),(0,o.jsxs)("div",{class:"list-info row",children:[(0,o.jsxs)("div",{class:"col p-0",children:[o.jsx("i",{class:"bi bi-mortarboard-fill"}),o.jsx("span",{class:"fs-xs fs-md-sm",children:"Harvard"})]}),(0,o.jsxs)("div",{class:"col p-0",children:[o.jsx("i",{class:"bi bi-rocket-takeoff-fill"})," ",o.jsx("span",{class:"fs-xs fs-md-sm",children:"Nursing"})]})]}),(0,o.jsxs)("div",{class:"star-ratings row gap-2 pt-2",children:[(0,o.jsxs)("div",{class:"border-0 d-flex col-6 p-0 m-0",children:[o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("p",{class:"pt-1 fs-xs",children:" 4.0 (1)"})]}),(0,o.jsxs)("div",{class:"col-5",children:[" ",o.jsx("i",{class:"bi bi-geo-alt-fill"}),o.jsx("span",{class:"fs-xs fs-md-sm",children:"Los Angeles"})]})]})]})]}),(0,o.jsxs)("div",{children:[o.jsx("p",{class:"pt-3",children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,o.jsxs)("div",{class:"skills pt-1",children:[o.jsx("span",{children:"Adobe xd"}),o.jsx("span",{children:"Artist"}),o.jsx("span",{children:"Computer"})," +3"]})]})]}),o.jsx("div",{class:"student-list-action row justify-content-center",children:o.jsx("a",{href:"./student-details.html",class:"btn bg-primary btn-lg mb-1 col-12",children:"View Profile"})})]})}),o.jsx("div",{class:"student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,o.jsxs)("div",{class:"student-list-card",children:[o.jsx("div",{class:"student-list-image",children:o.jsx(h(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",width:50,height:50,alt:"Componay logo"})}),(0,o.jsxs)("div",{class:"student-list-body",children:[o.jsx("h6",{children:" Thomas Powell "}),(0,o.jsxs)("div",{class:"list-info align-items-center",children:[(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-mortarboard-fill fs-4"})," Harvard"]}),o.jsx("li",{children:"Nursing"})]}),o.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,o.jsxs)("div",{class:"skills",children:[o.jsx("span",{children:"Adobe xd"}),o.jsx("span",{children:"Artist"}),o.jsx("span",{children:"Computer"})," +3"]})]}),(0,o.jsxs)("div",{class:"student-list-action",children:[(0,o.jsxs)("li",{class:"border-0 d-flex",style:"line-height: 5px;",children:[o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("p",{children:" 4.0 (1)Review"})," "]}),(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-geo-alt-fill"}),"Los Angeles"]}),o.jsx("a",{href:"./student-details.html",class:"btn bg-primary btn-lg mb-1 col-12",children:"View Profile"})]})]})}),o.jsx("div",{class:"student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,o.jsxs)("div",{class:"student-list-card",children:[o.jsx("div",{class:"student-list-image",children:o.jsx(h(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-150x150.jpg",width:50,height:50,alt:"Componay logo"})}),(0,o.jsxs)("div",{class:"student-list-body",children:[o.jsx("h6",{children:"Ifeanyi Okweakwalam"}),(0,o.jsxs)("div",{class:"list-info align-items-center",children:[(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-mortarboard-fill fs-4"})," Harvard"]}),o.jsx("li",{children:"Nursing"})]}),o.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,o.jsxs)("div",{class:"skills",children:[o.jsx("span",{children:"Adobe xd"}),o.jsx("span",{children:"Artist"}),o.jsx("span",{children:"Computer"})," +3"]})]}),(0,o.jsxs)("div",{class:"student-list-action",children:[(0,o.jsxs)("li",{class:"border-0 d-flex",style:"line-height: 5px;",children:[o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("p",{children:" 4.0 (1)Review"})," "]}),(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-geo-alt-fill"}),"Los Angeles"]}),o.jsx("a",{href:"./student-details.html",class:"btn bg-primary btn-lg mb-1 col-12",children:"View Profile"})]})]})}),o.jsx("div",{class:"student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,o.jsxs)("div",{class:"student-list-card",children:[o.jsx("div",{class:"student-list-image",children:o.jsx(h(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/12-150x150.jpg",width:50,height:50,alt:"Componay logo"})}),(0,o.jsxs)("div",{class:"student-list-body",children:[o.jsx("h6",{children:"Fawaz Bailey"}),(0,o.jsxs)("div",{class:"list-info align-items-center",children:[(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-mortarboard-fill fs-4"})," Harvard"]}),o.jsx("li",{children:"Nursing"})]}),o.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,o.jsxs)("div",{class:"skills",children:[o.jsx("span",{children:"Adobe xd"}),o.jsx("span",{children:"Artist"}),o.jsx("span",{children:"Computer"})," +3"]})]}),(0,o.jsxs)("div",{class:"student-list-action",children:[(0,o.jsxs)("li",{class:"border-0 d-flex",style:"line-height: 5px;",children:[o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("p",{children:" 4.0 (1)Review"})," "]}),(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-geo-alt-fill"}),"Los Angeles"]}),o.jsx("a",{href:"./student-details.html",class:"btn bg-primary btn-lg mb-1 col-12",children:"View Profile"})]})]})}),o.jsx("div",{class:"student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,o.jsxs)("div",{class:"student-list-card",children:[o.jsx("div",{class:"student-list-image",children:o.jsx(h(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/09/bg-video-150x150.png",width:50,height:50,alt:"Componay logo"})}),(0,o.jsxs)("div",{class:"student-list-body",children:[o.jsx("h6",{children:"Mother Father"}),(0,o.jsxs)("div",{class:"list-info align-items-center",children:[(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-mortarboard-fill fs-4"})," Harvard"]}),o.jsx("li",{children:"Nursing"})]}),o.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,o.jsxs)("div",{class:"skills",children:[o.jsx("span",{children:"Adobe xd"}),o.jsx("span",{children:"Artist"}),o.jsx("span",{children:"Computer"})," +3"]})]}),(0,o.jsxs)("div",{class:"student-list-action",children:[(0,o.jsxs)("li",{class:"border-0 d-flex",style:"line-height: 5px;",children:[o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("p",{children:" 4.0 (1)Review"})," "]}),(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-geo-alt-fill"}),"Los Angeles"]}),o.jsx("a",{href:"./student-details.html",class:"btn bg-primary btn-lg mb-1 col-12",children:"View Profile"})]})]})}),o.jsx("div",{class:"student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,o.jsxs)("div",{class:"student-list-card",children:[o.jsx("div",{class:"student-list-image",children:o.jsx(h(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg",width:50,height:50,alt:"Componay logo"})}),(0,o.jsxs)("div",{class:"student-list-body",children:[o.jsx("h6",{children:"Agent Pakulla"}),(0,o.jsxs)("div",{class:"list-info align-items-center",children:[(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-mortarboard-fill fs-4"})," Harvard"]}),o.jsx("li",{children:"Nursing"})]}),o.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,o.jsxs)("div",{class:"skills",children:[o.jsx("span",{children:"Adobe xd"}),o.jsx("span",{children:"Artist"}),o.jsx("span",{children:"Computer"})," +3"]})]}),(0,o.jsxs)("div",{class:"student-list-action",children:[(0,o.jsxs)("li",{class:"border-0 d-flex",style:"line-height: 5px;",children:[o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("p",{children:" 4.0 (1)Review"})," "]}),(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-geo-alt-fill"}),"Los Angeles"]}),o.jsx("a",{href:"./student-details.html",class:"btn bg-primary btn-lg mb-1 col-12",children:"View Profile"})]})]})}),o.jsx("div",{class:"student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,o.jsxs)("div",{class:"student-list-card",children:[o.jsx("div",{class:"student-list-image",children:o.jsx(h(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg",width:50,height:50,alt:"Componay logo"})}),(0,o.jsxs)("div",{class:"student-list-body",children:[o.jsx("h6",{children:"Agent Pakulla"}),(0,o.jsxs)("div",{class:"list-info align-items-center",children:[(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-mortarboard-fill fs-4"})," Harvard"]}),o.jsx("li",{children:"Nursing"})]}),o.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,o.jsxs)("div",{class:"skills",children:[o.jsx("span",{children:"Adobe xd"}),o.jsx("span",{children:"Artist"}),o.jsx("span",{children:"Computer"})," +3"]})]}),(0,o.jsxs)("div",{class:"student-list-action",children:[(0,o.jsxs)("li",{class:"border-0 d-flex",style:"line-height: 5px;",children:[o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("p",{children:" 4.0 (1)Review"})," "]}),(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-geo-alt-fill"}),"Los Angeles"]}),o.jsx("a",{href:"./student-details.html",class:"btn bg-primary btn-lg mb-1 col-12",children:"View Profile"})]})]})}),o.jsx("div",{class:"student-list-card-container mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3",children:(0,o.jsxs)("div",{class:"student-list-card",children:[o.jsx("div",{class:"student-list-image",children:o.jsx(h(),{src:"https://demoapus1.com/freeio/wp-content/uploads/2022/10/employer2.jpg",width:50,height:50,alt:"Componay logo"})}),(0,o.jsxs)("div",{class:"student-list-body",children:[o.jsx("h6",{children:"Agent Pakulla"}),(0,o.jsxs)("div",{class:"list-info align-items-center",children:[(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-mortarboard-fill fs-4"})," Harvard"]}),o.jsx("li",{children:"Nursing"})]}),o.jsx("p",{children:" Lorem ipsum dolor, sit amet consecteturolor, sit amet consectetur  cumque eveniet repudiandae!....."}),(0,o.jsxs)("div",{class:"skills",children:[o.jsx("span",{children:"Adobe xd"}),o.jsx("span",{children:"Artist"}),o.jsx("span",{children:"Computer"})," +3"]})]}),(0,o.jsxs)("div",{class:"student-list-action",children:[(0,o.jsxs)("li",{class:"border-0 d-flex",style:"line-height: 5px;",children:[o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("i",{class:"me-2 bi bi-star-fill"}),o.jsx("p",{children:" 4.0 (1)Review"})," "]}),(0,o.jsxs)("li",{children:[" ",o.jsx("i",{class:"bi bi-geo-alt-fill"}),"Los Angeles"]}),o.jsx("a",{href:"./student-details.html",class:"btn bg-primary btn-lg mb-1 col-12",children:"View Profile"})]})]})}),(0,o.jsxs)("div",{class:"container",children:[o.jsx("div",{class:"move",children:o.jsx("div",{class:"p-button normal signin animated pulse",children:"SIGN IN"})}),(0,o.jsxs)("div",{class:"welcome",children:[o.jsx("h4",{class:"bold welcome-text",children:"Welcome Back!"}),o.jsx("p",{class:"normal text",children:"To keep connected with us please login with your personal info"})]}),(0,o.jsxs)("div",{class:"hello",children:[o.jsx("h4",{class:"bold welcome-text",children:"Hello Friend"}),o.jsx("p",{class:"normal text",children:"Enter your personal details and start journey with us"})]}),(0,o.jsxs)("div",{class:"form",children:[o.jsx("h4",{class:"bold title",children:"Create Account"}),(0,o.jsxs)("div",{class:"icons",children:[o.jsx("div",{class:"icon",children:o.jsx("i",{class:"fab fa-facebook-f"})}),o.jsx("div",{class:"icon",children:o.jsx("i",{class:"fab fa-github"})}),o.jsx("div",{class:"icon",children:o.jsx("i",{class:"fab fa-twitter"})})]}),o.jsx("p",{class:"normal light",children:"Or use your email for registration"}),o.jsx("input",{type:"text",placeholder:"Name",class:"normal name"}),o.jsx("input",{type:"text",placeholder:"Email",class:"normal"}),o.jsx("br",{}),o.jsx("input",{type:"password",placeholder:"Password",class:"normal"}),o.jsx("br",{}),o.jsx("p",{class:"normal forgot",children:"Forgot your password?"}),o.jsx("button",{class:"b-button normal",children:"SIGN UP"})]})]})]}),(0,o.jsxs)("h2",{children:["   No jobs available. ",o.jsx("a",{href:"index.html",children:"Return to Homepage"})," "]})]})})})})]})})})]})}let j=(0,r.l)(l,"default"),g=(0,r.l)(l,"getStaticProps"),v=(0,r.l)(l,"getStaticPaths"),w=(0,r.l)(l,"getServerSideProps"),k=(0,r.l)(l,"config"),y=(0,r.l)(l,"reportWebVitals"),S=(0,r.l)(l,"unstable_getStaticProps"),P=(0,r.l)(l,"unstable_getStaticPaths"),A=(0,r.l)(l,"unstable_getStaticParams"),C=(0,r.l)(l,"unstable_getServerProps"),L=(0,r.l)(l,"unstable_getServerSideProps"),F=new t.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/find-students",pathname:"/find-students",bundlePath:"",filename:""},components:{App:n.default,Document:c.default},userland:l})},2785:s=>{s.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:s=>{s.exports=require("next/head")},5384:s=>{s.exports=require("next/link.js")},6689:s=>{s.exports=require("react")},6405:s=>{s.exports=require("react-dom")},997:s=>{s.exports=require("react/jsx-runtime")},1017:s=>{s.exports=require("path")}};var e=require("../webpack-runtime.js");e.C(s);var i=s=>e(e.s=s),l=e.X(0,[6859,8165,3773,1833,6477],()=>i(8956));module.exports=l})();