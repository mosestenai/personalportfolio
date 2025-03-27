import { Box, Stack, Typography } from "@mui/material"
import { primaryColor, secondaryColor } from "../../Utils/colors"

const Toolcard = ({ tool_icon, tool_name, percentage }) => {


    return (

        <Stack
            mb={{ lg: 0, xs: 5 }}
            width={{ lg: "15%", xs: "48%" }}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Stack
                bgcolor={'#f9f9f9'}
                width={"100%"}
                borderRadius={{lg:20,xs:5}}
                padding={2}
                border={`1px solid ${secondaryColor}`}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Stack display={"flex"} justifyContent={"center"} alignItems={"center"} height={120} width={120} mt={4} borderRadius={"100%"} bgcolor={"white"}>
                    <img src={tool_icon} style={{ maxWidth: "60%", maxHeight: "60%" }} />
                </Stack>
                <Typography mt={5} fontSize={25} fontFamily={"boldfont"}>{percentage}</Typography>
            </Stack>
            <Typography fontFamily={"boldfont"} color={"primary"} mt={2}>{tool_name}</Typography>
        </Stack>
    )
}

export default Toolcard