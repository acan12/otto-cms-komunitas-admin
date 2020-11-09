import axios from 'axios'

const httpClient = axios.create({
    baseUrl: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': '*'
    }
})

export default httpClient