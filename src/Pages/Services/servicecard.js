import { Box, Button, Stack, Typography } from "@mui/material"
import { boxborder } from "../../Utils/colors"
import { ArrowForward } from "@mui/icons-material"

const ServiceCard = ({ icon_image, service_name, service_desc }) => {


    return (
        <Box padding={2} width={{ lg: "30%", xs: "100%" }} mb={{ lg: 0, xs: 5 }} border={boxborder} borderRadius={2}>
            <Stack
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={'center'}
                height={100}
                width={100}
                bgcolor={"white"}
            >
                <img src={icon_image} />
            </Stack>
            <Typography fontFamily={"boldfont"}>{service_name}</Typography>
            <Typography mt={2} mb={2}>{service_desc}</Typography>
            <Button endIcon={<ArrowForward />}>Learn more</Button>
        </Box>
    )
}


export default ServiceCard