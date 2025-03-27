import { useNavigate } from "react-router-dom"
import { Remove } from "@mui/icons-material"
import { Stack, Typography, IconButton, Button, Box } from "@mui/material"
import { primaryColor, secondaryColor } from "../../Utils/colors"
import muistyles from "../../Utils/muistyles"

const Sectionheader = ({ route, title, desc_one, desc_two, button_name, light }) => {
    const navigate = useNavigate()



    return (
        <Box width={"80%"} margin={"auto"}>
            <Stack fontSize={20} flexDirection={"row"}>
                <Remove sx={{ color: light ? secondaryColor : "black" }} />
                <Typography color={light ? "white" : "black"}>{title}</Typography>
            </Stack>
            <Stack mt={3} flexDirection={"row"} justifyContent={"space-between"}>
                <Stack fontSize={{ lg: 35, xs: 20 }} >
                    <Typography sx={{ ...muistyles.twolinetextlimit, WebkitLineClamp: 1 }} fontFamily={"italicboldfont"} fontSize={"inherit"} color={light ? "white" : "secondary"}>{desc_one}
                        <Typography component={"span"} fontFamily={"boldfont"} color={light ? "secondary" : "black"} ml={1} fontSize={"inherit"}>{desc_two}</Typography>
                    </Typography>
                </Stack>
                <Stack onClick={() => navigate(route)} flexDirection={"row"} sx={{ width: "fit-content" }} bgcolor={secondaryColor} padding={1} borderRadius={8}>
                    <Button variant="contained" color="primary" sx={{ borderRadius: 5, mr: 2, display: { lg: "block", xs: "none" } }}>{button_name}</Button>
                    <IconButton disableRipple sx={{ backgroundColor: "white", height: { lg: "inherit", xs: 30 }, width: { lg: "inherit", xs: 30 } }}>
                        <img src={require("./../../assets/images/arrow.png")} />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Sectionheader


export const SectionmiddleHeader = ({ title, desc_one, desc_two, light }) => {

    return (
        <Stack display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={'center'} width={"100%"}>
            <Stack flexDirection={"row"} fontSize={18} alignItems={"center"}>
                <Remove fontSize="inherit" color="secondary" />
                <Typography fontSize="inherit" color={light ? "white" : "black"}>  {title}</Typography>
            </Stack>
            <Typography color={light ? "white" : "secondary"} fontSize={{ lg: 35, xs: 20 }} > {desc_one}</Typography>
            <Typography color={light ? "secondary" : "black"} fontFamily={"boldfont"} fontSize={{ lg: 35, xs: 20 }}> {desc_two}</Typography>
        </Stack>
    )
}
