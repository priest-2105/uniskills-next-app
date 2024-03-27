import axios from "axios";
import { useEffect, useState } from "react";
axios;

export default function useSchoolName(name) {
	const [schoolImageLink, setSchoolImageLink] = useState(null);
	console.log(name);

	useEffect(() => {
		if (!name) return;
		const getSchoolName = async () => {
			try {
				const { data, status } = await axios.get(
					`${process.env.NEXT_PUBLIC_LOGO_URL}/companies/suggest?query=${name}`
				);

                console.log(data)

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
	return schoolImageLink;
}
