<script setup>
    import BaseLayout from './layout/BaseLayout.vue';
    import Header from './components/HeaderLand.vue';
    import Footer from './components/FooterLand.vue';

    import HeroBanner from './components/sections/HeroBanner.vue';
    import ProjectCarousel from './components/sections/ProjectCarousel.vue';
    import Advise from './components/sections/AdviseStudy.vue';
    import University from './components/sections/UniversityShow.vue';
    import FlowAbroad from './components/sections/FlowAbroad.vue';
    import StudentReview from './components/sections/StudentReview.vue';
    import Register from './components/sections/RegisterStudy.vue';
</script>
<template>
    <BaseLayout>
        <template v-slot:header>
            <Header/>
        </template>

        <HeroBanner/>
        <ProjectCarousel/>
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