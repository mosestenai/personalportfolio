import Lottie from "lottie-react";
import { Backdrop, Box, Stack, Typography } from "@mui/material"
import devlottie from "./../assets/lotties/underdevelopment.json"


const Underdevelopmentpage = () => {


    return (
        <Stack mt={5} alignItems={'center'} justifyContent={"center"} maxWidth={"100%"} flexDirection={"column"}>
            <Typography fontSize={25} fontFamily={'boldfont'}>Page Under development</Typography>
            <Lottie animationData={devlottie} style={{ height: 300, width: '100%' }} loop={true} autoplay={true} />
        </Stack>

    )
}

export default Underdevelopmentpage