/**
 * Created by shao_ on 2017/8/25.
 */

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {path: '/', name:'home', component: () => import('./components/home.vue')},
            {path: '/item/:id', name:'item' , component: () => import('./components/item.vue')}
        ]
    })
}