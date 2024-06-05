<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { TruckStatus } from '../types/enums'
const icons = [
  defineAsyncComponent(() => import('./icons/IconOutOfService.vue')),
  defineAsyncComponent(() => import('./icons/IconLoading.vue')),
  defineAsyncComponent(() => import('./icons/IconToJob.vue')),
  defineAsyncComponent(() => import('./icons/IconAtJob.vue')),
  defineAsyncComponent(() => import('./icons/IconReturning.vue'))
]

const props = defineProps<{
  truck: Truck
}>()
</script>

<template>
  <div
    class="grid grid-rows-2 grid-flow-col gap-4 justify-start relative mt-8 p-2 border-2 hover:text-bkg hover:bg-accent-2 rounded-md hover:cursor-pointer"
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
    <div class="flex items-center">
      <button class="bg-content text-bkg p-2 hover:text-bkg hover:bg-accent-1 rounded">Button</button>
    </div>
    <div class="flex items-center">
      <strong class="mr-2">Description</strong>
      <p>{{ props.truck?.description }}</p>
    </div>
  </div>
</template>
