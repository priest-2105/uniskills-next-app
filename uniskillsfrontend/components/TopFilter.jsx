import Selected from "./Selected";

const TopFilter = ({
	selectedItems,
	handleClearSelected,
	handleRemoveSelectedItem,
	meta,
	formData,
	handleChange,
	isFormDataFilled,
}) => {
	return (
		<div className="listing-top mt-3 mt-lg-0">
			{isFormDataFilled() && selectedItems?.length > 0 && (
				<Selected
					selected={selectedItems}
					handleClearSelected={handleClearSelected}
					handleRemoveSelectedItem={handleRemoveSelectedItem}
				/>
			)}

			<div className="flex-wrap d-flex justify-content-between align-items-center ">
				<div className="my-3 ">
					<p className="mb-0 text-nowrap">
						Showing {meta?.firstItem} -{" "}
						{Math.min(meta?.total_items, meta?.current_page * meta?.per_page)}{" "}
						of {meta?.total_items} Results
					</p>
				</div>
				<div className="col-8 col-sm-6 col-lg-3 ms-auto">
					<select
						className="form-select bg-transparent text-dark"
						id="filter"
						name="filter"
						value={formData.filter}
						onChange={handleChange}
						aria-label="Default select example"
						defaultValue={""}
					>
						<option className="bg-transparent text-dark" value="">
							Select Filter
						</option>
						<option className="bg-transparent text-dark" value="newest">
							Newest
						</option>
						<option className="bg-transparent text-dark" value="oldest">
							Oldest
						</option>
						<option className="bg-transparent text-dark" value="highest">
							Highest
						</option>
						<option className="bg-transparent text-dark" value="lowest">
							Lowest
						</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default TopFilter;
