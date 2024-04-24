import React, { experimental_taintObjectReference, useState } from "react";

const ExperienceCard = ({ experience }) => {
	// const [showFullDescription, setShowFullDescription] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const [maxWord, setMaxWord] = useState(23);

	const truncateText = (text, limit) => {
		if (!text) return;

		let words = text.split(" ");

		words = words.filter((word) => word != "");

		if (!showMore) {
			words = words.map((element) => {
				const modifiedElement = element
					.replace(/<p\b[^>]*>/g, "<span>")
					.replace(/<\/p>/g, "</span>");

				return modifiedElement;
			});
		}

		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};

	return (
		<div className="rounded-0 border-0 bg-secondary card">
			<div
				style={{ gap: "15px", width: "100%" }}
				className="p-3 rounded d-flex flex-row"
			>
				<div
					style={{
						minWidth: "50px",
						height: "50px",
						background: "#efbae6",
						color: "#dc53c1",
						borderRadius: "5px",
					}}
					className="d-flex uppercase justify-content-center align-items-center"
				>
					<span>{experience?.COMPANY_NAME?.slice(0, 3).toUpperCase()}</span>
				</div>
				<div>
					<span className="fw-semibold media-info">
						{experience.COMPANY_NAME}
					</span>
					<div>
						<div>
							<span
								className="d-block"
								style={{ color: "#858c97", fontSize: "14px" }}
							>
								{experience.STUDENT_ROLE}
							</span>
							<i style={{ color: "#858c97", fontSize: "14px" }}>
								{experience.START_DATE} - {experience.END_DATE}
							</i>
							<span style={{ color: "#858c97", fontSize: "14px" }}>
								<i className="fas fa-map-marker-alt"></i>
								{experience.LOCATION}
							</span>
						</div>

						<span
							dangerouslySetInnerHTML={{
								__html: truncateText(experience?.DESCRIPTION, maxWord),
							}}
						></span>
						<button
							onClick={() => {
								setShowMore(!showMore);
								setMaxWord(
									!showMore ? experience?.DESCRIPTION?.slice(" ").length : 23
								);
							}}
							className="fw-semibold  btn p-0 text-primary border-0 bg-transparent"
						>
							{!showMore ? "See more" : "See less"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
