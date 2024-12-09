<script setup lang="ts">
import { components } from '~/slices'

const route = useRoute();

const prismic = usePrismic()
const { data: page } = useAsyncData(`page-${route.params.uid}`, () =>
  prismic.client.getByUID('page', route.params.uid as string)
)

useHead({
  title: computed(() => prismic.asText(page.value?.data.title)),
  script: {
    async: true,
    defer: true,
    src: 'https://static.cdn.prismic.io/prismic.js?new=true&repo=officesgroup-security'
  }
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
