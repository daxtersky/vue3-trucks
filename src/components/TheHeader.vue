<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <!--  -->
  <h1 class="text-4xl font-bold underline mb-1 hover:animate-pulse">
    {{ title }}
  </h1>
  <h3 class="text-lg">
    <!-- text-v-tropical-teal -->
    ERP sytem management build with:
    <a class="link" href="https://pnpm.io/" target="_blank" rel="noopener">pnpm</a>
    <!-- text-v-tropical-teal -->
    +
    <a class="link" href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
    <!-- text-v-tropical-teal -->
    +
    <a class="link" href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
    +
    <!-- text-v-tropical-teal -->
    <a class="link" href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a>
    +
    <a class="link" href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>
    +
    <s>Vitest</s>
    +
    <s>Playwright</s>
  </h3>
</template>
