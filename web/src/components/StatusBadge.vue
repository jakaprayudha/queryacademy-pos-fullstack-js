<script setup>
defineProps({
   status:{
      type:String,
      required:true
   }
})
</script>
<template>
   <span
   class="badge col-12"
   :class="status === 'active' ? 'bg-success' : 'bg-danger'">{{ status }}</span>
</template>