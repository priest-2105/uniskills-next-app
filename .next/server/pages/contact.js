"use strict";(()=>{var e={};e.id=9335,e.ids=[9335],e.modules={9423:(e,s,a)=>{a.r(s),a.d(s,{config:()=>k,default:()=>g,getServerSideProps:()=>y,getStaticPaths:()=>j,getStaticProps:()=>v,reportWebVitals:()=>P,routeModule:()=>I,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>C,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>S});var r={};a.r(r),a.d(r,{default:()=>x});var i=a(7093),l=a(5244),t=a(1323),n=a(1106),o=a(2166),c=a(997);a(5675);var d=a(968),p=a.n(d),m=a(5384),b=a.n(m),u=a(6477),h=a(4376),f=a.n(h);function x(){let e={page_title:"Contact Us | "+f().APP_NAME,body_class:"page-wrapper"};return(0,c.jsxs)(u.default,{initials:e,children:[c.jsx(p(),{children:c.jsx("style",{children:`
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
        `})}),(0,c.jsxs)("section",{class:"container pt-5 pb-lg-2 pb-xl-4 py-xxl-5",children:[c.jsx("nav",{"aria-label":"breadcrumb",children:(0,c.jsxs)("ol",{class:"breadcrumb",children:[c.jsx("li",{class:"breadcrumb-item",children:c.jsx("a",{href:f().HOMEPAGE,children:"Home"})}),c.jsx("li",{class:"breadcrumb-item active","aria-current":"page",children:"Contact Us"})]})}),(0,c.jsxs)("div",{class:"row pb-1 pb-sm-3 pb-lg-4",children:[(0,c.jsxs)("div",{class:"col-lg-4 pe-xxl-4",children:[c.jsx("h1",{class:"display-4",children:"Contact Us"}),c.jsx("p",{class:"fs-lg pb-4 mb-0 mb-sm-2",children:"Fill in this form, and we'll be in touch with you as soon as possible."})]}),c.jsx("div",{class:"col-lg-8 col-xl-7 offset-xl-1",children:(0,c.jsxs)("form",{class:"row g-4 needs-validation",novalidate:!0,children:[(0,c.jsxs)("div",{class:"col-sm-6",children:[c.jsx("label",{class:"form-label fs-base",for:"name",children:"Name"}),c.jsx("input",{class:"form-control form-control-lg",type:"text",placeholder:"Your name",required:!0,id:"name"}),c.jsx("div",{class:"invalid-feedback",children:"Please enter your name!"})]}),(0,c.jsxs)("div",{class:"col-sm-6",children:[c.jsx("label",{class:"form-label fs-base",for:"email",children:"Email"}),c.jsx("input",{class:"form-control form-control-lg",type:"email",placeholder:"Email address",required:!0,id:"email"}),c.jsx("div",{class:"invalid-feedback",children:"Please provide a valid email address!"})]}),(0,c.jsxs)("div",{class:"col-sm-6",children:[c.jsx("label",{class:"form-label fs-base",for:"phone",children:"Phone"}),c.jsx("input",{class:"form-control form-control-lg",type:"text",placeholder:"Phone number",id:"phone"})]}),(0,c.jsxs)("div",{class:"col-sm-6",children:[c.jsx("label",{class:"form-label fs-base",for:"contact",children:"Reason for Contact"}),(0,c.jsxs)("select",{class:"form-select form-select-lg",id:"contact",children:[c.jsx("option",{value:"",default:!0,children:"Please Select"}),c.jsx("option",{value:"Feedback",children:"Feedback"}),c.jsx("option",{value:"Tips",children:"Tips"}),c.jsx("option",{value:"Media Inquiry",children:"Media Inquiry"}),c.jsx("option",{value:"Partnership Inquiry",children:"Partnership Inquiry"}),c.jsx("option",{value:"Complaints",children:"Complaints"}),c.jsx("option",{value:"Suggestions/Improvements",children:"Suggestions/Improvements"})]})]}),(0,c.jsxs)("div",{class:"col-sm-12",children:[c.jsx("label",{class:"form-label fs-base",for:"message",children:"How can we help?"}),c.jsx("textarea",{class:"form-control form-control-lg",rows:"5",placeholder:"Enter your message here...",required:!0,id:"message"}),c.jsx("div",{class:"invalid-feedback",children:"Please enter your message!"})]}),c.jsx("div",{class:"col-sm-12",children:(0,c.jsxs)("div",{class:"form-check form-check-inline",children:[c.jsx("input",{class:"form-check-input",type:"checkbox",id:"agree",required:!0}),(0,c.jsxs)("label",{class:"form-check-label",for:"agree",children:["I agree to the ",c.jsx(b(),{class:"nav-link d-inline fs-normal text-decoration-underline p-0",href:f().POLICY_AND_TERMS,children:"Privacy Policy, Terms & Conditions "})]}),c.jsx("br",{})]})}),c.jsx("div",{class:"col-sm-12 pt-2",children:c.jsx("button",{class:"btn btn-lg btn-primary",type:"submit",children:" Submit "})})]})})]})]})]})}let g=(0,t.l)(r,"default"),v=(0,t.l)(r,"getStaticProps"),j=(0,t.l)(r,"getStaticPaths"),y=(0,t.l)(r,"getServerSideProps"),k=(0,t.l)(r,"config"),P=(0,t.l)(r,"reportWebVitals"),S=(0,t.l)(r,"unstable_getStaticProps"),w=(0,t.l)(r,"unstable_getStaticPaths"),q=(0,t.l)(r,"unstable_getStaticParams"),_=(0,t.l)(r,"unstable_getServerProps"),C=(0,t.l)(r,"unstable_getServerSideProps"),I=new i.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/contact",pathname:"/contact",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:r})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},5384:e=>{e.exports=require("next/link.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var s=require("../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),r=s.X(0,[6859,8165,3773,1833,6477],()=>a(9423));module.exports=r})();