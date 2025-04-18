<script setup lang="ts">
import { type Content } from '@prismicio/client'
import { getSliceComponentProps } from "@prismicio/vue";
import { isFilled } from "@prismicio/client";


defineProps(
  getSliceComponentProps<Content.AlternateGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 4000,
  gap: 5, 
  pauseAutoplayOnHover: true,
  transition: 300
}
</script>

<template>
<Carousel v-bind="carouselConfig" class="mx-[20px]">
  <Slide class="mx-auto p-sm sm:px-8 sm:py-4 bg-brand text-white border-white border-2 rounded-2xl shadow-xl" v-for="(item,index) in slice.primary.offer_item" :key="index">
    <div class="max-w-content mx-auto">
      <div class="space-x-2xs min-w-fit bg-white text-brand rounded px-2 py-2 mb-8 font-bold tracking-5pc text-center w-full text-4xl">
        <span class="uppercase block">ΠΡΟΣΦΟΡΑ</span>
        <span class="block">{{ item.title }}</span>
      </div>
    
      <div class="flex justify-between lg:items-center gap-6 flex-col sm:flex-row">
        <div class="flex flex-col lg:flex-row text-xl">
          <div>
            <div class="flex gap-8 items-center">
              <PrismicRichText
                v-if="isFilled.richText(item.description)"
                :field="item.description"
              /> 
            </div>
          </div>
        </div>
        <div class="w-full shrink-0 relative group hover_cursor-pointer h-[160px] sm:h-[280px] sm:w-[280px]">
          <figure>
            <PrismicImage
              v-if="isFilled.image(item.image)"
              :field="item.image"
              class="w-full h-full object-cover rounded-lg"
            ></PrismicImage>
          </figure>
        </div>
      </div>
    </div>
  </Slide>
  <template #addons>
    <Navigation />
    <Pagination />
  </template>
</Carousel>
</template>

<style scoped>
.gradient-background {
  background: #870000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #190A05, #870000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #190A05, #870000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
