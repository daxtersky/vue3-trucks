<script setup lang="ts">
import { useTrucksStore } from '../stores/trucks'
import TheItem from './TheItem.vue'

const store = useTrucksStore()
store.getTrucks()
</script>

<template>
  <p v-show="store.loading">Loading...</p>
  <div>
    <ul v-if="store.trucks.length">
      <!-- <li v-for="truck in store.trucks" :key="truck.code">{{ truck.name }} {{ truck.status }} {{ truck.code }}</li> -->
      <li v-for="truck in store.trucks" :key="truck.code">
        <TheItem :truck="truck" />
      </li>
    </ul>
  </div>
</template>
