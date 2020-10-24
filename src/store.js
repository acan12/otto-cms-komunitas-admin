import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLogin: false
    },
    mutations: {
        setLogin(state, isLogin){
            state.isLogin = isLogin
        }
    }
});

