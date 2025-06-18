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
      <div class="mb-8">
        <p>Eπικοινωνείστε μαζί μας μέσω viber ή email</p>
        <p class="mt-2 text-lg font-bold"><img src="/public/viber.svg" class="h-[25px] w-[25px] inline-block mr-[5px]"/>Viber: 6936433933</p>
        <p class="mt-2 text-lg font-bold "><EmailIcon class="inline-block mr-[5px] text-brand"/>Email: <a href="mailto:offices@otenet.gr" class="inline-block">offices@otenet.gr</a></p>
      </div>
    </div>
  </Bounded>
</template>