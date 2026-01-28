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
         <button type="button" class="btn btn-secondary" @click="resetForm">Reset</button>
      </form>

      <div v-if="submitted" class="result">
         <h3>Data Terkirim</h3>
         <p>Nama : {{ form.name }}</p>
         <p>Email : {{ form.email }}</p>
      </div>
   </div>
</template>

<script setup>
import {ref} from 'vue'
const form = ref({
   name:'',
   email:''
})
const submitted = ref(false)
//Event Handler
function handleSubmit(){
   submitted.value = true
}
function resetForm(){
   form.value.name = ''
   form.value.email = ''
   submitted.value = false
}
</script>