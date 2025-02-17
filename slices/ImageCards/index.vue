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
    y-padding="base"
  >
    <div class="grid gap-12">
      <Heading
        v-if="$prismic.asText(slice.primary.heading)"
        class="text-center"
      >
        {{ $prismic.asText(slice.primary.heading) }}
      </Heading>
      <ul class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <li
          v-for="card in slice.primary.cards"
          :key="card.image.url ?? undefined"
          class="grid gap-8"
        >
          <div
            v-if="card.image.url"
            class="relative filter grayscale-50 hover:filter-none hover:cursor-pointer"
          >
            <PrismicLink
              v-if="card.buttonLink && ('id' in card.buttonLink || 'url' in card.buttonLink)"
              :field="card.buttonLink"
              tabindex="-1"
            >
              <PrismicImage :field="card.image" class="rounded-2xl shadow-lg"/>
            </PrismicLink>
            <PrismicImage
              v-else
              :field="card.image"
              class="rounded-2xl shadow-lg"
            />
            <div v-if="card.buttonLink && ('id' in card.buttonLink || 'url' in card.buttonLink)">
              <PrismicLink
                :field="card.buttonLink"
              >
              </PrismicLink>
            </div>
            <div class="overlay h-[100px] w-full absolute bottom-0 left-0 right-0 rounded-2xl">
              <PrismicRichText
                :field="card.text"
                class="absolute bottom-[20px] text-xl font-extrabold leading-relaxed ml-4 text-white"
                wrapper="div"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Bounded>
</template>

<style scoped>
.overlay {
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.486453956582633) 42%, rgba(255,255,255,0) 100%);
}
</style>
