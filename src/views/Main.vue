<script setup>
import dateTime from '../components/dateTime.vue'
import user from '../components/user'

console.log(user)

// init app slider
$(document).ready(function() {
  if($(".slick_slider")[0].classList.contains('slick-initialized') === false){
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
  }
});

</script>
<template>

  <!-- Date Time and Welcome comp -->
  <div class="absolute text-6xl font-bold text-white top-1/4 right-0 left-0 text-center">
    <p>{{ $t('default.welcome', {user: user?.username || ($t('default.user').toString().toLowerCase())}) }}</p>
    <dateTime :format="user?.dateFormat" :autoUpdate="user?.dateUpdate"></dateTime>
  </div>

  <!-- Start list apps available -->
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

        <!-- App to add apps for an user -->
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
  <!-- End list apps -->
</template>