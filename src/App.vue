<script setup>
    import BaseLayout from './layout/BaseLayout.vue';
    import Header from './components/HeaderLand.vue';
    import Footer from './components/FooterLand.vue';
    import SkeletonLoad from './components/SkeletonLoad.vue';

    import HeroBanner from './components/sections/HeroBanner.vue'

    import { defineAsyncComponent } from 'vue'

    const AsyncProjectCarousel = defineAsyncComponent({
        loader: () => import('./components/sections/ProjectCarousel.vue'),
        loadingComponent: SkeletonLoad,
        delay: 500,
    })

    const AsyncAdviseStudy = defineAsyncComponent({
        loader: () => import('./components/sections/AdviseStudy.vue'),
        loadingComponent: SkeletonLoad,
        delay: 500,
    })

    const AsyncUniversity = defineAsyncComponent({
        loader: () => import('./components/sections/UniversityShow.vue'),
        loadingComponent: SkeletonLoad,
        delay: 500,
    })

    const AsyncFlowAbroad = defineAsyncComponent({
        loader: () => import('./components/sections/FlowAbroad.vue'),
        loadingComponent: SkeletonLoad,
        delay: 500,
    })

    const AsyncStudentReview = defineAsyncComponent({
        loader: () => import('./components/sections/StudentReview.vue'),
        loadingComponent: SkeletonLoad,
        delay: 500,
    })

    const AsyncRegister = defineAsyncComponent({
        loader: () => import('./components/sections/RegisterStudy.vue'),
        loadingComponent: SkeletonLoad,
        delay: 500,
    })

</script>
<template>
    <BaseLayout>
        <template v-slot:header>
            <Header/>
        </template>
        <HeroBanner/>
        <AsyncProjectCarousel/>
        <AsyncAdviseStudy/>
        <AsyncUniversity/>
        <AsyncFlowAbroad/>
        <AsyncStudentReview/>
        <AsyncRegister/>

        <template v-slot:footer>
            <Footer/>
        </template>
   </BaseLayout>
</template>