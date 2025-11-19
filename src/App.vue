<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />

  <main
    class="min-h-screen bg-[url('@/assets/google-chrome.webp')] bg-cover bg-center bg-fixed relative"
  >
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <RouterView class="relative z-10" />
  </main>
</template>
