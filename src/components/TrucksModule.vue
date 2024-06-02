<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import TheWelcome from './TheWelcome.vue'
import TheFooter from './TheFooter.vue'
import DeviceInfo from './DeviceInfo.vue'
</script>

<template>
  <div id="trucks-module" class="flex flex-col p-4 font-reddit-mono h-[100vh] bg-bkg text-content duration-700">
    <header class="flex mb-4">
      <img alt="Vue logo" class="block" src="../assets/logo.svg" width="125" height="125" />

      <div class="ml-2">
        <TheHeader title="Trucks" />
      </div>
    </header>

    <main class="flex-1" style="border: 1px solid red">
      <TheWelcome />
    </main>
    <aside style="border: 1px solid brown">
      <DeviceInfo />
    </aside>

    <footer style="border: 1px solid red">
      <TheFooter />
    </footer>
  </div>
</template>
