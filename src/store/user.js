import { getLocalStorageItem, setLocalStorageItem } from '../utils/LocalStore'
/** 用户 相关的状态数据 */
const AUTH = 'AUTHENTICATION'

export default {
    devtools: true,
    state: {
        isLogin: false,
        token: null,
        info: {},
    },
    getters: {
        Login(state) {
            return state.isLogin
        },
        userToken(state) {
            return state.token
        },
        userInfo(state) {
            return state.info
        },
        /**
         * 检查是否已经登陆的状态
         * @param {*} state 当前模块内的局部state
         */
        isLogin(state) {
            return state.isLogin
        }
    },
    mutations: {
        login(state, token) {
            state.isLogin = true
            state.token = token
            setLocalStorageItem(AUTH, state)
        },
        logout(state) {
            state.isLogin = false
            state.token = ''
            state.info = {}
            setLocalStorageItem(AUTH, state)
        },
        setUserInfo(state, payload) {
            /**
             * 当要设置的state是一个对象/数组时，应该构造一个新的对象/数组再设置
             * 否则调用的computed是diff认为是同一个对象/数组，不更新视图
             */
            let data = Object.assign({}, state.info, payload) //构造一个新的对象 
            state.info = data
            setLocalStorageItem(AUTH, state)
        },
    },
    actions: {
        initUserModule({ state }) {
            // 读取本地登录信息
            let ret = getLocalStorageItem(AUTH, state)
            state.isLogin = ret.isLogin
            state.token = ret.token
            state.info = ret.info
        }
    }
}