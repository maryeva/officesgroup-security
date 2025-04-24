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
   <Bounded
    y-padding="sm"
    as="section"
  >
  <Carousel v-bind="carouselConfig" class="mx-[20px] pb-[50px]">
    <Slide v-for="(item,index) in slice.primary.offer_item" :key="index">
      <div>
        <figure>
          <PrismicImage
            v-if="isFilled.image(item.image)"
            :field="item.image"
            class="md:max-h-[450px]"
          ></PrismicImage>
        </figure>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </Bounded>
</template>

<style>
.carousel__next:hover,
.carousel__prev:hover {
  @apply text-brand;
}

.carousel__pagination-button--active {
  @apply bg-brand;
}
</style>