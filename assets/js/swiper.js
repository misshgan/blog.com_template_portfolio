// import Swiper JS
import Swiper from "swiper";
import { Scrollbar } from 'swiper/modules'
// import Swiper styles
import "swiper/css";

export function handleHomeSwiper() {
    const swiper = new Swiper(".swiper", {

        modules: [Scrollbar],

        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 1.6,

        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 2
            }
        },

        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
}
