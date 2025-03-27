import { Box, IconButton, Stack, Typography } from "@mui/material"
import { lightprimaryColor, primaryColor, secondaryColor } from "../../Utils/colors"
import { ArrowOutward, CheckCircle } from "@mui/icons-material"

const Pricingcard = ({ pricing, light }) => {


    return (
        <Box width={{ lg: "30%", xs: "100%" }} mb={{ lg: 0, xs: 5 }} padding={2} borderRadius={5} bgcolor={light ? secondaryColor : lightprimaryColor}>
            <Box bgcolor={primaryColor} padding={2} sx={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                    <Box>
                        <Typography color={"white"} fontFamily={"boldfont"} fontSize={25}>{pricing.label}</Typography>
                        <Stack flexDirection={"row"} alignItems={"center"}>
                            <Typography fontSize={30} color={'secondary'}>${pricing.price} </Typography>
                            <Typography color={"white"} ml={1}>{pricing.unit}</Typography>
                        </Stack>
                    </Box>
                    <IconButton disableRipple sx={{ backgroundColor: secondaryColor, height: 40, width: 40 }}><ArrowOutward /></IconButton>
                </Stack>
            </Box>
            <Box mt={2}>
                {pricing.features.map((feature, key) => {

                    return (
                        <Stack key={key} alignItems={"center"} flexDirection={"row"}>
                            <CheckCircle color={light ? 'primary' : 'secondary'} />
                            <Typography color={light ? 'primary' : 'secondary'} ml={1}>{feature}</Typography>
                        </Stack>
                    )
                })}

            </Box>
        </Box>
    )
}

export default Pricingcard