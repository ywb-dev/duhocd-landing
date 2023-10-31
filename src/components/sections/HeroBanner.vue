<template>
    <section id="home">
        <div class="relative z-10 w-full hero-gradiant rounded-bl-[147px] md:rounded-bl-[300px] top-0 left-0 -z-10 h-full w-full max-h-[839px] md:max-h-[768px] overflow-hidden">
            <div class="max-w-[1136px] container">
                <div class="flex flex-col md:flex-row justify-center items-center pt-20 md:-mt-7 min-h-[632px]">
                    <div 
                        :initial="{
                            y: 100,
                            opacity: 0,
                        }"
                        :enter="{
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 600,
                                y: {
                                    delay: 100,
                                },
                                opacity: {
                                    duration: 1600,
                                },
                            },
                        }" 
                     v-motion-slide-left 
                        class="content w-full md:w-1/2 text-right pr-10 md:pr-0 pl-8">
                        <a href="https://duhocd.com/" target="_blank" class="decoration-1 underline-offset-4 uppercase text-primaryText 
                            underline hover:text-hoverLink font-normal text-15 lg:text-23 leading-normal -tracking-[0.23px]" >DUHOCD.COM</a>
                            
                        <h2 class="font-poppins text-23 lg:text-[42px] leading-[56px] tracking-tight font-normal lg:mt-8"><span class="font-semibold">Tất tần tật</span> về du học</h2>
                        
                        <h1 class="text-dark text-5xl lg:text-[92px] font-poppins font-bold -tracking-[3.22px] lg:leading-[95px]">Hàn Quốc</h1>
                        
                        <p class="text-right max-w-[360px] text-base font-normal 
                        leading-6 text-grey mt-3 lg:mt-6 max-w-sm ml-auto">DuHocDi.com là trang web dành cho những người muốn tìm hiểu tất cả các thông tin về du học Hàn Quốc một cách nhanh chóng và chính xác nhất.</p>
                        
                        <a href="#" class="block w-48 h-[58px] text-center text-[27px] px-10 py-2 
                            leading-normal font-extrabold bg-primary text-white 
                         hover:-translate-y-2 transition-all rounded-tl-[20px] rounded-br-[20px] btn-shadow mt-4 lg:mt-12 ml-auto">Tư vấn</a>
                    </div>
                    <div class="image w-full md:w-1/2 relative md:mt-[86px] pl-8">
                        <div 
                            v-motion-slide-right 
                            :initial="{
                                y: 100,
                                opacity: 0,
                            }"
                            :enter="{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 600,
                                    opacity: {
                                        duration: 1600,
                                    },
                                },
                            }"
                            class="relative ml-12">
                            <img class="h-72 ml-auto  mr-32 md:ml-0 lg:mr-0 md:h-auto object-contain" src="../../assets/images/bgcityborder.png" alt="hàn quốc city" loading="eager">
                            <img class="absolute h-72 object-contain md:h-auto top-9 right-20 md:left-16" src="../../assets/images/bgcity.png" alt="hàn quốc city" loading="eager">
                        </div>
                        <img v-motion-slide-right class="relative h-72 object-contain md:h-auto 
                        -mr-24 md:mr-0 ml-auto md:ml-0 -mt-24 md:-mt-32 z-10" src="../../assets/images/bgstudent.png" alt="du học sinh" loading="eager">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>