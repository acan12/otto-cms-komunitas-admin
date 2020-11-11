import axios from 'axios'
import api from '../api'

const API_POST_ENDPOINT = 'https://my-json-server.typicode.com/acan12/otto-cms-komunitas-admin/db'

const state = {
    posts: []
}

const getters = {
    POST: state => {
        return state.posts
    }
}

const mutations = {
    SET_POST: (state, payload) => {
        state.posts = payload
    },
    ADD_POST: (state, payload) => {
        state.posts.push(payload)
    }
}

const actions = {
    GET_POST({commit}) {
        
        axios
            .get(API_POST_ENDPOINT)
            .then(res => {
                var dataResponse = res.data
                if(dataResponse.meta.code == 200) {
                    console.log(dataResponse.dataPost.posts)
                    commit('SET_POST', dataResponse.dataPost.posts)
                }
                
                
            })
            .catch(error => console.log(error))
    }
}

export default { namespaced: true, state, getters, mutations, actions }

