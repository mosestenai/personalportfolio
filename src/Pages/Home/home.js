import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { primaryColor, secondaryColor } from "../../Utils/colors";
import { AdsClickOutlined, Call, Email, LocationOn, PlayArrow, Remove } from "@mui/icons-material";
import backgroundImage from "./../../assets/images/img_back1.png"
import Skillsdiv from "../Common/skillsdiv";
import Sectionheader, { SectionmiddleHeader } from "../Common/sectionheader";
import { personal_projects, pricingOptions, services_array, tools_used } from "../../Utils/arrays";
import ServiceCard from "../Services/servicecard";
import AboutmeCard from "../About/aboutmecard";
import Toolcard from "../Tools/toolcard";
import Projectcard from "../Projects/projectcard";
import Pricingcard from "../Pricing/pricingcard";
import { checknumber, initiateCall, initiateEmail, navigateto } from "../../Utils/functions";
import ContactmeForm from "./contactform";
import TestimonialsSection from "./testimonialSection";
import { blogs_array } from "../../Utils/dummy";
import Blogcard from "../Blogs/blogcard";
import FaqsSection from "./faqs";
import { emailAddresses, phoneNumbers } from "../../Utils/defaults";

const Homepage = ({ current_route }) => {
    useEffect(() => {
        if (current_route) {
            navigateto(current_route)
        }
    }, [current_route]);
    const Floatingbox = ({ top, left, right, bottom }) => {
        return (
            <Box
                bgcolor={secondaryColor}
                height={10}
                width={10}
                position={"absolute"}
                top={top}
                left={left}
                right={right}
                bottom={bottom}
            />
        )
    }

    const page_width = { lg: "80%", xs: "90%" }

    return (
        <Box width={"100%"} mt={4}>
            <Box id="Home" width={{ lg: "80%", xs: "90%" }} margin={"auto"}>
                <Stack mt={10} flexDirection={{ lg: "row", xs: "column" }} justifyContent={"space-between"} >
                    <Box width={{ lg: "45%", xs: "100%" }}>
                        <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"} width={120} height={40} position={"relative"} border={'1px solid gray'}>
                            <Floatingbox left={-5} top={-5} /><Floatingbox right={-5} top={-5} />
                            <Floatingbox left={-5} bottom={-5} /><Floatingbox right={-5} bottom={-5} />
                            <Typography>Hello There!</Typography>
                        </Stack>
                        <Box mt={5}>
                            <Typography flexDirection={"row"} fontFamily={"boldfont"} fontSize={40}>
                                I'm{" "}
                                <Typography
                                    fontSize={"inherit"}
                                    component="span"
                                    sx={{ textDecorationLine: "underline", whiteSpace: "nowrap" }}
                                    fontFamily={"italicboldfont"}
                                    color={'secondary'}
                                >
                                    Moses Tenai,
                                </Typography>{" "}<br />
                                Software Engineer <br /> Based in Kenya
                            </Typography>
                            <Typography fontSize={16} mt={4} mb={4}>
                                I'm an experienced  Software Developer with 10+ Experience in the <br />
                                field collaborating with various companies and startups
                            </Typography>
                            <Stack width={"100%"} flexDirection={"row"} justifyContent={"space-between"}>
                                <Stack flexDirection={"row"} sx={{ width: "fit-content" }} bgcolor={secondaryColor} padding={1} borderRadius={8}>
                                    <Button variant="contained" color="primary" sx={{ borderRadius: 5, mr: 2 }}>View My Portfolio</Button>
                                    <IconButton disableRipple sx={{ backgroundColor: "white" }}><PlayArrow color="black" /></IconButton>
                                </Stack>
                                <Button variant="outlined" sx={{ borderRadius: 10, width: 100, display: { lg: "block", xs: "none" } }}>Hire Me</Button>
                            </Stack>
                        </Box>
                    </Box>
                    <Box display={{ lg: "block", xs: "none" }} width={{ lg: "45%", xs: "100%" }} position={"relative"} sx={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: { lg: 400, xs: 250 }
                    }}>
                        <img src={require("./../../assets/images/hire_me.png")} style={{ position: "absolute", right: 0, maxHeight: 100, top: 5 }} />
                        <img src={require("./../../assets/images/pic_one.png")} style={{ maxHeight: "100%" }} />
                        <Box position={"absolute"} left={0} bottom={0}>
                            <AdsClickOutlined /><br />
                            <Button color="secondary" variant="contained" sx={{ borderRadius: 10, ml: 3 }}>Mobile Developer</Button>
                        </Box>
                        <Box position={"absolute"} right={"5%"} bottom={100}>
                            <AdsClickOutlined /><br />
                            <Button color="primary" variant="contained" sx={{ borderRadius: 10, ml: 3 }}>Fullstack Dev</Button>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Skillsdiv with_triangle={true} />
            {/**Services Section */}
            <div id="Services" />
            <Sectionheader
                title={'Services'}
                desc_one={"Services"}
                desc_two={"I Provide"}
                button_name={"View All Services"}
                route={"services"}
            />
            <Stack width={page_width} margin={"auto"}  >
                <Stack mt={3} justifyContent={"space-between"} flexDirection={{ lg: "row", xs: "column" }} >
                    {services_array.slice(0, 3).map((service, key) => {

                        return (
                            <ServiceCard key={key} service_name={service.service_name} service_desc={service.service_desc} icon_image={service.service_icon} />
                        )
                    })}
                </Stack>
            </Stack>
            <div id="About" />
            <AboutmeCard />
            {/**Tools section */}
            <SectionmiddleHeader
                title={"My Favorite Tools"}
                desc_one={"Exploring the Tools"}
                desc_two={"Behind My Designs"}
            />
            <Stack pb={10} pt={10} width={page_width} margin={"auto"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {tools_used.slice(0, 5).map((tool, key) => {

                    return (
                        <Toolcard
                            key={key}
                            tool_icon={tool.tool_icon}
                            tool_name={tool.tool_name}
                            percentage={tool.percentage}
                        />
                    )
                })}
            </Stack>
            <Box bgcolor={"#f5f5f5"} pt={5} id="Projects">
                {/**Projects section */}
                <Sectionheader
                    title={'My Portfolio'}
                    desc_one={"My Latest"}
                    desc_two={"Projects"}
                    button_name={"View All Projects"}
                    route={"projects"}
                />
                <Stack width={page_width} flexWrap={"wrap"} pt={4} pb={5} margin={"auto"} flexDirection={"row"} justifyContent={"space-between"}>
                    {personal_projects.map((project, key) => {

                        return (<Projectcard key={key} project={project} />)
                    })}
                </Stack>
            </Box>
            <Box bgcolor={primaryColor} pt={5}>
                {/**Projects section */}
                <Sectionheader
                    light={true}
                    title={'Pricing Table'}
                    desc_one={"My"}
                    desc_two={"Pricing Model"}
                    button_name={"Get started"}
                    route={"pricing"}
                />
                <Stack width={page_width} flexWrap={"wrap"} pt={4} pb={5} margin={"auto"} flexDirection={"row"} justifyContent={"space-between"}>
                    {pricingOptions.map((pricing, key) => {


                        return (<Pricingcard pricing={pricing} light={checknumber(key)} key={key} />)
                    })}
                </Stack>
            </Box>
            {/**contact me section */}
            <Stack width={page_width} flexWrap={"wrap"} pt={10} pb={10} margin={"auto"} flexDirection={{ lg: "row", xs: "column" }} justifyContent={"space-between"}>
                <Box width={{ lg: "38%", xs: "90%" }}>
                    <Stack fontSize={20} flexDirection={"row"}>
                        <Remove sx={{ color: secondaryColor }} />
                        <Typography color={"black"}>Contact Me</Typography>
                    </Stack>
                    <Typography
                        fontSize={35}
                        fontFamily={"boldfont"}
                        color={"black"}
                        sx={{
                            wordBreak: "break-word",
                            whiteSpace: "normal"
                        }}
                    >
                        Let's Talk for  <Typography fontSize={"inherit"} component="span" fontFamily={"italiclightfont"} color={"secondary"}>Your Next Projects</Typography>
                    </Typography>
                    <Typography mt={2} color={"gray"} fontSize={18}>
                        I'm available for freelance work, collaborations, and business inquiries. Feel free to reach out to me through the following channels:
                    </Typography>
                    <Stack onClick={() => initiateCall()} fontSize={18} mb={2} mt={2} flexDirection={"row"} alignItems={"center"}>
                        <IconButton disableRipple sx={{ backgroundColor: secondaryColor }}><Call fontSize="inherit" color="primary" /></IconButton>
                        <Typography ml={1} fontSize="inherit">{phoneNumbers[0]}</Typography>
                    </Stack>
                    {/* Email Address */}
                    <Stack onClick={() => initiateEmail(emailAddresses[0])} fontSize={18} mb={2} flexDirection={"row"} alignItems={"center"}>
                        <IconButton disableRipple sx={{ backgroundColor: secondaryColor }}>
                            <Email fontSize="inherit" color="primary" />
                        </IconButton>
                        <Typography fontSize="inherit" ml={1}>{emailAddresses[0]}</Typography>
                    </Stack>
                    {/* Location */}
                    <Stack fontSize={18} mb={2} flexDirection={"row"} alignItems={"center"}>
                        <IconButton disableRipple sx={{ backgroundColor: secondaryColor }}>
                            <LocationOn fontSize="inherit" color="primary" />
                        </IconButton>
                        <Typography ml={1} fontSize="inherit">Nairobi, Kenya</Typography>
                    </Stack>
                </Box>
                <ContactmeForm width={{ lg: "58%", xs: "100%" }} />
            </Stack>
            {/**Testimonials  section */}
            <Box id="Testimonials" bgcolor={"#f5f5f5"} pt={10} pb={10} mb={10}>
                <SectionmiddleHeader
                    title={"Client testimonials"}
                    desc_one={"The Impact of My Work"}
                    desc_two={"Client Testimonials"}
                />
                <TestimonialsSection />
            </Box>
            {/**Blogs section */}
            <div id="Blogs" />
            <Sectionheader
                title={'News & Blogs'}
                desc_one={"My Latest"}
                desc_two={"News & Blogs"}
                button_name={"View All Blogs"}
                route={"blogs"}
            />
            <Stack width={page_width} flexWrap={"wrap"} pt={4} pb={5} margin={"auto"} flexDirection={"row"} justifyContent={"space-between"}>
                {blogs_array.slice(0, 3).map((blog, key) => {

                    return (<Blogcard blog={blog} key={key} />)
                })}
            </Stack>
            {/**Faqs section */}
            <Box bgcolor={primaryColor} pt={10} pb={10}>
                <SectionmiddleHeader
                    title={'FAQs'}
                    desc_one={"Questions? "}
                    desc_two={"Look Here"}
                    light={true}
                />
                <Box width={page_width} margin={"auto"}>
                    <FaqsSection />
                </Box>
            </Box>
            <Skillsdiv with_triangle={false} />
        </Box>
    )
}

export default Homepage