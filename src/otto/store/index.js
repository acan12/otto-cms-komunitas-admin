import Vue from 'vue'
import Vuex from 'vuex'
import users from './api/modules/users'
import userManagement from './api/modules/user_management'
import category from './api/modules/category'
import interest from './api/modules/interest'
import community from './api/modules/community'
import posting from './api/modules/posting'
import product from './api/modules/product'

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
        users, 
        userManagement, 
        category, 
        interest, 
        community, 
        posting,
        product
    }
});

