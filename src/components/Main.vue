<script setup>
import moment from "moment";
import { ref } from "vue";
const now = ref(moment(new Date()).format("MMM D[,] HH:mm"));

setInterval(() => {
  now.value = moment(new Date()).format("MMM D[,] HH:mm");
}, 5000);
</script>
<template>
  <div class="absolute text-6xl font-bold text-white top-1/4 right-0 left-0 text-center">
    <p>Hi User,</p>
    <p>It is {{ now }}</p>
  </div>
  <div class="absolute flex flex-col bottom-0 right-0 left-0 overflow-hidden">
    <div class="relative bg-white w-full bg-opacity-50 shadow-xl pb-14 sm:mx-auto sm:max-w-2xl sm:rounded-t-[40px] p-7">
      <div class="relative flex flex-wrap">
        <div class="justify-end my-3 px-3 w-1/4 overflow-hidden">
          <div class="overflow-hidden hover:scale-105 transition duration-500 cursor-pointer">
            <div class="h-full w-full items-center justify-center flex justify-center">
              <img class="h-3/4 w-3/4" src="/images/app/google_doc.webp" alt="Google Doc">
            </div>
            <div class="p-2">
              <button class="font-semibold items-center justify-center w-full text-white">Google Doc</button>
            </div>
          </div>
        </div>

        <div class="my-3 px-3 w-1/4 overflow-hidden">
          <div class="overflow-hidden hover:scale-105 transition duration-500 cursor-pointer">
            <div class="h-full w-full items-center justify-center flex justify-center">
              <img class="h-3/4 w-3/4" src="/images/app/element.webp" alt="Element">
            </div>
            <div class="p-2">
                <button class="font-semibold items-center justify-end w-full text-white">Element</button>
            </div>
          </div>
        </div>

        <div class="my-3 px-3 w-1/4 overflow-hidden">
          <div class="overflow-hidden hover:scale-105 transition duration-500 cursor-pointer">
            <div class="h-full w-full items-center justify-center flex justify-center">
              <img class="h-3/4 w-3/4" src="/images/app/libreOffice.webp" alt="Libre Office">
            </div>
            <div class="p-2">
              <button class="font-semibold items-center justify-end w-full text-white">Libre Office</button>
            </div>
          </div>
        </div>

        <div class="my-3 px-3 w-1/4 overflow-hidden">
          <div class="overflow-hidden hover:scale-105 transition duration-500 cursor-pointer">
            <div class="h-full w-full items-center justify-center flex justify-center">
              <img class="h-3/4 w-3/4" src="/images/app/download-icon.webp" alt="Download icon">
            </div>
            <div class="p-2">
              <button class="font-semibold items-center text-sm justify-end w-full text-white">Download more Application</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>