<template>
     <div class="relative">
        <InfoIcon class="icon-info ml-3 absolute -right-10"/>
        <div class="popup ">
           <div class="px-8 py-4 w-80 h-full rounded-[21px] bg-[#F8F6E3]">
             <div class="flex items-center">
                    <InfoIcon class="mr-3"/>
                    <h4 class="text-16 font-medium text-[#1C1C1C]">{{ props.heading }}</h4>
                </div>
                <div class="w-full h-full py-6">
                    <p class="text-xs">{{ props.content }}</p>
                </div>
           </div>
        </div>
     </div>
</template>
<style scoped>
    .icon-info {
        @apply cursor-pointer w-10 h-10 p-1.5 top-1/2 -translate-y-1/2;
    }
    .popup {
        @apply absolute top-full -right-10 xl:left-0 -top-44 after:content-[''] 
        after:border-[18px] after:border-t-[#F8F6E3] 
        after:border-x-transparent after:border-b-transparent after:-bottom-7 
        after:absolute after:right-2 xl:after:left-2 hidden transition-opacity opacity-0;
    }
    
    .icon-info:hover + .popup {
        @apply !block opacity-100 cursor-pointer opacity-100;
    }
</style>
<script setup>
    import InfoIcon from '@/components/icons/InfoIcon.vue';
    const props = defineProps(['heading','content'])
</script>