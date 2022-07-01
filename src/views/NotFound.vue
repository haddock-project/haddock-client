<template>
  <div class="flex items-center justify-center h-screen">
    <div class="px-20 py-10 bg-white bg-opacity-70 rounded shadow-xl">
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-blue-600 text-9xl">404</h1>

        <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          <span class="text-red-500">Oops!</span> {{ $t('404.title') }}
        </h6>

        <p class="mb-8 text-center text-gray-500 md:text-lg">
          {{ $t('404.description') }}
        </p>

        <router-link to="/" class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">{{ $t('404.link') }}</router-link>
      </div>
    </div>
  </div>
</template>