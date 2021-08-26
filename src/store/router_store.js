export default {
    devtools: true,
    state: {
        history_num: 0
    },
    getters: {
        getRouter(state) {
            return state.history_num
        }
    },
    mutations: {
        setRouter(state) {
            state.history_num++
        },
    },
    actions: {}
}