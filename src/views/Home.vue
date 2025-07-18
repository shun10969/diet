<!-- src/views/Home.vue -->
<template>
  <v-container class="py-8">
    <h1 class="text-h4">最短ダイエットメカニズム</h1>
    <h2 class="text-h6 mb-4">{{ title }}</h2>
    <v-list dense two-line>
      <v-list-item v-for="(p, i) in intro" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{ p }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-chip-group class="mt-4" column>
      <v-chip
        v-for="(item, i) in points"
        :key="i"
        color="primary"
        text-color="white"
        class="ma-1"
      >
        {{ item }}
      </v-chip>
    </v-chip-group>
  </v-container>
</template>

<script setup>
const title = '1. 導入'
const intro = [
  '本サイトでは、「効率的かつ安全に脂肪を減らし、目標体重へ到達するための仕組み」を医学・生理学に基づいて解説します。',
  '痩せるには単なる根性論ではなく、科学的な理解と行動の順番が重要です。',
  '以下の要素を一つずつ紐解きながら、最短で理想の身体を手に入れるための道筋を提示します：'
]
const points = [
  'なぜ脂肪がつくのか？',
  'どうすれば脂肪が燃えるのか？',
  '筋肉を落とさず脂肪だけを減らすには？',
  '腸内環境はなぜ重要なのか？',
  '正しい運動・食事・タイミングとは？'
]
</script>
