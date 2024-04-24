// Load NEXT.JS related packages
import Image from "next/image";
import Head from "next/head";
import Link from "next/link.js";
import { useRouter } from "next/router.js";
// Load REACT.JS related packages
import React, { useState, useEffect } from "react";
import Layout from "../layout/public_layout_1.js";

// Bring in the config file
import config, { HOMEPAGE } from "../../config.js";

import { useSelector } from "react-redux";

import useJob from "@/hooks/useJob.js";
import useOthers from "@/hooks/useOthers.js";
import SelectInput from "@/components/reusable/SelectInput.jsx";
import TopFilter from "@/components/TopFilter.jsx";
import CheckInput from "@/components/reusable/CheckInput.jsx";
import Pagination from "@/components/Pagination.jsx";
import SkillComp from "@/components/Skills.jsx";

export default function FINDOPPORTUNITIES() {
	// Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
	const page_initials = { page_title: "Find Jobs | " + config.APP_NAME };
	const { jobs, meta, isLoading } = useSelector((store) => store.job);
	const { handleFetchJobs } = useJob();
	const [selectedItems, setSelectedItems] = useState([]);
	const router = useRouter();
	const [countries, setCountries] = useState([]);
	const [skills, setSkills] = useState([]);
	const [isSkillsLoading, setIsSkillsLoading] = useState(false);
	const [isCountriesLoading, setIsCountriesLoading] = useState(false);
	const [isFilterVisible, setIsFilterVisible] = useState(true);
	const { currentPage } = router.query;
	const [page, setPage] = useState(currentPage ?? 1);

	const { getCountries, getSkills } = useOthers();

	const { company_codec } = router.query;

	const [formData, setFormData] = useState({
		filter: "",
		search: "",
		skills: [],
		job_type: [],
		location: [],
		proximity: [],
		business_codec: company_codec || " ",
	});

	const truncateText = (text, limit) => {
		let words = text.split(" ");

		words = words.filter((word) => word !== "");

		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	const handleChange = async (e) => {
		const { name, value, type, checked } = e.target;

		// Send request to backend when filter is selected
		// if (name === "filter") {
		// 	await handleFetchJobs(formData);
		// }
		setPage(1);
		setFormData((prevData) => {
			if (type === "checkbox") {
				const updatedValue = checked
					? [...(prevData[name] || []), value]
					: (prevData[name] || []).filter((item) => item !== value);
				return {
					...prevData,
					[name]: updatedValue,
				};
			} else {
				return {
					...prevData,
					[name]: value,
				};
			}
		});
	};

	const isFormDataFilled = () => {
		const { skills, job_type, location, proximity } = formData;

		return (
			skills.length > 0 ||
			job_type.length > 0 ||
			location.length > 0 ||
			proximity.length > 0
		);
	};

	const handleRemoveSelectedItem = (item) => {
		setSelectedItems((prev) => {
			return prev.filter((it) => it !== item && it !== "");
		});

		if (formData.skills.includes(item)) {
			setFormData((prev) => {
				return {
					...prev,
					skills: prev.skills.filter((sk) => sk != item),
				};
			});
		} else if (formData.job_type.includes(item)) {
			setFormData((prev) => {
				return {
					...prev,
					job_type: prev.job_type.filter((sk) => sk != item),
				};
			});
		} else if (formData.location.includes(item)) {
			setFormData((prev) => {
				return {
					...prev,
					location: prev.location.filter((sk) => sk != item),
				};
			});
		} else if (formData.proximity.includes(item)) {
			setFormData((prev) => {
				return {
					...prev,
					proximity: prev.proximity.filter((sk) => sk != item),
				};
			});
		}
	};

	const handleClearSelected = () => {
		setFormData((prev) => {
			return {
				...prev,
				job_type: [],
				skills: [],
				location: [],
				proximity: [],
			};
		});
		setSelectedItems([]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await handleFetchJobs(formData);
	};

	useEffect(() => {
		if (!company_codec) return;

		setFormData((prev) => {
			return {
				...prev,
				business_codec: company_codec,
			};
		});
		handleFetchJobs(formData, page);
		getCountries();
		getSkills();

		if (page > 1) {
			router.query.currentPage = page;
		} else {
			delete router.query.currentPage;
		}

		router.push(router);
	}, [company_codec, page]);

	const handleGetCountries = async () => {
		try {
			setIsCountriesLoading(true);
			const countriesObj = await getCountries();

			const count = countriesObj.map((country) => {
				return {
					label: country.nicename,
					value: country.nicename,
				};
			});

			setCountries(count);
		} catch (error) {
			console.log(error);
		} finally {
			setIsCountriesLoading(false);
		}
	};

	const handleGetSkills = async () => {
		try {
			setIsSkillsLoading(true);
			const countriesObj = await getSkills();

			const skills = countriesObj.map((country) => {
				return {
					label: country.title,
					value: country.title,
				};
			});

			setSkills(skills);
		} catch (error) {
			console.log(error);
		} finally {
			setIsSkillsLoading(false);
		}
	};

	useEffect(() => {
		if (isFormDataFilled) {
			setSelectedItems([
				...formData.skills,
				...formData.location,
				...formData.job_type,
				...formData.proximity,
			]);
		}

		handleFetchJobs(formData, page);
	}, [formData]);

	const jobTypes = [
		"freelancer",
		"full-time",
		"internship",
		"part-time",
		"temporary",
	];

	const jobProximity = ["hybrid", "onsite", "remote"];

	const toggleFilter = () => {
		setIsFilterVisible(!isFilterVisible);
	};

	const companyProfile = jobs && jobs[0]?.BUSINESS;

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
          -webkit-transition: all 0.4s 0.2s ease-in-out;
          transition: all 0.4s 0.2s ease-in-out;
          background-color: #fff;
          opacity: 0;
          visibility: hidden;
          z-index: 9999;
      }
  
      .opacity-50 {
          opacity: 0.5 !important;
      }
  
      .more-h {
          height: auto;
      }
  
      .less-h {
          height: 215px;
          overflow: hidden;
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

      .top-description{
        background-image: url(${companyProfile?.BANNER_IMAGE});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        // width: 90%;
        overflow: hidden;
        margin-left: auto;
        align-items: center;
        margin-right: auto;
        height: 300px;
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
  
      .filter-header {
          display: none;
      }
  
      .selected-options {
          flex-wrap: wrap;
          display: flex;
          word-wrap: normal;
      }
  
      .selected-options a {
          word-wrap: normal;
      }
  
      .input-group {
          padding: 0 !important;
      }


  .job-listing-body{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  
      .job-list-card-container {
          min-width: 200px;
          min-height: 210px;
      }
  
      .job-list-card {
          display: flex;
          height: 100%;
          width: 100%;
      }
  
      .job-list-image {
          width: auto;
          height: 100%;
      }
  
      .job-list-image img {
          border-radius: 50%;
          height: 90px;
          width: 100px;
      }
  
      .job-list-body {
          padding: 0 15px;
          width: 80%;
          border-right: 1.5px solid rgba(211, 201, 201, 0.5);
  
      }
  
      .list-info {
          padding-left: 10px;
          display: flex;
          max-width: 350px;
          font-size: 13px;
          flex-wrap: wrap;
          align-items: center;
          opacity: 0.7;
      }
  
      .list-info li {
          line-height: 15px;
          margin-bottom: 10px;
          padding-right: 10px;
          margin-right: 5px;
          list-style-type: none;
          border-right: 2px solid rgba(211, 201, 201, 0.5);
      }
  
      .list-info-mobile{
          display: none;
      }
  
  
  
      .job-list-body p {
          margin-left: 10px;
          font-size: 14px !important;
          font-weight: 400;
  
      }
  
      .skills {
          align-items: center;
          display: flex;
      }
  
      .skills span {
          font-size: 12px;
          padding: 5px 15px;
          background-color: #3f7fca;
          margin-right: 10px;
          color: #fff;
          border-radius: 20px;
      }
  
      .job-list-action {
          width: 20%;
          padding-top: 5%;
          align-items: center;
          justify-content: end;
          min-height: 100px;
          text-align: center;
		  
      }
  
      .job-list-action h5 {
          line-height:5px;
          font-weight: 700;
          margin-right: auto;
      }
  
      .job-list-action p{
          margin-top:-5px;
      }
  
  
      .job-list-action a{
          margin-top:-5px;
      }
  
  
  
      @media only screen and (max-width:1200px) {
  
          .filter-header {
              display: block;
              text-align: end;
              margin-left: auto;
              font-size: 14px;
              font-weight: 700;
          }
  
          .desktop-filter {
              display: none;
          }
  
      }
  
  
      @media only screen and (min-width:768px) {
        //   .find-jobs-header {
		// 	  height: 250px;
        //       background-image: url('./assets/img/find-jobs/find-jobs.png');
        //       background-position: right;
        //       background-repeat: no-repeat;
        //       background-size: 60% 230%;
        //   }
  
  
  
  .top-description{
	height: 400px;
  }
  
  
          .find-students-header {
              height: 250px;
          }
  
  
      }
  
  
  
      @media only screen and (max-width:768px) {
  
  
  
          find-students-header {
              background-image: url("{{ IMAGE_RENDERER('assets/img/find-jobs/Job hunt-bro.png', 'STATIC_ASSETS') }}");
              background-position: center;
              background-repeat: no-repeat;
              height: 100px;
              background-size: 60% 230%;
          }
  
  
          .filter-header {
              display: block;
              text-align: end;
              margin-left: auto;
              font-size: 14px;
              font-weight: 700;
          }
  
          .desktpp-filter {
              display: none;
          }
  
          .job-list-card-container {
              height: fit-content;
              width: 100%;
          }
  
          .job-list-image{
              display: flex;
          }
  
          .job-list-card {
              width: 100%;
              display: block;
              height: fit-content;
          }
  
          .list-info-mobile{
          display: block;
          padding-left: 8px;
      }
  
      .list-info-mobile h6{
          margin-top:20px;
          line-height:normal;
      }
  
  
      .list-info-desktop{
          display:none;
      }
  
      .job-title-desktop{
          display: none;
      }
  
          .job-list-body {
              width: 100%;
              padding-top: 10px;
              padding-left: 0px;
              width: 100%;
              border-right: none;
              padding-bottom: 15px;
              border-bottom: 1.5px solid rgba(211, 201, 201, 0.3);
              min-height: 100px;
          }
  
  
          .job-list-image img {
              border-radius: 50%;
              height: 70px;
              width: 70px;
          }
  
          .list-info {
              padding-left: 0px;
          }
  
  
          .job-list-body p {
              margin-left: 0px;
              font-size: 14px;
          }
  
          .job-list-action {
              padding-top: 10px;
              width: 100%;
              display: block;
              justify-content: start;
              text-align: start;
              min-height: 100px;
          }
  
  
          .job-list-action h5 {
              margin-right: 0;
  
          }
  
      }
  
      .select2-selection {
          background-color: transparent !important;
          border: 1px solid #ccc !important;
      }
  
      .select2-search__field {
          font-size: 12px !important;
          padding: 4px 0px !important;
          opacity: 0.7;
      }
  
      .select2-selection__choice {
          font-size: 12px !important;
          background: #3F7FCA !important;
          color: #fff !important;
          border: none !important;
      }
  
      .select2-selection__choice * {
          border: none !important;
      }
      `}</style>
			</Head>

			{/* <!-- mobile filter  --> */}

			<div
				className="offcanvas offcanvas-start"
				tabindex="-1"
				id="filteroffcanvasExample"
				aria-labelledby="filteroffcanvasExampleLabel"
			>
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="filteroffcanvasExampleLabel">
						Filter
					</h5>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body pb-5">
					{/* <h2 className="fs-6">Filter your Results</h2> */}

					<form onSubmit={handleSubmit} className="needs-validation row g-4">
						<div className="col-lg-10">
							<label className="form-label fs-base" for="skills">
								<small>Search by Keywords</small>
							</label>
							<div className="input-group">
								<input
									type="text"
									name="search"
									className="form-control"
									placeholder="Search by Title, Preferences"
									onChange={handleChange}
								/>
							</div>
							<div className="invalid-feedback">
								Please enter a valid keyword
							</div>
						</div>

						<SelectInput
							formData={formData}
							options={countries}
							name="location"
							label="location"
							placeHolder={"Select Location"}
							onMenuOpen={handleGetCountries}
							setFormData={setFormData}
							isLoading={isCountriesLoading}
						/>

						<SelectInput
							formData={formData}
							options={skills}
							name="skills"
							label="skills"
							placeHolder={"Select Skills"}
							onMenuOpen={handleGetSkills}
							setFormData={setFormData}
							isLoading={isSkillsLoading}
						/>

						<div>
							<label className="form-label mt-3 fs-base " htmlFor="Job type">
								<small>Job Type</small>
							</label>
							{/* <!-- Checked switch --> */}
							{jobTypes.map((jobType, index) => {
								return (
									<CheckInput
										key={index}
										value={jobType}
										handleChange={handleChange}
										formData={formData}
										name={"job_type"}
									/>
								);
							})}
						</div>
						<div className="col-lg-10">
							<label className="form-label fs-base" htmlFor="location">
								<small>Job Proximity</small>
							</label>
							{jobProximity.map((jobPro, index) => {
								return (
									<CheckInput
										value={jobPro}
										handleChange={handleChange}
										key={index}
										formData={formData}
										name={"proximity"}
									/>
								);
							})}
						</div>

						{/* <div className="col-lg-10">
							<button className="btn btn-lg btn-primary mt-2" type="submit">
								{" "}
								Find Jobs{" "}
							</button>
						</div> */}
					</form>
				</div>
			</div>
			{/* <!-- end of mobile filter  --> */}

			{/* <!-- Hero--> */}
			<div class="top-description">
				<div class="top-description-spinners rounded top-description-spinner-1"></div>
				<div class="top-description-spinners rounded top-description-spinner-2"></div>

				<div class="top-description-contents">
					<div class="top-description-business-details">
						<Image
							src={companyProfile?.LOGO_IMAGE || "/assets/img/shop/cart/02.png"}
							width={120}
							height={100}
							alt="Company Logo"
							className="ms-4 ms-md-0"
						/>
						<div class="top-description-business-details-info">
							{" "}
							<h4 title="name" className="fs-5 fs-md-4 text-white text-nowrap">
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

			{/* <!-- Search--> */}
			<section className="pt-3 pb-4 px-lg-3">
				<div className=" py-lg-2 py-xl-4 py-xxl-5">
					<div className="row mt-1 h-100 ps-2 pb-3  pt-sm-2 pt-md-3 pt-lg-4">
						<div
							className={`desktop-filter bg-secondary rounded pt-3 ps-3 pe-2 pb-3 mb-5 mb-lg-0 ${
								isFilterVisible ? "col-lg-3" : "col-lg-0 d-none"
							}`}
						>
							<h2 className="fs-5">
								Filter your Results{" "}
								<button
									className="ms-5 border-0 bg-transparent"
									onClick={toggleFilter}
								>
									<i className="bi bi-dash text-danger fs-1"></i>
								</button>
							</h2>

							<form
								className="needs-validation row g-4"
								onSubmit={handleSubmit}
							>
								<div className="col-lg-10">
									<label className="form-label fs-base" htmlFor="search">
										<small>Search by Keywords</small>
									</label>
									<div className="input-group">
										<span className="input-group-text">
											<i className="ai-search"></i>
										</span>
										<input
											type="text"
											className="form-control"
											placeholder="Search by Title, Preferences"
											name="search"
											// value={formData.search}
											onChange={handleChange}
											id="search"
										/>
									</div>
									<div className="invalid-feedback">
										Please enter a valid keyword
									</div>
								</div>

								<SelectInput
									formData={formData}
									options={countries}
									name="location"
									label="location"
									placeHolder={"Search by Location"}
									onMenuOpen={handleGetCountries}
									setFormData={setFormData}
									isLoading={isCountriesLoading}
								/>
								<SelectInput
									formData={formData}
									options={skills}
									name="skills"
									label="skills"
									placeHolder={"Search by skill"}
									onMenuOpen={handleGetSkills}
									setFormData={setFormData}
									isLoading={isSkillsLoading}
								/>

								<div>
									<div>
										<label
											className="form-label mt-3 fs-base "
											htmlFor="Job type"
										>
											<small>Job Type</small>
										</label>
										{jobTypes.map((jobType, index) => {
											return (
												<CheckInput
													key={index}
													value={jobType}
													handleChange={handleChange}
													formData={formData}
													name={"job_type"}
												/>
											);
										})}
									</div>
								</div>
								<div className="col-lg-10">
									<label className="form-label fs-base" htmlFor="location">
										<small>Job Proximity</small>
									</label>

									{jobProximity.map((jobPro, index) => {
										return (
											<CheckInput
												value={jobPro}
												handleChange={handleChange}
												key={index}
												formData={formData}
												name={"proximity"}
											/>
										);
									})}
								</div>

								{/* <div className="col-lg-10">
									<button className="btn btn-lg btn-primary mt-2" type="submit">
										{" "}
										Find Jobs{" "}
									</button>
								</div> */}
							</form>
						</div>
						<div
							className={`col-lg-12 col-sm-12 col-xs-12 p-4 ${
								isFilterVisible ? "col-xl-9" : "col-xl-12"
							}`}
						>
							<div className="row row-cols-12 row-cols-sm-12">
								<div className="col">
									<div
										className={`${
											isLoading ? "opacity-25 disabled" : "opacity-100"
										} card search-results px-0 border-0 mb-4`}
									>
										<div className="px-2 px-lg-4">
											<a
												className="text-decoration-none filter-header"
												data-bs-toggle="offcanvas"
												href="#filteroffcanvasExample"
												role="button"
												aria-controls="filteroffcanvasExample"
											>
												Filter<i className="bi bi-bar-chart-steps"></i>
											</a>

											<button
												onClick={toggleFilter}
												className={` mb-5 d-none d-lg-none text-primary fw-bold text-grey d-sm-none d-xs-none fs-2 border-0 bg-transparent ${
													isFilterVisible ? "d-xl-none" : "d-xl-block"
												}`}
											>
												{" "}
												Filter <i className="bi bi-bar-chart-steps"></i>
											</button>

											<TopFilter
												selectedItems={selectedItems}
												handleClearSelected={handleClearSelected}
												handleRemoveSelectedItem={handleRemoveSelectedItem}
												formData={formData}
												isFormDataFilled={isFormDataFilled}
												handleChange={handleChange}
												meta={meta}
											/>

											<div className="mt-3 p-lg-0 p-md-3  pb-5">
												{jobs &&
													jobs.length > 0 &&
													jobs.map((job, index) => (
														<div
															key={index}
															class="mb-5 bg-secondary py-4 px-3 px-lg-5"
														>
															<div class="row">
																<div className="col-12 col-lg-7 border-end-lg border-bottom border-bottom-lg-0">
																	<h6 className="ps-1 ps-md-0">
																		{job.JOB_TITLE}
																	</h6>
																	<div className="mb-3 ps-1 ps-md-0">
																		<div class="d-flex mb-1 align-items-center gap-1 flex-wrap ">
																			<span>
																				<small class="bi bi-calendar-week-fill"></small>{" "}
																				<small>{job.DATE_POSTED}</small>
																			</span>
																			<span class="border-0 d-flex gap-1 align-items-center">
																				<small class="bi bi-rocket-takeoff-fill"></small>
																				<small>{job.APPLICATION_COUNTS}</small>
																				<small>proposals</small>
																			</span>
																		</div>
																		<div>
																			{" "}
																			<small class="bi bi-geo-alt-fill"></small>
																			<small>{job.COUNTRY}, </small>
																			<small className="text-capitalize">
																				({job?.PROXIMITY})
																			</small>
																		</div>
																	</div>

																	{job?.JOB_DESCRIPTION ? (
																		<div
																			className="fs-sm fs-md-lg pe-md-3 text-gray-900"
																			dangerouslySetInnerHTML={{
																				__html: truncateText(
																					job?.JOB_DESCRIPTION,
																					20
																				),
																			}}
																		/>
																	) : null}

																	{/* <div class="mb-3 d-flex gap-2">
																		{job?.SKILLS_REQUIRED.map(
																			(skill, index) => {
																				return (
																					<small
																						className="text-white text-capitalize rounded-pill px-3 py-1"
																						style={{
																							background: "#3F7FCA",
																							fontSize: "10px",
																						}}
																						key={index}
																					>
																						{skill}
																					</small>
																				);
																			}
																		).slice(0, 3)}{" "}
																		{job.SKILLS_REQUIRED.length > 3 &&
																			`+ ${job.SKILLS_REQUIRED.length - 3}`}
																	</div> */}
																	<div className="mb-3">
																		<SkillComp
																			type="card"
																			key={index}
																			SKILLS={job?.SKILLS_REQUIRED}
																		/>
																	</div>
																</div>
																<div class="pt-2 pt-lg-4 col-12 ps-lg-5 col-lg-4 text-lg-center">
																	<h5>{job?.AMOUNT}</h5>
																	{job.NEGOTIABLE === "TRUE" ? (
																		<p>Negotiable</p>
																	) : (
																		<p>Fixed</p>
																	)}
																	<Link
																		href={`${config.JOB_DETAILS}/${job.JOB_CODEC}`}
																		class="btn bg-primary btn-md"
																	>
																		View
																		{/* <i class="bi ms-1 fs-4 bi-arrow-up-right"></i> */}
																	</Link>
																</div>
															</div>
														</div>
													))}
											</div>
											<div className="d-flex justify-content-center">
												{jobs && jobs.length > 0 && (
													<Pagination
														isLoading={isLoading}
														meta={meta}
														setPage={setPage}
													/>
												)}
											</div>
										</div>
										<div className="job-listing-body pt-5 mt-3  p-lg-0 p-md-3 p-sm-1 pb-5">
											{jobs.length === 0 && !isLoading && (
												<h2>
													No jobs available.
													<a href={`${config.HOMEPAGE}`}>
														Return to Homepage
													</a>{" "}
												</h2>
											)}
										</div>
										{isLoading && jobs.length === 0 && (
											<div className="job-listing-body pt-5 mt-3  p-lg-0 p-md-3 p-sm-1 pb-5">
												<p>Loading...</p>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
