import Vue from 'vue'
import Vuex from 'vuex'
// Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        access_token: ''
    },
    mutations: {
        set_token(state, access_token) {
            state.access_token = access_token
            sessionStorage.token = access_token
        },
        del_token(state) {
            state.access_token = ''
            sessionStorage.removeItem('access_token')
        }
    }
})