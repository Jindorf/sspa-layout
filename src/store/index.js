import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        nav: {
            namespaced: true,
            state: {
                user: null
            },
            actions: {},
            mutations: {}
        }
    }
})