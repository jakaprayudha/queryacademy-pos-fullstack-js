<script setup>
import { ref } from 'vue'
import DemoTable from '@/components/DemoTable.vue'
import BaseCard from '@/components/BaseCard.vue'
</script>

<template>
  <BaseCard>
    <template #header>
      Category List
    </template>
      <DemoTable />
  </BaseCard>

</template>