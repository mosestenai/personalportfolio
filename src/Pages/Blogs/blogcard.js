import { Box, Button, Stack, Typography } from "@mui/material"
import { boxborder } from "../../Utils/colors"
import muistyles from "../../Utils/muistyles"

const Blogcard = ({ blog }) => {

    return (
        <Box width={{ lg: "30%", xs: "100%" }} bgcolor={"white"} padding={2} borderRadius={5} mb={5}>
            <img src={blog.image} style={{ maxWidth: "100%", borderTopRightRadius: 10, borderTopLeftRadius: 10 }} />
            <Box>
                <Stack flexDirection={"row"} mt={2}>
                    {blog.highlights.slice(0, 2).map((hightlight, key) => {

                        return (
                            <Button sx={{ borderRadius: 5, width: "fit-content", mr: 2, whiteSpace: "nowrap" }} variant="contained" color="secondary" key={key}>{hightlight}</Button>
                        )
                    })}
                </Stack>
                <Typography mt={2} fontSize={20} fontFamily={"boldfont"} sx={muistyles.twolinetextlimit}>
                    {blog.blog_title}
                </Typography>
                <Typography mt={1} mb={1} fontSize={15} sx={{ ...muistyles.twolinetextlimit }}>
                    {blog.description}
                </Typography>
                <Typography fontFamily={"boldfont"} sx={{ textDecorationLine: "underline" }}>Read More</Typography>
            </Box>
        </Box>
    )
}

export default Blogcard