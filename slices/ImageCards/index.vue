<script setup lang="ts">
import { type Content } from '@prismicio/client'
import { getSliceComponentProps } from "@prismicio/vue";

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.ImageCardsSlice>(
  ['slice', 'index', 'slices', 'context']
));


// can change to overlay the title over the image
//check material UI for inspo
</script>

<template>
  <Bounded
    as="section"
  >
    <div class="grid gap-12">
      <Heading
        v-if="$prismic.asText(slice.primary.heading)"
        class="text-center"
      >
        {{ $prismic.asText(slice.primary.heading) }}
      </Heading>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <li
          v-for="(card, index) in slice.primary.cards"
          :key="card.image.url ?? undefined"
          :class="`${slice.primary.cards.length%2 !== 0 && index === slice.primary.cards.length-1 ? 'md:last:col-span-full center-last-item' : ''}`"
        >
          <div
            v-if="card.image.url"
            class="relative filter grayscale-50 hover:filter-none hover:cursor-pointer overlay"
          > 
            <PrismicLink
              v-if="card.link && ('id' in card.link || 'url' in card.link)"
              :field="card.link"
              tabindex="-1"
            >
              <PrismicImage :field="card.image" class="rounded-2xl shadow-lg w-auto"/>
              <div class="h-[100px] w-full absolute bottom-0 left-0 right-0 rounded-2xl ">
                <PrismicRichText
                  :field="card.text"
                  class="absolute bottom-[20px] text-xl font-extrabold leading-relaxed ml-4 text-white"
                  wrapper="div"
                />
              </div>
            </PrismicLink>
            <PrismicImage
              v-else
              :field="card.image"
              class="rounded-2xl shadow-lg"
            />
            <div v-if="card.link && ('id' in card.link || 'url' in card.link)">
              <PrismicLink
                :field="card.link"
              >
              </PrismicLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Bounded>
</template>

<style scoped>
.overlay:before {
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7) 65%);
  @apply rounded-2xl;
  bottom: 0;
  content: "";
  height: 50%;
  left: 0;
  opacity: 0.7;
  position: absolute;
  right: 0;
  transition: opacityease-in-out;
  transition-duration: inherit;
}

@media only screen and (min-width: 768px) {
  .center-last-item img {
    grid-column: 1 / -1;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
