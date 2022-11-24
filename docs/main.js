/*
    App to host local design language document
*/

import { createApp } from 'vue'
import DemoBug from './DemoBug.vue'
import FlowForgeUIComponents from '../src'

createApp(DemoBug)
    .use(FlowForgeUIComponents)
    .mount('#app')
