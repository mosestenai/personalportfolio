import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import muistyles from "../../Utils/muistyles"
import { boxborder, primaryColor } from "../../Utils/colors"


const Projectcard = ({ project }) => {

    const project_images = project.imagesarray


    return (
        <Box width={{ lg: "45%", xs: "100%" }} bgcolor={"white"} border={boxborder} borderRadius={5} mb={5}>
            <img src={project_images[0]} style={{ maxWidth: "100%" }} />
            <Box>
                <Stack flexDirection={"row"} mt={2}>
                    {project.skills.slice(0, 4).map((skill, key) => {

                        return (
                            <Button sx={{ borderRadius: 5, width: "fit-content", ml: 2, ...muistyles.twolinetextlimit,WebkitLineClamp:1 }} variant="contained" color="secondary" key={key}>{skill}</Button>
                        )
                    })}
                </Stack>
                <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} padding={2}>
                    <Typography
                        width={"80%"}
                        fontSize={25}
                        fontFamily={"boldfont"}
                        sx={muistyles.twolinetextlimit}
                    >
                        {project.projectTitle}
                    </Typography>
                    <IconButton disableRipple sx={{ backgroundColor: primaryColor, height: 40, width: 40 }}>
                        <img src={require("./../../assets/images/arrow_2.png")} />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    )
}

export default Projectcard