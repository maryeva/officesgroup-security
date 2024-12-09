<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home')
)

useHead({
  title: computed(() => prismic.asText(page.value?.data.title)),
  script: {
    async: true,
    defer: true,
    src: 'https://static.cdn.prismic.io/prismic.js?new=true&repo=officesgroup-security'
  },
  meta: [
    {
      name: 'description',
      content: 'Επίσημος αντιπρόσωπος της Gemini Security στην Ελλάδα',
    }
  ]
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
