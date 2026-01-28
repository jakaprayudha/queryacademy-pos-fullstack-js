<script setup>
  import {ref, onMounted} from 'vue'
  import StatusBadge from './StatusBadge.vue'
  const users = ref([])
  onMounted(()=>{
   users.value = [
    {id:1, category:'Makanan', description:'Menu Makanan Berat dan Ringan', status:'active'},
    {id:2, category:'Minuman', description:'Menu Minuman', status:'inactive'},
    {id:3, category:'Snack', description:'Cemilan', status:'active'},
   ]
  })
</script>
<template>
  <div class="card mt-3">

    <div class="card-header fw-bold">
       Data Category
    </div>

    <div class="card-body p-0">
      <table class="table table-hover mb-0">
        <thead class="table-light">
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(category, index) in users" :key="category.id">
            <td>{{index +1}}</td>
            <td>{{category.category}}</td>
            <td>{{category.description}}</td>
            <td><StatusBadge :status="category.status" /></td>
          </tr>
          <tr v-if="users.length ===0">
          <td colspan="4" class="text-center">Data Tidak Ada</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>