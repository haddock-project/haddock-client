<script setup>
import dateTime from '../components/dateTime.vue'
import { ref } from "vue";

// init app slider
$(document).ready(function() {
  $(".slick_slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function show_menu() {
  document.getElementById("menu_dropdown").classList.toggle("hidden");
}

</script>
<template>

  <div class="absolute text-6xl font-bold text-white top-1/4 right-0 left-0 text-center">
    <p>{{ $t('default.welcome', {user: user?.username || ($t('default.user').toString().toLowerCase())}) }}</p>
    <dateTime :format="user?.dateFormat" :autoUpdate="user?.dateUpdate"></dateTime>
  </div>

    <div class="z-10 absolute h-16 w-16 m-5 right-0">
      <button :onclick="show_menu" class="bg-white bg-opacity-50 focus:bg-opacity-100 hover:bg-opacity-100 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
        <svg fill="none" stroke="currentColor" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
      <div id="menu_dropdown" class="hidden absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
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
  <div class="absolute flex flex-col bottom-0 right-0 left-0 overflow-hidden">
    <div class="relative bg-white w-full bg-opacity-50 shadow-xl sm:mx-auto sm:max-w-4xl sm:rounded-t-[40px] pt-7 px-7">
      <div class="slick_slider">
        <div class="lg:w-1/5 w-1/2 md:w-1/4 h-1/2 p-4">
          <div class="justify-end overflow-hidden">
            <div class="overflow-hidden hover:scale-105 transition duration-500 cursor-pointer">
              <div class="h-full w-full items-center justify-center flex justify-center">
                <img class="h-3/5 w-3/5 m-4 mb-0" src="/images/app/google_doc.webp" alt="Google Doc">
              </div>
              <div class="p-2">
                <button class="font-semibold items-center justify-center w-full text-white">Google Doc</button>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/5 w-1/2 md:w-1/4 h-1/2 p-4">
          <div class="justify-end overflow-hidden">
            <div class="overflow-hidden hover:scale-105 transition duration-500 cursor-pointer">
              <div class="h-full w-full items-center justify-center flex justify-center">
                <img class="h-3/5 w-3/5 m-4 mb-0" src="/images/app/element.webp" alt="Element">
              </div>
              <div class="p-2">
                <button class="font-semibold items-center justify-center w-full text-white">Element</button>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/5 w-1/2 md:w-1/4 h-1/2 p-4">
          <div class="justify-end overflow-hidden">
            <div class="overflow-hidden hover:scale-105 transition duration-500 cursor-pointer">
              <div class="h-full w-full items-center justify-center flex justify-center">
                <img class="h-3/5 w-3/5 m-4 mb-0" src="/images/app/libreOffice.webp" alt="Libre Office">
              </div>
              <div class="p-2">
                <button class="font-semibold items-center justify-center w-full text-white">Libre Office</button>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/5 w-1/2 md:w-1/4 h-1/2 p-4">
          <div class="justify-end overflow-hidden">
            <div class="overflow-hidden hover:scale-105 transition duration-500 cursor-pointer">
              <div class="h-full w-full items-center justify-center flex justify-center">
                <img class="h-3/5 w-3/5 m-4 mb-0" src="/images/app/download-icon.webp" alt="Download icon">
              </div>
              <div class="p-2">
                <button class="font-semibold items-center justify-center w-full text-white">Download more Application</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>