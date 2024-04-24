import axios from "@/configs/axios";
import { getStudents, setIsStudentLoading } from "@/redux/actions";
import { useDispatch } from "react-redux";

const useStudent = () => {
	const dispatch = useDispatch();

	const handleFetchStudents = async (formData = null, page = 1) => {
		console.log(formData);
		try {
			dispatch(setIsStudentLoading(true));
			const { data, status } = await axios().post(
				`uniskills-talents/${page}`,
				formData
			);
			if (!status == 200) return;
			//console.log(data);
			dispatch(getStudents({ meta: data?.meta, students: data?.datas }));
		} catch (error) {
			console.log("Error Fetching Students: ", error.message);
		} finally {
			dispatch(setIsStudentLoading(false));
		}
	};

	return { handleFetchStudents };
};

export default useStudent;
