import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import RouterData from './router_store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        User,
        RouterData
    },
})