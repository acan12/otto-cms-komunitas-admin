import Vue from 'vue'
import Vuex from 'vuex'
import users from './api/modules/users'
import category from './api/modules/category'

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
        users, category
    }
});

