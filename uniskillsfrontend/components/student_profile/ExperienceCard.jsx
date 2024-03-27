
const ExperienceCard = ({ experience }) => {
	const truncateText = (text, limit) => {
		const words = text.split(" ");
		return (
			words.slice(0, limit).join(" ") + (words.length > limit ? "..." : "")
		);
	};
	return (
		<div>
			<div class="mb-3">
				<div
					style={{ gap: "15px", width: "100%", background: "#f6f9fc" }}
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
						{experience.COMPANY_NAME.slice(0, 3)}
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
									__html:
										truncateText(experience?.DESCRIPTION, 10) +
										(experience?.DESCRIPTION.split(" ").length > 10
											? "<span onClick={handleSeeMoreClick} className='text-muted fs-6' style='cursor: pointer; color: #204d74'> See more</span>"
											: ""
										).toString(),
								}}
								class="mt-2 me-5"
								style={{ color: "#576071" }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
