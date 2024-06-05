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
  <div class="flex relative mt-8 border rounded">
    <component :is="icons[TruckStatus[props.truck.status]]"></component>
    <span class="text-xs">{{ props.truck?.status }}</span>
    <!--  -->
    <div class="flex-1 ml-4">
      <h3 class="text-xl font-bold mb-1 text-v-indigo">
        <!-- <slot name="heading"></slot> -->
        {{ props.truck?.name }}
      </h3>
      <p>code: {{ props.truck?.code }}</p>
      <p>id: {{ props.truck?.id }}</p>
      <p>description: {{ props.truck?.description }}</p>
    </div>
  </div>
</template>
