<!-- src/views/AerobicAnaerobic.vue -->
<template>
  <v-container class="py-8">
    <h2 class="text-h5 mb-4">6. 有酸素運動 vs 無酸素運動</h2>
    <p>運動の種類によって主に使われるエネルギー源が異なります。</p>
    <MermaidChart :chartCode="chart" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MermaidChart from '@/components/MermaidChart.vue'

const chart = ref(`
graph TD
  A[運動の種類] --> B1[有酸素運動]
  A --> B2[無酸素運動]
  B1 --> C1[主に脂肪をエネルギー源]
  C1 --> D1[酸素を利用して長時間持続]
  B2 --> C2[主にグリコーゲンを利用]
  C2 --> D2[酸素不要で短時間高強度]
`)
</script>
