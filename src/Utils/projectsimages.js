import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { isMobile } from "react-device-detect";

const Mobileimages = ({ imagesarray, type }) => {

    return (
        <Swiper
            slidesPerView={type === "m" ? isMobile ? 1 : 4 : 1}
            spaceBetween={1}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={2000}
            shortSwipes={false}
            modules={[Autoplay, Pagination, Navigation]}
            navigation={true}
            style={{
                "--swiper-pagination-color": "#000",
                "--swiper-navigation-color": "#000",
                "--swiper-navigation-size": "20px"
            }}
        >
            {Array.isArray(imagesarray) && imagesarray.map((val, key) => {

                return (
                    <SwiperSlide key={key} >
                        <img src={val} className={type === "w" ? "desktopimages" : "mobileimages"} />
                    </SwiperSlide>
                )
            })

            }
        </Swiper>
    )
}

export default Mobileimages;