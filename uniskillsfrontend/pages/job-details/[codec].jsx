// Load NEXT.JS related packages
import Image from "next/image";
import Link from "next/link.js";

// Import the APPs layout component, to be used to struct this page
import Layout from "../layout/public_layout_1.js";

// Bring in the config file
import config from "../../config.js";
import axios from "@/configs/axios.js";
import SkillComp from "@/components/Skills.jsx";

export default function Job_Details({ singleJob }) {
	// Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
	const page_initials = { page_title: "Job Details | " + config.APP_NAME };

	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return words.slice(0, text.length).join(" ");
	};

	return (
		<Layout initials={page_initials}>
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

    .top-header-options{
      margin-left: auto;
      display: flex;
    }
    .top-header-options li{
      list-style-type: none;
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
      background-image: url(${
				singleJob?.BUSINESS?.BANNER_IMAGE ||
				"/assets/img/business-details/wallpaperflare.com_wallpaper.jpg"
			});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 250px;
      padding: 70px 70px 70px 70px;
    }

   .job-title::after{
    content: " ";
    position: absolute;
    background: rgba(0,0,0,0.2);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
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
    min-height: 200px;
    padding: 10px 10px 10px 10px;
    flex-wrap: wrap; 
    display: flex;
    width: 100%;
    justify-content: space-around;

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

   .attachments-container{
    margin-top: 70px;
    padding-bottom: 50px;
    display: block;
    border-bottom: 2px solid grey;

   }

   .attachments{
    padding:15px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
   }

   .attachments h4{
    margin-left: 10px;
    margin-top:10px;
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
     border-bottom: 2px solid grey; 
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
    z-index: 100;
    margin-top: -80px
   }


   .top-submit-proposal{
    width: 350px;
    margin: 0 auto;
    padding: 20px 20px 20px 20px; 
    min-height: fit-content;
    height: fit-content;
   
  }

   
   .top-submit-proposal span{
    font-size: 25px;
   }



   
   .about-seller-card-container{
    margin-top: 20px;
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

   

      .right-bottom-section{
        width: 100%;
         margin-top: 40px;
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
        `}</style>

			<div class="mt-2 align-items-center px-2  d-flex">
				<nav aria-label="breadcrumb">
					<ol class="mb-0 breadcrumb">
						<li class="breadcrumb-item">
							<Link href={config.HOMEPAGE}>Home</Link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							Job Details
						</li>
					</ol>
				</nav>
				<div class="ms-auto">
					<li className="text-primary gap-2 d-flex align-items-center">
						<i class="bi bi-share-fill border rounded-circle p-2 border-dark"></i>
						<a className="text-decoration-none" href="#">
							Share
						</a>
					</li>
				</div>
			</div>

			<div class="job-title text-white">
				<h2 className="text-light">{singleJob?.JOB_TITLE}</h2>
			</div>

			<div class="bottom-section">
				<div class="left-bottom-section">
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat( auto-fill, minmax(180px, 1fr) )",
							gap: "8px",
						}}
						className="ps-2 pe-2 pe-lg-0"
					>
						<div class="bg-secondary p-3 rounded">
							<div className="d-flex gap-1 mb-1 align-items-center">
								<small class="bi  bi-collection-fill"></small>{" "}
								<small>Job Proximity</small>{" "}
							</div>
							<span className="fw-semibold text-capitalize">
								{singleJob?.PROXIMITY || "N/A"}
							</span>{" "}
						</div>
						<div class="bg-secondary p-3 rounded">
							<div className="d-flex gap-1 mb-1 align-items-center">
								<small class="bi bi-geo-alt-fill"></small>
								<small>Location</small>
							</div>
							<span className="fw-semibold">{singleJob?.COUNTRY || "N/A"}</span>{" "}
						</div>
						<div class="bg-secondary p-3 rounded">
							<div className="d-flex gap-1 mb-1 align-items-center">
								<small class="bi bi-calendar-date-fill"></small>{" "}
								<small>Start Date</small>
							</div>
							<span className="fw-semibold text-capitalize">
								{singleJob.JOB_START_DATE || "N/A"}
							</span>{" "}
						</div>

						<div class="bg-secondary p-3 rounded">
							<div className="d-flex gap-1 mb-1 align-items-center">
								<small class="bi bi-collection-fill"></small>
								<small>Job Type</small>{" "}
							</div>
							<span className="fw-semibold">
								{singleJob?.JOB_TYPE || "N/A"}
							</span>{" "}
						</div>
						<div class="bg-secondary p-3 rounded">
							<div className="d-flex gap-1 mb-1 align-items-center">
								<small class="bi bi-calendar-date-fill"></small>
								<small> Duration</small>
							</div>
							<span className="fw-semibold">
								{singleJob?.DURATION || "N/A"}
							</span>{" "}
						</div>
					</div>
					<div className="ps-2 mt-5">
						<h4 className="mb-4">Skills Required</h4>
						{singleJob?.SKILLS_REQUIRED ? (
							<SkillComp type="page" SKILLS={singleJob?.SKILLS_REQUIRED} />
						) : (
							<li
								style={{
									borderRadius: "8px",
								}}
								className="bg-secondary py-1 px-3"
							>
								No Skill required
							</li>
						)}
					</div>

					<div className="ps-2 mt-5 pb-5 pt-3 border-bottom border-top">
						<h4 className="mb-3 fs-2 fs-lg-1 pt-4">Description</h4>
						{singleJob?.JOB_DESCRIPTION ? (
							<div
								className="fs-sm fs-md-lg pe-md-3 text-gray-900"
								dangerouslySetInnerHTML={{
									__html: truncateText(singleJob.JOB_DESCRIPTION, 40),
								}}
							/>
						) : (
							<li
								style={{
									borderRadius: "8px",
								}}
								className="bg-secondary py-1 px-3"
							>
								No Description
							</li>
						)}
					</div>
				</div>

				<div class="right-bottom-section">
					<div
						class="top-submit-proposal bg-secondary rounded d-none d-lg-block"
						id="scroll-proposal"
						style={{ zIndex: "1000000" }}
					>
						<span className="fs-4 fs-lg-2">{singleJob?.AMOUNT}</span>
						<p>{singleJob?.DURATION}</p>
						<a href="#" class="btn w-100 ms-auto me-auto btn-primary">
							Apply
						</a>
					</div>

					{/* <!-- company details card  --> */}
					<div
						class="about-seller-card-container  rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3"
						id="scroll-company-details"
					>
						<div class="about-seller-card">
							<div class="d-flex align-items-center gap-2">
								<div className="rounded-circle overflow-hidden">
									<Image
										src={
											singleJob?.BUSINESS?.LOGO_IMAGE ||
											"/assets/img/shop/cart/02.png"
										}
										width={80}
										height={80}
										alt="Componay logo"
									/>
								</div>
								<div>
									<h5 className="fs-5">{singleJob?.BUSINESS?.NAME || "N/A"}</h5>
									<h6 className="mb-0 d-flex align-items-center gap-1">
										<i class="bi bi-geo-fill"></i>
										{singleJob?.BUSINESS?.LOCATION || "N/A"}
									</h6>
								</div>{" "}
							</div>
							<div class="">
								<div class="border-top mt-1 py-3 gap-2 flex-column d-flex">
									<div className="d-flex align-items-center gap-3">
										{" "}
										<p className="mb-0">
											<span className="fw-semibold">Employees </span>{" "}
											<i class="bi bi-people-fill"></i>
										</p>
										<p className="mb-0 fw-light">
											{singleJob?.BUSINESS?.SIZE || "N/A"}
										</p>{" "}
									</div>
									<div className="d-flex align-items-center gap-3">
										{" "}
										<p className="mb-0">
											<span className="fw-semibold ">Industry</span>{" "}
											<i class="bi bi-person-workspace"></i>
										</p>
										<p className="mb-0 fw-light">
											{singleJob?.BUSINESS?.INDUSTRY || "N/A"}
										</p>{" "}
									</div>
								</div>
								<Link
									href={`${config.BUSINESS_DETAILS}/${singleJob?.JOB_OWNER_CODEC}`}
									class="btn bg-primary btn-mg col-12"
								>
									View Company
								</Link>
							</div>
						</div>
					</div>

					{/* <!-- company details card  --> */}
					<div class=" d-lg-none rounded bg-secondary pt-3 ps-3 pe-3 pb-3">
						<div class="">
							<div class="d-flex align-items-center gap-2 ">
								<div
									style={{ width: "80px", height: "80px" }}
									className="rounded-circle overflow-hidden"
								>
									<Image
										src={
											singleJob?.BUSINESS?.LOGO_IMAGE ||
											"/assets/img/shop/cart/02.png"
										}
										fill
										alt="Componay logo"
										objectFit="cover"
										objectPosition="center"
									/>
								</div>
								<div>
									<h5 className="">{singleJob?.BUSINESS?.NAME}</h5>
									<h6 className="mb-0 d-flex align-items-center gap-1">
										<i class="bi bi-geo-fill"></i>
										<span>{singleJob?.BUSINESS?.LOCATION || "N/A"}</span>
									</h6>
								</div>{" "}
							</div>
							<div class="">
								<div class="border-top mt-1 py-3 gap-2 flex-column d-flex">
									<div className="d-flex align-items-center gap-3">
										{" "}
										<p className="mb-0">
											<span className="fw-semibold">Employees </span>{" "}
											<i class="bi bi-people-fill"></i>
										</p>
										<p className="mb-0 fw-light">
											{singleJob?.BUSINESS?.SIZE || "N/A"}
										</p>{" "}
									</div>
									<div className="d-flex align-items-center gap-3">
										{" "}
										<p className="mb-0">
											<span className="fw-semibold ">Industry</span>{" "}
											<i class="bi bi-person-workspace"></i>
										</p>
										<p className="mb-0 fw-light">
											{singleJob?.BUSINESS?.INDUSTRY || "N/A"}
										</p>{" "}
									</div>
								</div>
								<Link
									href={`${config.BUSINESS_DETAILS}/${singleJob?.JOB_OWNER_CODEC}`}
									class="btn bg-primary btn-mg col-12"
								>
									View Company
								</Link>
							</div>
						</div>
					</div>
					<div
						class="position-fixed p-3 start-0 end-0 bottom-0 bg-secondary rounded d-lg-none"
						id="scroll-proposal"
						style={{ zIndex: "1000000" }}
					>
						<span className="fs-md-2">{singleJob?.AMOUNT}</span>
						<p>{singleJob?.DURATION}</p>
						<a href="#" class="btn w-100 ms-auto me-auto btn-primary">
							Apply
						</a>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ params }) {
	const { codec } = params;

	try {
		const { data, status } = await axios().get(`/job-description/${codec}`);

		if (status === 200) {
			return {
				props: {
					singleJob: data.datas,
				},
			};
		}
	} catch (error) {
		console.log(error);
		return {
			props: {
				singleJob: {},
			},
		};
	}
}
