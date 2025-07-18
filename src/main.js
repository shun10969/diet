import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  flowchart: {
    // 自動折り返しを有効にする
    wrap: true,
    // 折り返し幅の目安（px）。お好みで調整
    wrapStyle: 'max-width: 200px;'
  }
})


// Vuetify の設定（必要に応じてカスタマイズ）
const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'light' },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
