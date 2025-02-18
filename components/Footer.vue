<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <Bounded
    as="footer"
    y-padding="sm"
    class="bg-white border-brand border-t-2 mt-16"
  >
    <footer class="text-slate-800 pt-8">
      <div class="grid grid-cols-2 gap-4 content-center">
        <div>
          <p class="font-bold mb-4 uppercase">Στοιχεια Επικοινωνιας</p>
          <ul>
            <li>
              <span>Τηλέφωνο: </span>
              <a href="tel:+302109233888">+30 (210) 92 33 888</a>
            </li>
            <li class="mt-2">
              <span >Email: </span>
              <a href="mailto:synergates@officesgroup.gr">synergates@officesgroup.gr</a>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-bold mb-4 uppercase">Που θα μας βρειτε</p>
          <p>Ιωσήφ των Ρωγών 15 Αθήνα, Αττική, 117 43, Ελλάδα</p>
  
        </div>
      </div>
      <div class="border-t border-brand mt-8">
        <p class="mt-2 text-left">Copyright © Office Services International {{ currentYear }}</p>
      </div>
    </footer>
  </Bounded>
</template>

