import React from "react";

const Selected = ({
	selected,
	handleClearSelected,
	handleRemoveSelectedItem,
}) => {
	return (
		<>
			<h4>Selected</h4>
			<div className="selected-options-contain gap-3 align-items-center d-flex mb-3">
				<div className="selected-option d-flex flex-wrap  gap-1">
					{selected
						?.filter((it) => it !== "")
						.map((item, index) => {
							return (
								<a
									key={index}
									className="bg-faded-danger text-capitalize rounded-1 text-decoration-none fs-xs text-dark pt-2 ps-3 pe-3 pb-2"
								>
									<button
										onClick={() => handleRemoveSelectedItem(item, index)}
										type="button"
										className="text-danger border-0  bg-transparent"
									>
										&#x2715;
									</button>{" "}
									{item}
								</a>
							);
						})}
				</div>
				<div className="clear-options ms-auto">
					<a onClick={handleClearSelected} className="text-danger text-nowrap">
						Clear all
					</a>
				</div>
			</div>{" "}
		</>
	);
};

export default Selected;
