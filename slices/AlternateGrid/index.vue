<script setup lang="ts">
import { type Content, isFilled } from "@prismicio/client";

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
        'es-alternate-grid__content',
        isFilled.image(slice.primary.image)
          ? 'es-alternate-grid__content--with-image'
          : '',
      ]"
    >
      <PrismicImage
        v-if="isFilled.image(slice.primary.image)"
        :field="slice.primary.image"
        class="es-alternate-grid__image"
        :class="
          slice.variation === 'imageRight'
            ? 'es-alternate-grid__image--right'
            : 'es-alternate-grid__image--left'
        "
      />
      <div class="es-alternate-grid__primary-content">
        <div className="es-alternate-grid__primary-content__intro">
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.title)"
            :field="slice.primary.title"
            class="es-alternate-grid__primary-content__intro__headline"
          />
          <PrismicRichText
            v-if="isFilled.richText(slice.primary.description)"
            :field="slice.primary.description"
            class="es-alternate-grid__primary-content__intro__description"
          />
          <PrismicLink
            v-if="slice.primary.content_link && ('id' in slice.primary.content_link || 'url' in slice.primary.content_link)"
            :field="slice.primary.content_link"
            class="es-alternate-grid__primary-content__intro__link"
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
  height: auto;
  max-width: 100%;
  align-self: center;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.es-alternate-grid__image--left {
  order: 1;
}

.es-alternate-grid__image--left + div {
  order: 2;
}

.es-alternate-grid__image--right {
  order: 2;
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
  background-color: white;
  margin-top: 16px !important;
  text-decoration: underline;
}
</style>
