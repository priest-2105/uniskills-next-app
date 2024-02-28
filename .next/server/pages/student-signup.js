"use strict";(()=>{var e={};e.id=6898,e.ids=[6898],e.modules={311:(e,s,t)=>{t.r(s),t.d(s,{config:()=>w,default:()=>f,getServerSideProps:()=>N,getStaticPaths:()=>v,getStaticProps:()=>j,reportWebVitals:()=>y,routeModule:()=>I,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>k});var a={};t.r(a),t.d(a,{default:()=>h});var i=t(7093),r=t(5244),n=t(1323),l=t(1106),o=t(2166),c=t(997);t(5675);var d=t(968),m=t.n(d),p=t(5384),g=t.n(p),u=t(6477),b=t(4376),x=t.n(b);function h(){let e={page_title:"Student Sign Up | "+x().APP_NAME};return(0,c.jsxs)(u.default,{initials:e,children:[c.jsx(m(),{children:c.jsx("style",{children:`
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

        .page-loading.active>.page-loading-inner {
            opacity: 1;
        }

        .page-loading-inner>span {
            display: block;
            font-family: "Inter", sans-serif;
            font-size: 1rem;
            font-weight: normal;
            color: #6f788b;
        }

        .dark-mode .page-loading-inner>span {
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
        `})}),c.jsx("main",{className:"page-wrapper",children:(0,c.jsxs)("div",{className:"d-lg-flex position-relative h-100 pb-5",children:[c.jsx("div",{className:"d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5 pb-5 mt-4",children:(0,c.jsxs)("div",{className:"w-100 mt-auto",style:{maxWidth:"526px"},children:[c.jsx("h1",{children:"Sign Up as a Student"}),(0,c.jsxs)("p",{className:"pb-3 mb-3 mb-lg-4",children:["Have an account already?\xa0\xa0",c.jsx(g(),{href:x().LOGIN,children:"Sign in here!"})]}),(0,c.jsxs)("form",{className:"needs-validation",novalidate:!0,children:[(0,c.jsxs)("div",{className:"row row-cols-1 row-cols-sm-2",children:[c.jsx("div",{className:"col mb-4",children:c.jsx("input",{className:"form-control form-control-lg",type:"text",placeholder:"First name",required:!0})}),c.jsx("div",{className:"col mb-4",children:c.jsx("input",{className:"form-control form-control-lg",type:"text",placeholder:"Last name",required:!0})})]}),c.jsx("div",{className:"col mb-4",children:c.jsx("input",{className:"form-control form-control-lg",type:"email",placeholder:"Email address",required:!0})}),(0,c.jsxs)("div",{className:"password-toggle mb-4",children:[c.jsx("input",{className:"form-control form-control-lg",type:"password",placeholder:"Password",required:!0}),(0,c.jsxs)("label",{className:"password-toggle-btn","aria-label":"Show/hide password",children:[c.jsx("input",{className:"password-toggle-check",type:"checkbox"}),c.jsx("span",{className:"password-toggle-indicator"})]})]}),c.jsx("div",{className:"pb-4",children:(0,c.jsxs)("div",{className:"form-check my-2",children:[c.jsx("input",{className:"form-check-input",type:"checkbox",id:"terms"}),(0,c.jsxs)("label",{className:"form-check-label ms-1",for:"terms",children:["I agree to ",c.jsx(g(),{href:x().POLICY_AND_TERMS,children:"Terms & Conditions"})]}),c.jsx("br",{})]})}),c.jsx("button",{className:"btn btn-lg btn-primary w-100 mb-4 d-flex align-items-center justify-content-center position-relative",type:"submit",children:"Sign up"}),c.jsx("h2",{className:"h6 text-center pt-3 pt-lg-4 mb-4",children:" Or sign up with your social account "}),(0,c.jsxs)("div",{className:"row row-cols-1 row-cols-sm-2 gy-3",children:[c.jsx("div",{className:"col",children:(0,c.jsxs)(g(),{className:"btn btn-icon btn-outline-secondary btn-linkedin btn-lg w-100",href:`/${x().LOGIN}`,children:[c.jsx("i",{className:"ai-linkedin fs-xl me-2"}),"LinkedIn"]})}),c.jsx("div",{className:"col",children:(0,c.jsxs)(g(),{className:"btn btn-icon btn-outline-secondary btn-google btn-lg w-100",href:`/${x().LOGIN}`,children:[c.jsx("i",{className:"ai-google fs-xl me-2"}),c.jsx("span",{className:"mt-1",children:"Google"})]})})]})]})]})}),c.jsx("div",{className:"w-50 bg-size-cover bg-repeat-0 bg-position-center",style:{backgroundImage:"url('assets/img/account/cover.jpg')"}})]})})]})}let f=(0,n.l)(a,"default"),j=(0,n.l)(a,"getStaticProps"),v=(0,n.l)(a,"getStaticPaths"),N=(0,n.l)(a,"getServerSideProps"),w=(0,n.l)(a,"config"),y=(0,n.l)(a,"reportWebVitals"),k=(0,n.l)(a,"unstable_getStaticProps"),S=(0,n.l)(a,"unstable_getStaticPaths"),P=(0,n.l)(a,"unstable_getStaticParams"),_=(0,n.l)(a,"unstable_getServerProps"),q=(0,n.l)(a,"unstable_getServerSideProps"),I=new i.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/student-signup",pathname:"/student-signup",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:a})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},5384:e=>{e.exports=require("next/link.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[6859,8165,3773,1833,6477],()=>t(311));module.exports=a})();