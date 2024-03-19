import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./slices/jobSlice";
import studentSlice from './slices/studentSlice';


const store = configureStore({
	reducer: {
		student: studentSlice,
		job: jobSlice,
	},
});

export default store;
