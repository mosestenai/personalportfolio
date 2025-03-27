import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { primaryColor, secondaryColor } from "../../Utils/colors";
import { about_me_desc } from "../../Utils/arrays";
import muistyles from "../../Utils/muistyles";

const AboutmeCard = () => {
    const Countercard = ({ counter, title }) => (
        <Box width={"30%"}>
            <Typography color={"secondary"} fontFamily={"boldfont"} fontSize={25}>
                {counter} +
            </Typography>
            <Typography mt={2} color={"white"}>
                {title}
            </Typography>
        </Box>
    );

    const tags = [
        "UX/UI Design",
        "Mobile App Design",
        "Website Design",
        "Design System",
        "Prototype",
        "Dashboard",
        "Wireframe Design",
    ];

    return (
        <Box bgcolor={primaryColor} mt={10} mb={10} pt={10} pb={10}>
            <Stack flexDirection={{ lg: "row", xs: "column" }} width={{ lg: "80%", xs: "90%" }} margin={"auto"} justifyContent={"space-between"}>
                {/* Left Section - Circle with Buttons */}
                <Box width={{ lg: "45%", xs: "100%" }} display="flex" justifyContent="center">
                    <Box
                        bgcolor={secondaryColor}
                        borderRadius={"50%"}
                        height={{ lg: 400, xs: 200 }}
                        width={{ lg: 400, xs: 200 }}
                        position="relative"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ overflow: "hidden" }} // Prevents buttons from overflowing
                    >
                        <img src={require("./../../assets/images/pic_one.png")} style={{ position: "absolute", bottom: 0, zIndex: 4, maxHeight: "100%" }} />
                        <Stack position={"absolute"} display={{ lg: "block", xs: "none" }} bottom={"5%"} zIndex={5}>
                            <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                                <Button variant="contained" sx={{ borderRadius: 5, width: 'fit-content' }}>{tags[0]}</Button>
                            </Stack>
                            <Stack mt={1} flexDirection={"row"}>
                                <Button color="secondary" variant="contained" sx={{ borderRadius: 5, transform: `rotate(${20 - 10}deg)` }}>{tags[1]}</Button>
                                <Button variant="contained" sx={{ borderRadius: 5, transform: `rotate(${-5}deg)` }}>{tags[2]}</Button>
                            </Stack>
                            <Stack mt={1} flexDirection={"row"}>
                                <Button variant="contained" sx={{ borderRadius: 5, transform: `rotate(${30 - 10}deg)` }}>{tags[3]}</Button>
                                <Button variant="contained" sx={{ borderRadius: 5 }}>{tags[4]}</Button>
                                <Button variant="contained" sx={{ borderRadius: 5, transform: `rotate(${-5}deg)` }}>{tags[5]}</Button>
                            </Stack>
                            <Stack mt={1} flexDirection={"row"} alignItems={"center"} justifyContent={"center"}>
                                <Button color="secondary" variant="contained" sx={{ borderRadius: 5, width: 'fit-content' }}>{tags[6]}</Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                {/* Right Section - About Me */}
                <Box width={{ lg: "45%", xs: "100%" }}>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography fontFamily={"boldfont"} color={"secondary"}>-</Typography>
                        <Typography fontFamily={"boldfont"} color={"white"}>About Me</Typography>
                    </Stack>
                    <Typography color={"white"} flexDirection={"row"} fontFamily={"boldfont"} fontSize={40}>
                        Who is{" "}
                        <Typography
                            fontSize={"inherit"}
                            component="span"
                            sx={{ textDecorationLine: "underline", whiteSpace: "nowrap" }}
                            fontFamily={"italicboldfont"}
                            color={"secondary"}
                        >
                            Moses Tenai?
                        </Typography>
                    </Typography>
                    <Typography sx={{ ...muistyles.twolinetextlimit, color: "white", mt: 4, mb: 4 }}>
                        {about_me_desc}
                    </Typography>
                    <Stack flexDirection={"row"} justifyContent={"space-between"}>
                        <Countercard title={"Projects Completed"} counter={100} />
                        <Countercard title={"Industry Covered"} counter={45} />
                        <Countercard title={"Years of Experience"} counter={7} />
                    </Stack>
                    <Stack flexDirection={"row"} mt={5} alignItems={"center"}>
                        <Stack flexDirection={"row"} sx={{ width: "fit-content" }} bgcolor={secondaryColor} padding={1} borderRadius={8}>
                            <Button variant="contained" color="primary" sx={{ borderRadius: 5, mr: 2 }}>
                                Download CV
                            </Button>
                            <IconButton disableRipple sx={{ backgroundColor: "white" }}>
                                <img src={require("./../../assets/images/arrow.png")} alt="arrow" />
                            </IconButton>
                        </Stack>
                        <Typography ml={2} display={{ lg: "block", xs: "none" }} color={"secondary"} fontSize={20} fontFamily={"italiclightfont"}>
                            Moses Tenai
                        </Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default AboutmeCard;
