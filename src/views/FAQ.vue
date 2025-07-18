<!-- src/views/FAQ.vue -->
<template>
  <v-container class="py-8">
    <h2 class="text-h5 mb-4">FAQ 一覧</h2>
    <v-list two-line>
      <v-list-item
        v-for="item in faqs"
        :key="item.path"
        :to="item.path"
        link
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.question }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    path: '/faq/fat-gain-reason',
    question: 'なぜ脂肪が人につくのか？'
  },
  {
    path: '/faq/energy-definition',
    question: 'ここでいうエネルギーとは何を指しますか？'
  },
  {
    path: '/faq/glycogen-vs-muscle',
    question: 'グリコーゲンが使われても筋肉がすぐに落ちるわけではないのはなぜ？'
  },
  {
    path: '/faq/glucose-homeostasis',
    question: 'なぜ血糖値を維持しようとするのか？筋肉を分解してアミノ酸を得るのはなぜ？'
  },
  {
    path: '/faq/fasted-cardio-risk',
    question: '空腹時や朝に有酸素運動をすると筋肉分解のリスクがあるのはなぜ？どのくらいのリスク？対策は？'
  },
  {
    path: '/faq/gut-mechanism',
    question: '腸内環境を整えると脂肪が減るメカニズムは？'
  }
])
</script>
