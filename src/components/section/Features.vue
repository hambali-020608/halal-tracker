<script setup>
import { Motion } from "@motionone/vue";

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const features = [
  { icon: "✅", text: "Checklist Harian" },
  { icon: "📊", text: "Statistik dan Progress Kegiatan" },
  { icon: "⏰", text: "Pengingat Otomatis" },
  { icon: "📅", text: "Target dan Jadwal Kegiatan" },
];
</script>

<template>
  <div class="bg-gradient-to-b from-green-500 to-green-700 min-h-screen text-white py-16">
    <div class="container mx-auto px-6">
      <!-- Judul -->
      <Motion
        tag="h1"
        :initial="{ opacity: 0, y: -30 }"
        :animate="{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }"
        class="text-5xl font-bold text-center mb-12 drop-shadow-lg"
      >
        Fitur Utama
      </Motion>

      <div class="grid md:grid-cols-2 gap-10 items-center">
        <!-- Gambar -->
        <Motion
          tag="div"
          :initial="fadeInLeft.initial"
          :animate="fadeInLeft.animate"
          class="flex justify-center"
        >
          <img
            src="/images/muslim.png"
            alt="Muslim Illustration"
            class="w-80 h-auto drop-shadow-xl"
          />
        </Motion>

        <!-- Daftar Fitur -->
        <div class="space-y-6">
          <Motion
            v-for="(feature, index) in features"
            :key="index"
            tag="div"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.2 } }"
            class="flex items-center space-x-4 p-4 bg-white/20 rounded-lg shadow-md backdrop-blur-md transition-transform transform hover:scale-105 hover:bg-white/30"
          >
            <span class="text-4xl">{{ feature.icon }}</span>
            <p class="text-xl font-semibold">{{ feature.text }}</p>
          </Motion>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- <style scoped>
/* Tambahkan efek tambahan jika perlu */
</style> -->
