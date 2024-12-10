<script setup>
import { ref } from 'vue';

const status = ref(null);
const error = ref(null);

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
      status.value = 'pending';
      error.value = null;
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
      });
      if (res.status === 200) {
          status.value = 'ok';
      } else {
          status.value = 'error';
          error.value = `${res.status} ${res.statusText}`;
      }
  } catch (e) {
      status.value = 'error';
      error.value = e;
  }
}
</script>

<template>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" :onSubmit='handleFormSubmit'>
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <label>Όνομα <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Email <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Τηλέφωνο <input type="number" name="phone" /></label>
    </p>
    <p>
      <button type="submit">Αποστολή</button>
    </p>
    <p className="alert alert-success" v-if="status === 'ok'">Submitted!</p>
    <p className="alert alert-error" v-if="status === 'error'">{{error}}</p>
  </form>
</template>