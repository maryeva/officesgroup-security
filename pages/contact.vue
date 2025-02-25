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
        text: `Στοιχεία πελάτη<br><br> <b>Όνομα:</b> ${formData.get('name')} <br><br> <b>Email:</b> ${formData.get('email')} <br><br> <b>Τηλέφωνο:</b>${formData.get('phone')} <br><br> <b>Τύπος πελάτη:</b>${formData.get('customer_type')}`
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
    <div class="grid grid-cols-12 gap-x-6">
      <div class="col-span-12 md:col-start-3 md:col-span-8 mb-8">
        <p>Συμπληρώνοντας τα στοιχεία σας στην φόρμα επικοινωνίας θα έρθουμε σε επαφή μαζί σας προκειμένου να κλείσουμε ένα ραντεβού και να σας επισκευθεί εξειδικευμένος σύμβουλος της εταιρείας μας με σκοπό να κατανοήσει τις ανάγκες σας και να σας προτείνει την πιο ολοκληρωμένη λύση για τον χώρο σας. Η επίσκεψη σε καμία περίπτωση δεν είναι δεσμευτική και δεν σας δημιουργεί καμία απολύτως υποχρέωση προς την εταιρεία μας.</p>
      </div>
      <div class="col-span-12 md:col-start-5 md:col-span-4">
        
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