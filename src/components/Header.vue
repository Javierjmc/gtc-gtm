<template>
  <header class="py-4 bg-white shadow-sm border-b border-gray-100">
    <div class="flex flex-col items-center justify-center px-4 mb-4">
      <div class="flex items-center gap-4 mb-6">
        <img
          alt="GTC logo"
          class="logo w-24"
          src="@/assets/logo-gtc.png"
          width="80"
          height="80"
        />
        <span class="text-8xl font-bold">+</span>
        <img
          alt="GTM logo"
          class="logo w-24"
          src="@/assets/gtm.webp"
          width="80"
          height="80"
        />
      </div>
      <div class="text-center">
        <h1 class="text-5xl font-extrabold -mt-2 text-blue-600">
          Fundamentos de Google Tag Manager
        </h1>

        <h3 class="text-xl font-semibold mt-4 text-amber-600 text-center">
          Formación para asistentes de Global Talent Connections
        </h3>
      </div>
    </div>

    <div class="wrapper border-t border-gray-200 pt-4">
      <nav class="flex flex-wrap justify-center gap-2 sm:gap-4 px-2">
        <RouterLink
          to="/"
          class="text-base font-medium text-gray-600 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-600 transition duration-150 px-3 py-2 rounded-t-lg"
          active-class="!text-blue-600 !border-blue-600"
        >
          Resumen
        </RouterLink>

        <RouterLink
          to="/estructura"
          class="text-base font-medium text-gray-600 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-600 transition duration-150 px-3 py-2 rounded-t-lg"
          active-class="!text-blue-600 !border-blue-600"
        >
          Estructura
        </RouterLink>

        <RouterLink
          to="/conexion"
          class="text-base font-medium text-gray-600 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-600 transition duration-150 px-3 py-2 rounded-t-lg"
          active-class="!text-blue-600 !border-blue-600"
        >
          Conexión
        </RouterLink>

        <RouterLink
          to="/conclusion"
          class="text-base font-medium text-gray-600 border-b-2 border-transparent hover:border-blue-300 hover:text-blue-600 transition duration-150 px-3 py-2 rounded-t-lg"
          active-class="!text-blue-600 !border-blue-600"
        >
          Conclusión
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
