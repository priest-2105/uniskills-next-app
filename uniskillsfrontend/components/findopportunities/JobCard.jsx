import Image from "next/image";
import Link from "next/link";
import React from "react";

const JobCard = ({ job }) => {
	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};
	return (
		<div className="job-list-card-container mb-5 bg-secondary p-3 p-md-4 p-md-4 rounded">
			<div className="job-list-card row">
				<div className="row col-12 gap-1">
					<div className="job-list-image col-2">
						<Image
							height={40}
							width={50}
							src={job?.BUSINESS?.LOGO_IMAGE}
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
									<span className="fs-xs fs-md-sm mt-4">{job?.COUNTRY}</span>
								</div>
							)}
							<div>
								<i className="bi bi-calendar-week-fill"></i>{" "}
								<span className="fs-xs fs-md-sm">{job?.DATE_POSTED}</span>
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
					<div className="job-list-body row col-12 col-md-8 pt-3 px-2">
						{job?.JOB_DESCRIPTION ? (
							<div
								className="fs-sm fs-md-lg pe-md-3 text-gray-900"
								dangerouslySetInnerHTML={{
									__html: truncateText(job?.JOB_DESCRIPTION, 40),
								}}
							/>
						) : null}

						<div className="skills d-flex flex-wrap">
							{job?.SKILLS_REQUIRED?.map((item, index) =>
								index > 3 ? null : (
									<span className="my-1 my-md-0 text-nowrap" key={index}>
										{item.trim()}
									</span>
								)
							)}
							{job?.SKILLS_REQUIRED.length > 3 &&
								(job?.SKILLS_REQUIRED.length - 4 === 0
									? null
									: "+" + (job.SKILLS_REQUIRED.length - 4))}
						</div>

						{job?.STOPPED_RECEIVING_JOB_APPLICATION === "TRUE" && (
							<small className="text-danger mt-2 d-block">
								{" "}
								Job has temporarily stopped receiving applicants{" "}
							</small>
						)}
					</div>

					<div class="job-list-action ps-lg-4">
						<h5 className="text-nowrap pl-1">{job?.AMOUNT}</h5>
						{job?.NEGOTIABLE === "TRUE" ? <p>Negotiable</p> : <p>Fixed</p>}
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
	);
};

export default JobCard;
