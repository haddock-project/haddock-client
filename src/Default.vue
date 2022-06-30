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
</script>

<template>
  <router-view></router-view>
  <div v-if="!conn.value" @click="connect()" class="fixed right-0 bottom-0 p-5">
    <button type="button" title="Retry to connect to the ws" class="group inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-white transition bg-red-700 rounded appearance-none cursor-pointer select-none hover:bg-red-800">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:animate-spin" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>
