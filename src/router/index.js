import { createRouter, createWebHistory } from 'vue-router'

// 各セクションのビューをインポート
import Home from '@/views/Home.vue'
import Overview from '@/views/Overview.vue'
import FatGain from '@/views/FatGain.vue'
import FatLoss from '@/views/FatLoss.vue'
import PreserveMuscle from '@/views/PreserveMuscle.vue'
import AerobicAnaerobic from '@/views/AerobicAnaerobic.vue'
import GutHealth from '@/views/GutHealth.vue'
import Actions from '@/views/Actions.vue'
import FAQ from '@/views/FAQ.vue'
import FatGainReason from '@/views/faq/FatGainReason.vue'
import EnergyDefinition from '@/views/faq/EnergyDefinition.vue'
import GlycogenVsMuscle from '@/views/faq/GlycogenVsMuscle.vue'
import GlucoseHomeostasis from '@/views/faq/GlucoseHomeostasis.vue'
import FastedCardioRisk from '@/views/faq/FastedCardioRisk.vue'
import GutMechanism from '@/views/faq/GutMechanism.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/overview', name: 'Overview', component: Overview },
  { path: '/fat-gain', name: 'FatGain', component: FatGain },
  { path: '/fat-loss', name: 'FatLoss', component: FatLoss },
  { path: '/preserve-muscle', name: 'PreserveMuscle', component: PreserveMuscle },
  { path: '/aerobic-anaerobic', name: 'AerobicAnaerobic', component: AerobicAnaerobic },
  { path: '/gut-health', name: 'GutHealth', component: GutHealth },
  { path: '/actions', name: 'Actions', component: Actions },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/faq/fat-gain-reason', component: FatGainReason },
  { path: '/faq/energy-definition', component: EnergyDefinition },
  { path: '/faq/glycogen-vs-muscle', component: GlycogenVsMuscle },
  { path: '/faq/glucose-homeostasis', component: GlucoseHomeostasis },
  { path: '/faq/fasted-cardio-risk', component: FastedCardioRisk },
  { path: '/faq/gut-mechanism', component: GutMechanism },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
