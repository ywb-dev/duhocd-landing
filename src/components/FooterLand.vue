<template>
    <div class="relative p-36 flex flex-col justify-center items-center bg-[#353535]">
        <div class="">
            <h2 class="text-[26px] text-white leading-normal text-center -tracking-[0.4px] md:text-[40px] font-bold">DUHOCD<span class="text-15 font-normal md:text-2xl">.com</span></h2>
            <p class="text-white text-xs leading-normal traccking-tight text-center md:text-sm">YeoWuBie Interactions Co. Ltd</p>
        </div>
        <p class="text-center text-white text-xs leading-normal tracking-tight w-60 md:w-[420px] mt-20 md:mt-24 md:text-sm leading-5">
            <a target="_blank" class="leading-5 block mb-2.5 hover:text-hoverLink hover:underline" href="mailto:duhocd@yeowubie.com">email: duhocd@yeowubie.com</a>
            <a target="_blank" href="https://maps.app.goo.gl/Ux2VgkC4Qp5QV2Sf8">office: 6F, 15 Ngõ 4 Đồng Me, Mễ Trì, Từ Liêm, Hà Nội, Viet Nam</a>
        </p>
    </div>
    <div>
    <Transition name="fade">
        <div id="pagetop" class="fixed right-20 bottom-20 z-50 cursor-pointer hover:opacity-80" v-show="scY > 300" @click="toTop">
          <svg class="w-12" xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
                <g filter="url(#filter0_d_241_4)">
                    <circle cx="39" cy="39" r="37" fill="#318ACB"/>
                    <circle cx="39" cy="39" r="38" stroke="#093F68" stroke-width="2"/>
                </g>
                <path d="M36.5 54C36.5 55.3807 37.6193 56.5 39 56.5C40.3807 56.5 41.5 55.3807 41.5 54L36.5 54ZM40.7678 21.2322C39.7915 20.2559 38.2085 20.2559 37.2322 21.2322L21.3223 37.1421C20.346 38.1184 20.346 39.7014 21.3223 40.6777C22.2986 41.654 23.8816 41.654 24.8579 40.6777L39 26.5355L53.1421 40.6777C54.1184 41.654 55.7014 41.654 56.6777 40.6777C57.654 39.7014 57.654 38.1184 56.6777 37.1421L40.7678 21.2322ZM41.5 54L41.5 23L36.5 23L36.5 54L41.5 54Z" fill="white"/>
                <defs>
                    <filter id="filter0_d_241_4" x="0" y="0" width="83" height="83" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="5" dy="5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_241_4"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_241_4" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    </Transition>
    </div>
</template>
<style scoped>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
}
</style>
<script setup>
import { onMounted, ref } from "vue"

    const scTimer = ref(0);
    const scY = ref(0)

    function handleScroll() {
    if (scTimer.value) return;
        scTimer.value = setTimeout(() => {
            scY.value = window.scrollY;
            clearTimeout(scTimer.value);
            scTimer.value = 0;
        }, 400);
    }

    function toTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    })
</script>