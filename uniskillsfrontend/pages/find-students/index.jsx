// Load NEXT.JS related packages
import Image from "next/image";
import Head from "next/head";
import Link from "next/link.js";

// Import the APPs layout component, to be used to struct this page
import Layout from "../layout/public_layout_1.js";

// Bring in the config file
import config, { Student_Profile } from "../../config.js";
import { useState, useEffect } from "react";
import customAxios from "@/configs/axios.js";
import useStudent from "@/hooks/useStudent.js";
import { useSelector } from "react-redux";
import Select, { StylesConfig } from "react-select";

export default function FIND_STUDENT() {
	// Every data needed to customize this page, from inside the Layout component, we must pass such data through here.  style={{ marginBottom: "8%", marginTop: "3%" }}
	const page_initials = { page_title: "Find Students | " + config.APP_NAME };
	const [isFilterVisible, setIsFilterVisible] = useState(true);

	// const [isLoading, setIsLoading] = useState();
	const { students, meta, isLoading } = useSelector((store) => store.student);

	const [formData, setFormData] = useState({
		filter: "",
		search: "",
		rating: "",
		job_type: "",
		skills: [],
		location: [],
	});
	const { handleFetchStudents } = useStudent();
	const [selectedItems, setSelectedItems] = useState([]);

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

	// console.log(formData, students, meta);

	const toggleFilter = () => {
		setIsFilterVisible(!isFilterVisible);
	};

	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		if (name === "filter") {
			handleFetchStudents(formData);
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		// fetchStudentsData(formData);
		handleFetchStudents(formData);
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
		}
	};

	const handleClearSelected = () => {
		setFormData((prev) => {
			return {
				...prev,
				job_type: [],
				skills: [],
				location: [],
			};
		});
		setSelectedItems([]);
	};

	useEffect(() => {
		handleFetchStudents(formData);
	}, []);

	const isFormDataFilled = () => {
		const { skills, job_type, location, proximity } = formData;

		return skills.length > 0 || job_type.length > 0 || location.length > 0;
	};

	useEffect(() => {
		if (isFormDataFilled) {
			setSelectedItems([
				...formData.skills,
				...formData.location,
				...formData.job_type,
			]);
		}
	}, [formData]);

	return (
		<Layout initials={page_initials}>
			<Head>
				<style>{`
  <style>
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
  .page-loading.active > .page-loading-inner {
    opacity: 1;
  }
  .page-loading-inner > span {
    display: block;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: normal;
    color: #6f788b;
  }
  .dark-mode .page-loading-inner > span {
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

  .filter-header{
    display: none;
  }
  
  .find-students-header{
    height: 250px;
  } 

  .input-group{
    padding: 0 !important;
  }

  .student-listing-body{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .student-list-card-container{
    max-width: 280px;
    overflow:hidden
    max-height:400px;
  }

 
  .student-list-image{
    
    padding-top: -20px;
  }

  .img-thumbnail {
    width: 150px;
    height: 150px;
  }
 

  .student-list-body{
    padding-top:5px;
    width: 100%; 
    padding-bottom: 0px;
    border-bottom: 1.5px solid rgba(211, 201, 201, 0.5);
  }
  .student-list-body .list-info h6{
    font-size:14px;
    margin-bottom:-0px;
    white-space:nowrap;
    height:20px;
    width:150px;
    overflow:hidden;
  }
  .student-list-body .list-info i{
    font-size:7px;
  }
  .student-list-body .list-info li{
  white-space:nowrap;
  height:25px;
  width:150px;
  overflow:hidden;
}

  .list-info{ 
    display: block;
    padding-top:5px;
    // margin-top: -15px;
    padding-left: 10px;
    /* max-width: 100%; */
  }

  .student-card-lower-body p{
    font-size:13px;
    padding-top:5px;
    overflow:hidden;
    height:85px;
  } 

  .star-ratings {
    padding-left: 10px;
  }

  .col {
    padding: 0;
    margin: 0;
  }

  .bi-star-fill{
    color: gold;
  } 

  i{margin-right: 5px;}
  li{list-style-type: none;}


  .list-info li{
    font-size: 14px;
    line-height: 10px;
    margin-bottom: 10px;
    padding-right: 10px;
    margin-right: 5px;
    list-style-type: none;
  }

  .student-list-body p{
    font-size: 12px;
    font-weight: 400;
  }

  .skills{
    align-items: center;
    border-bottom: 1.5px solid rgba(211, 201, 201, 0.5);  
    display: flex;
    flex-wrap:wrap;
    height:65px;
    overflow:hidden;
  }

  .skills span{
    margin-bottom:7px;
    font-size: 10px;
    padding: 5px 9px 5px 9px;
    background-color:#3f7fca;
    margin-right: 10px;
    color:white;
    white-space:nowrap;
    border-radius: 20px;
  }

  .student-list-action{
    width: 100%; 
    padding-top: 10px;
    text-align: start;
    align-items: center;
  }

  .student-list-action li{
    height: fit-content;
    font-size:13px;
  } 

  
  .student-list-action p{
    margin-top: 5px; 
    font-size:13px;
  } 



  .student-list-action a{
    margin-top: 10px;
    width: 100%;
    align-self: center;
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
  .find-students-header{ 
      background-image: url('./assets/img/find-students/People\ search-rafiki.png');
      background-position: right;
      background-repeat: no-repeat;
      background-size:60% 230%;
    }
  }


  @media only screen and (max-width:911px){
    .student-list-card-container{
      max-width: 350px;
      max-height:400px;
    }}


  @media only screen and (max-width:768px){
    .student-list-card-container{
      max-width: 100%;
      padding:15px;
    height: 450px;
  }

  .student-list-body .list-info h6{
    width:70%;
  }
  .student-list-body .list-info i{
    font-size:7px;
  }
  .student-list-body .list-info li{
  width:70%;
}  

  find-students-header{
    background-image: url('./assets/img/find-students/People\ search-rafiki.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size:60% 230%;
    }

  /* .student-list-card-container{
    height:fit-content ;
    width: 100%;
  }

    .student-list-card{
    width: 100%;
    display: block;
    height: fit-content;
  }  
  
  
  .student-list-body{
    width: 100%;  
    padding-top: 10px;
     padding-left: 0px;         
    width: 100%; 
    border-right: none;
    padding-bottom: 10px;
     border-bottom: 1.5px solid rgba(211, 201, 201, 0.5);  
    min-height: 100px;
}

  



  .student-list-image img{
    border-radius: 50%;
    // height: 50px;
    // width: 60px;
  }
  .list-info{
    padding-left:0px;
  }

  .student-list-body p{
    margin-left: 0px;
    font-size: 14px;
  }

  .student-list-action{
    padding-top: 10px; 
    width: 100%;
    display: block;
    justify-content:start;
    text-align: start;
    min-height: 100px;
  }


  .student-list-action h5{
    margin-right: 0;

  } 
  } */
}

      
      @media only screen and (max-width:580px){

 .find-students-header{
    height: 150px;
  } 

  .student-list-card-container{
  width: 100%;
  height: 480px;
  }
      .student-list-body .list-info h6{
        width:250px;
      }
      .student-list-body .list-info i{
        font-size:250px;
      }
      .student-list-body .list-info li{
      width:250px;
    }  
  

    @media only screen and (max-width:420px){

       .student-list-card-container{
       width: 100%;
       height: 480px;
       }
           .student-list-body .list-info h6{
             width:150px;
           }
           .student-list-body .list-info i{
             font-size:150px;
           }
           .student-list-body .list-info li{
           width:150px;
         }  


         
    @media only screen and (max-width:300px){

      .student-list-card-container{
      width: 100%;
      height: 480px;
      }
          .student-list-body .list-info h6{
            width:100px;
          }
          .student-list-body .list-info i{
            font-size:100px;
          }
          .student-list-body .list-info li{
          width:100px;
        }  

      }


        `}</style>
			</Head>

			{/* d mobile filter  --> */}

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

					<form
						onSubmit={handleSubmit}
						className="needs-validation row g-4"
						novalidate
					>
						<div className="col-lg-10">
							<label className="form-label fs-base" for="skills">
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

								{/* <input
											type="text"
											className="form-control"
											placeholder="Search by Location"
											name="location"
											value={formData.location}
											onChange={handleChange}
										/> */}
							</div>
							<div className="invalid-feedback">Please provide a location!</div>
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
									checked={formData.job_type.includes("All")}
									onChange={handleChange}
									value="All"
									name="job_type"
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

							{/* <div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch1"
											name="skills"
											value="Javascript"
											checked={formData.skills.includes("Javascript")}
											onChange={handleChange}
										/>
										<label className="form-check-label" for="customSwitch1">
											Javascript
										</label>
									</div>
									<div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch2"
											name="skills"
											value="PHP"
											checked={formData.skills.includes("PHP")}
											onChange={handleChange}
										/>
										<label className="form-check-label" for="customSwitch1">
											PHP
										</label>
									</div>
									<div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch3"
											name="skills"
											value="Python"
											checked={formData.skills.includes("Python")}
											onChange={handleChange}
										/>
										<label className="form-check-label" for="customSwitch1">
											Python
										</label>
									</div>
									<div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch4"
											name="skills"
											value="Digital Marketing"
											checked={formData.skills.includes("Digital Marketing")}
											onChange={handleChange}
										/>
										<label className="form-check-label" for="customSwitch1">
											Digital Marketing
										</label>
									</div>
									<div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch5"
											name="skills"
											value="Node"
											checked={formData.skills.includes("Node")}
											onChange={handleChange}
										/>
										<label className="form-check-label" for="customSwitch1">
											Node
										</label>
									</div> */}
						</div>

						{/* <div>
							<label className="form-label mt-3 fs-base " for="skills">
								Skills
							</label>
						

							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									value="Adobe Photoshop"
									name="skills"
									checked={formData.skills.includes("Adobe Photoshop")}
									onChange={handleChange}
								/>
								<label className="form-check-label" for="customSwitch1">
									Adobe Photoshop
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									value={"Adobe XD"}
									name="skills"
									checked={formData.skills.includes("Adobe XD")}
									onChange={handleChange}
								/>
								<label className="form-check-label" for="customSwitch1">
									Adobe XD
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									value={"Android Developer"}
									name="skills"
									checked={formData.skills.includes("Android Developer")}
									onChange={handleChange}
								/>
								<label className="form-check-label" for="customSwitch1">
									Android Developer
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									value={"Artist"}
									name="skills"
									checked={formData.skills.includes("Artist")}
									onChange={handleChange}
								/>
								<label className="form-check-label" for="customSwitch1">
									Artist
								</label>
							</div>
							<div className="form-check form-switch pb-1">
								<input
									type="checkbox"
									className="form-check-input"
									id="customSwitch1"
									value={"Computer"}
									name="skills"
									checked={formData.skills.includes("Computer")}
									onChange={handleChange}
								/>
								<label className="form-check-label" for="customSwitch1">
									{" "}
									Computer
								</label>
							</div>
						</div> */}
						<div className="col-lg-10">
							<button className="btn btn-lg btn-primary mt-2" type="submit">
								Find Students
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* d end of mobile filter  --> */}

			{/* d Hero--> */}
			<section className="bg-secondary py-5" data-jarallax data-speed="0.6">
				<div className="container position-relative pt-5 pb-md-2 pb-lg-3 pb-xxl-5">
					{/* d Breadcrumb--> */}
					<nav aria-label="breadcrumb">
						<ol className="pt-lg-3 mb-0 breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Home</a>
							</li>
							<li className="breadcrumb-item active" aria-current="page">
								Find Students
							</li>
						</ol>
					</nav>
					{/* d Page title--> */}

					<div className="find-students-header d-block mt-5 pt-3 ps-md-5 ps-lg-5 ps-sm-1 pe-3 pe-xs-1 ps-xs-1 pb-3 rounded">
						<h1 className="display-6 mt-2 mb-4">Find Students</h1>

						<div className=" col-lg-5 col-md-6 col-sm-8 col-xs-md ">
							<div className="input-group mb-3 input-group-sm">
								<input
									name="search"
									value={formData.search}
									type="text"
									className="form-control"
									placeholder="Look for Talents"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
									onChange={handleChange}
								/>
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-addon2"
									onClick={handleSubmit}
								>
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* d Search--> */}
			<section className="pt-3 pb-4 px-3">
				<div className=" py-lg-2 py-xl-4 py-xxl-5">
					<div className="row mt-1 ps-2  pt-sm-2 pt-md-3 pt-lg-4">
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
									<label className="form-label fs-base" for="skills">
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
											value={formData.search}
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
									<label
										className="form-label mt-3 fs-base "
										htmlFor="Job type"
									>
										Job Type
									</label>
									{/* <!-- Checked switch --> */}
									<div className="form-check form-switch pb-1">
										<input
											type="checkbox"
											className="form-check-input"
											id="customSwitch2"
											checked={formData.job_type.includes("All")}
											onChange={handleChange}
											name="job_type"
											value="All"
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
										Find Students{" "}
									</button>
								</div>
							</form>
						</div>

						<div
							className={`col-lg-12 col-sm-12 col-xs-12 p-4 ${
								isFilterVisible ? "col-xl-9" : "col-xl-12"
							}`}
						>
							<div className="row row-cols-12 row-cols-sm-12">
								<div className="col">
									<div className="card search-results border-0 mb-4">
										<div className="card-body search-results  px-0">
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
													{/* <p>Showing 1 - 7 of 9 Result</p> */}
													<div className="option-select col-2 ms-auto">
														<select
															className="form-select bg-transparent text-dark"
															aria-label="Default select example"
															name="filter"
															defaultValue={""}
															value={formData.filter}
															onChange={handleChange}
														>
															<option
																className="bg-transparent text-dark"
																value=""
																selected
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
														</select>
													</div>
												</div>
											</div>

											<div className="student-listing-body pt-5 mt-3  p-lg-0 p-md-3 p-sm-1 pb-5">
												{students &&
													students?.length > 0 &&
													students.map((student, index) => (
														<div
															key={index}
															className="student-list-card-container rounded mb-3 bg-secondary p-lg-3 p-md-3 p-sm-3 p-xs-3 col-lg-4 col-md-6 co-sm-12 col-xs-12"
														>
															<div className="student-list-card rounded">
																<div className="d-flex align-items-center">
																	<div className="student-list-image">
																		<Image
																			src={student.DP}
																			className="rounded-5"
																			width={100}
																			height={90}
																			alt="Uniskills Talents - Student Display Picture"
																		/>
																	</div>
																	<div className="student-list-body">
																		<div className="list-info">
																			<h6>{student.FULLNAME}</h6>
																			{student.EDUCATIONAL_LEVEL ? (
																				<li>
																					{" "}
																					<i className="bi bi-mortarboard-fill fs-4"></i>
																					{student.EDUCATIONAL_LEVEL}
																				</li>
																			) : null}
																			<li>{student.PROFESSION}</li>
																		</div>
																	</div>
																</div>

																<div className="student-card-lower-body">
																	{student.BIO ? (
																		<p
																			className="fs-sm fs-md-lg pe-md-3 text-gray-900"
																			dangerouslySetInnerHTML={{
																				__html:
																					truncateText(student.BIO, 40) +
																					(student.BIO.split(" ").length > 40
																						? "<span className='text-muted' style='cursor: pointer'>See more</span>"
																						: ""
																					).toString(),
																			}}
																		/>
																	) : null}

																	<div className="skills">
																		{student.SKILLS.map((item, index) =>
																			index > 3 ? null : (
																				<span
																					className="my-1 my-md-0"
																					key={index}
																				>
																					{item.trim()}
																				</span>
																			)
																		)}
																		{student.SKILLS.length > 3 &&
																			(student.SKILLS.length - 4 === 0
																				? null
																				: "+" + (student.SKILLS.length - 4))}
																	</div>
																</div>

																<div className="student-list-action">
																	<div className="d-flex col-12">
																		<li className="d-flex  col-12">
																			{student.RATING === 0 ? null : (
																				<li
																					className="border-0 mt-1 d-flex"
																					style={{ lineHeight: "5px" }}
																				>
																					<i
																						className={
																							student.RATING > 0
																								? "me-2 bi bi-star-fill"
																								: null
																						}
																					></i>
																					<i
																						className={
																							student.RATING > 1
																								? "me-2 bi bi-star-fill"
																								: null
																						}
																					></i>
																					<i
																						className={
																							student.RATING > 2
																								? "me-2 bi bi-star-fill"
																								: null
																						}
																					></i>
																					<i
																						className={
																							student.RATING > 3
																								? "me-2 bi bi-star-fill"
																								: null
																						}
																					></i>
																					<p>
																						{" "}
																						{student.RATING}.0 ({student.RATING}
																						)
																					</p>
																				</li>
																			)}

																			<i className="ms-auto mt-1 bi bi-geo-alt-fill"></i>
																			{student.LOCATION}
																		</li>
																	</div>
																	<Link
																		href={`${config.STUDENT_PROFILE}/${student.CODEC}`}
																		className="btn bg-primary btn-sm mb-1 col-12"
																	>
																		View Profile
																	</Link>
																</div>
															</div>
														</div>
													))}
											</div>
										</div>
										{!isLoading && students?.length === 0 && (
											<div className="student-listing-body pt-5 mt-3  p-lg-0 p-md-3 p-sm-1 pb-5">
												<h2>
													No student available.{" "}
													<a href={`${config.HOMEPAGE}`}>Return to Homepage</a>{" "}
												</h2>
											</div>
										)}

										{isLoading && (
											<div className="student-listing-body pt-5 mt-3  p-lg-0 p-md-3 p-sm-1 pb-5">
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
