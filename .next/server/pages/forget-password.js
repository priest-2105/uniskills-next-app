"use strict";(()=>{var e={};e.id=6837,e.ids=[6837],e.modules={9518:(e,t,a)=>{a.r(t),a.d(t,{config:()=>v,default:()=>x,getServerSideProps:()=>j,getStaticPaths:()=>w,getStaticProps:()=>y,reportWebVitals:()=>k,routeModule:()=>W,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>N});var s={};a.r(s),a.d(s,{default:()=>h});var r=a(7093),i=a(5244),n=a(1323),l=a(1106),o=a(2166),d=a(997);a(5675);var c=a(968),p=a.n(c),m=a(5384),g=a.n(m),u=a(6477),b=a(4376),f=a.n(b);function h(){let e={page_title:"Forget Password | "+f().APP_NAME};return(0,d.jsxs)(u.default,{initials:e,children:[d.jsx(p(),{children:d.jsx("style",{children:`
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
        `})}),d.jsx("main",{className:"page-wrapper",children:d.jsx("div",{className:"d-flex flex-column align-items-center position-relative h-100 px-3 pt-5 mt-4",children:(0,d.jsxs)("div",{className:"mt-auto",style:{maxWidth:"700px"},children:[d.jsx("h1",{className:"pt-3 pb-2 pb-lg-3",children:"Forgot your password?"}),d.jsx("p",{className:"pb-2",children:"Change your password in three easy steps. This helps to keep your new password secure."}),(0,d.jsxs)("ul",{className:"list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5",children:[(0,d.jsxs)("li",{className:"d-flex mb-2",children:[d.jsx("span",{className:"text-primary fw-semibold me-2",children:"1."}),"Fill in your email address below."]}),(0,d.jsxs)("li",{className:"d-flex mb-2",children:[d.jsx("span",{className:"text-primary fw-semibold me-2",children:"2."}),"We'll email you a temporary code."]}),(0,d.jsxs)("li",{className:"d-flex mb-2",children:[d.jsx("span",{className:"text-primary fw-semibold me-2",children:"3."}),"Use the code to change your password on our secure website."]})]}),(0,d.jsxs)("p",{className:"pb-3 mb-3 mb-lg-4",children:["Want to abort this?\xa0\xa0",d.jsx(g(),{href:f().LOGIN,children:"Sign in here!"})]}),d.jsx("div",{className:"card dark-mode border-0 bg-primary",children:(0,d.jsxs)("form",{className:"card-body",children:[d.jsx("div",{className:"mb-4",children:(0,d.jsxs)("div",{className:"position-relative",children:[d.jsx("i",{className:"ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y text-light opacity-80 ms-3"}),d.jsx("input",{className:"form-control form-control-lg ps-5",type:"email",placeholder:"Email address",required:!0})]})}),d.jsx("button",{className:"btn btn-light d-flex align-items-center justify-content-center position-relative",type:"submit",children:"Get new password"})]})})]})})})]})}let x=(0,n.l)(s,"default"),y=(0,n.l)(s,"getStaticProps"),w=(0,n.l)(s,"getStaticPaths"),j=(0,n.l)(s,"getServerSideProps"),v=(0,n.l)(s,"config"),k=(0,n.l)(s,"reportWebVitals"),N=(0,n.l)(s,"unstable_getStaticProps"),P=(0,n.l)(s,"unstable_getStaticPaths"),S=(0,n.l)(s,"unstable_getStaticParams"),_=(0,n.l)(s,"unstable_getServerProps"),q=(0,n.l)(s,"unstable_getServerSideProps"),W=new r.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/forget-password",pathname:"/forget-password",bundlePath:"",filename:""},components:{App:o.default,Document:l.default},userland:s})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},5384:e=>{e.exports=require("next/link.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[6859,8165,3773,1833,6477],()=>a(9518));module.exports=s})();