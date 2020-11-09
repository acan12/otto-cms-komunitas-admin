import axios from 'axios'
import api from '../../../store/api/api'

const API_USERS_MANAGEMENT_ENDPOINT = 'http://localhost:3001/api/v1/user-management/list'

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
        state.users = payload.data.user_management
    },
    ADD_USER: (state, payload) => {
        state.users.push(payload)
    }
}

const actions = {
    GET_USERS({commit}) {
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios
            .get(API_USERS_MANAGEMENT_ENDPOINT)
            .then(res => {
                commit('SET_USER', response)
            })
            .catch(error => console.log(error))
    }
}

export default { namespaced: true, state, getters, mutations, actions }

