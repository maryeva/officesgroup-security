<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import LogoSVG from './LogoSVG.vue';
const prismic = usePrismic();
const navigation = useNavigation()
const settings = useSettings()

const { data: page } = await useAsyncData(`[product-categories]`, () =>
  prismic.client.getAllByType("product_category")
);

const gotoPage = (link) => {
  window.location.href = link
}
</script>

<template>
  <Bounded as="header" y-padding="sm">
    <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none relative">
      <NuxtLink to="/home" class="text-xl font-semibold tracking-tight">
        <LogoSVG class="h-[50px]"/>
      </NuxtLink>

     <Menu class="hidden md:flex flex-wrap gap-6 md:gap-10">
      <div>
        <MenuButton v-for="item in navigation?.data.links" :key="$prismic.asText(item.label) || ''" class="relative font-semibold text-slate-800 tracking-tight">
          <div v-if="$prismic.asLink(item.link) === '/products'" class="group inline-block uppercase mt-[1px]">
            <span class="group-hover:text-brand group-hover:underline">{{ $prismic.asText(item.label) }}</span>
            <ChevronDownIcon v-if="$prismic.asLink(item.link) === '/products'" class="-mr-1 size-5 text-slate-800 group-hover:text-brand inline-block" aria-hidden="true" />
          </div>
          <PrismicLink v-else :field="item.link" class="uppercase">
            {{ $prismic.asText(item.label) }}
          </PrismicLink>
          
  
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

     <div class="relative flex h-16 items-center justify-between md:hidden">
      <div class="absolute inset-y-0 left-0 flex items-center">
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--
                Icon when menu is closed.
                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--
                Icon when menu is open.
                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
          </button>
        </div>
      </div>
    </div>

      <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <p>lalala</p>
        </transition>
      </div>
    </div>
  </Bounded>
</template>
