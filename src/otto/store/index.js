import Vue from 'vue'
import Vuex from 'vuex'
import users from './api/modules/users'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLogin: false
    },
    getters: {

    },
    mutations: {
        setLogin(state, isLogin){
            state.isLogin = isLogin
        }
    },
    modules: {
        users
    }
});

