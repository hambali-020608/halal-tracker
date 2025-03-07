<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const user = ref(null)
const router = useRouter()

const fetchUserProfile = async () => {
  const token = localStorage.getItem("token")

  if (!token) {
    console.error("Token tidak tersedia")
    router.push('/login')
    return
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })

    if (!response.ok) {
      throw new Error('Gagal mengambil profil')
    }

    const data = await response.json()
    user.value = data
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil profil", error)
    localStorage.removeItem("token")
    router.push('/login')
  }
}

const logout = () => {
  localStorage.removeItem("token")
  user.value = null
  router.push('/login')
}

onMounted(() => {
  const token = localStorage.getItem("token")
  if (token) {
    fetchUserProfile()
  }
})
</script>

<template>
  <div class="navbar bg-gradient-to-r from-green-300 via-green-500 to-green-700 shadow-lg">
    <div class="flex-1">
      <a class="btn btn-ghost text-white text-2xl font-bold hover:text-yellow-400 transition duration-300">
        Halal Tracker 
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 space-x-6">
        <li>
          <RouterLink to="/" class="text-white hover:text-yellow-400 transition duration-300">
            Beranda
          </RouterLink>
        </li>
        <li v-if="user">
          <RouterLink to="/activities" class="text-white hover:text-yellow-400 transition duration-300">
            Kegiatan
          </RouterLink>
        </li>
        
        <li v-if="!user">
          <RouterLink to="/login" class="text-white hover:text-yellow-400 transition duration-300">
            Login
          </RouterLink>
        </li>
        
        <li v-if="user" @click="logout">
          <a class="text-white hover:text-yellow-400 transition duration-300">
            Logout
          </a>
        </li>
        <li>
          <details class="text-white">
            <summary class="hover:text-yellow-400 transition duration-300">Menu</summary>
            <ul class="bg-green-800 rounded-lg p-2 space-y-2">
              <li><a class="text-white hover:text-yellow-400 transition duration-300">Link 1</a></li>
              <li><a class="text-white hover:text-yellow-400 transition duration-300">Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  z-index: 10;
  font-family: 'Poppins', sans-serif;
}

.menu-horizontal {
  font-family: 'Poppins', sans-serif;
}

.menu li a {
  font-weight: 500;
  font-size: 16px;
}

details[open] summary {
  background-color: #2f8555;
  color: white;
}

details[open] ul {
  background-color: #38a169;
}

details ul li a {
  font-weight: 400;
}
</style>