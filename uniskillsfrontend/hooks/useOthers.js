import customAxios from "@/configs/axios";
import axios from "axios";
import { useEffect, useState } from "react";

const useOthers = (name = null) => {
	const [schoolInfo, setSchoolImageLink] = useState(null);

	useEffect(() => {
		if (!name) return;
		const getSchoolName = async () => {
			try {
				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_LOGO_URL}/companies/suggest?query=${name}`
				);

				if (data.length > 0) {
					setSchoolImageLink(data[0]);
				} else {
					setSchoolImageLink(null);
				}
			} catch (error) {
				console.log(error);
				setSchoolImageLink(null);
			}
		};

		getSchoolName();
	}, [name]);

	const getCountries = async () => {
		try {
			const { data, status } = await customAxios().get(
				"load/seeders/countries"
			);
			if (status !== 200) return;
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	const getSkills = async () => {
		try {
			const { data, status } = await customAxios().get("load/seeders/skillset");

			if (status !== 200) return;
			return data;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		getCountries,
		getSkills,
		schoolInfo,
	};
};

export default useOthers;
