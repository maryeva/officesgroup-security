<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";
import { getSliceComponentProps } from "@prismicio/vue";

defineProps(
  getSliceComponentProps<Content.AlternateGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="es-bounded es-alternate-grid"
  >
    <div
      :class="[
        'es-alternate-grid__content flex flex-col items-center border border-gray-200 rounded-lg shadow-sm md:flex-row dark:border-gray-700 dark:bg-gray-800',
        isFilled.image(slice.primary.image)
          ? 'es-alternate-grid__content--with-image'
          : '',
      ]"
    >

    <div :class="['h-[100%] relative overflow-hidden',slice.variation === 'imageRight'  ? 'es-alternate-grid__image--right' : 'es-alternate-grid__image--left']">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute"><path class="fill-gray-800" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,176C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>       
      <PrismicImage
          v-if="isFilled.image(slice.primary.image)"
          :field="slice.primary.image"
          class="es-alternate-grid__image object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        />
    </div>
      
      <div class="es-alternate-grid__primary-content p-8">
        <div className="es-alternate-grid__primary-content__intro flex flex-col justify-between p-4 leading-normal">
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.title)"
            :field="slice.primary.title"
            class="es-alternate-grid__primary-content__intro__headline mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          />
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.description)"
            :field="slice.primary.description"
            class="es-alternate-grid__primary-content__intro__description mb-3 font-normal text-gray-700 dark:text-gray-400"
          />
          <PrismicLink
            v-if="slice.primary.content_link && ('id' in slice.primary.content_link || 'url' in slice.primary.content_link)"
            :field="slice.primary.content_link"
            class="es-alternate-grid__primary-content__intro__link text-gray-700 dark:text-gray-400"
          >
            Δείτε περισσότερα
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.es-bounded {
  margin: 0px;
  min-width: 0px;
  position: relative;
  padding: 4vw 1.25rem;
}

.es-alternate-grid {
  font-family: system-ui, sans-serif;
  background-color: #fff;
  color: #333;
}

.es-alternate-grid__content {
  display: grid;
  gap: 2rem;
  grid-auto-flow: dense;
  width: 80vw;
  align-items: start;
  justify-self: center;
}

.es-alternate-grid__content svg {
  height: 180px;
}

@media (min-width: 640px) {
  .es-alternate-grid__content--with-image {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .es-alternate-grid__content--with-image {
    grid-template-columns: repeat(2, 1fr);
  }
}

.es-alternate-grid__image {
  width: auto;
  height: 100%;
  max-width: 100%;
  align-self: center;
}

.es-alternate-grid__image--left {
  order: 1;
}

.es-alternate-grid__image--left svg {
  right: -349px;
  top: 0;
  rotate: 90deg;
}

.es-alternate-grid__image--left + div {
  order: 2;
}

.es-alternate-grid__image--right {
  order: 2;
}

.es-alternate-grid__image--right svg {
  rotate: 270deg;
  left: -349px;
  top: 0;
}

.es-alternate-grid__image--right + div {
  order: 1;
}

.es-alternate-grid__primary-content {
  display: grid;
  gap: 2rem;
}

.es-alternate-grid__primary-content__intro {
  display: grid;
  gap: 0.5rem;
}

.es-alternate-grid__primary-content__intro__headline {
  font-size: 1.625rem;
  font-weight: 700;
}

.es-alternate-grid__primary-content__intro__headline h3 {
  line-height: 1 !important;
}

.es-alternate-grid__primary-content__intro__headline * {
  margin-bottom: 20px !important;
}

@media (min-width: 640px) {
  .es-alternate-grid__primary-content__intro__headline {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  .es-alternate-grid__primary-content__intro__headline {
    font-size: 2.5rem;
  }
}

@media (min-width: 1200px) {
  .es-alternate-grid__primary-content__intro__headline {
    font-size: 2.75rem;
  }
}

.es-alternate-grid__primary-content__intro__description {
  font-size: 1.15rem;
  max-width: 38rem;
}

.es-alternate-grid__primary-content__intro__description > p {
  margin: 0;
}

@media (min-width: 1200px) {
  .es-alternate-grid__primary-content__intro__description {
    font-size: 1.4rem;
  }
}

.es-alternate-grid__primary-content__intro__link {
  display: block;
  font-weight: 500;
  margin-top: 16px !important;
  text-decoration: underline;
}
</style>
