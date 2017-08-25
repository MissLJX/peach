/**
 * Created by shao_ on 2017/8/25.
 */

import { createApp } from './app'
const { app, router } = createApp()
router.onReady(() => {
    app.$mount('#app')
})