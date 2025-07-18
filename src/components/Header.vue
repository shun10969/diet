<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>最短ダイエットメカニズム</v-toolbar-title>
    <v-spacer />
    <v-btn text to="/">トップ</v-btn>
    <v-btn text to="/overview">基本構造</v-btn>
    <v-btn text to="/fat-gain">脂肪がつく仕組み</v-btn>
    <v-btn text to="/fat-loss">脂肪が減る仕組み</v-btn>
    <v-btn text to="/preserve-muscle">筋肉を守る方法</v-btn>
    <v-btn text to="/aerobic-anaerobic">運動比較</v-btn>
    <v-btn text to="/gut-health">腸内環境</v-btn>
    <v-btn text to="/actions">実践ステップ</v-btn>
    <v-btn text to="/faq">役立つ深堀FAQ</v-btn>
  </v-app-bar>
</template>

<script setup>
// 特にロジックは不要ですが、必要に応じて router-link の props を微調整してください
</script>
