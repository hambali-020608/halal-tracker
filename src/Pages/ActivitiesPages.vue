<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const activities = ref([])
const user = ref(null)

const fetchUserProfile = async () => {
  const token = localStorage.getItem("token")

  if (!token) {
    console.error("Token tidak tersedia")
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
    return data
  } catch (error) {
    console.error(error)
  }
}

async function FetchActivities(userId) {
  try {
    const response = await fetch(`http://localhost:5000/api/goals/get-goal/${userId}`)
    const data = await response.json()

    activities.value = data.goals.goals.map(goal => ({
      ...goal,
      target_count: Array.from({ length: goal.target_count }, (_, index) => {
        const progressForDay = goal.progress.find(entry =>
          new Date(entry.date).getDate() === index + 1 && entry.is_completed
        )

        return {
          day: index + 1,
          isCompleted: !!progressForDay,
        }
      })
    }))
  } catch (error) {
    console.error(error)
  }
}

onMounted(async () => {
  const token = localStorage.getItem("token")
  if (token) {
    const userData = await fetchUserProfile()
    user.value = userData.user
    FetchActivities(userData.user.id)
  }
})

function generateDailyChecklist(days) {
  return Array.from({ length: days }, (_, index) => ({
    day: index + 1,
    completed: false
  }))
}

async function toggleCompletion(activity, dayIndex) {
  activity.target_count[dayIndex].isCompleted = !activity.target_count[dayIndex].isCompleted
  const payload = {
    goal_id: activity.id,
    notes: "Progress updated",
    date: new Date(new Date().setDate(dayIndex + 1))
  };

  try {
    const response = await fetch("http://localhost:5000/api/progress/create-progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Gagal mengupdate progress!");
    }

    const result = await response.json();
    console.log("Update berhasil:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const newActivity = reactive({
  title: '',
  target_count: 0,
})

async function addActivity() {
  if (newActivity.title && newActivity.target_count) {
    activities.value.push({
      id: activities.value.length + 1,
      title: newActivity.title,
      target_count: generateDailyChecklist(newActivity.target_count)
    })

    try {
      const response = await fetch('http://localhost:5000/api/goals/create-goal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newActivity.title, target_count: newActivity.target_count, user_id: user.value.id })
      })
      if (!response.ok) {
        throw new Error("Gagal menambahkan kegiatan!");
      }
      const result = await response.json();
      console.log("Menambahkan kegiatan berhasil:", result);
    } catch (error) {
      console.error("Error:", error);
    }

    newActivity.title = ''
  }
}

// Chart Data and Options
const chartData = computed(() => {
  return activities.value.map(activity => {
    const labels = Array.from({ length: 30 }, (_, index) => `Day ${index + 1}`)
    const data = activity.target_count.map(day => day.isCompleted ? 1 : 0)

    return {
      labels,
      datasets: [
        {
          label: activity.title,
          data,
          borderColor: 'rgb(75, 192, 192)',
          fill: false,
          tension: 0.1
        }
      ]
    }
  })
})

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-600 to-teal-700 p-8">
    <div class="container mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-white mb-4">
          Tracker Aktivitas Ramadhan
        </h1>
        <p class="text-white/80 max-w-2xl mx-auto">
          Pantau dan catat progress aktivitas harianmu selama Ramadhan
        </p>
      </div>

      <div class="text-center mb-8">
        <button 
          @click="$refs.addActivityModal.showModal()"
          class="bg-yellow-500 text-white px-6 py-3 rounded-full 
          hover:bg-yellow-600 transition duration-300 
          flex items-center justify-center mx-auto space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Tambah Aktivitas Baru</span>
        </button>
      </div>

      <!-- Activities Table -->
      <div class="overflow-x-auto">
        <table class="w-full bg-white/20 backdrop-blur-lg rounded-2xl overflow-hidden">
          <thead class="bg-white/30">
            <tr class="text-white">
              <th class="p-4 text-left">Aktivitas</th>
              <th class="p-4 text-center">Kategori</th>
              <th v-for="day in 30" :key="day" class="p-2 text-center text-xs">
                {{ day }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="activity in activities" :key="activity.id" class="border-b border-white/10 hover:bg-white/10 transition">
              <td class="p-4 font-semibold text-white">{{ activity.title }}</td>
              <td class="p-4 text-center">
                <span class="px-3 py-1 rounded-full text-xs font-semibold" :class="{
                  'bg-blue-500/20 text-blue-700': activity.category === 'Ibadah',
                  'bg-green-500/20 text-green-700': activity.category === 'Rohani',
                  'bg-purple-500/20 text-purple-700': activity.category === 'Sosial',
                  'bg-yellow-500/20 text-yellow-700': activity.category === 'Kesehatan'
                }">
                  {{ activity.category }}
                </span>
              </td>
              <td v-for="(day, index) in activity.target_count" :key="index" class="p-2 text-center">
                <button @click="toggleCompletion(activity, index)" class="w-5 h-5 rounded-full transition-all duration-300"
                  :class="{
                    'bg-green-500': day.isCompleted === true,
                    'bg-white/30': !day.isCompleted
                  }"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Activity Chart -->
      <div v-for="(chart, index) in chartData" :key="index" class="mt-8">
        <h3 class="text-white text-xl mb-4">{{ activities[index].title }} Progress</h3>
        <Line :data="chart" :options="{ responsive: true, scales: { y: { beginAtZero: true } } }" />
      </div>

      <!-- Add Activity Modal -->
      <dialog ref="addActivityModal" class="modal">
        <div class="modal-box bg-white rounded-2xl">
          <h3 class="font-bold text-2xl mb-6 text-center">Tambah Aktivitas Baru</h3>
          <form @submit.prevent="addActivity">
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Judul Aktivitas</label>
              <input v-model="newActivity.title" type="text" placeholder="Masukkan judul aktivitas" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 mb-2">Target Hari</label>
              <input v-model="newActivity.target_count" type="number" placeholder="Masukkan jumlah target hari" min="1" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div class="flex justify-center space-x-4">
              <button type="button" @click="$refs.addActivityModal.close()" class="px-6 py-2 bg-gray-500 text-white rounded-full">Batal</button>
              <button type="submit" class="px-6 py-2 bg-green-500 text-white rounded-full">Tambah</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  </div>
</template>

<style scoped>
.modal {
  width: 400px;
  max-width: 90%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white; 
  padding: 20px;
  border-radius: 10px;
}
</style>

