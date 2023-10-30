<script setup>
    import BaseLayout from './layout/BaseLayout.vue';
    import Header from './components/HeaderLand.vue';
    import Footer from './components/FooterLand.vue';

    import HeroBanner from './components/sections/HeroBanner.vue';
    import Advise from './components/sections/AdviseStudy.vue';
    import University from './components/sections/UniversityShow.vue';
    import FlowAbroad from './components/sections/FlowAbroad.vue';
    import StudentReview from './components/sections/StudentReview.vue';
    import Register from './components/sections/RegisterStudy.vue';

    import { defineAsyncComponent } from 'vue'

    const AsyncProjectCarousel = defineAsyncComponent({
        loader: () => import('./components/sections/ProjectCarousel.vue'),

        // loadingComponent: LoadingComponent,
        delay: 200,
        // errorComponent: ErrorComponent,
        timeout: 3000
    })

</script>
<template>
    <BaseLayout>
        <template v-slot:header>
            <Header/>
        </template>

        <HeroBanner/>
        <AsyncProjectCarousel/>
        <Advise/>
        <University/>
        <FlowAbroad/>
        <StudentReview/>
        <Register/>

        <template v-slot:footer>
            <Footer/>
        </template>
   </BaseLayout>
</template>