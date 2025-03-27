import React, { useState, useEffect } from "react"
import { Box, Button, Stack, Typography } from "@mui/material"
import { primaryColor, secondaryColor } from "../../Utils/colors"
import { useLocation, useNavigate } from "react-router-dom";
import { initiateCall } from "../../Utils/functions";


const Universalheader = ({ onChangeroute }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location?.pathname

    const [current_route, setcurrent_route] = useState('Home');


    const Linkbutton = ({ name }) => {
        const is_active = current_route === name


        return (
            <Button onClick={() => {
                onChangeroute(name)
                setcurrent_route(name)
            }} color={is_active ? "whitecolor" : "secondary"} variant="text">{name}</Button>
        )
    }

    return (
        <Stack bgcolor={primaryColor} overflow={{ lg: "hidden", xs: "scroll" }} flexDirection={"row"} border={'1px solid white'} padding={2} sx={{ borderRadius: 10 }} justifyContent={"space-between"} width={{ lg: "70%", xs: "95%" }} margin={"auto"} >
            <Stack flexDirection={"row"} alignItems={"center"}>
                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} borderRadius={40} width={40} height={40} bgcolor={secondaryColor}>
                    <Typography color={"primary"} fontFamily={"boldfont"} fontSize={25}>T</Typography>
                </Stack>
                <Typography ml={1} fontSize={20} color={'white'} fontFamily={"boldfont"}>Tenai</Typography>
                <Typography color={"secondary"}>.</Typography>
            </Stack>
            <Stack flexDirection={"row"}>
                <Linkbutton name={"Home"} />
                <Linkbutton name={"Services"} />
                <Linkbutton name={"About"} />
                <Linkbutton name={"Projects"} />
                <Linkbutton name={"Blogs"} />
                <Linkbutton name={"Testimonials"} />
            </Stack>
            <Button onClick={() => initiateCall()} sx={{ borderRadius: 5 }} variant="contained" color="whitecolor">ContactMe</Button>
        </Stack>
    )
}

export default Universalheader