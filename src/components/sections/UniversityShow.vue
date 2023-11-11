<script>
import { ref } from 'vue'

  export default {
    data() {
        return {
            unvs: [
                {
                  img: '/images/university/unv1.png',
                  title: '성균관 대학교',
                  subtitle: 'Đại học Sungkyunkwan',
                  content: `-Địa chỉ: 
                            +Cơ sở khoa học xã hội nhân văn: 25-2, sungkyunkwan-ro, jongno-gu, seoul
                            +Cơ sở khoa học tự nhiên: 2066, seobu-ro, jangan-gu, suwon-si, gyeonggi-do
                            -Theo Top Universities 2019, Sungkyunkwan lọt TOP 5 Đại học tốt nhất Hàn Quốc, TOP 15
                            châu Á. Và hơn thế nữa trường cũng lọt TOP 100 Đại học tốt nhất Thế giới.
                            -Trường hiện có 23 ngành nằm trong top 100 thế giới theo xếp hạng các ngành học. Trong
                            đó có 3 ngành nằm trong top 50: Ngôn ngữ hiện đại, Dược học, Kỹ thuật hóa học.`,
                  open: true
                },
                {
                  img: '/images/university/unv2.png',
                  title: '서강 대학교',
                  subtitle: 'Đại học Korea',
                  content: `-Đại học Quốc gia Hàn Quốc là một trong những trường đại học lớn và cổ nhất tại Hàn
                    Quốc. Trường được thành lập vào năm 1905, và nó là một trong ba trường đại học quốc gia
                    hàng đầu tại Hàn Quốc. 
                    -Trường cung cấp các chương trình đào tạo đa dạng ở cấp cử nhân, thạc sĩ và tiến sĩ trong
                    nhiều ngành khác nhau, bao gồm cả nghệ thuật, khoa học xã hội, khoa học tự nhiên, kỹ
                    thuật, kinh doanh, luật, y học và nhiều lĩnh vực khác.`,
                  open: false
                } ,
                {
                  img: '/images/university/unv3.png',
                  title: '한국 외국어 대학교',
                  subtitle: 'Đại học Ngoại ngữ Hàn Quốc – Hankuk',
                  content: `-Đại học Ngoại ngữ Hàn Quốc (Korea University of Foreign Studies), thường được gọi là
                    Hankuk University of Foreign Studies (HUFS), là một trường đại học chuyên về ngoại ngữ
                    và quan hệ quốc tế tại Hàn Quốc. 
                    -Đại học Hankuk University of Foreign Studies được thành lập vào năm 1954 và đã phát
                    triển thành một trường đại học quan trọng với tầm ảnh hưởng quốc tế về ngoại ngữ và quan
                    hệ quốc tế.`,
                  open: false
                } ,
                {
                  img: '/images/university/unv4.png',
                  title: '안동 과학 대학교',
                  subtitle: 'Cao đẳng khoa học Andong',
                  content: `-Cao đẳng khoa học Andong là một trong những trường đào tạo nghề tốt nhất Hàn Quốc
                    được nhiều du học sinh lựa chọn để học tập. 
                    -Cao đẳng khoa học Andong là một trong những trường đào tạo nghề tốt nhất Hàn Quốc
                    được nhiều du học sinh lựa chọn để học tập.`,
                  open: false
                } ,
                {
                  img: '/images/university/unv5.png',
                  title: '청운 대학교',
                  subtitle: 'Đại học Chungwoon',
                  content: `-Trường có thế mạnh về lĩnh vực đào tạo truyền thông, nghệ thuật truyền hình 
                    -Top 3 đại học Hàn Quốc có khoa Việt Nam học 
                    -Trường được chọn là một trong 100 trường đại học hàng đầu thế giới trong bảng xếp hạng
                    WURI năm 2022 (Đứng hạng 17 trên thế giới về trao đổi sinh viên; Hạng 28 trên thế giới về
                    ứng dụng công nghiệp)`,
                  open: false,
                } 
            ],
            activeMob: false,
            activeIndex: 0
        }
    },
    methods: {
        mouseover: function(inv) {
          if (inv.open === false)
            inv.open = true
        },    
        mouseleave: function(inv) {
            inv.open = false
        },
        toggleClick: function(index) {
          const itemRefs = this.$refs.itemRefs;
          if (itemRefs.length) {
            itemRefs.forEach(element => {
              element.classList.remove('clicked')
            });
          }
          
          console.log(itemRefs);
          this.activeIndex = index
          this.activeMob = !this.activeMob
        }
    }
  }
