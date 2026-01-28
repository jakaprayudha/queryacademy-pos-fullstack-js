<template>
   <div class="container">
      <h2>Form Registrasi</h2>
      <form @submit.prevent="handleSubmit">
         <div class="mb-3">
            <label for="" class="form-label">Nama</label>
            <input type="text" v-model="form.name" class="form-control">
         </div>
          <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <input type="email" v-model="form.email" class="form-control">
         </div>
         <button class="btn btn-primary" type="submit">Kirim</button>
         <button type="button" @click="resetForm">Reset</button>
      </form>

      <div v-if="submitted" class="result"></div>
      <h3>Data Terkirim</h3>
      <p>Nama : {{ form.name }}</p>
      <p>Email : {{ form.email }}</p>
   </div>
</template>

<script setup>

</script>