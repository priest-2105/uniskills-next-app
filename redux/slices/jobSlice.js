const { createSlice } = require("@reduxjs/toolkit");

const jobSlice = createSlice({
	name: "job",
	initialState: {
		meta: {
			current_page: 1,
			firstItem: 1,
			lastItem: 0,
			last_page: 1,
			per_page: 5,
			total_items: 0,
		},
		jobs: [],     
		singleJob: {},    
		companyProfile: {},
		isLoading: false,  
	},

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
	},
});

export const { getJobs, getSingleJob, getCompanyJob, setIsLoading } =
	jobSlice.actions;

export default jobSlice.reducer;
