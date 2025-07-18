<!-- src/views/PreserveMuscle.vue -->
<template>
  <v-container class="py-8">
    <h2 class="text-h5 mb-4">5. 筋肉を守りながら脂肪を減らす戦略</h2>
    <p>
      運動と栄養の両輪で、筋肉を維持しつつ脂肪を燃焼させます。
    </p>
    <MermaidChart :chartCode="chart" />
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MermaidChart from '@/components/MermaidChart.vue'

const chart = ref(`
graph TD
  A[筋肉を守りつつ脂肪燃焼] --> B1[運動戦略]
  A --> B2[栄養戦略]
  B1 --> C1[有酸素運動]
  B1 --> C2[無酸素運動]
  B1 --> C3[HIIT]
  B2 --> C4[高タンパク質摂取]
  B2 --> C5[適量の炭水化物]
  B2 --> C6[良質な脂質]
  B2 --> C7[ビタミン・ミネラル]
`)
</script>
