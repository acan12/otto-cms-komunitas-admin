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
    GET_USER : async(context, payload) => {
        let { response } = await axios.get(API_USERS_MANAGEMENT_ENDPOINT) 
        context.commit('SET_USER', response)
    }
}

export default { state, getters, mutations, actions }

