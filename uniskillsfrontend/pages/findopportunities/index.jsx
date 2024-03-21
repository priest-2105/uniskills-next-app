// Load NEXT.JS related packages
import Image from "next/image";
import Head from "next/head";
import Link from "next/link.js";
import { useRouter } from "next/router.js";
import Select, { StylesConfig } from "react-select";
import chroma from "chroma-js";
// Load REACT.JS related packages
import React, { useState, useEffect } from "react";
import Layout from "../layout/public_layout_1.js";

// Bring in the config file
import config, { HOMEPAGE } from "../../config.js";

import { useSelector } from "react-redux";
import useJob from "@/hooks/useJob.js";

export default function FINDOPPORTUNITIES() {
	// Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
	const page_initials = { page_title: "Find Jobs | " + config.APP_NAME };
	const { jobs, meta, isLoading } = useSelector((store) => store.job);
	const { handleFetchJobs, handleFetchCompanyJobs } = useJob();
	const [selectedItems, setSelectedItems] = useState([]);
	const router = useRouter();

	const { company_codec } = router.query;

	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	const [formData, setFormData] = useState({
		filter: "",
		search: "",
		skills: [],
		job_type: [],
		location: [],
		proximity: [],
		company_codec: "",
	});

	// console.log(formData)
	const handleChange = async (e) => {
		const { name, value, type, checked } = e.target;

		// Send request to backend when filter is selected
		if (name === "filter") {
			await handleFetchJobs(formData);
		}

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
		if (company_codec) {
			handleFetchCompanyJobs(company_codec, 1);
			setFormData((prev) => {
				return {
					...prev,
					company_codec,
				};
			});
		}
		handleFetchJobs();
	}, [company_codec]);

	useEffect(() => {
		if (isFormDataFilled) {
			setSelectedItems([
				...formData.skills,
				...formData.location,
				...formData.job_type,
				...formData.proximity,
			]);
		}
	}, [formData]);

	const locationOptions = [
		{ value: "United States", label: "United States" },
		{ value: "Nigeria", label: "Nigeria" },
		{ value: "United kingdom", label: "United kingdom" },
	];
	const skillOptions = [
		{ value: "Project manager", label: "Project manager" },
		{ value: "Designer", label: "Designer" },
		{ value: "Cybersecurity", label: "Cybersecurity" },
		{ value: "HTML5", label: "HTML5" },
	];

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
          .find-jobs-header {
              background-image: url('./assets/img/find-jobs/find-jobs.png');
              background-position: right;
              background-repeat: no-repeat;
              background-size: 60% 230%;
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
				<div className="offcanvas-body">
					<h2 className="fs-6">Filter your Results</h2>

					<form onSubmit={handleSubmit} className="needs-validation row g-4">
						<div className="col-lg-10">
							<label className="form-label fs-base" for="skills">
								Search by Keywords
							</label>
							<div className="input-group">
								<input
									type="text"
									name="search"
									className="form-control"
									placeholder="Search by Title, Preferences"
									// value={formData.search}
									onChange={handleChange}
								/>
							</div>
							<div className="invalid-feedback">
								Please enter a valid keyword
							</div>
						</div>
						<div className="col-lg-10">
									<label className="form-label fs-base" htmlFor="location">
										Location
									</label>
									<div className="input-group">
										<span className="input-group-text">
											<i className="ai-map-pin"></i>
											<Select
												className="bg-transparent basic-single"
												classNamePrefix="select"
												placeholder="Type your location"
												// defaultValue={locationOptions[2]}
												onChange={(values) => {
													setFormData((prev) => {
														return {
															...prev,
															location: values.map((val) => val.value),
														};
													});
												}}
												value={formData.location.map((location) => ({
													label: location,
													value: location,
												}))}
												isMulti={true}
												options={locationOptions}
												isDisabled={false}
												isLoading={isLoading}
												isClearable={true}
												isRtl={false}
												isSearchable={true}
												name="location"
												styles={{
													control: (baseStyles) => ({
														...baseStyles,
														border: 0,
														color: "grey",
														width: "200px",
														boxShadow: "none",
														backgroundColor: "transparent",
													}),
													option: (provided, state) => ({
														...provided,
														// color: state.isSelected ? '#fff' : '#000',
														color: "grey",
														width: "200px",
														backgroundColor: state.isFocused
															? "transparent"
															: "transparent",
													}),
													singleValue: (provided) => ({
														...provided,
														backgroundColor: "transparent",
														color: "grey",
													}),
												}}
											/>
										</span>
									</div>
									<div className="invalid-feedback">
										Please provide a location!
									</div>
								</div>

						<div>
							<label className="form-label mt-3 fs-base " htmlFor="Job type">
								Job Type
							</label>
							{/* <!-- Checked switch --> */}
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch2"
									checked
								/>
								<label className="form-check-label" htmlFor="customSwitch2">
									All
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									name="job_type"
									value="Freelancer"
									checked={formData.job_type.includes("Freelancer")}
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="customSwitch1">
									Freelance
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									name="job_type"
									value="Full Time"
									checked={formData.job_type.includes("Full Time")}
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="customSwitch1">
									Full Time
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									name="job_type"
									value="Internship"
									checked={formData.job_type.includes("Internship")}
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="customSwitch1">
									Internship
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									name="job_type"
									value="Part Time"
									checked={formData.job_type.includes("Part Time")}
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="customSwitch1">
									Part Time
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									name="job_type"
									value="Temporary"
									checked={formData.job_type.includes("Temporary")}
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="customSwitch1">
									Temporary
								</label>
							</div>
						</div>
						<div className="col-lg-10">
							<label className="form-label fs-base" htmlFor="location">
								Job Proximity
							</label>

							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									value="Hybrid"
									name="proximity"
									checked={formData.proximity.includes("Hybrid")}
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="customSwitch1">
									Hybrid
								</label>
							</div>

							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									value="Onsite"
									name="proximity"
									checked={formData.proximity.includes("Onsite")}
									onChange={handleChange}
								/>
								<label className="form-check-label" htmlFor="customSwitch1">
									Onsite
								</label>
							</div>

							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									value="Remote"
									name="proximity"
									checked={formData.proximity.includes("Remote")}
									onChange={handleChange}
								/>
								<label className="form-check-label" for="customSwitch1">
									Remote
								</label>
							</div>
						</div>

						<div className="col-lg-10">
							<label className="form-label mt-3 fs-base " for="skills">
								Skills
							</label>
							{/* <!-- Checked switch --> */}
							<div className="input-group">
								<span className="input-group-text">
									<Select
										className="bg-transparent basic-single"
										classNamePrefix="select"
										placeholder="Type your location"
										// defaultValue={skillOptions[2]}
										options={skillOptions}
										isMulti={true} // Enable multi-select
										isDisabled={false}
										isLoading={isLoading}
										isClearable={true}
										isRtl={false}
										isSearchable={true}
										name="skills"
										onChange={(values) => {
											setFormData((prev) => {
												return {
													...prev,
													skills: values.map((val) => val.value),
												};
											});
										}}
										value={formData.skills.map((skill) => ({
											label: skill,
											value: skill,
										}))}
										styles={{
											control: (baseStyles) => ({
												...baseStyles,
												border: 0,
												color: "grey",
												width: "200px",
												boxShadow: "none",
												backgroundColor: "transparent",
											}),
											option: (provided, state) => ({
												...provided,
												// color: state.isSelected ? '#fff' : '#000',
												color: "grey",
												width: "200px",
												backgroundColor: state.isFocused
													? "transparent"
													: "transparent",
											}),
											singleValue: (provided) => ({
												...provided,
												backgroundColor: "transparent",
												color: "grey",
											}),

											multiValue: (provided) => ({
												...provided,
												backgroundColor: "lightgrey", // Customize the background color of selected options
											}),
											multiValueLabel: (provided) => ({
												...provided,
												color: "black", // Customize the text color of selected options
											}),
										}}
									/>
								</span>
							</div>
						</div>

						<div className="col-lg-10">
							<button className="btn btn-lg btn-primary mt-2" type="submit">
								{" "}
								Find Jobs{" "}
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* <!-- end of mobile filter  --> */}

			{/* <!-- Hero--> */}
			<section className="bg-secondary py-5" data-jarallax data-speed="0.6">
				<div className="container position-relative pt-5 pb-md-2 pb-lg-3 pb-xl-4 pb-xxl-5">
					{/* <!-- Breadcrumb--> */}
					<nav aria-label="breadcrumb find-jobs-header">
						<ol class="pt-lg-3 mb-0 breadcrumb">
							<li class="breadcrumb-item">
								<Link href={`${HOMEPAGE}`}>Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Find Jobs
							</li>
						</ol>
					</nav>
					{/* <!-- Page title--> */}

					<div className="find-jobs-header d-block mt-5 pt-3 ps-lg-5 pe-lg-3 ps-xl-5 pe-xl-3  pe-xs-1 ps-xs-1 pb-3 rounded">
						<h1 className="display-6 mt-2 mb-4">Find Jobs</h1>
						<div className=" col-lg-5 col-md-6 col-sm-8 col-xs-md">
							<form
								className="needs-validation row g-4"
								onSubmit={handleSubmit}
							>
								<div className="input-group mb-3 input-group-sm">
									<input
										type="text"
										className="form-control"
										placeholder="Search for Jobs"
										name="search"
										// value={formData.search}
										onChange={handleChange}
										aria-label="Search Jobs"
										aria-describedby="button-addon2"
									/>
									<button
										className="btn btn-outline-secondary"
										type="submit"
										id="button-addon2"
									>
										Search
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Search--> */}
			<section className="pt-3 pb-4 px-lg-3">
				<div className=" py-lg-2 py-xl-4 py-xxl-5">
					<div className="row mt-1 ps-2  pt-sm-2 pt-md-3 pt-lg-4">
						<div className="col-lg-3 desktpp-filter bg-secondary rounded pt-3 ps-3 pe-2 pb-3 mb-5 mb-lg-0">
							<h2 className="fs-5">Filter your Results</h2>

							<form
								className="needs-validation row g-4"
								onSubmit={handleSubmit}
							>
								<div className="col-lg-10">
									<label className="form-label fs-base" htmlFor="skills">
										Search by Keywords
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
										/>
									</div>
									<div className="invalid-feedback">
										Please enter a valid keyword
									</div>
								</div>
								<div className="col-lg-10">
									<label className="form-label fs-base" htmlFor="location">
										Location
									</label>
									<div className="input-group">
										<span className="input-group-text">
											<i className="ai-map-pin"></i>
											<Select
												className="bg-transparent basic-single"
												classNamePrefix="select"
												placeholder="Type your location"
												// defaultValue={locationOptions[2]}
												onChange={(values) => {
													setFormData((prev) => {
														return {
															...prev,
															location: values.map((val) => val.value),
														};
													});
												}}
												value={formData.location.map((location) => ({
													label: location,
													value: location,
												}))}
												isMulti={true}
												options={locationOptions}
												isDisabled={false}
												isLoading={isLoading}
												isClearable={true}
												isRtl={false}
												isSearchable={true}
												name="location"
												styles={{
													control: (baseStyles) => ({
														...baseStyles,
														border: 0,
														color: "grey",
														width: "200px",
														boxShadow: "none",
														backgroundColor: "transparent",
													}),
													option: (provided, state) => ({
														...provided,
														// color: state.isSelected ? '#fff' : '#000',
														color: "grey",
														width: "200px",
														backgroundColor: state.isFocused
															? "transparent"
															: "transparent",
													}),
													singleValue: (provided) => ({
														...provided,
														backgroundColor: "transparent",
														color: "grey",
													}),
												}}
											/>
										</span>
									</div>
									<div className="invalid-feedback">
										Please provide a location!
									</div>
								</div>
								<div>
									<div>
										<label
											className="form-label mt-3 fs-base "
											htmlFor="Job type"
										>
											Job Type
										</label>

										<div className="form-check form-switch pb-1">
											<input
												type="checkbox"
												className="form-check-input"
												id="customSwitcher1"
												name="job_type"
												value="Freelancer"
												checked={formData.job_type.includes("Freelancer")}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="customSwitch1"
											>
												Freelance
											</label>
										</div>
										<div className="form-check form-switch pb-1">
											<input
												type="checkbox"
												className="form-check-input"
												id="customSwitcher2"
												name="job_type"
												value="Full-Time"
												checked={formData.job_type.includes("Full-Time")}
												onChange={handleChange}
											/>
											<label className="form-check-label" for="customSwitch1">
												Full Time
											</label>
										</div>
										<div className="form-check form-switch pb-1">
											<input
												type="checkbox"
												className="form-check-input"
												id="customSwitcher3"
												name="job_type"
												value="Internship"
												checked={formData.job_type.includes("Internship")}
												onChange={handleChange}
											/>
											<label
												className="form-check-label"
												htmlFor="customSwitch1"
											>
												Internship
											</label>
										</div>
										<div className="form-check form-switch pb-1">
											<input
												type="checkbox"
												className="form-check-input"
												id="customSwitcher4"
												name="job_type"
												value="Part-Time"
												checked={formData.job_type.includes("Part-Time")}
												onChange={handleChange}
											/>
											<label className="form-check-label" for="customSwitch1">
												Part Time
											</label>
										</div>
										<div className="form-check form-switch pb-1">
											<input
												type="checkbox"
												className="form-check-input"
												id="customSwitcher5"
												name="job_type"
												value="Temporary"
												checked={formData.job_type.includes("Temporary")}
												onChange={handleChange}
											/>
											<label className="form-check-label" for="customSwitch1">
												Temporary
											</label>
										</div>
									</div>
								</div>
								<div className="col-lg-10">
									<label className="form-label fs-base" htmlFor="location">
										Job Proximity
									</label>

									<div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch1"
											value="Hybrid"
											name="proximity"
											checked={formData.proximity.includes("Hybrid")}
											onChange={handleChange}
										/>
										<label className="form-check-label" for="customSwitch1">
											Hybrid
										</label>
									</div>

									<div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch1"
											value="Onsite"
											name="proximity"
											checked={formData.proximity.includes("Onsite")}
											onChange={handleChange}
										/>
										<label className="form-check-label" htmlFor="customSwitch1">
											Onsite
										</label>
									</div>

									<div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch1"
											value="Remote"
											name="proximity"
											checked={formData.proximity.includes("Remote")}
											onChange={handleChange}
										/>
										<label className="form-check-label" htmlFor="customSwitch1">
											Remote
										</label>
									</div>
								</div>

								<div className="col-lg-10">
									<label className="form-label mt-3 fs-base " for="skills">
										Skills
									</label>
									{/* <!-- Checked switch --> */}
									<div className="input-group">
										<span className="input-group-text">
											<Select
												className="bg-transparent basic-single"
												classNamePrefix="select"
												placeholder="Type your skills"
												// defaultValue={skillOptions[2]}
												onChange={(values) => {
													setFormData((prev) => {
														return {
															...prev,
															skills: values.map((val) => val.value),
														};
													});
												}}
												value={formData.skills.map((skill) => ({
													value: skill,
													label: skill,
												}))}
												options={skillOptions}
												isMulti={true} // Enable multi-select
												isDisabled={false}
												isLoading={isLoading}
												isClearable={true}
												isRtl={false}
												isSearchable={true}
												name="skills"
												styles={{
													control: (baseStyles) => ({
														...baseStyles,
														border: 0,
														color: "grey",
														width: "200px",
														boxShadow: "none",
														backgroundColor: "transparent",
													}),
													option: (provided, state) => ({
														...provided,
														// color: state.isSelected ? '#fff' : '#000',
														color: "grey",
														width: "200px",
														backgroundColor: state.isFocused
															? "transparent"
															: "transparent",
													}),
													singleValue: (provided) => ({
														...provided,
														backgroundColor: "transparent",
														color: "grey",
													}),
													multiValue: (provided) => ({
														...provided,

														backgroundColor: "lightgrey", // Customize the background color of selected options
													}),
													multiValueLabel: (provided) => ({
														...provided,
														color: "black", // Customize the text color of selected options
													}),
												}}
											/>
										</span>
									</div>
								</div>

								<div className="col-lg-10">
									<button className="btn btn-lg btn-primary mt-2" type="submit">
										{" "}
										Find Jobs{" "}
									</button>
								</div>
							</form>
						</div>
						<div className="col-lg-9 col-xl-9 col-sm-12 col-xs-12">
							<div className="row row-cols-12 row-cols-sm-12">
								<div className="col">
									<div className="card search-results px-0 border-0 mb-4">
										<div className="card-body search-results">
											<a
												className="text-decoration-none filter-header"
												data-bs-toggle="offcanvas"
												href="#filteroffcanvasExample"
												role="button"
												aria-controls="filteroffcanvasExample"
											>
												Filter<i className="bi bi-bar-chart-steps"></i>
											</a>

											<div className="listing-top">
												{isFormDataFilled() && selectedItems.length > 0 && (
													<>
														<h4>Selected</h4>
														<div className="selected-options-container col-12 d-flex">
															<div className="selected-options gap-1">
																{selectedItems
																	.filter((it) => it !== "")
																	.map((item, index) => {
																		return (
																			<a
																				key={index}
																				className="bg-faded-danger rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2"
																			>
																				<button
																					onClick={() =>
																						handleRemoveSelectedItem(
																							item,
																							index
																						)
																					}
																					type="button"
																					className="text-danger border-0  bg-transparent"
																				>
																					&#x2715;
																				</button>{" "}
																				{item}
																			</a>
																		);
																	})}
															</div>
															<div className="clear-options ms-auto">
																<a
																	onClick={handleClearSelected}
																	className="text-danger"
																>
																	Clear all
																</a>
															</div>
														</div>{" "}
													</>
												)}

												<div className="result-page-list d-flex align-items-center mt-5">
													<p>
														Showing {meta.firstItem} - {meta.lastItem} of{" "}
														{meta.total_items} Result
													</p>
													<div className="option-select col-2 ms-auto">
														<select
															className="form-select bg-transparent text-dark"
															id="filter"
															name="filter"
															value={formData.filter}
															onChange={handleChange}
															aria-label="Default select example"
															defaultValue={""}
														>
															<option
																className="bg-transparent text-dark"
																value=""
															>
																Select Filter
															</option>
															<option
																className="bg-transparent text-dark"
																value="newest"
															>
																Newest
															</option>
															<option
																className="bg-transparent text-dark"
																value="oldest"
															>
																Oldest
															</option>
															<option
																className="bg-transparent text-dark"
																value="highest"
															>
																Highest
															</option>
															<option
																className="bg-transparent text-dark"
																value="lowest"
															>
																Lowest
															</option>
														</select>
													</div>
												</div>
											</div>

											<div className="job-listing-body pt-3  ps-lg-3 pe-lg-3 pb-5 border-0">
												{jobs &&
													jobs.length > 0 &&
													jobs.map((job, index) => (
														<div
															key={index}
															className="job-list-card-container mb-5 bg-secondary p-3 p-md-4 p-md-4 rounded"
														>
															<div className="job-list-card row">
																<div className="row col-12 gap-1">
																	<div className="job-list-image col-2">
																		<Image
																			height={40}
																			width={50}
																			src={job?.BUSINESS?.LOGO_IMAGE}
																			// src={job.BUSINESS_IMAGE}
																			alt="Uniskills Job Opportunities - Users Business Componay logo"
																			objectPosition="center"
																		/>
																	</div>
																	<div className="col-9">
																		<h5>{job?.JOB_TITLE}</h5>
																		<div className="list-info gap-1">
																			{job?.COUNTRY !== "NULL" && (
																				<div>
																					<i className="bi bi-geo-alt-fill"></i>
																					<span className="fs-xs fs-md-sm mt-4">
																						{job?.COUNTRY}
																					</span>
																				</div>
																			)}
																			<div>
																				<i className="bi bi-calendar-week-fill"></i>{" "}
																				<span className="fs-xs fs-md-sm">
																					{job?.DATE_POSTED}
																				</span>
																			</div>
																			<div className="border-0">
																				<i className="bi bi-rocket-takeoff-fill"></i>{" "}
																				<span className="fs-xs fs-md-sm">
																					{job?.APPLICATION_COUNTS} proposals
																				</span>
																			</div>
																		</div>
																	</div>
																</div>

																<div className="row">
																	<div className="job-list-body row col-12 col-md-8 pt-3">
																		{job?.JOB_DESCRIPTION ? (
																			<div
																				className="fs-sm fs-md-lg pe-md-3 text-gray-900"
																				dangerouslySetInnerHTML={{
																					__html:
																						truncateText(
																							job?.JOB_DESCRIPTION,
																							40
																						) +
																						(job?.JOB_DESCRIPTION.split(" ")
																							.length > 40
																							? "<span className='text-muted' style='cursor: pointer'>See more</span>"
																							: ""
																						).toString(),
																				}}
																			/>
																		) : null}

																		<div className="skills">
																			{job?.SKILLS_REQUIRED?.map(
																				(item, index) =>
																					index > 3 ? null : (
																						<span
																							className="my-1 my-md-0"
																							key={index}
																						>
																							{item.trim()}
																						</span>
																					)
																			)}
																			{job?.SKILLS_REQUIRED.length > 3 &&
																				(job?.SKILLS_REQUIRED.length - 4 === 0
																					? null
																					: "+" +
																					  (job.SKILLS_REQUIRED.length - 4))}
																		</div>

																		{job?.STOPPED_RECEIVING_JOB_APPLICATION ===
																			"TRUE" && (
																			<small className="text-danger mt-2 d-block">
																				{" "}
																				Job has temporarily stopped receiving
																				applicants{" "}
																			</small>
																		)}
																	</div>

																	<div class="job-list-action">
																		<h5>{job?.AMOUNT}</h5>
																		{job?.NEGOTIABLE === "TRUE" ? (
																			<p>Negotiable</p>
																		) : (
																			<p>Fixed</p>
																		)}
																		<p> {job?.JOB_TYPE}</p>
																		<Link
																			href={`/findopportunities/job-description/${job?.JOB_CODEC}`}
																			class="btn ms-1 btn-primary btn-sm col-12 "
																		>
																			View
																		</Link>
																	</div>
																</div>
															</div>
														</div>
													))}

												{jobs.length === 0 && !isLoading && (
													<h2>
														No jobs available.
														<a href={`${config.HOMEPAGE}`}>
															Return to Homepage
														</a>{" "}
													</h2>
												)}
												{isLoading && <p>Loading...</p>}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>{" "}
					</div>
				</div>
			</section>
		</Layout>
	);
}