</script>
<template>
    <section id="university">
        <div 
          class="relative w-full before:content-[''] before:absolute before:left-0 
          before:top-0 before:w-full before:h-full before:bg-[url('/images/university/bg-university.jpg')] 
          before:bg-no-repeat before:bg-cover before:bg-center before:bg-fixed before:opacity-60 before:-z-10">
            <div class="container max-w-960 px-9 pt-20 pb-24 overflow-hidden">
                <div v-motion-slide-visible-once-bottom class="flex flex-col justify-center items-center text-center">
                    <img width="64" height="90" class="w-16 object-contain" src="/images/university/illustration_Achie_ement.png" loading="lazy" alt="thành tích">
                    <h2 class="text-shadow-white text-32 text-black text-center font-bold -tracking-[0.48px] leading-normal md:text-68 md:leading-[78px]">Các trường đại học</h2>
                    <p class="text-shadow-white text-base max-w-2xl text-black font-normal leading-6 mt-3 mb-9">Hãy tham khảo danh sách các trường đại học do DUHOCD.com giới thiệu để bạn có thể tìm hiểu về ưu nhược điểm của mỗi trường. Từ đó xây dựng cho mình một kế hoạch du học phù hợp và hiệu quả nhất.</p>
                </div>
                <Transition>
                    <div class="flex flex-col w-full">
                        <div v-for="(inv, index) in unvs" :key="inv" :class="index===0 ? '!border-[3px] active-first' : ''" 
                            :title="inv?.subtitle"
                            class="items p-5 mb-2.5 md:mb-6 bg-white rounded-[25px] border overflow-hidden hover:border-[3px] border-black ">
                            <div 
                                    ref="itemRefs"
                                    v-on:mouseover="mouseover(inv)"
                                    v-on:mouseleave="mouseleave(inv)" :class="index===0 ? '!max-h-full' : ''" 
                                    @click="toggleClick(index)"
                                    v-bind:class="[inv.open ? 'onmousover' : '', activeIndex === index && activeMob ? 'clicked' : '']"
                                    class="box-wrap-content relative flex box-item max-h-[160px] transition-all duration-700 delay-150 transition-all h-full flex-col md:flex-row overflow-hidden">
                                   
                                <div class="flex w-full md:w-1/2 rounded-[25px] overflow-hidden">
                                    <img width="420" height="445" :class="inv.open ? 'block' : 'block'" class="base-image max-h-[376px] md:max-h-full w-full object-cover" :src="inv?.img" loading="lazy" alt="Đại học Hàn Quốc"/>
                                </div>
                                <div class="unv-content mt-9 md:mt-0 flex flex-col w-full md:pl-8 md:w-1/2  overflow-y-auto no-scrollbar">
                                    <h2 :class="{ active: index === 0}" class="heading content-white transition-all text-dark text-[27px] font-bold leading-normal mb-2 md:mt-12">{{ inv?.title  }}</h2>
                                    <h3 class="content-white text-dark text-[19px] font-bold leading-normal mb-2 tracking-tight">{{ inv?.subtitle }}</h3>
                                    <p :class="index === 0 ? '!opacity-100 !visible' : ''" class="box-text-content pb-8 opacity-0 invisible transition-all duration-300 text-grey whitespace-pre-line text-15 font-normal leading-5 mt-5">{{ inv?.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .no-scrollbar::-webkit-scrollbar {
          display: none;
    }
    .no-scrollbar {
          -ms-overflow-style: none; 
          scrollbar-width: none; 
    }
    .onmousover {
      @apply md:hover:max-h-[500px];
    }

    .clicked {
      @apply max-h-[800px] md:max-h-full;
    }
    .onmousover .box-text-content  {
      @apply md:visible md:opacity-100;
    }
    .clicked .box-text-content  {
      @apply visible opacity-100;
    }
    .items:not(.active-first) .box-wrap-content:not(.clicked) .unv-content {
      @apply absolute h-full overflow-hidden bg-[#00000080] rounded-[16px] md:bg-white 
      px-8 py-6 mt-0 md:py-0 md:static top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 md:translate-y-0;
      .content-white {
        @apply text-white md:text-black;
      }
    }
</style>