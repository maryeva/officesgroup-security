<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <Bounded
    as="footer"
    y-padding="sm"
    class="bg-brand"
  >
    <footer class="text-white">
      <div class="grid grid-cols-3 gap-4 content-center">
        <div>
          <p class="font-bold mb-4 uppercase">Στοιχεια Επικοινωνιας</p>
          <ul>
            <li>
              <span>Τηλέφωνο: </span>
              <a href="tel:+302109233888" class="hover:text-white">+30 (210) 92 33 888</a>
            </li>
            <li class="mt-2">
              <span >Email: </span>
              <a href="mailto:synergates@officesgroup.gr" class="hover:text-white">synergates@officesgroup.gr</a>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-bold mb-4 uppercase">Που θα μας βρειτε</p>
          <p>Ιωσήφ των Ρωγών 15 Αθήνα, Αττική, 117 43, Ελλάδα</p>
          <GoogleMap class="mt-4"/>
        </div>
        <div>
          <p class="font-bold mb-4 uppercase">Χρησιμοι Συνδεσμοι</p>
          <ul>
            <li>
              <a href="https://www.officesservice.gr/" target="_blank" class="block">Officesservice.gr</a>
              <a href="https://outsourcing.officesgroup.gr/" target="_blank" class="block mt-2">Officesgroup Outsourcing</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t-2 border-white mt-8">
        <p class="mt-2 text-right">©{{ currentYear }} Officesgroup.gr</p>
      </div>
    </footer>
  </Bounded>
</template>

