<script setup lang="ts">
defineProps({
  as: {
    type: [String, Object, Function],
    default: 'div'
  },
  yPadding: {
    type: String,
    default: 'base'
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
    class="px-6"
    :class="{
      'py-4 md:py-8': yPadding === 'sm',
      'py-20 md:py-28': yPadding === 'base',
      'py-32 md:py-48': yPadding === 'lg',
    }"
  >
    <div class="mx-auto w-full max-w-[80%]">
      <slot />
    </div>
  </Component>
</template>

