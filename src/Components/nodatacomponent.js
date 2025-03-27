import { Backdrop, Box, CircularProgress, Stack } from "@mui/material"
import Lottie from "lottie-react";
import loadinglottie from "./../assets/lotties/nodata.json"

const Nodatacomponent = ({ text, height }) => {

    return (
        <Stack flexDirection={"column"} justifyContent={"center"} width={"100%"} alignItems={"center"}>
            <div >
                <Lottie animationData={loadinglottie} style={{ height: height || 200 }} loop={true} autoplay={true} />
            </div>
            <div style={{ marginTop: 30 }}>{text}</div>
        </Stack>
    )
}

export default Nodatacomponent