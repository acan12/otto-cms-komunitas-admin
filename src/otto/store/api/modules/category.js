import axios from 'axios'
import api from '../api'

const API_CAT_MANAGEMENT_ENDPOINT = 'https://my-json-server.typicode.com/acan12/otto-cms-komunitas-admin/db'

const state = {
    categories: []
}

const getters = {
    CATEGORY: state => {
        return state.categories
    }
}

const mutations = {
    SET_CATEGORY: (state, payload) => {
        state.categories = payload
    },
    ADD_CATEGORY: (state, payload) => {
        state.categories.push(payload)
    }
}

const actions = {
    GET_CATEGORIES({commit}) {
        
        axios
            .get(API_CAT_MANAGEMENT_ENDPOINT)
            .then(res => {
                var dataResponse = res.data
                if(dataResponse.meta.code == 200) {
                    console.log(dataResponse.dataCategory.categories)
                    commit('SET_CATEGORY', dataResponse.dataCategory.categories)
                }
                
                
            })
            .catch(error => console.log(error))
    }
}

export default { namespaced: true, state, getters, mutations, actions }

