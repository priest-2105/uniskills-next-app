import Image from "next/image";
import Link from "next/link";
import React from "react";
import SkillComp from "../Skills";
import config from "../../config.js";
import { Space_Mono } from "next/font/google";

const JobCard = ({ job }) => {
	const truncateText = (text, limit) => {
		if (!text) return;

		let words = text.split(" ");

		words = words.filter((word) => word != "");

		words = words.map((element) => {
			const modifiedElement = element
				.replace(/<p\b[^>]*>/g, "<span>")
				.replace(/<\/p>/g, "</span>");

			return modifiedElement;
		});

		console.log(words);

		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	console.log(job);

	return (
		<div className="job-list-card-container w-100 mb-5 bg-secondary p-3 p-md-4 p-md-4 rounded">
			<div className=" d-flex flex-wrap flex-lg-nowrap gap-3">
				<div className="d-flex gap-3">
					<div
						className=""
						// style={{ height: "80px", width: "80px", overflow: "hidden" }}
					>
						<Image
							width={80}
							height={80}
							src={job?.BUSINESS?.LOGO_IMAGE}
							alt={`${job?.BUSINESS?.NAME} Job Opportunities - Users Business Company logo`}
							objectPosition="center"
							className="rounded-circle"
						/>
					</div>
					<div className="px-0 d-lg-none pt-1">
						<h5 className="mb-1 fs-6 text-nowrap">{job?.JOB_TITLE}</h5>
						<div className="text-muted">
							<div className="d-flex align-items-center flex-wrap   gap-1">
								<span>
									<small className="bi bi-calendar-week-fill"></small>{" "}
									<small className="">{job?.DATE_POSTED}</small>
								</span>{" "}
								<small>|</small>
								<span className="border-0">
									<small className="bi bi-rocket-takeoff-fill"></small>{" "}
									<small className="">
										{job?.APPLICATION_COUNTS} proposals
									</small>
								</span>
							</div>
							{job?.COUNTRY !== "NULL" && (
								<span>
									<small className="bi bi-geo-alt-fill"></small>
									<small className="">{job?.COUNTRY}</small>
									<small className="text-capitalize">({job?.PROXIMITY})</small>
								</span>
							)}
						</div>
					</div>
				</div>

				<div className="job-list-body  px-0">
					<div className="col-9 px-0 d-none d-lg-block">
						<h5 className=" mb-2 ">{job?.JOB_TITLE}</h5>
						<div className="text-muted mb-2 ">
							<div className="d-flex">
								<div>
									<small className="bi bi-calendar-week-fill"></small>{" "}
									<small className="">{job?.DATE_POSTED}</small>
								</div>
								<div className="border-0">
									<small className="bi bi-rocket-takeoff-fill"></small>{" "}
									<small className="">
										{job?.APPLICATION_COUNTS} proposals
									</small>
								</div>
							</div>
							{job?.COUNTRY !== "NULL" && (
								<div>
									<small className="bi bi-geo-alt-fill"></small>
									<small className="">{job?.COUNTRY}</small>
									<small> ({job?.PROXIMITY})</small>
								</div>
							)}
						</div>
					</div>
					{job?.JOB_DESCRIPTION ? (
						<div
							className="fs-sm mb-3 fs-md-lg mx-0 px-0  pe-md-3 text-gray-900"
							dangerouslySetInnerHTML={{
								__html: truncateText(job.JOB_DESCRIPTION, 20),
							}}
						/>
					) : null}

					<SkillComp type={"card"} SKILLS={job?.SKILLS_REQUIRED} />

					{job?.STOPPED_RECEIVING_JOB_APPLICATION === "TRUE" && (
						<small className="text-danger mt-2 d-block">
							{" "}
							Job has temporarily stopped receiving applicants{" "}
						</small>
					)}
				</div>

				<div class="job-list-action col-lg-3">
					<h5 style={{ lineHeight: "25px" }} className="pl-1">
						{job?.AMOUNT}
					</h5>
					{job?.NEGOTIABLE === "TRUE" ? <p>Negotiable</p> : <p>Fixed</p>}
					<p> {job?.JOB_TYPE}</p>
					<Link
						href={`${config.JOB_DETAILS}/${job?.JOB_CODEC}`}
						class="btn ms-1 btn-primary btn-sm "
					>
						View
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JobCard;
