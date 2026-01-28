<template>
  <div class="container">
   <h2>Async Example</h2>
   <button @click="show = !show" class="btn btn-warning">
      { {show ? 'sembunyikan' : 'tampilkan'}}
      Detail
   </button>
   <!-- Async Component-->
    <Suspense>
      <template #default>
         <AsyncDetail v-if="show"/>
      </template>
      <template #fallback>
         <p>Loading component ...</p>
      </template>
    </Suspense>
  </div>
</template>
<script setup>
   import {ref, defineAsyncComponent} from 'vue'
   // State
   const show = ref(false)
   // ASYNC COMPONENT
   const AsyncDetail = defineAsyncComponent(()=>
   import('./DemoPage.vue'))
</script>