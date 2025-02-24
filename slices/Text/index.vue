<script setup lang="ts">
import { type Content } from '@prismicio/client'
import { getSliceComponentProps } from "@prismicio/vue";

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded
    as="section"
    class="bg-none leading-relaxed"
    y-padding="sm"
  >
    <PrismicRichText
      :field="slice.primary.text"
      :class="{
        'md:grid-cols-2 md:gap-6': slice.variation === 'twoColumns',
        'text-lg': slice.variation === 'default'
      }"
      wrapper="div"
    />
  </Bounded>
</template>
