<template>
    <section id="whychoose">
        <div class="relative contaner mx-8 lg:ml-24 lg:mr-0 mt-24 overflow-hidden">
            <div class="w-full flex justify-center text-center mb-12">
                <h2  v-motion :initial="{
                y: 80,
                opacity: 0,
                }" :visibleOnce="{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 600,
                    opacity: {
                    duration: 600,
                    },
                },
         }"
                    class="text-dark font-bold text-center text-[32px] leading-10 lg:text-[56px] w-[600px] lg:leading-[62.5px] mx-auto">
                    Tại sao nên <br> du học Hàn Quốc</h2>
            </div>
            <div class="flex">
                <swiper :spaceBetween="40" :initialSlide="1" :navigation="true" :loop="loop" :centeredSlides=false
                    :autoplay="autoplay" :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '1024': {
                            slidesPerView: 3.3,
                            spaceBetween: 20,
                        },
                        '1440': {
                            slidesPerView: 3.3,
                            spaceBetween: 40,
                        },
                    }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="project in projects" :key="project" class="swiper-item">
                        <div class="relative">
                            <div class="absolute top-0 w-full">
                                <img class="object-contain" :src="project.image" loading="lazy" :alt="project.alt" />
                            </div>
                            <div class="pt-24">
                                <h2 class="heading text-dark text-xl font-bold leading-6 tracking-tight mb-2">
                                    {{ project?.title }}
                                </h2>
                                <p class="content text-[15px] leading-5 text-grey font-normal">{{ project?.content }}</p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Autoplay],
        };
    },
    data() {
        return {
            projects: [
                { image: 'images/illustration_SearchEngine.svg', alt: 'SearchEngine', title: 'Tiếp xúc với nền giáo dục chất lượng', content: 'Hàn Quốc là một trong những quốc gia có nền giáo dục hàng đầu thế giới, đặc biệt về lĩnh vực IT, truyền thông, Quản trị kinh doanh…' },
                { image: 'images/illustration_Coins.svg', alt: 'Coins', title: 'Chi phí du học rẻ hơn so với các nước Châu Âu', content: 'Du học Hàn Quốc đang là sự lựa chọn hàng đầu của nhiều bạn trẻ, vì tổng chi phí du học Hàn Quốc dao động khoảng 180 - 450 triệu/năm' },
                { image: 'images/illustration_Marketing.svg', alt: 'Marketing', title: 'Cơ hội việc làm cao sau khi tốt nghiệp', content: 'Hiện nay Hàn Quốc đang là quốc gia đầu tư mạnh vào Việt Nam, do đó cơ hội việc làm sau khi du học Hàn Quốc là rất cao' },
                { image: 'images/illustration_Teamsuccess.svg', alt: 'Teamsuccess', title: 'Dễ dàng săn học bổng', content: 'Mỗi năm chính phủ Hàn Quốc dành khoảng 100 suất học bổng cho học sinh, sinh viên Việt Nam, chưa kể các trường có chế độ học bổng riêng' },
                { image: 'images/illustration_Teambuilding.svg', alt: 'Teambuilding', title: 'Trải nghiệm văn hóa đa dạng', content: 'Bạn có thể  trải nghiệm nền văn hóa truyền thống lâu đời của xứ sở Kim Chi cũng như làn sóng văn hóa Hàn Quốc (Hallyu)' }
            ],
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            loop: true,
            centeredSlides: false,
            slidesPerView: 'auto',
        }
    }
};
</script>
<style scoped>
.swiper-slide-active.swiper-item {
    @apply bg-primaryText md:bg-white;

    .heading {
        @apply text-white md:text-dark;
    }

    .content {
        @apply text-white md:text-grey;
    }

    +.swiper-item {
        @apply md:bg-primaryText;

        .content,
        .heading {
            @apply md:text-white;
        }
    }
}

.swiper-item {
    @apply h-full bg-white max-h-[335px] border-[3px] border-beebright rounded-tl-lg rounded-br-lg p-7 2xl:py-12;
}

.swiper-item {
    box-shadow: 15px 15px 0px 0px rgba(0, 0, 0, 0.14);
}

.swiper-wrapper {
    @apply px-10;
}

.swiper {
    @apply pb-44 px-5 md:px-0 lg:pb-24;
}

.swiper .swiper-slide {
    @apply min-h-[337px] md:min-h-0;
}
</style>