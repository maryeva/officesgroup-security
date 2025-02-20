<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HighlightTextSlice>(['slice', 'index', 'slices', 'context']))
</script>

<template>
  <Bounded
    as="section"
    class="bg-none leading-relaxed"
    y-padding="sm"
  >
  <div class="md:grid md:grid-cols-2 md:gap-6">
    <div :key='index' v-for="(highlight,index) in slice.primary.highlight_text" class="inline-block bg-brand text-white border-white border-2 rounded-2xl shadow-xl mt-4 md:mt-0 px-8 py-8">
      <h3 class="font-bold mb-4">{{ highlight.heading }}</h3>
      <PrismicRichText
        :field="highlight.text"
        wrapper="div"
      />
    </div>
  </div>
  
  </Bounded>
</template>
