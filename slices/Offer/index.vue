<script setup lang="ts">
import { type Content } from '@prismicio/client'
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

<Bounded
    as="section"
    y-padding="sm"
  >

  <div class="mx-auto p-sm sm:px-8 sm:py-4 bg-brand text-white border-white border-2 rounded-2xl shadow-xl">
    <div class="max-w-content mx-auto">
      <div class="flex justify-between lg:items-center gap-6 flex-col sm:flex-row">
        <div class="flex gap-6 flex-col lg:flex-row">
          <div>
            <div>
              <div class="inline-flex items-center space-x-2xs min-w-fit bg-white text-brand rounded px-2 py-2 mb-4">
                <span class="font-bold text-xs uppercase tracking-5pc text-center w-full">Offer</span>
              </div>
            </div>
            <h2 class="title-x-small sm:title-medium lg:mb-lg max-w-[27rem]">{{ slice.primary.title }}</h2>
        </div>
        <div class="lg:self-center">
          <div>
            <div class="flex gap-8 items-center">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.36664 6.1L10.0166 0.45C10.15 0.316667 10.3083 0.25 10.4916 0.25C10.675 0.25 10.8333 0.316667 10.9666 0.45C11.1 0.583333 11.1666 0.741667 11.1666 0.925C11.1666 1.10833 11.1 1.26667 10.9666 1.4L4.83331 7.53333C4.69998 7.66667 4.54442 7.73333 4.36664 7.73333C4.18886 7.73333 4.03331 7.66667 3.89998 7.53333L1.03331 4.66667C0.899975 4.53333 0.836086 4.375 0.841642 4.19167C0.847197 4.00833 0.916642 3.85 1.04998 3.71667C1.18331 3.58333 1.34164 3.51667 1.52498 3.51667C1.70831 3.51667 1.86664 3.58333 1.99998 3.71667L4.36664 6.1Z"></path></svg>
              <div class="tracking-[0.125rem] text-white">Προϊόν 1</div>
            </div>
            <div>Πληροφορίες προσφοράς</div>
          </div>
          <div>
            <div class="flex gap-8 items-center"><svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.36664 6.1L10.0166 0.45C10.15 0.316667 10.3083 0.25 10.4916 0.25C10.675 0.25 10.8333 0.316667 10.9666 0.45C11.1 0.583333 11.1666 0.741667 11.1666 0.925C11.1666 1.10833 11.1 1.26667 10.9666 1.4L4.83331 7.53333C4.69998 7.66667 4.54442 7.73333 4.36664 7.73333C4.18886 7.73333 4.03331 7.66667 3.89998 7.53333L1.03331 4.66667C0.899975 4.53333 0.836086 4.375 0.841642 4.19167C0.847197 4.00833 0.916642 3.85 1.04998 3.71667C1.18331 3.58333 1.34164 3.51667 1.52498 3.51667C1.70831 3.51667 1.86664 3.58333 1.99998 3.71667L4.36664 6.1Z"></path></svg>
                <div class="tracking-[0.125rem] text-white">Προϊόν 2</div>
              </div>
              <div>Πληροφορίες προσφοράς</div>
            </div>
          </div>
        </div>
        <div class="w-full shrink-0 relative group hover_cursor-pointer h-[160px] sm:h-[280px] sm:w-[280px]">
          <video class="w-full h-full object-cover rounded-lg" src="https://www.shutterstock.com/shutterstock/videos/1105695263/preview/stock-footage-home-interior-design-detail-of-modern-clean-living-room-with-soft-and-cosy-sunlight-pillow.webm" autoplay="" loop="" muted="" playsinline="" data-cmp-info="10"></video>
        </div>
      </div>
    </div>
  </div>
  </Bounded>
</template>

<style scoped>
.gradient-background {
  background: #870000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #190A05, #870000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #190A05, #870000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
