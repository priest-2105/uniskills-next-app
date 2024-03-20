import axios from 'axios';

const customAxios = () => {
	return axios.create({
		baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v3`,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export default customAxios;
