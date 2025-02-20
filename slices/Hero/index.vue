<script setup lang="ts">
import { type Content, type HTMLRichTextMapSerializer } from '@prismicio/client'
import { getSliceComponentProps, usePrismic } from "@prismicio/vue";

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HeroSlice>(
  ['slice', 'index', 'slices', 'context']
));
const prismic = usePrismic()

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="font-semibold leading-tight tracking-tight md:leading-tight text-3xl md:text-5xl mb-4 mt-12 first:mt-0 last:mb-0">${children}</h2>`,
}

const wordsArray = ['ΑΣΦΑΛΕΙΑ','ΣΙΓΟΥΡΙΑ','ΑΠΟΤΕΛΕΣΜΑΤΙΚΟΤΗΤΑ', 'ΠΡΟΣΤΑΣΙΑ', 'ΑΙΣΘΗΤΙΚΗ']
</script>

<template>
  <section class="relative bg-slate-900 text-white h-[500px] mb-[50px]">
    <figure class="absolute inset-0">
      <PrismicImage
        v-if="slice.primary.backgroundImage.url"
        :field="slice.primary.backgroundImage"
        class="pointer-events-none select-none object-cover opacity-70 h-full w-full"
      />
    </figure>
    <Bounded
      y-padding="lg"
      class="relative"
    >
      <div class="md:flex md:justify-center md:align-items-center md:ml-[-200px]">
        <PrismicRichText
          :field="slice.primary.text"
          :html-serializer="serializer"
          class="max-w-2xl text-center text-5xl font-extrabold inline-block md:mr-4"
          wrapper="div"
        />
        <div  id="container" class="hidden md:block inline-block md:mt-[5px]">
          <div id="word" class="relative w-fit">
            <span class="absolute w-fit block top-0 overflow-hidden opacity-0 bg-brand px-4 py-2" :key='word' v-for="word in wordsArray">{{ word }}</span>
          </div>
        </div>
      </div>
    </Bounded>
    <img src="/public/wave_bg.png" class="absolute bg-none bg-bottom bg-no-repeat left-0 right-0 bottom-[-60px]"/>
  </section>
</template>

<style scoped>
#word span {
  animation: show 10s linear infinite;
}

#word span:nth-child(1) {
  animation-delay: 0s;
}

#word span:nth-child(2) {
  animation-delay: 2s;
}

#word span:nth-child(3) {
  animation-delay: 4s;
}

#word span:nth-child(4) {
  animation-delay: 6s;
}

#word span:nth-child(5) {
  animation-delay: 8s;
}

@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  2% {
    opacity: 1;
    transform: translateY(0px);
  }
  18% {
    opacity: 1;
    transform: translateY(0px);
  }
  20% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}
</style>
