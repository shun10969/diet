<!-- src/components/MermaidChart.vue -->
<template>
  <div class="mermaid-container">
    <div v-html="svg"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import mermaid from 'mermaid'

const props = defineProps({
  chartCode: {
    type: String,
    required: true
  },
  // 1行あたりの最大文字数（調整可）
  maxChars: {
    type: Number,
    default: 15
  }
})

const svg = ref('')

// Mermaid はグローバル初期化のみ
mermaid.initialize({ startOnLoad: false })

// ラベル部分だけを自動で <br> 折り返す関数
function wrapLabels(code, maxLen) {
  return code.replace(/\[([^\]]+)\]/g, (_, label) => {
    // 余分な改行や前後スペースを除去
    const text = label.trim();
    // ステップ1: スペースで一旦分割
    const words = text.split(' ');
    const lines = [];
    let cur = '';

    for (let word of words) {
      // 単語が長すぎる場合は maxLen ごとに切り出す
      if (word.length > maxLen) {
        // まずは今までの cur を確定
        if (cur) { lines.push(cur); cur = ''; }
        // 単語をチャンクに分割
        const chunks = word.match(new RegExp(`.{1,${maxLen}}`, 'g'));
        // 最後のチャンクは cur に残し、それ以外は lines に追加
        chunks.forEach((chunk, idx) => {
          if (idx < chunks.length - 1) {
            lines.push(chunk);
          } else {
            cur = chunk;
          }
        });
      }
      // cur に word をつなげても maxLen を超えないなら加える
      else if ((cur + ' ' + word).trim().length <= maxLen) {
        cur = (cur + ' ' + word).trim();
      }
      // 超えるなら cur を確定して新しい行を開始
      else {
        lines.push(cur);
        cur = word;
      }
    }
    if (cur) lines.push(cur);

    // 改行タグで結合して返却
    return `[${lines.join('<br/>')}]`;
  });
}

async function renderMermaid() {
  if (!props.chartCode) return
  await nextTick()

  // 手動でラベル折り返しをかける
  const processed = wrapLabels(props.chartCode.trim(), props.maxChars)
  try {
    const { svg: rendered } = await mermaid.render(
      'mmd-' + Date.now(),
      processed
    )
    svg.value = rendered
  } catch (err) {
    console.error('Mermaid render error:', err)
  }
}

onMounted(renderMermaid)
watch(() => props.chartCode, renderMermaid)
</script>

<style scoped>
.mermaid-container {
  text-align: center;
  margin: 24px 0;
}
</style>
