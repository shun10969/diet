<!-- src/views/GutHealth.vue -->
<template>
  <v-container class="py-8">
    <h2 class="text-h5 mb-4">7. 腸内環境とダイエットの関係</h2>
    <p>善玉菌を増やし、短鎖脂肪酸を作ることで代謝・食欲・炎症が改善します。</p>
    <MermaidChart :chartCode="chart" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MermaidChart from '@/components/MermaidChart.vue'

const chart = ref(`
graph TD
  A[腸内環境を整える] --> B1[代謝が向上]
  A --> B2[食欲が調整]
  A --> B3[炎症が抑制]
  B1 --> C1[短鎖脂肪酸生成]
  C1 --> D1[脂肪燃焼促進]
  B2 --> C2[レプチン正常]
  C2 --> D2[満腹感UP]
  B3 --> C3[インスリン感受性改善]
  C3 --> D3[脂肪蓄積抑制]
`)
</script>
