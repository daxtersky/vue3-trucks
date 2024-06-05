<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import TheList from './TheList.vue'
// import TheFooter from './TheFooter.vue'
import DeviceInfo from './DeviceInfo.vue'
</script>

<template>
  <div id="trucks-module" class="grid grid-cols-6 p-4 gap-3 font-reddit-mono h-[100vh] bg-bkg text-content duration-700">
    <header class="col-span-6 flex">
      <img alt="Vue logo" class="h-[75px]" src="../assets/logo.svg" width="65" height="75" />

      <div class="ml-2">
        <TheHeader title="Trucks" />
      </div>
    </header>

    <main class="col-span-6 desktop:col-span-5 overflow-scroll">
      <TheList />
    </main>

    <aside class="col-span-6 desktop:col-span-1">
      <DeviceInfo />
    </aside>

    <!-- <footer class="col-span-6">
      <TheFooter />
    </footer> -->
  </div>
</template>
