<script setup>
import { ref } from "vue";
import { Motion } from "@motionone/vue";

const faqs = ref([
  {
    question: "What is the return policy?",
    answer:
      "We offer a 30-day return policy for all our products. If you're not satisfied, you can return the item for a full refund or exchange.",
    open: false,
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 5-7 business days. However, delivery times may vary depending on your location.",
    open: false,
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Please check our shipping page for more details.",
    open: false,
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team by emailing support@website.com, or using the contact form on our website.",
    open: false,
  },
]);

// Fungsi toggle untuk membuka/tutup jawaban
const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<template>
  <section class="bg-gray-50 py-16 px-4" id="faq">
    <div class="max-w-4xl mx-auto">
      <!-- Judul FAQ dengan animasi fade-in -->
      <Motion
        tag="h2"
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
        class="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        Frequently Asked Questions
      </Motion>

      <div class="space-y-6">
        <Motion
          v-for="(item, index) in faqs"
          :key="index"
          tag="div"
          :initial="{ opacity: 0, y: 10 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }"
          class="bg-white shadow-md rounded-lg overflow-hidden transition-all"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none transition-colors duration-300 hover:bg-gray-100"
          >
            <span class="text-lg font-semibold text-gray-800">{{ item.question }}</span>
            <span
              class="text-2xl transition-transform duration-300"
              :class="{ 'rotate-180': item.open }"
            >
              ⌄
            </span>
          </button>

          <!-- Jawaban dengan animasi collapse -->
          <Motion
            v-if="item.open"
            tag="div"
            :initial="{ height: 0, opacity: 0 }"
            :animate="{ height: 'auto', opacity: 1, transition: { duration: 0.4 } }"
            class="px-6 pb-5 text-gray-600"
          >
            {{ item.answer }}
          </Motion>
        </Motion>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Efek rotate untuk ikon saat toggle */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
