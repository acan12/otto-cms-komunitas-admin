import axios from 'axios'
import api from '../../../store/api/api'

const API_USERS_MANAGEMENT_ENDPOINT = 'https://my-json-server.typicode.com/acan12/otto-cms-komunitas-admin/db'

const state = {
    users: []
}

const getters = {
    USERS: state => {
        return state.users
    }
}

const mutations = {
    SET_USER: (state, payload) => {
        state.users = payload
    },
    ADD_USER: (state, payload) => {
        state.users.push(payload)
    }
}

const actions = {
    GET_USERS({commit}) {
        
        axios
            .get(API_USERS_MANAGEMENT_ENDPOINT)
            .then(res => {
                var dataResponse = res.data
                console.log(dataResponse)
                if(dataResponse.meta.code == 200) {
                    console.log(dataResponse.dataUserManagement.user_management)
                    commit('SET_USER', dataResponse.dataUserManagement.user_management)
                }
                
                
            })
            .catch(error => console.log(error))
    }
}

export default { namespaced: true, state, getters, mutations, actions }

