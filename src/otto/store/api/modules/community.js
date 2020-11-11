import axios from 'axios'
import api from '../api'

const API_COMM_ENDPOINT = 'https://my-json-server.typicode.com/acan12/otto-cms-komunitas-admin/db'

const state = {
    communities: []
}

const getters = {
    COMUNITY: state => {
        return state.communities
    }
}

const mutations = {
    SET_COMMUNITY: (state, payload) => {
        state.communities = payload
    },
    ADD_COMMUNITY: (state, payload) => {
        state.communities.push(payload)
    }
}

const actions = {
    GET_COMMUNITY({commit}) {
        
        axios
            .get(API_COMM_ENDPOINT)
            .then(res => {
                var dataResponse = res.data
                if(dataResponse.meta.code == 200) {
                    console.log(dataResponse.data.dataComm.communities)
                    commit('SET_COMMUNITY', dataResponse.data.dataComm.communities)
                }
                
                
            })
            .catch(error => console.log(error))
    }
}

export default { namespaced: true, state, getters, mutations, actions }

