<script setup lang="ts">
import { components } from '~/slices'

const route = useRoute();

const prismic = usePrismic()
const { data: page, status } = useAsyncData(`page-${route.params.uid}`, () =>
  prismic.client.getByUID('page', route.params.uid as string)
)

useHead({
  title: computed(() => `Officesgroup - Security | ${prismic.asText(page.value?.data.title)}`),
  script: {
    async: true,
    defer: true,
    src: 'https://static.cdn.prismic.io/prismic.js?new=true&repo=officesgroup-security'
  }
})
</script>


<template>
  <SliceZone
    v-if="page?.data"
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
  <main v-else-if="status !== 'pending'" class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-brand">404</p>
      <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Η σελίδα δεν υπάρχει</h1>
      <p class="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Το πρόβλημα ίσως να προκύπτει από λάθος εισαγωγής της διεύθυνσης (URL) ή σε κάποιο προσωρινό τεχνικό πρόβλημα.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink to="/" class="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Επιστροφή στην αρχική σελίδα</NuxtLink>
      </div>
    </div>
  </main>
</template>
