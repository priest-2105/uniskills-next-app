"use strict";(()=>{var e={};e.id=3459,e.ids=[3459],e.modules={7720:(e,s,a)=>{a.r(s),a.d(s,{config:()=>y,default:()=>j,getServerSideProps:()=>v,getStaticPaths:()=>N,getStaticProps:()=>g,reportWebVitals:()=>w,routeModule:()=>I,unstable_getServerProps:()=>R,unstable_getServerSideProps:()=>z,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>k});var t={};a.r(t),a.d(t,{default:()=>h});var l=a(7093),r=a(5244),i=a(1323),o=a(1106),n=a(2166),d=a(997);a(5675);var c=a(968),m=a.n(c),x=a(5384),b=a.n(x),u=a(6477),p=a(4376),f=a.n(p);function h(){let e={page_title:"Sign In | "+f().APP_NAME};return(0,d.jsxs)(u.default,{initials:e,children:[d.jsx(m(),{children:d.jsx("style",{children:`
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
        `})}),d.jsx("div",{className:"modal fade",id:"customizer-modal",tabindex:"-1",role:"dialog",children:d.jsx("div",{className:"modal-dialog modal-lg modal-dialog-scrollable",role:"document",children:(0,d.jsxs)("div",{className:"modal-content",children:[(0,d.jsxs)("div",{className:"modal-header",children:[d.jsx("h4",{className:"modal-title",children:"Your custom styles"}),d.jsx("button",{className:"btn-close",type:"button","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,d.jsxs)("div",{className:"modal-body py-4",children:[(0,d.jsxs)("p",{className:"mb-3",children:["Grab the generated styles below. Wrap them inside",d.jsx("code",{children:"<style>"})," tag and put in the",d.jsx("code",{children:"<head>"})," section of your HTML document."]}),(0,d.jsxs)("p",{className:"mb-4",children:[d.jsx("span",{className:"fw-medium",children:"IMPORTANT:"})," In order for these styles to take effect you have to placed them below:",d.jsx("br",{}),d.jsx("code",{children:'<link rel="stylesheet" media="screen" href="assets/css/theme.min.css">'})]}),d.jsx("div",{className:"bg-secondary overflow-hidden rounded-4",children:d.jsx("pre",{className:"text-wrap bg-transparent border-0 text-dark p-4",id:"custom-generated-styles"})})]}),(0,d.jsxs)("div",{className:"modal-footer",children:[d.jsx("button",{className:"btn btn-secondary w-100 w-sm-auto mb-3 mb-sm-0",type:"button","data-bs-dismiss":"modal",children:" Close "}),(0,d.jsxs)("button",{className:"btn btn-primary w-100 w-sm-auto ms-sm-3",type:"button",id:"copy-styles-btn",children:[d.jsx("i",{className:"ai-copy me-2 ms-n1"}),"Copy styles"]})]})]})})}),(0,d.jsxs)(b(),{className:"position-fixed top-50 bg-light text-dark fw-medium border rounded-pill shadow text-decoration-none",href:"#customizer","data-bs-toggle":"offcanvas",style:{right:"-1.75rem",marginTop:"-1rem",padding:"0.25rem 0.75rem",transform:"rotate(-90deg)",fontSize:"calc(var(--ar-body-font-size) * 0.8125)",letterSpacing:"0.075rem",zIndex:"1030"},children:[d.jsx("i",{className:"ai-settings text-primary fs-base me-1 ms-n1"}),"Customize"]}),(0,d.jsxs)("div",{className:"offcanvas offcanvas-end",id:"customizer","data-bs-scroll":"true","data-bs-backdrop":"false",tabindex:"-1",children:[(0,d.jsxs)("div",{className:"offcanvas-header border-bottom",children:[d.jsx("h4",{className:"offcanvas-title",children:"Customize theme"}),d.jsx("button",{className:"btn-close",type:"button","data-bs-dismiss":"offcanvas"})]}),(0,d.jsxs)("div",{className:"offcanvas-body",children:[(0,d.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[d.jsx("i",{className:"ai-paint-roll text-muted fs-4 me-2"}),d.jsx("h5",{className:"mb-0",children:"Colors"})]}),(0,d.jsxs)("div",{className:"row row-cols-3 g-3 mb-5",id:"theme-colors",children:[(0,d.jsxs)("div",{className:"col",children:[d.jsx("div",{className:"text-dark fs-sm fw-medium mb-2",children:"Primary"}),(0,d.jsxs)("div",{className:"color-swatch",id:"theme-primary","data-color-labels":'["theme-primary", "primary", "primary-rgb"]',children:[d.jsx("label",{className:"ratio ratio-4x3 border rounded-1 cursor-pointer mb-1",for:"primary",style:{backgroundColor:"#448c74"},role:"button"}),d.jsx("input",{className:"form-control form-control-sm",type:"text",value:"#448c74"}),d.jsx("input",{className:"visually-hidden",type:"color",id:"primary",value:"#448c74"})]})]}),(0,d.jsxs)("div",{className:"col",children:[d.jsx("div",{className:"text-dark fs-sm fw-medium mb-2",children:"Warning"}),(0,d.jsxs)("div",{className:"color-swatch",id:"theme-warning","data-color-labels":'["theme-warning", "warning", "warning-rgb"]',children:[d.jsx("label",{className:"ratio ratio-4x3 border rounded-1 cursor-pointer mb-1",for:"warning",style:{backgroundColor:"#edcb50"},role:"button"}),d.jsx("input",{className:"form-control form-control-sm",type:"text",value:"#edcb50"}),d.jsx("input",{className:"visually-hidden",type:"color",id:"warning",value:"#edcb50"})]})]}),(0,d.jsxs)("div",{className:"col",children:[d.jsx("div",{className:"text-dark fs-sm fw-medium mb-2",children:"Info"}),(0,d.jsxs)("div",{className:"color-swatch",id:"theme-info","data-color-labels":'["theme-info", "info", "info-rgb"]',children:[d.jsx("label",{className:"ratio ratio-4x3 border rounded-1 cursor-pointer mb-1",for:"info",style:{backgroundColor:"#3f7fca"},role:"button"}),d.jsx("input",{className:"form-control form-control-sm",type:"text",value:"#3f7fca"}),d.jsx("input",{className:"visually-hidden",type:"color",id:"info",value:"#3f7fca"})]})]}),(0,d.jsxs)("div",{className:"col",children:[d.jsx("div",{className:"text-dark fs-sm fw-medium pt-1 mb-2",children:"Success"}),(0,d.jsxs)("div",{className:"color-swatch",id:"theme-success","data-color-labels":'["theme-success", "success", "success-rgb"]',children:[d.jsx("label",{className:"ratio ratio-4x3 border rounded-1 cursor-pointer mb-1",for:"success",style:{backgroundColor:"#3fca90"},role:"button"}),d.jsx("input",{className:"form-control form-control-sm",type:"text",value:"#3fca90"}),d.jsx("input",{className:"visually-hidden",type:"color",id:"success",value:"#3fca90"})]})]}),(0,d.jsxs)("div",{className:"col",children:[d.jsx("div",{className:"text-dark fs-sm fw-medium pt-1 mb-2",children:"Danger"}),(0,d.jsxs)("div",{className:"color-swatch",id:"theme-danger","data-color-labels":'["theme-danger", "danger", "danger-rgb"]',children:[d.jsx("label",{className:"ratio ratio-4x3 border rounded-1 cursor-pointer mb-1",for:"danger",style:{backgroundColor:"#ed5050"},role:"button"}),d.jsx("input",{className:"form-control form-control-sm",type:"text",value:"#ed5050"}),d.jsx("input",{className:"visually-hidden",type:"color",id:"danger",value:"#ed5050"})]})]})]}),(0,d.jsxs)("div",{className:"d-flex align-items-center mb-3",children:[d.jsx("i",{className:"ai-align-left text-muted fs-4 me-2"}),(0,d.jsxs)("h5",{className:"mb-0",children:[" Typography ",d.jsx("span",{className:"text-muted fs-sm fw-normal",children:"(1rem = 16px)"})," "]})]}),(0,d.jsxs)("div",{className:"mb-5",children:[(0,d.jsxs)("div",{className:"mb-3",children:[d.jsx("label",{className:"text-dark fs-sm fw-medium pt-1 mb-2",for:"font-url",children:"Google font URL"}),d.jsx("input",{className:"form-control",type:"url",value:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",id:"font-url"})]}),(0,d.jsxs)("div",{className:"mb-3",children:[d.jsx("label",{className:"text-dark fs-sm fw-medium pt-1 mb-2",for:"body-font-family",children:"Font family"}),d.jsx("input",{className:"form-control",type:"text",value:"'Inter', sans-serif",id:"body-font-family"})]}),(0,d.jsxs)("div",{className:"row row-cols-2",children:[(0,d.jsxs)("div",{className:"col mb-3",children:[d.jsx("label",{className:"d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2",for:"root-font-size",children:"Root font size, rem"}),(0,d.jsxs)("select",{className:"form-select",id:"root-font-size",children:[d.jsx("option",{value:".75rem",children:".75"}),d.jsx("option",{value:".875rem",children:".875"}),d.jsx("option",{value:"1rem",selected:!0,children:"1"}),d.jsx("option",{value:"1.05rem",children:"1.05"}),d.jsx("option",{value:"1.1rem",children:"1.1"}),d.jsx("option",{value:"1.15rem",children:"1.15"}),d.jsx("option",{value:"1.25rem",children:"1.25"}),d.jsx("option",{value:"1.375rem",children:"1.375"})]})]}),(0,d.jsxs)("div",{className:"col mb-3",children:[d.jsx("label",{className:"d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2",for:"body-font-size",children:"Body font size, rem"}),(0,d.jsxs)("select",{className:"form-select",id:"body-font-size",children:[d.jsx("option",{value:".75rem",children:".75"}),d.jsx("option",{value:".875rem",children:".875"}),d.jsx("option",{value:"1rem",selected:!0,children:"1"}),d.jsx("option",{value:"1.15rem",children:"1.15"}),d.jsx("option",{value:"1.25rem",children:"1.25"}),d.jsx("option",{value:"1.375rem",children:"1.375"})]})]})]})]}),(0,d.jsxs)("div",{className:"d-flex align-items-center mt-n2 mb-3",children:[d.jsx("i",{className:"ai-maximize text-muted fs-5 me-2"}),d.jsx("h5",{className:"mb-0",children:"Borders / Rounding"})]}),(0,d.jsxs)("div",{className:"mb-3",children:[d.jsx("label",{className:"d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2",for:"border-width",children:"Border width, px"}),d.jsx("input",{className:"form-control",type:"number",min:"0",step:"1",value:"1",id:"border-width"})]}),(0,d.jsxs)("div",{className:"mb-3",children:[d.jsx("label",{className:"d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2",for:"border-radius",children:"Rounded base, rem"}),d.jsx("input",{className:"form-control",type:"number",min:"0",step:".05",value:"1",id:"border-radius"})]}),(0,d.jsxs)("div",{id:"theme-border-radiuses",children:[(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)("label",{className:"d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2",for:"border-radius-sm",children:["Rounded SM",d.jsx("span",{className:"text-muted fw-normal ms-1",children:"= Rounded base multiplied by"})]}),d.jsx("input",{className:"form-control",type:"number",min:"0",step:".05",value:".75",id:"border-radius-sm"})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)("label",{className:"d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2",for:"border-radius-lg",children:["Rounded LG",d.jsx("span",{className:"text-muted fw-normal ms-1",children:"= Rounded base multiplied by"})]}),d.jsx("input",{className:"form-control",type:"number",min:"0",step:".05",value:"1.125",id:"border-radius-lg"})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)("label",{className:"d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2",for:"border-radius-xl",children:["Rounded XL",d.jsx("span",{className:"text-muted fw-normal ms-1",children:"= Rounded base multiplied by"})]}),d.jsx("input",{className:"form-control",type:"number",min:"0",step:".05",value:"1.5",id:"border-radius-xl"})]}),(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsxs)("label",{className:"d-flex w-100 text-dark fs-sm fw-medium pt-1 mb-2",for:"border-radius-2xl",children:["Rounded 2XL",d.jsx("span",{className:"text-muted fw-normal ms-1",children:"= Rounded base multiplied by"})]}),d.jsx("input",{className:"form-control",type:"number",min:"0",step:".05",value:"2.25",id:"border-radius-2xl"})]})]})]}),(0,d.jsxs)("div",{className:"offcanvas-header border-top d-none",id:"customizer-btns",children:[(0,d.jsxs)("button",{className:"btn btn-secondary w-100 me-3",type:"button",id:"customizer-reset-btn",children:[d.jsx("i",{className:"ai-undo fs-lg me-2 ms-n1"}),"Reset"]}),(0,d.jsxs)("button",{className:"btn btn-primary w-100",type:"button","data-bs-toggle":"modal","data-bs-target":"#customizer-modal",children:[d.jsx("i",{className:"ai-code-curly fs-lg me-2 ms-n1"}),"Show styles"]})]})]}),d.jsx("main",{className:"page-wrapper",children:(0,d.jsxs)("div",{className:"d-lg-flex position-relative h-100",children:[d.jsx(b(),{className:"text-nav btn text-dark btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mx-3 my-3",href:f().HOMEPAGE,"data-bs-toggle":"tooltip","data-bs-placement":"left",title:"Back to home",children:d.jsx("i",{className:"ai-home"})}),d.jsx("div",{className:"d-flex flex-column align-items-center w-lg-50 h-100 px-4 py-5 my-4",children:(0,d.jsxs)("div",{className:"w-100 mt-auto mt-5",style:{maxWidth:"526px"},children:[(0,d.jsxs)("h1",{children:["Sign in to ",d.jsx("span",{className:"text-primary",children:"Uniskills"})]}),(0,d.jsxs)("p",{className:"pb-3 mb-3 mb-lg-4",children:["Don't have an account yet?\xa0\xa0",d.jsx(b(),{href:f().STUDENT_REGISTER,children:"Register as a student!"}),"\xa0 or\xa0",d.jsx(b(),{href:f().BUSINESS_REGISTER,children:"Register as a business!"})]}),(0,d.jsxs)("form",{className:"needs-validation",novalidate:!0,children:[d.jsx("div",{className:"pb-3 mb-3",children:(0,d.jsxs)("div",{className:"position-relative",children:[d.jsx("i",{className:"ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"}),d.jsx("input",{className:"form-control form-control-lg ps-5",type:"email",placeholder:"Email address",required:!0})]})}),d.jsx("div",{className:"mb-4",children:(0,d.jsxs)("div",{className:"position-relative",children:[d.jsx("i",{className:"ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"}),(0,d.jsxs)("div",{className:"password-toggle",children:[d.jsx("input",{className:"form-control form-control-lg ps-5",type:"password",placeholder:"Password",required:!0}),(0,d.jsxs)("label",{className:"password-toggle-btn","aria-label":"Show/hide password",children:[d.jsx("input",{className:"password-toggle-check",type:"checkbox"}),d.jsx("span",{className:"password-toggle-indicator"})]})]})]})}),(0,d.jsxs)("div",{className:"d-flex flex-wrap align-items-center justify-content-between pb-4",children:[(0,d.jsxs)("form-check",{className:"my-1",children:[d.jsx("input",{className:"form-check-input",type:"checkbox",id:"keep-signedin"}),d.jsx("label",{className:"form-check-label ms-1",for:"keep-signedin",children:"Keep me signed in"})]}),d.jsx(b(),{className:"fs-sm fw-semibold text-decoration-none my-1",href:f().FORGET_PASS,children:"Forgot password?"})]}),d.jsx("button",{className:"btn btn-lg btn-primary w-100 mb-4 d-flex align-items-center justify-content-center position-relative",type:"submit",children:"Sign in"}),d.jsx("h2",{className:"h6 text-center pt-3 pt-lg-4 mb-4",children:"Are you a Student, sign in with your social account"}),(0,d.jsxs)("div",{className:"row row-cols-1 row-cols-sm-2 gy-3",children:[d.jsx("div",{className:"col",children:(0,d.jsxs)(b(),{className:"btn btn-icon btn-outline-secondary btn-linkedin btn-lg w-100",href:`/${f().LOGIN}`,children:[d.jsx("i",{className:"ai-linkedin fs-xl me-2"}),d.jsx("span",{className:"mt-1",children:"LinkedIn"})]})}),d.jsx("div",{className:"col",children:(0,d.jsxs)(b(),{className:"btn btn-icon btn-outline-secondary btn-google btn-lg w-100",href:`/${f().LOGIN}`,children:[d.jsx("i",{className:"ai-google fs-xl me-2"}),d.jsx("span",{className:"mt-1",children:"Google"})]})})]})]})]})}),d.jsx("div",{className:"w-50 bg-size-cover bg-repeat-0 bg-position-center",style:{backgroundImage:"url('assets/img/account/cover.jpg')"}})]})})]})}let j=(0,i.l)(t,"default"),g=(0,i.l)(t,"getStaticProps"),N=(0,i.l)(t,"getStaticPaths"),v=(0,i.l)(t,"getServerSideProps"),y=(0,i.l)(t,"config"),w=(0,i.l)(t,"reportWebVitals"),k=(0,i.l)(t,"unstable_getStaticProps"),S=(0,i.l)(t,"unstable_getStaticPaths"),P=(0,i.l)(t,"unstable_getStaticParams"),R=(0,i.l)(t,"unstable_getServerProps"),z=(0,i.l)(t,"unstable_getServerSideProps"),I=new l.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/login",pathname:"/login",bundlePath:"",filename:""},components:{App:n.default,Document:o.default},userland:t})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},5384:e=>{e.exports=require("next/link.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var s=require("../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),t=s.X(0,[6859,8165,3773,1833,6477],()=>a(7720));module.exports=t})();