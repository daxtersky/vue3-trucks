<script setup lang="ts">
import TheHeader from './TheHeader.vue'
import TheList from './TheList.vue'
import TheForm from './TheForm.vue'
import DeviceInfo from './DeviceInfo.vue'
// import TheFooter from './TheFooter.vue'
import { useTrucksStore } from '../stores/trucks'
import { storeToRefs } from 'pinia'
const store = useTrucksStore()
const { isFormOpen } = storeToRefs(store)

const newClick = () => {
  console.info('1 newclick')
  store.setTruckForm()
  store.openForm()
}
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

    <aside class="col-span-6 flex desktop:block desktop:col-span-1">
      <div class="mb-2 flex items-center h-[40px]">
        <button
          :disabled="isFormOpen"
          class="disabled:opacity-75 bg-content p-2 mr-4 text-bkg hover:text-bkg hover:bg-accent-1 rounded"
          @click="() => newClick()"
        >
          New truck
        </button>
      </div>
      <DeviceInfo />
    </aside>

    <!-- <footer class="">
      <TheFooter />
    </footer> -->
  </div>
  <Teleport to="body">
    <TheForm />
  </Teleport>
</template>
