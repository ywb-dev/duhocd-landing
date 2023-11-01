<template>
    <section id="flow">
        <div 
        class="relative py-24 md:py-48 bg-[#BCBCBC] overflow-hidden">
            <div class="container max-w-960 mx-auto px-5 ">
                <TakeNoteIcon v-motion-slide-visible-once-bottom class="mx-auto mb-4 hidden md:block w-[148px]"/>
                <h2  v-motion-slide-visible-once-bottom class="w-full text-32 md:text-68 text-center mb-11 font-bold md:mb-20">Quy trình du học</h2>
                <div v-motion-slide-visible-right  class="w-full border-[10px] border-primaryText bg-[#EFE9DB] rounded-[45px] overflow-hidden">
                    <div class="flex flex-col md:flex-row border-primaryText">
                        <div class="w-full flex items-center justify-center md:justify-start border-b-2 py-8 border-primaryText md:border-0  md:w-1/2 text-center md:text-left  text-[26px] md:text-25 font-bold  px-8 md:px-14 leading-normal md:border-r-2 border-primaryText">
                            Hỗ trợ tư vấn
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="text-lg text-[#1E1E1E] leading-normal font-normal py-6 px-12 text-center md:text-left">
                                Chuyên ngành và trường học
                            </div>
                            <div class="text-lg text-[#1E1E1E] leading-normal font-normal py-6 px-12 text-center md:text-left border-t-2 border-primaryText">
                                Các thông tin liên quan đến du học
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row border-t-4 border-primaryText">
                        <div class="w-full flex items-center justify-center md:justify-start border-b-2 py-8 border-primaryText md:border-0  md:w-1/2 text-center md:text-left  text-[26px] md:text-25 font-bold  px-8 md:px-14 leading-normal md:border-r-2 border-primaryText">
                            Hỗ trợ chuẩn bị giấy tờ du học
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="text-lg text-[#1E1E1E] leading-normal font-normal py-6 px-12 text-center md:text-left">
                                Các thông tin liên quan đến du học
                            </div>
                            <div class="text-lg text-[#1E1E1E] leading-normal font-normal py-6 px-12 text-center md:text-left border-t-2 border-primaryText">
                                Các loại giấy tờ cần thiết khác 
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row border-t-4 border-primaryText">
                        <div class="w-full flex items-center justify-center md:justify-start border-b-2 py-8 border-primaryText md:border-0  md:w-1/2 text-center md:text-left  text-[26px] md:text-25 font-bold  px-8 md:px-14 leading-normal md:border-r-2 border-primaryText">
                            Hỗ trợ xuất cảnh
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="text-lg text-[#1E1E1E] leading-normal font-normal py-6 px-12 text-center md:text-left">
                                Xin Visa
                            </div>
                            <div class="text-lg text-[#1E1E1E] leading-normal font-normal py-6 px-12 text-center md:text-left border-t-2 border-primaryText">
                                Mua vé máy bay
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row border-t-4 border-primaryText">
                        <div class="w-full flex items-center justify-center md:justify-start border-b-2 py-8 border-primaryText md:border-0  md:w-1/2 text-center md:text-left  text-[26px] md:text-25 font-bold  px-8 md:px-14 leading-normal md:border-r-2 border-primaryText">
                            Hỗ trợ trong quá trình du học
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="text-lg text-[#1E1E1E] leading-normal font-normal py-6 px-12 text-center md:text-left">
                                Chỗ ở, việc làm và những vấn đề phát sinh khi học tập tại trường
                            </div>
                        </div>
                    </div>
                </div>
                <div v-motion
                    :initial="{
                        opacity: 0,
                    }"
                    :enter="{
                        opacity: 1,
                        transition: {
                        opacity: {
                            duration: 1000,
                        },
                        },
                    }"
                     class="relative pt-24 max-w-sm md:max-w-960 mx-auto">
                    <div class="step relative flex flex-col md:flex-row md:items-end">
                        <img width="245" height="243" v-motion-slide-visible-left class="object-contain max-w-[250px] md:max-w-full" src="/images/flows/person1.png" loading="lazy" alt="đăng ký bước 1">
                        <div class="flex">
                            <img width="208" height="199" class="mx-w-[150px] max-w-full object-contain -mt-6 absolute md:static md:-ml-8" src="/images/flows/number1.png" loading="lazy" alt="đăng ký bước 1">
                            <h3 class="step-text ml-auto mt-6 w-64 md:w-96 z-10 text-2xl xs:text-32 text-back font-semibold tracking-wide md:-ml-4">Đăng ký tư vấn từ trung tâm</h3>
                        </div>
                        <img width="174" height="159" v-motion-slide-visible-right class=" arrow ml-auto mt-4 md:mr-auto md:mt-0" src="/images/flows/arrow1.png" loading="lazy" alt="đăng ký bước 1">
                    </div>
                    <div v-motion-slide-visible-left class="-mt-20 step relative md:mt-0  md:flex md:items-end md:flex-row-reverse">
                        <img width="305" height="250" class="max-w-[250px] md:max-w-full" src="/images/flows/person2.png" loading="lazy" alt="đăng ký bước 1">
                        <div class="flex">
                            <h3 class="step-text mt-6 w-64 md:w-96 z-10 text-2xl xs:text-32 text-back font-semibold tracking-wide text-right">Chọn ngành và trường du học</h3>
                            <img width="208" height="199" class="absolute -mt-6 -right-8 md:static md:-mr-10" src="/images/flows/number2.png" loading="lazy" alt="đăng ký bước 1">
                        </div>
                        <img width="174" height="160" class="arrow mr-auto" src="/images/flows/arrow2.png" loading="lazy" alt="đăng ký bước 1">
                    </div>
                    <div v-motion-slide-visible-right class="-mt-20 step relative md:mt-0 md:flex md:items-end">
                        <img width="353" height="223" class="relative max-w-[250px] md:max-w-full z-10" src="/images/flows/person3.png" loading="lazy" alt="đăng ký bước 1">
                        <div class="flex md:items-center">
                            <img width="208" height="199" class="absolute -mt-6 -left-8 md:static md:-ml-8" src="/images/flows/number3.png" loading="lazy" alt="đăng ký bước 1">
                            <h3 class="step-text mt-8 ml-auto w-64 md:w-96 z-10 text-2xl xs:text-32 text-back font-semibold tracking-wide text-left">Học tiếng Hàn</h3>
                        </div>
                        <img  width="105" height="210" class="arrow -mt-28 ml-auto md:-mb-44" src="/images/flows/arrow3.png" loading="lazy" alt="đăng ký bước 1">
                    </div>
                    <div v-motion-slide-visible-right  class="-mt-20 step relative md:mt-0  md:flex md:items-end md:justify-end md:flex-row-reverse">
                        <img width="305" height="291"  class="max-w-[250px] md:max-w-full" src="/images/flows/person4.png" loading="lazy" alt="đăng ký bước 1">
                        <div class="flex">
                            <h3 class="step-text mt-6 w-64 md:w-96  md:w-96 z-10 text-2xl xs:text-32 text-back font-semibold tracking-wide text-right">Chuẩn bị hồ sơ gửi cho trường du học</h3>
                            <img  width="208" height="199" class="absolute -mt-6 -right-8 md:static object-contain" src="/images/flows/number4.png" loading="lazy" alt="đăng ký bước 1">
                        </div>
                        <img width="174" height="154" class="arrow mr-auto md:mr-0 md:absolute md:-bottom-40" src="/images/flows/arrow4.png" loading="lazy" alt="đăng ký bước 1">
                    </div>
                    <div v-motion-slide-visible-left class="-mt-20 step relative relative md:mt-6 md:flex md:items-end md:justify-end">
                        <img width="253" height="196" class="relative max-w-[250px] md:max-w-full z-10 ml-auto md:ml-0" src="/images/flows/person5.png" loading="lazy" alt="đăng ký bước 1">
                        <div class="flex md:items-center">
                            <img width="208" height="199" class="absolute -mt-6 -left-8 md:mt-0 md:ml-0 md:static" src="/images/flows/number5.png" loading="lazy" alt="đăng ký bước 1">
                            <h3 class="step-text mt-8 ml-auto w-64 md:w-96 z-10 text-2xl xs:text-32 text-back font-semibold tracking-wide text-left">Nhận kết quả hồ sơ</h3>
                        </div>
                        <img width="112" height="132" class="arrow ml-auto -mt-6 -mr-8 md:ml-0 md:absolute -right-8 -bottom-20" src="/images/flows/arrow5.png" loading="lazy" alt="đăng ký bước 1">
                    </div>
                    <div v-motion-slide-visible-right class="-mt-20 step relative md:mt-10  md:flex md:items-end md:justify-end md:flex-row-reverse">
                        <img width="308" height="262" class="relative max-w-[250px] md:max-w-full z-10 md:absolute md:ml-auto md:right-12 -top-8" src="/images/flows/person8.png" loading="lazy" alt="đăng ký bước 1">
                        <div class="flex md:items-center">
                            <h3 class="step-text mt-6 md:mt-40 w-64 md:w-fit md:px-8 z-10 text-2xl xs:text-32 text-back font-semibold tracking-wide text-right">Xin visa</h3>
                            <img width="208" height="199" class="absolute -mt-6 md:mt-48 md:-mr-8 -right-8 md:static" src="/images/flows/number6.png" loading="lazy" alt="đăng ký bước 1">
                        </div>
                        <img width="133" height="142" class="arrow mr-auto md:ml-auto md:mr-0" src="/images/flows/arrow6.png" loading="lazy" alt="đăng ký bước 1">
                    </div>
                    <div v-motion-slide-visible-left class="-mt-20 step relative md:mt-0 md:flex md:items-end md:justify-center">
                        <img width="268" height="263" class="relative max-w-[250px] md:max-w-full z-10 md:absolute md:ml-auto md:left-24 -top-14" src="/images/flows/person6.png" loading="lazy" alt="đăng ký bước 1">
                        <div class="flex w-full md:justify-center md:items-start">
                            <img width="208" height="199" class="absolute -mt-6 -left-8 md:static" src="/images/flows/number7.png" loading="lazy" alt="đăng ký bước 1">
                            <h3 class="step-text mt-12 ml-auto w-64 md:w-fit z-10 text-2xl xs:text-32 text-back font-semibold tracking-wide text-left md:ml-0">Xuất cảnh</h3>
                        </div>
                        <img width="177" height="177" class="arrow ml-auto md:mr-auto md:-ml-52" src="/images/flows/arrow7.png" loading="lazy" alt="đăng ký bước 1">
                    </div>
                    <div v-motion-slide-visible-right class="-mt-20 step relative md:mttt-0 md:flex md:items-end md:justify-end md:flex-col-reverse">
                        <img width="536" height="360" class="md:-mt-12 max-w-[250px] md:max-w-full" src="/images/flows/person7.png" loading="lazy" alt="đăng ký bước 1">
                        <div class="flex md:justify-center md:items-center">
                            <h3 class="step-text mt-6 w-64 md:w-fit z-10 text-2xl xs:text-32 text-back font-semibold tracking-wide text-right">Nhập học</h3>
                            <img width="208" height="199" class="absolute -mt-6 -right-8 md:static md:mt-8" src="/images/flows/number8.png" loading="lazy" alt="đăng ký bước 1">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import TakeNoteIcon from '../icons/TakeNoteIcon.vue';
</script>
<style scoped>
 .step:first-child .step-text,
 .step-text:hover {
    color: #FFD25D;
    text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
               1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
 }
</style>