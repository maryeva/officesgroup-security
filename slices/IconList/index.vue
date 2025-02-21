<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.IconListSlice>(['slice', 'index', 'slices', 'context']))
</script>

<template>
  <Bounded
    as="section"
    class="bg-none leading-relaxed"
    y-padding="md"
  >
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 md:gap-8 justify-center">
      <div v-for="(item,index) in slice.primary.list_items" :key="index" class="text-center">
        <CheckmarkIcon class="text-brand inline-block"/>
        <p class="font-bold mt-2">{{ item.item }}</p>
      </div>
    </div>
  </Bounded>
</template>
