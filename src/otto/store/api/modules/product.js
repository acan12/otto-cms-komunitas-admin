import axios from 'axios'
import { api } from '../api'

const API_PRODUCT_MANAGEMENT_ENDPOINT = 'otto-cms-komunitas-admin/db'

const state = {
    product: []
}

const getters = {
    PRODUCT: state => {
        return state.product
    }
}

const mutations = {
    SET_PRODUCT: (state, payload) => {
        state.product = payload
    },
    ADD_PRODUCT: (state, payload) => {
        state.product.push(payload)
    }
}

const actions = {
    GET_PRODUCT({commit}) {
        
        api.get(API_PRODUCT_MANAGEMENT_ENDPOINT)
            .then(res => {
                var dataResponse = res.data
                if(dataResponse.meta.code == 200) {
                    console.log(process.env.VUE_APP_BASE_URL)
                    commit('SET_PRODUCT', dataResponse.data.dataProduct.product)
                }
            })
            .catch(error => console.log(error))
    }
}

export default { namespaced: true, state, getters, mutations, actions }

