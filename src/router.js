import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Hello from './components/HelloWorld'
import PageNotFound from './views/PageNotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.NODE_ENV === 'production' ? 'VueSample' : '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/hello-w',
            name: 'hello',
            component: Hello
        },
        {
            path: '*',
            name: 'not_found',
            component: PageNotFound,
        }
    ]
})
