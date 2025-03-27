import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Alert, Snackbar } from '@mui/material';
import { dismissAlert } from '../store/alert';



function Autoalert() {
	const dispatch = useDispatch();
	const props = useSelector(state => state.alert);

	useEffect(() => {
		let timer = null;
		if (props.message) {
			timer = setTimeout(() => {
				dispatch(dismissAlert(''));
			}, props.duration || 5000);
		}
		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [props]);

	return (
		<Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={props.message} onClose={() => dispatch(dismissAlert(''))} autoHideDuration={3000}>
			<Alert severity={props.type}>{props.message}</Alert>
		</Snackbar>
	);
}

export default React.memo(Autoalert);
