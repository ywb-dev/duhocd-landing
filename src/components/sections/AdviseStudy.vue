<template>
    <section id="#">
        <div class="relative bg-beebright px-14 md:px-0 py-16 flex flex-col md:flex-row  md:items-center md:justify-center overflow-hidden">
            <div   
                v-motion-slide-visible-left
                     class="w-full md:w-1/2 text-right">
                <p class="text-dark text-2xl leading-7">Để được tư vấn cụ thể, <br> xin vui lòng liên hệ</p>
                <h2 class="text-dark font-bold text-5xl -tracking-[0.96px]">DUHOCD <span class="font-normal text-[40px]">.com</span></h2>
                <a href="#signup" class="block w-48 text-center text-[27px] px-10 py-2 leading-normal font-extrabold bg-primary text-white rounded-tl-[20px] 
                    rounded-br-[20px] btn-shadow-grey mt-9 md:mt-11 ml-auto hover:-translate-x-2 
                    hover:-translate-y-2 transition-all">Tư vấn</a>
            </div>
            <div   
                v-motion-slide-visible-once-right 
                class="flex justify-end md:justify-start w-full md:w-1/2 md:pl-12 mt-14 md:mt-0" >
                <img class="object-contain" loading="lazy" src="/images/illustration_Smart_phone_data.png" alt="Smart_phone_data">
            </div>
        </div>
    </section>
</template>
<script setup>
</script>