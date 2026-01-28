<script setup>
   import {ref} from 'vue'
   const count = ref(0)
   const increment = ()=>{
      count.value++
   }
   const decrement = ()=>{
      if(count.value>0){
         count.value--
      }
   }
</script>
<template>
  <div>
      <button @click="decrement">-</button>
      <span style="margin: 10px;">{{count}}</span>
      <button @click="increment">+</button>
  </div>
</template>