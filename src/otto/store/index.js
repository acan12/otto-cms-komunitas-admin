import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import users from './api/modules/users'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLogin: false
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

