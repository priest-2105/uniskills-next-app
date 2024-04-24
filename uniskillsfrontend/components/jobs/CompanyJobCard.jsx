import Image from "next/image";
import Link from "next/link";
import React from "react";
import SkillComp from "../Skills";
import config from "../../config.js";

const CompanyJobCard = ({ job, companyProfile }) => {
	const truncateText = (text, limit) => {
		let words = text.split(" ");

		words = words.filter((word) => word !== "");

		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	return (
		<div class="job-list-card-containe rounded mb-5 bg-secondary pt-3 ps-3 pe-3 pb-3">
			<div class="job-list-car">
				<div className="border-bottom border-white">
					<h6>{job.JOB_TITLE}</h6>
					<div class="d-flex mb-3 align-items-center gap-1 flex-wrap ">
						<span>
							<small class="bi bi-calendar-week-fill"></small>{" "}
							<small>{job?.DATE_POSTED}</small>
						</span>
						<span class="border-0 d-flex gap-1 align-items-center">
							<small class="bi bi-rocket-takeoff-fill"></small>
							<small>{job.APPLICATION_COUNTS}</small>
							<small>proposals</small>
						</span>
						<span className="text-capitalize">
							{" "}
							<small class="bi bi-geo-alt-fill"></small>
							<small>{job?.COUNTRY}, </small>
							<small>({job?.PROXIMITY})</small>
						</span>
					</div>

					{job?.JOB_DESCRIPTION ? (
						<div
							className="fs-sm fs-md-lg pe-md-3 text-gray-900"
							dangerouslySetInnerHTML={{
								__html: truncateText(job.JOB_DESCRIPTION, 30),
							}}
						></div>
					) : null}
					<div className="pb-4">
						<SkillComp SKILLS={job?.SKILLS_REQUIRED} type="card" />
					</div>
				</div>
				<div class="pt-3">
					<h5>{job?.AMOUNT}</h5>
					{job.NEGOTIABLE === "TRUE" ? <p>Negotiable</p> : <p>Fixed</p>}
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
	);
};

export default CompanyJobCard;
