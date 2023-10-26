<script>
    import Logo from './icons/Logo.vue';
    import NavBar from './Navbar.vue'

    export default {
    name: "Home",
    data() {
        return {
            limitPosition: 500,
            scrolled: false,
            lastPosition: 0,
            isSticky: false
        };
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 400) {
                this.isSticky = true
            } else {
                this.isSticky = false
            }
            this.lastPosition = window.scrollY;
        },
    },
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    components: { 
        Logo, 
        NavBar 
    }
};

</script>
<template>
   <div :class="{ 'headroom--unpinned': scrolled }"
      v-show="handleScroll" class="-top-full left-0 w-full duration-300 delay-200 flex justify-between px-4 md:px-8 transition-all"
      v-bind:class="[isSticky ? 'fixed z-9999 !top-0 sticky-header bg-[#f4f4f4]' : 'relative hero-gradiant']">
        <div class="logo-wrap py-7 flex justify-center items-center">
           <a href="#" class="block">
            <Logo class="w-20 logo h-auto"/>
           </a>
        </div>
        <NavBar/>
        <div class="flex items-center justify-center">
            <a href="#" title="tư vấn" class="btn hidden lg:block rounded-tl-2xl transition-all font-extrabold leading-normal">
                TƯ VẤN
            </a>
        </div>
   </div>
</template>
<style scoped>
    .sticky-header .logo-wrap  {
       @apply py-4; 
    }
    .logo-wrap .logo {
        @apply w-16;
    }
</style>