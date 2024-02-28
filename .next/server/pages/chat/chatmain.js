"use strict";(()=>{var e={};e.id=3190,e.ids=[3190],e.modules={2461:(e,t,a)=>{a.r(t),a.d(t,{config:()=>S,default:()=>h,getServerSideProps:()=>v,getStaticPaths:()=>k,getStaticProps:()=>x,reportWebVitals:()=>y,routeModule:()=>A,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>q,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>w,unstable_getStaticProps:()=>P});var i={};a.r(i),a.d(i,{default:()=>b});var r=a(7093),n=a(5244),o=a(1323),s=a(1106),l=a(2166),p=a(997);a(5675);var d=a(968),c=a.n(d);a(5384);var g=a(6689),u=a(746),m=a(4376),f=a.n(m);function b(){let e={page_title:"Chat | "+f().APP_NAME,body_class:"page-wrapper bg-secondary overflow-hidden px-2"},[t,a]=(0,g.useState)(!1),[i,r]=(0,g.useState)("marketers");return(0,g.useEffect)(()=>{a(!0)},[]),p.jsx(u.default,{initials:e,children:(0,p.jsxs)(p.Fragment,{children:[p.jsx(c(),{children:p.jsx("style",{children:`
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
              background-color: rgba(255, 255, 255, .25);
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

            @media only screen and (max-width: 767px) {
              .nav-tabs {
                margin-top: 50px;
              }

              .nav-tabs li {
                font-size: 14px;
              }
            }
          `})}),"CHAT"]})})}let h=(0,o.l)(i,"default"),x=(0,o.l)(i,"getStaticProps"),k=(0,o.l)(i,"getStaticPaths"),v=(0,o.l)(i,"getServerSideProps"),S=(0,o.l)(i,"config"),y=(0,o.l)(i,"reportWebVitals"),P=(0,o.l)(i,"unstable_getStaticProps"),w=(0,o.l)(i,"unstable_getStaticPaths"),_=(0,o.l)(i,"unstable_getStaticParams"),j=(0,o.l)(i,"unstable_getServerProps"),q=(0,o.l)(i,"unstable_getServerSideProps"),A=new r.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/chat/chatmain",pathname:"/chat/chatmain",bundlePath:"",filename:""},components:{App:l.default,Document:s.default},userland:i})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},5384:e=>{e.exports=require("next/link.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[6859,8165,3773,1833,746],()=>a(2461));module.exports=i})();