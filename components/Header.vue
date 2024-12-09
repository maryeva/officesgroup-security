<script setup lang="ts">
const navigation = useNavigation()
const settings = useSettings()
</script>

<template>
  <Bounded
    as="header"
    y-padding="sm"
  >
    <div
      class="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none"
    >
      <NuxtLink
        to="/"
        class="text-xl font-semibold tracking-tight"
      >
        <img v-if='settings?.data.logo.url' :src='settings?.data.logo.url'/>
        <p v-else>
          {{
            $prismic.asText(settings?.data.siteTitle)
          }}
        </p>
      </NuxtLink>
      <nav>
        <ul
          class="flex flex-wrap gap-6 md:gap-10"
        >
          <li
            v-for="item in navigation?.data.links"
            :key="$prismic.asText(item.label) || ''"
            class="font-semibold tracking-tight text-slate-800"
          >
            <PrismicLink
              :field="item.link"
            >
              {{
                $prismic.asText(item.label)
              }}
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </Bounded>
</template>

