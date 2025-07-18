<!-- src/views/FatGain.vue -->
<template>
  <v-container class="py-8">
    <h2 class="text-h5 mb-4">3. 脂肪がつくメカニズム</h2>
    <p>
      脂肪がつく最もシンプルな理由は、
      <strong>摂取カロリーが消費カロリーを上回る</strong>
      ため、余ったエネルギーが中性脂肪として蓄積されます。
    </p>
    <p>
      また、糖質や脂質の過剰摂取、
      ホルモンの影響も大きく関与します。
    </p>
    <MermaidChart :chartCode="chart" :maxChars="10"/>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import MermaidChart from '@/components/MermaidChart.vue'

const chart = ref(`
graph TD
  A[脂肪がつくメカニズム] --> B1[エネルギー収支のバランス]
  A --> B2[糖質の過剰摂取]
  A --> B3[脂質の過剰摂取]
  A --> B4[ホルモンの影響]
  B1 --> C1[摂取カロリー > 消費カロリー]
  C1 --> D1[余ったエネルギーが脂肪に変換]
  B2 --> C2[血糖値の上昇]
  C2 --> D2[インスリンの分泌]
  D2 --> E1[貯蔵しきれない分が脂肪に蓄積]
  B3 --> C3[脂質は直接中性脂肪に変換]
  C3 --> D3[脂肪細胞が増える]
  B4 --> C4[インスリンが脂肪を蓄える]
  B4 --> C5[コルチゾールが脂肪蓄積を加速]
`)
</script>
