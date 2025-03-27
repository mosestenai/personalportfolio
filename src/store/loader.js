import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        status: false,
    },
    reducers: {
        setLoading: function (state, action) {
            state.status = action.payload; 
        },
    },
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
