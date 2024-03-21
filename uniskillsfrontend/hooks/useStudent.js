import axios from "@/configs/axios";
import { getStudents, setIsStudentLoading } from "@/redux/actions";
import { useDispatch } from "react-redux";

const useStudent = () => {
	const dispatch = useDispatch();

	const handleFetchStudents = async (formData = null) => {
		console.log(formData);
		try {
			dispatch(
				getStudents({
					meta: {
						current_page: 0,
						firstItem: 0,
						lastItem: 0,
						last_page: 0,
						per_page: 0,
						total_items: 0,
					},
					students: [],
				})
			);
			dispatch(setIsStudentLoading(true));
			const { data, status } = await axios().post(
				"uniskills-talents/1",
				formData
			);
			if (!status == 200) return;
			//console.log(data);
			dispatch(getStudents(data));
		} catch (error) {
			console.log(error);
			dispatch(
				getStudents({
					meta: {
						current_page: 0,
						firstItem: 0,
						lastItem: 0,
						last_page: 0,
						per_page: 0,
						total_items: 0,
					},
					students: [],
				})
			);
		} finally {
			dispatch(setIsStudentLoading(false));
		}
	};

	return { handleFetchStudents };
};

export default useStudent;
