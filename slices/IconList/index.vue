<script setup lang="ts">
import { ref } from 'vue'
import { type Content } from '@prismicio/client'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.IconListSlice>(['slice', 'index', 'slices', 'context']))
const open = ref(false)
const modalText = ref([])

const toggleModal = (show: boolean, text = []) => {
  open.value = show
  if (!text) return
  modalText.value = text
}
</script>

<template>
  <Bounded
    as="section"
    class="bg-none leading-relaxed"
    y-padding="md"
  >
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:gap-8 justify-center">
      <div v-for="(item,index) in slice.primary.list_items" :key="index" class="text-center hover:cursor-pointer hover:text-brand hover:underline" @click="toggleModal(true, item.description.length ? item.description : [])">
        <CheckmarkIcon class="text-brand inline-block"/>
        <p class="font-bold mt-2">{{ item.item }}</p>
      </div>
    </div>
  </Bounded>

  <TransitionRoot as="template" :show="open" v-if="modalText.length">
    <Dialog class="relative z-10" @close="toggleModal(false)">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <PrismicRichText :field="modalText"/>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
