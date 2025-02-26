<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <Bounded
    as="footer"
    y-padding="sm"
    class="bg-white border-brand border-t-2 mt-8"
  >
    <footer class="text-slate-800 pt-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 content-center">
        <div>
          <p class="font-bold mb-2 uppercase">Που θα μας βρειτε</p>
          <LocationIcon class="inline-block mr-[5px] text-brand"/>
          <p class="inline-block">Ζαχία 1 Αθήνα, Αττική, 10445</p>
          
          <p class="font-bold mt-16 mb-2 uppercase">Στοιχεια Επικοινωνιας</p>
          <ul>
            <li>
              <PhoneIcon class="inline-block mr-[5px] text-brand"/>
              <a href="tel:+302109233888">+30 (210) 92 33 888</a>
            </li>
            <li class="mt-8 flex ">
              <EmailIcon class="inline-block mr-[5px] text-brand"/>
              <div class="inline-block ml-[5px]">
                <a href="mailto:offices@otenet.gr" class="block">offices@otenet.gr</a>
              </div>
              
            </li>
          </ul>
        </div>
        <div>
          <GoogleMap class="mt-4"/>
        </div>
      </div>
      <div class="border-t border-brand mt-8">
        <p class="mt-2 text-left">Copyright © Office Services International {{ currentYear }}</p>
      </div>
    </footer>
  </Bounded>
</template>

