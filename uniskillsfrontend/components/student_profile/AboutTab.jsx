import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import SkillComp from "../Skills";

const AboutTab = ({ BASIC_INFO, EXPERIENCES }) => {
	const [meta, setMeta] = useState({
		page: 1,
		itemsPerPage: 2,
	});
	return (
		<div className="bg-transparent rounded">
			<div className="bi">
				<h4>Bio</h4>

				<div
					dangerouslySetInnerHTML={{
						__html: BASIC_INFO?.BIO,
					}}
				></div>
			</div>

			<div className="pb-3 pt-4 border-top border-bottom border-white">
				<h4 className="mb-4">Skills</h4>

				<SkillComp SKILLS={BASIC_INFO?.SKILLS} />
			</div>

			<div
				// style={{
				// 	height: "270px",
				// 	width: "100%",
				// 	overflow: "auto",
				// 	scrollbarWidth: "thin",
				// }}
				className="bg-transparent rounded"
			>
				<h4 className="pt-2 mb-4">Experience</h4>
				<div className="">
					{EXPERIENCES?.length > 0 ? (
						EXPERIENCES?.map((experience, index) => {
							return <ExperienceCard key={index} experience={experience} />;
						}).slice(0, meta.page * meta.itemsPerPage)
					) : (
						<div
							style={{ borderRadius: "10px" }}
							className="bg-secondary py-1 ps-2 my-5"
						>
							<li>No Experience Added!</li>{" "}
						</div>
					)}

					{/*
					 */}
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default AboutTab;
