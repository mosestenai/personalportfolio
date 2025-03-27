import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import loaderReducer from "./loader"
import alertReducer from './alert';

export default configureStore({
	reducer: {
		user: userReducer,
		loader: loaderReducer,
		alert: alertReducer,
	},
});
