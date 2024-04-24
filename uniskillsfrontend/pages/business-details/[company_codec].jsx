// Load NEXT.JS related packages
import Image from "next/image";
import Head from "next/head";
import Link from "next/link.js";

// Import the APPs layout component, to be used to struct this page
import Layout from "../layout/public_layout_1.js";

// Bring in the config file
import config from "../../config.js";
import { useRouter } from "next/router.js";
import axios from "@/configs/axios.js";
import CompanyJobCard from "@/components/jobs/CompanyJobCard.jsx";

export default function Business_Profile({ companyProfile }) {
	// Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
	const page_initials = { page_title: "Business Details | " + config.APP_NAME };
	const router = useRouter();

	const { company_codec } = router.query;

	// console.log(companyProfile.VIDEO_LINK);

	console.log(companyProfile);

	const videoLink = companyProfile?.VIDEO_LINK?.replace("watch?v=", "embed/");

	// console.log(companyProfile, videoLink, companyProfile.VIDEO_LINK);

	return (
		<Layout initials={page_initials}>
			<Head>
				<style>{`
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
    display: none;
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

  

  .top-description{
    background-image: url(${companyProfile?.BANNER_IMAGE});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
   
    overflow: hidden;
    margin-left: auto;
    align-items: center;
    margin-right: auto;
    height: 400px;
    position: relative;
    display: flex;
  }

  .top-description::before {
    content: "";
    display:flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); 
    } 

  .top-description-spinners{
    position: absolute;
    background-color: rgba(255, 255, 255,0.5);
    width: 100px; 
    height:100px;
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
	z-index: 1;
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

  .top-description-options-socials{
	display: flex;
    gap: 10px
  }

  .top-description-options-socials li{
	width: 30px;
	height: 30px;
	background-color:white;
	border-radius: 50%;
	display:flex;
	align-items: center;
	justify-content: center;
  }

  .top-description-options-socials li a{
    // text-decoration: none;
    line-height: 1;
    margin-bottom: 3px;
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

//   .job-list-card{
//     display: block;
//     height: 100%;
//     width: 100%;
//   }

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

	 .top-description-spinners{
		
		width: 200px; 
		height:200px;
		
	  }
   }


   @media only screen and (max-width:768px){


   find-jobs-header{
     background-image: url('./assets/img/find-jobs/Job\ hunt-bro.png');
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

  .top-description{
  
    height: 300px;
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
  
        `}</style>
			</Head>

			<div class="body">
				<div class="top-description">
					<div class="top-description-spinners rounded top-description-spinner-1"></div>
					<div class="top-description-spinners rounded top-description-spinner-2"></div>

					<div class="top-description-contents">
						<div class="top-description-business-details">
							<Image
								src={
									companyProfile?.LOGO_IMAGE || "/assets/img/shop/cart/02.png"
								}
								width={120}
								height={100}
								alt="Company Logo"
								className="ms-4 ms-md-0"
							/>
							<div class="top-description-business-details-info">
								{" "}
								<h4
									title="name"
									className="fs-5 fs-md-4 text-white text-nowrap"
								>
									{companyProfile?.NAME}
								</h4>
								<p className="text-white d-flex align-items-center gap-2">
									{" "}
									<i class="bi bi-pin-map-fill"></i>
									<span>{companyProfile?.LOCATION} </span>
								</p>
							</div>
						</div>

						<div class="top-description-options">
							<ul class="top-description-options-socials pe-4 pe-lg-0">
								{companyProfile?.FACEBOOK && (
									<li>
										<a href={companyProfile?.FACEBOOK}>
											{" "}
											<i class="bi fs-sm bi-facebook"></i>{" "}
										</a>
									</li>
								)}
								{companyProfile?.INSTAGRAM && (
									<li>
										<a href={companyProfile?.INSTAGRAM} class="rounded-pill">
											{" "}
											<i class="bi fs-sm bi-instagram"></i>{" "}
										</a>
									</li>
								)}
								{companyProfile?.TWITTER && (
									<li>
										<a href={companyProfile?.TWITTER} class="rounded-pill">
											{" "}
											<i class="bi fs-sm bi-twitter"></i>{" "}
										</a>
									</li>
								)}
								{companyProfile?.WHATSAPP && (
									<li>
										<a href={companyProfile?.WHATSAPP} class="rounded-pill">
											{" "}
											<i class="bi fs-sm bi-whatsapp"></i>{" "}
										</a>
									</li>
								)}
								{companyProfile?.PINTEREST && (
									<li>
										<a href={companyProfile?.PINTEREST} class="rounded-pill">
											{" "}
											<i class="bi fs-sm bi-pinterest"></i>{" "}
										</a>
									</li>
								)}
								{companyProfile?.LINKEDIN && (
									<li>
										<a href={companyProfile?.LINKEDIN} class="rounded-pill">
											{" "}
											<i class="bi fs-sm bi-linkedin"></i>{" "}
										</a>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>

				<div class="bottom-section">
					<div class="bottom-section-left">
						<div class="profile-info profile-info-desktop">
							<h4 class="profile-info-header">
								<span> Profile</span> Info
							</h4>

							<div class="profile-info-overview rounded">
								<ul>
									<li>
										{" "}
										<i class="bi bi-cash-stack"></i>{" "}
									</li>
									<li>
										<span>Company size</span>
										<p>{companyProfile.SIZE || "N/A"}</p>
									</li>
								</ul>

								<ul>
									<li>
										{" "}
										<i class="bi bi-phone-fill"></i>{" "}
									</li>
									<li>
										<span>Phone</span>
										<p>{companyProfile?.PHONE || "N/A"}</p>
									</li>
								</ul>

								<ul>
									<li>
										{" "}
										<i class="bi bi-envelope"></i>{" "}
									</li>
									<li>
										<span>Email</span>
										<p>{companyProfile?.EMAIL || "N/A"}</p>
									</li>
								</ul>

								<ul>
									<li>
										{" "}
										<i class="bi bi-pin-map-fill"></i>{" "}
									</li>
									<li>
										<span>Address</span>
										<p>{companyProfile?.ADDRESS || "N/A"}</p>
									</li>
								</ul>
							</div>
						</div>

						{companyProfile?.TOP_JOBS && (
							<div class="available-jobs mt-5">
								<h4>Available Jobs</h4>

								<div class="job-listing-body pt-3 pb-5">
									{companyProfile?.TOP_JOBS?.map((job, index) => {
										return (
											<CompanyJobCard
												companyProfile={companyProfile}
												key={index}
												job={job}
											/>
										);
									})}

									<Link
										href={`${config.FINDOPPORTUNITIES}/${company_codec}`}
										style={{ backgroundColor: "#3f7fca" }}
										class="btn col-12 btn-md"
									>
										View More
									</Link>
								</div>
							</div>
						)}
					</div>

					<div class="bottom-section-right">
						<div class="profile-info-mobile profile-info">
							<h4 class="profile-info-header">
								<span> Profile</span> Info
							</h4>

							<div class="profile-info-overview rounded">
								<ul>
									<li>
										{" "}
										<i class="bi bi-cash-stack"></i>{" "}
									</li>
									<li>
										<span>Company size</span>
										<p>{companyProfile.SIZE || "N/A"}</p>
									</li>
								</ul>

								<ul>
									<li>
										{" "}
										<i class="bi bi-phone-fill"></i>{" "}
									</li>
									<li>
										<span>Phone</span>
										<p>{companyProfile.PHONE || "N/A"}</p>
									</li>
								</ul>

								<ul>
									<li>
										{" "}
										<i class="bi bi-envelope"></i>{" "}
									</li>
									<li>
										<span>Email</span>
										<p>{companyProfile.EMAIL || "N/A"}</p>
									</li>
								</ul>

								<ul>
									<li>
										{" "}
										<i class="bi bi-pin-map-fill"></i>{" "}
									</li>
									<li>
										<span>Adress</span>
										<p>{companyProfile?.ADDRESS || "N/A"}</p>
									</li>
								</ul>
							</div>
						</div>

						<div class="about-company mt-5">
							<h4>About Company</h4>

							{companyProfile?.ABOUT_BUSINESS ? (
								<div
									className="fs-sm fs-md-lg pe-md-3 text-gray-900"
									dangerouslySetInnerHTML={{
										__html: companyProfile?.ABOUT_BUSINESS,
									}}
								/>
							) : (
								<li
									style={{
										borderRadius: "8px",
									}}
									className="bg-secondary py-1 px-3"
								>
									N/A
								</li>
							)}
						</div>

						<div class="office-photos">
							<h4>Office-photos</h4>

							{/* <!-- Image gallery --> */}
							<div class="gallery">
								{companyProfile?.IMAGE_1 && (
									<a href="#" class="gallery-item d-block card-hover">
										<div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
											<i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
											<div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
												Entrance
											</div>
											<div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
										</div>
										<Image
											src={companyProfile?.IMAGE_1}
											// src={
											// 	"https://media.istockphoto.com/id/507839056/photo/entrance-of-the-modern-building.jpg?s=612x612&w=0&k=20&c=xisBw5l5pgwTp21vS2sN4T_IkPSRtK0Yin56u0DXu9I="
											// }
											width={120}
											height={160}
											class="d-block rounded-4"
											alt="Image caption"
										/>
									</a>
								)}

								{companyProfile?.IMAGE_2 && (
									<a href="#" class="gallery-item d-block card-hover">
										<div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
											<i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
											<div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
												Managers Office
											</div>
											<div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
										</div>
										<Image
											src={companyProfile?.IMAGE_2}
											width={120}
											height={160}
											class="d-block rounded-4"
											alt="Image caption"
										/>
									</a>
								)}

								{companyProfile?.IMAGE_3 && (
									<a href="#" class="gallery-item d-block card-hover">
										<div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
											<i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
											<div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
												Office Space
											</div>
											<div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
										</div>
										<Image
											src={companyProfile?.IMAGE_3}
											width={120}
											height={160}
											class="d-block rounded-4"
											alt="Image caption"
										/>
									</a>
								)}

								{companyProfile?.IMAGE_URL_4 && (
									<a href="#" class="gallery-item d-block card-hover">
										<div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
											<i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
											<div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
												Dining
											</div>
											<div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
										</div>
										<Image
											src={companyProfile?.IMAGE_4}
											width={120}
											height={160}
											class="d-block rounded-4"
											alt="Image caption"
										/>
									</a>
								)}

								{companyProfile?.IMAGE_URL_5 && (
									<a href="#" class="gallery-item d-block card-hover">
										<div class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 office-photos-img rounded-4 overflow-hidden zindex-2 opacity-0">
											<i class="ai-zoom-in fs-2 text-white position-relative zindex-2"></i>
											<div class="position-absolute bottom-0 start-0 w-100 text-center text-white fs-sm fw-medium zindex-2 pb-3">
												Meeting Confrence Room
											</div>
											<div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40"></div>
										</div>
										<Image
											src={companyProfile?.IMAGE_5}
											width={120}
											height={160}
											class="d-block rounded-4"
											alt="Image caption"
										/>
									</a>
								)}
							</div>
						</div>

						<div class="video">
							<h4>Video</h4>
							<iframe
								width="100%"
								height="415"
								src={videoLink}
								title="Company video"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ params }) {
	const { company_codec } = params;

	try {
		const { data, status } = await axios().get(
			`/load/company-profile/${company_codec}`
		);

		if (status === 200) {
			return {
				props: {
					companyProfile: data.datas,
				},
			};
		}
	} catch (error) {
		console.log(error);
		return {
			props: {
				companyProfile: {},
			},
		};
	}
}
