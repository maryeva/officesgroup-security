<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
const prismic = usePrismic();
const navigation = useNavigation()
const settings = useSettings()

const { data: page } = await useAsyncData(`[product-categories]`, () =>
  prismic.client.getAllByType("product_category")
);

const gotoPage = (link) => {
  console.log('click')
  window.location.href = link
}
</script>

<template>
  <Bounded as="header" y-padding="sm">
    <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
      <NuxtLink to="/" class="text-xl font-semibold tracking-tight">
        <img v-if='settings?.data.logo.url' :src='settings?.data.logo.url' class="w-[80%]"/>
        <p v-else> {{ $prismic.asText(settings?.data.siteTitle) }}</p>
      </NuxtLink>

     <Menu class="flex flex-wrap gap-6 md:gap-10">
      <div>
        <MenuButton v-for="item in navigation?.data.links" :key="$prismic.asText(item.label) || ''" class="relative font-semibold text-slate-800 tracking-tight">
          <span v-if="$prismic.asLink(item.link) === '/products'">{{ $prismic.asText(item.label) }}</span>
          <PrismicLink v-else :field="item.link">
            {{ $prismic.asText(item.label) }}
          </PrismicLink>
          <ChevronDownIcon v-if="$prismic.asLink(item.link) === '/products'" class="-mr-1 size-5 text-slate-800 inline-block hover:text-brand" aria-hidden="true" />
  
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems v-if="$prismic.asLink(item.link) === '/products'" class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                <MenuItem v-slot="{ active }" v-for='link in page' :key='link.id'>
                  <a :href='link.url' @click.stop="gotoPage(link.url)" :class="[active ? 'text-slate-800 outline-hidden' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{ link.data.category }}</a>
                </MenuItem>
              </MenuItems>
          </transition>
        </MenuButton>
      </div>
     </Menu>

    </div>
  </Bounded>
</template>

