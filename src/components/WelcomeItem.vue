<template>
  <div class="flex relative mt-8">
    <i class="icon">
      <slot name="icon"></slot>
    </i>
    <div class="flex-1 ml-4">
      <h3 class="text-xl font-bold mb-1 text-v-indigo">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>
