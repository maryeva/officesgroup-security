<template>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
  </form>
</template>