import React, { useState } from "react";
import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import { primaryColor, secondaryColor } from "../../Utils/colors";
import { Facebook, GitHub, Instagram, Send, Twitter, WhatsApp } from "@mui/icons-material";
import muistyles from "../../Utils/muistyles";
import { gottowhatsapp, initiateCall, initiateEmail, openurl } from "../../Utils/functions";
import { emailAddresses, phoneNumbers } from "../../Utils/defaults";


const Universalfooter = ({ light }) => {

    const [email, setemail] = useState('');

    const page_width = { lg: "80%", xs: "95%" }

    return (
        <Box pt={{ lg: 10, xs: 5 }}>
            <Box width={page_width} margin={"auto"} pb={10}>
                <Stack mt={3} flexDirection={"row"} justifyContent={"space-between"}>
                    <Stack fontSize={{ lg: 35, xs: 20 }} flexDirection={"row"}>
                        <Typography fontFamily={"boldfont"} fontSize={"inherit"} color={light ? "white" : "black"}>
                            Let's{` `}
                            <Typography color={"secondary"} fontSize={"inherit"} fontFamily={"italiclightfont"} component="span">Connect</Typography>
                            {` `}There
                        </Typography>
                    </Stack>
                    <Stack flexDirection={"row"} sx={{ width: "fit-content" }} bgcolor={secondaryColor} padding={1} borderRadius={8}>
                        <Button variant="contained" color="primary" sx={{ borderRadius: 5, mr: 2, display: { lg: "block", xs: "none" } }}>View All Blogs</Button>
                        <IconButton disableRipple sx={{ backgroundColor: "white", height: { lg: "inherit", xs: 30 }, width: { lg: "inherit", xs: 30 } }}>
                            <img src={require("./../../assets/images/arrow.png")} />
                        </IconButton>
                    </Stack>
                </Stack>
                <Divider sx={{ mt: 5, mb: 5 }} />
                <Stack width={"100%"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                    <Box width={{ lg: "30%", xs: "100%" }}>
                        <Stack flexDirection={"row"} alignItems={"center"}>
                            <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} borderRadius={"100%"} width={50} height={50} bgcolor={secondaryColor}>
                                <Typography color={"primary"} fontFamily={"boldfont"} fontSize={35}>T</Typography>
                            </Stack>
                            <Typography ml={1} fontSize={25} color={'primary'} fontFamily={"boldfont"}>Tenai</Typography>
                            <Typography color={"secondary"}>.</Typography>
                        </Stack>
                        <Typography mt={4} mb={4} sx={{ ...muistyles.twolinetextlimit, WebkitLineClamp: 3 }}>
                            Dedicated to delivering high-quality software solutions that empower businesses and individuals.
                            My goal is to create seamless digital experiences that drive innovation, efficiency, and success.
                        </Typography>
                        <Stack flexDirection={"row"} alignItems={"center"} >
                            <IconButton sx={{ backgroundColor: secondaryColor, mr: 2 }}>
                                <Facebook color="primary" />
                            </IconButton>
                            <IconButton onClick={() => openurl("https://github.com/mosestenai")} sx={{ backgroundColor: secondaryColor, mr: 2 }}>
                                <GitHub color="primary" />
                            </IconButton>
                            <IconButton sx={{ backgroundColor: secondaryColor, mr: 2 }}>
                                <Twitter color="primary" />
                            </IconButton>
                            <IconButton sx={{ backgroundColor: secondaryColor, mr: 2 }}>
                                <Instagram color="primary" />
                            </IconButton>
                            <IconButton onClick={() => gottowhatsapp()} sx={{ backgroundColor: secondaryColor, mr: 2 }}>
                                <WhatsApp color="primary" />
                            </IconButton>
                        </Stack>
                    </Box>
                    <Box width={{ lg: "18%", xs: "35%" }} mt={{ lg: 0, xs: 2 }}>
                        <Typography mb={2} color={"secondary"} fontFamily={"boldfont"}>Navigation</Typography>
                        <Button>Home</Button><br />
                        <Button>Services</Button><br />
                        <Button>About</Button><br />
                        <Button>Projects</Button><br />
                        <Button>Blogs</Button>
                    </Box>
                    <Box width={{ lg: "18%", xs: "65%" }} mt={{ lg: 0, xs: 2 }}>
                        <Typography mb={2} color={"secondary"} fontFamily={"boldfont"}>Contact</Typography>
                        <Button onClick={() => initiateCall()}>{phoneNumbers[0]}</Button>
                        <Button>mosestenai.me.ke</Button>
                        <Button onClick={() => initiateEmail(emailAddresses[0])}>{emailAddresses[0]}</Button>
                        <Button>Nairobi Kenya</Button>
                    </Box>
                    <Box width={{ lg: "30%", xs: "100%" }} mt={{ lg: 0, xs: 2 }}>
                        <Typography mb={2} color={"secondary"} fontFamily={"boldfont"}>Request Quote</Typography>
                        <Stack flexDirection="row" alignItems="center">
                            <TextField
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                variant="outlined"
                                placeholder="Email address"
                                autoComplete="email"
                                sx={{
                                    bgcolor: "#f5f5f5",
                                    flex: 1,
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    "& fieldset": { border: "none" },
                                    "& .MuiOutlinedInput-root": {
                                        height: 40,
                                        borderTopLeftRadius: 5,
                                        borderBottomLeftRadius: 5,
                                    },
                                }}
                            />
                            <Box
                                bgcolor={primaryColor}
                                sx={{
                                    borderTopRightRadius: 5,
                                    borderBottomRightRadius: 5,
                                    height: 40,
                                    width: 40,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Send color="secondary" />
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Box bgcolor={primaryColor} pt={3} pb={3} fontSize={{ lg: 15, xs: 8 }}>
                <Stack width={page_width} margin={"auto"} alignItems={"center"} flexDirection={"row"} justifyContent={"space-between"} >
                    <Typography fontSize={"inherit"} color={"white"}>
                        Copyright &copy; {new Date().getFullYear()} <Typography color="secondary" fontSize={"inherit"} component={"span"}>Tenai</Typography> .All Rights reserved
                    </Typography>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                        <Typography color={"white"} fontSize={"inherit"}>User</Typography>
                        <Button sx={{ fontSize: "inherit" }} variant="text" color="whitecolor">Terms & Conditions</Button>
                        | <Button sx={{ fontSize: "inherit" }} variant="text" color="whitecolor">Privacy Policy</Button>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export default Universalfooter