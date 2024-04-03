import { useState } from "react";

const ExperienceCard = ({ experience }) => {
	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};
	const [maxWords, setMaxWords] = useState(10);
	const handleSeeMore = () => {
		// console.log("clicked");

		if (maxWords < experience.DESCRIPTION.split(" ").length) {
			setMaxWords(experience.DESCRIPTION.split(" ").length);
		} else {
			setMaxWords(10);
		}
	};
	return (
		<div>
			<div class="mb-3  card">
				<div
					style={{ gap: "15px", width: "100%" }}
					class=" p-3 rounded d-flex  flex-row"
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
						<div class="me-2 fw-semibold media-info">
							{experience.COMPANY_NAME}
						</div>
						<div>
							<div class="">
								<span
									style={{
										color: "#858c97",
										fontSize: "14px",
									}}
								>
									{experience.STUDENT_ROLE}
								</span>
							</div>
							<div>
								<i
									style={{
										color: "#858c97",
										fontSize: "14px",
									}}
									class=""
								>
									{experience.START_DATE} - {experience.END_DATE}
								</i>
							</div>
							<span
								style={{
									color: "#858c97",
									fontSize: "14px",
								}}
							>
								<i class="fas fa-map-marker-alt"></i>
								{experience.LOCATION}
							</span>

							<div
								dangerouslySetInnerHTML={{
									__html: truncateText(experience?.DESCRIPTION, maxWords),
								}}
								class="mt-2 me-5"
								// style={{ color: "#576071" }}
							></div>

							{experience?.DESCRIPTION?.split(" ").length > 10 ? (
								<span
									className="text-muted fs-6"
									onClick={handleSeeMore}
									style={{ cursor: "pointer", color: "#204d74" }}
								>
									{maxWords < experience.DESCRIPTION.split(" ").length
										? "See more"
										: "See less"}
								</span>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
