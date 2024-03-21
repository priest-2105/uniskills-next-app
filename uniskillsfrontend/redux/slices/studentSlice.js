const { createSlice } = require("@reduxjs/toolkit");

const studentSlice = createSlice({
	name: "student",
	initialState: {
		meta: {
			current_page: 0,
			firstItem: 0,
			lastItem: 0,
			last_page: 0,
			per_page: 0,
			total_items: 0,
		},
		students: [],
		isLoading: false,
	},

	reducers: {
		getStudents: (state, { payload }) => {
			// console.log(payload);
			state.meta = payload.meta;
			state.students = payload.datas;
		},
		setIsStudentLoading: (state, { payload }) => {
			state.isLoading = payload;
		},
	},
});

export const { getStudents, setIsStudentLoading } = studentSlice.actions;

export default studentSlice.reducer;
