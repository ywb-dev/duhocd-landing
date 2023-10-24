<script setup>
    import BaseLayout from './layout/BaseLayout.vue';
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import HeroBanner from './components/sections/HeroBanner.vue';
</script>
<template>
    <BaseLayout>
        <template v-slot:header>
            <Header />
        </template>
        <div class="hero-gradiant absolute rounded-bl-[300px] top-0 left-0 -z-10 h-full w-full max-h-[768px]"></div>
        <HeroBanner/>
        <template v-slot:footer>
            <Footer />
        </template>

   </BaseLayout>
</template>