import axios from 'axios'
import api from '../api'

const API_USERS_MANAGEMENT_ENDPOINT = 'https://my-json-server.typicode.com/acan12/otto-cms-komunitas-admin/db'

const state = {
    user_management: []
}

const getters = {
    USER_MANAGEMENT: state => {
        return state.user_management
    }
}

const mutations = {
    SET_USER_MANAGEMENT: (state, payload) => {
        state.user_management = payload
    },
    ADD_USER_MANAGEMENT: (state, payload) => {
        state.user_management.push(payload)
    }
}

const actions = {
    GET_USER_MANAGEMENT({commit}) {
        
        axios
            .get(API_USERS_MANAGEMENT_ENDPOINT)
            .then(res => {
                var dataResponse = res.data
                console.log(dataResponse)
                if(dataResponse.meta.code == 200) {
                    console.log(dataResponse.dataUserManagement.user_management)
                    commit('SET_USER_MANAGEMENT', dataResponse.dataUserManagement.user_management)
                }
                
                
            })
            .catch(error => console.log(error))
    }
}

export default { namespaced: true, state, getters, mutations, actions }

