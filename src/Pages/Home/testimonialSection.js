import { Star } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { testimonials } from "../../Utils/arrays";


const TestimonialsSection = () => {

    return (
        <Box pb={5} pt={5}>
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                loopFillGroupWithBlank={true}
                shortSwipes={true}
                centeredSlides={false} // Ensure slides are evenly spaced
                autoplay={{ delay: 10000 }}
                pagination={{ clickable: true }}
                navigation={false}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens (phones)
                    768: { slidesPerView: 2, spaceBetween: 20 }, // Medium screens (tablets)
                    1024: { slidesPerView: 3, spaceBetween: 30 }, // Large screens (desktops)
                }}
                style={{
                    "--swiper-pagination-color": "#000",
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "20px"
                }}
            >
                {testimonials?.map((testimonial, key) => (
                    <SwiperSlide key={key} style={{ display: "flex", justifyContent: "center" }}>
                        <Box
                            padding={3}
                            bgcolor={"white"}
                            borderRadius={2}
                            width={"100%"}
                            maxWidth={400}
                            boxShadow={2}
                        >
                            <Stack flexDirection={"row"} alignItems={"center"}>
                                <Stack flexDirection={"row"} alignItems={"center"}>
                                    <Star color="secondary" />
                                    <Star color="secondary" />
                                    <Star color="secondary" />
                                    <Star color="secondary" />
                                    <Star color="secondary" />
                                </Stack>
                                <Typography>{testimonial.rating}.0</Typography>
                            </Stack>
                            <Typography mt={2} mb={2}>{testimonial.message}</Typography>
                            <Stack flexDirection={"row"} alignItems={"center"}>
                                <img
                                    src={testimonial.image}
                                    alt="User"
                                    style={{ height: 70, width: 70, borderRadius: "100%" }}
                                />
                                <Box ml={2}>
                                    <Typography fontFamily={"boldfont"}>{testimonial.name}</Typography>
                                    <Typography>{testimonial.position}</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default TestimonialsSection;
