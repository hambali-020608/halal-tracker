<script setup>
import HeroSection from './components/section/HeroSection.vue'
import NavBar from './components/section/NavBar.vue'
import Features from './components/section/Features.vue'
import Benefits from './components/section/Benefits.vue'
import Faqs from './components/section/Faqs.vue'
import Footers from './components/section/Footers.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar/>
 <main>
  <RouterView/>
 </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
