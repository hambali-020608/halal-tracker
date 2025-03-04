<script setup lang="ts">
import { RouterLink } from 'vue-router';

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
            <RouterLink to="/" class="text-white hover:text-yellow-400 transition duration-300" >Beranda</RouterLink>
          </li>
          <li>
            <a class="text-white hover:text-yellow-400 transition duration-300">Kegiatan</a>
          </li>
          <li>
            <RouterLink to="/login" class="text-white hover:text-yellow-400 transition duration-300" >Login</RouterLink>
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
      <!-- Tambahkan logo lentera di navbar untuk tema Ramadhan -->
      <div class="flex-none">
        <!-- <img src="/images/lampu-lentera.svg" alt="Lampu Lentera" class="w-8 h-8 animate-pulse" /> -->
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Styling tambahan untuk navbar */
  .navbar {
    z-index: 10;
  }
  
  .btn-ghost {
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
  
  @keyframes pulseEffect {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  .animate-pulse {
    animation: pulseEffect 1.5s ease-in-out infinite;
  }
  </style>
  