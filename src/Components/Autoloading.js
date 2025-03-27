import React from 'react';
import { useSelector } from 'react-redux';
import { Backdrop } from "@mui/material"
import Lottie from "lottie-react";
import loadinglottie from "./../assets/lotties/loading.json"



function Autoloading() {
    const loading = useSelector(state => state.loader.status);


    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <div>
                <Lottie animationData={loadinglottie} style={{ height: 100 }} loop={true} autoplay={true} />
            </div>
        </Backdrop>
    );
}

export default React.memo(Autoloading);
