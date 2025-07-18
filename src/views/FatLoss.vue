<template>
  <v-container class="py-8">
    <h2 class="text-h5 mb-4">4. 脂肪が減るメカニズム</h2>
    <MermaidChart :chartCode="chart" :maxChars="10" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MermaidChart from '@/components/MermaidChart.vue'

const chart = ref(`
graph TD
  A[摂取カロリー < 消費カロリー] --> B[エネルギー不足]
  B --> C1[グリコーゲンの分解]
  C1 --> D1[肝臓と筋肉のグリコーゲンを使用]
  B --> C2[脂肪の分解]
  C2 --> D2[脂肪酸をβ酸化してATPを生成]
  B --> C3[筋肉の分解]
  C3 --> D3[アミノ酸を糖新生に利用して血糖を供給]
`)
</script>
