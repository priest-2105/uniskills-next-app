const { createSlice } = require("@reduxjs/toolkit");

const studentSlice = createSlice({
	name: "student",
	initialState: {
		students: [],
		meta: [],
	},

	reducers: {},
});

export default studentSlice.reducer;
