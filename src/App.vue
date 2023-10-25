<script setup>
    import BaseLayout from './layout/BaseLayout.vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';

    import HeroBanner from './components/sections/HeroBanner.vue';
    import ProjectCarousel from './components/sections/ProjectCarousel.vue';
    import Advise from './components/sections/Advise.vue';
</script>
<template>
    <BaseLayout>
        <template v-slot:header>
            <Header />
        </template>
        <HeroBanner/>
        <ProjectCarousel/>
        <Advise/>
        <template v-slot:footer>
            <Footer />
        </template>

   </BaseLayout>
</template>