import { createApp, h } from 'vue'
import { add } from 'lib-starter'

const app = createApp(() => h('div', add(1, 2)))
app.mount('#app')
