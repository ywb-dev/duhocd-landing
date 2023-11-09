<template>
    <section id="review">
        <div class="relative px-10 py-20 md:py-36 bg-white review overflow-hidden">
            <div class="container max-w-960 mx-auto">
                <div  v-motion-slide-visible-once-bottom
                     class="max-w-[900px] mb-12 md:mb-20">
                    <img width="80" height="112" class="w-14 mx-auto md:w-20 object-contain mb-5 md:mb-0" src="/images/university/illustration_Achie_ement.png" loading="lazy" alt="chứng nhận">
                    <h2 class="text-dark text-center font-bold text-3xl -tracking-[0.4px] md:text-68 md:leading-[78px]">Các học viên đánh giá như nào về DUHOCD.com</h2>
                </div>
                 <div class="flex flex-col">
                    <swiper v-if="mobile"
                    :spaceBetween="40"
                    :navigation="true"
                    :loop="loop"
                    :centeredSlides=false
                    :autoplay="autoplay"
                    :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        '768': {
                            slidesPerView: 9,
                            spaceBetween: 40,
                        }
                    }"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide
                         v-for="review in reviews" :key="review">
                        <div class="flex flex-col md:flex-row justìy-center items-center sm:mb-12">
                            <div class="p-8 bg-beebright shadow-sm rounded-[39px] review-shadow">
                                <p>{{ review?.comment }}</p>
                                <p class="text-right font-bold text-base text-black tracking-tight mt-2.5">- {{  review?.author }}</p>
                            </div>
                            <div class="w-40 h-40 min-w-[10rem] rounded-[172px] overflow-hidden mt-6">
                                <img width="172" height="172" class="w-full h-full block object-cover" :src="review?.image" loading="lazy" alt="du học sinh">
                            </div> 
                        </div>
                    </swiper-slide>
                </swiper>
                <div v-else v-for="(review, index) in reviews"  :key="review" :class="index%2===0 ? 'md:flex-row' : 'md:flex-row-reverse'" class="flex flex-col md:flex-row sm:mb-12">
                    <div 
                    v-motion-slide-visible-once-left
                    :class="index%2===0 ? 'mr-5' : 'ml-5'" v-motion-slide-right class="p-8 bg-beebright shadow-sm rounded-[39px] review-shadow">
                        <p>{{ review?.comment }}</p>
                        <p class="text-right font-bold text-base text-black tracking-tight mt-2.5">- {{  review?.author }}</p>
                    </div>
                    <div v-motion-slide-right class="w-40 h-40 min-w-[10rem] rounded-[172px] overflow-hidden">
                        <img width="172" height="172" class="w-full h-full block object-cover hover:scale-110 transition-transform" :src="review?.image" loading="lazy" alt="du học sinh">
                    </div> 
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    .review .swiper-slide {
        @apply !w-full;
    }
    .review .swiper-wrapper {
        @apply md:flex-col;
    } 
    .review .swiper .swiper-button-next,
    .review .swiper .swiper-button-prev {
        @apply -bottom-8;
    }
</style>
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
          modules: [Navigation, Autoplay ],
        };
      },
      data() {
        return {
            reviews: [
                { image: 'images/reviews/review1.png', author: 'Lê Trung Hiếu', comment: 'Nhờ sự quan tâm chu đáo của trung tâm từ lúc tư vấn chọn trường, chi phí du học cho đến khi xuất cảnh nên mình đã có thể yên tâm đi du học.', bgbox: '@/images/review/box-message-1.png'},
                { image: 'images/reviews/review2.png', author: 'Hoàng Mai Anh', comment: 'Em muốn đi du học nhưng đang mơ hồ không biết phải bắt đầu tìm hiểu từ đâu. Cảm ơn trung tâm du học đã nhiệt tình tư vấn cho em ạ.' },
                { image: 'images/reviews/review3.png', author: 'Nguyễn Thu Thảo', comment: 'Mình không quen ai ở Hàn cả, hồi sang Hàn du học sống một mình có rất nhiều vấn đề phát sinh nhưng rất may trung tâm du học này đã nhiệt tình giúp đỡ, hỗ trợ mình.', bgbox: '@/images/review/box-message-2.png'},
                { image: 'images/reviews/review4.png', author: 'Trần Thị Diệp Lê', comment: 'Tìm kiếm một số thứ về thông tin du học Hàn Quốc trên mạng không có. May mình đã được giải quyết những thắc mắc qua tư vấn 1:1 ở trung tâm này.', bgbox: '@/images/review/box-message-1.png' },
                { image: 'images/reviews/review5.png', author: 'Nguyễn Thu Thảo', comment: 'Thông tin về du học được tư vấn từ trung tâm mình thấy rất chính xác và đáng tin cậy vì giám đốc trung tâm là người Hàn.)', bgbox: '@/images/review/box-message-2.png'  },
                { image: 'images/reviews/review6.png', author: 'Lương Nguyễn Việt Sơn', comment: 'Ban đầu mình không biết đi du học nước nào, khá là mông lung. Nhưng sau khi được tư vấn nhiệt tình và cân nhắc kĩ, mình đã quyết định đi du học Hàn Quốc. Hiện tại thì mình thấy quyết định này là vô cùng đúng đắn.', bgbox: '@/images/review/box-message-1.png'}
            ],
            autoplay: {
                delay: 8000,
                disableOnInteraction: false
            }, 
            loop: true,
            centeredSlides: false,
            slidesPerView: 'auto',
            mobile: window.screen.width < 768 ? true : false,
        }
      },
      created: function () {
        window.addEventListener('resize', this.handleResize)
      },
      unmounted: function () {
         window.removeEventListener('resize', this.handleResize)
      },
      methods: {
        handleResize() {
            if (window.screen.width < 768) {
                this.mobile = true;
            } else {
                this.mobile = false;
            }
        }
      }
    };
</script>