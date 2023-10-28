<template>
   <div class="flex justify-center items-center relative">
        <div @click="menuActive = !menuActive" title="Danh sách quan tâm" class="xl:hidden ml-auto">
            <MenuIcon/>
        </div>
        <nav 
        :class="menuActive ? '!translate-x-0' : 'translate-x-full'" 
        class="transition-all z-20 duration-300 delay-100 translate-x-full xl:translate-x-0 border-2 rounded-[20px] 
            bg-white top-8 right-0 border-primaryText xl:border-0 xl:w-full flex flex-col fixed p-11 xl:p-0 
            xl:static xl:flex-row flex-wrap items-center justify-center xl:bg-transparent">
            <a 
                v-for="item in items" 
                :key="item?.id" 
                class="text-base text-center whitespace-nowrap font-bold leading-normal no-underline uppercase 
                    px-4 py-3 lg:py-7 text-grey hover:text-primary hover:underline" 
                :href="'#' + item.id"
                @click="handleActive(item.index)"
                :class="itemActive == item.index ? 'text-primary !underline' : ''"
                >{{ item.name }}
            </a>

                
                <span @click="menuActive = false" class="xl:hidden absolute top-6 right-6">
                    <CloseIcon />
                </span>
        </nav>
        <div 
            @click="menuActive = false" 
            :class="menuActive ? 'fixed' : 'hidden'" 
            class="overley opacity-40 fixed h-screen top-0 left-0 w-full">
        </div>
   </div>
</template>
<script setup>
    import MenuIcon from './icons/MenuIcon.vue';
    import CloseIcon from './icons/CloseIcon.vue';
    import { ref  } from 'vue';

    const menuActive = ref(false);
    const itemActive = ref(0);

    const items = ref([
        { id: 'whychoose',index: 0, name: 'ƯU ĐIỂM DU HỌC'},
        { id: 'university',index: 1, name: 'TRƯỜNG ĐẠI HỌC'},
        { id: 'flow',index: 2, name: 'QUY TRÌNH DU HỌC'},
        { id: 'review',index: 3, name: 'ĐÁNH GIÁ'},
        { id: 'signup',index: 4, name: 'ĐĂNG KÍ TƯ VẤN'},
    ]);

    function handleActive(index) {
        itemActive.value = index
    }
</script>