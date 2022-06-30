<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import {useI18n} from "vue-i18n";

const toast = useToast()

// Register from the websocket-client
let conn = ref(true)
let connection
function connect() {
  console.log("Starting connection to WebSocket Server")
  connection = new WebSocket("ws://localhost:8080/ws/")
  connection.onmessage = function(event) {
    console.log(event);
  }
  connection.onopen = function(event) {
    conn.value = true
    console.log("Successfully connected to the echo websocket server...")
  }
  connection.onerror = function(event) {
    toast.warning("Connection error", {
      timeout: 2500,
      pauseOnHover: true,
      hideProgressBar: false,
    });
    conn.value = false
    console.log("The connection to the websocket failed.", event)
  }
}
connect()

// load the localStorage data
localStorage.setItem("connected", conn.value)
localStorage.setItem("lastLogin", Date.now().toString())
localStorage.setItem("language", localStorage.getItem("language") || useI18n().locale.value)
localStorage.setItem("bg_number", localStorage.getItem("bg_name") || 'default.jpg')

// load the background image then display the app and hide the loading screen
$(document).ready(function() {
  document.getElementsByTagName("body")[0].style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/images/users_background/${localStorage.getItem("bg_number")})`
  document.getElementById('loading_page').remove()
  document.getElementById('app').style.display = 'block'
});

// When the user clicks on the menu button, toggle between hiding and showing the dropdown content
function show_menu() {
  document.getElementById("menu_dropdown").classList.toggle("hidden");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!(event.target.matches('.menu') || event.target.parentElement.matches('.menu'))) {
    const dropdowns = document.getElementById("menu_dropdown")
    if(!dropdowns.classList.contains('hidden')) {
      dropdowns.classList.add('hidden');
    }
  }
}
</script>

<template>
  <!-- Start Menu -->
  <div class="z-10 absolute h-16 w-16 m-5 right-0 menu">
    <!-- Menu button -->
    <button :onclick="show_menu" class="bg-white menu bg-opacity-50 focus:bg-opacity-100 hover:bg-opacity-100 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
      <svg fill="none" stroke="currentColor" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </button>
    <!-- Menu Content -->
    <div id="menu_dropdown" class="hidden menu absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
      <router-link to="/user" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100">
        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="/images/user.svg" alt="user avatar">
        <div class="mx-1">
          <h1 class="text-sm font-semibold text-gray-700">Admin</h1>
          <p class="text-sm text-gray-500">Administrator</p>
        </div>
      </router-link>

      <hr class="border-gray-200">

      <router-link to="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Home
      </router-link>
      <router-link to="/settings" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Settings
      </router-link>

      <hr class="border-gray-200">

      <router-link to="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Help
      </router-link>
      <router-link to="/" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
        Sign Out
      </router-link>

    </div>
  </div>
  <!-- End Menu -->
  <!-- Start App -->
  <router-view></router-view>
  <!-- End App -->
  <!-- Reconnect ws button -->
  <div v-if="!conn.value" @click="connect()" class="fixed right-0 bottom-0 p-5">
    <button type="button" title="Retry to connect to the ws" class="group inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-white transition bg-red-700 rounded appearance-none cursor-pointer select-none hover:bg-red-800">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:animate-spin" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <!-- End Reconnect ws button -->
</template>
