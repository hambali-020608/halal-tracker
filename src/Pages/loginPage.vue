<script setup>
import { onMounted, ref, reactive } from "vue";
import { Motion } from "@motionone/vue";

const user = reactive({});
const email = ref("");
const password = ref("");
const loading = ref(false);

const login = async () => {
  loading.value = true;
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const data = await response.json();
    console.log(data);

    if (data.user) {
      localStorage.setItem("token", data.user); // Simpan token di localStorage
      console.log("Login sukses", data);
      fetchUserProfile(); // Fetch user profile setelah login sukses
    } else {
      console.error("Login gagal");
    }
  } catch (error) {
    console.error("Login error:", error); // Penanganan error
  } finally {
    loading.value = false;
  }
};

const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token tidak tersedia");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    user.value = data; // Update reactive user object

    console.log("Data Profil Pengguna", data);
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil profil", error);
  }
};

onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    fetchUserProfile();
  }
});
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-green-900 relative overflow-hidden"
  >
    <div class="absolute inset-0 opacity-20">
      <!-- <img src="/images/pattern.svg" class="w-full h-full object-cover" /> -->
    </div>

    <Motion
      tag="div"
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1, transition: { duration: 0.8 } }"
      class="relative bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md"
    >
      <div class="text-center mb-6">
        <h2 class="text-3xl font-semibold text-white">Masuk</h2>
        <p class="text-white/80">Silakan login untuk melanjutkan</p>
      </div>

      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label class="block text-white mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:ring focus:ring-green-300 outline-none"
            required
          />
        </div>
        <div>
          <label class="block text-white mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 rounded-lg bg-white/20 text-white focus:ring focus:ring-green-300 outline-none"
            required
          />
        </div>

        <Motion
          tag="button"
          type="submit"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.5 } }"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300 flex items-center justify-center"
        >
          <span v-if="!loading">Masuk</span>
          <span v-else class="animate-spin">🔄</span>
        </Motion>
      </form>

      <p class="mt-4 text-center text-white/80">
        Belum punya akun? <a href="#" class="text-white font-semibold underline">Daftar</a>
      </p>
    </Motion>
  </div>
</template>

<style scoped>
input:focus {
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}
</style>
