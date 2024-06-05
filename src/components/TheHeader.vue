<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <!--  -->
  <h1 class="text-4xl font-bold underline mb-1 hover:text-accent-1 hover:animate-pulse">
    {{ title }}
  </h1>
  <h3 class="text-lg">
    <!-- text-v-tropical-teal -->
    ERP system management build with:
    <a class="link hover:text-bkg hover:bg-accent-2 rounded" href="https://pnpm.io/" target="_blank" rel="noopener">pnpm</a>
    <!-- text-v-tropical-teal -->
    +
    <a class="link hover:text-bkg hover:bg-accent-2 rounded" href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
    <!-- text-v-tropical-teal -->
    +
    <a class="link hover:text-bkg hover:bg-accent-2 rounded" href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
    +
    <!-- text-v-tropical-teal -->
    <a class="link hover:text-bkg hover:bg-accent-2 rounded" href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a>
    +
    <a class="link hover:text-bkg hover:bg-accent-2 rounded" href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>
    +
    <s>Vitest</s>
    +
    <s>Playwright</s>
  </h3>
</template>
