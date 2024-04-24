import axios from "@/configs/axios";
import {
	getJobs,
	getSingleJob,
	getCompanyJob,
	setIsLoading,
} from "@/redux/actions";
import { useDispatch } from "react-redux";

const useJob = () => {
	const dispatch = useDispatch();

	const handleFetchJobs = async (formData = null, page = 1) => {
		try {
			dispatch(setIsLoading(true));

			const { data, status } = await axios().post(
				`uniskills-job-search/${page}`,
				formData
			);

			dispatch(getJobs(data));
			if (!status == 200) return;
			return data;
		} catch (error) {
			console.log("Error Getting Jobs: ", error.message);
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	const handleFetchBusinessJobs = async (formData = null, page = 1) => {
		try {
			dispatch(setIsLoading(true));

			const { data, status } = await axios().post(
				`uniskills-job-search/${page}`,
				formData
			);

			dispatch(getJobs(data));
			if (!status == 200) return;
			return data;
		} catch (error) {
			console.log("Error Getting Jobs: ", error.message);
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	return {
		handleFetchJobs,
		handleFetchBusinessJobs,
	};
};

export default useJob;
