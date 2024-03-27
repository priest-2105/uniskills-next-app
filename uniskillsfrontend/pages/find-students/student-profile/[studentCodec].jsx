/* eslint-disable @next/next/no-img-element */
// Load NEXT.JS related packages
import Image from "next/image";
import Head from "next/head";
import Link from "next/link.js";

// Import the APPs layout component, to be used to struct this page
import Layout from "../../layout/public_layout_1.js";

// Bring in the config file
import config from "../../../config.js";
import axios from "@/configs/axios.js";

//Bring in Components
import PortfolioTab from "@/components/student_profile/PortfolioTab.jsx";
import EducationTab from "@/components/student_profile/EducationTab.jsx";
import FeedbackTab from "@/components/student_profile/FeedbackTab.jsx";
import AboutTab from "@/components/student_profile/AboutTab.jsx";
import VideoCV from "@/components/VideoCV.jsx";

export default function Student_Profile({ studentProfile }) {
	// Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
	const page_initials = { page_title: "Find Jobs | " + config.APP_NAME };

	console.log(studentProfile);

	return (
		<Layout initials={page_initials}>
			<Head>
      
				<style>{`


/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: grey;
  border-radius:5px;
  top: 0;
  bottom: 0;
  left: 31px;
  margin-left: -3px;
}


/* Make sure all circles are at the same spot */
.timeline .left::after, .timeline .right::after {
left: 15px;
}

/* Make all right containers behave like the left ones */
.timeline .right {
left: 0%;
}


/* Container around content */
.timeline .container {
  position: relative;
  background-color: inherit;
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
}

/* The circles on the timeline */
.timeline .container::after {
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  right: -27px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}
.timeline .container::before {
left: 60px;
border: medium solid white;
border-width: 10px 10px 10px 0;
border-color: transparent white transparent transparent;
}

/* Place the container to the left */
.timeline .left {
  left: 0;
}

/* Place the container to the right */
.timeline .right {
  left: 0%;
}

/* Add arrows to the left container (pointing right) */
 .timeline .left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.timeline .right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0px;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.timeline .right::after {
  left: 19px;
}

/* The actual content */
.timeline .content {
  padding: 20px 30px;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .timeline .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .timeline .container::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .timeline .left::after, .timeline .right::after {
  left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
  .timeline .right {
  left: 0%;
  }
}







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
      

      .top-header{
        margin-top: 50px;
        display: flex;
        width: 100%;
        align-items:center;
        padding: 50px 50px 50px 50px;
      }

      .top-header-options{
        margin-left: auto;
        display: flex;
      }
      .top-header-options li{
        list-style-type: none;
         margin-right: 25px;
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
    

    .student-background-image{ 
        opacity: 0.7;
        backdrop-filter: blur(15px);
        margin-top: 10px;
        position: relative;
        width: 100%;
        display: flex;
        align-items:center;
        padding-left: 50px;
        background-image: url(${studentProfile?.BASIC_INFO?.BANNER_IMAGE});
        // background-image: url('https://images.unsplash.com/photo-1573037384344-c01cd79306ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 300px;
      }

    .profile-top{
        margin-left: 15px;
        display: flex;
       width: 98%;
        align-items: center;
      }
      
      .mobile-profile-button{
      display: none !important; 
    }
      
      .profile-top img{ 
      border-radius: 50%;   
        height: 180px;
        width: 180px;
  
      }
     


  
 
      .profile-top-info{
        margin-left: 15px;
        display: block;
        width: 100%;
      }

      .profile-top-info h2{
        line-height: 10px;
        font-size: 23px;
      }

      .profile-top-info li{
        display: flex;
        align-items: center;
        width: fit-content;
      }

      .profile-top-info span{
        margin-right: 20px;
      }
 
      
      .job-info {
        display: none;
        margin-left: 10px;
        margin-top: 20px;
      }

      .job-info li{
        display: flex;
        align-items: start;
      }

      .job-info span{
        margin-top: 3px;
        margin-left: 5px;
      }


      .job-info i{
        margin-top: 5px;
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

     .nav-pills{ 
          display: flex;  
          width: 100%; 
          // height: 50px;
          align-items:center;
        }

        .nav-pills li{
          list-style-type:none;
        }
        .nav-pills li{
          padding:5px 5px;
        }
        .nav-pills button.active{
         padding:5px 15px;
        }

   
     .bio h4{
      margin-left: 10px;

     }

     .bio{
      border-bottom: 2px solid grey;
      padding-bottom: 40px;
     }


     .attachments-container{
      margin-top: 70px;
      padding-bottom: 50px;
      display: block;
      border-bottom: 2px solid grey;

     }

     .attachments{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
     }

     .attachments h4{
      margin-left: 10px;
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


     .student-skills-container{
      padding-top: 50px;
      display: block;
      padding-bottom: 50px;
      border-bottom: 2px solid grey;
     }

     .student-skills{
      flex-wrap: wrap;
      display: flex;
    
    }

    .student-skills a{
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

    .education-timeline{
    display: flex;
    justify-content: start !important;
    }

    
    .education-timeline .image-container{
      width: 50px;
    }

    .education-timeline img{
      height: 50px !important;
      width:50px !important;      
    }


     .right-bottom-section{
      width: 35%;
      height: 100%; 
      position: relative;
     
     }


     .top-submit-proposal{
      margin-left: auto;
      margin-top:-89px;
      margin-right:auto;
     padding: 20px 20px 20px 20px; 
      /* position: absolute;  */
      /* top:-5%; */
      /* left: 10%; */
    }

 


    
.portfolio {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-card {
  min-width: 70%;
  margin-bottom: 50px;
  overflow: hidden;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.portfolio-card h4{
  margin-left: 0px;
  color: grey;
}


.portfolio-card span{
 margin-left:auto;
  color: grey;
 margin-right: 10px;  
}

.portfolio-card p{
  color: grey;
}



.skills h5 {
  font-weight: 600;
  font-size: 20px;
}

.skills-list a{
  background-color:#3f7fca;
      margin-top: 10px;
      word-wrap: normal;
      margin-left: 10px;
}

a{text-decoration: none;}

.card img {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 350px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.card:hover img {
  transform: scale(1.1);
}

    .review-img img{
    border-radius: 50%;
    height: 60px;
    width: 60px;

    }
     
     .top-submit-proposal a{
      width: 100%;
     }


  
     
     .video-cv-card-container{
      margin-top: 20px;
      margin-left: 20px;
      margin-right: auto;
      width: 400px;
      min-height: fit-content;
      }

      .video-cv-card{
        display: block;
        height: fit-content; 
        padding: 5px 5px 5px 5px;
        width: 100%;
      }
      .video-cv-body{
        width: 100%; 
        height: 100%;
        margin: 0;
        padding: 0;
      }

      .video-cv-body iframe{  
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

      
      .fixed-rate{
        position: fixed;
        top: 25%;
        right: 1.6%;
      }
      .fixed-rate a{
        width: 380px;
      }

      .footer-fixed-rate{
        position: absolute;
        top:50%;
      }

      .vp-player{align-items: normal !important;}
      .fixed-video-cv{
        position: fixed; 
        top: 25%;
        right: 2.6%;
      }
      .footer-fixed-video-cv{
        position: absolute;
        top:55%;
      }

      .video-cv-card-container-mobile{
        display: none;
      }


      @media only screen and (max-width:991px) {
        

       .top-header{
        margin-top: 50px;
        padding: 45px 20px 15px 20px;
      }
        .student-background-image{ 
          height: 180px;
          padding-top: 20px;
          padding: 10px 10px 10px 10px;
        }

        .title-info{
          width: 100%;
          flex-wrap: wrap;
        }

        .bottom-section{
          padding: 2px 2px 2px 2px;
          display: block;
        }
        
        .left-bottom-section{
          width: 100%;
        }
        .right-bottom-section{
          width: 100%;
        }
      
        .attachments li{
       font-size: 13px;
       width: 180px;
       margin-left: 10px; 
     }

     .top-submit-proposal.message{
      position:fixed !important;
      bottom:0;
      left:0;
     }
     .top-submit-proposal.message a{
      width:100%;
     }


      .video-cv-card-container{
      display: none;}

     .fixed-rate{
        position: fixed;
        top: 95%;
        right: 0%;
        height: 130px;
        width: 100%;  
      }

           
     .top-submit-proposal{
      height: fit-content;
      background-color: transparent !important;
     }

     .top-submit-proposal a{
      width: 100% !important;
     }


      .fixed-video-cv{
        display: none; 
      }

      .video-cv-card-container-mobile{ 
        display:block;
      margin-top: 20px;
     margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding-bottom: 50px;
      min-height: fit-content;
      
      }

      }
	 

      
      @media only screen and (max-width:768px) {
      
        .top-header{
         margin-top: 50px;
         display: flex;
         width: 100%;
         align-items:center;
         padding: 45px 20px 15px 20px;
       }
 
       .top-header-options{
         margin-top: 10px;
         margin-right:3%;
         display: flex;
       }

     
        .profile-top{
        margin-left: 15px;
        display:flex;
        width: 100%;
        align-items: center;
      }
      
      
      .profile-top img{ 
      border-radius: 50%;
      height: 80px !important;
      width: 80px !important;

    }
 
    .mobile-profile-button{
      display:flex !important;
    }


    .desktop-profile-button{
      display: none !important;
    }
    .student-background-image a{
          margin-top: 20%;
          margin-right:5px ;
        }

   

      .profile-top-info{
        margin-left: 5px;
        display: block;
        width: 100%;
      }

      .profile-top-info h2{
        line-height: 5px;
        font-size: 18px;
      }

      .profile-top-info p{
        display: none;
      }

      .profile-top-info span{
        margin-right: 10px;
      }

      .profile-top-info li{
        display: none;
      }


      .job-info{
          display: block; 
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
      }

      @media only screen and (max-width:580px) {

        
        .nav-pills{ 
          overflow-x:scroll;
          white-space: nowrap; 
          display: flex;  
          width: 100%; 
          padding-bottom: 20px;
          height: 70px;
        }

         .nav-pills::-webkit-scrollbar-track {
    background-color: rgba(245, 245, 245,0.3);
    border-radius: 10px;
  }

  /* Styling for the scroll bar thumb */
 .nav-pills::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }

  /* Styling for the scroll bar thumb on hover */
  .nav-pills::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }

  /* Styling for the scroll bar corner */
  .nav-pills::-webkit-scrollbar-corner {
    background-color: rgba(245, 245, 245,0.3);
  }

  /* Optional styling for the scroll bar */
  .nav-pills::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
      }


            
      @media only screen and (max-width:580px) {
        .profile-top{
        display: block;
        }

        .profile-top-info{
          margin-top:20px;
        }
      }
  `}</style>
			</Head>

			<div className="top-header">
				<nav aria-label="breadcrumb">
					<ol className="mb-0 breadcrumb">
						<li className="breadcrumb-item">
							<Link href={config.HOMEPAGE}>Home</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							Student Details
						</li>
					</ol>
				</nav>
				<div className="top-header-options">
					<li>
						{" "}
						<a href="#"> Share</a>
						<i className="bi bi-share-fill"></i>
					</li>
					{/* <!-- <li>  <a href="#">Save</a> <i className="bi bi-suit-heart"></i> </li> --> */}
				</div>
			</div>

			<div className="student-background-image">
				<div className="profile-top">
					<img
						src={studentProfile?.BASIC_INFO?.LOGO_IMAGE}
						alt=""
						className="student-profile-picture"
						loading="lazy"
					/>

					<div className="profile-top-info text-white">
						<h2 className="text-white">{studentProfile?.BASIC_INFO?.NAME}</h2>
						<p>{studentProfile.BASIC_INFO?.PROFESSION}</p>
						<li className="">
							<i className="bi ms-2 bi-star-fill"></i> <br />{" "}
							<span>
								{studentProfile?.AVERAGE_RATING} (
								{studentProfile?.RATINGS_COUNT} Review)
							</span>
							<i className="bi ms-2 bi-geo-alt-fill"></i>
							<span> Los Angeles </span>{" "}
						</li>
					</div>
					{/* <!-- <a className="btn btn-primary desktop-profile-button ms-auto me-2" href="#">Invite</a>
      <a className="btn btn-primary desktop-profile-button ms-auto me-5" href="#">Save</a>  --> */}
				</div>
				{/* <!-- <a className="btn btn-primary mobile-profile-button btn-sm ms-auto me-2" href="#">Invite</a>
      <a className="btn btn-primary mobile-profile-button btn-sm ms-auto me-5" href="#">Save</a>  --> */}

				<a
					className="btn btn-primary btn-sm btn-lg-md btn-xl-md  ms-auto me-md-2 me-lg-2 me-xl-2"
					href="#"
				>
					Invite <i className="bi ms-1 fs-8 bi-patch-plus"></i>
				</a>
				<a
					className="btn btn-primary btn-sm ms-auto me-md-5 me-lg-5 me-xl-5"
					href="#"
				>
					Save<i className="bi ms-1 fs-8 bi-box-arrow-down"></i>{" "}
				</a>
			</div>

			<div className="job-info">
				<li className="">
					{" "}
					<p>Career :</p> <i className="bi ms-2 bi-calendar-date-fill"></i>{" "}
					<span>{studentProfile.BASIC_INFO?.PROFESSION}</span>{" "}
				</li>
				<li className="">
					{" "}
					<p>Location :</p> <i className="bi ms-2 bi-geo-alt-fill"></i>
					<span> Los Angeles </span>{" "}
				</li>
				<li className="">
					{" "}
					<p>
						Rating : <i className="bi ms-2 bi-star-fill text-warning"></i>{" "}
					</p>
					<span>
						{studentProfile?.AVERAGE_RATING} ({studentProfile?.RATINGS_COUNT}{" "}
						Review)
					</span>
				</li>
			</div>

			<div className="bottom-section">
				<div className="left-bottom-section">
					<div className="tabs mt-3 me-lg-auto col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<ul
							className="nav-pills mb-3 me-sm-4 me-xs-3"
							id="pills-tab"
							role="tablist"
						>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link rounded-pill active"
									id="pills-about-tab"
									data-bs-toggle="pill"
									data-bs-target="#pills-about"
									type="button"
									role="tab"
									aria-controls="pills-about"
									aria-selected="true"
								>
									{" "}
									About{" "}
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link rounded-pill"
									id="pills-education-tab"
									data-bs-toggle="pill"
									data-bs-target="#pills-education"
									type="button"
									role="tab"
									aria-controls="pills-education"
									aria-selected="false"
								>
									Education
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link rounded-pill"
									id="pills-portfolio-tab"
									data-bs-toggle="pill"
									data-bs-target="#pills-portfolio"
									type="button"
									role="tab"
									aria-controls="pills-portfolio"
									aria-selected="false"
								>
									Portfolio
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link rounded-pill"
									id="pills-review-tab"
									data-bs-toggle="pill"
									data-bs-target="#pills-review"
									type="button"
									role="tab"
									aria-controls="pills-review"
									aria-selected="false"
								>
									Feedback
								</button>
							</li>
						</ul>
					</div>

					<div
						className="tab-content mt-5 pt-3 pb-3 ps-lg-4 ps-xl-4 ps-md-4 pe-md-4 pe-lg-4 pe-xl-4 "
						id="pills-tabContent"
					>
						<AboutTab
							BASIC_INFO={studentProfile.BASIC_INFO}
							EXPERIENCES={studentProfile?.EXPERIENCES}
						/>

						<EducationTab
							NEUTRAL_IMAGE={studentProfile.NEUTRAL_IMAGE}
							EDU_INFO={studentProfile?.EDU_INFO}
						/>

						<PortfolioTab PORT_INFO={studentProfile?.PORT_INFO} />

						<FeedbackTab
							RATINGS_COUNT={studentProfile?.RATINGS_COUNT}
							STAR_RATINGS_DISTRIBUTION={
								studentProfile?.STAR_RATINGS_DISTRIBUTION
							}
							REVIEWS_INFO={studentProfile?.REVIEWS_INFO}
							AVERAGE_RATING={studentProfile?.BASIC_INFO?.AVERAGE_RATING}
						/>
					</div>
				</div>

				<div className="right-bottom-section">
					{/* <!-- Your page content here -->  */}
					<div className="top-submit-proposal message" id="scroll-student-rate">
						<a href="#" className="btn ms-auto me-auto btn-primary col-12">
							Message <i className="bi ms-2 fs-5 bi-send-fill"></i>
						</a>
					</div>
					<VideoCV BASIC_INFO={studentProfile.BASIC_INFO} />
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ params }) {
	const { studentCodec } = params;

	try {
		const { data, status } = await axios().get(
			`/load/student-profile/${studentCodec}`
		);

		if (status === 200) {
			return {
				props: {
					studentProfile: data.datas,
				},
			};
		}

		return {
			props: {
				studentProfile: {},
			},
		};
	} catch (error) {
		return {
			props: {
				studentProfile: {},
			},
		};
	}
}
