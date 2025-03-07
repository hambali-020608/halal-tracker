<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const featuresRefs = ref([])

onMounted(() => {
  isVisible.value = true
})

const features = [
  {
    icon: "✅",
    text: "Checklist Harian",
    description: "Pantau dan catat kegiatan harianmu dengan mudah",
    color: "bg-blue-500/20"
  },
  {
    icon: "📊",
    text: "Statistik dan Progress",
    description: "Lihat perkembangan ibadah dan aktivitas positifmu",
    color: "bg-green-500/20"
  },
  {
    icon: "⏰",
    text: "Pengingat Otomatis",
    description: "Dapatkan notifikasi untuk kegiatan penting",
    color: "bg-purple-500/20"
  },
  {
    icon: "📅",
    text: "Target dan Jadwal",
    description: "Atur dan capai tujuan Ramadhanmu",
    color: "bg-yellow-500/20"
  }
]
</script>

<template>
  <div class="relative bg-gradient-to-br from-emerald-600 to-teal-700 min-h-screen flex items-center py-16 overflow-hidden">
    <!-- Decorative Geometric Shapes -->
    <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div class="absolute top-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-6 max-w-6xl relative z-10">
      <!-- Title with Staggered Animation -->
      <transition 
        enter-active-class="transition-all duration-1000 ease-out"
        enter-from-class="opacity-0 translate-y-20"
        enter-to-class="opacity-100 translate-y-0"
      >
        <h2 
          v-if="isVisible" 
          class="text-4xl md:text-5xl font-bold text-center text-white mb-16 
          drop-shadow-lg tracking-tight leading-tight"
        >
          Fitur Utama Halal Tracker
        </h2>
      </transition>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Illustration with Parallax-like Effect -->
        <transition 
          enter-active-class="transition-all duration-1200 ease-out"
          enter-from-class="opacity-0 -translate-x-20"
          enter-to-class="opacity-100 translate-x-0"
        >
          <div 
            v-if="isVisible" 
            class="flex justify-center group"
          >
            <img 
              src="/images/muslim.png" 
              alt="Muslim Illustration" 
              class="w-full max-w-md h-auto transform transition-all duration-700 
              group-hover:scale-105 group-hover:rotate-2 drop-shadow-2xl"
            />
          </div>
        </transition>

        <!-- Features List with Staggered Animation -->
        <div class="space-y-6">
          <transition-group
            tag="div"
            enter-active-class="transition-all duration-700 ease-out"
            enter-from-class="opacity-0 translate-y-10"
            enter-to-class="opacity-100 translate-y-0"
          >
            <div 
              v-for="(feature, index) in features" 
              :key="feature.text"
              :ref="el => featuresRefs[index] = el"
              class="transform transition duration-700 ease-out 
              hover:scale-105 hover:rotate-2 perspective-1000"
            >
              <div 
                :class="`${feature.color} backdrop-blur-md rounded-2xl p-6 
                flex items-center space-x-6 shadow-xl border border-white/10 
                transition-all duration-500 hover:shadow-2xl`"
              >
                <div class="bg-white/30 p-4 rounded-full shadow-md">
                  <span class="text-4xl">{{ feature.icon }}</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-2">
                    {{ feature.text }}
                  </h3>
                  <p class="text-white/80 text-sm">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>

    <!-- Decorative Curved Lines -->
    <svg 
      class="absolute bottom-0 left-0 w-full text-white/10 transform rotate-180" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1440 320"
    >
      <path 
        fill="currentColor" 
        d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,229.3C672,203,768,149,864,138.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>