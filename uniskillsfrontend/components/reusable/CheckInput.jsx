import React from "react";

const CheckInput = ({ formData, name, value, handleChange }) => {
	return (
		<div className="form-check form-switch pb-1">
			<input
				type="checkbox"
				name={name}
				className="form-check-input"
				id="customSwitch2"
				checked={
					formData[name].includes(value) || formData[name].includes("all")
				}
				onChange={handleChange}
				value={value}
			/>
			<label
				className="form-check-label text-capitalize"
				htmlFor="customSwitch2"
			>
				{value}
			</label>
		</div>
	);
};

export default CheckInput;
