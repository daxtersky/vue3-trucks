<script setup lang="ts">
import { computed } from 'vue'
import { useTrucksStore } from '../stores/trucks'
import { storeToRefs } from 'pinia'
import 'vue-select/dist/vue-select.css' // TODO: make separate component
import { TruckStatus } from '@/types/enums'

const store = useTrucksStore()
const { isFormOpen, isFormEdit, truckForm } = storeToRefs(store)
const handleSubmit = () => {
  console.info('handleSubmit...', truckForm.value)
  console.info('handleSubmit... isFormEdit', isFormEdit)
  if (truckModel.value && isFormEdit && truckModel.value?.name) {
    isFormEdit.value ? store.editTruck(truckForm.value) : store.addTruck(truckForm.value)
  }
}
const truckModel = computed({
  get: () => truckForm.value,
  set: (value) => (truckForm.value = value)
})
const statusList = Object.values(TruckStatus).filter((item) => typeof item === 'string')
</script>

<template>
  <div v-if="isFormOpen" class="modal border-4 border-accent-2 bg-accent-1 rounded-md">
    <button class="absolute bg-content text-bkg left-2 top-2 p-3 rounded hover:text-accent-1" @click="() => handleSubmit()">Submit</button>
    <button class="absolute bg-content text-bkg right-2 top-2 p-3 rounded hover:text-accent-1" @click="() => store.closeForm()">
      Close
    </button>
    <form class="fixed top-19 left-2 right-2 bottom-4" @submit.prevent="handleSubmit">
      <h1 class="text-xl font-bold">{{ isFormEdit ? 'Edit' : 'Add new' }} truck</h1>
      <div class="grid grid-cols-5 gap-2 mt-2">
        <label class="col-span-1">Code</label>
        <p class="col-span-4">{{ truckModel.code }}</p>
        <label class="col-span-1">ID</label>
        <p class="col-span-4">{{ truckModel.id }}</p>
        <label class="col-span-1">Name</label>
        <input type="text" class="col-span-4" v-model="truckModel.name" />
        <label class="col-span-1" for="select-status">Status</label>
        <div class="col-span-4">
          <v-select :options="statusList" v-model="truckModel.status"></v-select>
        </div>
        <label class="col-span-5">Description</label>
        <textarea class="col-span-5" rows="5" v-model="truckModel.description"></textarea>
      </div>
    </form>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 430px;
  width: 400px;
}
</style>
