import { Backdrop, CircularProgress } from "@mui/material"
import Lottie from "lottie-react";
import loadinglottie from "./../assets/lotties/loading.json"

const Loadingspinner = () => {

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            {/* <CircularProgress color="inherit" /> */}
            <div style={{ height: 20 }}>
                <Lottie animationData={loadinglottie} style={{ height: 100 }} loop={true} autoplay={true} />
            </div>
        </Backdrop>
    )
}

export default Loadingspinner