<script setup lang="ts">
import { onMounted, onUnmounted, reactive, computed, ref, watch } from 'vue'
import * as DOM from '../utils/dom.ts'
import { prefersDarkMode } from '../utils/window'
import { getScreenTypeByScreenWidth } from '../utils/methods.ts'
import tailwindConfig from '../../tailwind.config'

let screenSize = ref(window.innerWidth)
const darkModeModel: boolean = defineModel({
  default: prefersDarkMode // && DOM.hasNodeElementAttribute('html', 'theme', 'dark')
})
const tailwindScreens = reactive(tailwindConfig.theme.screens)
const tailwindScreenType = computed(() => getScreenTypeByScreenWidth(screenSize.value, tailwindScreens))
const changeDarkMode = () => {
  console.info('changeDarkMode', darkModeModel.value)
  darkModeModel.value ? DOM.addNodeElementAttribute('html', 'theme', 'dark') : DOM.removeNodeElementAttribute('html', 'theme', 'dark')
}

watch(
  darkModeModel, // TODO
  (newVal) => {
    console.info('darkModeModel', newVal)
  },
  { immediate: true }
)

const onWidthChange = () => (screenSize.value = window.innerWidth)

onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>

<template>
  <h3>Device info:</h3>
  <p class="text-xs"><strong>Dark mode:</strong> {{ darkModeModel }}</p>
  <p class="text-xs"><strong>App size width:</strong> {{ screenSize }} px</p>
  <p class="text-xs"><strong>Tailwind screen type:</strong> {{ tailwindScreenType }}</p>
  <div>
    <input type="checkbox" name="dark" id="dark" v-model="darkModeModel" v-on:change="changeDarkMode" />
    <label class="pl-2 select-none" for="dark">Dark mode</label>
  </div>
</template>
