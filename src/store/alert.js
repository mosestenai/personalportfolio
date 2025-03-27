import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
	name: 'alert',
	initialState: {
		type: 'success',
		message: '',
		duration: 5000,
	},
	reducers: {
		setError: (state, action) => {
			state.type = 'error';
			state.message = typeof action.payload === 'string' ? action.payload : 'An error occurred';
			state.duration = action.payload.duration || 5000; // Optional custom duration
		},
		setSuccess: (state, action) => {
			state.type = 'success';
			state.message = typeof action.payload === 'string' ? action.payload : 'Operation successful';
			state.duration = action.payload.duration || 5000; // Optional custom duration
		},
		dismissAlert: (state) => {
            state.type = '';
            state.message = '';
            state.duration = 0; 
        },
	},
});

export const { dismissAlert, setError, setSuccess } = alertSlice.actions;
export default alertSlice.reducer;
