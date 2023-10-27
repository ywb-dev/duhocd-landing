<script>
  export default {
    data() {
        return {
            unvs: [
                {
                  img: '/images/university/unv1.png',
                  thumb: '/images/university/unv1.png',
                  title: '성균관 대학교',
                  subtitle: 'Đại học Sungkyunkwan',
                  content: `-Địa chỉ: 
                            +Cơ sở khoa học xã hội nhân văn: 25-2, sungkyunkwan-ro, jongno-gu, seoul
                            +Cơ sở khoa học tự nhiên: 2066, seobu-ro, jangan-gu, suwon-si, gyeonggi-do
                            -Theo Top Universities 2019, Sungkyunkwan lọt TOP 5 Đại học tốt nhất Hàn Quốc, TOP 15
                            châu Á. Và hơn thế nữa trường cũng lọt TOP 100 Đại học tốt nhất Thế giới.
                            -Trường hiện có 23 ngành nằm trong top 100 thế giới theo xếp hạng các ngành học. Trong
                            đó có 3 ngành nằm trong top 50: Ngôn ngữ hiện đại, Dược học, Kỹ thuật hóa học.`
                },
                {
                  img: '/images/university/unv2.png',
                  thumb: '/images/university/unvthumb2.png',
                  title: '서강 대학교',
                  subtitle: 'Đại học Korea',
                  content: `-Đại học Quốc gia Hàn Quốc là một trong những trường đại học lớn và cổ nhất tại Hàn
                    Quốc. Trường được thành lập vào năm 1905, và nó là một trong ba trường đại học quốc gia
                    hàng đầu tại Hàn Quốc. 
                    -Trường cung cấp các chương trình đào tạo đa dạng ở cấp cử nhân, thạc sĩ và tiến sĩ trong
                    nhiều ngành khác nhau, bao gồm cả nghệ thuật, khoa học xã hội, khoa học tự nhiên, kỹ
                    thuật, kinh doanh, luật, y học và nhiều lĩnh vực khác.`
                } ,
                {
                  img: '/images/university/unv3.png',
                  thumb: '/images/university/unvthumb3.png',
                  title: '한국 외국어 대학교',
                  subtitle: 'Đại học Ngoại ngữ Hàn Quốc – Hankuk',
                  content: `-Đại học Ngoại ngữ Hàn Quốc (Korea University of Foreign Studies), thường được gọi là
                    Hankuk University of Foreign Studies (HUFS), là một trường đại học chuyên về ngoại ngữ
                    và quan hệ quốc tế tại Hàn Quốc. 
                    -Đại học Hankuk University of Foreign Studies được thành lập vào năm 1954 và đã phát
                    triển thành một trường đại học quan trọng với tầm ảnh hưởng quốc tế về ngoại ngữ và quan
                    hệ quốc tế.`
                } ,
                {
                  img: '/images/university/unv4.png',
                  thumb: '/images/university/unvthumb4.png',
                  title: '안동 과학 대학교',
                  subtitle: 'Cao đẳng khoa học Andong',
                  content: `-Cao đẳng khoa học Andong là một trong những trường đào tạo nghề tốt nhất Hàn Quốc
                    được nhiều du học sinh lựa chọn để học tập. 
                    -Cao đẳng khoa học Andong là một trong những trường đào tạo nghề tốt nhất Hàn Quốc
                    được nhiều du học sinh lựa chọn để học tập.`
                } ,
                {
                  img: '/images/university/unv5.png',
                  thumb: '/images/university/unvthumb5.png',
                  title: '청운 대학교',
                  subtitle: 'Đại học Chungwoon',
                  content: `-Trường có thế mạnh về lĩnh vực đào tạo truyền thông, nghệ thuật truyền hình 
                    -Top 3 đại học Hàn Quốc có khoa Việt Nam học 
                    -Trường được chọn là một trong 100 trường đại học hàng đầu thế giới trong bảng xếp hạng
                    WURI năm 2022 (Đứng hạng 17 trên thế giới về trao đổi sinh viên; Hạng 28 trên thế giới về
                    ứng dụng công nghiệp)`
                } 
            ],
            active: false
        }
    },
    methods: {
        mouseover: function(e) {
            console.log('el:', e.target.offsetHeight );
            this.active = true
        },    
        mouseleave: function(e) {
            this.active = false
        }
    }
  }
</script>
<template>
    <section id="university">
        <div class="relative w-full bg-fixed bg-[url('/images/university/bg-university.jpg')] bg-no-repeat bg-cover bg-center">
            <div class="container max-w-960 px-9 pt-20 pb-24">
                <div class="flex flex-col justify-center items-center text-center">
                    <img class="w-16 object-contain" src="/images/university/illustration_Achie_ement.png" loading="lazy" alt="thành tích">
                    <h2 class="text-shadow-white text-32 text-dark text-center font-bold -tracking-[0.48px] leading-normal md:text-68 md:leading-[78px]">Các trường đại học</h2>
                    <p class="text-shadow-white text-base max-w-2xl text-dark font-normal leading-6 mt-3 mb-9">Hãy tham khảo danh sách các trường đại học do DUHOCD.com giới thiệu để bạn có thể tìm hiểu về ưu nhược điểm của mỗi trường. Từ đó xây dựng cho mình một kế hoạch du học phù hợp và hiệu quả nhất.</p>
                </div>
                <Transition>
                    <div class="flex flex-col w-full">
                        <div v-for="(inv, index) in unvs" :key="inv" :class="index===0 ? '!border-[3px]' : fasle" class="p-5 mb-2.5 md:mb-6 rounded-[25px] border hover:border-[3px] border-black transition-all bg-white">
                            <div  v-on:mouseover="mouseover"
                                    v-on:mouseleave="mouseleave" :ref="'infoBox-' + index" :class="index===0 ? '!max-h-full' : fasle" class="flex box-item flex-col md:flex-row h-full [&>div>.thumb-image]:hover:hidden [&>div>.base-image]:hover:block [&>.unv-content>p]:hover:block [&>.unv-content>p]:hover:opacity-100 duration-700 delay-150 transition-all overflow-hidden">
                                <div class="flex w-full md:w-1/2 rounded-[25px] overflow-hidden">
                                    <img class="base-image" :src="inv?.img" loading="lazy" alt="Đại học Hàn Quốc"/>
                                    <img class="thumb-image object-cover hidden" :src="inv?.thumb" loading="lazy" alt="Đại học hàn quốc">
                                </div>
                                <div class="unv-content mt-9 md:mt-0 flex flex-col w-full md:pl-8 md:w-1/2">
                                    <h2 :class="index===0 ? '!text-dark' : fasle" class="text-white md:text-dark text-[27px] font-bold leading-normal mb-2 md:mt-12">{{ inv?.title  }}</h2>
                                    <h3 :class="index===0 ? '!text-dark' : fasle" class="text-white md:text-dark text-[19px] font-bold leading-normal mb-2 tracking-tight">{{ inv?.subtitle }}</h3>
                                    <p class="text-white md:text-grey whitespace-pre-line text-15 font-normal leading-5 mt-5">{{ inv?.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </section>
</template>
<style>
    .box-item:hover p,
    .box-item:hover h3,
    .box-item:hover h2 {
        color: black;
    }

    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }

    /* .text-shadow-white {
        text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
    } */
</style>