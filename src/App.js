import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { reduxconstants } from './Utils/arrays';
import Autoalert from "./Components/Autoalert"
import Autoloading from './Components/Autoloading';
import { logoutUser, setUser } from './store/user';
import theme from './Utils/theme';
import { getFromStore } from './Utils/functions';
import { CircularProgress, Stack, Typography } from '@mui/material';
import Usernavigation from './nav';


const App = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true);

  useEffect(() => {
    updateredux()
    // dispatch(logoutUser())
  }, []);

  const updateredux = () => {
    let user = getFromStore(reduxconstants.USER_PROFILE, true);

    if (user) { dispatch(setUser(user)) }

    setloading(false)
  }



  if (loading) {
    return (
      <Stack
        height={"100vh"}
        width={"100vw"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CircularProgress size={18} color='primary' />
        <Typography fontSize={14}>Site loading...</Typography>
      </Stack>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Usernavigation />} />
        {/* Catch-all route for handling 404 */}
        <Route path="/*" element={<Usernavigation />} />
      </Routes>

      {/**Auto loads */}
      <Autoalert />
      <Autoloading />
    </ThemeProvider>
  );
}



export default App;
