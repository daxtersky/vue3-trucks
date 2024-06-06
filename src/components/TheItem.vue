<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { TruckStatus } from '../types/enums'
import { useTrucksStore } from '../stores/trucks'
const store = useTrucksStore()
import { storeToRefs } from 'pinia'
const { isFormOpen } = storeToRefs(store)

const icons = [
  defineAsyncComponent(() => import('./icons/IconOutOfService.vue')),
  defineAsyncComponent(() => import('./icons/IconLoading.vue')),
  defineAsyncComponent(() => import('./icons/IconToJob.vue')),
  defineAsyncComponent(() => import('./icons/IconAtJob.vue')),
  defineAsyncComponent(() => import('./icons/IconReturning.vue'))
]
const hover = ref(false)
const props = defineProps<{
  truck: Truck
}>()
const editClick = (itemId: number) => {
  store.setTruckForm(itemId.toString())
  store.openForm(itemId.toString())
}
const removeClick = (itemId: number) => {
  console.info('remove id', itemId)
  // store.openForm(itemId.toString())
}
</script>

<template>
  <div
    class="grid grid-rows-2 grid-flow-col gap-4 justify-start mb-8 p-2 border-2 hover:text-bkg hover:bg-accent-2 rounded-md hover:cursor-pointer transition ease-in-out delay-150"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="flex items-center">
      <strong class="mr-2">Name</strong>
      <h3 class="text-xl font-bold mb-1 text-v-indigo">{{ props.truck?.name }}</h3>
    </div>
    <div class="flex items-center">
      <strong class="mr-2">Code</strong>
      <p>{{ props.truck?.code }}</p>
    </div>

    <div class="flex items-center">
      <strong class="mr-2">Status</strong>
      <span class="text-xs mr-2">{{ props.truck?.status }}</span>
      <component :is="icons[TruckStatus[props.truck.status]]"></component>
    </div>
    <div class="flex items-center">
      <strong class="mr-2">ID</strong>
      <p>{{ props.truck?.id }}</p>
    </div>
    <div class="flex items-center h-[40px]">
      <button
        :disabled="isFormOpen"
        v-show="hover"
        class="disabled:opacity-75 bg-content p-2 text-bkg hover:text-bkg hover:bg-accent-1 rounded"
        @click="() => editClick(+props.truck?.id)"
      >
        Edit
      </button>
      <button
        :disabled="isFormOpen"
        v-show="hover"
        class="disabled:opacity-75 ml-4 bg-content p-2 text-bkg hover:text-bkg hover:bg-accent-1 rounded"
        @click="() => removeClick(+props.truck?.id)"
      >
        Remove
      </button>
    </div>
    <div class="flex items-center">
      <strong class="mr-2">Description</strong>
      <p>{{ props.truck?.description }}</p>
    </div>
  </div>
</template>
