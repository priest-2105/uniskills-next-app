import React from "react";
import ExperienceCard from "./ExperienceCard";

const AboutTab = ({ BASIC_INFO, EXPERIENCES }) => {
	return (
		<div
			className="tab-pane fade active show"
			id="pills-about"
			role="tabpanel"
			aria-labelledby="pills-about-tab"
			tabindex="0"
		>
			<div className="bg-transparent rounded">
				<div className="bio">
					<h4>Bio</h4>

					<div
						style={{ padding: "0 10px" }}
						dangerouslySetInnerHTML={{
							__html: BASIC_INFO?.BIO,
						}}
					></div>
				</div>

				<div className="student-skills-container px-2">
					<h4>Skills</h4>
					<div className="student-skills">
						{BASIC_INFO?.SKILLS.map((skill, index) => {
							return (
								<span
									style={{ background: "#3f7fca" }}
									key={index}
									className="btn btn-sm  rounded-pill m-1"
								>
									{skill}
								</span>
							);
						})}
					</div>
				</div>

				<div
					style={{
						height: "270px",
						width: "100%",
						overflow: "auto",
						scrollbarWidth: "thin",
					}}
					className="bg-transparent rounded px-2"
				>
					<h4
						style={{
							position: "sticky",
							top: "0",
							background: "white",
							padding: "20px 10px",
						}}
					>
						Experience
					</h4>
					<div className="">
						{EXPERIENCES?.length > 0 ? (
							EXPERIENCES?.map((experience, index) => {
								return <ExperienceCard key={index} experience={experience} />;
							})
						) : (
							<div
								style={{ borderRadius: "10px" }}
								className="bg-secondary py-1 ps-2 my-5"
							>
								<li>No Experience Added!</li>{" "}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutTab;
