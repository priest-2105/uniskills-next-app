const { createSlice } = require("@reduxjs/toolkit");

export const initialState = {
	meta: {
		current_page: 0,
		firstItem: 0,
		lastItem: 0,
		last_page: 0,
		per_page: 0,
		total_items: 0,
	},
	jobs: [],
	singleJob: {},
	companyProfile: {},
	isLoading: false,
};

const jobSlice = createSlice({
	name: "job",
	initialState,

	reducers: {
		getJobs: (state, { payload }) => {
			state.meta = payload.meta;
			state.jobs = payload.datas;
		},
		getSingleJob: (state, { payload }) => {
			state.singleJob = payload;
		},
		getCompanyJob: (state, { payload }) => {
			state.companyProfile = payload;
		},
		setIsLoading: (state, { payload }) => {
			state.isLoading = payload;
		},
		// setStore: () => {
		// 	return initialState;
		// },
	},
});

export const { getJobs, getSingleJob, getCompanyJob, setIsLoading, resetStore } =
	jobSlice.actions;

export default jobSlice.reducer;
