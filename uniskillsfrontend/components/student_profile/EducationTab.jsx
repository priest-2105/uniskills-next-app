import React, { useState } from "react";
import EducationCard from "./EducationCard";

const EducationTab = ({ EDU_INFO, NEUTRAL_IMAGE }) => {
	const [meta, setMeta] = useState({
		page: 1,
		itemsPerPage: 4,
	});
	return (
		<div
			className="tab-pane fade border-0"
			id="pills-education"
			role="tabpanel"
			ariaLabelledby="pills-education-tab"
			tabindex="0"
		>
			<div className="col-xl-12 col-xxl-12 col-lg-12 border-0">
				<h4>Education</h4>
				<div className="card-body px-0 border-0 pt-2">
					<div>
						{EDU_INFO?.length > 0 ? (
							EDU_INFO?.map((education, index) => {
								return (
									<EducationCard
										NEUTRAL_IMAGE={NEUTRAL_IMAGE}
										key={index}
										education={education}
									/>
								);
							}).slice(0, meta.page * meta.itemsPerPage)
						) : (
							<div
								style={{ borderRadius: "10px" }}
								className="bg-secondary py-1 ps-2 my-5"
							>
								<li>No Education Added!</li>{" "}
							</div>
						)}
						{EDU_INFO?.length > meta.page * meta.itemsPerPage && (
							<div>
								<a
									onClick={() => {
										setMeta((prev) => {
											return {
												...prev,
												page: prev.page + 1,
											};
										});
									}}
									className="text-primary text-decoration-underline"
								>
									See more
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EducationTab;
