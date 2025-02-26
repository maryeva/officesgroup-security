<script setup>
import { ref } from 'vue';

const mail = useMail()
const status = ref(null);
const error = ref(null);

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
      status.value = 'pending';
      error.value = null;
      const myForm = event.target;
      const formData = new FormData(myForm);
      mail.send({
        from: 'Offices Service Website',
        subject: 'Νέo αίτημα επικοινωνίας',
        html: `<h2>Στοιχεία πελάτη</h2> <br><br> <b>Όνομα: </b>${formData.get('name')} <br> <b>Email: </b>${formData.get('email')} <br> <b>Τηλέφωνο: </b>${formData.get('phone')} <br> <b>Τύπος πελάτη: </b>${formData.get('customer_type')}`
      })
      status.value = 'ok';
  } catch (e) {
      status.value = 'error';
      error.value = e;
  }
}
</script>

<template>
  <Bounded
      y-padding="sm"
      class="relative mt-[50px]"
    >
    <div class="flex flex-col md:flex-row gap-x-32 justify-center">
      <div class="mb-8 md:order-2">
        <p>Eπικοινωνείστε μαζί μας μέσω viber ή email</p>
        <p class="mt-2 text-lg font-bold"><img src="/public/viber.svg" class="h-[25px] w-[25px] inline-block mr-[5px]"/>Viber: 6936433933</p>
        <p class="mt-2 text-lg font-bold "><EmailIcon class="inline-block mr-[5px] text-brand"/>Email: <a href="mailto:offices@otenet.gr" class="inline-block">offices@otenet.gr</a></p>
      </div>
      <div class="md:w-[40%] md:order-1">
        
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" :onSubmit='handleFormSubmit'>
          <input type="hidden" name="form-name" value="contact" />
              
          <label for="name" class="block text-sm/6 font-medium text-gray-900">Όνομα</label>
          <input type="text" name="name" id="name" autocomplete="full-name" required class="block mt-1 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand sm:text-sm/6">
      
          <label for="email" class="block text-sm/6 font-medium text-gray-900 mt-4">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" required class="block mt-1 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand sm:text-sm/6">
                
          <label for="phone" class="block text-sm/6 font-medium text-gray-900 mt-4">Τηλέφωνο</label>
          <input type="tel" name="phone" id="phone" autocomplete="tel" minlength="10" required class="block mt-1 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-brand sm:text-sm/6">
            
          <div class="flex mt-4">
            <div class="flex items-center">
              <input id="individual" name="customer_type" type="radio" value="Ιδιώτης" checked class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-brand checked:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
              <label for="individual" class="ml-2 mr-4 text-sm/6 font-medium text-gray-900">Ιδιώτης</label>
            </div>
            <div class="flex items-center">
              <input id="professional" name="customer_type" type="radio" value="Επαγγελματίας" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-brand checked:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
              <label for="professional" class="ml-2 text-sm/6 font-medium text-gray-900">Επαγγελματίας</label>
            </div>
          </div>

        
          <button type="submit" class="w-full mt-8 rounded text-white px-5 py-3 font-medium text-slate-800 bg-brand hover:no-underline hover:text-white hover:brightness-90">Αποστολή</button>

          <p className="alert alert-success" v-if="status === 'ok'">Submitted!</p>
          <p className="alert alert-error" v-if="status === 'error'">{{error}}</p>
        </form>
      </div>
    </div>
  </Bounded>
</template>