import React from "react";

const SkillComp = ({ SKILLS, type }) => {
	return (
		<div className="d-flex align-items-center flex-wrap gap-2">
			{SKILLS &&
				SKILLS?.map((item, index) =>
					index > 2 ? null : (
						<small
							className="text-white m-0 text-nowrap text-capitalize rounded-pill px-2 py-1"
							style={{
								background: "#3F7FCA",
								fontSize: "12px",
							}}
							key={index}
						>
							{item}
						</small>
					)
				)}
			{SKILLS?.length > 3 &&
				type === "card" &&
				(SKILLS?.length - 3 === 0 ? null : (
					<small className="text-nowrap">{"+" + (SKILLS?.length - 3)}</small>
				))}
		</div>
	);
};

export default SkillComp;
