<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="hero min-h-screen relative overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 opacity-70"></div>
    
    <!-- Decorative Stars -->
    <div class="absolute top-10 left-10 opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-300 animate-pulse" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </div>
    <div class="absolute top-20 right-10 opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-300 animate-pulse" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </div>

    <!-- Hero Content with Transition -->
    <transition 
      enter-active-class="transition-all duration-1000 ease-out"
      enter-from-class="opacity-0 translate-y-12"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div 
        v-if="isVisible"
        class="hero-content relative z-50 flex flex-col-reverse lg:flex-row items-center justify-center p-8 max-w-6xl mx-auto"
      >
        <!-- Text Content -->
        <div class="text-white text-center lg:text-left lg:pr-12 max-w-xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Selamat Datang di Halal Tracker
          </h1>
          <p class="text-lg mb-8 leading-relaxed">
            Mari kita manfaatkan bulan suci Ramadhan untuk meningkatkan ibadah dan kegiatan positif. 
            Dengan Halal Tracker, pantau kegiatanmu sehari-hari dengan mudah dan efektif.
          </p>
          <button 
            class="bg-yellow-500 text-white font-bold py-3 px-6 rounded-full 
            hover:bg-yellow-600 transition duration-300 ease-in-out 
            transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Mulai Sekarang
          </button>
        </div>

        <!-- Mosque Image -->
        <div class="mb-8 lg:mb-0 lg:ml-12">
          <div class="relative">
            <img 
              src="/images/masjid.webp" 
              alt="Masjid Ramadhan" 
              class="w-80 h-80 object-cover rounded-2xl shadow-2xl 
              transform transition duration-500 hover:scale-105 hover:rotate-2"
            />
            <div 
              class="absolute -bottom-4 -right-4 w-full h-full 
              bg-yellow-400 opacity-30 rounded-2xl -z-10"
            ></div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Decorative Mosque Icon -->
    <div class="absolute bottom-10 right-10 opacity-20">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-white">
        <path d="M3 22h18c0-5.5-3-9-5.5-9h-7C6 13 3 16.5 3 22z"/>
        <path d="M5 12h14v-2a8 8 0 1 0-16 0v2z"/>
        <path d="M8 6a4 4 0 0 1 8 0"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>