<template>
     <div class="relative">
        <InfoIcon class="icon-info ml-3 absolute -right-10"/>
        <div class="popup ">
           <div class="px-8 py-4 w-[375px] h-full rounded-[21px] bg-[#F8F6E3]">
             <div class="flex items-center">
                    <InfoIcon class="mr-3"/>
                    <h4 class="text-23 font-medium text-[#1C1C1C]">{{ props.heading }}</h4>
                </div>
                <div class="w-full h-full py-6">
                    <p>{{ props.content }}</p>
                </div>
           </div>
        </div>
     </div>
</template>
<style scoped>
    .popup {
        @apply absolute top-full left-0 -top-28;
    }
</style>
<script setup>
    import InfoIcon from '@/components/icons/InfoIcon.vue';
    const props = defineProps(['heading','content'])
</script>