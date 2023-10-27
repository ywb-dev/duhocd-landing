<template>
   <div class="flex justify-center items-center relative">
        <div @click="menuActive = !menuActive" class="xl:hidden ml-auto">
            <Menu/>
        </div>
        <nav :class="menuActive ? '!translate-x-0' : 'translate-x-full'" class="transition-all z-20 duration-300 delay-100 translate-x-full xl:translate-x-0 border-2 rounded-[20px] bg-white top-8 right-0 border-primaryText xl:border-0 xl:w-full flex flex-col fixed p-11 xl:p-0 xl:static xl:flex-row flex-wrap items-center justify-center xl:bg-transparent">
            <a v-for="item in items" :key="item?.id" class="text-base text-center whitespace-nowrap font-bold leading-normal no-underline uppercase px-4 hover:text-dark py-3 lg:py-7 active text-grey" :href="'#' + item.id">{{ item.name }}</a>
            <span @click="menuActive = false" class="xl:hidden absolute top-6 right-6">
                <Close />
            </span>
        </nav>
        <div @click="menuActive = false" :class="menuActive ? 'fixed' : 'hidden'" class="overley opacity-40 fixed h-screen top-0 left-0 w-full">
        </div>
   </div>
</template>
<script setup>
    import Menu from './icons/Menu.vue';
    import Close from './icons/Close.vue'
    import { ref, nextTick  } from 'vue'

    const menuActive = ref(false)
    const items = ref([
        { id: 'whychoose', name: 'ƯU ĐIỂM DU HỌC'},
        { id: 'university', name: 'TRƯỜNG ĐẠI HỌC'},
        { id: 'flow', name: 'QUY TRÌNH DU HỌC'},
        { id: 'review', name: 'ĐÁNH GIÁ'},
        { id: 'signup', name: 'ĐĂNG KÍ TƯ VẤN'},
    ])

    async function intoView(e){
        console.log(e.target.values);
        document.getElementById('')
        await nextTick()
    }
</script>