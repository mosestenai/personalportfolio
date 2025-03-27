import { createSlice } from '@reduxjs/toolkit';
import { removeFromStore, setToStore } from '../Utils/functions';
import { reduxconstants } from '../Utils/arrays';

export const userSlice = createSlice({
	name: reduxconstants.USER_PROFILE,
	initialState: {
		user: null,
	},
	reducers: {
		setUser: function (state, action) {
			state.user = action.payload;
			setToStore(reduxconstants.USER_PROFILE, action.payload, true);
		},
		updateUser: function (state, action) {
			state.user = { ...state.user, ...action.payload };
			setToStore(reduxconstants.USER_PROFILE, state.user);
		},
		logoutUser: function (state) {
			state.user = null;
			removeFromStore(reduxconstants.USER_PROFILE)
		},
	},
});

export const { setUser, updateUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
