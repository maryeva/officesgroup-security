<script setup lang="ts">
defineProps({
  as: {
    type: [String, Object, Function],
    default: 'div'
  },
  yPadding: {
    type: String,
    default: 'md'
  },
  collapsible: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <Component
    :is="as"
    :data-collapsible="collapsible || null"
    class="px-6 bounded-container"
    :class="{
      'py-4': yPadding === 'sm',
      'py-20 md:py-28': yPadding === 'md',
      'py-32 md:py-48': yPadding === 'lg',
    }"
  >
    <div class="mx-auto w-full max-w-[80%]">
      <slot />
    </div>
  </Component>
</template>

<style>
section.bounded-container:nth-child(2) {
  margin-top:50px;
}
</style>

