import axios from 'axios'
import api from '../api'

const API_INTEREST_MANAGEMENT_ENDPOINT = 'https://my-json-server.typicode.com/acan12/otto-cms-komunitas-admin/db'

const state = {
    interest: []
}

const getters = {
    INTEREST: state => {
        return state.interest
    }
}

const mutations = {
    SET_INTEREST: (state, payload) => {
        state.interest = payload
    },
    ADD_INTEREST: (state, payload) => {
        state.interest.push(payload)
    }
}

const actions = {
    GET_INTEREST({commit}) {
        
        axios
            .get(API_INTEREST_MANAGEMENT_ENDPOINT)
            .then(res => {
                var dataResponse = res.data
                
                if(dataResponse.meta.code == 200) {
                    console.log(dataResponse.dataInterest.interest)
                    commit('SET_INTEREST', dataResponse.dataInterest.interest)
                }
                
                
            })
            .catch(error => console.log(error))
    }
}

export default { namespaced: true, state, getters, mutations, actions }

