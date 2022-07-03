<script setup>
import { useToast } from "vue-toastification";
import i18nP from "./i18n";
import { AppUser } from './components/user'
const user = AppUser()


i18nP.then(i18n => {
// load the localStorage data
  localStorage.setItem("connected", user.connected)
  localStorage.setItem("lastLogin", Date.now().toString())
  localStorage.setItem("language", localStorage.getItem("language") || i18n.global.locale)
  localStorage.setItem("bg_number", localStorage.getItem("bg_name") || 'default.jpg')

// Update i18n.global.locale
  i18n.global.locale = localStorage.getItem("language")
})

const toast = useToast()
user.login().catch(err => {
  toast.warning("Connection error", {
    timeout: 2500,
    pauseOnHover: false,
    hideProgressBar: false,
    position: "bottom-right",
  });
})

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
      <router-link v-if="user.connected" to="/user" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100">
        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="/images/user.svg" alt="user avatar">
        <div class="mx-1">
          <h1 class="text-sm font-semibold text-gray-700">{{ user.username }}</h1>
          <p class="text-sm text-gray-500">{{ user.lastname }}</p>
        </div>
      </router-link>
      <router-link v-else to="/user" class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100">
        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="/images/user.svg" alt="user avatar">
        <div class="mx-1">
          <h1 class="text-sm font-semibold text-gray-700">Login</h1>
        </div>
      </router-link>

      <hr class="border-gray-200">

      <router-link to="/" :class="$route.name === 'Home'? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-100'" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
        Home
      </router-link>
      <router-link to="/settings" :class="$route.name === 'Settings'? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-100'" class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform">
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
  <Suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback>
      <div class="flex items-center justify-center h-screen">
        <div class="text-center">
          <div class="text-3xl font-bold">Loading...</div>
        </div>
      </div>
    </template>
  </Suspense>
  <!-- End App -->
</template>
