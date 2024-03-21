// Load NEXT.JS related packages
import Image from "next/image";
import Head from "next/head";
import Link from "next/link.js";

// Import the APPs layout component, to be used to struct this page
import Layout from "../../layout/public_layout_1.js";

// Bring in the config file
import config from "../../../config.js";
import axios from "@/configs/axios.js";

export default function Student_Profile({ studentProfile }) {
	// Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
	const page_initials = { page_title: "Find Jobs | " + config.APP_NAME };

	console.log(studentProfile);

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
          height: 60px;
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
    }

    .education-timeline img{
      height: 50px;
      width: 50px;      
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
      height: 80px;
      width: 80;

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

			<div class="top-header">
				<nav aria-label="breadcrumb">
					<ol class="mb-0 breadcrumb">
						<li class="breadcrumb-item">
							<Link href={config.HOMEPAGE}>Home</Link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							Student Details
						</li>
					</ol>
				</nav>
				<div class="top-header-options">
					<li>
						{" "}
						<a href="#"> Share</a>
						<i class="bi bi-share-fill"></i>
					</li>
					{/* <!-- <li>  <a href="#">Save</a> <i class="bi bi-suit-heart"></i> </li> --> */}
				</div>
			</div>

			<div class="student-background-image">
				<div class="profile-top">
					<img
						src={studentProfile?.BASIC_INFO?.LOGO_IMAGE}
						alt=""
						class="student-profile-picture"
						loading="lazy"
					/>
					<div class="profile-top-info">
						<h2>{studentProfile?.BASIC_INFO?.NAME}</h2>
						<p>{studentProfile.BASIC_INFO?.PROFESSION}</p>
						<li class="">
							<i class="bi ms-2 bi-star-fill"></i> <br />{" "}
							<span>3.1 (1 Review)</span>
							<i class="bi ms-2 bi-geo-alt-fill"></i>
							<span> Los Angeles </span>{" "}
						</li>
					</div>
					{/* <!-- <a class="btn btn-primary desktop-profile-button ms-auto me-2" href="#">Invite</a>
      <a class="btn btn-primary desktop-profile-button ms-auto me-5" href="#">Save</a>  --> */}
				</div>
				{/* <!-- <a class="btn btn-primary mobile-profile-button btn-sm ms-auto me-2" href="#">Invite</a>
      <a class="btn btn-primary mobile-profile-button btn-sm ms-auto me-5" href="#">Save</a>  --> */}

				<a
					class="btn btn-primary btn-sm btn-lg-md btn-xl-md  ms-auto me-md-2 me-lg-2 me-xl-2"
					href="#"
				>
					Invite <i class="bi ms-1 fs-8 bi-patch-plus"></i>
				</a>
				<a
					class="btn btn-primary btn-sm ms-auto me-md-5 me-lg-5 me-xl-5"
					href="#"
				>
					Save<i class="bi ms-1 fs-8 bi-box-arrow-down"></i>{" "}
				</a>
			</div>

			<div class="job-info">
				<li class="">
					{" "}
					<p>Career :</p> <i class="bi ms-2 bi-calendar-date-fill"></i>{" "}
					<span>{studentProfile.BASIC_INFO?.PROFESSION}</span>{" "}
				</li>
				<li class="">
					{" "}
					<p>Location :</p> <i class="bi ms-2 bi-geo-alt-fill"></i>
					<span> Los Angeles </span>{" "}
				</li>
				<li class="">
					{" "}
					<p>Rating :</p> <i class="bi ms-2 bi-star-fill"></i>{" "}
					<span>3.1 (1 Review)</span>{" "}
				</li>
			</div>

			<div class="bottom-section">
				<div class="left-bottom-section">
					<div class="tabs ms-auto mt-3 me-lg-auto ms-lg-4 ms-xl-4 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<ul
							class="nav-pills mb-3 me-sm-4 me-xs-3"
							id="pills-tab"
							role="tablist"
						>
							<li class="nav-item" role="presentation">
								<button
									class="nav-link rounded-pill active"
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
							<li class="nav-item" role="presentation">
								<button
									class="nav-link rounded-pill"
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
							<li class="nav-item" role="presentation">
								<button
									class="nav-link rounded-pill"
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
							<li class="nav-item" role="presentation">
								<button
									class="nav-link rounded-pill"
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
						class="tab-content mt-5 pt-3 pb-3 ps-lg-4 ps-xl-4 ps-md-4 pe-md-4 pe-lg-4 pe-xl-4 "
						id="pills-tabContent"
					>
						<div
							class="tab-pane fade active show"
							id="pills-about"
							role="tabpanel"
							aria-labelledby="pills-about-tab"
							tabindex="0"
						>
							<div class="bg-transparent rounded">
								<div class="bio">
									<h4>Bio</h4>

									{/* <p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Obcaecati sequi quam explicabo vel porro voluptatum
										perspiciatis Lorem, ipsum dolor sit amet consectetur
										adipisicing elit. Quia magnam laboriosam maxime maiores
										quibusdam? At ea tempore aut neque officiis sit deleniti,
										eaque libero, corrupti mollitia illum doloribus laborum
										tenetur. incidunt corrupti cumque aspernatur, Lorem ipsum
										dolor sit,
									</p> */}
									<div
										dangerouslySetInnerHTML={{
											__html: studentProfile?.BASIC_INFO?.BIO,
										}}
									></div>
								</div>

								<div class="student-skills-container">
									<h4>Skills</h4>
									<div class="student-skills">
										{studentProfile.BASIC_INFO.SKILLS.map((skill, index) => {
											return (
												<a
													href="#"
													key={index}
													class="btn btn-sm  rounded-pill"
												>
													{skill}
												</a>
											);
										})}
									</div>
								</div>

								{/* <!-- experience  --> */}
								<div class="widget-stat bg-transparent rounded pt-5">
									<h4>Experience</h4>
									{/* <div class="card-body">
                        <div class="widget-media mt-4 mb-3 pt-3 rounded bg-secondary">
                            <ul class="timeline">
                                <li style="list-style-type: none;">
                                    <div class="timeline-panel">
                                        <div class="media me-2 media-info" style="margin-right: 3% !important;">TBC</div>
                                        <div class="media-body">
                                            <div class="d-flex justify-content-between flex-wrap" style="padding-top: 0; padding-bottom: 0;margin-bottom: -1%;">
                                                <h6>Front end developer</h6>
                                            </div>
                                            <h6 class="d-block"><i>The Boring Company</i></h6>
                                            <span class="d-block  mb-1">
                                                <i>
                                                   11/05/2013 - 12/11/2023
                                                </i>
                                            </span>
                                        <small class="d-block ">
                                                <span class="fas fa-map-marker-alt" style="margin-right: 1%;"></span>Los Angeles
                                            </small>
                                            <p class="mt-2 me-5">
                                                <i class="fs-16">
                                              <a href="#" style='color: #828690 !important;' target='_blank'> ...read more </a>
                                                </i>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>
                <div class="card-footer pb-5">
                        <a href="#" target="_blanck" class="card-link text-dark float-end">
                            <span class="text-info" style="margin-right: 5px;"><i class="fa fa-arrow-down color-info"></i></span> See all
                        </a>
                    </div> */}
								</div>
								{/* <!-- end of experience  --> */}
							</div>
						</div>
						{/* <!-- end of about tab  --> */}

						{/* <!-- education tab  --> */}
						<div
							class="tab-pane fade border-0"
							id="pills-education"
							role="tabpanel"
							aria-labelledby="pills-education-tab"
							tabindex="0"
						>
							<div class="col-xl-12 col-xxl-12 col-lg-12 border-0">
								<h4>Education</h4>
								<div class="card-body px-0 border-0 pt-5">
									{/* <div id="DZ_W_TimeLine" class="widget-timeline dlab-scroll " style="height: fit-content;">
                              <ul class="timeline">
                                
                                  <li >
                                    <div class="timeline-badge primary"></div>
                                 <div class="timeline-panel text-decoration-none" href="#">
                                   <div class="education-timeline align-items-center">
                                 <img src="/assets/img/business-details/schoollogo-removebg-preview.png" alt=""/>
                                     <div class="ms-3">
                                        <span>11/09/2009 - 12/08/2010</span>
                                        <h6 class="mb-0">Eminent College</h6>
                                    <p class="mb-0">(O-level)</p>
                                     </div>  </div>
                                     </div>
                                </li>


                                <li >
                                  <div class="timeline-badge info"></div>
                               <div class="timeline-panel text-decoration-none" href="#">
                                 <div class="education-timeline align-items-center">
                               <img src="assets/img/business-details/schoollogo-removebg-preview.png" alt=""/>
                                   <div class="ms-3">
                                      <span>11/09/2010 - 12/08/2015</span>
                                      <h6 class="mb-0">Havard</h6>
                                  <p class="mb-0">(BSC) Computer Science</p>
                                   </div>  </div>
                                   </div>
                              </li>



                              <li>
                                <div class="timeline-badge primary"></div>
                             <div class="timeline-panel text-decoration-none" href="#">
                               <div class="education-timeline align-items-center">
                             <img src="assets/img/business-details/schoollogo-removebg-preview.png" alt=""/>
                                 <div class="ms-3">
                                    <span>01/12/2015 - 12/08/2021</span>
                                    <h6 class="mb-0">California State University </h6>
                                <p class="mb-0">(Masters) Computer Science</p>
                                 </div>  </div>
                                 </div>
                            </li>
                              </ul>
                          </div> */}
								</div>
							</div>
						</div>
						{/* <!-- end of education tab  --> */}

						{/* <!-- portfolio tab  --> */}

						<div
							class="tab-pane fade"
							id="pills-portfolio"
							role="tabpanel"
							aria-labelledby="pills-portfolio-tab"
							tabindex="0"
						>
							<div class="border-0 portfolio-card shadow-sm my-class-card card pb-3 bg-secondary pe-2">
								{/* <!-- Button trigger modal --> */}

								<div
									id="carouselExampleIndicatorssoftware"
									class="carousel slide"
								>
									<div class="carousel-indicators">
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorssoftware"
											data-bs-slide-to="0"
											class="active"
											aria-current="true"
											aria-label="Slide 1"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorssoftware"
											data-bs-slide-to="1"
											aria-label="Slide 2"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorssoftware"
											data-bs-slide-to="2"
											aria-label="Slide 3"
										></button>
									</div>
									<div class="carousel-inner">
										<div class="carousel-item active">
											<img
												src="/assets/img/business-details/code.jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
										<div class="carousel-item">
											<img
												src="/assets/img/business-details/code (2).jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
										<div class="carousel-item">
											<img
												src="/assets/img/business-details/xode.jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
									</div>
									<button
										class="carousel-control-prev"
										type="button"
										data-bs-target="#carouselExampleIndicatorssoftware"
										data-bs-slide="prev"
									>
										<span
											class="carousel-control-prev-icon"
											aria-hidden="true"
										></span>
										<span class="visually-hidden">Previous</span>
									</button>
									<button
										class="carousel-control-next"
										type="button"
										data-bs-target="#carouselExampleIndicatorssoftware"
										data-bs-slide="next"
									>
										<span
											class="carousel-control-next-icon"
											aria-hidden="true"
										></span>
										<span class="visually-hidden">Next</span>
									</button>
								</div>
								<h4 class="border-0 card-header text-start p-3">
									software engine
								</h4>
								<div class="skills-list pt-4 ps-1">
									<a href="#" class="rounded-pill btn btn-sm">
										HTML
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										CSS
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										UI/UX
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										Graphic Desiging
									</a>
								</div>
								<p class="border-0  p-4">
									Software engineering is the branch of computer science that
									deals with the design, development , testing, and maintenance
									of software applications. Software engineers apply engineering
								</p>
								<span>11/03/2022</span>
							</div>

							<div class="border-0 portfolio-card shadow-sm my-class-card card pb-3 bg-secondary pe-2">
								<div id="carouselExampleIndicatorscraft" class="carousel slide">
									<div class="carousel-indicators">
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorscraft"
											data-bs-slide-to="0"
											class="active"
											aria-current="true"
											aria-label="Slide 1"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorscraft"
											data-bs-slide-to="1"
											aria-label="Slide 2"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorscraft"
											data-bs-slide-to="2"
											aria-label="Slide 3"
										></button>
									</div>
									<div class="carousel-inner">
										<div class="carousel-item active">
											<img
												src="/assets/img/business-details/clothes (2).jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
										<div class="carousel-item">
											<img
												src="/assets/img/business-details/clothes (3).jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
										<div class="carousel-item">
											<img
												src="/assets/img/business-details/clothes.jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
									</div>
									<button
										class="carousel-control-prev"
										type="button"
										data-bs-target="#carouselExampleIndicatorscraft"
										data-bs-slide="prev"
									>
										<span
											class="carousel-control-prev-icon"
											aria-hidden="true"
										></span>
										<span class="visually-hidden">Previous</span>
									</button>
									<button
										class="carousel-control-next"
										type="button"
										data-bs-target="#carouselExampleIndicatorscraft"
										data-bs-slide="next"
									>
										<span
											class="carousel-control-next-icon"
											aria-hidden="true"
										></span>
										<span class="visually-hidden">Next</span>
									</button>
								</div>
								<h4 class="border-0 card-header text-start p-3">Baker</h4>
								<div class="skills-list pt-4 ps-1">
									<a href="#" class="rounded-pill btn btn-sm">
										HTML
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										CSS
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										UI/UX
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										Graphic Desiging
									</a>
								</div>
								<p class="border-0  p-4">
									Software engineering is the branch of computer science that
									deals with the design, development , testing, and maintenance
									of software applications. Software engineers apply engineering
								</p>
								<span>11/03/2022</span>
							</div>

							<div class="border-0 portfolio-card shadow-sm my-class-card card pb-3 bg-secondary pe-2">
								<div id="carouselExampleIndicatorscraft" class="carousel slide">
									<div class="carousel-indicators">
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorscraft"
											data-bs-slide-to="0"
											class="active"
											aria-current="true"
											aria-label="Slide 1"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorscraft"
											data-bs-slide-to="1"
											aria-label="Slide 2"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicatorscraft"
											data-bs-slide-to="2"
											aria-label="Slide 3"
										></button>
									</div>
									<div class="carousel-inner">
										<div class="carousel-item active">
											<img
												src="/assets/img/business-details/clothes (2).jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
										<div class="carousel-item">
											<img
												src="/assets/img/business-details/clothes (3).jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
										<div class="carousel-item">
											<img
												src="/assets/img/business-details/clothes.jpg"
												class="d-block w-100"
												alt="..."
											/>
										</div>
									</div>
									<button
										class="carousel-control-prev"
										type="button"
										data-bs-target="#carouselExampleIndicatorscraft"
										data-bs-slide="prev"
									>
										<span
											class="carousel-control-prev-icon"
											aria-hidden="true"
										></span>
										<span class="visually-hidden">Previous</span>
									</button>
									<button
										class="carousel-control-next"
										type="button"
										data-bs-target="#carouselExampleIndicatorscraft"
										data-bs-slide="next"
									>
										<span
											class="carousel-control-next-icon"
											aria-hidden="true"
										></span>
										<span class="visually-hidden">Next</span>
									</button>
								</div>
								<h4 class="border-0 card-header text-start p-3">Craft</h4>
								<div class="skills-list pt-4 ps-1">
									<a href="#" class="rounded-pill btn btn-sm">
										HTML
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										CSS
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										UI/UX
									</a>
									<a href="#" class="rounded-pill btn btn-sm">
										Graphic Desiging
									</a>
								</div>
								<p class="border-0  p-4">
									Software engineering is the branch of computer science that
									deals with the design, development , testing, and maintenance
									of software applications. Software engineers apply engineering
								</p>
								<span>11/03/2022</span>
							</div>
						</div>
						{/* <!-- end of portfolio tab  --> */}
					</div>
				</div>

				<div class="right-bottom-section">
					{/* <!-- Your page content here -->  */}
					<div class="top-submit-proposal" id="scroll-student-rate">
						<a href="#" class="btn ms-auto me-auto btn-primary">
							Message <i class="bi ms-2 fs-5 bi-send-fill"></i>
						</a>
					</div>

					{/* <!-- video cv desktop card  --> */}
					<div
						class="video-cv-card-container bg-secondary rounded mb-5 bg-secondary pt-2 ps-1 pe-1 pb-4"
						id="scroll-video-cv"
					>
						<div class="video-cv-card pb-4">
							<h5 class="ms-2 mt-1">Video CV</h5>
							<iframe
								width="100%"
								height="400"
								src="https://www.youtube.com/embed/c_PZTAW5piQ"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
					</div>

					{/* <!-- video cv mobile card   --> */}
					<div class=" video-cv-card-container-mobile mb-5 bg-secondary pt-2 ps-1 pe-1 pb-4">
						<div class="video-cv-card pb-4">
							<h5 class="ms-2 mt-1">Video CV</h5>
							<iframe
								width="100%"
								height="400"
								src="https://www.youtube.com/embed/c_PZTAW5piQ"
								title="YouTube video player"
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
	const { studentCodec } = params;

	try {
		const { data, status } = await axios().get(
			`/load/student-profile/${studentCodec}`
		);

		console.log(data);

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
