import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        meta: {
            title: "主页",
            requiresAuth: false
        },
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '*',
        meta: {
            title: '404 Not Found',
            role: false,
        },
        component: () =>
            import ( /* webpackChunkName: "notfound" */ '../views/Error/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, form, next) => {
    if (to.name !== 'Login' && !store.state.User.isLogin && to.meta.role) next({
        name: 'Login'
    })
    else {
        document.title = to.meta.title + " - FuckOS"
        store.commit("setRouter")
        if (store.state.User.isLogin && (to.name === 'Login' || to.name === 'Register' || to.name === 'iForgot')) {
            next({
                name: 'Home'
            })
        } else {
            next()
        }
    }
})

export default router