import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Stack } from '@mui/material';
import Universalheader from './Pages/Common/universalheader';
import Universalfooter from './Pages/Common/universalfooter';
import Homepage from './Pages/Home/home';



const Usernavigation = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [showbackonline, setshowbackonline] = useState(false);


    const [showsearch, setshowsearch] = useState(false);

    const [current_route, setcurrent_route] = useState('Home');




    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            setshowbackonline(true)
            setTimeout(() => { setshowbackonline(false) }, 3000);
        };
        const handleOffline = () => {
            setIsOnline(false);
        };
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Detect Ctrl + F (or Cmd + F on macOS)
            if ((event.ctrlKey || event.metaKey) && event.key === "f") {
                event.preventDefault();
                setshowsearch(true)
            }
        };
        // Attach event listener
        window.addEventListener("keydown", handleKeyDown);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);







    return (
        <Stack width={"100vw"}>
            <CssBaseline />
            <Box
                position="fixed"
                top={10}
                zIndex={10}
                sx={{
                    width: "100%",
                }}
            >
                <Universalheader onChangeroute={setcurrent_route} />
            </Box>
            <Box
                component="main"
                width={'100%'}
                sx={{
                    maxWidth: '100%',
                    // backgroundColor: '#f9f9f9',
                    backgroundColor: "white",
                    pt: 10
                }}
            >
                <Routes>
                    <Route path="/" exact element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Homepage current_route={current_route} />} exact />


                    <Route path="*" element={<Navigate replace to="/home" />} />
                </Routes>
            </Box>
            <Universalfooter />
            {!isOnline && <div className='offlinediv'>No internet Connection</div>}
            {showbackonline && <div className='onlinediv'>Back Online</div>}
        </Stack>
    );
}



export default Usernavigation;
