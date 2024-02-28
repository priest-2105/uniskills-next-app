"use strict";(()=>{var e={};e.id=7746,e.ids=[7746],e.modules={2816:(e,t,a)=>{a.r(t),a.d(t,{config:()=>S,default:()=>b,getServerSideProps:()=>x,getStaticPaths:()=>h,getStaticProps:()=>k,reportWebVitals:()=>v,routeModule:()=>j,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>P});var i={};a.r(i),a.d(i,{default:()=>m});var r=a(7093),n=a(5244),o=a(1323),s=a(1106),l=a(2166),d=a(997);a(5675);var p=a(968),c=a.n(p);a(5384);var g=a(6477),u=a(4376),f=a.n(u);function m(){let e={page_title:"For Students | "+f().APP_NAME};return(0,d.jsxs)(g.default,{initials:e,children:[d.jsx(c(),{children:d.jsx("style",{children:`
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
        `})}),d.jsx("div",{className:"bg-secondary",children:"FAQ"})]})}let b=(0,o.l)(i,"default"),k=(0,o.l)(i,"getStaticProps"),h=(0,o.l)(i,"getStaticPaths"),x=(0,o.l)(i,"getServerSideProps"),S=(0,o.l)(i,"config"),v=(0,o.l)(i,"reportWebVitals"),P=(0,o.l)(i,"unstable_getStaticProps"),y=(0,o.l)(i,"unstable_getStaticPaths"),w=(0,o.l)(i,"unstable_getStaticParams"),_=(0,o.l)(i,"unstable_getServerProps"),q=(0,o.l)(i,"unstable_getServerSideProps"),j=new r.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/faq",pathname:"/faq",bundlePath:"",filename:""},components:{App:l.default,Document:s.default},userland:i})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},5384:e=>{e.exports=require("next/link.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[6859,8165,3773,1833,6477],()=>a(2816));module.exports=i})();