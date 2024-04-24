import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const SelectInput = ({
	label,
	name,
	setFormData,
	placeHolder,
	formData,
	isLoading,
	options,
	onMenuOpen,
}) => {
	const animatedComponent = makeAnimated();

	return (
		<div className="col-lg-10">
			<label className="form-label fs-base text-capitalize" htmlFor={name}>
				<small>{label}</small>
			</label>
			<div className="input-group">
				<span className="input-group-text">
					{name == "location" ? (
						<i className="ai-map-pin"></i>
					) : (
						<i class="bi bi-person-fill-gear"></i>
					)}
					<Select
						id={name}
						isMulti={true}
						className="bg-transparent basic-single"
						classNamePrefix="select"
						placeholder={placeHolder}
						onChange={(values) => {
							setFormData((prev) => {
								return {
									...prev,
									[name]: values.map((val) => val.value),
								};
							});
						}}
						value={formData[name]?.map((val) => ({
							label: val,
							value: val,
						}))}
						components={animatedComponent}
						onMenuOpen={onMenuOpen}
						closeMenuOnSelect={false}
						options={options}
						isDisabled={false}
						isLoading={isLoading}
						isClearable={true}
						isRtl={false}
						isSearchable={true}
						name={name}
						styles={{
							control: (baseStyles) => ({
								...baseStyles,
								border: 0,
								color: "grey",
								width: "200px",
								boxShadow: "none",
								backgroundColor: "transparent",
							}),
							option: (provided, state) => ({
								...provided,
								// color: state.isSelected ? '#fff' : '#000',
								color: "grey",
								width: "200px",
								backgroundColor: state.isFocused
									? "transparent"
									: "transparent",
							}),
							singleValue: (provided) => ({
								...provided,
								backgroundColor: "transparent",
								color: "grey",
								textDecoration: "capitalize",
							}),
						}}
					/>
				</span>
			</div>
			<div className="invalid-feedback">Please provide a location!</div>
		</div>
	);
};

export default SelectInput;
