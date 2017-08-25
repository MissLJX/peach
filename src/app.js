/**
 * Created by shao_ on 2017/8/25.
 */

// app.js
import Vue from 'vue'
import App from './app.vue'
import { createRouter } from './router'
export function createApp () {
    // 创建 router 实例
    const router = createRouter()
    const app = new Vue({
        // 注入 router 到根 Vue 实例
        router,
        render: h => h(App)
    })
    // 注入 router 到根 Vue 实例
    return { app, router }
}