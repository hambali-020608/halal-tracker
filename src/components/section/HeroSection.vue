<script setup>
import { Motion } from '@motionone/vue'

// Motion untuk animasi pertama kali halaman dibuka
const fadeIn = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
}
</script>

<template>
  <div class="hero min-h-screen relative">
    <!-- Hero Section dengan animasi saat loading pertama kali -->
    <Motion :initial="fadeIn.initial" :animate="fadeIn.animate" class="hero-content flex-col lg:flex-row p-8 z-50">
      
      <!-- Gambar Masjid dengan efek hover -->
      <img
        src="/images/masjid.webp"
        alt="Masjid Ramadhan"
        class="max-w-sm rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out"
      />
      
      <div class="text-white p-6">
        <h1 class="text-5xl font-bold mb-4">Selamat Datang di Halal Tracker</h1>
        <p class="py-4 text-lg">
          Mari kita manfaatkan bulan suci Ramadhan untuk meningkatkan ibadah dan kegiatan positif.
          Dengan Halal Tracker, pantau kegiatanmu sehari-hari dengan mudah dan efektif.
        </p>
        <button class="btn btn-warning text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300">
          Mulai Sekarang
        </button>
      </div>
    </Motion>

    <!-- Menambahkan elemen lampu lentera sebagai hiasan -->
    <div class="absolute bottom-4 right-4 p-4">
      <!-- <img src="/images/lampu-lentera.svg" alt="Lampu Lentera" class="w-16 h-16 animate-pulse" /> -->
    </div>

    <!-- Background Gambar Ramadhan -->
    <div class="absolute inset-0 bg-gradient-to-r from-green-300 via-green-500 to-green-700 opacity-30"></div>
  </div>
</template>
