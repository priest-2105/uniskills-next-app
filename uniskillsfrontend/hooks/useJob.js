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

	const handleFetchJobs = async (formData = null) => {
		try {
			dispatch(setIsLoading(true));
			const { data, status } = await axios().post(
				"uniskills-job-search/1",
				formData
			);

			dispatch(getJobs(data));
			if (!status == 200) return;
			return data;
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	const handleFetchCompanyJobs = async (company_codec, page) => {
		try {
			dispatch(setIsLoading(true));
			const { data, status } = await axios().get(
				`business/jobs/long/${page}/${company_codec}`
			);

			dispatch(getJobs(data));
			if (!status == 200) return;
			return data;
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	const handleGetSingleJob = async (codec) => {
		try {
			dispatch(setIsLoading(true));
			const { data, status } = await axios().get(`job-description/${codec}`);

			if (!status == 200) return;

			dispatch(getSingleJob(data.datas[0]));

			return data;
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	const handleCompanyProfile = async (company_codec) => {
		try {
			dispatch(setIsLoading(true));
			const { data, status } = await axios().get(
				`load/company-profile/${company_codec}`
			);

			if (!status == 200) return;

			dispatch(getCompanyJob(data.datas[0]));

			return data;
		} catch (err) {
			console.log(err);
		} finally {
			dispatch(setIsLoading(false));
		}
	};
	return {
		handleFetchJobs,
		handleGetSingleJob,
		handleCompanyProfile,
		handleFetchCompanyJobs,
	};
};

export default useJob;
