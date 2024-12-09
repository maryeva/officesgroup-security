<script setup lang="ts">
import { isFilled } from "@prismicio/client";
import { ref, watch } from "vue";
import type { ProductDocument } from "~/prismicio-types";


const prismic = usePrismic();
const route = useRoute();
const relatedProducts = ref()

const { data: page } = await useAsyncData(`[product-uid-${route.params.uid}]`, () =>
  prismic.client.getByUID("product", route.params.uid as string)
);


const { data: related } = await useAsyncData(`[related-products-${route.params.uid}]`, () => 
  prismic.client.getAllByType("product", {
    filters: [
    prismic.filter.at(
      'my.product.category',
      page.value?.data.category.id
    )
    ],
  })
);

relatedProducts.value = related.value?.filter(product => product.id !== page.value?.id).slice(0, 4)

useHead({
  title: page.value?.data.name,
  meta: [
    {
      name: page.value?.data.name,
      content: page.value?.data.meta_description,
    },
  ],
});
</script>

<template>
  <section class="px-6 py-20 md:py-28 bg-white">
    <h1 class="font-semibold leading-tight tracking-tight md:leading-tight text-4xl md:text-5xl mb-7 mt-12 first:mt-0 last:mb-0">{{ page?.data.name }}</h1>
    <div class="grid grid-cols-6 content-center gap-10">
        <PrismicImage
            class="col-span-2"
            v-if="page?.data.image"
            :field="page.data.image"
        />
        <PrismicRichText
        class="col-span-4"
        v-if="isFilled.richText(page?.data.description)"
        :field="page?.data.description"
        />
    </div>
  </section>
  <section class="px-6 py-20 md:py-28 bg-white">
    <h2 class="font-semibold leading-tight tracking-tight md:leading-tight text-3xl md:text-4xl mb-7 mt-12 first:mt-0 last:mb-0">Δείτε επίσης</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
      <div v-for="product in relatedProducts" :key="product.id">
        <a :href="`/products/${product.uid}`" class="flex justify-start">
          <PrismicImage
            v-if="isFilled.image(product.data.image)"
            :field="product.data.image"
            class="h-[200px] w-auto"
          ></PrismicImage>
        </a>
        <p class="font-bold mt-4 mb-2">{{ product.data.name }}</p>       
      </div>
    </div>
  </section>
</template>