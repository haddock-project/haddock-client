<script setup>
import Main from './components/Main.vue'
import { useToast } from "vue-toastification";
const toast = useToast()

// Register from the websocket-client
let conn = true
let connection
function connect() {
  console.log("Starting connection to WebSocket Server")
  conn = true
  connection = new WebSocket("wss://localhost:8080")
  connection.onmessage = function(event) {
    console.log(event);
  }
  connection.onopen = function(event) {
    console.log(event)
    console.log("Successfully connected to the echo websocket server...")
  }
  connection.onerror = function(event) {
    toast.warning("Connection error", {
      timeout: 2500,
      pauseOnHover: true,
      hideProgressBar: false,
    });
    conn = false
    console.log("The connection to the websocket failed.", event)
  }
}
connect()
</script>

<template>
  <Main />
  <server />
  <div v-if="conn" @click="connect()" class="fixed right-0 bottom-0 p-5">
    <button type="button" title="Retry to connect to the ws" class="group inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-white transition bg-red-700 rounded appearance-none cursor-pointer select-none hover:bg-red-800">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:animate-spin" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>
