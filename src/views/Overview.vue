<!-- src/views/Overview.vue -->
<template>
  <v-container class="py-8">
    <h2 class="text-h5 mb-4">2. ダイエットの基本構造</h2>
    <MermaidChart :chartCode="chart" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MermaidChart from '@/components/MermaidChart.vue'

const chart = ref(`
graph TD
  A[痩せたい] --> B[脂肪を燃やす必要がある]
  B --> C1[食事制限]
  B --> C2[運動]
  B --> C3[腸内環境を整える]
`)
</script>
