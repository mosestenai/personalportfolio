import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { primaryColor, secondaryColor } from "../../Utils/colors";
import { skillsarray } from "../../Utils/arrays";
import { FlareOutlined } from "@mui/icons-material";
import muistyles from "../../Utils/muistyles";

const Skillsdiv = ({ with_triangle }) => {


    return (
        <Box mt={with_triangle ? 5 : 0} mb={with_triangle ? 5 : 0} width={"100%"}>
            {with_triangle &&
                <Stack flexDirection={"row"} justifyContent={"right"}>
                    <Box
                        height={40}
                        width={"50%"}
                        sx={{
                            backgroundColor: primaryColor,
                            clipPath: "polygon(100% 0, 0 100%, 100% 100%)"
                        }}
                    />
                </Stack>}
            <Stack width={"100%"} sx={{ ...muistyles.noscrollbar, overflowX: "scroll" }} flexDirection={"row"} padding={3} bgcolor={secondaryColor} alignItems="center" >
                {skillsarray.map((skill, index) => {

                    return (
                        <Stack key={index} flexDirection="row" alignItems="center" mr={2}>
                            <Typography whiteSpace={"nowrap"} fontFamily={"boldfont"}>{skill}</Typography>
                            {index < skillsarray.length - 1 && <FlareOutlined sx={{ mx: 1, color: "primary" }} />}
                        </Stack>
                    )
                })}
            </Stack>
            {with_triangle &&
                <Box
                    height={40}
                    width={"50%"}
                    sx={{
                        backgroundColor: primaryColor,
                        clipPath: "polygon(0 0, 100% 0, 0 100%)"
                    }}
                />}
        </Box>
    );
};

export default Skillsdiv;
